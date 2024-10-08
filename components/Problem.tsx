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

const Problem = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-32 text-center">
        <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-4xl tracking-tight mb-6 md:mb-8">
          From 10km Flights to 100km + Adventures
        </h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20 text-justify">
          Flying a paraglider is easy. Even granny can learn to soar. <br />
          <br />
          But when you find yourself standing on the ground, looking up at the
          pilots flying over your head you quickly realise becoming a competent
          XC pilot is hard. <br />
          <br />
          For accomplished XC pilots, paragliding isn't just a hobby—it's a
          lifestyle that demands dedication and daily practice.<br />
          <br />
          Wingmates is your support crew.
        </p>
        <h3 className="font-extrabold text-2xl md:text-3xl mb-6 md:mb-8">
          There's a lot to learn
        </h3>
        <br />
        <br />
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
          <div className="w-full md:w-1/3 ml-1 pr-0 text-left">
            <ul className="list-disc">
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
          <div className="w-full md:w-2/3 flex flex-wrap">
            <img
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/paragliding-skewt.jpg?t=2024-10-03T07%3A19%3A47.354Z"
              alt="Skew-T"
              className="w-full md:w-1/2 object-contain p-1"
            />
            <img
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/paragliding-clan-william.jpg?t=2024-10-03T07%3A20%3A14.906Z"
              alt="Paragliding over Clan William"
              className="w-full md:w-1/2 object-contain p-1"
            />
            <img
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/paragliding-apostles.jpg?t=2024-10-03T07%3A20%3A58.024Z"
              alt="Paragliding over the Apostles"
              className="w-full md:w-1/2 object-contain p-1"
            />
            <img
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/paragliding-task-map.jpg?t=2024-10-03T07%3A21%3A11.100Z"
              alt="Paragliding Task Map"	
              className="w-full md:w-1/2 object-contain p-1"
            />
          </div>
        </div>

        <br />
        <br />
        <p className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20 text-justify">
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
        <div className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-4 md:mb-6 text-justify">
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-neutral-content text-2xl">
            "If you want to go fast, go alone. If you want to go far, go
            together." - African Proverb
          </blockquote>
        </div>
      </div>
      {/* <div className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20 text-justify">
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-neutral-content text-2xl">
            "If you want to go fast, go alone. If you want to go far, go
            together." - African Proverb
          </blockquote>
        </div> */}
    </section>
  );
};

export default Problem;
