import { Metadata } from "next";
import dynamic from 'next/dynamic';
import Hero from "@/components/General/Hero";
import Problem from "@/components/General/Problem";
import FeaturesAccordion from "@/components/General/FeaturesAccordion";
import BirdmenAcademy from "@/components/General/BirdmenAcademy";
import Team from "@/components/General/Team";
import TestimonialMerakai from "@/components/General/TestimonialMerakai";

const Pricing = dynamic(() => import('@/components/General/Pricing'), { ssr: false });

export const metadata: Metadata = {
  title: "Wingmates | XC Paragliding Community",
  description:
    "Join Wingmates, the premier XC paragliding community. Learn, grow, and fly further with expert mentorship and support.",
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TestimonialMerakai />
        <Problem />
        <FeaturesAccordion />
        <Pricing />
        <BirdmenAcademy />
        <Team />
        <Pricing />
      </main>
    </>
  );
}
