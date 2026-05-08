import { Metadata } from 'next';
// import dynamic from 'next/dynamic';
import ButtonGradient from '@/components/General/ButtonGradient';
import Problem from '@/components/General/Problem';
import GroupFlow from '@/components/General/GroupFlow';
import TestimonialMerakai from '@/components/General/TestimonialMerakai';
import PricingWingmates from '@/components/General/PricingWingmates';
import RecognitionCards from '@/components/General/RecognitionCards';

// const Pricing = dynamic(() => import('@/components/General/Pricing'), { ssr: false });

export const metadata: Metadata = {
  title: 'Wingmates | Ready to Flow',
  description:
    'A community dedicated to flow state, decision-making, and the mental mastery of flight. Mechanical skill gets you airborne; mindset determines the rest.',
};

export default function Home() {
  return (
    <>
      <main>
        <section className="max-w-7xl mx-auto bg-base-200 px-4 sm:px-8 py-12 sm:py-16 lg:py-32 min-h-[80vh] flex items-center">
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column - The Hook */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Eyebrow */}
              <p className="text-base sm:text-lg font-semibold uppercase tracking-wider text-[#3B82F6] animate-pulse-text">
                THE FUTURE BELONGS TO THE FLOW PILOT
              </p>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Master the Mental Game.
                <br />
                Fly in Flow.
              </h1>

              {/* Body */}
              <p className="text-lg sm:text-xl lg:text-xl text-white leading-relaxed max-w-2xl mt-2">
                The community for pilots who want to fly with more confidence, focus and flow. Train
                your mind, connect with your peers, rediscover and share your love for flying.
              </p>

              {/* Button */}
              <div className="mt-6">
                <ButtonGradient
                  href="/wingmates/#pricing"
                  text="Join Wingmates"
                  className="btn-wide"
                />
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="w-full flex items-center justify-center">
              <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden border-4 border-[#3B82F6] animate-pulse-border">
                <video
                  className="w-full h-full object-cover"
                  controls
                  src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/wingmates-intro-small.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="lg:hidden flex flex-col gap-6 items-center">
            {/* Eyebrow */}
            <p className="text-base font-semibold uppercase tracking-wider text-[#3B82F6] text-center animate-pulse-text">
              THE FUTURE BELONGS TO THE FLOW PILOT
            </p>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight text-center">
              Master the Mental Game.
              <br />
              Fly in Flow.
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg text-white leading-relaxed text-center max-w-2xl">
              The community for pilots who want to fly with more confidence, focus and flow. Train
              your mind, connect with your peers, rediscover and share your love for flying.
            </p>

            {/* Button */}
            <div className="mt-4">
              <ButtonGradient
                href="/wingmates/#pricing"
                text="Join Wingmates"
                className="btn-wide"
              />
            </div>

            {/* Video */}
            <div className="w-full max-w-4xl mx-auto mt-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden border-4 border-[#3B82F6] animate-pulse-border">
                <video
                  className="w-full h-full object-cover"
                  controls
                  src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/wingmates-intro-small.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/blog-images/gudauri-paragliding-sigma.jpg)',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 w-full">
            <TestimonialMerakai />
          </div>
        </section>

        <RecognitionCards />

        <Problem />
        <GroupFlow />

        {/* ===== ABOUT GRANT ===== */}
        <section className="bg-base-200 px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg leading-relaxed text-white/80">
            <div className="flex justify-center mb-2">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#3B82F6] animate-pulse-border">
                <img
                  src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/grant-profile-pgatlas-crop.jpg"
                  alt="Grant Smith"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-semibold text-white text-center">
              Hey, I&apos;m Grant
            </p>

            <p>
              I&apos;m a qualified paragliding instructor, guide, and accomplished XC pilot.
              I&apos;m completing the ICF Flow Coaching certification with The Flow Centre — training
              to become the world&apos;s first paragliding flow coach.
            </p>

            <p>
              My method follows the tradition of Gallwey&apos;s Inner Game. Not more instruction —
              removing the interference that is already in the way. When the noise is cleared, pilots
              discover they already know how to fly. The work is in getting out of your own way.
            </p>

            <p>
              Most coaching focuses on technique. This doesn&apos;t. The gap between the flying you
              want and the flying you do is not technical. It&apos;s mental.
            </p>
          </div>
        </section>

        {/* ===== ALEX PULL QUOTE ===== */}
        <section className="bg-black px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <blockquote className="bg-[#07122d] rounded-2xl p-8 sm:p-12 border-l-4 border-[#3B82F6]">
              <p className="text-white text-lg sm:text-xl leading-relaxed mb-6">
                &ldquo;This has become more than just a flight skill — it&apos;s a way of being. I
                feel a pervasive sense of calm and a significant reduction in mental noise, noticing
                the difference even in mundane tasks like driving. I&apos;ve developed a new
                relationship with fear and anxiety, recognising them not as stop signs, but as
                energy to be transformed and utilised.&rdquo;
              </p>
              <p className="text-[#3B82F6] font-semibold text-base">— Alex, UK</p>
            </blockquote>
          </div>
        </section>

        <PricingWingmates />
      </main>
    </>
  );
}
