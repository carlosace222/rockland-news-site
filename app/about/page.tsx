import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our mission, editorial principles, and the team behind rockland.news — civic transparency for Rockland County, NY.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold mb-8">About rockland.news</h1>

      <div className="prose">
        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">The Problem</h2>
        <p>
          Rockland County has 330,000 residents, a $900 million county budget, five
          towns, and eight school districts. The information about how all of this
          works — budgets, contracts, development applications, campaign donations,
          legislative votes — is technically public. But it&apos;s scattered across
          dozens of websites, buried in PDFs, and written in jargon designed for
          insiders.
        </p>
        <p>
          The result is an information asymmetry: the people making decisions know
          far more than the people affected by those decisions. That gap isn&apos;t a
          bug — it&apos;s a feature that protects the status quo.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">What We Do</h2>
        <p>
          We close the gap. Our automated systems collect public data from 15+
          government sources every week — budgets, meeting agendas, campaign
          filings, vendor contracts, school district reports, and development
          applications. We cross-reference it, analyze the patterns, and publish
          what we find in plain language.
        </p>
        <p>
          Every claim is sourced. Every number is traceable to a page in a public
          record. We don&apos;t do anonymous tips or unverified rumors. We do data.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">
          Editorial Principles
        </h2>
        <p>
          <strong>Evidence first.</strong> Every factual claim is sourced to a
          public record. We distinguish clearly between reporting and analysis.
        </p>
        <p>
          <strong>Systems over villains.</strong> When something isn&apos;t working, we
          ask &quot;what incentive structure produced this outcome?&quot; before asking
          &quot;who&apos;s to blame?&quot;
        </p>
        <p>
          <strong>Nonpartisan.</strong> We never endorse or oppose candidates or
          parties. We follow the evidence, not a narrative.
        </p>
        <p>
          <strong>Equal rigor, every town.</strong> Clarkstown, Ramapo, Haverstraw,
          Orangetown, and Stony Point all get the same standards of coverage.
        </p>
        <p>
          <strong>Accessible.</strong> Government jargon is defined on first use.
          If a resident can&apos;t understand what we wrote, we failed.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Who We Are</h2>
        <p>
          rockland.news is built by{" "}
          <a
            href="https://currentcreative.ai"
            className="text-ink underline hover:text-ink-light"
          >
            Current Creative
          </a>
          , an AI consulting firm based in Rockland County. We live here. Our kids
          go to school here. We pay property taxes here. This isn&apos;t an outside
          project — it&apos;s a neighbor reading the budget and telling you what&apos;s in
          it.
        </p>

        <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Our Bet</h2>
        <p>
          If Rockland County residents have access to the same quality of
          government data and analysis that insiders take for granted, they&apos;ll
          make better demands of their government. That&apos;s it. That&apos;s the theory
          of change.
        </p>
      </div>

      <div className="mt-12 flex gap-4">
        <Link
          href="/methodology"
          className="text-sm bg-ink text-white px-6 py-2 hover:bg-ink-light transition-colors"
        >
          Read Our Methodology
        </Link>
        <Link
          href="/contact"
          className="text-sm border border-ink text-ink px-6 py-2 hover:bg-paper-dark transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
