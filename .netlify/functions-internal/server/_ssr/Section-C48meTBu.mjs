import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-C48meTBu.js
var import_jsx_runtime = require_jsx_runtime();
function Section({ eyebrow, title, subtitle, children, className = "", center = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `py-20 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [(eyebrow || title || subtitle) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `max-w-2xl mb-12 ${center ? "mx-auto text-center" : ""}`,
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3",
						children: eyebrow
					}),
					title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-bold text-primary",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground text-lg",
						children: subtitle
					})
				]
			}), children]
		})
	});
}
//#endregion
export { Section as t };
