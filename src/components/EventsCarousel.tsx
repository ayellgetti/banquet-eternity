import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { eventCategories } from "@/lib/events";

export function EventsCarousel() {
  const [i, setI] = useState(0);
  const total = eventCategories.length;
  const next = useCallback(() => setI((p) => (p + 1) % total), [total]);
  const prev = () => setI((p) => (p - 1 + total) % total);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {eventCategories.map((e) => (
          <div key={e.name} className="min-w-full relative aspect-[16/9] md:aspect-[21/9]">
            <img
              src={e.image}
              alt={e.name}
              loading="lazy"
              width={1280}
              height={960}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-12">
              <div className="max-w-xl text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-accent mb-2 font-semibold">
                  Specialty
                </p>
                <h3 className="font-display text-3xl md:text-5xl font-bold">{e.name}</h3>
                <p className="mt-3 text-white/85 md:text-lg">{e.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 size-11 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 size-11 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {eventCategories.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "bg-accent w-8" : "bg-white/60 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
