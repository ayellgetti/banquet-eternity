import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-x flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-gradient-gold">Eternity</span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground">Banquet</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/enquiry" className="ml-3 btn-hero">Book Now</Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="py-3 text-base font-medium border-b border-border last:border-0"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
