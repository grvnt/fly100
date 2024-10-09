// import { Suspense } from "react";
// import Header from "@/components/Header";
import Hero from "@/components/General/Hero";
import Problem from "@/components/General/Problem";
import FeaturesAccordion from "@/components/General/FeaturesAccordion";
import Pricing from "@/components/General/Pricing";
// import FAQ from "@/components/FAQ";
// import CTA from "@/components/CTA";
// import Footer from "@/components/Footer";
// import MentorStory from "@/components/MentorStory";
import BirdmenAcademy from "@/components/General/BirdmenAcademy";
import Team from "@/components/General/Team";
import TestimonialMerakai from "@/components/General/TestimonialMerakai";

export default function Home() {
  return (
    <>
      {/* <Suspense>
        <Header />
      </Suspense> */}
      <main>
        <Hero />
        <TestimonialMerakai />
        <Problem />
        <FeaturesAccordion />
        <Pricing />
        <BirdmenAcademy />
        {/* <FAQ /> */}
        <Pricing />
        {/* <MentorStory /> */}
        <Team />
      </main>
    </>
  );
}
