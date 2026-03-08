import Link from "next/link";
import BrowseByTopic from "./components/BrowseByTopic";

const dataHighlights = [
  {
    number: "47,638+",
    label: "Financial records",
    sublabel: "FY2021\u20132026",
    href: "/budget",
  },
  {
    number: "102",
    label: "Legislature meetings",
    sublabel: "Agendas, minutes, votes",
    href: "/accountability",
  },
  {
    number: "3,083",
    label: "Meeting documents",
    sublabel: "5 towns + county",
    href: "/accountability",
  },
  {
    number: "8",
    label: "School districts",
    sublabel: "Enrollment, spending, outcomes",
    href: "/evidence-briefs/school-district-spending-gap",
  },
];

const flagshipBriefs = [
  {
    href: "/evidence-briefs/school-district-spending-gap",
    pillar: "Follow the Money",
    title: "The $9,403 Gap",
    summary:
      "Per-pupil spending across Rockland\u2019s eight school districts ranges from $28,891 to $38,294 \u2014 a 33% gap across district lines.",
  },
  {
    href: "/evidence-briefs/2026-county-budget",
    pillar: "Follow the Money",
    title: "2026 County Budget",
    summary:
      "A line-by-line breakdown of Rockland County\u2019s $900M+ budget \u2014 where the money comes from, where it goes, and what changed.",
  },
  {
    href: "/evidence-briefs/legislative-transparency",
    pillar: "Accountability",
    title: "Legislative Transparency",
    summary:
      "How accessible are Rockland County Legislature proceedings? A review of meeting records, vote tracking, and public access.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-14 pb-12 text-center">
        <h1 className="font-serif text-4xl md:text-[3.25rem] font-black leading-[1.12] tracking-tight text-ink mb-6">
          Rockland County deserves
          <br className="hidden md:block" /> better information.
        </h1>
        <p className="text-lg md:text-xl text-gray leading-relaxed mb-5 max-w-2xl mx-auto">
          330,000 residents. A $900 million county budget. Five towns. Eight
          school districts. Budgets, contracts, votes, and zoning decisions
          spread across dozens of government websites in dozens of formats.
        </p>
        <p className="text-base text-gray-light mb-10 max-w-xl mx-auto leading-relaxed">
          We collect it, organize it, cross-reference it, and explain what it
          means.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/newsletter"
            className="bg-red text-white font-semibold px-6 py-3 text-sm tracking-wide rounded-sm hover:bg-red-dark transition-colors"
          >
            Get the Newsletter
          </Link>
          <Link
            href="/evidence-briefs"
            className="border border-ink text-ink font-semibold px-6 py-3 text-sm tracking-wide rounded-sm hover:bg-ink hover:text-paper transition-colors"
          >
            Read Evidence Briefs
          </Link>
        </div>
      </section>

      {/* Start Here */}
      <section className="border-t border-rule py-8">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-gray-light mb-4 text-center">
            New here? Start with:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-center">
            <Link
              href="/about"
              className="text-sm text-ink font-medium hover:text-red transition-colors underline underline-offset-2"
            >
              1. What rockland.news is
            </Link>
            <Link
              href="/evidence-briefs/school-district-spending-gap"
              className="text-sm text-ink font-medium hover:text-red transition-colors underline underline-offset-2"
            >
              2. Read a flagship Evidence Brief
            </Link>
            <Link
              href="/ask"
              className="text-sm text-ink font-medium hover:text-red transition-colors underline underline-offset-2"
            >
              3. Ask a question about your town
            </Link>
          </div>
        </div>
      </section>

      {/* Data bar — clickable stats */}
      <section className="border-t border-b border-rule py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {dataHighlights.map((stat, i) => (
              <Link
                key={stat.label}
                href={stat.href}
                className={`group ${i > 0 ? "md:border-l md:border-rule" : ""}`}
              >
                <p className="font-serif text-3xl md:text-4xl font-black text-ink group-hover:text-red transition-colors">
                  {stat.number}
                </p>
                <p className="text-sm text-ink mt-1 font-medium group-hover:text-red transition-colors">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-light">{stat.sublabel}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <BrowseByTopic />

      {/* Flagship Evidence Briefs */}
      <section className="border-t border-rule py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-6">
            Start with a flagship brief
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {flagshipBriefs.map((brief) => (
              <Link
                key={brief.href}
                href={brief.href}
                className="group block border border-rule p-5 hover:border-red/40 hover:shadow-sm transition-all"
              >
                <span className="text-[0.625rem] font-semibold tracking-[0.12em] uppercase text-red">
                  {brief.pillar}
                </span>
                <h3 className="font-serif text-lg font-bold text-ink group-hover:text-red transition-colors mt-2 mb-2">
                  {brief.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {brief.summary}
                </p>
                <span className="inline-block mt-3 text-xs text-red font-medium group-hover:underline">
                  Read the brief &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-rule py-16 bg-paper-dark">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-3">
              Our Process
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink">
              How it works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="font-serif text-5xl font-black text-red/20 mb-4">
                I.
              </p>
              <h3 className="font-semibold text-ink mb-2">
                We collect the records
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                Software and automated workflows pull budgets, agendas, meeting
                minutes, school reports, campaign finance filings, and other
                public records from government sources across Rockland County.
              </p>
              <p className="text-xs text-gray-light mt-2 italic">
                Example: town budget PDFs, legislature agendas, BOE campaign
                filings
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-red/20 mb-4">
                II.
              </p>
              <h3 className="font-semibold text-ink mb-2">
                We find the patterns
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                Records are structured, normalized, and cross-referenced. Budgets
                are compared across towns and districts. Spending anomalies are
                flagged. Connections between campaign donors and public contracts
                are surfaced.
              </p>
              <p className="text-xs text-gray-light mt-2 italic">
                Example: donor/contract matches, spending anomalies, district
                comparisons
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-red/20 mb-4">
                III.
              </p>
              <h3 className="font-semibold text-ink mb-2">
                You get the analysis
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                Evidence Briefs with sourced findings and policy recommendations.
                Explainers that make complex systems understandable. A{" "}
                <Link href="/ask" className="text-red underline">
                  civic assistant
                </Link>{" "}
                where you can ask questions about local government in plain
                language. A daily podcast. A weekly newsletter.
              </p>
              <p className="text-xs text-gray-light mt-2 italic">
                Example: Evidence Briefs, explainers, civic assistant answers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">
            Stay informed.
          </h2>
          <p className="text-gray mb-8">
            Weekly Evidence Briefs, budget breakdowns, and civic updates
            delivered to your inbox. Free.
          </p>
          <Link
            href="/newsletter"
            className="inline-block bg-ink text-paper font-semibold px-8 py-3 text-sm tracking-wide rounded-sm hover:bg-ink-light transition-colors"
          >
            Subscribe to the Newsletter
          </Link>
          <p className="text-xs text-gray-light mt-4 italic">
            No spam. No partisan spin. Just evidence.
          </p>
        </div>
      </section>
    </div>
  );
}
