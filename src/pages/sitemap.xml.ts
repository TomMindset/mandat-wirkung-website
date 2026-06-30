import { landingNavigation, legalNavigation, primaryNavigation } from "@data/navigation";
import { site } from "@data/site";

const staticRoutes = [
  "/",
  ...primaryNavigation.map((item) => item.href),
  ...landingNavigation.map((item) => item.href),
  ...legalNavigation.map((item) => item.href)
];

const lastmod = "2026-06-30";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toAbsoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}

export function GET() {
  const urls = [...new Set(staticRoutes)]
    .map((path) => {
      const loc = escapeXml(toAbsoluteUrl(path));

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  return new Response(
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      "</urlset>"
    ].join("\n"),
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
}
