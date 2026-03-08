import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Weekly Evidence Briefs, budget breakdowns, and civic updates for Rockland County. Free.",
};

export default function Newsletter() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold mb-4">
          The rockland.news newsletter
        </h1>
        <p className="text-lg text-gray leading-relaxed">
          A weekly briefing on what&apos;s happening in Rockland County
          government — and what it means.
        </p>
        <p className="text-base text-gray leading-relaxed mt-4">
          Each issue includes the week&apos;s most significant findings, new
          records added to the database, one upcoming meeting worth attending,
          and links to the latest Evidence Briefs and explainers.
        </p>
        <p className="text-sm text-gray-light mt-4 italic">
          Free. No spam. No partisan framing.
        </p>
      </div>

      {/* beehiiv signup embed */}
      <div className="mb-12">
        <iframe
          src="https://subscribe-forms.beehiiv.com/a4a24c6e-152f-43b4-af37-7694a521ef59"
          className="beehiiv-embed"
          data-test-id="beehiiv-embed"
          height="339"
          frameBorder="0"
          scrolling="no"
          style={{
            margin: 0,
            borderRadius: "0px",
            backgroundColor: "transparent",
            width: "100%",
            maxWidth: "100%",
          }}
        />
      </div>

      <div className="text-center">
        <p className="text-sm text-gray">
          Want to go deeper? Evidence Briefs, budget breakdowns, and the full
          database are available at{" "}
          <Link href="/" className="text-red hover:underline">
            rockland.news
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
