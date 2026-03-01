import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evidence Briefs",
  description:
    "Data-driven policy analysis for Rockland County. Every claim sourced, every number traceable, every comparison documented.",
};

export default function EvidenceBriefs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
          #evidence-briefs
        </span>
        <h1 className="font-serif text-4xl font-bold mt-2 mb-4">
          Evidence Briefs
        </h1>
        <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
          Our flagship format. Each Evidence Brief takes a single policy question,
          examines what the data shows, looks at what other places have done, and
          lays out the tradeoffs. Every number is sourced. Every comparison is
          documented.
        </p>
      </div>

      {/* Template showing the format */}
      <div className="border border-border rounded-lg p-8 bg-cream mb-8">
        <h2 className="font-serif text-xl font-bold mb-4 text-text-muted">
          Evidence Brief Format
        </h2>
        <ul className="space-y-3 text-sm text-text-muted">
          <li>
            <span className="font-semibold text-navy">THE QUESTION</span> — One
            sentence framing the policy question.
          </li>
          <li>
            <span className="font-semibold text-navy">WHAT THE DATA SHOWS</span>{" "}
            — 2–4 paragraphs, every number cited and sourced.
          </li>
          <li>
            <span className="font-semibold text-navy">
              WHAT OTHER PLACES HAVE DONE
            </span>{" "}
            — 2–3 comparable examples, outcomes documented.
          </li>
          <li>
            <span className="font-semibold text-navy">
              WHAT THE TRADEOFFS ARE
            </span>{" "}
            — Competing considerations, legal constraints.
          </li>
          <li>
            <span className="font-semibold text-navy">THE BOTTOM LINE</span> —
            Clear statement of what evidence suggests. Uncertainties acknowledged.
          </li>
          <li>
            <span className="font-semibold text-navy">SOURCES</span> — Every
            document, dataset, and record cited.
          </li>
        </ul>
      </div>

      {/* Coming soon placeholder */}
      <div className="text-center py-12 border border-dashed border-border rounded-lg">
        <p className="text-text-muted mb-4">
          First Evidence Briefs publishing soon.
        </p>
        <Link
          href="/newsletter"
          className="inline-block bg-navy text-white text-sm px-6 py-2 rounded hover:bg-navy-light transition-colors"
        >
          Get notified when they drop
        </Link>
      </div>
    </div>
  );
}
