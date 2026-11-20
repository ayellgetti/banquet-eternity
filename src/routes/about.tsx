import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { WhyChooseEternity } from "@/components/WhyChooseEternity";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eternity Banquet" },
      {
        name: "description",
        content:
          "Learn about Eternity Banquet — hosting weddings and events in Mumbai with luxury décor, premium catering and world-class amenities.",
      },
      { property: "og:title", content: "About Eternity Banquet" },
      { property: "og:description", content: "A legacy of creating unforgettable celebrations." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative h-[40vh] grid place-items-center">
        <img
          src="/decor/basic/03.webp"
          alt=""
          width={1280}
          height={960}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative text-center text-white container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
            About Us
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold">A legacy of elegance</h1>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eternity Banquet was founded with a single belief — that every celebration deserves a
              setting as remarkable as the occasion itself. For over a decade, families across
              Mumbai have trusted us with their most cherished moments: weddings, engagements,
              birthdays, anniversaries and corporate milestones.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              With grand halls accommodating up to{" "}
              <strong className="text-foreground">1000 guests</strong>, in-house catering, themed
              décor and a dedicated planning team, we make every event seamless, joyful and
              unforgettable.
            </p>
          </div>
          <img
            src="/decor/basic/03.webp"
            alt="Banquet hall seating"
            loading="lazy"
            width={1280}
            height={960}
            className="rounded-2xl shadow-[var(--shadow-elegant)]"
          />
        </div>
      </Section>

      <WhyChooseEternity className="bg-secondary" />
    </>
  );
}
