import React from "react";
import Image from "next/image";

const Team: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Birdmen Academy Team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          With a wealth of experience, a passion for mentorship and a stellar
          list of achievements, our team is perfectly positioned to help you
          achieve your paragliding dreams.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/Barry-Pedersen.jpg?t=2024-10-07T11%3A02%3A59.467Z"
              alt="Barry Pederson Birdmen Paragliding Founder"
              width={128}
              height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Barry Pederson
            </h1>
            <p className="mt-2 mb-4 font-semibold text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              Birdmen Co-founder, Chief Instructor & Master Guide
            </p>
            <div className="">
              <p className="mb-4">
                As a child, Barry spent many happy hours watching and dreaming
                while his uncle, Herman Pedersen, pioneered hang-gliding.
              </p>
              <p className="mb-4">
                Herman became the first hang glider to fly from Table Mountain
                in the &apos;70s. During a visit to Switzerland in 1996, he
                started paragliding and developed a true love for this artful
                form of aviation.{" "}
              </p>
              <p className="mb-4">
                Nowadays, Barry is an extremely qualified pilot holding a SAPHA
                Instructor for Paragliding & Powered Paragliding, TFI Tandems
                Pilot for both power and mountain flying, Sports Rating, and
                more.
              </p>
              <p className="mb-4">
                Barry has held numerous tandem and solo site records and is one
                of the most well respected members of the South African
                paragliding community.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <Image
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/grant-paragliding-piketberg.jpg?t=2024-10-07T11%3A03%3A43.156Z"
              alt="Grant Smith in a field after paragliding"
              width={128}
              height={128}
            />

            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
              Grant Smith
            </h1>

            <p className="mt-2 mb-4 text-gray-500 font-semibold capitalize dark:text-gray-300 group-hover:text-gray-300">
              Wingmates Founder, Birdmen Instructor & Guide
            </p>
            <div className="">
              <p className="mb-4">
                Grant realised his childhood dream of flying in 2008 when he got
                his paragliding license through Birdmen.
              </p>
              <p className="mb-4">
                However, without support and conflicting life demands, Grant
                fell out of the sport for four years. Thanks to a chance meeting
                with Barry and the support of fellow Birdmen, Grant was able to
                get back into the sport and has been flying ever since.
              </p>
              <p className="mb-4">
                Nowadays, Grant is dedicated to becoming the best pilot he can
                be and sharing his passion for flying with others.
              </p>
              <p className="mb-4">
                Grant has held numerous site records including the longest foot
                launched flight on an EN B in South Africa and is one of only a
                handful of pilots to fly over 200km in the Western Cape.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-2 mb-12">
        <ButtonGradient 
          href="/wingmates/#pricing" 
          text="Join Today"
          className="btn-animate" // Add this if there's a specific animation class
        />
      </div> */}
    </section>
  );
};

export default Team;
