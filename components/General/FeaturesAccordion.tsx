"use client";

import { useState, useRef } from "react";
import type { JSX } from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  type?: "video" | "image";
  path?: string;
  format?: string;
  alt?: string;
  svg?: JSX.Element;
}

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is &apos;video&apos;)
// - alt: The alt text of the image (if type is &apos;image&apos;)
const features = [
  {
    title: "Live Events",
    description:
      "Live sessions designed to boost your XC journey. From weather analysis to flying techniques, and everything in between.",
    type: "video",
    path: "https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/wingmates-demo.mp4?t=2024-09-28T13%3A35%3A22.633Z",
    format: "video/mp4",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    title: "Discussion Spaces",
    description:
      "Where paragliders come together to share their stories and challenges. The place to ask, share, learn, and connect with members in our friendly and supportive community.",
    type: "image",
    path: "https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/sign/images/wingmates-mockup.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvd2luZ21hdGVzLW1vY2t1cC5wbmciLCJpYXQiOjE3Mjc2ODAzOTUsImV4cCI6MjA0MzA0MDM5NX0.kBDDzzjQxLOiS9eEDaJtYWr-tNd1XKjNOU3WS-yjNvQ",
    alt: "Wingmates Paragliding Community Mockup",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    title: "Courses & Workshops",
    description:
      "Immediate, full access to all past (and future)  workshops & courses, recorded videos from curated live events, featuring top paragliders from around the world.",
    type: "image",
    path: "https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/course.png?t=2024-09-30T07%3A45%3A13.010Z",
    alt: "Wingmates Paragliding Course Mockup",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Unlimited Mentorship",
    description:
      "I am personally available to answer all your questions in the forum and in direct messages. This is truly a place where you can get the support you need to fly far and fly safe.",
    type: "image",
    path: "https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/paragliding-mentorship-crew.jpg?t=2024-10-04T04%3A40%3A02.669Z",
    alt: "Bruno, Joerg, Eddie, and Grant paragliding crew",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
] as Feature[];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({
  feature,
  isOpen,
  setFeatureSelected,
}: {
  index: number;
  feature: Feature;
  isOpen: boolean;
  setFeatureSelected: () => void;
}) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Videos are set to autoplay for best UX.
const Media = ({ feature }: { feature: Feature }) => {
  const { type, path, format, alt } = feature;
  const size = {
    width: 854, // 16:9 aspect ratio
    height: 480, // 16:9 aspect ratio
  };

  if (type === "video") {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          // controls
          width={size.width}
          height={size.height}
        >
          <source src={path} type={format} />
        </video>
      </div>
    );
  } else if (type === "image") {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <Image
          src={path}
          alt={alt}
          className="absolute top-0 left-0 w-full h-full object-contain"
          width={size.width}
          height={size.height}
        />
      </div>
    );
  } else {
    return <div className="rounded-2xl w-full sm:w-[26rem] aspect-video"></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState<number>(0);

  return (
    <div className="bg-slate-800">
      <section
        className="py-16 sm:py-24 md:py-32 space-y-16 sm:space-y-24 md:space-y-32 max-w-7xl mx-auto"
        id="features"
      >
        <div className="px-4 sm:px-8">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 sm:mb-6 text-center max-w-4xl mx-auto">
            Unlimited Support on Your XC Journey to 100 km and beyond
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-center text-justify max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 text-gray-300">
            Join Wingmates, a first-of-its-kind community, where passionate
            paraglider&apos;s come together to improve their XC paragliding, and
            connect with others on this beautiful journey.
            <br />
            <br />
            Our comprehensive platform offers a unique blend of expert guidance,
            peer support, and resources to help you get the most out of your
            flying by making paragliding a daily practice, no matter where you
            are in the world.
          </p>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="grid grid-cols-1 items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left text-white">
                  Select a Feature to{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient-slow">
                    Learn More
                  </span>
                </h4>
                <ul className="w-full">
                  {features.map((feature, i) => (
                    <Item
                      key={feature.title}
                      index={i}
                      feature={feature}
                      isOpen={featureSelected === i}
                      setFeatureSelected={() => setFeatureSelected(i)}
                    />
                  ))}
                </ul>
              </div>

              <Media
                feature={features[featureSelected]}
                key={featureSelected}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesAccordion;