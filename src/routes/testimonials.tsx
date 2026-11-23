import { createFileRoute } from "@tanstack/react-router";
import { canonicalLinks, shareImageMeta } from "@/lib/site";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TESTIMONIAL_ITEMS } from "@/lib/testimonialVideos";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Guest Reviews & Testimonials — Eternity Banquet" },
      {
        name: "description",
        content:
          "Watch and read what families say about their birthday, haldi, engagement, baby shower and corporate events at Eternity Banquet, Mumbai.",
      },
      { property: "og:title", content: "Testimonials — Eternity Banquet" },
      { property: "og:description", content: "Kind words and video moments from our guests." },
      ...shareImageMeta("/decor/engagement/02.webp"),
    ],
    links: canonicalLinks("/testimonials"),
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <Section
      h1
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
