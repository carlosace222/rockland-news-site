import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "The rockland.news daily briefing — a short daily podcast covering what's new in Rockland County government.",
};

export default function Podcast() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="font-serif text-4xl font-bold mb-4">
          The rockland.news daily briefing
        </h1>
        <p className="text-lg text-gray leading-relaxed max-w-2xl">
          A short daily podcast covering what&apos;s new in Rockland County
          government.
        </p>
      </div>

      {/* What each episode covers */}
      <div className="mb-12">
        <div className="border border-rule p-6 md:p-8">
          <h3 className="font-semibold mb-4">Each episode covers</h3>
          <ul className="text-sm text-gray space-y-2">
            <li>
              New public records and filings published in the last 24 hours
            </li>
            <li>Upcoming meetings and public comment opportunities</li>
            <li>
              Key findings from recent board meetings and legislative sessions
            </li>
            <li>Context on developing local issues</li>
          </ul>
          <p className="text-sm text-gray mt-4 font-medium">
            Five to ten minutes. Every morning. Available on Apple Podcasts,
            Spotify, YouTube, and right here.
          </p>
        </div>
      </div>

      {/* Coming soon / player area */}
      <div className="text-center py-12 border border-dashed border-rule mb-8">
        <p className="text-gray mb-4">Episodes launching soon.</p>
        <Link
          href="/newsletter"
          className="inline-block bg-ink text-white text-sm px-6 py-2 hover:bg-ink-light transition-colors"
        >
          Get notified at launch
        </Link>
      </div>

      <p className="text-sm text-gray text-center leading-relaxed max-w-xl mx-auto">
        The briefing is based on public records collected and organized through
        the workflows behind rockland.news. Full sourcing for every episode is
        available on the site.
      </p>
    </div>
  );
}
