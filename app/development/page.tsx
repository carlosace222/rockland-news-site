import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Development Watch",
  description:
    "Planning applications, zoning changes, and development patterns across Rockland County's five towns.",
};

export default function Development() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
          #development-watch
        </span>
        <h1 className="font-serif text-4xl font-bold mt-2 mb-4">
          Development Watch
        </h1>
        <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
          What&apos;s being built in Rockland County? We track planning applications,
          zoning variances, and development patterns across all five towns. Each
          application reviewed individually — but we look at the cumulative
          impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">What we track</h3>
          <ul className="text-sm text-text-muted space-y-2">
            <li>Planning board applications and decisions</li>
            <li>Zoning variances and use changes</li>
            <li>SEQRA environmental reviews</li>
            <li>Deed transfers and property sales</li>
            <li>Developer-to-donor cross-references</li>
          </ul>
        </div>
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Coming soon</h3>
          <ul className="text-sm text-text-muted space-y-2">
            <li>Interactive development map</li>
            <li>Alerts for applications near your address</li>
            <li>Planning board approval rate analysis</li>
            <li>Developer portfolio tracking</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-12 border border-dashed border-border rounded-lg">
        <p className="text-text-muted mb-4">
          Development tracking and Evidence Briefs publishing soon.
        </p>
        <Link
          href="/newsletter"
          className="inline-block bg-navy text-white text-sm px-6 py-2 rounded hover:bg-navy-light transition-colors"
        >
          Get notified
        </Link>
      </div>
    </div>
  );
}
