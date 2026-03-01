import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "The Rockland Morning Briefing — a daily AI-narrated podcast covering what's happening in Rockland County government.",
};

export default function Podcast() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="font-serif text-4xl font-bold mb-4">
          Rockland Morning Briefing
        </h1>
        <p className="text-lg text-gray leading-relaxed max-w-2xl">
          A daily podcast that covers what&apos;s happening in Rockland County
          government. Budget decisions, development applications, legislative
          votes, and the stories behind the numbers — in under 10 minutes.
        </p>
      </div>

      {/* Podcast info */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">What you get</h3>
          <ul className="text-sm text-gray space-y-2">
            <li>Daily briefing on local government activity</li>
            <li>Budget and spending updates</li>
            <li>Development and zoning news</li>
            <li>Meeting previews and recaps</li>
            <li>Campaign finance highlights</li>
          </ul>
        </div>
        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">Subscribe</h3>
          <p className="text-sm text-gray mb-4">
            Available on all major podcast platforms. New episodes daily.
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-red font-semibold">Launching soon</p>
            <p className="text-gray">
              Sign up for the newsletter to get notified when episodes start
              dropping.
            </p>
          </div>
        </div>
      </div>

      {/* Coming soon */}
      <div className="text-center py-12 border border-dashed border-rule">
        <p className="text-gray mb-4">
          Episodes launching soon.
        </p>
        <Link
          href="/newsletter"
          className="inline-block bg-ink text-white text-sm px-6 py-2 hover:bg-ink-light transition-colors"
        >
          Get notified at launch
        </Link>
      </div>
    </div>
  );
}
