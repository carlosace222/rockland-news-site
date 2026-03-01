import Link from "next/link";

const dataHighlights = [
  { number: "47,638+", label: "Financial records analyzed", sublabel: "FY2021–2026" },
  { number: "8,270", label: "Campaign contributions tracked", sublabel: "NY Board of Elections" },
  { number: "3,083", label: "Meeting documents cataloged", sublabel: "5 towns + county" },
  { number: "8", label: "School districts monitored", sublabel: "Enrollment, spending, outcomes" },
];

const pillars = [
  {
    title: "Follow the Money",
    href: "/budget",
    description:
      "Where does your property tax dollar go? Budget breakdowns, vendor contracts, and spending trends across every level of Rockland County government.",
    tag: "#follow-the-money",
  },
  {
    title: "Development Watch",
    href: "/development",
    description:
      "Active planning applications, zoning changes, and development patterns. Track what's being built, where, and who's building it.",
    tag: "#development-watch",
  },
  {
    title: "Accountability Tracker",
    href: "/accountability",
    description:
      "Campaign finance, legislative voting records, and donor-vendor overlaps. The connections that matter, documented with evidence.",
    tag: "#accountability-tracker",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Rockland County deserves better information.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            330,000 residents. A $900 million county budget. Five towns. Eight school districts.
            One question: where is the money going?
          </p>
          <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto">
            We read the budgets, track the contracts, and follow the campaign money —
            so you don&apos;t have to read 47-page PDFs to know what&apos;s happening with your government.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/newsletter"
              className="bg-gold text-navy font-semibold px-6 py-3 rounded hover:bg-gold-light transition-colors"
            >
              Get the Newsletter
            </Link>
            <Link
              href="/evidence-briefs"
              className="border border-gray-500 text-white px-6 py-3 rounded hover:border-white transition-colors"
            >
              Read Evidence Briefs
            </Link>
          </div>
        </div>
      </section>

      {/* Data highlights */}
      <section className="py-12 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {dataHighlights.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-navy">
                  {stat.number}
                </p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
                <p className="text-xs text-text-muted">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content pillars */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">
            What we cover
          </h2>
          <p className="text-center text-text-muted mb-12 max-w-2xl mx-auto">
            Three pillars of civic transparency. Every story is evidence-based,
            nonpartisan, and sourced to public records.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group border border-border rounded-lg p-6 hover:border-navy hover:shadow-md transition-all"
              >
                <span className="text-xs font-mono text-text-muted">
                  {pillar.tag}
                </span>
                <h3 className="font-serif text-xl font-bold mt-2 mb-3 group-hover:text-navy transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">1</div>
              <h3 className="font-semibold mb-2">We collect the data</h3>
              <p className="text-sm text-text-muted">
                Automated scrapers pull budgets, agendas, campaign filings, and
                public records from 15+ government sources every week.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">2</div>
              <h3 className="font-semibold mb-2">We analyze the patterns</h3>
              <p className="text-sm text-text-muted">
                Cross-reference spending with donations. Compare budgets across
                towns. Flag anomalies. Connect the dots no single document shows.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">3</div>
              <h3 className="font-semibold mb-2">You get the story</h3>
              <p className="text-sm text-text-muted">
                Evidence Briefs, daily podcast, explainers, and a chatbot at{" "}
                <a
                  href="https://rockland311.news"
                  className="text-navy underline"
                >
                  rockland311.news
                </a>{" "}
                where you can ask any question about local government.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Stay informed. Stay engaged.
          </h2>
          <p className="text-text-muted mb-8">
            Get weekly Evidence Briefs, budget breakdowns, and civic updates
            delivered to your inbox. Free.
          </p>
          <Link
            href="/newsletter"
            className="inline-block bg-navy text-white font-semibold px-8 py-3 rounded hover:bg-navy-light transition-colors"
          >
            Subscribe to the Newsletter
          </Link>
          <p className="text-xs text-text-muted mt-4">
            No spam. No partisan spin. Just evidence.
          </p>
        </div>
      </section>
    </div>
  );
}
