import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/General/Header';
import Footer from '@/components/General/Footer';
import DestinationHero from '@/components/sites/detail/DestinationHero';
import ScoreGrid from '@/components/sites/detail/ScoreGrid';
import MonthHeatmap from '@/components/sites/detail/MonthHeatmap';
import SectionMarkdown from '@/components/sites/detail/SectionMarkdown';
import WingmatesGate from '@/components/sites/detail/WingmatesGate';
import RelatedDestinations from '@/components/sites/detail/RelatedDestinations';
import { getAllDestinations, getDestinationBySlug, getRelatedDestinations } from '@/lib/destinations';
import { getIsWingmatesMember } from '@/lib/membership';

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllDestinations().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return {
    title: `${destination.name}, ${destination.country} | Fly100 Destinations`,
    description: destination.whyGo,
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const isMember = await getIsWingmatesMember();
  const related = getRelatedDestinations(destination);

  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-10 sm:px-8 sm:py-14">
        <DestinationHero destination={destination} />

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-foreground">Scores</h2>
          <ScoreGrid scores={destination.scores} />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-foreground">Best months to fly</h2>
          <MonthHeatmap bestMonths={destination.bestMonths} seasonNotes={destination.seasonNotes} />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-foreground">What&apos;s it like</h2>
          <WingmatesGate
            isMember={isMember}
            title="the full write-up"
            variant="teaser"
            teaserText={destination.content.whatsItLike}
          >
            <SectionMarkdown content={destination.content.whatsItLike} />
          </WingmatesGate>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-foreground">Flying conditions</h2>
          <WingmatesGate isMember={isMember} title="Flying Conditions" variant="locked">
            <SectionMarkdown content={destination.content.flyingConditions} />
          </WingmatesGate>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-foreground">Hazards &amp; safety</h2>
          <WingmatesGate isMember={isMember} title="Hazards & Safety" variant="locked">
            <SectionMarkdown content={destination.content.hazards} />
          </WingmatesGate>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-foreground">Getting there</h2>
          <WingmatesGate isMember={isMember} title="Getting There" variant="locked">
            <SectionMarkdown content={destination.content.gettingThere} />
          </WingmatesGate>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold text-foreground">When to go — in detail</h2>
          <WingmatesGate isMember={isMember} title="When To Go" variant="locked">
            <SectionMarkdown content={destination.content.whenToGo} />
          </WingmatesGate>
        </section>

        <RelatedDestinations destinations={related} />

        <p className="border-t border-border pt-6 text-sm text-muted-foreground">
          Sourced and condensed from{' '}
          <a
            href={destination.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sky-400 hover:underline"
          >
            {destination.sourceName}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
