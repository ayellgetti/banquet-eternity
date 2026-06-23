import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Sparkles, MapPin, ArrowRight, Utensils, Music, Camera } from "lucide-react";
import heroHall from "@/assets/hero-hall.jpg";
import { Section } from "@/components/Section";
import { EventsCarousel } from "@/components/EventsCarousel";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { eventCategories } from "@/lib/events";
import { MAPS_EMBED_URL, MAPS_URL } from "@/lib/maps";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eternity Banquet — Premium Wedding & Event Venue in Mumbai" },
      { name: "description", content: "Host weddings, birthdays, engagements and corporate events at Eternity Banquet — capacity 250 to 400 guests with luxury décor & catering." },
      { property: "og:title", content: "Eternity Banquet" },
      { property: "og:description", content: "Elegant venue for unforgettable celebrations — 250 to 400 guests." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center">
        <img
          src={heroHall}
          alt="Eternity Banquet hall"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
        <div className="container-x relative text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4">
            Mumbai's Finest Banquet
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold max-w-3xl leading-[1.05]">
            Where every <span className="text-gradient-gold">celebration</span> becomes a memory.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl">
            A grand venue for 250 to 400 guests — weddings, engagements, birthdays, corporate events and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/enquiry" className="btn-hero">
              Book Your Date <ArrowRight className="size-4" />
            </Link>
            <Link to="/gallery" className="btn-outline-gold text-white border-white/70 hover:bg-white/10">
              View Gallery
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { icon: Users, label: "250–400", sub: "Guest capacity" },
              { icon: Sparkles, label: "10+ Years", sub: "Experience" },
              { icon: Utensils, label: "Multi-cuisine", sub: "In-house catering" },
              { icon: MapPin, label: "Kandivali W", sub: "Prime location" },
            ].map((s) => (
              <div key={s.label} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
                <s.icon className="size-5 text-accent mb-2" />
                <div className="font-semibold text-lg">{s.label}</div>
                <div className="text-xs text-white/70">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events carousel */}
      <Section eyebrow="What We Host" title="Events we make unforgettable" center>
        <EventsCarousel />
        <div className="mt-10 text-center">
          <Link to="/events" className="btn-outline-gold">
            Explore all events <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* Services strip */}
      <section className="bg-secondary py-16">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Utensils, t: "In-house Catering", d: "Multi-cuisine menus crafted by experienced chefs — vegetarian, Jain, non-veg & live counters." },
            { icon: Music, t: "Sound & Lighting", d: "Professional A/V setup, DJ console, stage lighting and uplighters included." },
            { icon: Camera, t: "Decor & Planning", d: "Themed décor, mandap design and an event manager to handle every detail." },
          ].map((s) => (
            <div key={s.t} className="bg-background rounded-2xl p-7 shadow-[var(--shadow-soft)]">
              <div className="size-12 rounded-full grid place-items-center bg-accent/15 text-accent mb-4">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-2">{s.t}</h3>
              <p className="text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Event categories grid */}
      <Section eyebrow="Specialties" title="Every occasion, beautifully done">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCategories.map((e) => (
            <Link
              key={e.name}
              to="/events"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-[var(--shadow-soft)]"
            >
              <img
                src={e.image}
                alt={e.name}
                loading="lazy"
                width={1280}
                height={960}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-display text-2xl font-bold">{e.name}</h3>
                <p className="text-sm text-white/80 mt-1 line-clamp-2">{e.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <section className="bg-secondary py-20">
        <div className="container-x">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Kind Words</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Loved by our guests</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Location */}
      <Section eyebrow="Find Us" title="Conveniently located in the heart of the city">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-muted-foreground text-lg">
              Eternity Banquet is located in Kandivali West, Mumbai, with easy access from all major parts of the city and ample parking nearby.
            </p>
            <div className="space-y-3 text-foreground">
              <div className="flex gap-3"><MapPin className="size-5 text-accent shrink-0 mt-0.5" /> Plot No. 93-A, 2nd Floor, Bank Of Baroda, Opp Sahyadri Nagar Hanuman Temple, Charkop Gaon, Kandivali West, Mumbai 400068</div>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-hero">
              Get Directions
            </a>
          </div>
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] aspect-[16/10]">
            <iframe
              title="Eternity Banquet location"
              src={MAPS_EMBED_URL}
              className="size-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
