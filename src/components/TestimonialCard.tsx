import type { TestimonialItem } from "@/lib/testimonialVideos";

/** A reel card: video on top, then the event label and one line of text in the same style. */
export function TestimonialCard({ item }: { item: TestimonialItem }) {
  // A guest comment is shown in quotes; otherwise a neutral caption (not a review) in the same style.
  const text = item.quote ? `\u201C${item.quote}\u201D` : item.caption;
  return (
    <figure className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
      {item.video && (
        <video
          src={`${item.video}#t=0.1`}
          controls
          playsInline
          preload="metadata"
          aria-label={`${item.event} video testimonial`}
          className="w-full aspect-[9/16] max-h-[28rem] bg-black object-cover"
        />
      )}
      <figcaption className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.event}</p>
        {text && (
          <p className="mt-2 font-display text-base italic leading-relaxed text-foreground/90">
            {text}
          </p>
        )}
        {item.name && <p className="mt-3 text-sm font-semibold text-primary">{item.name}</p>}
      </figcaption>
    </figure>
  );
}
