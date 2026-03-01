import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How rockland.news collects, verifies, and analyzes public government data for Rockland County.",
};

export default function Methodology() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold mb-8">Methodology</h1>

      <div className="prose">
        <p className="text-lg text-text-muted mb-8">
          Transparency about our own process is as important as the transparency
          we demand from government. Here&apos;s exactly how we work.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Data Collection
        </h2>
        <p>
          We run automated scrapers against 15+ public government data sources on
          a regular schedule. These include county and town budget documents,
          meeting agendas and minutes, New York Board of Elections campaign finance
          filings, NYSED school district reports, vendor contract listings, and
          county legislature records.
        </p>
        <p>
          All scrapers include change detection — we only process documents when
          they&apos;ve actually been updated. Raw source documents are always preserved
          for audit.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Cross-Referencing
        </h2>
        <p>
          Our database links entities across datasets using fuzzy matching.
          This allows us to answer questions like: &quot;Which campaign donors also
          have county vendor contracts?&quot; or &quot;How does this town&apos;s budget growth
          compare to inflation and peer municipalities?&quot;
        </p>
        <p>
          When we identify a pattern — such as a donor-vendor overlap — we report
          the connection and the dollar amounts, not a conclusion about intent.
          Correlation is documented. Causation requires more evidence.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Verification Standards
        </h2>
        <p>
          Every number published must be traceable to a specific page in a
          public record. We cite our sources at the end of every Evidence Brief
          and link to original documents when available online.
        </p>
        <p>
          When data appears anomalous, we verify against multiple sources before
          publishing. If a number seems wrong but we can&apos;t resolve the discrepancy,
          we note the uncertainty explicitly.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Comparisons
        </h2>
        <p>
          A number without context is noise. We benchmark Rockland County data
          against peer counties, state averages, and national standards where
          available. When we say spending is &quot;above average,&quot; we show you the
          comparison set.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Corrections
        </h2>
        <p>
          We will get things wrong. When we do, we correct the record promptly
          and transparently. Corrections are noted at the top of the affected
          article and logged on our corrections page.
        </p>
        <p>
          If you spot an error, please{" "}
          <a href="/contact" className="text-navy underline">
            let us know
          </a>
          . Accuracy matters more than speed.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          AI Disclosure
        </h2>
        <p>
          We use AI tools in our data processing pipeline — for extracting
          structured data from PDFs, normalizing records across different formats,
          and generating initial draft analyses. All AI-assisted content is
          reviewed and edited by humans before publication. Our daily podcast uses
          AI narration.
        </p>
        <p>
          The analysis and editorial judgment are human. The scale is
          AI-assisted. We believe this is the only way a small team can provide
          the breadth of coverage that 330,000 residents deserve.
        </p>
      </div>
    </div>
  );
}
