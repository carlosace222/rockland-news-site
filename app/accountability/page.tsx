import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accountability Tracker",
  description:
    "Campaign finance, legislative voting records, and donor-vendor overlaps in Rockland County government.",
};

export default function Accountability() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
          #accountability-tracker
        </span>
        <h1 className="font-serif text-4xl font-bold mt-2 mb-4">
          Accountability Tracker
        </h1>
        <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
          Who donates to Rockland County campaigns? Who gets the contracts? How do
          legislators vote? We track the connections — not to assume the worst,
          but to document the patterns the public record reveals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">What we track</h3>
          <ul className="text-sm text-text-muted space-y-2">
            <li>8,270+ campaign contributions from NY BOE filings</li>
            <li>Vendor contracts and procurement awards</li>
            <li>Donor-to-vendor cross-references</li>
            <li>Legislative voting records and attendance</li>
            <li>FOIL request compliance by municipality</li>
          </ul>
        </div>
        <div className="border border-border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Key findings so far</h3>
          <ul className="text-sm text-text-muted space-y-2">
            <li>
              Organic Recycling: $8,500 in campaign contributions from a
              company with active county contracts
            </li>
            <li>
              Multiple donor-vendor overlaps identified and documented
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-12 border border-dashed border-border rounded-lg">
        <p className="text-text-muted mb-4">
          Accountability analyses and Evidence Briefs publishing soon.
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
