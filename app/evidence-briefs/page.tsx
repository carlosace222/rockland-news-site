import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evidence Briefs",
  description:
    "Data-driven policy analysis for Rockland County. Every claim sourced, every number traceable, every comparison documented.",
};

const briefs = [
  {
    slug: "east-ramapo-spending",
    title: "East Ramapo Spends 3x the County Average on Busing",
    subtitle: "While Ranking Last in Classroom Spending — Here's What Would Change That",
    pillar: "Follow the Money",
    date: "March 2026",
    tier: "free" as const,
    description:
      "East Ramapo spends $6,053 per student on transportation — three times the county average — while ranking dead last in instruction. A $43.3 million accounting failure, a 43% ELL graduation rate, and four evidence-based recommendations.",
  },
  {
    slug: "school-district-spending-gap",
    title: "The $9,403 Gap",
    subtitle: "Why Rockland's School Spending Varies by 33% Across District Lines",
    pillar: "Follow the Money",
    date: "March 1, 2026",
    tier: "free" as const,
    description:
      "Per-pupil spending across Rockland's eight school districts ranges from $28,891 to $38,294. What's driving the gap — and what does it mean for Clarkstown?",
  },
  {
    slug: "2026-county-budget",
    title: "Where $914 Million Goes",
    subtitle: "The 2026 Rockland County Budget, Department by Department",
    pillar: "Follow the Money",
    date: "March 1, 2026",
    tier: "free" as const,
    description:
      "Rockland County's operating budget has grown 32% in five years. Five departments account for 70% of spending. Where the money goes, department by department.",
  },
  {
    slug: "legislative-transparency",
    title: "24 Meetings, 12 Sets of Minutes",
    subtitle: "What's Missing from the Rockland County Legislature's Public Record",
    pillar: "Accountability Tracker",
    date: "March 1, 2026",
    tier: "insider" as const,
    description:
      "The legislature met 36 times in 2025 but published minutes for only two-thirds of those sessions. The documentation gap is widening.",
  },
  {
    slug: "2025-budget-proposed-vs-adopted",
    title: "The $471,675 Question",
    subtitle: "What the Legislature Changed in the 2025 County Budget",
    pillar: "Follow the Money",
    date: "February 2026",
    tier: "insider" as const,
    description:
      "The County Executive proposed $876 million. The legislature changed $471,675 — touching 6 of 39 departments, all increases, totaling 0.054% of spending.",
  },
];

export default function EvidenceBriefs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <span className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-red">
          #evidence-briefs
        </span>
        <h1 className="font-serif text-4xl font-bold mt-2 mb-4">Evidence Briefs</h1>
        <p className="text-lg text-gray leading-relaxed max-w-2xl">
          Structured analysis of specific policy questions affecting Rockland
          County. Each brief is built on sourced data, peer comparisons, and
          explicit tradeoffs.
        </p>
        <p className="text-base text-gray leading-relaxed max-w-2xl mt-3">
          Every recommendation includes a confidence level and a clear statement
          of what evidence would change the conclusion.
        </p>
        <p className="text-sm text-gray-light leading-relaxed max-w-2xl mt-3">
          These are not opinion pieces. They are analytical documents designed to
          help residents, officials, journalists, and advocates make
          better-informed decisions.
        </p>
      </div>

      {/* Brief cards */}
      <div className="space-y-0">
        {briefs.map((brief, i) => (
          <Link
            key={brief.slug}
            href={`/evidence-briefs/${brief.slug}`}
            className="block group"
          >
            <article
              className={`py-8 ${i > 0 ? "border-t border-rule" : ""}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.625rem] font-semibold tracking-[0.12em] uppercase text-red">
                  {brief.pillar}
                </span>
                {brief.tier === "insider" && (
                  <span className="bg-ink text-paper px-2 py-0.5 rounded-sm text-[0.575rem] tracking-wider font-semibold uppercase">
                    Insider
                  </span>
                )}
                <span className="text-[0.625rem] text-gray-light">{brief.date}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-ink group-hover:text-red transition-colors mb-1">
                {brief.title}
              </h2>
              <p className="text-base text-gray-light mb-2">{brief.subtitle}</p>
              <p className="text-sm text-gray leading-relaxed max-w-xl">
                {brief.description}
              </p>
            </article>
          </Link>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="border-t border-rule mt-4 pt-10 text-center">
        <p className="text-gray mb-4">
          New Evidence Briefs publish weekly. Get them first.
        </p>
        <Link
          href="/newsletter"
          className="inline-block bg-ink text-white text-sm font-semibold px-6 py-2.5 rounded-sm hover:bg-ink-light transition-colors"
        >
          Subscribe to the Newsletter
        </Link>
      </div>
    </div>
  );
}
