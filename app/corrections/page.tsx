import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corrections",
  description:
    "Corrections and updates to rockland.news reporting. When we get something wrong, we fix it here.",
};

export default function Corrections() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold mb-4">
        Corrections &amp; Updates
      </h1>
      <p className="text-base text-gray leading-relaxed mb-8">
        When we get something wrong, we correct it promptly and visibly.
        Correction notices remain attached to affected content. This page
        maintains a running log of all corrections.
      </p>

      <div className="border border-rule p-6 mb-8 bg-paper-dark/50">
        <p className="text-sm text-gray-light italic">
          No corrections to date. When corrections are issued, they will appear
          here with the date, affected article, and description of the change.
        </p>
      </div>

      <div className="border-t border-rule pt-6">
        <p className="text-sm text-gray leading-relaxed">
          Found an error?{" "}
          <a
            href="mailto:corrections@rockland.news"
            className="text-red underline underline-offset-2 hover:text-red-dark"
          >
            corrections@rockland.news
          </a>
        </p>
        <p className="text-xs text-gray-light mt-3">
          Our correction policy is part of our{" "}
          <Link
            href="/about"
            className="text-gray-light hover:text-red underline underline-offset-2 transition-colors"
          >
            editorial principles
          </Link>
          . We take accuracy seriously and appreciate readers who hold us to our
          own standard.
        </p>
      </div>
    </div>
  );
}
