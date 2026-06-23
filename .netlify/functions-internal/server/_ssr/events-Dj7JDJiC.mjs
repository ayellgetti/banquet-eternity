import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-C48meTBu.mjs";
import { _ as ArrowRight, f as ChevronRight, m as Check, p as ChevronLeft } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as eventCategories } from "./events-BZJCTouJ.mjs";
import { t as EventsCarousel } from "./EventsCarousel-CHdzLScV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-Dj7JDJiC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CategoryCarousel({ images, name }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const total = images.length;
	const next = (0, import_react.useCallback)(() => setI((p) => (p + 1) % total), [total]);
	const prev = () => setI((p) => (p - 1 + total) % total);
	(0, import_react.useEffect)(() => {
		if (paused || total < 2) return;
		const t = setInterval(next, 4e3);
		return () => clearInterval(t);
	}, [
		paused,
		next,
		total
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] aspect-[4/3] w-full [direction:ltr] group",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full transition-transform duration-700 ease-out",
			style: { transform: `translateX(-${i * 100}%)` },
			children: images.map((src, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: `${name} ${idx + 1}`,
				loading: "lazy",
				width: 1280,
				height: 960,
				className: "min-w-full h-full object-cover"
			}, idx))
		}), total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prev,
				"aria-label": "Previous",
				className: "absolute left-3 top-1/2 -translate-y-1/2 size-9 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow opacity-0 group-hover:opacity-100 transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: next,
				"aria-label": "Next",
				className: "absolute right-3 top-1/2 -translate-y-1/2 size-9 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow opacity-0 group-hover:opacity-100 transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5",
				children: images.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setI(idx),
					"aria-label": `Slide ${idx + 1}`,
					className: `h-1.5 rounded-full transition-all ${i === idx ? "bg-accent w-6" : "bg-white/70 w-2"}`
				}, idx))
			})
		] })]
	});
}
var inclusions = [
	"Decorated stage & mandap",
	"Multi-cuisine in-house catering",
	"Professional sound & lighting",
	"Valet parking for 100+ vehicles",
	"Bridal & green rooms",
	"Dedicated event manager"
];
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			eyebrow: "Our Specialties",
			title: "Events we host",
			center: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsCarousel, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid gap-10",
				children: eventCategories.map((e, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid md:grid-cols-2 gap-8 items-center ${idx % 2 ? "md:[direction:rtl]" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCarousel, {
						images: e.images,
						name: e.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "[direction:ltr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2",
								children: ["Specialty 0", idx + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl md:text-4xl font-bold text-primary mb-3",
								children: e.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-lg",
								children: e.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/enquiry",
								className: "mt-5 inline-flex items-center gap-2 text-accent font-semibold hover:underline",
								children: [
									"Enquire for ",
									e.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							})
						]
					})]
				}, e.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-bold text-primary",
							children: "What's Included"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-3",
							children: "Every booking comes with the essentials covered."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto",
						children: inclusions.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 bg-background rounded-xl p-4 shadow-[var(--shadow-soft)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: i
							})]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/enquiry",
							className: "btn-hero",
							children: "Plan Your Event"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { Events as component };
