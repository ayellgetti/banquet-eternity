import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/Section";
import { eventCategories } from "@/lib/events";
import { toast } from "sonner";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Enquiry — Eternity Banquet" },
      { name: "description", content: "Send us your event enquiry. We'll get back to you within 24 hours with availability, packages and a custom quote." },
      { property: "og:title", content: "Send an Enquiry — Eternity Banquet" },
      { property: "og:description", content: "Book your date with Mumbai's finest banquet." },
    ],
  }),
  component: Enquiry,
});

const timeSlots = ["Morning (8 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (5 PM – 9 PM)", "Night (7 PM – 11 PM)"];
const venues = ["Main Banquet Hall", "Garden Lawn", "Rooftop Terrace", "Private Dining Room"];
const sources = ["Google Search", "Instagram", "Facebook", "Friend / Family", "Wedding Planner", "Walk-in", "Other"];
const budgets = ["Under ₹2 Lakhs", "₹2 – 5 Lakhs", "₹5 – 10 Lakhs", "₹10 – 20 Lakhs", "Above ₹20 Lakhs"];

function Enquiry() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <Section eyebrow="Get in Touch" title="Send an enquiry" subtitle="Tell us about your event and we'll respond within 24 hours." center>
      <form
        className="max-w-6xl mx-auto bg-card p-6 md:p-8 rounded-2xl shadow-[var(--shadow-soft)] border border-border"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          setTimeout(() => {
            (e.target as HTMLFormElement).reset();
            setSubmitting(false);
            toast.success("Enquiry submitted!", { description: "We'll get back to you within 24 hours." });
          }, 600);
        }}
      >
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Customer name" name="name" placeholder="Full name" required />
          <Field label="Phone number" name="phone" type="tel" placeholder="9876543210" required />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          <SelectField label="Event type" name="event" required placeholder="Select event"
            options={eventCategories.map((e) => e.name)} />
          <Field label="Event date" name="date" type="date" required />
          <SelectField label="Time slot" name="time" required placeholder="Select time slot" options={timeSlots} />
          <Field label="Number of guests" name="guests" type="number" min={250} max={400} placeholder="250" required />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          <SelectField label="Venue" name="venue" required placeholder="Select venue" options={venues} />
          <SelectField label="How did they find us?" name="source" required placeholder="Select source" options={sources} />
          <SelectField label="Approximate Budget" name="budget" placeholder="Select budget range" options={budgets} />
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
            {submitting ? "Sending..." : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </Section>
  );
}

function Field({
  label, name, type = "text", required, placeholder, className = "", min, max,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string; min?: number; max?: number }) {
  return (
    <div className={`grid gap-2 ${className}`}>
      <label className="text-sm font-medium">{label}{required && <span className="text-accent"> *</span>}</label>
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

function SelectField({
  label, name, required, placeholder, options,
}: { label: string; name: string; required?: boolean; placeholder: string; options: string[] }) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium">{label}{required && <span className="text-accent"> *</span>}</label>
      <select required={required} name={name} defaultValue="" className="h-11 px-3 rounded-lg border border-input bg-background">
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
