import { MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERITAGE_YEARS_BORIVALI, type VenueLocation, VENUES } from "@/lib/maps";

export function VenuesIntro({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-accent/30 bg-secondary/60 px-5 py-5 md:px-6 md:py-6",
        className,
      )}
    >
      <div className="flex gap-3">
        <Sparkles className="size-5 shrink-0 text-accent mt-0.5" aria-hidden />
        <div className="space-y-2">
          <p className="font-display text-lg md:text-xl font-semibold text-primary leading-snug">
            Two venues, one trusted name
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We have been serving families and celebrations in Borivali for{" "}
            <strong className="font-semibold text-foreground">{HERITAGE_YEARS_BORIVALI} years</strong>{" "}
            at <strong className="font-semibold text-foreground">Eternity Hospitality (Garjato Marathi)</strong>.
            Our grand new hall —{" "}
            <strong className="font-semibold text-foreground">Eternity Banquet, Charkop</strong> — is now open
            in Kandivali West with the same warmth, catering and event expertise you already know.
          </p>
        </div>
      </div>
    </div>
  );
}

type VenueCardProps = {
  venue: VenueLocation;
  showMap?: boolean;
  compact?: boolean;
};

export function VenueCard({ venue, showMap = true, compact = false }: VenueCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden",
        compact ? "h-full" : "",
      )}
    >
      <div className="p-5 md:p-6 space-y-4 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <span
              className={cn(
                "inline-flex rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em]",
                venue.badgeTone === "new"
                  ? "bg-accent/15 text-accent"
                  : "bg-primary/8 text-primary",
              )}
            >
              {venue.badge}
            </span>
            <h3 className="font-display text-2xl font-bold text-primary mt-2">{venue.name}</h3>
            <p className="text-sm font-medium text-accent mt-0.5">{venue.tagline}</p>
            <p className="text-sm text-muted-foreground">{venue.area}</p>
          </div>
          {venue.capacity && (
            <p className="text-xs font-medium text-muted-foreground rounded-lg border border-border px-2.5 py-1.5 shrink-0">
              {venue.capacity}
            </p>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{venue.address}</p>

        <ul className="space-y-1 text-sm text-muted-foreground">
          {venue.landmarks.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-accent shrink-0" aria-hidden>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            compact
              ? "inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              : "btn-hero inline-flex text-sm py-2.5 px-5 hover:[transform:translateY(-2px)] hover:[box-shadow:var(--shadow-elegant)]",
          )}
        >
          <MapPin className="size-4" />
          Open in Google Maps
        </a>
      </div>

      {showMap && (
        <div className={cn("border-t border-border bg-muted/20", compact ? "h-52" : "aspect-[16/10]")}>
          <iframe
            title={`${venue.name} — ${venue.area}`}
            src={venue.embedUrl}
            className="size-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </article>
  );
}

export function VenuesSection({
  title = "Our venues",
  subtitle,
  showIntro = true,
  showMaps = true,
  compact = false,
}: {
  title?: string;
  subtitle?: string;
  showIntro?: boolean;
  showMaps?: boolean;
  compact?: boolean;
}) {
  return (
    <div className="space-y-8">
      {(title || subtitle) && (
        <div className={subtitle ? "max-w-3xl" : "text-center max-w-3xl mx-auto"}>
          {title && <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">{title}</h2>}
          {subtitle && <p className="text-muted-foreground text-lg mt-3 leading-relaxed">{subtitle}</p>}
        </div>
      )}
      {showIntro && <VenuesIntro />}
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {VENUES.map((venue) => (
          <VenueCard key={venue.id} venue={venue} showMap={showMaps} compact={compact} />
        ))}
      </div>
    </div>
  );
}
