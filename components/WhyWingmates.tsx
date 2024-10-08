import React from "react";

const Arrow = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <svg
      className={`shrink-0 w-12 fill-neutral-content opacity-70 ${extraStyle}`}
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
        />
      </g>
    </svg>
  );
};

const WhyWingmates = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
        <h3 className="font-extrabold text-2xl md:text-3xl mb-6 md:mb-8">
          Why Wingmates?
        </h3>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20 text-left">
          Paragliding isn't just about distance; it's about the freedom and
          mastery that come from flying unpowered to your goal. When the
          weather, your skills, instincts, and senses align, the experience
          becomes life-changing. Once you've tasted the true flow of
          paragliding, there's no turning back.
          <br />
          <br />
          The only thing better?
          <br />
          <br />
          The shared stories and memories you get from flying with friends.
          <br />
          <br />
          This community is a home for us to support each other on this
          extraordinary journey.
        </p>
        <div className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20 text-justify">
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-neutral-content text-2xl">
            "If you want to go fast, go alone. If you want to go far, go
            together." - African Proverb
          </blockquote>
        </div>
        <h3 className="font-extrabold text-2xl md:text-3xl mb-6 md:mb-8">
          The Wingmates Community
        </h3>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20 text-justify">
          Inside, we are a group of passionate paraglider pilots united by a
          common purpose. We're not here to compete but to help each other and
          celebrate every milestone, big or small. Collaboration over
          competition is our guiding principle.
          <br />
          <br />
          At Wingmates, you'll find a place to forge meaningful connections,
          share progress, and learn from one another's successes and
          challenges—because together, we truly fly further.
        </p>
      </div>
    </section>
  );
};

export default WhyWingmates;
