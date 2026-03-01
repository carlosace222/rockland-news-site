import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tips, corrections, media inquiries, and general questions for rockland.news.",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray mb-12 leading-relaxed">
        Have a tip? Spot an error? Want to collaborate? We&apos;re all ears.
      </p>

      <div className="space-y-8">
        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">Tips &amp; Story Leads</h3>
          <p className="text-sm text-gray mb-3">
            If you have information about government spending, development
            patterns, or other civic issues in Rockland County, we want to hear
            from you. We verify everything independently — your tip starts the
            investigation, it doesn&apos;t become the story.
          </p>
          <p className="text-sm">
            <a
              href="mailto:tips@rockland.news"
              className="text-ink underline hover:text-ink-light"
            >
              tips@rockland.news
            </a>
          </p>
        </div>

        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">Corrections</h3>
          <p className="text-sm text-gray mb-3">
            Accuracy matters more than speed. If you spot an error in our
            reporting, please let us know. We correct the record promptly and
            transparently.
          </p>
          <p className="text-sm">
            <a
              href="mailto:corrections@rockland.news"
              className="text-ink underline hover:text-ink-light"
            >
              corrections@rockland.news
            </a>
          </p>
        </div>

        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">General &amp; Media</h3>
          <p className="text-sm text-gray mb-3">
            For general questions, partnership inquiries, or media requests.
          </p>
          <p className="text-sm">
            <a
              href="mailto:hello@rockland.news"
              className="text-ink underline hover:text-ink-light"
            >
              hello@rockland.news
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
