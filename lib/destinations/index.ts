import { Continent, Destination, MonthAbbr } from '@/types/destination';
import { DESTINATIONS } from './seed';
import { computeOverallScore } from './scoring';

export const CONTINENTS: Continent[] = [
  'Europe',
  'Asia',
  'Africa',
  'North America',
  'South America',
  'Australasia',
];

export const MONTHS: MonthAbbr[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * All published destinations. Sync — this is a static array today. When this
 * moves to Supabase, this becomes `async function getAllDestinations()` and
 * every call site below already awaits query results the same way, since
 * they're already async-shaped where they touch data.
 */
export function getAllDestinations(): Destination[] {
  return DESTINATIONS.filter((d) => d.status === 'published');
}

export function getDestinationBySlug(slug: string): Destination | null {
  return DESTINATIONS.find((d) => d.slug === slug && d.status === 'published') ?? null;
}

export interface DirectoryFilters {
  continent?: Continent | null;
  months?: MonthAbbr[];
}

/** Continent: single-select ("All" = no filter). Months: multi-select, OR logic. */
export function filterDestinations(
  destinations: Destination[],
  filters: DirectoryFilters
): Destination[] {
  return destinations.filter((d) => {
    if (filters.continent && d.continent !== filters.continent) return false;
    if (filters.months && filters.months.length > 0) {
      const hasMonth = filters.months.some((m) => d.bestMonths.includes(m));
      if (!hasMonth) return false;
    }
    return true;
  });
}

/** Free tier sorts by Overall only for MVP — see plan section 3, "Free vs Wingmates gating". */
export function sortByOverall(destinations: Destination[]): Destination[] {
  return [...destinations].sort((a, b) => {
    const scoreA = computeOverallScore(a.scores) ?? -1;
    const scoreB = computeOverallScore(b.scores) ?? -1;
    return scoreB - scoreA;
  });
}

/** Same continent, excluding the current destination, capped at 3. */
export function getRelatedDestinations(current: Destination, limit = 3): Destination[] {
  return getAllDestinations()
    .filter((d) => d.slug !== current.slug && d.continent === current.continent)
    .slice(0, limit);
}
