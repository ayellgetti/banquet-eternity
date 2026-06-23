import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Section } from "@/components/Section";
import { galleryImages, eventCategories, type EventCategory } from "@/lib/events";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Eternity Banquet" },
      { name: "description", content: "Browse photos of weddings, birthdays, engagements, baby showers, anniversaries and corporate events at Eternity Banquet." },
      { property: "og:title", content: "Eternity Banquet Gallery" },
      { property: "og:description", content: "Moments from our most memorable events." },
    ],
  }),
  component: Gallery,
});

type Filter = "All" | EventCategory | "Venue";
const filters: Filter[] = ["All", ...eventCategories.map((e) => e.name), "Venue"];

function Gallery() {
  const [active, setActive] = useState<Filter>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const items = active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);

  const close = useCallback(() => setLightboxIdx(null), []);
  const next = useCallback(
    () => setLightboxIdx((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setLightboxIdx((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  // Auto-advance when open and not paused
  useEffect(() => {
    if (lightboxIdx === null || paused) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [lightboxIdx, paused, next]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, close, next, prev]);

  const current = lightboxIdx !== null ? items[lightboxIdx] : null;

  return (
    <Section eyebrow="Our Work" title="Gallery" subtitle="Filter by event type to see moments from our most memorable celebrations." center>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => { setActive(f); setLightboxIdx(null); }}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
              active === f
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-border hover:border-accent hover:text-accent"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((g, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="group relative overflow-hidden rounded-2xl aspect-square shadow-[var(--shadow-soft)]"
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              width={1280}
              height={1280}
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-left opacity-0 group-hover:opacity-100 transition">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{g.category}</p>
              <p className="font-medium">{g.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 bg-black/90 grid place-items-center p-4 animate-in fade-in duration-300"
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-4 right-4 size-11 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 text-white"
          >
            <X />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 size-12 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow"
          >
            <ChevronLeft />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative max-h-[90vh] max-w-[95vw]"
          >
            <img
              key={lightboxIdx}
              src={current.src}
              alt={current.alt}
              className="max-h-[90vh] max-w-[95vw] rounded-xl animate-in fade-in duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-xl p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{current.category}</p>
              <p className="font-medium">{current.alt}</p>
              <p className="text-xs text-white/70 mt-1">{(lightboxIdx ?? 0) + 1} / {items.length}</p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 size-12 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </Section>
  );
}
