import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CategoryCarousel({ images, name }: { images: string[]; name: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;

  const next = useCallback(() => setI((p) => (p + 1) % total), [total]);
  const prev = () => setI((p) => (p - 1 + total) % total);

  useEffect(() => {
    if (paused || total < 2) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [paused, next, total]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] aspect-[4/3] w-full [direction:ltr] group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${name} ${idx + 1}`}
            loading="lazy"
            width={1280}
            height={960}
            className="min-w-full h-full object-cover"
          />
        ))}
      </div>

      {total > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 size-9 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 size-9 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow opacity-0 group-hover:opacity-100 transition"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "bg-accent w-6" : "bg-white/70 w-2"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
