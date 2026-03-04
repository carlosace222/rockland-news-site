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
          <h3 className="font-semibold mb-2">Tips, Corrections &amp; General Inquiries</h3>
          <p className="text-sm text-gray mb-3">
            Have a tip about government spending, development patterns, or civic
            issues in Rockland County? Spot an error in our reporting? Want to
            collaborate? Reach us on X. We verify everything independently, and
            we correct the record promptly and transparently.
          </p>
          <p className="text-sm">
            <a
              href="https://x.com/RocklandDOTNews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline hover:text-ink-light"
            >
              @RocklandDOTNews on X
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
