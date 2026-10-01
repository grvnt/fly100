'use client';

import Script from 'next/script';

/**
 * Senja "wall of love" — https://widget.senja.io/widget/f7fc4e09-bd84-4cfa-8d1e-a02430b35393
 * Replaced the older "Scroll Photos" wall on the Wingmates page, 2026-10-01.
 */
const WIDGET_ID = 'f7fc4e09-bd84-4cfa-8d1e-a02430b35393';

export default function WallOfLove() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-24" style={{ backgroundColor: '#0C0E11' }}>
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
