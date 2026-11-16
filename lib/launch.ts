/**
 * Fly100 founding-cohort launch dates. Single source of truth.
 * Every time carries an explicit UTC offset, so nothing depends on a viewer's
 * or server's local clock. OPEN_AT is in SAST (UTC+2). CLOSE_AT is in US
 * Pacific (PST, UTC-8) so readers in every time zone get all of their Sunday.
 *
 *   before OPEN_AT            -> 'pre'    (hero-only waitlist page at /waitlist)
 *   OPEN_AT .. CLOSE_AT       -> 'open'   (full sales page at /)
 *   after CLOSE_AT            -> 'closed' (next-cohort waitlist at /waitlist)
 */
export const OPEN_AT = Date.parse('2026-11-23T08:00:00+02:00'); // Mon 23 Nov, 06:00 UTC
export const CLOSE_AT = Date.parse('2026-11-29T23:59:00-08:00'); // Sun 29 Nov 11:59pm PT = Mon 30 Nov 07:59 UTC, 09:59 SAST, 18:59 Sydney

export type Phase = 'pre' | 'open' | 'closed';

export function getPhase(now: number = Date.now()): Phase {
  if (now < OPEN_AT) return 'pre';
  if (now < CLOSE_AT) return 'open';
  return 'closed';
}
