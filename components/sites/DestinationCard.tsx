import Link from 'next/link';
import { Destination } from '@/types/destination';
import { getOverallScore } from '@/lib/destinations/scoring';
import HeroFallback from './HeroFallback';
import MonthsStrip from './MonthsStrip';
import ScorePill from './ScorePill';

interface DestinationCardProps {
  destination: Destination;
}

/** Server-safe — no client state. One <a> wraps the whole card: one tab stop per destination. */
export default function DestinationCard({ destination }: DestinationCardProps) {
  const overall = getOverallScore(destination);

  return (
    <Link
      href={`/sites/${destination.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-sky-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <HeroFallback continent={destination.continent} country={destination.country} size="card" />

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-foreground group-hover:text-sky-400">
              {destination.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {destination.region ? `${destination.region}, ` : ''}
              {destination.country}
            </p>
          </div>
        </div>

        <MonthsStrip bestMonths={destination.bestMonths} />

        <div className="flex flex-wrap gap-1.5">
          <ScorePill label="Overall" score={overall} />
          <ScorePill label="XC" score={destination.scores.xcPotential} />
          <ScorePill label="Safety" score={destination.scores.safety} />
        </div>

        <p className="text-sm leading-snug text-foreground/80">{destination.whyGo}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {destination.vibeTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2 py-0.5 text-[0.7rem] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
