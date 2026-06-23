import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { s as Menu, t as X } from "../_libs/lucide-react.mjs";
import { N as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteFooter } from "./SiteFooter-zUQyy6Y6.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-ucvW2riB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DauRHCIT.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/enquiry",
		label: "Enquiry"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex items-center justify-between h-18 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-bold text-gradient-gold",
						children: "Eternity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline text-xs uppercase tracking-[0.2em] text-muted-foreground",
						children: "Banquet"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-1",
					children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						activeProps: { className: "text-primary bg-secondary" },
						className: "px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-colors",
						children: n.label
					}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/enquiry",
						className: "ml-3 btn-hero",
						children: "Book Now"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "md:hidden p-2",
					onClick: () => setOpen((o) => !o),
					"aria-label": "Menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "container-x flex flex-col py-3",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					activeOptions: { exact: n.to === "/" },
					activeProps: { className: "text-primary" },
					className: "py-3 text-base font-medium border-b border-border last:border-0",
					children: n.label
				}, n.to))
			})
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-block btn-hero",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-hero",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline-gold",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Eternity Banquet — Elegant Venue for Weddings & Events" },
			{
				name: "description",
				content: "Premium banquet hall in Mumbai hosting weddings, birthdays, engagements and corporate events for 250–400 guests."
			},
			{
				name: "author",
				content: "Eternity Banquet"
			},
			{
				property: "og:title",
				content: "Eternity Banquet"
			},
			{
				property: "og:description",
				content: "Elegant banquet hall for life's biggest celebrations."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
			]
		})
	});
}
var BASE_URL = "";
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/about",
		"/events",
		"/gallery",
		"/enquiry",
		"/contact"
	].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$5 = () => import("./gallery-D3Y4d5H1.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Eternity Banquet" },
		{
			name: "description",
			content: "Browse photos of weddings, birthdays, engagements, baby showers, anniversaries and corporate events at Eternity Banquet."
		},
		{
			property: "og:title",
			content: "Eternity Banquet Gallery"
		},
		{
			property: "og:description",
			content: "Moments from our most memorable events."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./events-Dj7JDJiC.mjs");
var Route$4 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events We Host — Eternity Banquet" },
		{
			name: "description",
			content: "Weddings, birthdays, engagements, baby showers, anniversaries, corporate events and more — hosted with elegance at Eternity Banquet."
		},
		{
			property: "og:title",
			content: "Events at Eternity Banquet"
		},
		{
			property: "og:description",
			content: "Every occasion, beautifully done."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./enquiry-DpMNPeRj.mjs");
var Route$3 = createFileRoute("/enquiry")({
	head: () => ({ meta: [
		{ title: "Enquiry — Eternity Banquet" },
		{
			name: "description",
			content: "Send us your event enquiry. We'll get back to you within 24 hours with availability, packages and a custom quote."
		},
		{
			property: "og:title",
			content: "Send an Enquiry — Eternity Banquet"
		},
		{
			property: "og:description",
			content: "Book your date with Mumbai's finest banquet."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-B4B9BFq3.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Eternity Banquet" },
		{
			name: "description",
			content: "Call, WhatsApp or visit Eternity Banquet in Kandivali West, Mumbai. We're open every day, 9am to 9pm."
		},
		{
			property: "og:title",
			content: "Contact Eternity Banquet"
		},
		{
			property: "og:description",
			content: "Get in touch — we'd love to host your next celebration."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CtXaO6MR.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Eternity Banquet" },
		{
			name: "description",
			content: "Learn about Eternity Banquet — a decade of hosting weddings and events in Mumbai with luxury décor and impeccable service."
		},
		{
			property: "og:title",
			content: "About Eternity Banquet"
		},
		{
			property: "og:description",
			content: "A decade of creating unforgettable celebrations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-D4H4wo0G.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Eternity Banquet — Premium Wedding & Event Venue in Mumbai" },
		{
			name: "description",
			content: "Host weddings, birthdays, engagements and corporate events at Eternity Banquet — capacity 250 to 400 guests with luxury décor & catering."
		},
		{
			property: "og:title",
			content: "Eternity Banquet"
		},
		{
			property: "og:description",
			content: "Elegant venue for unforgettable celebrations — 250 to 400 guests."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var GalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$7
});
var EventsRoute = Route$4.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$7
});
var EnquiryRoute = Route$3.update({
	id: "/enquiry",
	path: "/enquiry",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute,
	ContactRoute,
	EnquiryRoute,
	EventsRoute,
	GalleryRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
