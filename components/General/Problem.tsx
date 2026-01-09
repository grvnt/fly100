import Image from 'next/image';
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
          If you don&apos;t master the inner game,
          <br />
          you&apos;re holding yourself back.
        </H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16">
          {/* The Gear Trap */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left">
            <div className="w-12 h-12 rounded-full bg-purple-700/40 flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              The Gear Trap
            </h3>
            <p className="text-base sm:text-lg text-white opacity-90 leading-relaxed mb-4">
              Most pilots spend $X,000 on wings to gain a 5% performance edge but spend $0 to
              upgrade their 95% mental game.
            </p>
            <p className="text-base sm:text-lg text-white font-semibold">
              The Result: You try to solve a mental challenge with an equipment solution.
            </p>
          </div>

          {/* The Survival Loop */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left">
            <div className="w-12 h-12 rounded-full bg-blue-700/40 flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              The Fear Loop
            </h3>
            <p className="text-base sm:text-lg text-white opacity-90 leading-relaxed mb-4">
              Fear and hesitation act like a &quot;handbrake&quot; on your flight. You react to the
              air instead of flowing with it.
            </p>
            <p className="text-base sm:text-lg text-white font-semibold">
              The Result: You stay trapped in a cycle of anxiety, comparison, and
              &quot;near-miss&quot; frustration.
            </p>
          </div>

          {/* The Performance Wall */}
          <div className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left">
            <div className="w-12 h-12 rounded-full bg-orange-700/40 flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
              The Performance Wall
            </h3>
            <p className="text-base sm:text-lg text-white opacity-90 leading-relaxed mb-4">
              You have the skills and the gear, but you&apos;ve hit a ceiling you can&apos;t think
              your way through.
            </p>
            <p className="text-base sm:text-lg text-white font-semibold">
              The Result: Your 100km goals remain out of reach because your internal &quot;OS&quot;
              is outdated.
            </p>
          </div>
        </div>
        <H2 className="mb-6 sm:mb-8">
          Finally, Achieve the &quot;Dynamic Calm&quot; <br />
          <span className="text-[#00dafc]">Required for 100km Mastery</span>
        </H2>
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-base sm:text-lg opacity-90 leading-relaxed text-left sm:text-justify">
            Wingmates is a supportive community that provides mental frameworks and feedback to
            harness the superpower of flow. Rewire your brain to become the pilot who flies 100km
            flights with ease, upgrading your mind—and your life.
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
              Move from guessing to an identity and strategy that coordinates your mind and spirit
              toward a 100km vision.
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

        {/* Community Proof: The Flow Lab */}
        <div className="max-w-5xl mx-auto mt-10 sm:mt-12">
          <div className="bg-[#07122d] rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-4">
            <div className="w-full rounded-2xl overflow-hidden border-4 border-[#3B82F6] animate-pulse-border group">
              <Image
                src="/wingmates-paragliding-feedback-posts.jpg"
                alt="The Flow Lab community - pilots sharing experiences and wins"
                width={1350}
                height={768}
                className="w-full h-auto transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <p className="text-sm sm:text-base text-white/80 text-left sm:text-center max-w-3xl">
              A laboratory for your mental game. See PARA in action. Join daily discussions where
              pilots share their &quot;Exposure Therapy,&quot; celebrate breakthroughs, and provide
              the feedback you need to stay in flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
