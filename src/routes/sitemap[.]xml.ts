import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BUILD_DATE, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const BASE_URL = SITE_URL || new URL(request.url).origin;
        const paths = [
          "/",
          "/about",
          "/packages",
          "/events",
          "/gallery",
          "/testimonials",
          "/enquiry",
          "/contact",
        ];
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p}</loc><lastmod>${BUILD_DATE}</lastmod><changefreq>weekly</changefreq></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
