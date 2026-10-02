import { getScoreBand, SCORE_BAND_CLASSES } from '@/lib/destinations/scoring';
import { cn } from '@/lib/utils';

interface ScorePillProps {
  label: string;
  score: number | null;
  className?: string;
}

/** Colour-coded score badge. Text carries the meaning — colour is a reinforcement, never the only signal. */
export default function ScorePill({ label, score, className }: ScorePillProps) {
  const band = getScoreBand(score);
  const display = score === null ? '—' : score.toFixed(1);

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium',
        SCORE_BAND_CLASSES[band],
        className
      )}
      aria-label={score === null ? `${label}: not yet scored` : `${display} out of 10 — ${label}`}
    >
      <span className="font-semibold tabular-nums">{display}</span>
      <span className="text-[0.7rem] opacity-80">{label}</span>
    </span>
  );
}
