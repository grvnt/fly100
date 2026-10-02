'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { CONTINENTS, MONTHS } from '@/lib/destinations';
import { Continent, MonthAbbr } from '@/types/destination';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  activeContinent: Continent | null;
  activeMonths: MonthAbbr[];
}

/**
 * Continent (single-select, "All" included) + month (multi-select, OR logic)
 * pills. State lives in the URL (`?continent=...&months=mar,apr`) so filtered
 * views are shareable — the whole point of a directory. Navigating re-renders
 * `app/sites/page.tsx` server-side with the new searchParams; no client-side
 * data fetching needed at 10-destination scale.
 */
export default function FilterBar({ activeContinent, activeMonths }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function pushParams(next: URLSearchParams) {
    const query = next.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  function setContinent(continent: Continent | null) {
    const next = new URLSearchParams(searchParams.toString());
    if (continent) {
      next.set('continent', continent);
    } else {
      next.delete('continent');
    }
    pushParams(next);
  }

  function toggleMonth(month: MonthAbbr) {
    const next = new URLSearchParams(searchParams.toString());
    const current = new Set(activeMonths);
    if (current.has(month)) {
      current.delete(month);
    } else {
      current.add(month);
    }
    if (current.size > 0) {
      next.set('months', Array.from(current).join(','));
    } else {
      next.delete('months');
    }
    pushParams(next);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by continent">
        <button
          type="button"
          role="checkbox"
          aria-checked={activeContinent === null}
          onClick={() => setContinent(null)}
          className={cn(
            'rounded-full border px-3 py-1 text-sm transition-colors',
            activeContinent === null
              ? 'border-sky-500 bg-sky-500/15 text-sky-400'
              : 'border-border text-muted-foreground hover:border-sky-500/40'
          )}
        >
          All continents
        </button>
        {CONTINENTS.map((continent) => (
          <button
            key={continent}
            type="button"
            role="checkbox"
            aria-checked={activeContinent === continent}
            onClick={() => setContinent(continent === activeContinent ? null : continent)}
            className={cn(
              'rounded-full border px-3 py-1 text-sm transition-colors',
              activeContinent === continent
                ? 'border-sky-500 bg-sky-500/15 text-sky-400'
                : 'border-border text-muted-foreground hover:border-sky-500/40'
            )}
          >
            {continent}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by best flying month">
        {MONTHS.map((month) => {
          const checked = activeMonths.includes(month);
          return (
            <button
              key={month}
              type="button"
              role="checkbox"
              aria-checked={checked}
              onClick={() => toggleMonth(month)}
              className={cn(
                'rounded-full border px-2.5 py-1 text-xs transition-colors',
                checked
                  ? 'border-sky-500 bg-sky-500/15 text-sky-400'
                  : 'border-border text-muted-foreground hover:border-sky-500/40'
              )}
            >
              {month}
            </button>
          );
        })}
      </div>
    </div>
  );
}
