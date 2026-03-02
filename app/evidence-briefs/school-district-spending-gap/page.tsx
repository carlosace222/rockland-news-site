import type { Metadata } from "next";
import EvidenceBriefArticle from "../EvidenceBriefArticle";
import DataTable from "../DataTable";

export const metadata: Metadata = {
  title: "The $9,403 Gap: Why Rockland's School Spending Varies by 33% Across District Lines",
  description:
    "Per-pupil spending across Rockland's eight school districts ranges from $28,891 to $38,294. What's driving the gap?",
};

export default function SchoolDistrictSpendingGap() {
  return (
    <EvidenceBriefArticle
      pillar="Follow the Money"
      pillarHref="/budget"
      title="The $9,403 Gap"
      subtitle="Why Rockland's School Spending Varies by 33% Across District Lines"
      date="March 1, 2026"
      dataAsOf="Data current through 2023-24 school year (NYSED ESSA Financial Transparency)"
      tier="free"
      question={
        <p>
          Rockland County has eight public school districts serving roughly 39,000 students.
          Parents in each district pay property taxes that fund their local schools. But how much
          each district actually spends per student varies dramatically. Is Clarkstown, the
          county&apos;s largest suburban district, getting less for its money, or spending more
          efficiently?
        </p>
      }
      dataSection={
        <>
          <p>
            In the 2023-24 school year, per-pupil spending across Rockland&apos;s eight districts
            ranged from $28,891 to $38,294. That&apos;s a $9,403 gap, or 33%, between the highest
            and lowest spenders. A classroom of 25 students in South Orangetown represents roughly
            $235,000 more in annual spending than the same classroom in Clarkstown.
          </p>

          <DataTable
            caption="Per-Pupil Total Spending, 2023-24 School Year"
            headers={["District", "Per-Pupil Spending", "Enrollment", "Grad Rate (4-yr)"]}
            alignRight={[1, 2, 3]}
            rows={[
              ["South Orangetown CSD", "$38,294", "2,739", "95%"],
              ["Pearl River UFSD", "$36,587", "2,198", "93%"],
              ["Suffern CSD", "$36,491", "3,769", "91%"],
              ["Nanuet UFSD", "$33,584", "2,158", "96%"],
              ["North Rockland CSD", "$32,745", "7,700", "90%"],
              ["Nyack UFSD", "$31,943", "2,787", "90%"],
              ["East Ramapo CSD", "$31,387", "10,189", "74%"],
              ["Clarkstown CSD", "$28,891", "7,804", "94%"],
            ]}
          />

          <p>
            The pattern is not random. Three structural factors explain most of the variation.
          </p>

          <p>
            <strong>1. District size and economies of scale.</strong> The two lowest-spending
            districts, Clarkstown and East Ramapo, are also the two largest by enrollment (7,804
            and 10,189 students respectively). Larger districts spread fixed costs (administration,
            facilities, central services) across more students. Clarkstown&apos;s general
            administrative cost is $169 per pupil; Nanuet&apos;s is $400. That&apos;s a 2.4x
            difference in overhead alone.
          </p>

          <p>
            <strong>2. Student population needs.</strong> Districts serving more economically
            disadvantaged students and English language learners (ELL) face higher costs for
            mandated services but don&apos;t always receive proportional funding. East Ramapo is
            the extreme case: 88% economically disadvantaged, 56% ELL. It spends $31,387 per pupil,
            below the county median, while serving the most resource-intensive population.
          </p>

          <DataTable
            caption="Economic Disadvantage Rate by District, 2023-24"
            headers={["District", "Econ. Disadvantaged", "ELL", "Students w/ Disabilities"]}
            alignRight={[1, 2, 3]}
            rows={[
              ["East Ramapo CSD", "88%", "56%", "15%"],
              ["North Rockland CSD", "60%", "17%", "15%"],
              ["Suffern CSD", "49%", "18%", "14%"],
              ["Nanuet UFSD", "36%", "7%", "14%"],
              ["Nyack UFSD", "30%", "10%", "15%"],
              ["Clarkstown CSD", "25%", "5%", "19%"],
              ["South Orangetown CSD", "21%", "6%", "17%"],
              ["Pearl River UFSD", "20%", "4%", "15%"],
            ]}
          />

          <p>
            <strong>3. Special education and transportation costs.</strong> These two categories
            show the widest variation and are largely driven by factors outside a district&apos;s
            control. Special education spending per pupil ranges from $20,289 (Nyack) to $40,689
            (Pearl River), a 2x gap. This reflects the specific mix of disabilities in each
            district&apos;s population and the cost of mandated out-of-district placements.
          </p>

          <p>
            Transportation is even more striking. East Ramapo spends $6,053 per pupil on
            transportation, roughly three times the county average of $2,100. This is driven by the
            district&apos;s obligation under New York Education Law to transport students to private
            and parochial schools within a set radius, regardless of where those schools are located.
            In a district where roughly 70% of school-age residents attend private schools, the
            public school system bears the transportation cost for a population far larger than its
            own enrollment.
          </p>

          <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
            What This Means for Clarkstown
          </h3>

          <p>
            Clarkstown&apos;s position at the bottom of the spending table ($28,891/pupil)
            coexists with a 94% graduation rate, second-highest in the county. That combination
            suggests either genuine efficiency or deferred costs that haven&apos;t surfaced yet
            (maintenance backlogs, salary compression, understaffing in certain programs).
          </p>

          <p>
            Key context: Clarkstown&apos;s disability rate (19% of students classified as having
            disabilities) is the highest in the county, yet its special education per-pupil spending
            ($23,160) ranks seventh of eight. That gap warrants closer examination. Either
            Clarkstown is serving high-needs students at below-average cost, which could indicate
            efficiency or underfunding, or the classification criteria differ meaningfully from
            other districts.
          </p>

          <p>
            Enrollment trends add another layer. Since 2019, Clarkstown has lost 94 students (from
            7,898 to 7,804, a 1.2% decline). East Ramapo, by contrast, has gained 1,355 students
            (from 8,834 to 10,189, a 15.3% increase). Enrollment shifts directly affect per-pupil
            metrics and tax base calculations. Shrinking enrollment with fixed infrastructure costs
            pushes per-pupil spending up in theory; Clarkstown&apos;s continued low ranking despite
            slight enrollment decline suggests tight fiscal management.
          </p>
        </>
      }
      unknowns={
        <>
          <p>
            This analysis uses NYSED&apos;s ESSA Financial Transparency data, which became
            available starting in the 2023-24 school year. We have one year of spending data. One
            year is an observation, not a trend. When 2024-25 data is released, we&apos;ll be able
            to see whether the spending gaps are widening, narrowing, or stable.
          </p>
          <p>
            We also don&apos;t have line-item budget detail for each district. The NYSED data breaks
            spending into categories (instruction, transportation, special education, administration)
            but doesn&apos;t show individual salary lines, contract costs, or facility expenditures.
            School district budgets and ACFRs (Annual Comprehensive Financial Reports, the audited
            year-end financial statements districts must publish) would provide that detail.
          </p>
          <p>
            Finally, spending per pupil is an input measure. It tells you how much money goes into
            the system, not what outcomes it produces. Graduation rates are one output; college
            readiness, career placement, and post-secondary persistence are others that this data
            doesn&apos;t capture.
          </p>
        </>
      }
      bottomLine={
        <p>
          Rockland County&apos;s eight school districts spend between $28,891 and $38,294 per
          student, a 33% gap driven primarily by district size, student demographics, and mandated
          service costs (special education and transportation). Clarkstown spends the least per pupil
          but graduates students at the second-highest rate. East Ramapo serves the highest-need
          population with below-median funding while absorbing transportation costs for a private
          school population that dwarfs its own enrollment. The spending gap is real, but it tells a
          story about structural mandates and local tax bases more than about any district&apos;s
          choices.
        </p>
      }
      sources={[
        {
          text: "NYSED ESSA Financial Transparency Data, 2023-24 school year.",
          url: "https://data.nysed.gov",
        },
        {
          text: "NYSED Enrollment Data, 2018-19 through 2023-24.",
          url: "https://data.nysed.gov",
        },
        {
          text: "NYSED Graduation Rate Data, 2018-19 through 2023-24.",
          url: "https://data.nysed.gov",
        },
        {
          text: "Analysis based on 1,127 school district metrics stored in the rockland.news public records database, covering 8 districts across 6 school years.",
        },
      ]}
    />
  );
}
