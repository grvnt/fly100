import { Metadata } from "next";
import dynamic from 'next/dynamic';
import HeroWelcome from "@/components/General/HeroWelcome";

const Pricing = dynamic(() => import('@/components/General/Pricing'), { ssr: false });

export const metadata: Metadata = {
  title: "Welcome XC Jedi",
  description:
    "Join Wingmates, the premier XC paragliding community. Learn, grow, and fly further with expert mentorship and support.",
};

export default function Home() {
  return (
    <>
      <main>
        <HeroWelcome />
      </main>
    </>
  );
}
