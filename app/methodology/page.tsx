import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How rockland.news collects, structures, and analyzes public government data for Rockland County.",
};

const sources = [
  {
    source: "Rockland County Budget Office",
    collects: "Annual budgets, ACFR financial reports",
  },
  {
    source: "County Legislature",
    collects: "Agendas, minutes, vote records, committee materials",
  },
  {
    source: "Clarkstown",
    collects: "Planning/zoning board records, town budget documents",
  },
  {
    source: "Ramapo",
    collects: "Town board and planning board agendas, budget documents",
  },
  {
    source: "Orangetown",
    collects: "Planning board records, adopted budgets",
  },
  {
    source: "Haverstraw",
    collects: "Adopted budget PDFs, planning board minutes",
  },
  {
    source: "Stony Point",
    collects: "Budget information, board agendas and minutes",
  },
  {
    source: "NY Board of Elections",
    collects: "Campaign finance filings \u2014 contributions and expenditures",
  },
  {
    source: "NYSED",
    collects:
      "School district enrollment, spending, graduation rates, demographics",
  },
  {
    source: "NYS Comptroller",
    collects: "Peer county financial comparisons, pension data",
  },
];

export default function Methodology() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold mb-8">
        How we do the work
      </h1>

      <div className="prose">
        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Data Collection
        </h2>
        <p>
          We collect public records from government websites across Rockland
          County, including town and county budget documents, legislature agendas
          and minutes, planning and zoning board records, campaign finance
          filings from the New York Board of Elections, school district data from
          NYSED, and vendor contract information.
        </p>
        <p>
          Records are collected using automated software that checks government
          websites on a regular schedule. When source documents are PDFs, text is
          extracted and structured programmatically. When source pages are HTML,
          relevant data is parsed directly.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Database</h2>
        <p>
          Collected records are organized into a structured database. The current
          database contains over 47,000 financial records spanning fiscal years
          2021&ndash;2026, more than 8,200 campaign finance entries,
          approximately 3,000 meeting documents from all five towns and the
          county legislature, and school district enrollment and spending data
          from NYSED for all eight Rockland County districts.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Cross-Referencing
        </h2>
        <p>
          The database supports queries that span multiple data sources. Examples
          include comparing per-pupil spending across all eight school districts,
          identifying entities that appear in both campaign finance records and
          vendor contract records, flagging budget line items where actual
          spending deviates significantly from appropriation, and tracking
          spending trends across fiscal years with inflation adjustment.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Analysis and Publication
        </h2>
        <p>
          Cross-reference findings, anomalies, and patterns are reviewed
          editorially before publication. Evidence Briefs include explicit
          confidence levels, source citations for every factual claim, statements
          of what evidence would change the conclusion, and disclosure of data
          gaps.
        </p>
        <p>
          We do not publish findings based solely on automated outputs. All
          analysis passes through editorial judgment before it reaches the site.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Limitations
        </h2>
        <p>
          Our database is not complete. We are continuously expanding coverage
          and improving data quality. Specific limitations include: not all
          historical records have been digitized and ingested, some
          municipalities publish records in formats that are difficult to parse
          consistently, cross-referencing depends on entity name matching which
          can produce both false positives and missed connections, and records
          are only as current as the most recent collection cycle.
        </p>
        <p>
          When we know our data is incomplete on a topic, we say so in the
          published analysis.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Source List
        </h2>
      </div>

      {/* Source table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm border border-rule">
          <thead>
            <tr className="bg-paper-dark">
              <th className="text-left font-semibold px-4 py-3 border-b border-rule">
                Source
              </th>
              <th className="text-left font-semibold px-4 py-3 border-b border-rule">
                What We Collect
              </th>
            </tr>
          </thead>
          <tbody>
            {sources.map((row, i) => (
              <tr
                key={row.source}
                className={i % 2 === 1 ? "bg-paper-dark/50" : ""}
              >
                <td className="px-4 py-2.5 border-b border-rule font-medium text-ink">
                  {row.source}
                </td>
                <td className="px-4 py-2.5 border-b border-rule text-gray">
                  {row.collects}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
