import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as MapPin, i as Phone, l as Instagram, o as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as MAPS_URL } from "./maps-dPMLIE2C.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-zUQyy6Y6.js
var import_jsx_runtime = require_jsx_runtime();
var SOCIAL_LINKS = {
	instagram: "https://www.instagram.com/eternitybanquet",
	whatsapp: "https://wa.me/message/S7HJ6LWWEQ4AD1",
	maps: MAPS_URL
};
var LINKS = SOCIAL_LINKS;
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-primary text-primary-foreground mt-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-14 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl text-gradient-gold mb-3",
						children: "Eternity Banquet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-80 leading-relaxed italic",
						children: "Creating memories that last forever."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs opacity-70 mt-2",
						children: "Capacity 250–400 guests."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-3 text-accent",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm opacity-90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-accent",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							className: "hover:text-accent",
							children: "Events"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: "hover:text-accent",
							children: "Gallery"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/enquiry",
							className: "hover:text-accent",
							children: "Enquiry"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-3 text-accent",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm opacity-90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 mt-0.5 shrink-0" }), " Akash Y — +91 99304 13300"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 mt-0.5 shrink-0" }), " Harshal J — +91 99301 43300"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 mt-0.5 shrink-0" }), " Plot No. 93-A, 2nd Floor, Bank Of Baroda, Sahyadri Nagar, Charkop, Kandivali West, Mumbai 400068"]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-3 text-accent",
					children: "Follow Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.instagram,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Instagram",
							className: "size-10 grid place-items-center rounded-full border border-accent/40 hover:bg-accent hover:text-primary transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.whatsapp,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "WhatsApp",
							className: "size-10 grid place-items-center rounded-full border border-accent/40 hover:bg-accent hover:text-primary transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: LINKS.maps,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Find us on Google Maps",
							className: "size-10 grid place-items-center rounded-full border border-accent/40 hover:bg-accent hover:text-primary transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-primary-foreground/15",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-5 text-xs opacity-70 text-center",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Eternity Banquet. All rights reserved."
				]
			})
		})]
	});
}
//#endregion
export { SiteFooter as n, SOCIAL_LINKS as t };
