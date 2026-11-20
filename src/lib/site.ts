import { VENUES } from "@/lib/maps";

/**
 * Public site origin (no trailing slash). Override with VITE_SITE_URL, e.g. for a
 * staging deploy; otherwise the production domain is used.
 */
export const SITE_URL: string = (
  import.meta.env.VITE_SITE_URL ?? "https://eternitybanquet.com"
).replace(/\/$/, "");

export const absoluteUrl = (path: string) => (SITE_URL ? `${SITE_URL}${path}` : undefined);

const PHONE = "+919930413300";

/** schema.org structured data: one EventVenue per hall. */
export const venueJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": VENUES.map((v) => ({
    "@type": "EventVenue",
    name:
      v.id === "charkop"
        ? "Eternity Banquet — Charkop"
        : "Eternity Hospitality (Garjato Marathi) — Borivali",
    url: SITE_URL || undefined,
    telephone: PHONE,
    hasMap: v.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: v.address,
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: v.pincode,
      addressCountry: "IN",
    },
  })),
});
