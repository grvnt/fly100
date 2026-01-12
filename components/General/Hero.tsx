import Image from 'next/image';
import ButtonGradient from './ButtonGradient';
import { H1, H2 } from '../ui/typography';
import SenjaEmbed from './SenjaEmbed';
import LogoBar from './LogoBar';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-200 flex flex-col items-center justify-center gap-8 sm:gap-16 px-4 sm:px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-1 items-center justify-center text-center w-full max-w-5xl">
        <Image
          src="/wingmates-landing-logo.png"
          alt="Wingmates Landing Logo"
          width={100}
          height={100}
          className="mb-4 sm:mb-8 w-24 sm:w-32 h-auto"
        />
        <H1 className="mb-6 sm:mb-12">Together We Honour the Magic of Freeflight</H1>

        <div className="w-full max-w-4xl mx-auto my-6">
          <SenjaEmbed
            widgetId="ad8250da-bdf3-4df5-bf01-16430ceda859"
            showContainer={false}
            className="w-full"
          />
        </div>
        <div className="w-full max-w-4xl mx-auto my-8">
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
        <LogoBar />
        <H2 className="mb-6 sm:mb-12">
          We Believe Paragliding is the <br /> Ultimate Expression of Human Freedom{' '}
        </H2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-5 text-justify">
          Since the dawn of man, humanity looked at the birds and dreamed of joining them. We are
          the first generation in the history of our species to truly live that dream.
        </p>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-5 text-justify">
          To us, flying is a gift of evolution—a beacon of human potential and freedom. But the sky
          is not just a playground; it is a mirror. We believe that paragliding is a vehicle for
          self-evolution. Because evolution is a process of infinite mastery, human evolution is
          Mastery Manifest. Like a martial art, the "Elemental Art" of paragliding provides a medium
          to practice, grow, and evolve as people.
        </p>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-5 text-justify">
          Wingmates exists to honour the gift of flight by using it to master ourselves, and inspire
          others to do the same.
        </p>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-5 text-justify">
          We practice paragliding not as a sport, but as a way of life.
        </p>
        <ButtonGradient
          href="/wingmates/#pricing"
          text="Evolve through Flow"
          className="btn-wide"
        />
      </div>
    </section>
  );
};

export default Hero;
