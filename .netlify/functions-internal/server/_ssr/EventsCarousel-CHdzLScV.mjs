import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as ChevronRight, p as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as eventCategories } from "./events-BZJCTouJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EventsCarousel-CHdzLScV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EventsCarousel() {
	const [i, setI] = (0, import_react.useState)(0);
	const total = eventCategories.length;
	const next = (0, import_react.useCallback)(() => setI((p) => (p + 1) % total), [total]);
	const prev = () => setI((p) => (p - 1 + total) % total);
	(0, import_react.useEffect)(() => {
		const t = setInterval(next, 5e3);
		return () => clearInterval(t);
	}, [next]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex transition-transform duration-700 ease-out",
				style: { transform: `translateX(-${i * 100}%)` },
				children: eventCategories.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-full relative aspect-[16/9] md:aspect-[21/9]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: e.image,
							alt: e.name,
							loading: "lazy",
							width: 1280,
							height: 960,
							className: "absolute inset-0 size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-end p-6 md:p-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.25em] text-accent mb-2 font-semibold",
										children: "Specialty"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl md:text-5xl font-bold",
										children: e.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-white/85 md:text-lg",
										children: e.description
									})
								]
							})
						})
					]
				}, e.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prev,
				"aria-label": "Previous",
				className: "absolute left-3 md:left-5 top-1/2 -translate-y-1/2 size-11 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: next,
				"aria-label": "Next",
				className: "absolute right-3 md:right-5 top-1/2 -translate-y-1/2 size-11 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
				children: eventCategories.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setI(idx),
					"aria-label": `Slide ${idx + 1}`,
					className: `h-1.5 rounded-full transition-all ${i === idx ? "bg-accent w-8" : "bg-white/60 w-2"}`
				}, idx))
			})
		]
	});
}
//#endregion
export { EventsCarousel as t };
