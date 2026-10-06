// Pure chain-combination logic, separated out so it's testable without
// rendering React (see scripts/check-chain-personas.mts) — this is the
// one layer with no per-step rubric to lean on, so it needs its own
// direct test coverage rather than inheriting confidence from the
// per-step persona suites.

import type { Recommendation } from './types';

/**
 * The focus leg is the earliest one that isn't Ready — the pilot's
 * real, immediate hurdle. If every leg is Ready, the focus is the
 * final leg, since that's the wing they're actually about to fly.
 * The overall recommendation shown to the pilot is always the focus
 * leg's own recommendation, never a separate blended score.
 */
export function selectFocusLegIndex<T extends { recommendation: Recommendation }>(legs: T[]): number {
  const idx = legs.findIndex((leg) => leg.recommendation !== 'ready');
  return idx === -1 ? legs.length - 1 : idx;
}
