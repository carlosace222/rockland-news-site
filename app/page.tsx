import Link from "next/link";
import BrowseByTopic from "./components/BrowseByTopic";

const dataHighlights = [
  { number: "47,638+", label: "Financial records", sublabel: "FY2021–2026" },
  { number: "8,270", label: "Campaign contributions", sublabel: "NY Board of Elections" },
  { number: "3,083", label: "Meeting documents", sublabel: "5 towns + county" },
  { number: "8", label: "School districts", sublabel: "Enrollment, spending, outcomes" },
];


export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 pt-14 pb-12 text-center">
        <h1 className="font-serif text-4xl md:text-[3.25rem] font-black leading-[1.12] tracking-tight text-ink mb-6">
          Rockland County deserves<br className="hidden md:block" /> better information.
        </h1>
        <p className="text-lg md:text-xl text-gray leading-relaxed mb-5 max-w-2xl mx-auto">
          330,000 residents. A $900 million county budget. Five towns. Eight school districts.
          One question: <em className="font-serif">where is the money going?</em>
        </p>
        <p className="text-base text-gray-light mb-10 max-w-xl mx-auto leading-relaxed">
          We read the budgets, analyze the spending, and follow the campaign money —
          so you don&apos;t have to read 47-page PDFs to know what&apos;s happening
          with your government.
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

      {/* Data bar */}
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

      {/* Browse by Topic */}
      <BrowseByTopic />

      {/* Latest Evidence Brief */}
      <section className="border-t border-rule py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red mb-6">
            Latest Evidence Brief
          </p>
          <Link
            href="/evidence-briefs/school-district-spending-gap"
            className="block group border border-rule p-6 md:p-8 hover:border-red/40 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[0.625rem] font-semibold tracking-[0.12em] uppercase text-red">
                Follow the Money
              </span>
              <span className="text-[0.625rem] text-gray-light">March 1, 2026</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink group-hover:text-red transition-colors mb-2">
              The $9,403 Gap
            </h3>
            <p className="text-base text-gray-light mb-3">
              Why Rockland&apos;s School Spending Varies by 33% Across District Lines
            </p>
            <p className="text-sm text-gray leading-relaxed max-w-2xl">
              Per-pupil spending across Rockland&apos;s eight school districts ranges from $28,891 to
              $38,294. What&apos;s driving the gap — and what does it mean for Clarkstown?
            </p>
            <span className="inline-block mt-4 text-sm text-red font-medium group-hover:underline">
              Read the full brief &rarr;
            </span>
          </Link>
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
              <p className="font-serif text-5xl font-black text-red/20 mb-4">I.</p>
              <h3 className="font-semibold text-ink mb-2">We collect the data</h3>
              <p className="text-sm text-gray leading-relaxed">
                Automated scrapers pull budgets, agendas, campaign filings, and
                public records from 15+ government sources every week.
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-red/20 mb-4">II.</p>
              <h3 className="font-semibold text-ink mb-2">We analyze the patterns</h3>
              <p className="text-sm text-gray leading-relaxed">
                Cross-reference spending with donations. Compare budgets across
                towns. Flag anomalies. Connect the dots no single document shows.
              </p>
            </div>
            <div>
              <p className="font-serif text-5xl font-black text-red/20 mb-4">III.</p>
              <h3 className="font-semibold text-ink mb-2">You get the story</h3>
              <p className="text-sm text-gray leading-relaxed">
                Evidence Briefs, daily podcast, explainers, and a{" "}
                <Link href="/ask" className="text-red underline">
                  civic assistant
                </Link>{" "}
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
