import { Metadata } from 'next';
// import dynamic from 'next/dynamic';
import Hero from '@/components/General/Hero';
import Problem from '@/components/General/Problem';
import GroupFlow from '@/components/General/GroupFlow';
import TestimonialMerakai from '@/components/General/TestimonialMerakai';
import PricingWingmates from '@/components/General/PricingWingmates';
import SenjaEmbed from '@/components/General/SenjaEmbed';

// const Pricing = dynamic(() => import('@/components/General/Pricing'), { ssr: false });

export const metadata: Metadata = {
  title: 'Wingmates | The Inner Game of Paragliding',
  description:
    'A community dedicated to flow state, decision-making, and the mental mastery of flight. Mechanical skill gets you airborne; mindset determines the rest.',
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TestimonialMerakai />
        <Problem />
        <GroupFlow />
        <SenjaEmbed widgetId="0e2dc407-4d4f-487d-880b-0178d54161ab" />
        <PricingWingmates />
        <SenjaEmbed widgetId="196a5b6b-801b-49df-93bf-325c3a57749f" />
      </main>
    </>
  );
}
