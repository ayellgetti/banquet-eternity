import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/LocationPage";
import { VENUES } from "@/lib/maps";
import { canonicalLinks, locationJsonLd, shareImageMeta } from "@/lib/site";

const venue = VENUES.find((v) => v.id === "borivali")!;

export const Route = createFileRoute("/banquet-hall-borivali")({
  head: () => ({
    meta: [
      { title: "Banquet Hall in Borivali West | Eternity Hospitality" },
      {
        name: "description",
        content:
          "Eternity Hospitality (Garjato Marathi) is a banquet hall in Rail Nagar, Borivali West, Mumbai, serving families for 6 years. 100–1000 guests. Call 99304 13300.",
      },
      { property: "og:title", content: "Banquet Hall in Borivali West | Eternity Hospitality" },
      {
        property: "og:description",
        content:
          "Eternity Hospitality (Garjato Marathi) is a banquet hall in Rail Nagar, Borivali West, Mumbai, serving families for 6 years. 100–1000 guests. Call 99304 13300.",
      },
      ...shareImageMeta("/decor/hero.webp"),
    ],
    links: canonicalLinks("/banquet-hall-borivali"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(locationJsonLd(venue)) }],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationPage
      venue={venue}
      h1="Banquet Hall in Borivali West"
      intro="Eternity Hospitality (Garjato Marathi) has served families and celebrations in Rail Nagar, Borivali West for six years, with in-house catering."
      detail="Our Borivali hall is in Rail Nagar, on Chandavarkar Road near Ashirwad Building, about five minutes from Borivali railway station. It hosts celebrations from 100 to 1000 guests, backed by the same in-house catering and planning team."
      showInclusions={false}
    />
  );
}
