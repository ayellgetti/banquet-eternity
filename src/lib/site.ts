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

/** Landing page path for each venue. */
export const VENUE_PATH: Record<string, string> = {
  charkop: "/banquet-hall-charkop",
  borivali: "/banquet-hall-borivali",
};

const VENUE_SEO: Record<
  string,
  { name: string; alt: string[]; description: string; area: string }
> = {
  charkop: {
    name: "Eternity Banquet Hall — Charkop, Kandivali West",
    alt: ["Eternity Banquet", "Eternity Banquet Charkop", "Banquet hall in Charkop"],
    description:
      "Air-conditioned banquet hall in Charkop, Kandivali West, Mumbai for weddings, haldi, birthday parties, engagements, baby showers and corporate events. Seats 250 to 400 guests.",
    area: "Charkop, Kandivali West",
  },
  borivali: {
    name: "Eternity Hospitality (Garjato Marathi) Banquet Hall — Borivali West",
    alt: ["Eternity Hospitality", "Garjato Marathi", "Banquet hall in Borivali West"],
    description:
      "Banquet hall in Rail Nagar, Borivali West, Mumbai, serving families for six years. Weddings, birthday parties and events for 100 to 1000 guests.",
    area: "Borivali West",
  },
};

export const venueSchema = (v: (typeof VENUES)[number]) => {
  const seo = VENUE_SEO[v.id];
  return {
    "@type": "EventVenue",
    "@id": `${SITE_URL}${VENUE_PATH[v.id]}#venue`,
    name: seo.name,
    alternateName: seo.alt,
    description: seo.description,
    url: `${SITE_URL}${VENUE_PATH[v.id]}`,
    image: `${SITE_URL}/decor/hero.webp`,
    telephone: PHONE,
    priceRange: "₹630–₹1,000 per plate",
    maximumAttendeeCapacity: CAPACITY_MAX[v.id],
    areaServed: [seo.area, "Mumbai"],
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
  };
};

export const venueJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": VENUES.map(venueSchema),
});

/** Venue + breadcrumb data for a location landing page. */
export const locationJsonLd = (v: (typeof VENUES)[number]) => ({
  "@context": "https://schema.org",
  "@graph": [
    venueSchema(v),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: VENUE_SEO[v.id].name,
          item: `${SITE_URL}${VENUE_PATH[v.id]}`,
        },
      ],
    },
  ],
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
