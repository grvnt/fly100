import { Metadata } from 'next';
// import dynamic from 'next/dynamic';
import ButtonGradient from '@/components/General/ButtonGradient';
import Problem from '@/components/General/Problem';
import GroupFlow from '@/components/General/GroupFlow';
import TestimonialMerakai from '@/components/General/TestimonialMerakai';
import PricingWingmates from '@/components/General/PricingWingmates';
import SenjaEmbed from '@/components/General/SenjaEmbed';
import TheShift from '@/components/General/TheShift';
import { H2 } from '@/components/ui/typography';

// const Pricing = dynamic(() => import('@/components/General/Pricing'), { ssr: false });

export const metadata: Metadata = {
  title: 'Wingmates | Find your Flow',
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
                Fly Far. Fly Free.
                <br />
                Live Free.
              </h1>

              {/* Body */}
              <p className="text-lg sm:text-xl lg:text-xl text-white leading-relaxed max-w-2xl mt-2">
                Master the I-PARA Flow System to live your paragliding dreams and realise your true
                potential. Silence the noise, find your flow, and experience the magic of mastery.
              </p>

              {/* Button */}
              <div className="mt-6">
                <ButtonGradient
                  href="/wingmates/#pricing"
                  text="Find your Flow"
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
              Fly Far. Fly Free.
              <br />
              Live Free.
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg text-white leading-relaxed text-center max-w-2xl">
              Master the I-PARA Flow System within the Wingmates Community. Silence the noise, find
              your flow, and live the magic of mastery.
            </p>

            {/* Button */}
            <div className="mt-4">
              <ButtonGradient
                href="/wingmates/#pricing"
                text="Find your Flow"
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

        <section className="bg-black px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center text-center">
            {/* Eyebrow */}
            <p className="text-base sm:text-lg font-semibold uppercase tracking-wider text-[#3B82F6] animate-pulse-text">
              Paragliding is <span className="animate-shift-light">Evolving</span>
            </p>

            {/* H2 Heading */}
            <H2 className="text-white">Freedom Comes From Flow, Not Rankings</H2>

            {/* Body Text */}
            <div className="max-w-3xl mx-auto text-white text-lg sm:text-xl leading-relaxed space-y-6 text-justify">
              <p>
                We lost the magic and freedom of flying and began measuring our worth and enjoyment
                by points and rankings.
              </p>
              <p>
                We fulfilled a dream and then turned this miracle into a battle of the ego. Social
                networks and rating systems now push us to compare ourselves constantly, often
                forcing pilots to ignore their own feelings and safety just for a few extra points.
              </p>
              <p>
                But pilots are breaking away. There is a growing movement of people who realize
                paragliding is more than a sport—and are reconnecting with it as a form of art and
                personal growth.
              </p>

              <p>
                We are returning to the Soul of Free Flight, where flying exists as an elemental art
                of self-expression, self-discovery and, ultimately, self-evolution.
              </p>
              <p>We honour the XC Spirit of freedom and adventure.</p>
            </div>
          </div>
        </section>

        <TheShift />

        <section
          className="relative min-h-[60vh] flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/blog-images/gudauri-paragliding-sigma.jpg)',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 w-full">
            <TestimonialMerakai />
          </div>
        </section>

        <section className="bg-black px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center text-center">
            {/* Heading */}
            <H2 className="text-white">Who will benefit most from this?</H2>

            {/* Body Text */}
            <div className="max-w-3xl mx-auto text-white text-lg sm:text-xl leading-relaxed space-y-6 text-justify">
              <p>
                Let's be clear: This is not a retreat from performance. We aren't anti-competition.
                We aren't anti-ambition.
              </p>
              <p>We are anti-constraint - in flying and in life.</p>
              <p>
                We are after the freedom to perform at our absolute best, to push our limits, to
                break free from self-constraints, by cultivating the Warrior Spirit within.
              </p>
              <p>
                We embrace the full spectrum and the challenges of flight to become the best
                versions of ourselves—not to be the best in the world but to be the best for the
                world.
              </p>

              <p>
                But you cannot fly in flow if you are focused outwards and your mind is full of
                "Noise." You will benefit most from Wingmates if you are ready to break free from:
              </p>

              <ul className="space-y-4 text-left list-disc list-inside">
                <li>
                  <strong>The Ranking Trap:</strong> You've started measuring your worth by numbers
                  on a screen, turning a miracle into a "battle of the ego" and losing the
                  "excitement, fun, and adventure" that brought you to paragliding.
                </li>

                <li>
                  <strong>Fear is Holding You Back:</strong> On takeoff, on landing, when you're
                  high or in turbulence when there is no "pause button".
                </li>

                <li>
                  <strong>The "Retrieve Driver" Syndrome:</strong> You are sick of being the one
                  sitting in the car, watching others enjoy the air because you "bombed out" again.
                </li>

                <li>
                  <strong>The Overthinking Head:</strong> You have "10 contributors" jostling for
                  the top spot in your mind, creating a distracted, busy head that makes the magic
                  of flow impossible.
                </li>

                <li>
                  <strong>The Rollercoaster Cycle:</strong> You've had breakthroughs before, but
                  you're struggling with consistency.
                </li>

                <li>
                  <strong>The Toxic Strain:</strong> You've considered walking away from the sport
                  entirely because the mental strain and constant pressure to compare yourself have
                  silenced your love for flying.
                </li>

                <li>
                  <strong>Isolation:</strong> Paragliding can be scary and lonely without a crew.
                  Sharing ideas and experiences with the group helps to stay inspired and continue
                  the flying journey without feeling isolated.
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="max-w-5xl mx-auto mt-12">
              <img
                src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/blog-images/flow-channel-wingmates-paragliding.jpg"
                alt="Flow channel wingmates paragliding"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* The Greatest Gift - About Grant */}
        <section className="bg-base-200 px-4 sm:px-8 py-12 sm:py-16 lg:py-24">
          <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
            <p className="text-base sm:text-lg font-semibold uppercase tracking-wider text-[#3B82F6] animate-pulse-text">
              THE GREATEST GIFT
            </p>
            <H2 className="text-white mt-4">
              All Achievement is Meaningless
              <br />
              Without This
            </H2>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
            {/* Quote */}
            <blockquote className="max-w-3xl mx-auto text-white/80 text-base sm:text-lg italic border-l-4 border-[#3B82F6] pl-4 sm:pl-6">
              “Achievement is something you reach or attain, like a goal. It is perishable. Success,
              however, is a feeling or a state of being. It is the result of why you do what you
              do.” — Adapted from Simon Sinek
            </blockquote>

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#3B82F6] animate-pulse-border">
                <img
                  src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/grant-profile-pgatlas-crop.jpg"
                  alt="Grant profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-white space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold">Hey, I&apos;m Grant</h3>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
            </div>
          </div>
        </section>

        <Problem />
        <GroupFlow />
        <SenjaEmbed widgetId="0e2dc407-4d4f-487d-880b-0178d54161ab" />
        <PricingWingmates />
        <SenjaEmbed widgetId="196a5b6b-801b-49df-93bf-325c3a57749f" />
      </main>
    </>
  );
}
