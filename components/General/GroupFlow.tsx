import { H2 } from '../ui/typography';
import SenjaEmbed from './SenjaEmbed';

const GroupFlow = () => {
  return (
    <section className="bg-black">
      <div className="py-16 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-8">
        <H2 className="mb-8 sm:mb-12 text-center">What the Wingmates are Saying</H2>
        <SenjaEmbed
          widgetId="7f9db280-16bb-4caa-a6de-24cf14892990"
          showContainer={false}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default GroupFlow;
