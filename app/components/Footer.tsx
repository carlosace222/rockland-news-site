import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="border-t-[3px] border-red" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-bold text-ink mb-2">rockland.news</h3>
            <p className="text-sm text-gray leading-relaxed">
              Data-driven civic transparency for Rockland County, NY. Every claim sourced. Every number traceable.
            </p>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-gray mb-3">
              Content
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/evidence-briefs" className="text-ink hover:text-red transition-colors">Evidence Briefs</Link></li>
              <li><Link href="/explainers" className="text-ink hover:text-red transition-colors">Explainers</Link></li>
              <li><Link href="/podcast" className="text-ink hover:text-red transition-colors">Podcast</Link></li>
              <li><Link href="/newsletter" className="text-ink hover:text-red transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-gray mb-3">
              Topics
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/budget" className="text-ink hover:text-red transition-colors">Follow the Money</Link></li>
              <li><Link href="/development" className="text-ink hover:text-red transition-colors">Development Watch</Link></li>
              <li><Link href="/accountability" className="text-ink hover:text-red transition-colors">Accountability Tracker</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-gray mb-3">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-ink hover:text-red transition-colors">Our Mission</Link></li>
              <li><Link href="/methodology" className="text-ink hover:text-red transition-colors">Methodology</Link></li>
              <li><Link href="/contact" className="text-ink hover:text-red transition-colors">Contact &amp; Tips</Link></li>
              <li><Link href="/ask" className="text-ink hover:text-red transition-colors">Ask a Question</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rule mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray">
            &copy; {new Date().getFullYear()} rockland.news — Built by{" "}
            <a href="https://currentcreative.ai" className="text-red hover:text-red-dark transition-colors">
              Current Creative
            </a>
          </p>
          <p className="text-xs text-gray-light italic">
            Not left. Not right. Just the numbers.
          </p>
        </div>
      </div>
    </footer>
  );
}
