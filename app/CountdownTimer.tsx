'use client';

import React, { useEffect, useState } from 'react';

/**
 * CountdownTimer — live hero urgency line for the Fly100 sales page.
 *
 * Visual treatment
 * ----------------
 * Four glass-blur tiles (Days / Hrs / Min / Sec), each a rounded card with a
 * big bold 2-digit number and a small uppercase label beneath. A short intro
 * label sits above the row ("Doors close in"). The tile grid adapts the
 * reference's digit-tile STRUCTURE to Fly100's existing dark/blue glass
 * language — same `bg-white/5 backdrop-blur-[6px] border-[#0076FF]/40`
 * treatment the hero already uses for the audience pill and CTA.
 *
 * Deadline interpretation
 * -----------------------
 * "Midnight on Friday 27 November" is read as the end of Friday — the
 * instant that closes the day — in South Africa Standard Time (SAST,
 * UTC+2, no DST). That's 2026-11-28T00:00:00+02:00. If the intent is
 * actually the START of Friday, bump the ISO string back 24 hours.
 *
 * Hydration
 * ---------
 * `Date.now()` drifts between server render and client mount, which would
 * otherwise cause a hydration mismatch on a per-second element. We render
 * a stable placeholder on the server and during the very first client
 * render (both see `parts === undefined`), then populate on mount inside
 * useEffect. The placeholder is visually equivalent weight to the live
 * grid so there's no layout jump when the ticker activates.
 *
 * Past-deadline behaviour
 * -----------------------
 * Once the target has passed, the component falls back to a single-line
 * "Doors are closed." — safe if this branch is still live past 28 Nov.
 *
 * Reduced motion
 * --------------
 * The visual change each tick is a text swap (no transforms, no animated
 * opacity, no transitions), so `prefers-reduced-motion` is honoured by
 * construction — nothing would move for the respecter to disable.
 *
 * Accessibility
 * -------------
 * Screen readers would otherwise read the per-second update as noise.
 * The live region is marked `aria-live="off"` and the visual digits are
 * `aria-hidden="true"`; a single sr-only sentence ("Doors close in N days,
 * H hours, M minutes, S seconds.") carries the semantic without the
 * chatter. Users who want precise time can focus the element manually.
 */

// Target time comes in as a prop (epoch ms, built from explicit SAST ISO strings
// in lib/launch.ts) — no reliance on the viewer's local clock zone.

type Parts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function computeParts(targetMs: number, now: number): Parts | null {
  const diff = targetMs - now;
  if (diff <= 0) return null;
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

type Props = {
  /** Tailwind classes applied to the outer wrapper. Lets the hero own
   *  outer spacing (margin, alignment) without the component prescribing
   *  it. Internal tile styling is fixed. */
  className?: string;
  /** Small caption above the tiles, e.g. "Doors open in". */
  label: string;
  /** Epoch ms the timer counts down to. */
  targetMs: number;
};

type TileProps = {
  value: string;
  label: string;
};

/**
 * One digit tile. Fixed min-width keeps the row stable as the seconds
 * value rolls over (tabular-nums handles glyph width inside the number;
 * min-width handles the box so the gap doesn't jitter).
 */
function Tile({ value, label }: TileProps): React.ReactElement {
  return (
    <div
      className="flex min-w-[64px] sm:min-w-[72px] flex-col items-center justify-center rounded-xl border border-[#0076FF]/40 bg-white/5 backdrop-blur-[6px] px-3 py-2.5 sm:px-4 sm:py-3"
      aria-hidden="true"
    >
      <span className="tabular-nums text-[26px] sm:text-[30px] font-bold leading-none tracking-[-0.02em] text-white">
        {value}
      </span>
      <span className="mt-1.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-[#4DA3FF]">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer({ className, label, targetMs }: Props): React.ReactElement {
  // `undefined` = pre-mount (server + first client paint share this state,
  // so no hydration mismatch). `null` = deadline passed. `Parts` = live.
  const [parts, setParts] = useState<Parts | null | undefined>(undefined);

  useEffect(() => {
    const tick = (): void => setParts(computeParts(targetMs, Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return (): void => {
      window.clearInterval(id);
    };
  }, [targetMs]);

  if (parts === undefined) {
    // Pre-hydration placeholder. Four tiles with "--" so the grid takes
    // its final height and width on first paint — no layout shift when
    // the live state arrives on mount.
    return (
      <div
        className={className}
        suppressHydrationWarning
      >
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
          {label}
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3">
          <Tile value="--" label="Days" />
          <Tile value="--" label="Hrs" />
          <Tile value="--" label="Min" />
          <Tile value="--" label="Sec" />
        </div>
      </div>
    );
  }

  if (parts === null) {
    return (
      <p className={`${className ?? ''} text-center text-[14px] text-white/60`}>
        Doors are closed.
      </p>
    );
  }

  return (
    <div className={className} aria-live="off">
      <p className="text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
        {label}
      </p>
      <div className="mt-3 flex items-center justify-center gap-2 sm:gap-3">
        <Tile value={pad(parts.days)} label="Days" />
        <Tile value={pad(parts.hours)} label="Hrs" />
        <Tile value={pad(parts.minutes)} label="Min" />
        <Tile value={pad(parts.seconds)} label="Sec" />
      </div>
      <span className="sr-only">
        {label} {parts.days} days, {parts.hours} hours,{' '}
        {parts.minutes} minutes, {parts.seconds} seconds.
      </span>
    </div>
  );
}
