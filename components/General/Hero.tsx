import Image from "next/image";
import ButtonGradient from "./ButtonGradient";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col items-center justify-center gap-8 sm:gap-16 px-4 sm:px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-1 items-center justify-center text-center w-full max-w-5xl">
        <Image
          src="/wingmates-landing-logo.png"
          alt="Wingmates Landing Logo"
          width={100}
          height={100}
          className="mb-4 sm:mb-8 w-24 sm:w-32 h-auto"
        />
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 sm:mb-12">
          Join the community of paragliders learning to fly 100 km and beyond, together
        </h1>
        <div className="w-full max-w-4xl mx-auto my-8">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <video
              className="w-full h-full"
              controls
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/wingmates-paragliding.mp4?t=2024-10-07T08%3A01%3A34.826Z"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-5 text-center">
          Speed up your progress in a safe and supportive learning environment,
          and experience the true joys of XC paragliding.
        </p>
        <ButtonGradient
          href="/wingmates/#pricing"
          text="Join Wingmates"
          className="btn-wide"
        />
        {/* <TestimonialsAvatars priority={true} /> */}
      </div>
    </section>
  );
};

export default Hero;
