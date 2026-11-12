import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getPhase } from '@/lib/launch';
import { SalesPage } from '../SalesPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fly100 Waitlist | Paraglide Your First 100km With Confidence',
  description:
    'Join the Fly100 waitlist. A 6-week founding cohort for licensed XC pilots who want to fly further with confidence.',
};

export default function Waitlist() {
  const phase = getPhase();
  // During the open week anyone with an old waitlist link lands on the live page.
  if (phase === 'open') redirect('/');
  return <SalesPage mode={phase === 'pre' ? 'pre' : 'closed'} />;
}
