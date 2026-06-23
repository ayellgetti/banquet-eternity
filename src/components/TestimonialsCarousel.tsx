import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/events";

export function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const current = testimonials[i];
  return (
    <div className="max-w-3xl mx-auto text-center">
      <Quote className="size-12 text-accent mx-auto mb-6 opacity-80" />
      <p
        key={i}
        className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-display italic animate-in fade-in duration-700"
      >
        "{current.quote}"
      </p>
      <div className="mt-6">
        <p className="font-semibold text-primary">{current.name}</p>
        <p className="text-sm text-muted-foreground">{current.event}</p>
      </div>
      <div className="flex gap-2 justify-center mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Testimonial ${idx + 1}`}
            className={`size-2 rounded-full transition ${
              i === idx ? "bg-accent w-6" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
