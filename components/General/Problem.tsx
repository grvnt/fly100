import Image from 'next/image';
import { H2, H3 } from '../ui/typography';
import SenjaEmbed from './SenjaEmbed';

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
        <H2 className="mb-6 sm:mb-8">The Plateau is Real.</H2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90 leading-relaxed mb-8 sm:mb-12 md:mb-16 text-left sm:text-justify">
          You&apos;ve mastered the launch. You understand the weather. You have the gear. But
          you&apos;re still hitting a ceiling. Why? <br />
          <br />
          Because normally, the pilot is split. One part of you is monitoring threats. One part is
          managing self-image ("Am I doing well?"). One part is trying to fly. These subsystems
          compete for control.
          <br /> <br />
          This internal friction creates noise, hesitation, and exhaustion. Most schools teach you
          to "try harder." We teach you how to stop the internal competition. <br />
          <br />
          <i>Wingmates</i> is your support crew — a global community helping pilots progress faster
          through shared learning, honest feedback, and a flow-driven approach to mastery.
          <br />
        </p>
        <div className="w-full max-w-4xl mx-auto my-8 sm:my-12">
          <SenjaEmbed
            widgetId="7f9db280-16bb-4caa-a6de-24cf14892990"
            showContainer={false}
            className="w-full"
          />
        </div>
        <H3 className="mb-6 sm:mb-8">We Focus on Alignment, Not Effort.</H3>
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90 leading-relaxed text-left sm:text-justify">
            True focus is often misunderstood as &quot;straining&quot; or &quot;concentrating
            hard.&quot; In Wingmates, we define focus differently: Focus is the removal of internal
            competition.
            <br />
            <br />
            When what you see, what you feel, and what you do are aligned, flow happens.
            <br />
            <br />
            Distraction disappears (because rival goals are removed).
            <br />
            <br />
            Action becomes responsive (not reactive).
            <br />
            <br />
            Flying becomes effortless.
            <br />
            <br />
            We provide the mental frameworks to achieve this alignment, turning the pilot into a
            single, cohesive unit.
            <br />
            <br />
            We believe paragliding is the ultimate mirror. To master the turbulence outside, you
            must master the turbulence inside.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
