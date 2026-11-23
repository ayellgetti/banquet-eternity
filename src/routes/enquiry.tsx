import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Info } from "lucide-react";
import { Section } from "@/components/Section";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { eventCategories } from "@/lib/events";
import {
  COMMON_PLATE_ITEMS,
  PACKAGE_INCLUDES,
  PLATE_PACKAGES,
  formatPlatePackageLabel,
} from "@/lib/menuPackages";
import { toast } from "sonner";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Enquiry — Eternity Banquet" },
      {
        name: "description",
        content:
          "Send us your event enquiry. We'll get back to you within 24 hours with availability, packages and a custom quote.",
      },
      { property: "og:title", content: "Send an Enquiry — Eternity Banquet" },
      { property: "og:description", content: "Book your date with Mumbai's finest banquet." },
    ],
  }),
  component: Enquiry,
});

// Number that receives enquiries via WhatsApp (country code + number, no "+").
const ENQUIRY_WHATSAPP = "919930413300";

const timeSlots = [
  "08:00 AM – 02:00 PM",
  "04:00 PM – 10:00 PM",
  "08:00 AM – 08:00 PM",
  "10:00 AM – 10:00 PM",
];
const sources = [
  "Google Search",
  "Instagram",
  "Facebook",
  "Friend / Family",
  "Wedding Planner",
  "Walk-in",
  "Other",
];
const budgets = ["₹0 – ₹30,000", "₹30,000 – ₹80,000", "₹80,000 – ₹1.5 Lakhs", "₹1.5 – ₹2 Lakhs"];

function Enquiry() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <Section
      eyebrow="Get in Touch"
      title="Send an enquiry"
      subtitle="Tell us about your event and we'll respond within 24 hours."
      center
    >
      <form
        className="max-w-6xl mx-auto bg-card p-6 md:p-8 rounded-2xl shadow-[var(--shadow-soft)] border border-border"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const data = new FormData(form);
          const get = (k: string) => String(data.get(k) ?? "").trim() || "-";
          const text = [
            "*New enquiry — Eternity Banquet*",
            `Name: ${get("name")}`,
            `Phone: ${get("phone")}`,
            `Event: ${get("event")}`,
            `Date: ${get("date")}`,
            `Time slot: ${get("time")}`,
            `Guests: ${get("guests")}`,
            `Menu package: ${get("menuPackage")}`,
            `Heard about us via: ${get("source")}`,
            `Budget: ${get("budget")}`,
            `Message: ${get("message")}`,
          ].join("\n");
          setSubmitting(true);
          const url = `https://wa.me/${ENQUIRY_WHATSAPP}?text=${encodeURIComponent(text)}`;
          const win = window.open(url, "_blank", "noopener,noreferrer");
          if (!win) {
            setSubmitting(false);
            toast.error("Couldn't open WhatsApp", {
              description: `Please allow pop-ups, or call us on +${ENQUIRY_WHATSAPP.slice(2)}.`,
            });
            return;
          }
          form.reset();
          setSubmitting(false);
          toast.success("Almost done!", {
            description: "Press Send in WhatsApp to deliver your enquiry.",
          });
        }}
      >
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Customer name" name="name" placeholder="Full name" required />
          <Field label="Phone number" name="phone" type="tel" placeholder="9876543210" required />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          <SelectField
            label="Event type"
            name="event"
            required
            placeholder="Select event"
            options={eventCategories.map((e) => e.name)}
          />
          <Field label="Event date" name="date" type="date" required />
          <SelectField
            label="Time slot"
            name="time"
            required
            placeholder="Select time slot"
            options={timeSlots}
          />
          <Field
            label="Number of guests"
            name="guests"
            type="number"
            min={50}
            max={1000}
            placeholder="50"
            required
          />
        </div>

        <div className="mt-5 space-y-5">
          <PremiumPackageAlert />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <MenuPackageField />
            <SelectField
              label="How did they find us?"
              name="source"
              required
              placeholder="Select source"
              options={sources}
            />
            <SelectField
              label="Approximate Budget"
              name="budget"
              placeholder="Select budget range"
              options={budgets}
            />
          </div>
        </div>

        <div className="grid gap-2 mt-5">
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your event — theme, special requests, anything else."
            className="px-3 py-2 rounded-lg border border-input bg-background resize-none"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button type="submit" disabled={submitting} className="btn-hero disabled:opacity-60">
            {submitting ? "Opening WhatsApp..." : "Send Enquiry on WhatsApp"}
          </button>
        </div>
      </form>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className = "",
  min,
  max,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  min?: number;
  max?: number;
}) {
  return (
    <div className={`grid gap-2 ${className}`}>
      <label className="text-sm font-medium">
        {label}
        {required && <span className="text-gold-text"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        className="h-11 px-3 rounded-lg border border-input bg-background"
      />
    </div>
  );
}

function PremiumPackageAlert() {
  return (
    <Alert className="border-accent/35 bg-secondary/50 text-foreground rounded-xl">
      <Info className="size-4 text-accent" aria-hidden />
      <AlertTitle className="font-display text-base text-foreground">
        Menu package selection is required
      </AlertTitle>
      <AlertDescription className="space-y-3 text-foreground/85">
        <p>
          Please choose a premium package below before submitting your enquiry. All packages require
          a minimum of <strong className="font-semibold text-foreground">100 guests</strong>.
        </p>
        <div>
          <p className="mb-1.5 font-medium text-foreground">
            What&apos;s included with Bronze, Silver &amp; Gold:
          </p>
          <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 text-sm leading-relaxed">
            {PACKAGE_INCLUDES.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent shrink-0" aria-hidden>
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm">
          <span className="font-medium text-foreground">On every plate:</span>{" "}
          {COMMON_PLATE_ITEMS.join(" · ")}. Elite is a custom-build option — hall rent and
          decoration are quoted separately.
        </p>
      </AlertDescription>
    </Alert>
  );
}

function MenuPackageField() {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium">
        Menu Package<span className="text-gold-text"> *</span>
      </label>
      <select
        required
        name="menuPackage"
        defaultValue=""
        className="h-11 px-3 rounded-lg border border-input bg-background"
      >
        <option value="" disabled>
          Select menu package
        </option>
        {PLATE_PACKAGES.map((pkg) => (
          <option key={pkg.id} value={formatPlatePackageLabel(pkg)}>
            {formatPlatePackageLabel(pkg)}
          </option>
        ))}
      </select>
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  placeholder,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium">
        {label}
        {required && <span className="text-gold-text"> *</span>}
      </label>
      <select
        required={required}
        name={name}
        defaultValue=""
        className="h-11 px-3 rounded-lg border border-input bg-background"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
