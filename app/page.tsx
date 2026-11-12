import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getPhase } from '@/lib/launch';
import { SalesPage } from './SalesPage';

// Rendered on every request so the launch switch (lib/launch.ts) happens at
// the exact set time without a deploy. A statically built page would freeze
// the phase at build time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fly100 | Paraglide Your First 100km With Confidence',
  description:
    'A 6-week founding cohort for licensed XC pilots who want to fly further with confidence. Doors close 27 November. Kickoff 10 December.',
};

export default function Home() {
  // Before doors open and after they close, the homepage sends people to the
  // waitlist. redirect() answers 307 (temporary), so nothing gets cached.
  if (getPhase() !== 'open') redirect('/waitlist');
  return <SalesPage mode="sales" />;
}
