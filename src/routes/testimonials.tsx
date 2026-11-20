import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Section } from "@/components/Section";
import { VideoReels } from "@/components/VideoReels";
import { testimonials } from "@/lib/events";
import { TESTIMONIAL_REELS } from "@/lib/testimonialVideos";

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
    <>
      <Section
        eyebrow="Kind Words"
        title="Loved by our guests"
        subtitle="Videos and words from the families we've hosted."
        center
      >
        <VideoReels reels={TESTIMONIAL_REELS} />
      </Section>

      <section className="bg-secondary py-20">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] border border-border"
            >
              <Quote className="size-8 text-accent mb-3 opacity-80" aria-hidden />
              <blockquote className="font-display italic text-foreground/90 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="font-semibold text-primary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.event}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
