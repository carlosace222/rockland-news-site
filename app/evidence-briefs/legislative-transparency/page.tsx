import type { Metadata } from "next";
import EvidenceBriefArticle from "../EvidenceBriefArticle";
import DataTable from "../DataTable";

export const metadata: Metadata = {
  title:
    "24 Meetings, 12 Sets of Minutes: What's Missing from the Rockland County Legislature's Public Record",
  description:
    "The Rockland County Legislature met 36 times in 2025 but published minutes for only 24. What's in the gap?",
};

export default function LegislativeTransparency() {
  return (
    <EvidenceBriefArticle
      pillar="Accountability Tracker"
      pillarHref="/accountability"
      title="24 Meetings, 12 Sets of Minutes"
      subtitle="What's Missing from the Rockland County Legislature's Public Record"
      date="March 1, 2026"
      dataAsOf="Data current through February 2026"
      tier="insider"
      question={
        <p>
          Rockland County&apos;s legislature meets regularly to vote on the policies and spending
          that affect 330,000 residents. Agendas tell you what&apos;s planned. Minutes tell you
          what actually happened: who said what, how votes fell, what was debated. When minutes go
          missing, the public record has a gap. How complete is the Rockland County
          Legislature&apos;s public documentation?
        </p>
      }
      dataSection={
        <>
          <p>
            Between January 2023 and February 2026, the Rockland County Legislature held 103
            meetings (102 regular, 1 special session). We collected and analyzed 102 documents
            published on the legislature&apos;s website: 59 agendas and 44 sets of minutes. The
            agenda-to-minutes ratio reveals a widening documentation gap.
          </p>

          <DataTable
            caption="Legislative Documentation by Year"
            headers={["Year", "Meetings", "Agendas Published", "Minutes Published", "Minutes Gap"]}
            alignRight={[1, 2, 3, 4]}
            rows={[
              ["2023", "28", "14", "14", "0"],
              ["2024", "33", "17", "16", "1"],
              ["2025", "36", "24", "12", "12"],
              ["2026 (Jan-Feb)", "6", "4", "2", "2"],
            ]}
          />

          <p>
            In 2023, the record was complete: every meeting with an agenda also had published
            minutes. By 2025, the gap had grown to 12 meetings with agendas but no corresponding
            minutes available on the legislature&apos;s website. That means for one-third of the
            legislature&apos;s 2025 sessions, the public has an agenda showing what was scheduled
            but no official record of what was decided.
          </p>

          <p>
            Meeting frequency itself has increased steadily: 28 meetings in 2023, 33 in 2024, 36
            in 2025. The legislature met more often, which is a positive signal for governance
            activity. But the documentation didn&apos;t keep pace.
          </p>

          <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
            Document Detail Is Inconsistent
          </h3>

          <p>
            Beyond the simple count, the depth of available minutes varies significantly.
          </p>

          <DataTable
            caption="Average Minutes Length (Words) by Year"
            headers={["Year", "Avg. Words", "Shortest", "Longest", "Documents"]}
            alignRight={[1, 2, 3, 4]}
            rows={[
              ["2023", "8,153", "~150", "~20,000", "14"],
              ["2024", "12,474", "~125", "~55,000", "16"],
              ["2025", "8,539", "~960", "~23,500", "12"],
              ["2026", "10,639", "~2,000", "~23,500", "2"],
            ]}
          />

          <p>
            The 2024 spike to 12,474 average words per set of minutes suggests that year&apos;s
            record-keeping was more thorough, or that meetings involved more substantive debate.
            The 2025 decline to 8,539 words per set of minutes happened alongside the minutes gap,
            which means the year with the most meetings produced both fewer and shorter records of
            what happened in them.
          </p>

          <p>
            The range within each year is also notable. Some published minutes are barely 150 words
            (likely placeholder entries or meeting cancellations), while others exceed 50,000 words
            (full verbatim transcripts of contentious sessions). There&apos;s no visible standard
            for what &ldquo;minutes&rdquo; should contain.
          </p>

          <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
            One Special Meeting in Three Years
          </h3>

          <p>
            The legislature called one special session in this period: November 3, 2025. Special
            meetings are typically reserved for urgent matters that can&apos;t wait for the regular
            calendar. One special meeting out of 103 total sessions suggests either a remarkably
            stable governing environment or a low threshold for what gets handled in regular
            session. For comparison, many county legislatures in the Hudson Valley call 3-5 special
            sessions per year.
          </p>

          <h3 className="font-serif text-xl font-bold text-ink mt-8 mb-3">
            What This Means in Context
          </h3>

          <p>
            Meeting minutes are not a bureaucratic formality. They&apos;re the public&apos;s only
            reliable record of how their elected representatives voted, what they debated, and what
            commitments they made. New York&apos;s Open Meetings Law (OML) requires that minutes be
            taken at every open meeting and made available within two weeks (or one week for
            executive sessions). When minutes aren&apos;t published, residents can&apos;t verify
            what happened.
          </p>

          <p>
            There are benign explanations for the gap. Minutes take time to draft, review, and
            approve. The legislature may have a backlog. Some 2025 minutes may have been approved
            but not yet uploaded to the website. The data reflects what&apos;s publicly available
            online as of our scrape date, not necessarily what exists internally.
          </p>

          <p>
            But even the benign explanation raises a question: if the legislature is meeting 36
            times a year, is its administrative staff resourced to keep up? A documentation backlog
            isn&apos;t a scandal, but it is a system designed to produce a gap between what
            legislators know and what residents can verify. That&apos;s the kind of structural
            problem this platform exists to surface.
          </p>
        </>
      }
      unknowns={
        <>
          <p>
            We don&apos;t have the legislature&apos;s internal records to confirm whether the
            missing minutes were drafted but not yet published, or simply never created. A FOIL
            (Freedom of Information Law, New York&apos;s public records access law) request for all
            2025 meeting minutes would clarify this.
          </p>
          <p>
            We also don&apos;t have committee-level documentation. The 103 meetings tracked here
            are full legislature sessions. Committees, where much of the substantive policy work
            happens, may have separate documentation patterns. If committee minutes are also
            incomplete, the gap in public record is wider than this analysis shows.
          </p>
          <p>
            Finally, we&apos;re comparing document availability, not content quality. A 20,000-word
            set of minutes that includes full debate transcripts serves the public differently than
            a 500-word summary that lists only votes taken. Standardizing what
            &ldquo;minutes&rdquo; should contain is a policy question the legislature could address.
          </p>
        </>
      }
      bottomLine={
        <p>
          The Rockland County Legislature increased its meeting frequency from 28 sessions in 2023
          to 36 in 2025, a 29% increase. But the public record didn&apos;t keep pace: 12 of those
          2025 meetings lack published minutes. The documentation was complete in 2023, developed a
          gap of one in 2024, and widened to 12 in 2025. Whether this reflects a staffing
          bottleneck, a publication delay, or a declining commitment to documentation, the result is
          the same: residents who want to know what their legislature decided in 2025 can find the
          answer for two-thirds of meetings. For the other third, the record is blank.
        </p>
      }
      sources={[
        {
          text: "Rockland County Legislature website, meeting agendas and minutes (2023-2026).",
          url: "https://legislature.rocklandcountyny.gov",
        },
        {
          text: "New York Open Meetings Law, Public Officers Law Article 7.",
          url: "https://opengovernment.ny.gov",
        },
        {
          text: "Analysis based on 102 legislative documents (59 agendas, 44 minutes) and 103 meeting records stored in the rockland.news public records database.",
        },
      ]}
    />
  );
}
