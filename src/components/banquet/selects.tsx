import {
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function NativeSelect({
  id,
  value,
  onChange,
  children,
  className,
  "aria-label": ariaLabel,
  disabled,
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  disabled?: boolean;
}) {
  return (
    <select
      id={id}
      aria-label={ariaLabel}
      disabled={disabled}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {children}
    </select>
  );
}

export type SearchableOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

/** Options of one subheading; an empty name renders the options without a heading. */
export type SearchableGroup = {
  name: string;
  options: readonly SearchableOption[];
};

/** Select for long option lists: the field doubles as a filter over the options. */
export function SearchableSelect({
  id,
  value,
  onChange,
  groups,
  placeholder,
  emptyLabel = "No matching items",
  className,
  "aria-label": ariaLabel,
  disabled,
}: {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  groups: readonly SearchableGroup[];
  placeholder: string;
  emptyLabel?: string;
  className?: string;
  "aria-label"?: string;
  disabled?: boolean;
}) {
  const fallbackId = useId();
  const listId = `${id ?? fallbackId}-listbox`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [box, setBox] = useState<{ top: number; left: number; width: number; maxHeight: number }>();
  const listRef = useRef<HTMLUListElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  const selectedLabel = useMemo(() => {
    for (const group of groups) {
      const match = group.options.find((option) => option.value === value);
      if (match) return match.label;
    }
    return value;
  }, [groups, value]);

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const rows: { group: string; option: SearchableOption }[] = [];
    for (const group of groups) {
      for (const option of group.options) {
        if (needle && !option.label.toLowerCase().includes(needle)) continue;
        rows.push({ group: group.name, option });
      }
    }
    return rows;
  }, [groups, query]);

  /** The list floats over the page so a table's scroll container cannot clip it. */
  useLayoutEffect(() => {
    if (!open) return;
    const place = () => {
      const field = fieldRef.current?.getBoundingClientRect();
      if (!field) return;
      const below = window.innerHeight - field.bottom - 8;
      const above = field.top - 8;
      const upwards = below < 180 && above > below;
      const maxHeight = Math.max(120, Math.min(256, upwards ? above : below));
      setBox({
        top: upwards ? field.top - maxHeight - 4 : field.bottom + 4,
        left: field.left,
        width: field.width,
        maxHeight,
      });
    };
    place();
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const active = listRef.current?.querySelectorAll('[role="option"]')[activeIndex];
    if (active instanceof HTMLElement && typeof active.scrollIntoView === "function") {
      active.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex, open]);

  const firstEnabled = (from: number, step: number) => {
    for (let index = from; index >= 0 && index < matches.length; index += step) {
      if (!matches[index]?.option.disabled) return index;
    }
    return -1;
  };

  const openList = () => {
    if (disabled || open) return;
    setQuery("");
    setActiveIndex(Math.max(0, firstEnabled(0, 1)));
    setOpen(true);
  };

  const closeList = () => {
    setOpen(false);
    setQuery("");
  };

  const select = (option: SearchableOption) => {
    if (option.disabled) return;
    onChange(option.value);
    closeList();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      closeList();
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        openList();
        return;
      }
      const step = event.key === "ArrowDown" ? 1 : -1;
      const next = firstEnabled(activeIndex + step, step);
      if (next >= 0) setActiveIndex(next);
      return;
    }
    if (event.key === "Enter" && open) {
      const match = matches[activeIndex];
      if (match) {
        event.preventDefault();
        select(match.option);
      }
      return;
    }
    if (event.key === "Tab" && open) closeList();
  };

  return (
    <div
      ref={fieldRef}
      className="relative"
      onBlur={(event) => {
        if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
        closeList();
      }}
    >
      <input
        id={id}
        type="text"
        role="combobox"
        autoComplete="off"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-activedescendant={
          open && matches[activeIndex] ? `${listId}-option-${activeIndex}` : undefined
        }
        disabled={disabled}
        placeholder={placeholder}
        value={open ? query : selectedLabel}
        onFocus={openList}
        onClick={openList}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
          setActiveIndex(0);
        }}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      />
      {value && !disabled ? (
        <button
          type="button"
          aria-label={ariaLabel ? `Clear ${ariaLabel}` : "Clear selection"}
          onClick={() => {
            onChange("");
            closeList();
          }}
          className="absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded text-muted-foreground hover:text-foreground print:hidden"
        >
          <span aria-hidden="true">×</span>
        </button>
      ) : (
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground print:hidden"
        />
      )}
      {open && box
        ? createPortal(
            <ul
              id={listId}
              ref={listRef}
              role="listbox"
              aria-label={ariaLabel ? `${ariaLabel} options` : undefined}
              style={{
                top: box.top,
                left: box.left,
                minWidth: Math.max(box.width, 240),
                maxHeight: box.maxHeight,
              }}
              className="fixed z-50 overflow-y-auto rounded-md border border-input bg-popover py-1 text-sm shadow-lg print:hidden"
            >
              {matches.length === 0 ? (
                <li role="presentation" className="px-3 py-2 text-muted-foreground">
                  {emptyLabel}
                </li>
              ) : (
                matches.map((match, index) => {
                  const heading = match.group && match.group !== matches[index - 1]?.group;
                  return (
                    <li key={`${match.group}-${match.option.value}`} role="presentation">
                      {heading ? (
                        <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {match.group}
                        </p>
                      ) : null}
                      <div
                        id={`${listId}-option-${index}`}
                        role="option"
                        aria-selected={match.option.value === value}
                        aria-disabled={match.option.disabled || undefined}
                        onMouseDown={(event) => event.preventDefault()}
                        onMouseEnter={() => {
                          if (!match.option.disabled) setActiveIndex(index);
                        }}
                        onClick={() => select(match.option)}
                        className={cn(
                          "cursor-pointer px-3 py-1.5",
                          index === activeIndex && "bg-accent text-accent-foreground",
                          match.option.disabled && "cursor-not-allowed opacity-50",
                        )}
                      >
                        {match.option.label}
                      </div>
                    </li>
                  );
                })
              )}
            </ul>,
            document.body,
          )
        : null}
    </div>
  );
}
