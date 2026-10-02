import { MONTHS } from '@/lib/destinations';
import { MonthAbbr } from '@/types/destination';
import { cn } from '@/lib/utils';

interface MonthHeatmapProps {
  bestMonths: MonthAbbr[];
  seasonNotes: string | null;
}

/** Full 12-month strip with labels, plus the guide's own season notes verbatim below. */
export default function MonthHeatmap({ bestMonths, seasonNotes }: MonthHeatmapProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="grid grid-cols-6 gap-2 sm:grid-cols-12"
        role="img"
        aria-label={`Best flying months: ${bestMonths.join(', ') || 'not yet scored'}`}
      >
        {MONTHS.map((month) => {
          const isBest = bestMonths.includes(month);
          return (
            <div
              key={month}
              aria-hidden="true"
              className={cn(
                'flex flex-col items-center gap-1 rounded-md border py-2 text-xs',
                isBest
                  ? 'border-sky-500/40 bg-sky-500/15 text-sky-400 font-semibold'
                  : 'border-border text-muted-foreground'
              )}
            >
              {month}
            </div>
          );
        })}
      </div>
      {seasonNotes && <p className="text-sm text-muted-foreground">{seasonNotes}</p>}
    </div>
  );
}
