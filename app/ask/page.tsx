import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask About Rockland County Government",
  description:
    "Ask questions about Rockland County government, budgets, school districts, campaign finance, and more. Powered by the rockland.news public records database.",
};

export default function AskPage() {
  return (
    <div className="flex flex-col" style={{ minHeight: "calc(100vh - 200px)" }}>
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 pt-10 pb-6 text-center w-full">
        <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-red">
          rockland311.news
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-2 mb-3">
          Ask About Rockland County
        </h1>
        <p className="text-base text-gray leading-relaxed max-w-2xl mx-auto">
          Ask any question about Rockland County government — budgets, school
          spending, campaign finance, meeting records, property taxes, or how to
          file a FOIL request. Powered by 50,000+ public records.
        </p>
      </div>

      {/* Chatbot iframe */}
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 pb-8">
        <div className="border border-rule rounded-sm overflow-hidden h-full" style={{ minHeight: "500px" }}>
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

      {/* Disclaimer */}
      <div className="max-w-4xl mx-auto px-4 pb-10 text-center">
        <p className="text-xs text-gray-light italic leading-relaxed max-w-xl mx-auto">
          This assistant uses AI to answer questions from public records in the
          rockland.news database. It may occasionally make mistakes. Always
          verify important information with official government sources. For the
          latest analysis, read our{" "}
          <a href="/evidence-briefs" className="text-red hover:underline">
            Evidence Briefs
          </a>
          .
        </p>
      </div>
    </div>
  );
}
