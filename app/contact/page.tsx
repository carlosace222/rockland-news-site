import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tips, corrections, FOIL coordination, and general inquiries for rockland.news.",
};

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold mb-12">Get in touch</h1>

      <div className="space-y-8">
        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">Tips and story leads</h3>
          <p className="text-sm text-gray mb-3">
            If you have a tip, a document, or a question you think we should
            investigate, reach out. We protect the identity of anyone who shares
            information with us.
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
            If you&apos;ve found an error in our reporting, let us know. We
            correct mistakes promptly and visibly.
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
          <h3 className="font-semibold mb-2">General inquiries</h3>
          <p className="text-sm text-gray mb-3">For everything else.</p>
          <p className="text-sm">
            <a
              href="mailto:hello@rockland.news"
              className="text-ink underline hover:text-ink-light"
            >
              hello@rockland.news
            </a>
          </p>
        </div>

        <div className="border border-rule p-6">
          <h3 className="font-semibold mb-2">FOIL coordination</h3>
          <p className="text-sm text-gray mb-3">
            If you&apos;re working on a FOIL request related to Rockland County
            government and want to compare notes or avoid duplicating effort,
            we&apos;re happy to talk.
          </p>
          <p className="text-sm">
            <a
              href="mailto:foil@rockland.news"
              className="text-ink underline hover:text-ink-light"
            >
              foil@rockland.news
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
