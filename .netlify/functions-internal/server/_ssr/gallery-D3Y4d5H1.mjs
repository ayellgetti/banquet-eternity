import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-C48meTBu.mjs";
import { f as ChevronRight, p as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { n as galleryImages, t as eventCategories } from "./events-BZJCTouJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-D3Y4d5H1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"All",
	...eventCategories.map((e) => e.name),
	"Venue"
];
function Gallery() {
	const [active, setActive] = (0, import_react.useState)("All");
	const [lightboxIdx, setLightboxIdx] = (0, import_react.useState)(null);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const items = active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active);
	const close = (0, import_react.useCallback)(() => setLightboxIdx(null), []);
	const next = (0, import_react.useCallback)(() => setLightboxIdx((i) => i === null ? i : (i + 1) % items.length), [items.length]);
	const prev = (0, import_react.useCallback)(() => setLightboxIdx((i) => i === null ? i : (i - 1 + items.length) % items.length), [items.length]);
	(0, import_react.useEffect)(() => {
		if (lightboxIdx === null || paused) return;
		const t = setInterval(next, 3500);
		return () => clearInterval(t);
	}, [
		lightboxIdx,
		paused,
		next
	]);
	(0, import_react.useEffect)(() => {
		if (lightboxIdx === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") close();
			else if (e.key === "ArrowRight") next();
			else if (e.key === "ArrowLeft") prev();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		lightboxIdx,
		close,
		next,
		prev
	]);
	const current = lightboxIdx !== null ? items[lightboxIdx] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		eyebrow: "Our Work",
		title: "Gallery",
		subtitle: "Filter by event type to see moments from our most memorable celebrations.",
		center: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center gap-2 mb-10",
				children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setActive(f);
						setLightboxIdx(null);
					},
					className: `px-5 py-2 rounded-full text-sm font-medium border transition ${active === f ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-accent hover:text-accent"}`,
					children: f
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setLightboxIdx(i),
					className: "group relative overflow-hidden rounded-2xl aspect-square shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.src,
							alt: g.alt,
							loading: "lazy",
							width: 1280,
							height: 1280,
							className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 p-4 text-white text-left opacity-0 group-hover:opacity-100 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
								children: g.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: g.alt
							})]
						})
					]
				}, i))
			}),
			current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				onClick: close,
				className: "fixed inset-0 z-50 bg-black/90 grid place-items-center p-4 animate-in fade-in duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							close();
						},
						"aria-label": "Close",
						className: "absolute top-4 right-4 size-11 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							prev();
						},
						"aria-label": "Previous",
						className: "absolute left-3 md:left-6 top-1/2 -translate-y-1/2 size-12 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: (e) => e.stopPropagation(),
						onMouseEnter: () => setPaused(true),
						onMouseLeave: () => setPaused(false),
						className: "relative max-h-[90vh] max-w-[95vw]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: current.src,
							alt: current.alt,
							className: "max-h-[90vh] max-w-[95vw] rounded-xl animate-in fade-in duration-500"
						}, lightboxIdx), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 rounded-b-xl p-4 bg-gradient-to-t from-black/80 to-transparent text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-accent font-semibold",
									children: current.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: current.alt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-white/70 mt-1",
									children: [
										(lightboxIdx ?? 0) + 1,
										" / ",
										items.length
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							next();
						},
						"aria-label": "Next",
						className: "absolute right-3 md:right-6 top-1/2 -translate-y-1/2 size-12 grid place-items-center rounded-full bg-white/85 hover:bg-white text-primary shadow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					})
				]
			})
		]
	});
}
//#endregion
export { Gallery as component };
