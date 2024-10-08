// import { Suspense } from "react";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
// import FAQ from "@/components/FAQ";
// import CTA from "@/components/CTA";
// import Footer from "@/components/Footer";
// import MentorStory from "@/components/MentorStory";
import BirdmenAcademy from "@/components/BirdmenAcademy";
import Team from "@/components/Team";
import TestimonialMerakai from "@/components/TestimonialMerakai";

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
