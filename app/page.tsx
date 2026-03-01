import Link from "next/link";

const dataHighlights = [
  { number: "47,638+", label: "Financial records", sublabel: "FY2021–2026" },
  { number: "8,270", label: "Campaign contributions", sublabel: "NY Board of Elections" },
  { number: "3,083", label: "Meeting documents", sublabel: "5 towns + county" },
  { number: "8", label: "School districts", sublabel: "Enrollment, spending, outcomes" },
];

const pillars = [
  {
    title: "Follow the Money",
    href: "/budget",
    description:
      "Where does your property tax dollar go? Budget breakdowns, vendor contracts, and spending trends across every level of Rockland County government.",
    tag: "follow-the-money",
  },
  {
    title: "Development Watch",
    href: "/development",
    description:
      "Active planning applications, zoning changes, and development patterns. Track what's being built, where, and who's building it.",
    tag: "development-watch",
  },
  {
    title: "Accountability Tracker",
    href: "/accountability",
    description:
      "Campaign finance, legislative voting records, and donor-vendor overlaps. The connections that matter, documented with evidence.",
    tag: "accountability-tracker",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero — editorial style, no colored background */}
      <section className="max-w-3xl mx-auto px-4 pt-12 pb-10 text-center">
        <h1 className="font-serif text-4xl md:text-[3.25rem] font-black leading-[1.15] tracking-tight text-ink mb-6">
          Rockland County deserves<br className="hidden md:block" /> better information.
        </h1>
        <p className="text-lg md:text-xl text-gray leading-relaxed mb-6 max-w-2xl mx-auto">
          330,000 residents. A $900 million county budget. Five towns. Eight school districts.
          One question: <em className="font-serif">where is the money going?</em>
        </p>
        <p className="text-base text-gray-light mb-10 max-w-xl mx-auto leading-relaxed">
          We read the budgets, track the contracts, and follow the campaign money —
          so you don&apos;t have to read 47-page PDFs to know what&apos;s happening
          with your government.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/newsletter"
            className="bg-red text-white font-semibold px-6 py-3 text-sm tracking-wide hover:bg-red-dark transition-colors"
          >
            Get the Newsletter
          </Link>
          <Link
            href="/evidence-briefs"
            className="border border-ink text-ink font-semibold px-6 py-3 text-sm tracking-wide hover:bg-ink hover:text-paper transition-colors"
          >
            Read Evidence Briefs
          </Link>
        </div>
      </section>

      {/* Data bar — horizontal rule above and below */}
      <section className="border-t border-b border-rule py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {dataHighlights.map((stat, i) => (
              <div
                key={stat.label}
                className={`${i > 0 ? "md:border-l md:border-rule" : ""}`}
              >
                <p className="font-serif text-3xl md:text-4xl font-black text-ink">
                  {stat.number}
                </p>
                <p className="text-sm text-ink mt-1 font-medium">{stat.label}</p>
                <p className="text-xs text-gray-light">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content pillars */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-3">
              What We Cover
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
              Three pillars of civic transparency
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border border-rule divide-x divide-rule">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group p-8 hover:bg-paper-dark transition-colors"
              >
                <span className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-red">
                  {pillar.tag}
                </span>
                <h3 className="font-serif text-xl font-bold mt-3 mb-3 text-ink group-hover:text-red transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-rule py-16">
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
              <p className="font-serif text-5xl font-black text-rule-dark mb-4">I.</p>
              <h3 className="font-semibold text-ink mb-2">We collect the data</h3>
              <p className="text-sm text-gray leading-relaxed">
                Automated scrapers pull budgets, agendas, campaign filings, and
                public records from 15+ government sources every week.
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-rule-dark mb-4">II.</p>
              <h3 className="font-semibold text-ink mb-2">We analyze the patterns</h3>
              <p className="text-sm text-gray leading-relaxed">
                Cross-reference spending with donations. Compare budgets across
                towns. Flag anomalies. Connect the dots no single document shows.
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-rule-dark mb-4">III.</p>
              <h3 className="font-semibold text-ink mb-2">You get the story</h3>
              <p className="text-sm text-gray leading-relaxed">
                Evidence Briefs, daily podcast, explainers, and a chatbot at{" "}
                <a href="https://rockland311.news" className="text-red underline">
                  rockland311.news
                </a>{" "}
                where you can ask any question about local government.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">
            Stay informed. Stay engaged.
          </h2>
          <p className="text-gray mb-8">
            Weekly Evidence Briefs, budget breakdowns, and civic updates
            delivered to your inbox. Free.
          </p>
          <Link
            href="/newsletter"
            className="inline-block bg-ink text-paper font-semibold px-8 py-3 text-sm tracking-wide hover:bg-ink-light transition-colors"
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
