import React from "react";
import Image from "next/image";

// The Arrow component is defined but not used in this file.
// If it's not used elsewhere, you can safely remove it.
// If it's used in other files, keep it here but export it.
// export const Arrow = ({ extraStyle }: { extraStyle: string }) => {
//   // ... Arrow component code ...
// };

const Problem = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-24 text-center">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-6 sm:mb-8">
          From 10km Flights to 100km + Adventures
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90 leading-relaxed mb-8 sm:mb-12 md:mb-16 text-left sm:text-justify">
          Flying a paraglider is easy. <br />
          <br />
          But when you find yourself standing on the ground, looking up at the
          pilots flying over your head you quickly realise becoming a competent
          XC pilot is hard. <br />
          <br />
          For accomplished XC pilots, paragliding isn&apos;t just a
          hobby—it&apos;s a lifestyle that demands dedication and daily
          practice.
          <br />
          <br />
          Wingmates is your support crew.
        </p>
        <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">
          There&apos;s a lot to learn
        </h3>
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-4 text-left">
            <ul className="list-disc pl-5">
              <li>Forecasting</li>
              <li>Route Planning</li>
              <li>Weather patterns & Micro-Meterology</li>
              <li>Flying skills like thermaling & speed to fly</li>
              <li>Strong wind launching</li>
              <li>Using instruments effectively</li>
              <li>Navigation & Airspace</li>
              <li>Decision making</li>
              <li>Changing weather conditions</li>
              <li>Fear</li>
              <li>Executing safe landings far from takeoff</li>
              <li>Gear Choices</li>
              <li>...the list goes on.</li>
            </ul>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 gap-2">
            {[
              "paragliding-skewt.jpg",
              "paragliding-clan-william.jpg",
              "paragliding-apostles.jpg",
              "paragliding-task-map.jpg",
            ].map((img, index) => (
              <Image
                key={index}
                src={`https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/${img}`}
                alt={`Paragliding image ${index + 1}`}
                className="w-full h-auto object-cover rounded"
                width={250}
                height={250}
              />
            ))}
          </div>
        </div>
        <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90 leading-relaxed mb-8 sm:mb-12 text-left sm:text-justify">
          Newly licensed and low-airtime pilots often have limited experience
          flying outside of radio contact with their instructor, and without the
          support of a school, it can be daunting and difficult to find other
          pilots to fly with.
          <br />
          <br />
          Faced with this reality, pilots often struggle to progress beyond
          local flights, give up on their XC dreams and many leave paragliding
          entirely.
          <br />
          <br />
          <b>Without mentorship</b>, most pilots never reach their potential and
          miss out on the incredible experiences that XC paragliding has to
          offer.
          <br />
          <br />
          Whether you want hands on coaching or a supportive learning community,
          we have everything you need to get through the risky intermediate
          phase of your paragliding journey.
        </p>
        <div className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-4 sm:mb-6">
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-neutral-content text-xl sm:text-2xl">
            &ldquo;If you want to go fast, go alone. If you want to go far, go
            together.&rdquo; - African Proverb
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Problem;
