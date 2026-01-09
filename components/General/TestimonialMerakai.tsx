import React from 'react';
import Image from 'next/image';

const TestimonialMerakai = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="max-w-4xl px-4 py-8 mx-auto">
        <main className="relative z-20 w-full md:flex md:items-center">
          <div className="absolute w-full bg-gray-800 -z-10 md:h-64 rounded-xl"></div>

          <div className="w-full p-4 bg-gray-800 md:flex md:items-center rounded-xl md:bg-transparent md:p-0 md:justify-between">
            <Image
              className="h-20 w-20 md:mx-4 rounded-full object-cover shadow-md md:h-56 md:w-56 md:rounded-xl"
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/testimonials/paul-guschlbauer.jpg?t=2024-10-10T08%3A31%3A06.719Z"
              alt="Paul Guschlbauer XAlps Paragliding Pilot"
              width={224}
              height={224}
            />

            <div className="mt-2 md:mx-4 md:flex-1">
              <div>
                <p className="text-lg font-medium tracking-tight text-white">Paul Guschlbauer</p>
                <p className="text-sm text-blue-200">
                  Skywalk Team Pilot & RedBull XAlps Competitor
                </p>
                <p className="text-sm mt-1">
                  <a
                    href="https://www.wanderbird.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B82F6] hover:text-blue-400 underline transition-colors duration-200"
                  >
                    Wanderbird.io
                  </a>
                </p>
              </div>

              <p className="mt-2 text-base leading-relaxed text-white md:text-lg">
                &ldquo;Grant understands that consistent 100km flights are won in the mind, not with
                gear. He&apos;s doing great things for the paragliding community by bringing the
                science of flow to the forefront with Wingmates.&rdquo;
              </p>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default TestimonialMerakai;
