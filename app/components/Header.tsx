"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/evidence-briefs", label: "Evidence Briefs" },
  { href: "/explainers", label: "Explainers" },
  { href: "/podcast", label: "Podcast" },
  { href: "/budget", label: "Follow the Money" },
  { href: "/development", label: "Development Watch" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div>
              <h1 className="font-serif text-2xl font-bold text-navy tracking-tight">
                rockland.news
              </h1>
              <p className="text-xs text-text-muted tracking-wide uppercase">
                Civic Transparency for Rockland County
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              className="text-sm bg-navy text-white px-4 py-2 rounded hover:bg-navy-light transition-colors"
            >
              Subscribe
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden mt-4 pb-2 border-t border-border pt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-navy transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              className="text-sm bg-navy text-white px-4 py-2 rounded hover:bg-navy-light transition-colors text-center"
              onClick={() => setMenuOpen(false)}
            >
              Subscribe
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
