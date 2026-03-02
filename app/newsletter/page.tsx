import type { Metadata } from "next";

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
          The rockland.news Newsletter
        </h1>
        <p className="text-lg text-gray leading-relaxed">
          Evidence Briefs, budget breakdowns, development updates, and civic
          analysis — delivered to your inbox weekly. Free. No spam. No partisan
          spin.
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

      <div className="max-w-lg mx-auto">
        <h2 className="font-serif text-xl font-bold mb-4 text-center">
          What you&apos;ll get
        </h2>
        <ul className="space-y-3 text-sm text-gray">
          <li className="flex gap-3">
            <span className="text-ink font-bold">Weekly</span>
            <span>Evidence Briefs and civic analysis</span>
          </li>
          <li className="flex gap-3">
            <span className="text-ink font-bold">Monthly</span>
            <span>State of the County data report</span>
          </li>
          <li className="flex gap-3">
            <span className="text-ink font-bold">As needed</span>
            <span>Breaking budget decisions and development alerts</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
