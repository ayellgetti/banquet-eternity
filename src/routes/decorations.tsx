import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Section } from "@/components/Section";
import { VideoReels } from "@/components/VideoReels";
import manifest from "@/lib/decorations.json";

export const Route = createFileRoute("/decorations")({
  head: () => ({
    meta: [
      { title: "Decoration Gallery — Eternity Banquet" },
      {
        name: "description",
        content:
          "Stage and hall decoration ideas for haldi, baby showers, birthdays, engagements, anniversaries and naming ceremonies at Eternity Banquet.",
      },
      { property: "og:title", content: "Decoration Gallery — Eternity Banquet" },
      { property: "og:description", content: "Decoration setups from our past celebrations." },
    ],
  }),
  component: Decorations,
});

type Photo = { src: string; thumb: string; w: number; h: number };
const PHOTOS = manifest as Record<string, Photo[]>;
const LABELS: Record<string, string> = { Basic: "Basic Decor", Haldi: "Haldi" };
const categories = Object.keys(PHOTOS);
const PAGE = 24;

function Decorations() {
  const [active, setActive] = useState(categories[0]);
  const [shown, setShown] = useState(PAGE);
  const [open, setOpen] = useState<number | null>(null);
  const items = PHOTOS[active];

  const pick = (c: string) => {
    setActive(c);
    setShown(PAGE);
    setOpen(null);
  };
  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(
    () => setOpen((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, next, prev]);

  return (
    <Section
      eyebrow="Decorations"
      title="Decoration ideas"
      subtitle="Setups from our past celebrations. Tell us what you like and we'll recreate or customise it."
      center
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => pick(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              active === c
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:border-accent"
            }`}
          >
            {LABELS[c] ?? c} <span className="opacity-60">({PHOTOS[c].length})</span>
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
        {items.slice(0, shown).map((p, i) => (
          <button
            key={p.src}
            onClick={() => setOpen(i)}
            className="block w-full overflow-hidden rounded-xl shadow-[var(--shadow-soft)] break-inside-avoid"
          >
            <img
              src={p.thumb}
              alt={`${LABELS[active] ?? active} decoration ${i + 1}`}
              loading="lazy"
              width={480}
              height={Math.round((480 * p.h) / p.w)}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {shown < items.length && (
        <div className="flex justify-center mt-10">
          <button onClick={() => setShown((s) => s + PAGE)} className="btn-hero">
            Show more ({items.length - shown} left)
          </button>
        </div>
      )}

      <div className="mt-16 text-left">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Decoration in motion</h3>
        <div className="max-w-xl mx-auto">
          <VideoReels
            reels={[
              { src: "/videos/birthday-decor.mp4", label: "Birthday décor" },
              { src: "/videos/naming-decor.mp4", label: "Naming ceremony décor" },
            ]}
          />
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button aria-label="Close" onClick={close} className="absolute top-4 right-4 text-white">
            <X className="size-8" />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 md:left-6 text-white"
          >
            <ChevronLeft className="size-10" />
          </button>
          <img
            src={items[open].src}
            alt={`${LABELS[active] ?? active} decoration ${open + 1}`}
            className="max-h-[88vh] max-w-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 md:right-6 text-white"
          >
            <ChevronRight className="size-10" />
          </button>
        </div>
      )}
    </Section>
  );
}
