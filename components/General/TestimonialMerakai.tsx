import React from "react";
import Image from "next/image";

const TestimonialMerakai = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="max-w-4xl px-4 py-8 mx-auto">
        <main className="relative z-20 w-full md:flex md:items-center">
          <div className="absolute w-full bg-blue-500 -z-10 md:h-64 rounded-xl"></div>

          <div className="w-full p-4 bg-blue-600 md:flex md:items-center rounded-xl md:bg-transparent md:p-0 md:justify-between">
            <Image
              className="h-20 w-20 md:mx-4 rounded-full object-cover shadow-md md:h-56 md:w-56 md:rounded-xl"
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/testimonials/paul-guschlbauer.jpg?t=2024-10-10T08%3A31%3A06.719Z"
              alt="Paul Guschlbauer XAlps Paragliding Pilot"
              width={224}
              height={224}
            />

            <div className="mt-2 md:mx-4 md:flex-1">
              <div>
                <p className="text-lg font-medium tracking-tight text-white">
                  Paul Guschlbauer
                </p>
                <p className="text-sm text-blue-200">Skywalk Team Pilot & RedBull XAlps Competitor</p>
              </div>

              <p className="mt-2 text-base leading-relaxed text-white md:text-lg">
                &ldquo;Grant was a fantastic guide and is a great pilot and mentor. He&apos;s
                doing great things for the paragliding community.&rdquo;
              </p>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default TestimonialMerakai;
