import { Metadata } from "next";
import HeroWelcome from "@/components/General/HeroWelcome";

// const Pricing = dynamic(() => import('@/components/General/Pricing'), { ssr: false });

export const metadata: Metadata = {
  title: "Welcome to the Way of Flow",
  description:
    "Newsletter Welcome Page.",
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
