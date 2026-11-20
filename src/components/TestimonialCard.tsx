import { Quote } from "lucide-react";
import type { TestimonialItem } from "@/lib/testimonialVideos";

/** A testimonial: video on top (if any) with the guest's comment attached below. */
export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
      {item.video && (
        <video
          src={item.video}
          controls
          playsInline
          preload="metadata"
          aria-label={`${item.event} video testimonial`}
          className="w-full aspect-[9/16] max-h-[28rem] bg-black object-cover"
        />
      )}
      <figcaption className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.event}</p>
        {item.quote && (
          <>
            <Quote className="mt-3 size-6 text-accent opacity-80" aria-hidden />
            <blockquote className="mt-2 font-display italic leading-relaxed text-foreground/90">
              “{item.quote}”
            </blockquote>
          </>
        )}
        {item.name && <p className="mt-4 font-semibold text-primary">{item.name}</p>}
      </figcaption>
    </figure>
  );
}
