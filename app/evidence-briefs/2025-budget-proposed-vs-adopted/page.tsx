import type { Metadata } from "next";
import Link from "next/link";
import DataTable from "../DataTable";

export const metadata: Metadata = {
  title:
    "The $471,675 Question: What the Legislature Changed in the 2025 County Budget",
  description:
    "The Rockland County Legislature modified 0.054% of the County Executive\u2019s $876 million 2025 operating budget. A rockland.news Evidence Brief.",
};

export default function BudgetProposedVsAdopted2025() {
  return (
    <article className="max-w-3xl mx-auto px-4 pt-10 pb-16">
      {/* Breadcrumb + pillar tag */}
      <div className="flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.1em] uppercase mb-6">
        <Link
          href="/evidence-briefs"
          className="text-gray-light hover:text-red transition-colors"
        >
          Evidence Briefs
        </Link>
        <span className="text-rule-dark">/</span>
        <Link
          href="/budget"
          className="text-red hover:text-red-dark transition-colors"
        >
          Follow the Money
        </Link>
      </div>

      {/* Headline */}
      <h1 className="font-serif text-3xl md:text-[2.5rem] font-black leading-[1.15] tracking-tight text-ink mb-3">
        The $471,675 Question: What the Legislature Changed in the 2025 County
        Budget
      </h1>
      <p className="text-lg text-gray leading-relaxed mb-6">
        A supermajority legislature modified less than one-tenth of one percent
        of an opposing-party executive&apos;s $876 million budget.
      </p>

      {/* Meta line */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-light border-b border-rule pb-6 mb-10">
        <span>rockland.news</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>Follow the Money</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>Published February 2026</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>Data current through 2025 Adopted Budget</span>
      </div>

      {/* THE QUESTION */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          The Question
        </h2>
        <div className="prose">
          <p>
            Rockland County&apos;s legislature holds a Democratic supermajority.
            The County Executive is a Republican. When the Executive submitted an
            $876 million operating budget for 2025, how much did the legislature
            actually change?
          </p>
        </div>
      </section>

      {/* WHAT THE DATA SHOWS */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          What the Data Shows
        </h2>

        <div className="prose">
          <p>
            <strong>Almost nothing.</strong>
          </p>
          <p>
            The County Executive proposed a 2025 operating budget of
            $876,044,570. The legislature adopted a final budget of
            $876,516,245, an increase of $471,675, or 0.054% of total spending.
            Out of 39 departments in the operating budget, the legislature
            modified exactly six.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
          Every change they made
        </h3>

        <DataTable
          caption="2025 Operating Budget: Proposed vs. Adopted, Modified Departments Only"
          headers={[
            "Department",
            "Executive Proposed",
            "Legislature Adopted",
            "Change",
            "% Change",
          ]}
          alignRight={[1, 2, 3, 4]}
          rows={[
            [
              "Contract Agency",
              "$2,121,900",
              "$2,341,400",
              "+$219,500",
              "+10.3%",
            ],
            [
              "Personnel",
              "$7,932,010",
              "$8,032,010",
              "+$100,000",
              "+1.3%",
            ],
            [
              "Social Services",
              "$182,795,660",
              "$182,876,660",
              "+$81,000",
              "+0.04%",
            ],
            [
              "Executive",
              "$9,438,015",
              "$9,493,515",
              "+$55,500",
              "+0.6%",
            ],
            [
              "Board of Elections",
              "$5,312,585",
              "$5,326,105",
              "+$13,520",
              "+0.3%",
            ],
            [
              "Legislature",
              "$6,949,455",
              "$6,951,610",
              "+$2,155",
              "+0.03%",
            ],
          ]}
        />

        <div className="prose mt-6">
          <p>
            Every change was an increase. The legislature did not cut a single
            dollar from the Executive&apos;s proposal. The remaining 33
            departments, including the Sheriff&apos;s Office ($100M+), Health
            Department ($95M+), and the entire capital infrastructure, passed
            through without modification.
          </p>

          <div className="bg-paper-dark border border-rule rounded-sm p-4 my-6 text-sm">
            <p className="font-semibold text-ink mb-1">In perspective:</p>
            <p className="text-gray">
              The total $471,675 in legislative changes is roughly equal to the
              annual salary and benefits of three to four county employees, out
              of an $876 million operating budget.
            </p>
          </div>

          <p>
            The largest single change, the $219,500 addition to Contract Agency,
            represents outside service contracts. The second largest, $100,000 to
            Personnel, covers the county&apos;s human resources and labor
            relations functions. Without line-item detail on what specifically was
            added within these departments, residents cannot determine whether
            these additions funded new programs, increased existing contracts, or
            addressed other priorities.
          </p>
        </div>
      </section>

      {/* WHAT THIS MEANS IN CONTEXT */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          What This Means in Context
        </h2>

        <h3 className="font-serif text-xl font-bold text-ink mt-6 mb-3">
          As a sign of functional governance
        </h3>
        <div className="prose">
          <p>
            The Executive proposed a budget that both parties could support. The
            minor adjustments reflect targeted additions rather than political
            conflict. In an era of partisan gridlock, a near-unanimous budget is
            arguably a positive outcome for residents.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mt-10 mb-3">
          As a question about oversight
        </h3>
        <div className="prose">
          <p>
            An $876 million budget contains thousands of line items across 39
            departments. A legislature that changes only six departments and adds
            only $471,675 raises a fair question: how closely are legislators
            reviewing the remaining $875.5 million? Effective oversight
            doesn&apos;t require conflict, but it does require scrutiny, and
            scrutiny usually produces more than six modifications.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mt-10 mb-3">
          As a pattern worth tracking
        </h3>
        <div className="prose">
          <p>
            One year of data is an observation, not a trend. If the legislature
            consistently rubber-stamps the Executive&apos;s budget year after
            year, that tells a different story than if 2025 was an unusually
            consensus-driven year. The 2024 and 2026 proposed-vs-adopted
            comparisons (when data is available) will clarify which it is.
          </p>
        </div>
      </section>

      {/* WHAT WE DON'T KNOW YET */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          What We Don&apos;t Know Yet
        </h2>
        <div className="prose">
          <p>
            This analysis covers the operating budget only. Capital budget
            changes, if any, are tracked separately and use a different format.
            We also don&apos;t have line-item detail within each
            department&apos;s modification: the data shows that Contract Agency
            received $219,500 more, but not which specific contracts or programs
            that money funded. A FOIL request for the legislature&apos;s budget
            markup documents could fill this gap.
          </p>
          <p>
            The 2026 budget was adopted at $914,218,305, a 4.3% increase over
            2025. For a full department-by-department breakdown of where that
            $914 million goes, see our companion Evidence Brief:{" "}
            &ldquo;Where $914 Million Goes: The 2026 Rockland County Budget,
            Department by Department.&rdquo;
          </p>
        </div>
      </section>

      {/* THE BOTTOM LINE */}
      <section className="mb-12 border-l-[3px] border-red pl-6 py-2">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          The Bottom Line
        </h2>
        <div className="prose font-medium">
          <p>
            The Rockland County Legislature made $471,675 in changes to an $876
            million operating budget in 2025, touching 6 of 39 departments, all
            increases, totaling 0.054% of spending. Whether that reflects
            bipartisan consensus or insufficient oversight depends on
            information not yet public. What the data does show, clearly, is
            that the 2025 budget was overwhelmingly the County
            Executive&apos;s document.
          </p>
        </div>
      </section>

      {/* HOW WE DID THIS */}
      <section className="mb-10 border-t border-rule pt-8">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-gray-light mb-4">
          How We Did This
        </h2>
        <div className="text-sm text-gray leading-relaxed">
          <p>
            This Evidence Brief is based on department-level budget totals parsed
            from the 2025 Proposed and Adopted Operating Budget PDFs published by
            the Rockland County Executive&apos;s Office. All figures were
            extracted using pdfplumber and stored in the rockland.news public
            records database (47,638+ financial records, FY2021-2026).
            Proposed-vs-adopted comparisons were computed programmatically at the
            department level.
          </p>
          <p className="mt-3">
            Full methodology, data tables, and source files are available at
            rockland.news/evidence-briefs/2025-budget-proposed-vs-adopted.
          </p>
        </div>
      </section>

      {/* SOURCES */}
      <section className="border-t border-rule pt-8 mb-12">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-gray-light mb-4">
          Sources
        </h2>

        <h4 className="text-xs font-semibold text-ink uppercase tracking-wide mt-4 mb-2">
          Budget Documents
        </h4>
        <ul className="space-y-2 mb-6">
          <li className="text-sm text-gray leading-relaxed">
            <a
              href="https://rocklandcountyny.gov/departments/county-executive/budget"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red underline underline-offset-2 hover:text-red-dark transition-colors"
            >
              2025 Proposed Operating Budget, Rockland County Executive&apos;s
              Office.
            </a>
          </li>
          <li className="text-sm text-gray leading-relaxed">
            <a
              href="https://rocklandcountyny.gov/departments/county-executive/budget"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red underline underline-offset-2 hover:text-red-dark transition-colors"
            >
              2025 Adopted Operating Budget, Rockland County Legislature.
            </a>
          </li>
        </ul>

        <h4 className="text-xs font-semibold text-ink uppercase tracking-wide mt-4 mb-2">
          rockland.news Analysis
        </h4>
        <ul className="space-y-2">
          <li className="text-sm text-gray leading-relaxed">
            Department-level budget totals parsed from official PDF documents.
            47,638+ financial records, FY2021-2026.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Proposed-vs-adopted comparisons computed programmatically. All code
            and queries available at rockland.news.
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="border-t border-rule pt-6 text-xs text-gray-light italic leading-relaxed">
        <p className="mb-3">
          rockland.news evaluates policy based on facts, human outcomes, and the
          efficient use of public dollars, with a commitment that the most
          vulnerable residents are not left behind. When these values conflict,
          we show you the tradeoff and tell you what the evidence supports. Our
          recommendations are provisional: we state what would change our mind,
          because analysis that can&apos;t be wrong can&apos;t be trusted.
        </p>
        <p className="mb-3">
          Found an error or disagree with our analysis? Reach us on{" "}
          <a
            href="https://x.com/RocklandDOTNews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red underline underline-offset-2 hover:text-red-dark"
          >
            @RocklandDOTNews
          </a>
          . We publish corrections and responses.
        </p>
        <p>
          This is the first Evidence Brief in the rockland.news County Budget
          Series. Upcoming: department-by-department breakdown of the 2026
          budget, and multi-year trend analysis across all 39 departments.
        </p>
      </div>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/evidence-briefs"
          className="text-sm text-gray hover:text-red transition-colors"
        >
          &larr; All Evidence Briefs
        </Link>
      </div>
    </article>
  );
}
