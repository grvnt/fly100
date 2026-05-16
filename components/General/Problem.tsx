import { H2, H3 } from '../ui/typography';

const Problem = () => {
  return (
    <section
      className="relative bg-neutral text-neutral-content bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url(https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/blog-images/paragliding-ozone-fhoek.jpg)',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-24 text-center">
        <H2 className="mb-6 sm:mb-8">
          How <span className="text-[#00dafc]">Wingmates</span> Works
        </H2>
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-base sm:text-lg opacity-90 leading-relaxed text-left sm:text-justify">
            Wingmates is built around a four-part practice. Not a curriculum you work through
            once — a cycle you return to each month, each season, each flight.
          </p>
        </div>

        <H3 className="mb-4 sm:mb-6">
          <span className="text-[#00dafc]">The PARA Model</span>
        </H3>

        {/* Mental Frameworks blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Plan */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left border-4 border-transparent transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B82F6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.95-6.95-2.12 2.12M8.17 15.83l-2.12 2.12m0-12.02 2.12 2.12m8.66 8.66 2.12 2.12"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center max-w-xs mx-auto">
              (P)lan: Your North Star
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xs mx-auto text-justify">
              Get clear on the pilot you&apos;re becoming, not just the pilot you are.
              Identity-based direction — where you&apos;re going and why it matters to you.
            </p>
          </div>

          {/* Act */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left border-4 border-transparent transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B82F6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center max-w-xs mx-auto">
              (A)ct: Dynamic Calm
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xs mx-auto text-justify">
              Apply the mental tools in the air, not just in theory. Fear work, flow practice,
              and composure under pressure — taken to the hill.
            </p>
          </div>

          {/* Reflect */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left border-4 border-transparent transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B82F6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5c-4.5 0-8 3.5-8 7s3.5 7 8 7 8-3.5 8-7-3.5-7-8-7zm0 4a3 3 0 110 6 3 3 0 010-6z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center max-w-xs mx-auto">
              (R)eflect: The Mirror
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xs mx-auto text-justify">
              Use the community as a mirror. Structured post-flight reflection surfaces the
              patterns that solo flight logs miss.
            </p>
          </div>

          {/* Adjust */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left border-4 border-transparent transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3B82F6]/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B82F6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12a8 8 0 0113.856-4.856M20 12a8 8 0 01-13.856 4.856M15 9h3V6m-9 9H6v3"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center max-w-xs mx-auto">
              (A)djust: The Upward Spiral
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xs mx-auto text-justify">
              Turn what you discover into how you fly. The upward spiral builds when reflection becomes practice, and practice becomes identity.
            </p>
          </div>
        </div>

        {/* Sergey — elevated */}
        <div className="max-w-3xl mx-auto mt-16 sm:mt-20">
          <blockquote className="bg-[#07122d] rounded-2xl p-8 sm:p-12 border-l-4 border-[#3B82F6] text-left">
            <p className="text-white text-lg sm:text-xl leading-relaxed mb-6">
              &ldquo;After my only son died in 2018, my life lost its meaning. Paragliding brought
              me back to life five years ago. You suggested a way to return to myself. I find your
              practical advice on stabilizing my psycho-emotional state most valuable.&rdquo;
            </p>
            <p className="text-[#3B82F6] font-semibold text-base">— Sergey</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Problem;
