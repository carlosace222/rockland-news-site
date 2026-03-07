# rockland.news — Tracking & Analytics Implementation Guide

## Overview

This guide covers the full tracking stack for rockland.news:

1. **Plausible Analytics** — Privacy-first web analytics (no cookie banner needed)
2. **SEO Tracking** — Google Search Console, sitemap, robots.txt, structured data
3. **Content Performance** — Custom events for Evidence Briefs, newsletter, chatbot, podcast

---

## 1. Plausible Analytics Setup

### Step 1: Create your Plausible account

Go to [plausible.io](https://plausible.io) and sign up (~$9/month for up to 10k monthly pageviews). Add `rockland.news` as your site domain.

> **Self-hosting option:** You can run Plausible on your existing VPS for $0/month. See [plausible.io/docs/self-hosting](https://plausible.io/docs/self-hosting). If you self-host, update `NEXT_PUBLIC_PLAUSIBLE_SRC` in `.env.local` to point to your instance.

### Step 2: Environment variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in:
```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=rockland.news
```

### Step 3: Verify it's working

The `PlausibleProvider` component is already added to `layout.tsx`. After deploying:

1. Open rockland.news in an incognito window
2. Visit your Plausible dashboard
3. You should see a live visitor within seconds

### What's tracked automatically

- **Page views** — every route change
- **Outbound links** — clicks to government sites, source documents
- **File downloads** — PDF, XLSX, CSV downloads (great for FOIL docs)

---

## 2. SEO Tracking Setup

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://rockland.news`
3. Choose "HTML tag" verification
4. Copy the `content` value from the meta tag
5. Add it to `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code-here
   ```
6. Deploy and verify

### Sitemap

The sitemap is auto-generated at `/sitemap.xml` by `app/sitemap.ts`. It includes all static pages and evidence briefs.

**When you publish a new Evidence Brief**, add its slug to the `evidenceBriefSlugs` array in `app/sitemap.ts`:

```ts
const evidenceBriefSlugs = [
  "school-district-spending-gap",
  "2026-county-budget",
  // ... add new slugs here
  "your-new-brief-slug",
];
```

After adding the sitemap to Search Console, Google will automatically discover and index new pages.

### Robots.txt

Auto-generated at `/robots.txt` by `app/robots.ts`. Allows all crawlers, blocks `/api/` and `/_next/`, and points to the sitemap.

### Structured Data (JSON-LD)

Two schema components are included:

- **`OrganizationJsonLd`** — Already in `layout.tsx`. Tells Google that rockland.news is a `NewsMediaOrganization` covering Rockland County.

- **`ArticleJsonLd`** — Add to each Evidence Brief page:

```tsx
import { ArticleJsonLd } from "@/app/components/tracking";

export default function EvidenceBriefPage() {
  return (
    <>
      <ArticleJsonLd
        title="The $9,403 Gap"
        description="Why Rockland's School Spending Varies by 33% Across District Lines"
        slug="school-district-spending-gap"
        datePublished="2026-03-01"
        section="Follow the Money"
      />
      {/* ... rest of your page */}
    </>
  );
}
```

---

## 3. Content Performance Tracking

### Custom Events

Import from the tracking module and call anywhere in your components:

```tsx
import {
  trackNewsletterSignup,
  trackEvidenceBriefClick,
  trackTopicClick,
  trackChatbotOpen,
  trackPodcastPlay,
  trackShare,
} from "@/app/components/tracking";
```

### Setting up Plausible Goals

In your Plausible dashboard → Goals → Add Goal → Custom Event:

| Goal Name               | When it fires                                    |
|--------------------------|--------------------------------------------------|
| Newsletter Signup        | User subscribes via beehiiv form                 |
| Evidence Brief View      | User opens an Evidence Brief                     |
| Evidence Brief Click     | User clicks "Read the full brief →" on homepage  |
| Chatbot Open             | User opens the Chatbase widget                   |
| Chatbot Message          | User sends a question to the chatbot             |
| Podcast Play             | User clicks play on a podcast episode            |
| Topic Click              | User clicks a topic in Browse by Topic           |
| FOIL Submit              | User submits a FOIL request                      |
| Source Click             | User clicks through to a government source       |
| Share                    | User shares content via social/copy link         |
| Scroll Depth             | User scrolls 25/50/75/100% of a long article     |

### Scroll Depth Tracking

For long-form Evidence Briefs, add the scroll depth hook:

```tsx
"use client";
import { useScrollDepth } from "@/app/components/tracking";

export default function EvidenceBriefClient({ slug }: { slug: string }) {
  useScrollDepth(slug);
  return null; // or wrap your article content
}
```

This fires events at 25%, 50%, 75%, and 100% scroll — so you can see how many readers finish each piece.

### Example: Adding tracking to the homepage CTA

```tsx
<Link
  href="/newsletter"
  onClick={() => trackNewsletterSignup("hero-cta")}
  className="bg-red text-white ..."
>
  Get the Newsletter
</Link>
```

### Example: Tracking Chatbase widget opens

Add to your Chatbase config in layout.tsx:

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.embeddedChatbotConfig = {
        chatbotId: "YcpPEoUDSRWvgvyQ6gOyR",
        domain: "www.chatbase.co"
      };
      // Track when chatbot opens
      document.addEventListener("chatbase:open", function() {
        if (window.plausible) window.plausible("Chatbot Open");
      });
    `,
  }}
/>
```

---

## 4. Files Created / Modified

### New files

| File                                              | Purpose                                         |
|---------------------------------------------------|-------------------------------------------------|
| `app/components/tracking/PlausibleProvider.tsx`    | Loads Plausible script with extensions           |
| `app/components/tracking/plausible.ts`            | Custom event helpers and pre-defined events      |
| `app/components/tracking/useScrollDepth.ts`       | React hook for scroll depth tracking             |
| `app/components/tracking/JsonLd.tsx`              | Organization + Article structured data           |
| `app/components/tracking/index.ts`                | Barrel export for all tracking modules           |
| `app/sitemap.ts`                                  | Dynamic sitemap at /sitemap.xml                  |
| `app/robots.ts`                                   | Robots.txt configuration                         |
| `.env.local.example`                              | Template for environment variables               |

### Modified files

| File             | Changes                                                     |
|------------------|-------------------------------------------------------------|
| `app/layout.tsx` | Added PlausibleProvider, OrganizationJsonLd, SEO metadata   |

---

## 5. Deployment Checklist

- [ ] Copy `.env.local.example` → `.env.local` and fill in values
- [ ] Sign up for Plausible ($9/mo) or self-host on your VPS
- [ ] Add `rockland.news` as a site in Plausible
- [ ] Set up Google Search Console and add verification code
- [ ] Submit sitemap URL (`https://rockland.news/sitemap.xml`) in Search Console
- [ ] Create custom goals in Plausible (see table above)
- [ ] Deploy to Vercel
- [ ] Verify Plausible is receiving data (check dashboard)
- [ ] Verify sitemap.xml and robots.txt are accessible
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Add `ArticleJsonLd` to each Evidence Brief page
- [ ] Wire up `onClick` tracking to key CTAs (newsletter, topic clicks, etc.)

---

## 6. Cost Summary

| Service               | Cost       | Notes                                         |
|-----------------------|------------|-----------------------------------------------|
| Plausible Analytics   | ~$9/mo     | Or $0 self-hosted on your existing VPS         |
| Google Search Console | Free       |                                                |
| Sitemap / robots.txt  | Free       | Built into Next.js                             |
| JSON-LD structured data | Free     | Custom components                              |
| **Total**             | **$0–$9/mo** |                                              |

---

## 7. Key Metrics Dashboard (What to Watch)

Once everything is live, here are the metrics that matter most for rockland.news:

**Traffic & Reach:**
- Unique visitors / week
- Top pages by views
- Traffic sources (direct, search, social, newsletter)

**Engagement:**
- Evidence Brief scroll depth (are people reading to the end?)
- Chatbot usage (opens + messages)
- Newsletter signup rate
- Average visit duration

**SEO:**
- Search impressions + clicks (Search Console)
- Top queries driving traffic
- Indexed pages count
- Core Web Vitals

**Content Performance:**
- Which Evidence Briefs get the most reads?
- Which topics drive the most chatbot questions?
- Outbound clicks to source documents (shows trust)
- File downloads (FOIL docs, data exports)
