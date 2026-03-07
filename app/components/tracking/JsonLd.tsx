/**
 * JSON-LD structured data components for SEO.
 *
 * Helps Google understand rockland.news as a news/media organization
 * and individual Evidence Briefs as news articles.
 */

interface OrganizationJsonLdProps {
  name?: string;
  url?: string;
  description?: string;
}

/** Site-wide Organization schema — add to layout or homepage */
export function OrganizationJsonLd({
  name = "rockland.news",
  url = "https://rockland.news",
  description = "Data-driven local government accountability for Rockland County, NY",
}: OrganizationJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name,
    url,
    description,
    foundingDate: "2025",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Rockland County, New York",
    },
    publishingPrinciples: `${url}/methodology`,
    actionableFeedbackPolicy: `${url}/contact`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  section?: string;
}

/** Per-article schema — add to each Evidence Brief page */
export function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  section = "Evidence Brief",
}: ArticleJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    url: `https://rockland.news/evidence-briefs/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "rockland.news",
      url: "https://rockland.news",
    },
    publisher: {
      "@type": "Organization",
      name: "rockland.news",
      url: "https://rockland.news",
    },
    articleSection: section,
    isAccessibleForFree: true,
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
