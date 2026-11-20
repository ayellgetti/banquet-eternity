import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  CalendarCheck,
  Home,
  Images,
  Menu,
  Phone,
  Receipt,
  Sparkles,
  UserRound,
  X,
  Quote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BrandMarkLink } from "@/components/BrandMark";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
  exact?: boolean;
};

const mainNav: NavItem[] = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/about", label: "About", icon: UserRound },
  { to: "/packages", label: "Packages", icon: Receipt },
  { to: "/enquiry", label: "Enquiry", icon: CalendarCheck },
  { to: "/contact", label: "Contact Us", icon: Phone },
];

const exploreNav: NavItem[] = [
  { to: "/events", label: "Events", icon: Sparkles },
  { to: "/gallery", label: "Gallery", icon: Images },
  { to: "/testimonials", label: "Testimonials", icon: Quote },
];

/** Slim top bar: Enquiry is the Book Now button; Testimonials live on the home page and footer. */
const desktopNav: NavItem[] = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/about", label: "About", icon: UserRound },
  { to: "/events", label: "Events", icon: Sparkles },
  { to: "/packages", label: "Packages", icon: Receipt },
  { to: "/gallery", label: "Gallery", icon: Images },
  { to: "/contact", label: "Contact", icon: Phone },
];

function useActivePath() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
}

function DesktopNavLink({
  item,
  isActive,
  featured,
}: {
  item: NavItem;
  isActive: boolean;
  featured?: boolean;
}) {
  return (
    <Link
      to={item.to}
      activeOptions={{ exact: item.exact }}
      className={cn(
        "group relative whitespace-nowrap px-2.5 py-2.5 xl:px-4 rounded-full font-display text-[0.95rem] xl:text-base font-semibold tracking-wide transition-all duration-200",
        isActive
          ? "text-primary bg-accent/15 shadow-[inset_0_0_0_1px_oklch(0.74_0.13_80/0.35)]"
          : "text-foreground/80 hover:text-primary hover:bg-accent/8",
        featured && !isActive && "text-accent hover:text-primary",
      )}
    >
      <span className={cn("relative z-10", isActive && "text-gradient-gold")}>{item.label}</span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-4 -bottom-0.5 h-[3px] rounded-full bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-200",
          isActive
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 group-hover:opacity-90 group-hover:scale-100",
        )}
      />
    </Link>
  );
}

function MobileNavLink({
  item,
  isActive,
  onNavigate,
  featured,
}: {
  item: NavItem;
  isActive: boolean;
  onNavigate: () => void;
  featured?: boolean;
}) {
  const Icon = item.icon;
  return (
    <SheetClose asChild>
      <Link
        to={item.to}
        onClick={onNavigate}
        activeOptions={{ exact: item.exact }}
        className={cn(
          "relative flex items-center gap-4 min-h-14 px-4 rounded-xl font-display text-lg font-semibold tracking-wide transition-all duration-200",
          "hover:bg-accent/8 active:scale-[0.99]",
          isActive
            ? "bg-accent/12 text-primary shadow-sm ring-1 ring-accent/40"
            : featured
              ? "text-accent"
              : "text-foreground/85",
        )}
      >
        {isActive && (
          <span
            className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-accent"
            aria-hidden
          />
        )}
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors",
            isActive
              ? "bg-accent/20 text-accent shadow-[inset_0_0_0_1px_oklch(0.74_0.13_80/0.25)]"
              : featured
                ? "bg-accent/10 text-accent"
                : "bg-muted text-muted-foreground",
          )}
        >
          <Icon className="size-5" strokeWidth={isActive ? 2.25 : 2} />
        </span>
        <span className={cn("tracking-tight", isActive && "text-gradient-gold")}>{item.label}</span>
        {isActive && (
          <span
            className="ml-auto size-2.5 rounded-full bg-accent shadow-[0_0_8px_oklch(0.74_0.13_80/0.6)]"
            aria-hidden
          />
        )}
      </Link>
    </SheetClose>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isActive = useActivePath();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border/80 bg-background/92 shadow-[var(--shadow-soft)] backdrop-blur-xl"
          : "border-transparent bg-background/75 backdrop-blur-md",
      )}
    >
      <div className="h-1 bg-gradient-to-r from-transparent via-accent/80 to-transparent" />

      <div className="container-x flex items-center justify-between gap-4 py-3 sm:py-3.5 min-h-[4.25rem] sm:min-h-[4.75rem]">
        <BrandMarkLink plain imageClassName="h-14 sm:h-[4.5rem]" />

        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main navigation">
          {desktopNav.map((item) => (
            <DesktopNavLink
              key={item.to}
              item={item}
              isActive={isActive(item.to, item.exact)}
              featured={item.to === "/packages"}
            />
          ))}

          <Link
            to="/enquiry"
            className="ml-2 xl:ml-6 btn-hero whitespace-nowrap text-sm py-2.5 px-6 hover:[transform:translateY(-2px)] hover:[box-shadow:var(--shadow-elegant)]"
          >
            Book Now
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/enquiry"
            className="btn-hero text-xs sm:text-sm py-2 px-4 sm:px-5 shadow-none sm:shadow-[var(--shadow-soft)]"
          >
            Book Now
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className={cn(
                  "relative flex size-11 items-center justify-center rounded-xl border border-border/80 bg-card/80",
                  "text-foreground shadow-sm transition-colors hover:bg-secondary",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                )}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <Menu
                  className={cn("size-5 transition-all duration-200", open && "scale-0 opacity-0")}
                />
                <X
                  className={cn(
                    "absolute size-5 transition-all duration-200",
                    open ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  )}
                />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[min(100vw-1rem,22rem)] flex-col gap-0 border-l border-border/80 p-0 sm:max-w-sm"
            >
              <SheetTitle className="sr-only">Site navigation</SheetTitle>

              <div className="border-b border-border/80 bg-secondary/30 px-5 py-5">
                <BrandMarkLink plain imageClassName="h-16" />
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Weddings, celebrations &amp; corporate events in Mumbai.
                </p>
              </div>

              <nav
                className="flex-1 overflow-y-auto px-3 py-4 space-y-1"
                aria-label="Mobile navigation"
              >
                <p className="px-4 pb-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent/90">
                  Menu
                </p>
                {mainNav.map((item) => (
                  <MobileNavLink
                    key={item.to}
                    item={item}
                    isActive={isActive(item.to, item.exact)}
                    onNavigate={() => setOpen(false)}
                    featured={item.to === "/packages"}
                  />
                ))}

                <p className="px-4 pt-4 pb-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent/90">
                  Explore
                </p>
                {exploreNav.map((item) => (
                  <MobileNavLink
                    key={item.to}
                    item={item}
                    isActive={isActive(item.to, item.exact)}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </nav>

              <div className="border-t border-border/80 bg-muted/30 p-4 space-y-3">
                <SheetClose asChild>
                  <Link
                    to="/enquiry"
                    className="btn-hero w-full justify-center text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Book Your Event
                  </Link>
                </SheetClose>
                <a
                  href="tel:+919930413300"
                  className="flex items-center justify-center gap-2 rounded-full border border-border bg-background py-3 text-sm font-medium text-foreground/90 hover:bg-secondary transition-colors"
                >
                  <Phone className="size-4 text-accent" />
                  Call +91 99304 13300
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
