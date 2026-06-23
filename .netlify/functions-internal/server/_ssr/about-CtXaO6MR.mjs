import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Section } from "./Section-C48meTBu.mjs";
import { t as exterior_default } from "./exterior-DMEs1-no.mjs";
import { g as Award, n as Users, u as HeartHandshake, y as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CtXaO6MR.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-[40vh] grid place-items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: exterior_default,
					alt: "",
					width: 1280,
					height: 960,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative text-center text-white container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3",
						children: "About Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl md:text-6xl font-bold",
						children: "A legacy of elegance"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl font-bold text-primary mb-4",
					children: "Our Story"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-lg leading-relaxed",
					children: "Eternity Banquet was founded with a single belief — that every celebration deserves a setting as remarkable as the occasion itself. For over a decade, families across Mumbai have trusted us with their most cherished moments: weddings, engagements, birthdays, anniversaries and corporate milestones."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-lg leading-relaxed mt-4",
					children: [
						"With a grand hall accommodating ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: "250 to 400 guests"
						}),
						", in-house catering, themed décor and a dedicated planning team, we make every event seamless, joyful and unforgettable."
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: exterior_default,
				alt: "Banquet exterior",
				loading: "lazy",
				width: 1280,
				height: 960,
				className: "rounded-2xl shadow-[var(--shadow-elegant)]"
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl font-bold text-primary",
						children: "Why choose us"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: [
						{
							i: Users,
							t: "250–400 Guests",
							d: "Spacious layout that scales for intimate or grand events."
						},
						{
							i: Sparkles,
							t: "Bespoke Décor",
							d: "Themed setups tailored to your vision."
						},
						{
							i: Award,
							t: "Award-winning Service",
							d: "A trained team that anticipates every need."
						},
						{
							i: HeartHandshake,
							t: "End-to-end Planning",
							d: "One point of contact from booking to send-off."
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background rounded-2xl p-6 shadow-[var(--shadow-soft)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-12 rounded-full grid place-items-center bg-accent/15 text-accent mb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { className: "size-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold text-primary",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm mt-2",
								children: c.d
							})
						]
					}, c.t))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
