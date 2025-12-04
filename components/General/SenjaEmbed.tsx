'use client';

import Script from 'next/script';

export default function SenjaEmbed() {
  const widgetId = '0e2dc407-4d4f-487d-880b-0178d54161ab';

  return (
    <section className="bg-background text-foreground overflow-hidden">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <Script
          src={`https://widget.senja.io/widget/${widgetId}/platform.js`}
          strategy="afterInteractive"
        />
        <div
          className="senja-embed"
          data-id={widgetId}
          data-mode="shadow"
          data-lazyload="false"
          style={{ display: 'block', width: '100%' }}
        />
      </div>
    </section>
  );
}

