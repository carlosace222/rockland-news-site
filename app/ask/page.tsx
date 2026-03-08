import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask About Rockland County Government",
  description:
    "Ask questions about Rockland County government, budgets, school districts, legislative records, and more. Powered by the rockland.news public records database.",
};

export default function AskPage() {
  return (
    <div className="flex flex-col" style={{ minHeight: "calc(100vh - 200px)" }}>
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-6 text-center w-full">
        <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red">
          rockland.news
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-2 mb-3">
          Ask about Rockland County government
        </h1>
        <p className="text-base text-gray leading-relaxed max-w-2xl mx-auto">
          The civic assistant draws from the same database that powers
          rockland.news — over 47,000 financial records, 8,200 campaign finance
          entries, and meeting documents from every town and the county
          legislature.
        </p>
        <p className="text-sm text-gray leading-relaxed max-w-2xl mx-auto mt-3">
          Ask it about budgets, spending, school districts, legislative votes,
          zoning decisions, or how local government processes work.
        </p>
      </div>

      {/* Chatbot iframe */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 pb-8">
        <div
          className="border border-rule rounded-sm overflow-hidden h-full"
          style={{ minHeight: "500px" }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/YcpPEoUDSRWvgvyQ6gOyR"
            title="rockland.news civic assistant"
            width="100%"
            height="100%"
            style={{ minHeight: "500px", border: "none" }}
            allow="microphone"
          />
        </div>
      </div>

      {/* Scope & disclaimer */}
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="max-w-2xl mx-auto border border-rule p-5 text-sm text-gray leading-relaxed space-y-3">
          <p className="font-medium text-ink">What this tool does well</p>
          <p>
            Questions about budgets, per-pupil spending, legislative votes,
            campaign finance filings, meeting agendas, and zoning records
            across Rockland County. It will try to cite specific source
            documents.
          </p>
          <p className="font-medium text-ink">What to know</p>
          <p>
            The assistant draws from the rockland.news database, which is
            updated on a regular collection cycle but is not real-time. It
            covers fiscal years 2021&ndash;2026. Not all historical records
            have been digitized. For anything that matters, verify against the
            source documents &mdash; which it will try to point you to.
          </p>
          <p className="text-xs text-gray-light italic">
            It is a tool, not an authority.
          </p>
        </div>
      </div>
    </div>
  );
}
