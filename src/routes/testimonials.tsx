import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TESTIMONIAL_ITEMS } from "@/lib/testimonialVideos";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Eternity Banquet" },
      {
        name: "description",
        content:
          "Hear from families who celebrated weddings, haldi, birthdays and baby showers at Eternity Banquet, in their own words and on video.",
      },
      { property: "og:title", content: "Testimonials — Eternity Banquet" },
      { property: "og:description", content: "Kind words and video moments from our guests." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <Section
      eyebrow="Kind Words"
      title="Loved by our guests"
      subtitle="Videos and words from the families we've hosted."
      center
    >
      <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIAL_ITEMS.map((t) => (
          <TestimonialCard key={`${t.event}-${t.video}`} item={t} />
        ))}
      </div>
    </Section>
  );
}
