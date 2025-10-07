'use client';
import ButtonGradient from './ButtonGradient';
import { H1 } from '../ui/typography';
import { InboxIcon, StarIcon, MessagesSquare } from 'lucide-react';
import { useEffect } from 'react';

const HeroWelcome = () => {
  useEffect(() => {
    // Load ConvertKit script for modal functionality
    const script = document.createElement('script');
    script.src = 'https://fly100.kit.com/28797b89a2/index.js';
    script.async = true;
    script.setAttribute('data-uid', '28797b89a2');
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col items-center justify-center gap-8 sm:gap-16 px-4 sm:px-8 pt-4 pb-8 lg:pt-8 lg:pb-20">
      <div className="flex flex-col gap-1 w-full max-w-4xl">
        <H1 className="mb-6 sm:mb-12 text-center text-[#3B82F6]">You&apos;re officially in! 🎉</H1>
        <p className="text-lg opacity-90 leading-relaxed text-center mb-8">
          I&apos;m beyond excited to start this journey with you. Let&apos;s make it amazing
          together!
        </p>
        <div className="w-full my-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden border-4 border-[#3B82F6] animate-pulse-border">
            <video
              className="w-full h-full object-cover"
              controls
              controlsList="nodownload"
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/fly100paragliding-signup-compressed.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-start gap-3">
            <InboxIcon
              className="w-6 h-6 text-[#3B82F6] mt-1 flex-shrink-0"
              style={{ backgroundColor: 'transparent' }}
            />
            <div>
              <p className="font-medium text-[#3B82F6]">Your first email is on its way</p>
              <p className="text-lg opacity-90 leading-relaxed">
                Keep an eye on your inbox for a welcome email from me!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <StarIcon
              className="w-6 h-6 text-[#3B82F6] mt-1 flex-shrink-0"
              style={{ backgroundColor: 'transparent' }}
            />
            <div>
              <p className="font-medium text-[#3B82F6]">Pro tip: Never miss an update</p>
              <p className="text-lg opacity-90 leading-relaxed">
                Drag my email to your primary inbox to make sure we stay connected. Those spam and
                promo folders can be sneaky!
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessagesSquare
              className="w-6 h-6 text-[#3B82F6] mt-1 flex-shrink-0"
              style={{ backgroundColor: 'transparent' }}
            />
            <div>
              <p className="font-medium text-[#3B82F6]">Let&apos;s get personal</p>
              <p className="text-lg opacity-90 leading-relaxed">
                I&apos;ve included a few quick questions in your welcome email - I&apos;d love to
                learn more about you and how I can help on your journey.
              </p>
            </div>
          </div>

          <p className="pt-4 text-lg opacity-90 leading-relaxed font-medium">
            See you on the inside. Happy flying!
            <br />
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 text-center text-[#3B82F6]">
            Ready to Level Up?
          </h2>

          <p className="text-lg opacity-90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Speed up your progress in a safe and supportive learning environment, guided by a
            multi-record setting pilot, and experience the true joys of XC paragliding.
          </p>

          <div className="flex justify-center">
            <ButtonGradient href="/wingmates" text="Join Wingmates" className="btn-wide" />
          </div>

          <p className="text-sm opacity-75 mt-6">
            Or{' '}
            <a
              data-formkit-toggle="28797b89a2"
              href="https://fly100.kit.com/28797b89a2"
              className="text-[#3B82F6] hover:underline font-medium"
            >
              apply directly to Wingmates
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroWelcome;
