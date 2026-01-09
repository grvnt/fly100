import { H2 } from '../ui/typography';
import SenjaEmbed from './SenjaEmbed';

const GroupFlow = () => {
  return (
    <section className="bg-slate-800">
      <div className="py-16 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <H2 className="mb-4 sm:mb-6 max-w-4xl mx-auto">Group Flow</H2>
        <p className="text-sm sm:text-base md:text-lg text-center text-justify max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 text-gray-300">
          Airtime isn&apos;t enough. True mastery requires feedback, awareness, and a crew that pushes
          you to grow. Wingmates is that crew. We are a supportive global community where pilots trade
          debriefs and breakthroughs, sharpening both skill and mindset.
        </p>
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <SenjaEmbed
            widgetId="7b15ce99-71e8-447d-9582-5dd2b154384b"
            showContainer={false}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GroupFlow;


