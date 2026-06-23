import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-C48meTBu.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as eventCategories } from "./events-BZJCTouJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/enquiry-DpMNPeRj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var timeSlots = [
	"Morning (8 AM – 12 PM)",
	"Afternoon (12 PM – 4 PM)",
	"Evening (5 PM – 9 PM)",
	"Night (7 PM – 11 PM)"
];
var venues = [
	"Main Banquet Hall",
	"Garden Lawn",
	"Rooftop Terrace",
	"Private Dining Room"
];
var sources = [
	"Google Search",
	"Instagram",
	"Facebook",
	"Friend / Family",
	"Wedding Planner",
	"Walk-in",
	"Other"
];
var budgets = [
	"Under ₹2 Lakhs",
	"₹2 – 5 Lakhs",
	"₹5 – 10 Lakhs",
	"₹10 – 20 Lakhs",
	"Above ₹20 Lakhs"
];
function Enquiry() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Get in Touch",
		title: "Send an enquiry",
		subtitle: "Tell us about your event and we'll respond within 24 hours.",
		center: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "max-w-6xl mx-auto bg-card p-6 md:p-8 rounded-2xl shadow-[var(--shadow-soft)] border border-border",
			onSubmit: (e) => {
				e.preventDefault();
				setSubmitting(true);
				setTimeout(() => {
					e.target.reset();
					setSubmitting(false);
					toast.success("Enquiry submitted!", { description: "We'll get back to you within 24 hours." });
				}, 600);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Customer name",
						name: "name",
						placeholder: "Full name",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone number",
						name: "phone",
						type: "tel",
						placeholder: "9876543210",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Event type",
							name: "event",
							required: true,
							placeholder: "Select event",
							options: eventCategories.map((e) => e.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Event date",
							name: "date",
							type: "date",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Time slot",
							name: "time",
							required: true,
							placeholder: "Select time slot",
							options: timeSlots
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Number of guests",
							name: "guests",
							type: "number",
							min: 250,
							max: 400,
							placeholder: "250",
							required: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Venue",
							name: "venue",
							required: true,
							placeholder: "Select venue",
							options: venues
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "How did they find us?",
							name: "source",
							required: true,
							placeholder: "Select source",
							options: sources
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Approximate Budget",
							name: "budget",
							placeholder: "Select budget range",
							options: budgets
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						rows: 4,
						placeholder: "Tell us about your event — theme, special requests, anything else.",
						className: "px-3 py-2 rounded-lg border border-input bg-background resize-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: submitting,
						className: "btn-hero disabled:opacity-60",
						children: submitting ? "Sending..." : "Submit Enquiry"
					})
				})
			]
		})
	});
}
function Field({ label, name, type = "text", required, placeholder, className = "", min, max }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `grid gap-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "text-sm font-medium",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			placeholder,
			min,
			max,
			className: "h-11 px-3 rounded-lg border border-input bg-background"
		})]
	});
}
function SelectField({ label, name, required, placeholder, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "text-sm font-medium",
			children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: " *"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			required,
			name,
			defaultValue: "",
			className: "h-11 px-3 rounded-lg border border-input bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				disabled: true,
				children: placeholder
			}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))]
		})]
	});
}
//#endregion
export { Enquiry as component };
