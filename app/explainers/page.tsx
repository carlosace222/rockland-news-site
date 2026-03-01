import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explainers",
  description:
    "Plain-language guides to how Rockland County government actually works. FOIL requests, budget processes, zoning, and more.",
};

export default function Explainers() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12">
        <span className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-red">
          #explainer
        </span>
        <h1 className="font-serif text-4xl font-bold mt-2 mb-4">Explainers</h1>
        <p className="text-lg text-gray leading-relaxed max-w-2xl">
          Government complexity isn&apos;t an accident — it&apos;s a feature that protects
          insiders. These guides strip away the jargon and show you how things
          actually work in Rockland County.
        </p>
      </div>

      {/* Planned explainers */}
      <div className="space-y-4">
        {[
          {
            title: "Where Your Rockland County Property Tax Dollar Goes",
            description:
              "A complete breakdown of how your property tax is split between county, town, school district, and special districts.",
            tag: "#follow-the-money",
          },
          {
            title: "How to File a FOIL Request with Any Rockland Municipality",
            description:
              "Step-by-step guide with templates, contact info, and timelines for every town and the county.",
            tag: "#explainer",
          },
          {
            title: "How to Read a Town Budget",
            description:
              "What to look for, what the jargon means, and where the real decisions are hiding in your town's budget documents.",
            tag: "#follow-the-money",
          },
        ].map((explainer) => (
          <div
            key={explainer.title}
            className="border border-rule p-6 bg-paper"
          >
            <span className="text-[0.6875rem] font-semibold tracking-[0.1em] uppercase text-red">
              {explainer.tag}
            </span>
            <h3 className="font-serif text-xl font-bold mt-1 mb-2">
              {explainer.title}
            </h3>
            <p className="text-sm text-gray">{explainer.description}</p>
            <p className="text-xs text-red mt-3 font-semibold">Coming soon</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/newsletter"
          className="inline-block bg-ink text-white text-sm px-6 py-2 hover:bg-ink-light transition-colors"
        >
          Get notified when explainers publish
        </Link>
      </div>
    </div>
  );
}
