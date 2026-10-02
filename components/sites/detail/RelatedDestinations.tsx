import { Destination } from '@/types/destination';
import DestinationCard from '../DestinationCard';

interface RelatedDestinationsProps {
  destinations: Destination[];
}

export default function RelatedDestinations({ destinations }: RelatedDestinationsProps) {
  if (destinations.length === 0) return null;

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-foreground">Related destinations</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>
    </section>
  );
}
