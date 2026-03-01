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
    <header className="bg-paper sticky top-0 z-50">
      {/* Top rule */}
      <div className="border-t-[3px] border-ink" />

      <div className="max-w-5xl mx-auto px-4">
        {/* Masthead */}
        <div className="py-6 text-center border-b border-rule">
          <Link href="/">
            <h1 className="font-serif text-4xl md:text-5xl font-black tracking-tight text-ink">
              rockland.news
            </h1>
            <p className="text-[0.6875rem] font-sans font-semibold tracking-[0.12em] uppercase text-gray mt-1">
              Civic Transparency for Rockland County
            </p>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center justify-center gap-8 py-3 border-b border-rule">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] font-medium text-ink hover:text-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            className="text-[0.8125rem] font-semibold text-red hover:text-red-dark transition-colors"
          >
            Subscribe
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex justify-end py-3 border-b border-rule">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-ink"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden py-4 border-b border-rule flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink hover:text-red transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              className="text-sm font-semibold text-red"
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
