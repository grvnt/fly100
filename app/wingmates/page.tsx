import { Metadata } from "next";
import Hero from "@/components/General/Hero";
import Problem from "@/components/General/Problem";
import FeaturesAccordion from "@/components/General/FeaturesAccordion";
import Pricing from "@/components/General/Pricing";
import BirdmenAcademy from "@/components/General/BirdmenAcademy";
import Team from "@/components/General/Team";
import TestimonialMerakai from "@/components/General/TestimonialMerakai";

export const metadata: Metadata = {
  title: "Wingmates",
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
        <Pricing />
        <Team />
      </main>
    </>
  );
}
