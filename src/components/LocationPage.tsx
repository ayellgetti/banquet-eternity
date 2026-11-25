import { Link } from "@tanstack/react-router";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { eventCategories } from "@/lib/events";
import { VENUES, type VenueLocation } from "@/lib/maps";
import { PACKAGE_INCLUDES, PLATE_PACKAGES, formatInr } from "@/lib/pricing";
import { VENUE_PATH } from "@/lib/site";

const PHONE = "9930413300";

type Props = {
  venue: VenueLocation;
  /** Visible <h1>, written the way people search, e.g. "Banquet Hall in Charkop, Kandivali West". */
  h1: string;
  intro: string;
  /** Short paragraph explaining what is included at this hall. */
  detail: string;
  /** Only Charkop's inclusions are listed on the site; other halls link to Packages. */
  showInclusions?: boolean;
};

export function LocationPage({ venue, h1, intro, detail, showInclusions }: Props) {
  const other = VENUES.find((v) => v.id !== venue.id)!;
  return (
    <>
      <Section h1 eyebrow={venue.badge} title={h1} subtitle={intro}>
        <div className="flex flex-wrap gap-3 -mt-4 mb-10">
          <Link to="/enquiry" className="btn-hero">
            <CalendarCheck className="size-4" aria-hidden /> Book this hall
          </Link>
          <a
            href={`tel:+91${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary"
          >
            <Phone className="size-4" aria-hidden /> Call +91 99304 13300
          </a>
          <a
            href={`https://wa.me/91${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-primary"
          >
            <WhatsAppIcon className="size-4" /> WhatsApp
          </a>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">
              {venue.name} — {venue.area.split(",")[0]} banquet hall
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{detail}</p>
            {venue.capacity && (
              <p className="text-foreground">
                <strong>Capacity:</strong> {venue.capacity}
              </p>
            )}
            <p className="text-foreground">
              <strong>Hours:</strong> 9:00 AM – 9:00 PM, every day
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-primary">Find the hall</h2>
            <p className="text-muted-foreground leading-relaxed">{venue.address}</p>
            <ul className="space-y-1 text-muted-foreground">
              {venue.landmarks.map((l) => (
                <li key={l} className="flex gap-2">
                  <MapPin className="mt-1 size-4 shrink-0 text-gold-text" aria-hidden />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-gold-text hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="mt-10 aspect-[16/8] overflow-hidden rounded-2xl border border-border">
          <iframe
            title={`${venue.name} map — ${venue.area}`}
            src={venue.embedUrl}
            className="size-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      <section className="bg-secondary py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary">
              {showInclusions
                ? `Weddings, parties and events at our ${venue.area.split(",")[0]} hall`
                : "Events we host at Eternity banquet halls"}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {eventCategories.map((e) => (
                <li
                  key={e.name}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
                >
                  {e.name}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              See photos in the{" "}
              <Link to="/gallery" className="text-gold-text underline underline-offset-4">
                gallery
              </Link>{" "}
              or read{" "}
              <Link to="/events" className="text-gold-text underline underline-offset-4">
                what we host
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Packages and what&apos;s included</h2>
            {showInclusions && (
              <ul className="mt-5 grid gap-1.5 sm:grid-cols-2 text-muted-foreground">
                {PACKAGE_INCLUDES.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gold-text" aria-hidden>
                      •
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Plate packages start at {formatInr(PLATE_PACKAGES[0].basePrice)} per plate (minimum
              100 guests). Decoration is not included and is charged separately. Full details are on
              the{" "}
              <Link to="/packages" className="text-gold-text underline underline-offset-4">
                packages page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Section>
        <p className="text-muted-foreground text-lg">
          Looking at our other hall?{" "}
          <Link
            to={VENUE_PATH[other.id]}
            className="font-semibold text-gold-text underline underline-offset-4"
          >
            Banquet hall in {other.area.split(",")[0]}
          </Link>{" "}
          — {other.capacity}.
        </p>
      </Section>
    </>
  );
}
