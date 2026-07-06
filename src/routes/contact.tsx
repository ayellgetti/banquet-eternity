import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/Section";
import { Phone, Clock, Instagram, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { toast } from "sonner";
import { SOCIAL_LINKS } from "@/components/SiteFooter";
import { VenuesSection } from "@/components/VenueLocations";
import { HERITAGE_YEARS_BORIVALI } from "@/lib/maps";
import qrInstagram from "@/assets/qr-instagram.png";
import qrMaps from "@/assets/qr-maps.png";
import qrWhatsapp from "@/assets/qr-whatsapp.png";

const CONTACTS = [
  { name: "Akash Y", initials: "AY", phone: "9930413300", display: "+91 99304 13300" },
  { name: "Harshal J", initials: "HJ", phone: "9930143300", display: "+91 99301 43300" },
] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Eternity Banquet" },
      { name: "description", content: `Contact Eternity Banquet — ${HERITAGE_YEARS_BORIVALI} years in Borivali (Garjato Marathi) and our new Charkop hall in Kandivali West. Open daily 9am–9pm.` },
      { property: "og:title", content: "Contact Eternity Banquet" },
      { property: "og:description", content: "Get in touch — we'd love to host your next celebration." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <>
      <Section
        eyebrow="Our Locations"
        title="Visit either of our venues"
        subtitle={`Trusted in Borivali for ${HERITAGE_YEARS_BORIVALI} years — and now welcoming guests at our newly opened Charkop hall.`}
        center
      >
        <VenuesSection showIntro title="" subtitle="" />
      </Section>

      <Section eyebrow="Reach Us" title="Contact" subtitle="Call, WhatsApp or send us a message — we're happy to help with either venue." center>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <div className="bg-card rounded-2xl border border-border shadow-[var(--shadow-soft)] overflow-hidden">
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="flex items-center gap-4 p-5">
                  <div className="size-12 shrink-0 rounded-full grid place-items-center bg-accent/15 text-accent">
                    <Clock className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Hours</p>
                    <p className="font-semibold text-primary mt-0.5">9:00 AM – 9:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-0.5">Open every day</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-accent/5">
                  <div className="size-12 shrink-0 rounded-full grid place-items-center bg-accent/15 text-accent">
                    <Phone className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Quick Call</p>
                    <p className="font-semibold text-primary mt-0.5">Mon – Sun</p>
                    <p className="text-sm text-muted-foreground mt-0.5">Call or WhatsApp anytime</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">Contact Numbers</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {CONTACTS.map((p) => (
                    <div
                      key={p.name}
                      className="group flex flex-col gap-3 p-4 rounded-xl border border-border bg-background/60 hover:border-accent/50 hover:bg-background transition"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="size-11 shrink-0 rounded-full grid place-items-center bg-accent/15 text-accent font-semibold text-sm">
                          {p.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-primary truncate">{p.name}</p>
                          <a
                            href={`tel:+91${p.phone}`}
                            className="text-sm text-muted-foreground hover:text-accent transition truncate block"
                          >
                            {p.display}
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`tel:+91${p.phone}`}
                          aria-label={`Call ${p.name}`}
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-primary hover:border-accent hover:text-accent transition"
                        >
                          <Phone className="size-4 shrink-0" />
                          Call
                        </a>
                        <a
                          href={`https://wa.me/91${p.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp ${p.name}`}
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-2 text-sm font-medium text-[#128C7E] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition"
                        >
                          <WhatsAppIcon className="size-4 shrink-0" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border shadow-[var(--shadow-soft)]">
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold text-center mb-5">Scan to Connect</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: MapPin, label: "Location", href: SOCIAL_LINKS.maps, qr: qrMaps },
                  { icon: WhatsAppIcon, label: "WhatsApp", href: SOCIAL_LINKS.whatsapp, qr: qrWhatsapp },
                  { icon: Instagram, label: "Instagram", href: SOCIAL_LINKS.instagram, qr: qrInstagram },
                ].map((q) => (
                  <a key={q.label} href={q.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                    <div className="aspect-square w-full rounded-xl overflow-hidden bg-background p-2 border border-border group-hover:border-accent transition">
                      <img src={q.qr} alt={`${q.label} QR code`} loading="lazy" className="size-full object-contain" />
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition">
                      <q.icon className="size-4" /> {q.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
          <form
            className="bg-card p-6 md:p-8 rounded-2xl shadow-[var(--shadow-soft)] border border-border h-fit"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
              setTimeout(() => {
                (e.target as HTMLFormElement).reset();
                setSubmitting(false);
                toast.success("Message sent!", { description: "We'll get back to you shortly." });
              }, 600);
            }}
          >
            <h3 className="text-xl font-semibold text-primary mb-1">Send us a message</h3>
            <p className="text-sm text-muted-foreground mb-5">Quick questions, feedback or general enquiries.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Full name" required />
              <Field label="Phone" name="phone" type="tel" placeholder="9876543210" required />
            </div>
            <div className="mt-4">
              <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="How can we help?" required />
            </div>
            <div className="mt-4 grid gap-2">
              <label className="text-sm font-medium">Message<span className="text-accent"> *</span></label>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="px-3 py-2 rounded-lg border border-input bg-background resize-none"
              />
            </div>
            <div className="mt-6 flex justify-end">
              <button type="submit" disabled={submitting} className="btn-hero disabled:opacity-60">
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 px-3 rounded-lg border border-input bg-background"
      />
    </div>
  );
}
