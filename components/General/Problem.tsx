import { H2, H3 } from '../ui/typography';

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
        <H2 className="mb-6 sm:mb-8">
          Finally, Achieve the &quot;Dynamic Calm&quot; <br />
          <span className="text-[#00dafc]">Required for Paragliding Mastery</span>
        </H2>
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-base sm:text-lg opacity-90 leading-relaxed text-left sm:text-justify">
            Wingmates is a supportive community that provides mental frameworks and feedback to
            harness the superpower of flow. Rewire your brain to become the pilot you were born to
            be, upgrading your mind—and your life.
          </p>
        </div>

        <H3 className="mb-4 sm:mb-6">
          <span className="text-[#00dafc]">The PARA Model</span>
        </H3>

        {/* Mental Frameworks blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Plan: Your North Star */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300"
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
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3 max-w-xs mx-auto text-justify">
              Identity-based learning coordinates your mind and spirit toward an integral vision of
              the person you want to become.
            </p>
            <p className="text-sm sm:text-base text-white font-semibold text-center">
              The Result: Total alignment.
            </p>
          </div>

          {/* Act: Dynamic Calm */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300"
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
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3 max-w-xs mx-auto text-justify">
              Harness the science of flow to move from fear to mastery. Fly with composure in
              complex air.
            </p>
            <p className="text-sm sm:text-base text-white font-semibold text-center">
              The Result: Fly in flow with ease.
            </p>
          </div>

          {/* Reflect: The Tribe Mirror */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-400/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-violet-300"
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
              (R)eflect: The Tribe Mirror
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3 max-w-xs mx-auto text-justify">
              Use the community &quot;mirror&quot; to share, reflect and grow. Gain the radical
              clarity solo flight logs can&apos;t provide.
            </p>
            <p className="text-sm sm:text-base text-white font-semibold text-center">
              The Result: Accelerated growth.
            </p>
          </div>

          {/* Adjust: The Upward Spiral */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-400/20 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300"
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
            <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-3 max-w-xs mx-auto text-justify">
              Rewire your personal narratives to shift your identity to make high performance your
              baseline.
            </p>
            <p className="text-sm sm:text-base text-white font-semibold text-center">
              The Result: Permanent upgrade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
