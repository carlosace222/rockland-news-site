import Link from "next/link";

type Source = {
  text: string;
  url?: string;
};

type EvidenceBriefProps = {
  pillar: string;
  pillarHref: string;
  title: string;
  subtitle: string;
  date: string;
  dataAsOf: string;
  tier: "free" | "insider";
  question: React.ReactNode;
  dataSection: React.ReactNode;
  unknowns: React.ReactNode;
  bottomLine: React.ReactNode;
  sources: Source[];
};

export default function EvidenceBriefArticle({
  pillar,
  pillarHref,
  title,
  subtitle,
  date,
  dataAsOf,
  tier,
  question,
  dataSection,
  unknowns,
  bottomLine,
  sources,
}: EvidenceBriefProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 pt-10 pb-16">
      {/* Breadcrumb + pillar tag */}
      <div className="flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.1em] uppercase mb-6">
        <Link href="/evidence-briefs" className="text-gray-light hover:text-red transition-colors">
          Evidence Briefs
        </Link>
        <span className="text-rule-dark">/</span>
        <Link href={pillarHref} className="text-red hover:text-red-dark transition-colors">
          {pillar}
        </Link>
        {tier === "insider" && (
          <>
            <span className="text-rule-dark">/</span>
            <span className="bg-ink text-paper px-2 py-0.5 rounded-sm text-[0.6rem] tracking-wider">
              INSIDER
            </span>
          </>
        )}
      </div>

      {/* Headline */}
      <h1 className="font-serif text-3xl md:text-[2.5rem] font-black leading-[1.15] tracking-tight text-ink mb-3">
        {title}
      </h1>
      <p className="text-lg text-gray leading-relaxed mb-6">{subtitle}</p>

      {/* Meta line */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-light border-b border-rule pb-6 mb-10">
        <span>rockland.news</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>{pillar}</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>Published {date}</span>
        <span className="hidden sm:inline text-rule-dark">|</span>
        <span>{dataAsOf}</span>
      </div>

      {/* THE QUESTION */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          The Question
        </h2>
        <div className="prose">{question}</div>
      </section>

      {/* WHAT THE DATA SHOWS */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          What the Data Shows
        </h2>
        <div className="prose">{dataSection}</div>
      </section>

      {/* WHAT WE DON'T KNOW YET */}
      <section className="mb-10">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          What We Don&apos;t Know Yet
        </h2>
        <div className="prose">{unknowns}</div>
      </section>

      {/* THE BOTTOM LINE */}
      <section className="mb-12 border-l-[3px] border-red pl-6 py-2">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-red mb-4">
          The Bottom Line
        </h2>
        <div className="prose font-medium">{bottomLine}</div>
      </section>

      {/* SOURCES */}
      <section className="border-t border-rule pt-8 mb-12">
        <h2 className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-gray-light mb-4">
          Sources
        </h2>
        <ul className="space-y-2">
          {sources.map((src, i) => (
            <li key={i} className="text-sm text-gray leading-relaxed">
              {src.url ? (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red underline underline-offset-2 hover:text-red-dark transition-colors"
                >
                  {src.text}
                </a>
              ) : (
                src.text
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Disclaimer */}
      <div className="border-t border-rule pt-6 text-xs text-gray-light italic leading-relaxed">
        <p>
          rockland.news is a nonpartisan civic transparency platform. We do not endorse
          candidates or parties. Our Evidence Briefs present what public records show,
          what context matters, and what questions remain.{" "}
          <Link href="/methodology" className="text-red underline underline-offset-2 hover:text-red-dark">
            Read our editorial principles.
          </Link>
        </p>
      </div>

      {/* Back link */}
      <div className="mt-10">
        <Link
          href="/evidence-briefs"
          className="text-sm text-gray hover:text-red transition-colors"
        >
          &larr; All Evidence Briefs
        </Link>
      </div>
    </article>
  );
}
