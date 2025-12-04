'use client';

import Script from 'next/script';

interface SenjaEmbedProps {
  widgetId: string;
  className?: string;
  showContainer?: boolean;
}

export default function SenjaEmbed({ 
  widgetId, 
  className = '',
  showContainer = true 
}: SenjaEmbedProps) {
  const content = (
    <>
      <Script
        src={`https://widget.senja.io/widget/${widgetId}/platform.js`}
        strategy="afterInteractive"
      />
      <div
        className={`senja-embed ${className}`}
        data-id={widgetId}
        data-mode="shadow"
        data-lazyload="false"
        style={{ display: 'block', width: '100%' }}
      />
    </>
  );

  if (showContainer) {
    return (
      <section className="bg-background text-foreground overflow-hidden">
        <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8">
          {content}
        </div>
      </section>
    );
  }

  return content;
}

