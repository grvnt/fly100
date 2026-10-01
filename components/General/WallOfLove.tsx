'use client';

import Script from 'next/script';

/**
 * Senja "wall of love" — https://senja.io/p/fly100/4BbOBg3
 * Replaced the older "Scroll Photos" wall on the Wingmates page, 2026-10-01.
 */
const WIDGET_ID = 'f54f7063-325a-46b0-9f4e-9e744e12b078';

export default function WallOfLove() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <Script
          src={`https://widget.senja.io/widget/${WIDGET_ID}/platform.js`}
          strategy="afterInteractive"
        />
        <div
          className="senja-embed"
          data-id={WIDGET_ID}
          data-mode="shadow"
          data-lazyload="false"
          style={{ display: 'block', width: '100%' }}
        />
      </div>
    </section>
  );
}
