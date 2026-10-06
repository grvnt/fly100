// The wing-class ladder, per BRIEF.md: A -> low B -> mid B -> high B ->
// low C -> high C / 2-liner C -> D -> CCC. Data, not UI — the picker
// and the chain orchestrator both read from this, so adding a new
// step is a registry entry here, not a UI rewrite.
//
// No React/Next imports — importable by a plain script the same way
// scoreEngine.ts is.

import type { LadderRung } from './types';

export const LADDER_RUNGS: LadderRung[] = ['A', 'low-B', 'mid-B', 'high-B', 'low-C', 'high-C', 'D', 'CCC'];

export const LADDER_LABELS: Record<LadderRung, string> = {
  A: 'EN-A',
  'low-B': 'Low-end EN-B',
  'mid-B': 'Mid-range EN-B',
  'high-B': 'High-end EN-B',
  'low-C': 'Low-end EN-C',
  'high-C': 'High-end EN-C / 2-liner',
  D: 'EN-D',
  CCC: 'CCC (competition)',
};

// Which step id covers the gap between each pair of CONSECUTIVE rungs.
// Only steps that actually have a built rubric belong here — resolveChain
// returns null for any jump that needs a step not yet in this registry,
// rather than pretending to support it.
export const STEP_REGISTRY: Record<string, { from: LadderRung; to: LadderRung }> = {
  'a-to-low-b': { from: 'A', to: 'low-B' },
  'low-b-to-mid-b': { from: 'low-B', to: 'mid-B' },
};

function stepIdFor(from: LadderRung, to: LadderRung): string | null {
  for (const [id, pair] of Object.entries(STEP_REGISTRY)) {
    if (pair.from === from && pair.to === to) return id;
  }
  return null;
}

/**
 * Ordered list of step ids needed to go from `from` to `to`, walking
 * consecutive ladder rungs. Returns null if `to` is not above `from`,
 * or if any required rung-to-rung step doesn't have a built rubric yet.
 */
export function resolveChain(from: LadderRung, to: LadderRung): string[] | null {
  const fromIndex = LADDER_RUNGS.indexOf(from);
  const toIndex = LADDER_RUNGS.indexOf(to);
  if (fromIndex === -1 || toIndex === -1 || toIndex <= fromIndex) return null;

  const chain: string[] = [];
  for (let i = fromIndex; i < toIndex; i++) {
    const stepId = stepIdFor(LADDER_RUNGS[i], LADDER_RUNGS[i + 1]);
    if (!stepId) return null;
    chain.push(stepId);
  }
  return chain;
}

/** Every target rung reachable from `from` with a fully-built chain. */
export function reachableTargets(from: LadderRung): LadderRung[] {
  const fromIndex = LADDER_RUNGS.indexOf(from);
  if (fromIndex === -1) return [];
  const targets: LadderRung[] = [];
  for (let i = fromIndex + 1; i < LADDER_RUNGS.length; i++) {
    if (resolveChain(from, LADDER_RUNGS[i])) targets.push(LADDER_RUNGS[i]);
    else break; // first gap in the registry ends reachability
  }
  return targets;
}
