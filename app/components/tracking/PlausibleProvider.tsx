"use client";

import Script from "next/script";

/**
 * Plausible Analytics provider using rockland.news's unique snippet.
 *
 * No cookies. No banner required. GDPR/CCPA-friendly out of the box.
 */
export default function PlausibleProvider() {
  return (
    <>
      <Script
        async
        src="https://plausible.io/js/pa-fgczwRiarH5c5RHSdxk2Z.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-init" strategy="afterInteractive">
        {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init();`}
      </Script>
    </>
  );
}
