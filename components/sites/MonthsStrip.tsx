import { MONTHS } from '@/lib/destinations';
import { MonthAbbr } from '@/types/destination';
import { cn } from '@/lib/utils';

interface MonthsStripProps {
  bestMonths: MonthAbbr[];
  className?: string;
}

/** 12-cell mini calendar — lit dots mark the best flying months. */
export default function MonthsStrip({ bestMonths, className }: MonthsStripProps) {
  const label = `Best flying: ${bestMonths.length > 0 ? bestMonths.join(', ') : 'not yet scored'}`;

  return (
    <div className={cn('flex items-center gap-[3px]', className)} role="img" aria-label={label}>
      {MONTHS.map((month) => {
        const isBest = bestMonths.includes(month);
        return (
          <span
            key={month}
            aria-hidden="true"
            title={month}
            className={cn(
              'h-1.5 w-1.5 rounded-full transition-colors',
              isBest ? 'bg-sky-400' : 'bg-muted'
            )}
          />
        );
      })}
    </div>
  );
}
