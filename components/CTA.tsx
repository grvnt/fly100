import Image from "next/image";
import config from "@/config";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/barry-paragliding-georgia.jpg?t=2024-10-04T04%3A50%3A28.854Z"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Fly Further, Together
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Speed up your progress in a safe and supportive learning
            environment, and experience the true joys of XC paragliding.
          </p>

          <button className="btn btn-primary btn-wide">
            Join {config.appName}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
