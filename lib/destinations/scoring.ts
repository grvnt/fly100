import { Destination, DestinationScores } from '@/types/destination';

/**
 * Weighted overall score, per the plan (2026-05-06 implementation plan, section 2).
 * XC Potential and Weather Reliability dominate — pilots travel for flyable air,
 * not amenities. Returns null if any component score is missing rather than
 * silently treating a gap as zero.
 */
const WEIGHTS: Record<keyof DestinationScores, number> = {
  xcPotential: 0.25,
  weatherReliability: 0.2,
  safety: 0.15,
  scenery: 0.15,
  accessibility: 0.1,
  schoolAvailability: 0.1,
  value: 0.05,
};

export function computeOverallScore(scores: DestinationScores): number | null {
  const keys = Object.keys(WEIGHTS) as (keyof DestinationScores)[];
  if (keys.some((key) => scores[key] === null)) {
    return null;
  }
  const total = keys.reduce((sum, key) => sum + (scores[key] as number) * WEIGHTS[key], 0);
  return Math.round(total * 10) / 10;
}

export function getOverallScore(destination: Destination): number | null {
  return computeOverallScore(destination.scores);
}

/** Colour band for a 0-10 score. Text label always accompanies colour — never colour alone. */
export type ScoreBand = 'strong' | 'solid' | 'weak' | 'unscored';

export function getScoreBand(score: number | null): ScoreBand {
  if (score === null) return 'unscored';
  if (score >= 8) return 'strong';
  if (score >= 6) return 'solid';
  return 'weak';
}

export const SCORE_BAND_CLASSES: Record<ScoreBand, string> = {
  strong: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  solid: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
  weak: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  unscored: 'bg-muted text-muted-foreground border-border',
};

export const SCORE_LABELS: Record<keyof DestinationScores, string> = {
  xcPotential: 'XC Potential',
  accessibility: 'Accessibility',
  schoolAvailability: 'School Availability',
  safety: 'Safety',
  scenery: 'Scenery',
  value: 'Value',
  weatherReliability: 'Weather Reliability',
};
