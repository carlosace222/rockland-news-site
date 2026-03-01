import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-bold mb-2">rockland.news</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Data-driven civic transparency for Rockland County, NY. Every claim sourced. Every number traceable.
            </p>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Content
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/evidence-briefs" className="hover:text-gold transition-colors">Evidence Briefs</Link></li>
              <li><Link href="/explainers" className="hover:text-gold transition-colors">Explainers</Link></li>
              <li><Link href="/podcast" className="hover:text-gold transition-colors">Podcast</Link></li>
              <li><Link href="/newsletter" className="hover:text-gold transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Topics
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/budget" className="hover:text-gold transition-colors">Follow the Money</Link></li>
              <li><Link href="/development" className="hover:text-gold transition-colors">Development Watch</Link></li>
              <li><Link href="/accountability" className="hover:text-gold transition-colors">Accountability Tracker</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Mission</Link></li>
              <li><Link href="/methodology" className="hover:text-gold transition-colors">Methodology</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact &amp; Tips</Link></li>
              <li><a href="https://rockland311.news" className="hover:text-gold transition-colors">rockland311.news</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} rockland.news — Built by{" "}
            <a href="https://currentcreative.ai" className="hover:text-gold transition-colors">
              Current Creative
            </a>
          </p>
          <p className="text-xs text-gray-500">
            Not left. Not right. Just the numbers.
          </p>
        </div>
      </div>
    </footer>
  );
}
