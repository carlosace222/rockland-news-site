import type { MetadataRoute } from "next";

/**
 * robots.txt for rockland.news.
 * Next.js serves this automatically at /robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://rockland.news/sitemap.xml",
  };
}
