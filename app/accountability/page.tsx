import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accountability Tracker",
  description:
    "Legislative voting records, meeting transparency, and policy accountability in Rockland County government.",
};

export default function Accountability() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <span className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-red">
          #accountability-tracker
        </span>
        <h1 className="font-serif text-4xl font-bold mt-2 mb-4">
          Accountability Tracker
        </h1>
        <p className="text-lg text-gray leading-relaxed max-w-2xl">
          How do legislators vote? How transparent are public meetings?
          We track the patterns — not to assume the worst, but to document
          what the public record reveals about how decisions get made.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">What we track</h3>
          <ul className="text-sm text-gray space-y-2">
            <li>Legislative voting records and attendance</li>
            <li>Meeting frequency, agendas, and minutes availability</li>
            <li>Committee structure and decision-making patterns</li>
            <li>FOIL request compliance by municipality</li>
          </ul>
        </div>
        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">Key findings so far</h3>
          <ul className="text-sm text-gray space-y-2">
            <li>
              33% of expected county legislature meetings have no public minutes
            </li>
            <li>
              102 meetings analyzed across two years of legislative activity
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule pt-8">
        <h3 className="font-semibold mb-4">Evidence Briefs</h3>
        <Link
          href="/evidence-briefs/legislative-transparency"
          className="block border border-rule p-6 hover:border-red transition-colors group"
        >
          <span className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-red">
            Legislative Accountability Series
          </span>
          <h4 className="font-serif text-xl font-bold mt-1 mb-2 group-hover:text-red transition-colors">
            Legislative Transparency: What 102 Meetings Reveal
          </h4>
          <p className="text-sm text-gray leading-relaxed">
            Two years of county legislature data analyzed. Meeting frequency,
            committee structure, and what the public record does and doesn&apos;t
            show about how decisions get made.
          </p>
        </Link>
      </div>
    </div>
  );
}
