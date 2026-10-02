import { Metadata } from 'next';
import Header from '@/components/General/Header';
import Footer from '@/components/General/Footer';
import DestinationCard from '@/components/sites/DestinationCard';
import FilterBar from '@/components/sites/FilterBar';
import SortMenu from '@/components/sites/SortMenu';
import EmptyState from '@/components/sites/EmptyState';
import { CONTINENTS, MONTHS, filterDestinations, getAllDestinations, sortByOverall } from '@/lib/destinations';
import { getIsWingmatesMember } from '@/lib/membership';
import { Continent, MonthAbbr } from '@/types/destination';

export const metadata: Metadata = {
  title: 'Paragliding Destinations | Fly100',
  description:
    'A directory of the world\'s best cross-country paragliding destinations, scored on XC potential, weather reliability, safety, scenery, accessibility, schools and value.',
};

interface SitesPageProps {
  searchParams: Promise<{ continent?: string; months?: string }>;
}

function parseContinent(value: string | undefined): Continent | null {
  if (!value) return null;
  return (CONTINENTS as string[]).includes(value) ? (value as Continent) : null;
}

function parseMonths(value: string | undefined): MonthAbbr[] {
  if (!value) return [];
  const requested = value.split(',');
  return (MONTHS as string[]).filter((m) => requested.includes(m)) as MonthAbbr[];
}

export default async function SitesPage({ searchParams }: SitesPageProps) {
  const params = await searchParams;
  const continent = parseContinent(params.continent);
  const months = parseMonths(params.months);
  const isMember = await getIsWingmatesMember();

  const all = getAllDestinations();
  const filtered = sortByOverall(filterDestinations(all, { continent, months }));

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-400">
            Fly100 Destination Directory
          </p>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Where to fly cross country
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            {all.length} destinations, scored on XC potential, weather reliability, safety, scenery,
            accessibility, schools and value — grounded in real XContest flight data where available.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6">
          <FilterBar activeContinent={continent} activeMonths={months} />
          <SortMenu isMember={isMember} />
        </div>

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
