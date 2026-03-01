import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Follow the Money",
  description:
    "Budget analysis, vendor contracts, and spending trends across every level of Rockland County government.",
};

export default function Budget() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <span className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-red">
          #follow-the-money
        </span>
        <h1 className="font-serif text-4xl font-bold mt-2 mb-4">
          Follow the Money
        </h1>
        <p className="text-lg text-gray leading-relaxed max-w-2xl">
          Where does your property tax dollar go? We track budgets, vendor
          contracts, and spending trends across the county, all five towns, and
          eight school districts. Every number sourced to a public document.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">What we track</h3>
          <ul className="text-sm text-gray space-y-2">
            <li>County operating and capital budgets (FY2021–2026)</li>
            <li>Town budgets across all five municipalities</li>
            <li>School district expenditures and per-pupil spending</li>
            <li>Vendor contracts and procurement patterns</li>
            <li>Budget-to-actual variances and year-over-year trends</li>
          </ul>
        </div>
        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">Key findings so far</h3>
          <ul className="text-sm text-gray space-y-2">
            <li>
              $9,400 per-pupil spending gap across 8 school districts
            </li>
            <li>
              Legislature changed only 0.054% of the Executive&apos;s $876M budget proposal
            </li>
            <li>
              Sheriff department budget showing significant multi-year growth
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-12 border border-dashed border-rule">
        <p className="text-gray mb-4">
          Detailed budget analyses and Evidence Briefs publishing soon.
        </p>
        <Link
          href="/newsletter"
          className="inline-block bg-ink text-white text-sm px-6 py-2 hover:bg-ink-light transition-colors"
        >
          Get notified
        </Link>
      </div>
    </div>
  );
}
