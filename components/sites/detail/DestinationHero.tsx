import { Destination } from '@/types/destination';
import { getOverallScore } from '@/lib/destinations/scoring';
import HeroFallback from '../HeroFallback';
import ScorePill from '../ScorePill';

interface DestinationHeroProps {
  destination: Destination;
}

export default function DestinationHero({ destination }: DestinationHeroProps) {
  const overall = getOverallScore(destination);

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <HeroFallback continent={destination.continent} country={destination.country} size="hero" />
      <div className="flex flex-col gap-3 bg-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{destination.name}</h1>
            <p className="text-muted-foreground">
              {destination.region ? `${destination.region}, ` : ''}
              {destination.country} — {destination.continent}
            </p>
          </div>
          <ScorePill label="Overall" score={overall} className="text-sm" />
        </div>
        <p className="text-lg text-foreground/90">{destination.whyGo}</p>
      </div>
    </div>
  );
}
