import { Link } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PACKAGE_INCLUDES } from "@/lib/menuPackages";
import { VENUES } from "@/lib/maps";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "How many guests can your halls hold?",
    a: (
      <ul className="list-disc pl-5 space-y-1">
        {VENUES.map((v) => (
          <li key={v.id}>
            {v.tagline} ({v.area.split(",")[0]}): {v.capacity}
          </li>
        ))}
      </ul>
    ),
  },
  {
    q: "What is included in the menu packages?",
    a: (
      <>
        Bronze, Silver and Gold include: {PACKAGE_INCLUDES.join(", ")}. All packages need a minimum
        of 100 guests. Decoration is not included and is charged separately. Elite is a
        build-your-own menu, with hall rent also quoted separately.
      </>
    ),
  },
  {
    q: "Is parking available?",
    a: "Packages include 2 parking spaces. Valet parking can be added for ₹8,000.",
  },
  {
    q: "Can you arrange decoration, DJ and photography?",
    a: "Yes. Decoration is not included with the hall or packages and is charged separately. You can add floral stages, balloon decoration, DJ & sound, photography, an anchor/MC, a projector, a vidhi mandap and more.",
  },
  {
    q: "How do I check availability and get a quote?",
    a: (
      <>
        Send us an{" "}
        <Link to="/enquiry" className="text-gold-text underline underline-offset-4">
          enquiry
        </Link>{" "}
        with your date, event type and guest count, or call or WhatsApp us. We respond within 24
        hours.
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <Section eyebrow="Good to Know" title="Frequently asked questions" center>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base md:text-lg">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
