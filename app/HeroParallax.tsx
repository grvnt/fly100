'use client';

import React from 'react';
import Image from 'next/image';

/**
 * HeroParallax — subtle vertical parallax for the full-bleed hero photo.
 *
 * Why a client component: the parent page is a server component and
 * `next/image` with `fill` doesn't accept inline transform. We wrap it in a
 * small client island that reads `window.scrollY` and mutates the wrapper's
 * transform imperatively — React never re-renders on scroll, so the main
 * thread stays free for paint.
 *
 * Implementation notes:
 * - Scroll handler is throttled via `requestAnimationFrame`. We queue at most
 *   one frame; subsequent scroll events coalesce.
 * - Transform uses `translate3d` to force GPU compositing and avoid layout.
 * - Wrapper is intentionally oversized (`-top-[10%] h-[120%]`) so the image
 *   can translate up to ~10% of section height without revealing its edges
 *   (black section background would show through otherwise).
 * - Speed factor 0.35: the image moves at 35% of scroll speed. Classic subtle
 *   hero parallax — depth without the seasick swing you get above ~0.5.
 * - `prefers-reduced-motion: reduce` short-circuits the effect; the image
 *   stays static for users who ask for reduced motion.
 * - We only track scroll while the hero is near the viewport (scrollY under
 *   ~1.5x viewport). Past that the hero is off-screen and there's no reason
 *   to keep computing.
 */
export function HeroParallax({
  srcDesktop,
  srcMobile,
  alt,
}: {
  srcDesktop: string;
  srcMobile: string;
  alt: string;
}) {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Respect user's reduced-motion preference.
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    let ticking = false;
    let lastY = 0;

    const apply = () => {
      ticking = false;
      // Only bother if hero is still roughly on-screen.
      if (lastY > window.innerHeight * 1.5) return;
      // Translate DOWN by a fraction of scroll — the section moves up faster
      // than the image, so the image appears to lag behind (classic parallax).
      const translate = lastY * 0.35;
      el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      lastY = window.scrollY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };

    // Prime the initial transform (handles page loads mid-scroll / refresh).
    lastY = window.scrollY;
    apply();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform"
    >
      {/* Two purpose-built crops instead of one photo fighting both shapes.
          Earlier attempts tried to reposition a single square-ish source
          via object-position, which worked for desktop (wide, lots of
          horizontal slack) but never cleared the headline on mobile
          (narrow, crops width so aggressively a single photo can't dodge
          full-width wrapped text). Grant supplied two separate crops with
          the glider already composed clear of where the text sits: wide
          (glider in the right third) for desktop, tall (glider near the
          top) for mobile. Both render here; CSS visibility picks the
          right one per breakpoint, so there's no JS viewport detection. */}
      <Image
        src={srcMobile}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-top sm:hidden"
      />
      <Image
        src={srcDesktop}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center hidden sm:block"
      />
    </div>
  );
}
