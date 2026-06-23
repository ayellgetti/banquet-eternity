import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-C48meTBu.mjs";
import { _ as ArrowRight, a as Music, c as MapPin, h as Camera, n as Users, r as Quote, v as Utensils, y as Sparkles } from "../_libs/lucide-react.mjs";
import { n as MAPS_URL, t as MAPS_EMBED_URL } from "./maps-dPMLIE2C.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as testimonials, r as hero_hall_default, t as eventCategories } from "./events-BZJCTouJ.mjs";
import { t as EventsCarousel } from "./EventsCarousel-CHdzLScV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D4H4wo0G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TestimonialsCarousel() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6e3);
		return () => clearInterval(t);
	}, []);
	const current = testimonials[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl mx-auto text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-12 text-accent mx-auto mb-6 opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xl md:text-2xl text-foreground/90 leading-relaxed font-display italic animate-in fade-in duration-700",
				children: [
					"\"",
					current.quote,
					"\""
				]
			}, i),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-semibold text-primary",
					children: current.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: current.event
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 justify-center mt-6",
				children: testimonials.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setI(idx),
					"aria-label": `Testimonial ${idx + 1}`,
					className: `size-2 rounded-full transition ${i === idx ? "bg-accent w-6" : "bg-border"}`
				}, idx))
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[88vh] flex items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_hall_default,
					alt: "Eternity Banquet hall",
					width: 1920,
					height: 1080,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x relative text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-4",
							children: "Mumbai's Finest Banquet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl md:text-7xl font-bold max-w-3xl leading-[1.05]",
							children: [
								"Where every ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "celebration"
								}),
								" becomes a memory."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg md:text-xl text-white/85 max-w-xl",
							children: "A grand venue for 250 to 400 guests — weddings, engagements, birthdays, corporate events and more."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/enquiry",
								className: "btn-hero",
								children: ["Book Your Date ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/gallery",
								className: "btn-outline-gold text-white border-white/70 hover:bg-white/10",
								children: "View Gallery"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl",
							children: [
								{
									icon: Users,
									label: "250–400",
									sub: "Guest capacity"
								},
								{
									icon: Sparkles,
									label: "10+ Years",
									sub: "Experience"
								},
								{
									icon: Utensils,
									label: "Multi-cuisine",
									sub: "In-house catering"
								},
								{
									icon: MapPin,
									label: "Kandivali W",
									sub: "Prime location"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-5 text-accent mb-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-lg",
										children: s.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-white/70",
										children: s.sub
									})
								]
							}, s.label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			eyebrow: "What We Host",
			title: "Events we make unforgettable",
			center: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsCarousel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/events",
					className: "btn-outline-gold",
					children: ["Explore all events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid md:grid-cols-3 gap-6",
				children: [
					{
						icon: Utensils,
						t: "In-house Catering",
						d: "Multi-cuisine menus crafted by experienced chefs — vegetarian, Jain, non-veg & live counters."
					},
					{
						icon: Music,
						t: "Sound & Lighting",
						d: "Professional A/V setup, DJ console, stage lighting and uplighters included."
					},
					{
						icon: Camera,
						t: "Decor & Planning",
						d: "Themed décor, mandap design and an event manager to handle every detail."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background rounded-2xl p-7 shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-12 rounded-full grid place-items-center bg-accent/15 text-accent mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold text-primary mb-2",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: s.d
						})
					]
				}, s.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Specialties",
			title: "Every occasion, beautifully done",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: eventCategories.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/events",
					className: "group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: e.image,
							alt: e.name,
							loading: "lazy",
							width: 1280,
							height: 960,
							className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-5 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: e.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-white/80 mt-1 line-clamp-2",
								children: e.description
							})]
						})
					]
				}, e.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3",
						children: "Kind Words"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-bold text-primary",
						children: "Loved by our guests"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsCarousel, {})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Find Us",
			title: "Conveniently located in the heart of the city",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-5 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-lg",
							children: "Eternity Banquet is located in Kandivali West, Mumbai, with easy access from all major parts of the city and ample parking nearby."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3 text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-accent shrink-0 mt-0.5" }), " Plot No. 93-A, 2nd Floor, Bank Of Baroda, Opp Sahyadri Nagar Hanuman Temple, Charkop Gaon, Kandivali West, Mumbai 400068"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: MAPS_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "btn-hero",
							children: "Get Directions"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-3 rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] aspect-[16/10]",
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
		})
	] });
}
//#endregion
export { Home as component };
