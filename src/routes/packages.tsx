import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Info } from "lucide-react";
import { Section } from "@/components/Section";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ADD_ON_SERVICES,
  CATEGORY_EXTRA_PRICES,
  COMMON_PLATE_ITEMS,
  DECOR_OPTIONS,
  HALL_RENT,
  LIVE_COUNTER_RULES,
  MENU_CATEGORY_ORDER,
  PACKAGE_INCLUDES,
  PLATE_PACKAGES,
  STAGE_OPTIONS,
  SWAPPABLE_CATEGORIES,
  TIME_SLOTS,
  formatInr,
  sortPackageCategories,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Eternity Banquet" },
      {
        name: "description",
        content:
          "Bronze, Silver, Gold and Elite plate packages, hall rent, décor, stage setups and add-on services at Eternity Banquet, Mumbai.",
      },
      { property: "og:title", content: "Packages & Pricing — Eternity Banquet" },
      {
        property: "og:description",
        content: "Transparent per-plate packages with hall rent, catering and décor options.",
      },
    ],
  }),
  component: Packages,
});

function PriceTable({
  title,
  rows,
  note,
}: {
  title: string;
  rows: { name: string; price: string; description?: string }[];
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] overflow-hidden">
      <div className="border-b border-border bg-secondary/40 px-5 py-4">
        <h3 className="font-display text-xl font-bold text-primary">{title}</h3>
        {note && <p className="text-sm text-muted-foreground mt-1">{note}</p>}
      </div>
      <ul className="divide-y divide-border">
        {rows.map((row) => (
          <li
            key={row.name}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 px-5 py-3.5"
          >
            <div className="min-w-0">
              <p className="font-medium text-foreground">{row.name}</p>
              {row.description && (
                <p className="text-sm text-muted-foreground mt-0.5">{row.description}</p>
              )}
            </div>
            <p className="shrink-0 text-sm font-semibold text-accent tabular-nums sm:text-right">
              {row.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PackageCard({ pkg }: { pkg: (typeof PLATE_PACKAGES)[number] }) {
  const categories = sortPackageCategories(Object.keys(pkg.limits));

  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border bg-card shadow-[var(--shadow-soft)] overflow-hidden h-full",
        pkg.highlight ? "border-accent ring-1 ring-accent/30" : "border-border",
      )}
    >
      <div className="border-b border-border bg-secondary/30 px-5 py-5 text-center">
        {pkg.highlight && (
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent mb-2">
            Most Popular
          </p>
        )}
        <h3 className="font-display text-3xl font-bold text-primary">{pkg.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{pkg.tagline}</p>
        <p className="mt-3 font-display text-2xl font-bold text-accent">
          {pkg.basePrice > 0 ? (
            <>
              {formatInr(pkg.basePrice)}
              <span className="text-base font-medium text-muted-foreground">/plate</span>
            </>
          ) : (
            "Custom pricing"
          )}
        </p>
        <p className="text-xs text-muted-foreground mt-2">Minimum {pkg.minPax} guests</p>
      </div>

      <div className="flex-1 p-5 space-y-4">
        {categories.length > 0 ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">
              Menu includes
            </p>
            <ul className="space-y-1.5">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="flex items-center justify-between gap-2 rounded-lg border border-border/80 bg-background px-3 py-2 text-sm"
                >
                  <span>{cat}</span>
                  <span className="font-semibold tabular-nums text-primary">
                    {pkg.limits[cat as keyof typeof pkg.limits]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pick any dishes from our full menu — each item is charged at its category rate below.
            Hall rent, chairs and basic decoration are quoted separately.
          </p>
        )}

        {pkg.extras?.map((extra) => (
          <p
            key={extra}
            className="text-xs leading-relaxed rounded-lg border border-amber-200/80 bg-amber-50/80 px-3 py-2 text-amber-950"
          >
            {extra}
          </p>
        ))}
      </div>
    </article>
  );
}

function Packages() {
  const categoryRates = MENU_CATEGORY_ORDER.map((cat) => ({
    name: cat,
    price: `${formatInr(CATEGORY_EXTRA_PRICES[cat])}/plate`,
  }));

  const hallSlotRows = TIME_SLOTS.map((slot) => ({
    name: slot.label,
    price: formatInr(HALL_RENT.ratePerHour * slot.hours),
    description: `${slot.hours} hours`,
  }));

  return (
    <>
      <Section
        eyebrow="Packages & Pricing"
        title="Everything we offer, at a glance"
        subtitle="Premium per-plate packages with hall rent, chairs and basic decoration included — plus optional décor, stage upgrades and add-on services."
        center
      >
        <div className="flex justify-center mb-8">
          <a
            href="/Eternity-Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            Download full menu (PDF)
          </a>
        </div>
        <Alert className="max-w-4xl mx-auto text-left border-accent/35 bg-secondary/50 rounded-xl">
          <Info className="size-4 text-accent" aria-hidden />
          <AlertTitle className="font-display text-base">How our packages work</AlertTitle>
          <AlertDescription className="space-y-2 text-foreground/85">
            <p>
              <strong className="text-foreground">Bronze, Silver &amp; Gold</strong> are
              all-inclusive per-plate packages (min. 100 guests). Hall rent, AC, chairs with seat
              covers, basic stage decoration, stage lighting, stage sofa and more are included — you
              only pay extra for optional décor, add-ons or dishes beyond your package limits.
            </p>
            <p>
              <strong className="text-foreground">Elite</strong> lets you build a custom menu at
              category rates. Hall rent and decoration are quoted separately for Elite bookings.
            </p>
          </AlertDescription>
        </Alert>
      </Section>

      <section className="pb-16">
        <div className="container-x">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            Premium plate packages
          </h2>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {PLATE_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container-x grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              Included with Bronze, Silver &amp; Gold
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {PACKAGE_INCLUDES.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-foreground/90">
                  <Check className="size-4 shrink-0 text-accent mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-2xl font-bold text-primary mb-2">On every plate</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Served complimentary with every guest plate, regardless of package.
            </p>
            <p className="text-sm leading-relaxed text-foreground/90">
              {COMMON_PLATE_ITEMS.join(" · ")}
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Flexible mains:</strong>{" "}
              {SWAPPABLE_CATEGORIES.join(", ")} share one interchangeable slot pool per package —
              mix and match within your package limits.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Menu-only pricing" title="Elite category rates">
        <div className="grid lg:grid-cols-2 gap-8">
          <PriceTable
            title="Per-plate category rates"
            note="For Elite custom menus, or extra dishes beyond your package limit."
            rows={categoryRates}
          />
          <PriceTable title="Live counter pricing" rows={LIVE_COUNTER_RULES} />
        </div>
      </Section>

      <section className="bg-secondary py-16">
        <div className="container-x space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">
              Hall Rent
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
              Venue &amp; time slots
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              {HALL_RENT.venue} — {HALL_RENT.description}. Basic stage decoration, stage lighting
              and stage sofa are included with hall rent. Every additional hour beyond your booked
              slot: {formatInr(HALL_RENT.extraHourRate)}/hour.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] text-center">
              <p className="text-sm text-muted-foreground">Hall rent rate</p>
              <p className="font-display text-4xl font-bold text-accent mt-2">
                {formatInr(HALL_RENT.ratePerHour)}
                <span className="text-lg font-medium text-muted-foreground">/hour</span>
              </p>
            </div>
            <PriceTable title="Standard time slots" rows={hallSlotRows} />
          </div>
        </div>
      </section>

      <Section eyebrow="Enhance your event" title="Add-ons, décor &amp; stage">
        <div className="grid lg:grid-cols-2 gap-8">
          <PriceTable
            title="Add-on services"
            note="Optional extras beyond your package."
            rows={ADD_ON_SERVICES.map((s) => ({
              name: s.name,
              price: s.price,
              description: s.note,
            }))}
          />
          <PriceTable
            title="Stage decoration"
            rows={STAGE_OPTIONS.map((s) => ({
              name: s.name,
              price: s.price,
              description: s.description,
            }))}
          />
        </div>

        <div className="mt-8">
          <PriceTable
            title="Event décor"
            note="Themed décor for weddings, birthdays, corporate events and more."
            rows={DECOR_OPTIONS.map((d) => ({
              name: d.name,
              price: d.price,
              description: d.description,
            }))}
          />
        </div>
      </Section>

      <section className="pb-20">
        <div className="container-x text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Prices are indicative and may vary based on guest count, date and custom requirements.
            Send an enquiry for a detailed quote tailored to your event.
          </p>
          <Link to="/enquiry" className="btn-hero">
            Get a custom quote <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
