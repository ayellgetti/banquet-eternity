import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import exterior from "@/assets/exterior.jpg";
import { Award, HeartHandshake, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eternity Banquet" },
      { name: "description", content: "Learn about Eternity Banquet — a decade of hosting weddings and events in Mumbai with luxury décor and impeccable service." },
      { property: "og:title", content: "About Eternity Banquet" },
      { property: "og:description", content: "A decade of creating unforgettable celebrations." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative h-[40vh] grid place-items-center">
        <img src={exterior} alt="" width={1280} height={960} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative text-center text-white container-x">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">About Us</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold">A legacy of elegance</h1>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Eternity Banquet was founded with a single belief — that every celebration deserves
              a setting as remarkable as the occasion itself. For over a decade, families across
              Mumbai have trusted us with their most cherished moments: weddings, engagements,
              birthdays, anniversaries and corporate milestones.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              With a grand hall accommodating <strong className="text-foreground">250 to 400 guests</strong>,
              in-house catering, themed décor and a dedicated planning team, we make every event seamless,
              joyful and unforgettable.
            </p>
          </div>
          <img src={exterior} alt="Banquet exterior" loading="lazy" width={1280} height={960} className="rounded-2xl shadow-[var(--shadow-elegant)]" />
        </div>
      </Section>

      <section className="bg-secondary py-20">
        <div className="container-x">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary">Why choose us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: Users, t: "250–400 Guests", d: "Spacious layout that scales for intimate or grand events." },
              { i: Sparkles, t: "Bespoke Décor", d: "Themed setups tailored to your vision." },
              { i: Award, t: "Award-winning Service", d: "A trained team that anticipates every need." },
              { i: HeartHandshake, t: "End-to-end Planning", d: "One point of contact from booking to send-off." },
            ].map((c) => (
              <div key={c.t} className="bg-background rounded-2xl p-6 shadow-[var(--shadow-soft)]">
                <div className="size-12 rounded-full grid place-items-center bg-accent/15 text-accent mb-3"><c.i className="size-6" /></div>
                <h3 className="font-display text-xl font-bold text-primary">{c.t}</h3>
                <p className="text-muted-foreground text-sm mt-2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
