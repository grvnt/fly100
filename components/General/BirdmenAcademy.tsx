import React from "react";
import Image from "next/image";

const BirdmenAcademy = () => {
  return (
    <div className="bg-slate-800">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-20">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-8 sm:mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          Birdmen Academy: SA&apos;s first XC mentorship & coaching programme
        </h2>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
          {/* Left side for images */}
          <div className="w-full lg:w-1/2">
            <Image
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/birdmen-academy-crop.jpg"
              alt="Barry, Eric, Grant"
              className="mb-6 rounded-lg shadow-lg w-full h-auto"
              width={500}
              height={300}
            />
            <Image
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/paragliding-academy-collage.jpg?t=2024-10-05T06%3A19%3A56.492Z"
              alt="Paragliding Academy Collage"
              className="rounded-lg shadow-lg w-full h-auto"
              width={500}
              height={300}
            />
          </div>

          {/* Right side for text */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-extrabold text-xl sm:text-2xl mb-6">
              From school to solo flying is hard. Without a crew, many give up.
            </h3>
            <div className="text-base sm:text-lg opacity-90 leading-relaxed space-y-4">
              <p>
                In 2018 Barry & I recognised that the South African paragliding
                community had a critical need for post-school mentorship.
              </p>
              <p>
                Newly licensed (and visiting) pilots were struggling in many
                aspects from weather forecasting, to strong wind takeoffs, to XC
                flying.
              </p>
              <p>
                Together, we consolidated decades of experience and developed the
                Birdmen Academy, the first of its kind.
              </p>
              <p>
                The programme is designed to help pilots transform into confident
                and competent pilots able to have more fun, get more from their
                XC, and ultimately mentor others to strengthen the community.
              </p>
              <p>
                We are all learning. Which means when you grow, we grow.
                That&apos;s the beauty of community.
              </p>
              <p>By joining the Birdmen Academy you&apos;ll:</p>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Build on your practical skills
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Deepen your theoretical knowledge
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Get guidance and signoffs for site like Lion&apos;s Head
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Work towards your sports licence
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Work towards your first 100 km flight
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Get personalized coaching at takeoff and in the air
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Learn to forecast like a pro
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Enjoy unlimited community support
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Connect and fly with other pilots in the community
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✔</span>
                  Access to a growing library of resources
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirdmenAcademy;
