export type Reel = { src: string; label: string };

/** Responsive grid of short vertical-friendly videos, loaded only on demand. */
export function VideoReels({ reels }: { reels: Reel[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {reels.map((r) => (
        <figure
          key={r.src}
          className="overflow-hidden rounded-2xl bg-black shadow-[var(--shadow-soft)]"
        >
          <video
            src={r.src}
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-[9/16] object-cover"
            aria-label={r.label}
          />
          <figcaption className="bg-card px-3 py-2 text-sm font-medium text-primary">
            {r.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
