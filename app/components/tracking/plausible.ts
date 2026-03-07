/**
 * Plausible custom event helpers for rockland.news
 *
 * Usage:
 *   import { trackEvent } from "@/app/components/tracking/plausible";
 *   trackEvent("Newsletter Signup", { source: "hero-cta" });
 */

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> }
    ) => void;
  }
}

/**
 * Fire a custom Plausible event.
 * Safe to call even if Plausible hasn't loaded yet (no-ops gracefully).
 */
export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean>
): void {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(name, props ? { props } : undefined);
  }
}

// ──────────────────────────────────────────────
// Pre-defined events for rockland.news
// ──────────────────────────────────────────────

/** User clicks "Get the Newsletter" or subscribes via beehiiv */
export function trackNewsletterSignup(source: string): void {
  trackEvent("Newsletter Signup", { source });
}

/** User opens an Evidence Brief */
export function trackEvidenceBriefView(slug: string): void {
  trackEvent("Evidence Brief View", { slug });
}

/** User clicks "Read the full brief →" link */
export function trackEvidenceBriefClick(slug: string): void {
  trackEvent("Evidence Brief Click", { slug });
}

/** User opens the Chatbase civic assistant */
export function trackChatbotOpen(): void {
  trackEvent("Chatbot Open");
}

/** User sends a message in the civic assistant */
export function trackChatbotMessage(question: string): void {
  trackEvent("Chatbot Message", {
    question: question.slice(0, 150), // truncate for Plausible limits
  });
}

/** User clicks a podcast episode play button */
export function trackPodcastPlay(episode: string): void {
  trackEvent("Podcast Play", { episode });
}

/** User clicks a topic in Browse by Topic */
export function trackTopicClick(topic: string): void {
  trackEvent("Topic Click", { topic });
}

/** User submits a FOIL request */
export function trackFoilSubmit(agency: string): void {
  trackEvent("FOIL Submit", { agency });
}

/** User clicks an outbound link to a government source */
export function trackSourceClick(url: string): void {
  trackEvent("Source Click", { url: url.slice(0, 200) });
}

/** User shares content (social share buttons, copy link, etc.) */
export function trackShare(platform: string, slug: string): void {
  trackEvent("Share", { platform, slug });
}

/** Track scroll depth on long-form content */
export function trackScrollDepth(slug: string, depth: number): void {
  trackEvent("Scroll Depth", { slug, depth: `${depth}%` });
}
