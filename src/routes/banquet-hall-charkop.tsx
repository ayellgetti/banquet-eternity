import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/LocationPage";
import { VENUES } from "@/lib/maps";
import { canonicalLinks, locationJsonLd, shareImageMeta } from "@/lib/site";

const venue = VENUES.find((v) => v.id === "charkop")!;

export const Route = createFileRoute("/banquet-hall-charkop")({
  head: () => ({
    meta: [
      { title: "Banquet Hall in Charkop, Kandivali West | Eternity Banquet" },
      {
        name: "description",
        content:
          "Eternity Banquet is an AC banquet hall in Charkop, Kandivali West, Mumbai for weddings, birthdays, haldi and engagements. Seats 250–400. Call 99304 13300.",
      },
      {
        property: "og:title",
        content: "Banquet Hall in Charkop, Kandivali West | Eternity Banquet",
      },
      {
        property: "og:description",
        content:
          "Eternity Banquet is an AC banquet hall in Charkop, Kandivali West, Mumbai for weddings, birthdays, haldi and engagements. Seats 250–400. Call 99304 13300.",
      },
      ...shareImageMeta("/decor/hero.webp"),
    ],
    links: canonicalLinks("/banquet-hall-charkop"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(locationJsonLd(venue)) }],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationPage
      venue={venue}
      h1="Banquet Hall in Charkop, Kandivali West"
      intro="Eternity Banquet is our newly opened, air-conditioned banquet hall in Charkop, Kandivali West, Mumbai, for weddings, haldi and sangeet, birthday parties, engagements, baby showers and corporate events."
      detail="Our Charkop hall is on the 2nd floor in Sahyadri Nagar, opposite the Hanuman Temple, in Kandivali West. It is an indoor, air-conditioned hall with seating for 250 to 400 guests, a separate dining area, a dedicated elevator and parking."
      showInclusions={true}
    />
  );
}
