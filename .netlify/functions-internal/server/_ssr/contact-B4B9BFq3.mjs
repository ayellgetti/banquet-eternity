import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-C48meTBu.mjs";
import { c as MapPin, d as Clock, i as Phone, l as Instagram } from "../_libs/lucide-react.mjs";
import { n as MAPS_URL, t as MAPS_EMBED_URL } from "./maps-dPMLIE2C.mjs";
import { t as SOCIAL_LINKS } from "./SiteFooter-zUQyy6Y6.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B4B9BFq3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		className: cn("size-4 shrink-0", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
var qr_instagram_default = "/assets/qr-instagram-DpHn_ABJ.png";
var qr_maps_default = "/assets/qr-maps-CYQh7_Tb.png";
var qr_whatsapp_default = "/assets/qr-whatsapp-CqH0ys9i.png";
var CONTACTS = [{
	name: "Akash Y",
	initials: "AY",
	phone: "9930413300",
	display: "+91 99304 13300"
}, {
	name: "Harshal J",
	initials: "HJ",
	phone: "9930143300",
	display: "+91 99301 43300"
}];
function Contact() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		eyebrow: "Reach Us",
		title: "Contact",
		subtitle: "We'd love to hear from you — drop by, call, or send a message.",
		center: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 bg-card p-5 rounded-2xl border border-border shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-12 shrink-0 rounded-full grid place-items-center bg-accent/15 text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-primary",
								children: "Address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-1",
								children: "Plot No. 93-A, 2nd Floor, Bank Of Baroda, Kandivali Co-op Govt Industrial Estate Ltd, Opp Sahyadri Nagar Hanuman Temple, Charkop Gaon, Kandivali West, Mumbai, Maharashtra 400068"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: MAPS_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-3 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline",
								children: "Open in Google Maps →"
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card rounded-2xl border border-border shadow-[var(--shadow-soft)] overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-12 shrink-0 rounded-full grid place-items-center bg-accent/15 text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
										children: "Hours"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-primary mt-0.5",
										children: "9:00 AM – 9:00 PM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-0.5",
										children: "Open every day"
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 p-5 bg-accent/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-12 shrink-0 rounded-full grid place-items-center bg-accent/15 text-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
										children: "Quick Call"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-primary mt-0.5",
										children: "Mon – Sun"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-0.5",
										children: "Call or WhatsApp anytime"
									})
								] })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4",
								children: "Contact Numbers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid sm:grid-cols-2 gap-3",
								children: CONTACTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group flex flex-col gap-3 p-4 rounded-xl border border-border bg-background/60 hover:border-accent/50 hover:bg-background transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "size-11 shrink-0 rounded-full grid place-items-center bg-accent/15 text-accent font-semibold text-sm",
											children: p.initials
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-semibold text-primary truncate",
												children: p.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:+91${p.phone}`,
												className: "text-sm text-muted-foreground hover:text-accent transition truncate block",
												children: p.display
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `tel:+91${p.phone}`,
											"aria-label": `Call ${p.name}`,
											className: "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-primary hover:border-accent hover:text-accent transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0" }), "Call"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://wa.me/91${p.phone}`,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": `WhatsApp ${p.name}`,
											className: "inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-2 text-sm font-medium text-[#128C7E] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4 shrink-0" }), "WhatsApp"]
										})]
									})]
								}, p.name))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card p-5 rounded-2xl border border-border shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-semibold text-primary mb-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-accent" }), " Landmarks"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-1.5 text-muted-foreground text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Bank Of Baroda (in the building)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Opp. Hanuman Temple, Sahyadri Nagar" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Near Golden Leaf Pure Veg Restaurant" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card p-5 rounded-2xl border border-border shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-semibold text-primary mb-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-accent" }), " Map"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl overflow-hidden border border-border h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Eternity Banquet location",
								src: MAPS_EMBED_URL,
								className: "size-full border-0",
								loading: "lazy",
								allowFullScreen: true,
								referrerPolicy: "no-referrer-when-downgrade"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "bg-card p-6 md:p-8 rounded-2xl shadow-[var(--shadow-soft)] border border-border h-fit",
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitting(true);
						setTimeout(() => {
							e.target.reset();
							setSubmitting(false);
							toast.success("Message sent!", { description: "We'll get back to you shortly." });
						}, 600);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold text-primary mb-1",
							children: "Send us a message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mb-5",
							children: "Quick questions, feedback or general enquiries."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								placeholder: "Full name",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone",
								type: "tel",
								placeholder: "9876543210",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								placeholder: "you@example.com",
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Subject",
								name: "subject",
								placeholder: "How can we help?",
								required: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm font-medium",
								children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: " *"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								name: "message",
								rows: 5,
								placeholder: "Write your message here...",
								className: "px-3 py-2 rounded-lg border border-input bg-background resize-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: submitting,
								className: "btn-hero disabled:opacity-60",
								children: submitting ? "Sending..." : "Send Message"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card p-6 rounded-2xl border border-border shadow-[var(--shadow-soft)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.25em] text-accent font-semibold text-center mb-5",
						children: "Scan to Connect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-4",
						children: [
							{
								icon: MapPin,
								label: "Location",
								href: SOCIAL_LINKS.maps,
								qr: qr_maps_default
							},
							{
								icon: WhatsAppIcon,
								label: "WhatsApp",
								href: SOCIAL_LINKS.whatsapp,
								qr: qr_whatsapp_default
							},
							{
								icon: Instagram,
								label: "Instagram",
								href: SOCIAL_LINKS.instagram,
								qr: qr_instagram_default
							}
						].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: q.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group flex flex-col items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square w-full rounded-xl overflow-hidden bg-background p-2 border border-border group-hover:border-accent transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: q.qr,
									alt: `${q.label} QR code`,
									loading: "lazy",
									className: "size-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-accent transition",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(q.icon, { className: "size-4" }),
									" ",
									q.label
								]
							})]
						}, q.label))
					})]
				})]
			})]
		})
	});
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
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
			className: "h-11 px-3 rounded-lg border border-input bg-background"
		})]
	});
}
//#endregion
export { Contact as component };
