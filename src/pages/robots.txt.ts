import type { APIRoute } from "astro";
import { base } from "astro:config/client";

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(`${base.slice(1)}/sitemap-index.xml`, site);
  return new Response(getRobotsTxt(sitemapURL));
};
