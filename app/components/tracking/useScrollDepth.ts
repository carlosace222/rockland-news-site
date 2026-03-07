"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "./plausible";

const THRESHOLDS = [25, 50, 75, 100];

/**
 * Hook to track scroll depth on long-form content pages.
 * Fires Plausible events at 25%, 50%, 75%, and 100% scroll depth.
 *
 * Usage:
 *   useScrollDepth("school-district-spending-gap");
 */
export function useScrollDepth(slug: string): void {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const fired = firedRef.current;

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const pct = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of THRESHOLDS) {
        if (pct >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackScrollDepth(slug, threshold);
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);
}
