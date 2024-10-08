import React from "react";
import Image from "next/image";
// import TestimonialsAvatars from "./TestimonialsAvatars";
// import config from "@/config";

const BirdmenAcademy = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto bg-base-100 flex flex-col items-center justify-center gap-1 px-8 py-8 lg:py-20 w-4/5">
        <h2 className="font-extrabold text-4xl lg:text-5xl tracking-tight mb-1 md:mb-1 text-center">
          Birdmen Academy:
          <span className="bg-neutral text-neutral-content px-2 md:px-4 ml-1 md:ml-1.5 leading-relaxed whitespace-nowrap">
            SA's first
          </span>
          XC mentorship & coaching programme
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 w-full">
          <div className="max-w-7xl mx-auto px-8 py-16 md:py-32">
            {/* Flex container to split the screen */}
            <div className="flex flex-col md:flex-row items-start justify-between">
              {/* Left side for images */}
              <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
                {/* First image aligned with heading */}
                <img
                  src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/birdmen-academy-crop.jpg"
                  alt="Barry, Eric, Grant"
                  className="mb-6 rounded-lg shadow-lg"
                />
                <img
                  src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/paragliding-academy-collage.jpg?t=2024-10-05T06%3A19%3A56.492Z"
                  alt="Paragliding Academy Collage"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right side for text */}
              <div className="md:w-1/2 text-left">
                <h3 className="font-extrabold text-2xl md:text-3xl mb-6 md:mb-8">
                  From school to solo flying is hard. Without a crew, many give
                  up.
                  {/* <br />
              (and my commitment to you) */}
                </h3>
                <div className="text-lg opacity-90 leading-relaxed mb-12 md:mb-0">
                  <p className="mb-4">
                    In 2018 Barry & I recognised that the South African
                    paragliding community had a critical need for post-school
                    mentorship.
                  </p>
                  <p className="mb-4">
                    Newly licensed (and visiting) pilots were struggling in many
                    aspects from weather forecasting, to strong wind takeoffs,
                    to XC flying.
                  </p>
                  <p className="mb-4">
                    Together, we consolidated decades of experience and
                    developed the Birdmen Academy, the first of its kind.
                  </p>
                  <p className="mb-4">
                    The programme is designed to help pilots transform into
                    confident and competent pilots able to have more fun, get
                    more from their XC, and ultimately mentor others to
                    strengthen the community.
                  </p>
                  <p className="mb-4">
                    We are all learning. Which means when you grow, we grow.
                    That's the beauty of community.
                  </p>
                  <p className="mb-4">By joining the Birdmen Academy you'll:</p>
                  <ul className="list-none pl-0">
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
                      Get guidance and signoffs for site like Lion's Head
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
          </div>
        </div>
      </section>

    </>
  );
};

export default BirdmenAcademy;
