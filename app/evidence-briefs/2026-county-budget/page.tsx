import type { Metadata } from "next";
import EvidenceBriefArticle from "../EvidenceBriefArticle";
import DataTable from "../DataTable";

export const metadata: Metadata = {
  title: "Where $914 Million Goes: The 2026 Rockland County Budget, Department by Department",
  description:
    "Rockland County's operating budget has grown 32% in five years. Where is $914 million actually going?",
};

export default function CountyBudget2026() {
  return (
    <EvidenceBriefArticle
      pillar="Follow the Money"
      pillarHref="/budget"
      title="Where $914 Million Goes"
      subtitle="The 2026 Rockland County Budget, Department by Department"
      date="March 1, 2026"
      dataAsOf="Data current through 2026 Adopted Operating Budget"
      tier="free"
      question={
        <p>
          Rockland County adopted a $914,218,305 operating budget for 2026. County officials
          called it fiscally responsible. But where does $914 million actually go? Which
          departments are growing, which are shrinking, and what&apos;s driving the trajectory?
        </p>
      }
      dataSection={
        <>
          <p>
            The county&apos;s adopted operating budget has grown from $693 million in 2021 to
            $914 million in 2026, a 32% increase over five years. For a county of 330,000
            residents, that&apos;s a rise from roughly $2,099 to $2,770 per person.
          </p>

          <DataTable
            caption="Adopted Operating Budget, 2021-2026"
            headers={["Fiscal Year", "Total Expenditures", "YoY Change", "Per Capita"]}
            alignRight={[1, 2, 3]}
            rows={[
              ["2021", "$692,568,624", "--", "$2,099"],
              ["2022", "$789,717,030", "+14.0%", "$2,393"],
              ["2023", "$812,764,845", "+2.9%", "$2,463"],
              ["2024", "$870,945,145", "+7.2%", "$2,639"],
              ["2025", "$876,516,245", "+0.6%", "$2,656"],
              ["2026", "$914,218,305", "+4.3%", "$2,770"],
            ]}
          />

          <p>
            Two years stand out. The 2022 budget jumped 14%, the single largest increase in the
            period. The 2025 budget was nearly flat at +0.6%, suggesting either genuine restraint
            or a one-year deferral of costs. The 2026 budget&apos;s 4.3% growth rate is above the
            2023-2025 average (3.6%) but below cumulative CPI inflation over the same period.
          </p>

          <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
            The Big Five: Where the Money Actually Goes
          </h3>

          <p>
            Five departments account for $640 million, or 70% of the entire operating budget:
          </p>

          <DataTable
            headers={["Department", "2026 Budget", "Share", "2025 Budget", "Change"]}
            alignRight={[1, 2, 3, 4]}
            rows={[
              ["Social Services", "$183,051,125", "20.0%", "$182,876,660", "+0.1%"],
              ["Sheriff", "$99,589,045", "10.9%", "$95,923,830", "+3.8%"],
              ["Health", "$95,479,735", "10.4%", "$86,498,030", "+10.4%"],
              ["Debt Service", "$63,942,000", "7.0%", "$57,579,200", "+11.1%"],
              ["Sewer", "$57,248,915", "6.3%", "$52,888,770", "+8.2%"],
            ]}
          />

          <p>
            Social Services dominates at $183 million, one-fifth of the total. This department
            administers Medicaid (a state and federal mandate New York requires counties to
            co-fund), temporary assistance, foster care, and other safety-net programs. Its
            near-flat growth (+0.1%) in 2026 likely reflects caseload stability rather than a
            policy choice; most of this spending is formula-driven.
          </p>

          <p>
            The Health Department&apos;s 10.4% increase ($9 million) is the largest percentage
            jump among the Big Five. Without line-item detail, we can&apos;t determine whether
            this reflects expanded services, higher contract costs, or Medicaid-related
            pass-throughs.
          </p>

          <p>
            Debt Service at $64 million and growing 11.1% is the cost of past borrowing. Every
            dollar spent here services bonds and loans already issued. That this line grows faster
            than the overall budget means a rising share of current revenue pays for past decisions.
          </p>

          <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
            Fastest-Growing Departments
          </h3>

          <p>
            The departments growing fastest by percentage tell a different story than the Big Five:
          </p>

          <DataTable
            headers={["Department", "2026 Budget", "2025 Budget", "Change", "% Change"]}
            alignRight={[1, 2, 3, 4]}
            rows={[
              ["Youth Bureau", "$3,378,080", "$2,737,025", "+$641,055", "+23.4%"],
              ["Assigned Counsel Plan", "$4,501,860", "$3,765,000", "+$736,860", "+19.6%"],
              ["Executive", "$10,976,250", "$9,493,515", "+$1,482,735", "+15.6%"],
              ["Veterans", "$1,150,960", "$1,006,355", "+$144,605", "+14.4%"],
              ["Contract Agency", "$2,677,000", "$2,341,400", "+$335,600", "+14.3%"],
            ]}
          />

          <p>
            The Assigned Counsel Plan (court-appointed legal representation for people who
            can&apos;t afford attorneys) has nearly tripled since 2021, from $1.5 million to
            $4.5 million. This tracks with New York State&apos;s ongoing Hurrell-Harring reforms,
            which require counties to improve the quality and availability of indigent defense.
            It&apos;s a mandate, not a choice.
          </p>

          <p>
            The Youth Bureau&apos;s 23.4% increase is notable for a department under $4 million.
            Whether this reflects expanded programming or one-time costs isn&apos;t clear from
            department-level data.
          </p>

          <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
            Where Spending Fell
          </h3>

          <p>Only seven of 39 departments saw cuts in 2026:</p>

          <DataTable
            headers={["Department", "2026 Budget", "Change", "% Change"]}
            alignRight={[1, 2, 3]}
            rows={[
              ["Mental Health", "$33,529,165", "-$1,292,840", "-3.7%"],
              ["Unclassified", "$44,615,630", "-$2,171,110", "-4.6%"],
              ["Fringe Benefits", "$18,886,000", "-$239,000", "-1.2%"],
              ["Law", "$5,925,225", "-$185,185", "-3.0%"],
              ["Community Development", "$2,255,005", "-$218,995", "-8.9%"],
              ["Education", "$20,797,495", "-$100,000", "-0.5%"],
              ["Road Machinery", "$2,130,205", "-$60,335", "-2.8%"],
            ]}
          />

          <p>
            The Mental Health cut ($1.3 million, 3.7%) warrants scrutiny. Rockland County has among
            the highest opioid-related mortality rates in the Hudson Valley. A declining mental
            health budget in that context raises a question about whether county-funded services are
            being replaced by state or nonprofit programs, or simply reduced.
          </p>

          <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
            Five-Year Structural Shifts
          </h3>

          <p>
            Looking at cumulative growth from 2021 to 2026, Public Transportation stands out: from
            $5.8 million to $43 million, a 643% increase. This likely reflects the county&apos;s
            takeover or expansion of transit operations. The Public Defender&apos;s office grew 83%,
            from $4.1 million to $7.6 million, again driven largely by state indigent defense
            mandates.
          </p>

          <p>
            Meanwhile, Clarkstown and other towns pay their share through property taxes and receive
            county services in return. The question for residents is whether the 32% growth in
            operating costs over five years delivered 32% more or better services, or whether
            structural mandates (Medicaid, indigent defense, debt service, transit) consumed most of
            the growth while discretionary services stayed flat.
          </p>
        </>
      }
      unknowns={
        <>
          <p>
            This analysis covers the operating budget only. The county also maintains separate
            capital, personnel, and program budgets. Capital spending (roads, buildings, equipment)
            and its associated debt are not fully captured here.
          </p>
          <p>
            We don&apos;t yet have peer county comparisons. Dutchess, Orange, and Ulster counties
            have similar populations and suburban/rural demographics. Comparing their budget
            trajectories would clarify whether Rockland&apos;s 32% growth is typical for the region
            or an outlier.
          </p>
          <p>
            We also don&apos;t have revenue-side detail in this analysis. A $914 million budget
            funded 60% by property taxes looks different from one funded 60% by state aid. The
            revenue mix determines who actually pays for these expenditures. We&apos;ll publish a
            revenue analysis separately.
          </p>
          <p>
            Finally, the &ldquo;Unclassified&rdquo; category at $44.6 million (4.9% of the budget)
            is opaque by definition. Line-item detail would reveal what&apos;s actually in there. A
            FOIL request for the Unclassified budget detail could clarify.
          </p>
        </>
      }
      bottomLine={
        <p>
          Rockland County&apos;s $914 million operating budget is 32% larger than it was five years
          ago. The growth is concentrated in areas largely outside the county&apos;s discretion:
          Social Services mandates ($183M), debt service ($64M, growing 11%), indigent defense
          requirements (tripled since 2021), and transit operations (up 643%). The 32 departments
          that don&apos;t make the top five split the remaining 30% of the budget. For residents,
          the central tension is clear: mandated costs consume more each year, while the departments
          that deliver visible local services (roads, parks, planning, veterans) compete for an
          increasingly constrained remainder.
        </p>
      }
      sources={[
        {
          text: "2021-2026 Adopted Operating Budgets, Rockland County Executive's Office.",
          url: "https://rocklandcountyny.gov/departments/county-executive/budget",
        },
        {
          text: "Analysis based on 47,638+ financial records parsed from official budget PDFs and stored in the rockland.news public records database, FY2021-2026.",
        },
        {
          text: "Per-capita calculations based on Rockland County's approximate population of 330,000 (2020 Census).",
        },
      ]}
    />
  );
}
