import type { Metadata } from "next";
import Link from "next/link";
import DataTable from "../DataTable";

export const metadata: Metadata = {
  title:
    "East Ramapo Spends 3x the County Average on Busing While Ranking Last in Classroom Spending",
  description:
    "East Ramapo spends $6,053 per student on transportation — three times the county average — while ranking last in instruction spending. A rockland.news Evidence Brief.",
};

export default function EastRamapoSpending() {
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
        East Ramapo Spends 3x the County Average on Busing While Ranking Last
        in Classroom Spending
      </h1>
      <p className="text-lg text-gray leading-relaxed mb-6">
        Here&apos;s What Would Change That
      </p>

      {/* Meta line */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-light border-b border-rule pb-6 mb-10">
        <span>rockland.news</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>School District Policy Series</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>Published March 2026</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>
          Data current through 2023-24 (NYSED ESSA Financial Transparency)
        </span>
      </div>

      {/* THE POLICY QUESTION */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          The Policy Question
        </h2>
        <div className="prose">
          <p>
            East Ramapo Central School District spends $6,053 per student on
            transportation — three times the county average — while ranking dead
            last in classroom instruction spending. With 56% of students learning
            English, a 43% ELL graduation rate, and a NYS Comptroller review
            confirming the district&apos;s fund balance was underestimated by
            $43.3 million while monitors warned of bankruptcy, how should the
            district restructure its $31,387 per-pupil budget to get more money
            in front of the students who need it most?
          </p>
        </div>
      </section>

      {/* EVIDENCE AT A GLANCE */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          The Evidence at a Glance
        </h2>

        <DataTable
          caption="East Ramapo vs. County Benchmarks, 2023-24"
          headers={[
            "Metric",
            "East Ramapo",
            "County Avg",
            "Best in County",
            "Rank (of 8)",
          ]}
          alignRight={[1, 2, 3, 4]}
          rows={[
            [
              "Per-pupil spending (total)",
              "$31,387",
              "$33,755",
              "$40,470 (Nanuet)",
              "7th",
            ],
            [
              "Per-pupil instruction",
              "$17,195",
              "$20,579",
              "$23,521 (Pearl River)",
              "8th (last)",
            ],
            [
              "Per-pupil transportation",
              "$6,053",
              "$2,524",
              "$1,269 (Pearl River)",
              "8th (last)",
            ],
            [
              "Transportation as % of budget",
              "19.3%",
              "7.5%",
              "3.1% (Pearl River)",
              "8th (last)",
            ],
            [
              "Graduation rate (overall)",
              "74%",
              "93%",
              "97% (Nanuet)",
              "8th (last)",
            ],
            [
              "Graduation rate (ELL)",
              "43%",
              "71%",
              "100% (Nanuet*)",
              "8th (last)",
            ],
            [
              "% Economically disadvantaged",
              "88%",
              "34%",
              "6% (Nanuet)",
              "8th (highest need)",
            ],
            [
              "% English Language Learners",
              "56%",
              "12%",
              "1% (Pearl River)",
              "8th (highest need)",
            ],
            [
              "Enrollment change (2019–24)",
              "+15.3%",
              "−6.1%",
              "—",
              "Only district growing",
            ],
          ]}
        />
        <p className="text-xs text-gray-light italic mt-2">
          *Nanuet&apos;s 100% ELL graduation rate reflects a cohort of fewer
          than 10 students. Small cohorts produce volatile rates.
        </p>

        <div className="border-l-[3px] border-red pl-6 py-4 my-8">
          <p className="text-sm text-ink font-medium leading-relaxed">
            <strong>Bottom line:</strong> East Ramapo has the highest-need
            students in Rockland County, the lowest instructional spending, the
            highest transportation costs by a factor of three, and the worst
            outcomes for its most vulnerable population. A NYS Comptroller review
            confirmed the district&apos;s fund balance was underestimated by
            $43.3 million — the data to catch the error was sitting in monthly
            Treasurer&apos;s reports that showed $110.6 million in cash as of
            March 2024. Nobody reconciled the numbers. Students attended schools
            with broken water fountains and no climate control while tens of
            millions sat unspent.
          </p>
        </div>
      </section>

      {/* WHAT THE DATA SHOWS */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          What the Data Shows
        </h2>

        <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
          $41 million above the county norm — on buses
        </h3>

        <div className="prose">
          <p>
            <strong>
              East Ramapo spends $6,053 per pupil on transportation.
            </strong>{" "}
            The average across the other seven Rockland districts is $2,018.
            That&apos;s a 3.0x difference — the single largest spending gap in
            any category between East Ramapo and its peers.
          </p>

          <div className="bg-paper-dark border border-rule rounded-sm p-4 my-6 text-sm">
            <p className="font-semibold text-ink mb-1">The Gap:</p>
            <p className="text-gray">
              East Ramapo spends $6,053 per student on transportation. The
              county average is $2,018. Across 10,189 students, that premium is
              $41 million per year — enough to fund 484 teaching positions at
              $85,000 in salary and benefits.
            </p>
          </div>

          <p>
            The likely driver is New York Education Law Section 3635, which
            requires public school districts to provide busing for students
            attending private and parochial schools within a specified distance.
            East Ramapo&apos;s situation is unique: roughly three-quarters of
            school-age children in the district attend private schools, mostly
            yeshivas. The district operates over 300 bus routes serving 14
            public schools and more than 140 private schools — making it the
            second-largest school transportation system in New York State outside
            New York City.
          </p>

          <p>
            This isn&apos;t a spending choice the district&apos;s superintendent
            made — it&apos;s a structural mandate imposed by state law. But
            structural or not, the dollars are real. District transportation
            costs were projected to reach $76 million for the 2024-25 school
            year, consuming more than 20% of the operating budget. In other New
            York districts, transportation typically accounts for about 5% of
            operating costs.
          </p>

          <p>
            A 2019 NYS Comptroller audit found the district was paying to
            transport significantly more students than were actually registered.
            Across 15 schools in 2017-18, the district paid private contractors
            on a per-student basis to transport 717 more students than were
            registered — an overpayment of $495,499 in a single year. The audit
            also found missing documentation for 93 of 300 sampled student
            records and no proof of address for 54 new student applications.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mt-10 mb-3">
          Last in the county where it matters most
        </h3>

        <div className="prose">
          <p>
            <strong>
              East Ramapo spends $17,195 per pupil on instruction — the lowest
              of all eight Rockland districts.
            </strong>{" "}
            The peer average is $20,579. Pearl River, at the top, allocates
            $23,521. That&apos;s a gap of $6,326 between the district with the
            highest-need students and the district spending the most on teaching
            them.
          </p>

          <p>
            Here&apos;s the structural picture:{" "}
            <strong>
              instruction accounts for 55% of East Ramapo&apos;s per-pupil
              spending. Transportation accounts for 19%.
            </strong>{" "}
            In a typical Rockland district, transportation runs 5–7% of total
            spending. East Ramapo&apos;s budget is shaped like no other district
            in the county — and the difference is going to buses, not books.
          </p>

          <p>
            East Ramapo doesn&apos;t just have average students getting less
            instruction money. It has the county&apos;s most resource-intensive
            student population — 56% ELL, 88% economically disadvantaged —
            receiving the county&apos;s least instructional spending per pupil.
            Students who need <em>more</em> support are getting funded for{" "}
            <em>less</em>.
          </p>

          <p>
            East Ramapo also ranks last in operations and maintenance at $1,396
            per pupil, less than half the county average of $2,670. The
            consequences are visible: in 2023, the district made national
            headlines when reports surfaced that school water fountains had been
            unusable for years. At a March 2025 board meeting, students
            described classrooms with no climate control.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mt-10 mb-3">
          The graduation rate gap — and who it hits hardest
        </h3>

        <div className="prose">
          <p>
            <strong>
              East Ramapo&apos;s 4-year graduation rate is 74%.
            </strong>{" "}
            The peer average is 93%. It is the only Rockland district below 90%.
          </p>

          <p>
            Break it down by subgroup and the picture sharpens.{" "}
            <strong>The ELL graduation rate is 43%.</strong> For every 10
            English Language Learners who start 9th grade in East Ramapo, fewer
            than 5 will walk at graduation. The ELL cohort is 235 students —
            larger than the combined ELL graduating cohorts of the other seven
            Rockland districts (approximately 141 students total). No other
            district in the county faces this challenge at remotely this scale.
          </p>

          <p>
            For context: nationally, the ELL graduation rate reached
            approximately 71% by 2020, up from the low 60s a decade earlier. In
            California, the state with the largest ELL population, ELL
            graduation rates rose from 67.9% to 71.8% between 2018 and 2022.
            East Ramapo&apos;s 43% is not just below its Rockland County peers —
            it is dramatically below the national average for the same
            population.
          </p>

          <p>
            <strong>One bright spot worth studying:</strong> The graduation rate
            for students with disabilities improved from 58% in 2019 to 80% in
            2024, placing East Ramapo 6th of 8 districts on this metric.
            Whatever the district is doing for SWD students appears to be
            working. The question is whether that model holds lessons for ELL
            students.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mt-10 mb-3">
          A district transforming faster than its budget
        </h3>

        <div className="prose">
          <p>
            <strong>
              East Ramapo is the only growing school district in Rockland
              County.
            </strong>{" "}
            Enrollment rose from 8,834 in 2019 to 10,189 in 2024, an increase
            of 15.3%. Every other Rockland district lost students over the same
            period — the county average was −6.1%.
          </p>

          <p>
            The composition of that growth tells the real story.{" "}
            <strong>
              The ELL population grew from 3,262 to 5,707 — a 75% increase in
              five years.
            </strong>{" "}
            East Ramapo is now a majority-ELL district, a demographic profile
            unlike any other in the county. The Hispanic student population grew
            46%. The Black student population declined 38%.
          </p>

          <p>
            A funding model built for a different student population is now
            serving a district that is 88% economically disadvantaged, 56%
            English Language Learner, and adding roughly 270 new students per
            year. The budget structure hasn&apos;t caught up to the demographic
            reality.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mt-10 mb-3">
          The missing millions: a $43.3 million accounting failure
        </h3>

        <div className="prose">
          <p>
            In November 2024, an external audit revealed that East Ramapo was
            sitting on $31.3 million in unrestricted funds — a shock to a
            district that had been warned for years it was heading for
            bankruptcy. State-appointed fiscal monitors had projected a $20-30
            million deficit. Instead, auditors found accounts recorded as empty
            that had funds in them, multiple files with different salary
            projections, and sloppy personnel records.
          </p>

          <p>
            By March 2025, the school board estimated the actual surplus could
            be as high as $90 million. They authorized a forensic audit. The
            previous fiscal monitor and assistant superintendent for business
            resigned.
          </p>

          <p>
            Then the NYS Comptroller completed its budget review. The findings
            were damning: the district began the 2024-25 fiscal year with $45
            million in unrestricted cash and $22.7 million in restricted cash.
            The fund balance had been underestimated by $43.3 million. The
            2024-25 fiscal year was projected to end with an additional $25.8
            million operating surplus.
          </p>

          <p>
            The most striking finding: the data to catch this error was
            available in plain sight. Monthly Treasurer&apos;s reports showed
            total general fund cash of approximately $110.6 million as of March
            2024 and $69 million as of June 2024. The Comptroller found that the
            fiscal monitor and the Board simply did not reconcile
            Treasurer&apos;s reports with cash flow projections — a basic
            accounting function. Had they done so, the surplus would have been
            evident before the state ordered a 4.38% tax levy increase on
            families already struggling to fund their schools.
          </p>

          <p>
            The Comptroller also found the district was relying on $20.7 million
            in nonrecurring funding to finance operating expenditures, including
            at least $5 million in ARPA funds that would no longer be available —
            a structural vulnerability that creates future budget risk even with
            the surplus.
          </p>

          <p>
            The district has since adopted a 2025-26 budget with no tax increase
            and developed a Long-Term Strategic Academic and Financial
            Improvement Plan with specific milestones running through 2029.
          </p>

          <p>
            This matters for the transportation and instruction spending
            analysis because it raises a fundamental question:{" "}
            <strong>
              if the district had tens of millions more than it believed, why
              were classrooms still underfunded?
            </strong>{" "}
            The budget structure — with 19% consumed by transportation and only
            55% reaching instruction — constrained spending even when money was
            available. The structural allocation problem exists independent of
            the total dollar amount.
          </p>

          <p className="font-medium">
            The question isn&apos;t whether East Ramapo has a problem. The data
            is unambiguous. The question is what to do about it — and on that,
            there&apos;s actual evidence to work with.
          </p>
        </div>
      </section>

      {/* WHAT THE EVIDENCE SAYS WORKS */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          What the Evidence Says Works
        </h2>

        <h3 className="font-serif text-xl font-bold text-ink mt-6 mb-3">
          Transportation cost reduction: NYS Comptroller audits show 8–15%
          savings are routine
        </h3>

        <div className="prose">
          <p>
            Multiple NYS Comptroller audits of school district transportation
            have consistently found operational inefficiencies that translate to
            concrete savings. A Mamaroneck UFSD audit found buses operating at
            only 70% capacity on most in-house routes, with the potential to
            eliminate eight buses and save over $1 million. A Goshen CSD audit
            found buses at 70% capacity and recommended eliminating nine runs
            for savings exceeding $1.1 million. A Lewiston-Porter CSD audit
            found routes at 76% capacity, with five routes eliminable for
            savings of $187,000.
          </p>

          <p>
            New York&apos;s passenger-per-bus ratio of 39.9 ranks 42nd among 50
            states — well below the national average — suggesting systemic
            capacity underutilization statewide. East Ramapo&apos;s 300+ routes
            serving 40,000+ eligible students across 154+ schools represent an
            extraordinarily complex routing challenge where even modest
            optimization would yield outsized savings.
          </p>
        </div>

        <h3 className="font-serif text-xl font-bold text-ink mt-10 mb-3">
          ELL graduation rate improvement: national data shows the gap is
          closeable
        </h3>

        <div className="prose">
          <p>
            Nationally, ELL graduation rates improved from the low 60s to
            approximately 71% between 2011 and 2020. This improvement occurred
            across states with very different policy environments, suggesting
            that targeted programming — not just demographics — drives outcomes.
            In California&apos;s 15 largest districts, Clovis USD achieved just
            a 2-percentage-point gap between overall and ELL graduation rates.
          </p>

          <p>
            NYSED&apos;s own Multilingual Learner Graduation Rate and Dropout
            Prevention Planning Tool identifies evidence-based interventions
            including newcomer academies for recently arrived immigrant students,
            co-teaching models pairing literacy and ELL specialists, and early
            warning systems that monitor ELL-specific indicators. NYSED data
            shows that &quot;Ever ELLs&quot; — students who were once classified
            as English learners but exited the classification — graduate at
            85.5%, surpassing the statewide overall rate. This demonstrates that
            when ELL students receive adequate support and achieve English
            proficiency, they outperform the general population.
          </p>
        </div>
      </section>

      {/* POLICY RECOMMENDATIONS */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          Policy Recommendations
        </h2>
        <p className="prose mb-8">
          Every recommendation below is evaluated against three tests: Does it
          improve outcomes for students? Is it an efficient use of public
          dollars? Does it help the most vulnerable populations?
        </p>

        {/* Recommendation 1 */}
        <div className="border-t border-rule pt-6 mb-8">
          <h3 className="font-serif text-xl font-bold text-ink mb-2">
            1. Publish the Forensic Audit and Full Transportation Cost Breakdown
          </h3>
          <p className="text-xs text-gray-light mb-4">
            Timeline: Immediate | Difficulty: Low | Confidence: Strong
          </p>
          <div className="prose">
            <p>
              The NYS Comptroller&apos;s budget review confirmed a $43.3 million
              fund balance underestimation and structural budget deficiencies.
              The board-authorized forensic audit should now produce — and
              publicly release — a complete accounting of how money moved through
              the district, including a full transportation cost breakdown
              separated by public school routes and private/parochial school
              obligations, state reimbursement received, and per-route costs by
              contractor.
            </p>
            <p>
              Residents cannot evaluate whether $6,053 per pupil is reasonable
              without knowing who is being transported where, at what cost, and
              by which vendors. The 2019 Comptroller audit found the district was
              paying for hundreds more students than were registered. The
              forensic audit should determine whether this pattern continued.
            </p>
            <p className="text-sm italic text-gray">
              What would change our mind: Nothing. Financial transparency is
              unconditionally warranted.
            </p>
          </div>
        </div>

        {/* Recommendation 2 */}
        <div className="border-t border-rule pt-6 mb-8">
          <h3 className="font-serif text-xl font-bold text-ink mb-2">
            2. Commission an Independent Transportation Route Audit
          </h3>
          <p className="text-xs text-gray-light mb-4">
            Timeline: Immediate | Difficulty: Low-Moderate | Confidence: Strong
          </p>
          <div className="prose">
            <p>
              Commission an independent operational audit of busing routes,
              schedules, fleet utilization, and contractor payments. NYS
              Comptroller audits of comparable districts have consistently
              identified 8–15% savings through route optimization, capacity
              utilization improvements, and contractor payment verification.
            </p>
            <div className="bg-paper-dark border border-rule rounded-sm p-4 my-4 font-mono text-xs text-gray">
              <p>
                Current transportation spending per pupil: $6,053
                <br />
                Total transportation budget (est.): $61,661,517
                <br />
                Conservative route optimization savings (10%): $6,166,152/year
                <br />
                At $85,000/position, that funds: ~73 teaching positions
              </p>
            </div>
            <p>
              A route audit costs $75,000–$150,000. If the audit reveals the
              premium is almost entirely mandate-driven with routes already
              optimized, the policy response shifts to state advocacy
              (Recommendation 4).
            </p>
            <p className="text-sm italic text-gray">
              What would change our mind: If the audit reveals routes at 90%+
              capacity utilization with no contractor overpayment.
            </p>
          </div>
        </div>

        {/* Recommendation 3 */}
        <div className="border-t border-rule pt-6 mb-8">
          <h3 className="font-serif text-xl font-bold text-ink mb-2">
            3. Invest in Evidence-Based ELL Programming with Measurable Targets
          </h3>
          <p className="text-xs text-gray-light mb-4">
            Timeline: 1–2 budget cycles | Difficulty: Moderate | Confidence:
            Moderate
          </p>
          <div className="prose">
            <p>
              Benchmark current ELL programming against districts achieving
              better outcomes, and invest in evidence-based interventions —
              newcomer academies, Bridges to Academic Success, co-teaching
              models, early warning systems — with specific graduation rate
              targets.
            </p>
            <div className="bg-paper-dark border border-rule rounded-sm p-4 my-4 font-mono text-xs text-gray">
              <p>
                Current ELL graduation rate: 43% (~101 of 235 cohort graduates)
                <br />
                Target (3-year): 60% — ~40 additional graduates/year
                <br />
                Target (5-year): 70% — ~63 additional graduates/year
                <br />
                Lifetime earnings differential per graduate: $8,000–$12,000/year
                (BLS)
                <br />
                40 additional graduates × working lifetime: ~$16–24M cumulative
                per cohort
              </p>
            </div>
            <p>
              Comprehensive ELL programming typically costs $1,500–$3,000 per
              student. At 5,707 students: $8.6M–$17.1M — fundable from
              transportation savings and the Comptroller-confirmed unrestricted
              cash reserves.
            </p>
            <p className="text-sm italic text-gray">
              What would change our mind: If East Ramapo is already spending at
              evidence-based levels and the gap is driven by factors outside
              district control.
            </p>
          </div>
        </div>

        {/* Recommendation 4 */}
        <div className="border-t border-rule pt-6 mb-8">
          <h3 className="font-serif text-xl font-bold text-ink mb-2">
            4. Advocate for Full State Reimbursement of Mandated Transportation
          </h3>
          <p className="text-xs text-gray-light mb-4">
            Timeline: 2–4 years (requires Albany) | Difficulty: High |
            Confidence: Moderate
          </p>
          <div className="prose">
            <p>
              Data-driven advocacy campaign for the NYS Legislature to fully
              fund Education Law Section 3635 mandates. East Ramapo is the
              clearest case in the state of unfunded mandates draining
              instructional resources.
            </p>
            <div className="bg-paper-dark border border-rule rounded-sm p-4 my-4 font-mono text-xs text-gray">
              <p>
                Transportation premium above county norm: $41,108,045/year
                <br />
                Estimated mandate-driven share (70%): ~$28,776,000
                <br />
                Full reimbursement scenario:
                <br />
                &nbsp;&nbsp;Per-pupil instructional increase: +$2,825 (→
                $20,020)
                <br />
                &nbsp;&nbsp;New county rank: ~4th (up from 8th)
              </p>
            </div>
            <p>
              The surplus discovery complicates the narrative short-term — Albany
              may ask why a district with $45 million in unrestricted cash needs
              more state money. The answer: the surplus resulted from accounting
              failures, not adequate funding — and the Comptroller found the
              district relying on $20.7 million in nonrecurring revenues for
              operating expenses, meaning the apparent cash cushion masks
              structural fragility.
            </p>
            <p className="text-sm italic text-gray">
              What would change our mind: If the transportation cost breakdown
              reveals the majority of the premium is operational inefficiency
              rather than state mandates.
            </p>
          </div>
        </div>
      </section>

      {/* THE BOTTOM LINE */}
      <section className="mb-12 border-l-[3px] border-red pl-6 py-2">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          The Bottom Line
        </h2>
        <div className="prose font-medium">
          <p>
            East Ramapo spends $31,387 per pupil, but the money isn&apos;t
            reaching classrooms. Transportation consumes $6,053 per student —
            three times the county average — while instruction gets $17,195, the
            county&apos;s lowest. The result: a 43% graduation rate for the
            5,707 English Language Learners who make up the majority of the
            student body.
          </p>
          <p>
            The transportation premium — approximately $41 million per year
            above county norms — is the primary structural driver of East
            Ramapo&apos;s budget imbalance. A 2019 Comptroller audit found the
            district paying for hundreds of students who weren&apos;t registered.
            A 2025 Comptroller review confirmed the fund balance was
            underestimated by $43.3 million — with the data to catch the error
            sitting in monthly Treasurer&apos;s reports that nobody reconciled.
          </p>
          <p>
            The evidence points in a clear direction. Publish the financial
            data. Audit the bus routes. Invest in ELL programming. Fix the state
            mandate. Roughly 134 English Language Learners per year don&apos;t
            finish high school in East Ramapo. The data says it doesn&apos;t
            have to be this way. The question is whether anyone acts on it.
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
            This Evidence Brief is based on NYSED ESSA Financial Transparency
            data (2023-24), NYSED enrollment and graduation rate databases
            (2019-2024), NYS Comptroller Budget Review B25-5-2 (April 2025), NYS
            Comptroller Audit 2019M-107 (Nov. 2019), and rockland.news
            cross-district analysis covering 1,127 data points across 8 Rockland
            County school districts, 37 metric types, and 6 academic years.
            Per-pupil calculations use NYSED-reported figures. County averages
            and rankings were computed programmatically. Dollar-to-position
            translations assume $85,000 in average salary and benefits based on
            regional benchmarks. Surplus and fund balance figures are based on
            the EFPR Group external audit (FY ending June 30, 2024) and the NYS
            Comptroller&apos;s budget review (April 2025).
          </p>
          <p className="mt-3">
            Full methodology, data tables, and source files are available at
            rockland.news/evidence-briefs/east-ramapo-spending.
          </p>
        </div>
      </section>

      {/* SOURCES */}
      <section className="border-t border-rule pt-8 mb-12">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-gray-light mb-4">
          Sources
        </h2>

        <h4 className="text-xs font-semibold text-ink uppercase tracking-wide mt-4 mb-2">
          Data Sources
        </h4>
        <ul className="space-y-2 mb-6">
          <li className="text-sm text-gray leading-relaxed">
            <a
              href="https://data.nysed.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red underline underline-offset-2 hover:text-red-dark transition-colors"
            >
              NYSED ESSA Financial Transparency Data, 2023-24. Per-pupil
              expenditures by function for all 8 Rockland County school
              districts.
            </a>
          </li>
          <li className="text-sm text-gray leading-relaxed">
            <a
              href="https://data.nysed.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red underline underline-offset-2 hover:text-red-dark transition-colors"
            >
              NYSED School Report Cards, 2019-2024. Enrollment by ethnicity, ELL
              status, economic disadvantage, disability status.
            </a>
          </li>
          <li className="text-sm text-gray leading-relaxed">
            <a
              href="https://data.nysed.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red underline underline-offset-2 hover:text-red-dark transition-colors"
            >
              NYSED Graduation Rate Database, 2019-2024. 4-year cohort
              graduation rates by subgroup.
            </a>
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Bureau of Labor Statistics, Current Population Survey. Median
            earnings by educational attainment.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            U.S. Department of Education, English learner graduation rate data,
            2019-20.
          </li>
        </ul>

        <h4 className="text-xs font-semibold text-ink uppercase tracking-wide mt-4 mb-2">
          Audit &amp; Oversight Reports
        </h4>
        <ul className="space-y-2 mb-6">
          <li className="text-sm text-gray leading-relaxed">
            <a
              href="https://osc.ny.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red underline underline-offset-2 hover:text-red-dark transition-colors"
            >
              NYS Comptroller, Budget Review B25-5-2, &quot;East Ramapo Central
              School District,&quot; April 2025.
            </a>
          </li>
          <li className="text-sm text-gray leading-relaxed">
            NYS Comptroller, &quot;East Ramapo CSD — Nonpublic School
            Transportation&quot; (Audit 2019M-107), Nov. 2019.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            EFPR Group, External Audit of East Ramapo CSD, fiscal year ending
            June 30, 2024.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Citizens Budget Commission, &quot;Better Targeting New York&apos;s
            Pupil Transportation Aid,&quot; Dec. 2012.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Henry Greenberg, &quot;East Ramapo: A School District In
            Crisis,&quot; Nov. 2014.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            <a
              href="https://ercsd.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red underline underline-offset-2 hover:text-red-dark transition-colors"
            >
              ERCSD Long-Term Strategic Academic and Financial Improvement Plan,
              Sept. 2025.
            </a>
          </li>
        </ul>

        <h4 className="text-xs font-semibold text-ink uppercase tracking-wide mt-4 mb-2">
          Legal &amp; Policy References
        </h4>
        <ul className="space-y-2 mb-6">
          <li className="text-sm text-gray leading-relaxed">
            New York Education Law Section 3635.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            NYSED MLL/ELL Graduation Rate Improvement and Dropout Prevention
            Planning Tool, 2019.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            New York State Foundation Aid formula documentation.
          </li>
        </ul>

        <h4 className="text-xs font-semibold text-ink uppercase tracking-wide mt-4 mb-2">
          News Sources
        </h4>
        <ul className="space-y-2 mb-6">
          <li className="text-sm text-gray leading-relaxed">
            Lohud/Journal News: East Ramapo transportation (Sept. 2022, Nov.
            2024).
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Monsey Scoop: East Ramapo deficit/transportation concerns (Feb.
            2024).
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Rockland County Times: ERSD surplus discovery (March 2025).
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Mid Hudson News: Independent audit approved (March 2025).
          </li>
          <li className="text-sm text-gray leading-relaxed">
            News 12 Hudson Valley: East Ramapo 2025-26 budget adoption (2025).
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Spectrum News 1: State response to accounting error (Nov. 2024).
          </li>
          <li className="text-sm text-gray leading-relaxed">
            California School Boards Association: ELL graduation rate improvement
            (Dec. 2023).
          </li>
        </ul>

        <h4 className="text-xs font-semibold text-ink uppercase tracking-wide mt-4 mb-2">
          rockland.news Analysis
        </h4>
        <ul className="space-y-2">
          <li className="text-sm text-gray leading-relaxed">
            Cross-district comparables: 1,127 metrics, 8 districts, 37 metric
            types, 6 years.
          </li>
          <li className="text-sm text-gray leading-relaxed">
            Programmatic cross-referencing. All code and queries available at
            rockland.news.
          </li>
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="border-t border-rule pt-6 text-xs text-gray-light italic leading-relaxed">
        <p className="mb-3">
          rockland.news evaluates policy based on facts, human outcomes, and the
          efficient use of public dollars — with a commitment that the most
          vulnerable residents are not left behind. When these values conflict,
          we show you the tradeoff and tell you what the evidence supports. Our
          recommendations are provisional: we state what would change our mind,
          because analysis that can&apos;t be wrong can&apos;t be trusted.
        </p>
        <p className="mb-3">
          Found an error? Email{" "}
          <a
            href="mailto:corrections@rockland.news"
            className="text-red underline underline-offset-2 hover:text-red-dark"
          >
            corrections@rockland.news
          </a>
          . Disagree with our analysis? We publish responses:{" "}
          <a
            href="mailto:letters@rockland.news"
            className="text-red underline underline-offset-2 hover:text-red-dark"
          >
            letters@rockland.news
          </a>
          .
        </p>
        <p>
          This is the first Evidence Brief in the rockland.news School District
          Policy Series. Upcoming: per-district spending comparisons across all 8
          Rockland districts, and a deep dive into Foundation Aid equity.
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
