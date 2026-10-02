import { DestinationScores } from '@/types/destination';
import { getScoreBand, SCORE_BAND_CLASSES, SCORE_LABELS } from '@/lib/destinations/scoring';
import { cn } from '@/lib/utils';

interface ScoreGridProps {
  scores: DestinationScores;
}

const ORDER: (keyof DestinationScores)[] = [
  'xcPotential',
  'weatherReliability',
  'safety',
  'scenery',
  'accessibility',
  'schoolAvailability',
  'value',
];

/** All 7 scores, free tier — always visible per the plan's gating table. */
export default function ScoreGrid({ scores }: ScoreGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4" role="list">
      {ORDER.map((key) => {
        const score = scores[key];
        const band = getScoreBand(score);
        const display = score === null ? '—' : score.toFixed(1);
        return (
          <div
            key={key}
            role="listitem"
            className={cn('flex flex-col gap-1 rounded-lg border p-3', SCORE_BAND_CLASSES[band])}
          >
            <span className="text-2xl font-bold tabular-nums">{display}</span>
            <span className="text-xs opacity-90">{SCORE_LABELS[key]}</span>
          </div>
        );
      })}
    </div>
  );
}
