import type { MetadataRoute } from "next";

/**
 * Dynamic sitemap for rockland.news.
 *
 * Next.js automatically serves this at /sitemap.xml.
 * Add new evidence briefs, explainers, and pages here as they're published.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rockland.news";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/methodology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/newsletter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/podcast`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/ask`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/budget`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/accountability`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/evidence-briefs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/explainers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  // Evidence Briefs — add new slugs here as you publish
  const evidenceBriefSlugs = [
    "school-district-spending-gap",
    "2026-county-budget",
    "2025-budget-proposed-vs-adopted",
    "east-ramapo-spending",
    "legislative-transparency",
  ];

  const evidenceBriefs: MetadataRoute.Sitemap = evidenceBriefSlugs.map((slug) => ({
    url: `${baseUrl}/evidence-briefs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...evidenceBriefs];
}
