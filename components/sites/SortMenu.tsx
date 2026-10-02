import { Lock } from 'lucide-react';
import { SCORE_LABELS } from '@/lib/destinations/scoring';
import { cn } from '@/lib/utils';

interface SortMenuProps {
  isMember: boolean;
}

const LOCKED_SORT_KEYS = ['xcPotential', 'weatherReliability', 'safety', 'scenery'] as const;

/**
 * Server-safe, no client state needed for MVP: free tier sorts by Overall
 * only (plan section 3). The other score dimensions render as locked pills
 * so the gating pattern is visible and reviewable, without requiring a real
 * dropdown or sort re-fetch — clicking a locked pill is a no-op link to
 * /wingmates, same pattern as the detail-page gate.
 */
export default function SortMenu({ isMember }: SortMenuProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="text-muted-foreground">Sort:</span>
      <span className="rounded-md border border-sky-500 bg-sky-500/15 px-2.5 py-1 font-medium text-sky-400">
        Overall score
      </span>
      {LOCKED_SORT_KEYS.map((key) => (
        <span
          key={key}
          title={isMember ? SCORE_LABELS[key] : `Unlock sort by ${SCORE_LABELS[key]} with Wingmates`}
          className={cn(
            'flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-muted-foreground',
            !isMember && 'opacity-60'
          )}
        >
          {!isMember && <Lock className="h-3 w-3" aria-hidden="true" />}
          {SCORE_LABELS[key]}
        </span>
      ))}
    </div>
  );
}
