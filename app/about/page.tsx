import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "What rockland.news is, how it works, and why it exists — in as much or as little depth as you want.",
};

/* ────────────────────────────────────────────
   Flow Diagram Component
   ──────────────────────────────────────────── */

function FlowDiagram() {
  const inputs = [
    "Town budgets (\u00d75)",
    "County budget ($900M)",
    "Legislature agendas",
    "Meeting minutes",
    "Campaign finance filings",
    "School district data (\u00d78)",
    "Zoning & planning records",
    "Vendor contracts",
  ];

  const dbStats = [
    "47,000+ financial records",
    "8,200+ campaign finance",
    "3,000+ meeting documents",
    "8 school districts",
  ];

  const dbProcess = [
    "Cross-referenced.",
    "Anomalies flagged.",
    "Patterns surfaced.",
  ];

  const outputs = [
    "Evidence Briefs",
    "Explainers",
    "Daily podcast",
    "Weekly newsletter",
    "Civic assistant",
    "Budget comparisons",
    "Accountability tracking",
    "Pattern detection",
  ];

  return (
    <div className="w-full">
      {/* Desktop: three-column horizontal flow */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-0">
        {/* Left: Public Records */}
        <div>
          <p className="text-[0.625rem] font-semibold tracking-[0.14em] uppercase text-gray-light mb-3">
            Public Records
          </p>
          <div className="space-y-1">
            {inputs.map((item) => (
              <p key={item} className="text-sm text-gray leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center px-4 text-rule-dark">
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 8h28M24 3l5 5-5 5" />
          </svg>
        </div>

        {/* Center: The Database */}
        <div className="border border-rule px-6 py-5 bg-paper-dark/50 text-center">
          <p className="text-[0.625rem] font-semibold tracking-[0.14em] uppercase text-gray-light mb-3">
            The Database
          </p>
          <div className="space-y-1 mb-4">
            {dbStats.map((stat) => (
              <p key={stat} className="text-sm font-medium text-ink leading-snug">
                {stat}
              </p>
            ))}
          </div>
          <div className="border-t border-rule pt-3 space-y-0.5">
            {dbProcess.map((line) => (
              <p key={line} className="text-xs text-gray italic">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center px-4 text-rule-dark">
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 8h28M24 3l5 5-5 5" />
          </svg>
        </div>

        {/* Right: What You Get */}
        <div>
          <p className="text-[0.625rem] font-semibold tracking-[0.14em] uppercase text-gray-light mb-3">
            What You Get
          </p>
          <div className="space-y-1">
            {outputs.map((item) => (
              <p key={item} className="text-sm text-gray leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: vertical cascade */}
      <div className="md:hidden space-y-6">
        {/* Inputs */}
        <div>
          <p className="text-[0.625rem] font-semibold tracking-[0.14em] uppercase text-gray-light mb-2">
            Public Records
          </p>
          <div className="space-y-0.5">
            {inputs.map((item) => (
              <p key={item} className="text-sm text-gray leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Down arrow */}
        <div className="flex justify-center text-rule-dark">
          <svg width="16" height="32" viewBox="0 0 16 32" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 0v28M3 24l5 5 5-5" />
          </svg>
        </div>

        {/* Database */}
        <div className="border border-rule px-5 py-4 bg-paper-dark/50 text-center">
          <p className="text-[0.625rem] font-semibold tracking-[0.14em] uppercase text-gray-light mb-2">
            The Database
          </p>
          <div className="space-y-0.5 mb-3">
            {dbStats.map((stat) => (
              <p key={stat} className="text-sm font-medium text-ink leading-snug">
                {stat}
              </p>
            ))}
          </div>
          <div className="border-t border-rule pt-2 space-y-0.5">
            {dbProcess.map((line) => (
              <p key={line} className="text-xs text-gray italic">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Down arrow */}
        <div className="flex justify-center text-rule-dark">
          <svg width="16" height="32" viewBox="0 0 16 32" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 0v28M3 24l5 5 5-5" />
          </svg>
        </div>

        {/* Outputs */}
        <div>
          <p className="text-[0.625rem] font-semibold tracking-[0.14em] uppercase text-gray-light mb-2">
            What You Get
          </p>
          <div className="space-y-0.5">
            {outputs.map((item) => (
              <p key={item} className="text-sm text-gray leading-snug">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Page
   ──────────────────────────────────────────── */

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* ── Tier 1: One Sentence ── */}
      <section className="py-20 md:py-28 border-b border-rule">
        <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-4">
          rockland.news in One Sentence
        </p>
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-ink leading-snug max-w-3xl">
          rockland.news collects public records from every level of Rockland
          County government, cross-references them, and publishes what the data
          shows so residents can understand how local systems actually work.
        </p>
      </section>

      {/* ── Tier 2: One Paragraph ── */}
      <section className="py-16 md:py-20 border-b border-rule">
        <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-6">
          rockland.news in One Paragraph
        </p>
        <div className="max-w-3xl">
          <p className="text-base md:text-lg text-ink leading-relaxed">
            Rockland County has 330,000 residents, five town governments, eight
            school districts, a county legislature, and a $900 million county
            budget. The public records that document all of this — budgets,
            meeting minutes, campaign finance filings, contracts, zoning
            decisions — are technically available. They are also scattered across
            dozens of government websites in dozens of formats, making it nearly
            impossible for any single person to follow what&apos;s happening.
            rockland.news closes that gap. We collect, structure, and
            cross-reference those records, then publish sourced analysis in
            formats designed to be useful: Evidence Briefs with explicit
            confidence levels and tradeoffs, explainers that make complex
            systems understandable, a daily podcast, a weekly newsletter, and a
            civic assistant where you can ask questions in plain language. The
            editorial standard is simple: every claim sourced, every number
            traceable, systems over villains, evidence over opinion.
          </p>
        </div>
      </section>

      {/* ── Tier 3: One Image ── */}
      <section className="py-16 md:py-24 border-b border-rule">
        <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-8 md:mb-12">
          rockland.news in One Image
        </p>
        <FlowDiagram />
      </section>

      {/* ── Tier 4: One Thousand Words ── */}
      <section className="py-16 md:py-20 border-b border-rule">
        <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-8">
          rockland.news in One Thousand Words
        </p>

        <div className="prose max-w-3xl">
          <h2 className="font-serif text-2xl font-bold mb-4">The problem</h2>
          <p>
            Local government in Rockland County is not secretive. It is
            fragmented.
          </p>
          <p>
            Town budgets are published as PDFs on municipal websites. Legislature
            agendas are posted before meetings. Campaign finance filings are
            available through the state Board of Elections. School district
            spending data sits on the NYSED portal. Planning board applications
            are listed on town pages.
          </p>
          <p>
            The information exists. What doesn&apos;t exist is any system that
            brings it together.
          </p>
          <p>
            A resident who wants to know how their property tax bill breaks down
            across town, county, school, and special district levies would need
            to visit four or five different websites, locate the relevant budget
            documents, and do the math themselves. A resident who wants to know
            whether a campaign donor to a county legislator also holds a public
            contract would need to cross-reference state campaign finance filings
            against county vendor payment records — databases that were never
            designed to talk to each other.
          </p>
          <p>
            The practical result is that most residents learn about zoning
            changes, spending decisions, and policy shifts after the fact. Not
            because the information was hidden, but because it was too scattered
            and too time-consuming to follow in real time.
          </p>
          <p>That is the gap rockland.news exists to close.</p>

          <h2 className="font-serif text-2xl font-bold mt-10 mb-4">
            What we do
          </h2>
          <p>
            We collect public records from every level of Rockland County
            government, including all five towns, the county legislature and
            executive, and all eight public school districts. Those records are
            parsed, structured, and loaded into a database that currently holds
            over 47,000 financial records, 8,200 campaign finance entries, and
            3,000 meeting documents.
          </p>
          <p>
            The database makes cross-referencing possible. We compare per-pupil
            spending across all eight school districts. We match campaign donors
            against public contract recipients. We flag budget line items where
            actual spending deviates significantly from what was appropriated. We
            track year-over-year spending trends adjusted for inflation.
          </p>
          <p>
            The findings are published in formats designed to be useful to a
            general audience:
          </p>
          <p>
            <strong>Evidence Briefs</strong> are structured analysis of a
            specific policy question. Each one includes the data, peer
            comparisons, explicit tradeoffs, confidence levels, and a clear
            statement of what evidence would change the conclusion. They are not
            opinion pieces. They are reference documents built on sourced
            findings.
          </p>
          <p>
            <strong>Explainers</strong> cover how local government systems work
            — budgets, zoning, SEQRA, FOIL, tax assessments, and school funding
            formulas — using Rockland County examples and accessible language.
          </p>
          <p>
            <strong>The daily podcast</strong> is a short morning briefing on new
            public records, upcoming meetings, and key findings.
          </p>
          <p>
            <strong>The weekly newsletter</strong> delivers the most important
            findings, one meeting to watch, and new records added to the
            database.
          </p>
          <p>
            <strong>The civic assistant</strong> is a chatbot that draws from the
            same structured database to answer questions about Rockland County
            government in plain language.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-10 mb-4">
            How it&apos;s built
          </h2>
          <p>
            The platform runs on a combination of software, automation, and
            AI-assisted workflows. Automated systems collect records from
            government websites on a regular schedule. Those records are parsed
            and structured: PDFs are converted to data, HTML is scraped and
            normalized, filings are matched to standard schemas.
            Cross-referencing queries run against the structured database to
            surface patterns that no individual document reveals.
          </p>
          <p>
            All published analysis goes through editorial review before release.
            The tools accelerate the work. The judgment remains human.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-10 mb-4">
            Who built this
          </h2>
          <p>
            rockland.news is created by Carlos Acevedo, founder of{" "}
            <a
              href="https://currentcreative.ai"
              className="text-ink underline hover:text-ink-light"
            >
              Current Creative
            </a>
            , an AI consulting firm based in Rockland County. The project started
            from a belief that the same tools and methods used to help businesses
            operate more efficiently could be applied to a public-interest
            problem: making local government more understandable to the people it
            serves.
          </p>
          <p>
            It reflects a broader conviction that small teams with modern tools
            can now build serious civic information infrastructure — the kind of
            structured, ongoing, data-driven coverage that used to require
            institutions with large staffs and large budgets.
          </p>

          <h2 className="font-serif text-2xl font-bold mt-10 mb-4">
            Editorial principles
          </h2>
          <p>
            <strong>Evidence first.</strong> Every factual claim is backed by a
            cited public record, dataset, or verifiable source. When evidence is
            incomplete, we say so.
          </p>
          <p>
            <strong>Systems, not villains.</strong> Our role is to make systems
            visible, not to manufacture outrage. We follow evidence to structural
            causes before attributing intent to individuals.
          </p>
          <p>
            <strong>Nonpartisan, not neutral.</strong> We do not endorse
            candidates or parties. We do advocate for transparency,
            accountability, and evidence-based policy. When evidence points in a
            clear direction, we say so.
          </p>
          <p>
            <strong>Show the work.</strong> Data sources, methodologies, and
            limitations are disclosed. If a reader wants to check our numbers,
            they should be able to.
          </p>
          <p>
            <strong>Accessible language.</strong> We write for residents, not
            specialists. Technical terms are explained the first time they
            appear.
          </p>
          <p>
            <strong>Corrections.</strong> Errors are corrected promptly and
            visibly.
          </p>
          <p>
            <strong>Editorial independence.</strong> Coverage priorities are set
            by public interest and evidence, not by commercial relationships or
            political considerations.
          </p>
        </div>
      </section>

      {/* ── Tier 5: One Evidence Brief ── */}
      <section className="py-16 md:py-20">
        <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-8">
          rockland.news in One Evidence Brief
        </p>

        <div className="max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
            The $9,403 Gap
          </h2>
          <p className="text-base text-gray leading-relaxed mb-4">
            Per-pupil spending across Rockland&apos;s eight school districts
            ranges from $28,891 to $38,294 — a 33% gap across district lines.
            This Evidence Brief breaks down where the differences come from,
            what they mean for students, and what the tradeoffs look like.
          </p>
          <p className="text-sm text-gray-light leading-relaxed mb-8">
            Every number sourced. Every recommendation includes a confidence
            level. Every conclusion states what would change our mind.
          </p>
          <Link
            href="/evidence-briefs/school-district-spending-gap"
            className="inline-block bg-red text-white text-sm font-semibold px-8 py-3 hover:bg-red-dark transition-colors"
          >
            Read the full Evidence Brief &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
