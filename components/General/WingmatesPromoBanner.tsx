'use client';

import { useEffect, useState } from 'react';

/**
 * SPRINGMATES 20% off, promoted in Grant's email sent 2026-10-09. Ends
 * 2026-10-09 23:59:59 SAST (UTC+2) = 21:59:59 UTC same day.
 */
const DEADLINE = new Date('2026-10-09T21:59:59Z').getTime();
const CHECKOUT_URL = 'https://wingmates.fly100.co/checkout/wingmates-new';
const BANNER_RED = '#C81E3A';

function getTimeLeft() {
  const diff = DEADLINE - Date.now();
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

function scrollToPricingOrCheckout() {
  const pricing = document.getElementById('pricing');
  if (pricing) {
    pricing.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.href = CHECKOUT_URL;
  }
}

export default function WingmatesPromoBanner() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Avoid a hydration mismatch on the live seconds value; render only once mounted.
  if (!mounted || !timeLeft) return null;

  return (
    <div
      className="sticky top-0 z-[60] w-full"
      style={{ backgroundColor: BANNER_RED, color: '#FFFFFF' }}
      role="region"
      aria-label="Limited-time promotion"
    >
      <div className="mx-auto max-w-[72rem] px-4 py-3 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3">
        <span className="text-[14px] sm:text-[15px] font-semibold leading-snug">
          SPRINGMATES 20% Off Ends In:
        </span>

        <span
          className="font-mono text-[18px] sm:text-[15px] font-bold tabular-nums tracking-wider"
          aria-live="polite"
        >
          {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>

        <span className="hidden sm:inline text-[15px] leading-snug">
          | Use code <strong>SPRINGMATES</strong> at checkout.
        </span>

        <button
          type="button"
          onClick={scrollToPricingOrCheckout}
          className="mt-1 shrink-0 rounded-full bg-black/80 px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-black sm:mt-0"
        >
          Claim 20% Off
        </button>
      </div>
    </div>
  );
}
