import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const HeroWelcome = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col items-center justify-center gap-8 sm:gap-16 px-4 sm:px-8 pt-4 pb-8 lg:pt-8 lg:pb-20">
      <div className="flex flex-col gap-1 items-center justify-center text-center w-full max-w-5xl">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 sm:mb-12">
          You're in!
        </h1>
        <div className="w-full max-w-4xl mx-auto my-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-2xl overflow-hidden border-4 border-[#3B82F6] animate-pulse-border">
            <video
              className="w-full h-full object-cover"
              controls
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/fly100paragliding-signup.mp4?t=2024-10-18T10%3A55%3A32.696Z"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mt-8 mb-4">Next Steps</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-4 text-center">
          I'm so stoked you're here. Take these steps now to make sure you're in:
        </p>
        <ul className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-8 text-left list-disc pl-6">
          <li>Open your email inbox</li>
          <li>If our email is in spam or promotions, move it to your primary inbox</li>
          <li>Take a moment to answer the questions I've sent. I want to get to know you better.</li>
        </ul>
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mt-8 mb-4">Ready to Level Up?</h2>
        
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-5 text-center">
          Speed up your progress in a safe and supportive learning environment,
          guided by a multi-record setting pilot, and experience the true joys
          of XC paragliding.
        </p>
        <ButtonGradient
          href="/wingmates"
          text="Join Wingmates"
          className="btn-wide"
        />
      </div>
    </section>
  );
};

export default HeroWelcome;
