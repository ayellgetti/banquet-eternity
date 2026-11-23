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
declare const __BUILD_DATE__: string | undefined;
/** Date of the last build (YYYY-MM-DD), used as the sitemap "lastmod". */
export const BUILD_DATE: string =
  typeof __BUILD_DATE__ === "string" ? __BUILD_DATE__ : new Date().toISOString().slice(0, 10);

export const INSTAGRAM_URL = "https://www.instagram.com/eternitybanquet";

/** <head> links for a public page: absolute canonical URL. */
export const canonicalLinks = (path: string) => [
  { rel: "canonical", href: `${SITE_URL}${path === "/" ? "/" : path}` },
];

/** Page-specific share image (Open Graph + Twitter). Paths live under /public. */
export const shareImageMeta = (imagePath: string) => [
  { property: "og:image", content: `${SITE_URL}${imagePath}` },
  { name: "twitter:image", content: `${SITE_URL}${imagePath}` },
];

const CAPACITY_MAX: Record<string, number> = { charkop: 400, borivali: 1000 };

export const venueJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": VENUES.map((v) => ({
    "@type": "EventVenue",
    name:
      v.id === "charkop"
        ? "Eternity Banquet — Charkop"
        : "Eternity Hospitality (Garjato Marathi) — Borivali",
    url: SITE_URL,
    image: `${SITE_URL}/decor/hero.webp`,
    telephone: PHONE,
    priceRange: "₹630–₹1,000 per plate",
    maximumAttendeeCapacity: CAPACITY_MAX[v.id],
    hasMap: v.mapsUrl,
    sameAs: [INSTAGRAM_URL],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
    ...(v.id === "charkop"
      ? { geo: { "@type": "GeoCoordinates", latitude: 19.2094992, longitude: 72.8274876 } }
      : {}),
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

/** schema.org FAQPage built from the same text shown in the on-page FAQ. */
export const faqJsonLd = (items: { q: string; text: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.text },
  })),
});
