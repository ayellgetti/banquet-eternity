import { createFileRoute, Link } from "@tanstack/react-router";
import { canonicalLinks, shareImageMeta } from "@/lib/site";
import { Section } from "@/components/Section";
import { EventsCarousel } from "@/components/EventsCarousel";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { eventCategories } from "@/lib/events";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Wedding & Event Venue in Mumbai — Eternity Banquet" },
      {
        name: "description",
        content:
          "Weddings, haldi, birthdays, engagements, baby showers, anniversaries and corporate events at Eternity Banquet in Kandivali West and Borivali, Mumbai.",
      },
      { property: "og:title", content: "Events at Eternity Banquet" },
      { property: "og:description", content: "Every occasion, beautifully done." },
      ...shareImageMeta("/decor/birthday/08.webp"),
    ],
    links: canonicalLinks("/events"),
  }),
  component: Events,
});

const inclusions = [
  "Decorated stage & mandap",
  "Multi-cuisine in-house catering",
  "Professional sound & lighting",
  "Valet parking for 100+ vehicles",
  "Bridal & green rooms",
  "Dedicated event manager",
];

function Events() {
  return (
    <>
      <Section h1 eyebrow="Our Specialties" title="Events we host" center>
        <EventsCarousel />
      </Section>

      <section className="pb-20">
        <div className="container-x grid gap-10">
          {eventCategories.map((e, idx) => (
            <div
              key={e.name}
              className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 ? "md:[direction:rtl]" : ""}`}
            >
              <CategoryCarousel images={e.images} name={e.name} />
              <div className="[direction:ltr]">
                <p className="text-xs uppercase tracking-[0.25em] text-gold-text font-semibold mb-2">
                  Specialty 0{idx + 1}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
                  {e.name}
                </h3>
                <p className="text-muted-foreground text-lg">{e.description}</p>
                <Link
                  to="/enquiry"
                  className="mt-5 inline-flex items-center gap-2 text-gold-text font-semibold hover:underline"
                >
                  Enquire for {e.name} <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-x">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-primary">What's Included</h2>
            <p className="text-muted-foreground mt-3">
              Every booking comes with the essentials covered.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {inclusions.map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-[var(--shadow-soft)]"
              >
                <Check className="size-5 text-accent shrink-0" />
                <span className="font-medium">{i}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/enquiry" className="btn-hero">
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
