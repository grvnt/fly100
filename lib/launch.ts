/**
 * Fly100 founding-cohort launch dates. Single source of truth.
 * All times are explicit SAST (UTC+2) so nothing depends on a viewer's or
 * server's local clock.
 *
 *   before OPEN_AT            -> 'pre'    (hero-only waitlist page at /waitlist)
 *   OPEN_AT .. CLOSE_AT       -> 'open'   (full sales page at /)
 *   after CLOSE_AT            -> 'closed' (next-cohort waitlist at /waitlist)
 */
export const OPEN_AT = Date.parse('2026-11-23T08:00:00+02:00'); // Mon 23 Nov, 06:00 UTC
export const CLOSE_AT = Date.parse('2026-11-27T23:59:00+02:00'); // Fri 27 Nov, 21:59 UTC

export type Phase = 'pre' | 'open' | 'closed';

export function getPhase(now: number = Date.now()): Phase {
  if (now < OPEN_AT) return 'pre';
  if (now < CLOSE_AT) return 'open';
  return 'closed';
}
