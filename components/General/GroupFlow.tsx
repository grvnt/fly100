import { H2 } from '../ui/typography';
import SenjaEmbed from './SenjaEmbed';

const GroupFlow = () => {
  return (
    <section className="bg-slate-800">
      <div className="py-16 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-8">
        <H2 className="mb-8 sm:mb-12 text-center">Here Is What Our Wingmates Are Saying</H2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text with Testimonials */}
          <div className="text-white">
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              The PARA Model isn&apos;t just theory—it is a proven framework used by pilots worldwide to reclaim their joy and upgrade their performance. Whether you are a veteran with 30 years of experience or a pilot struggling to find your &quot;good flying head&quot; after a scare, these results speak for themselves:
            </p>
            
            <ul className="space-y-4 list-disc list-inside text-base sm:text-lg leading-relaxed">
              <li>
                <strong>From &quot;Rollercoaster Fear&quot; to Alps Mastery:</strong> &quot;I had a fear developed from my first SIV... I used your method and had amazing flights! I went for a guided tour of the Alps and didn&apos;t land once because of fear! I could really enjoy and focus on the route instead of glider movement.&quot; — Attila K.
              </li>
              
              <li>
                <strong>Shedding the &quot;Metric Yoke&quot;:</strong> &quot;Your teachings on flow and overcoming mental demons really speak to me because I am that metric pilot. Watching your videos and reading your emails are definitely helping me shed the metric yoke bit by bit and embrace the pleasure and growth of flying without the numbers.&quot; — Helen G.
              </li>
              
              <li>
                <strong>Finding Joy in Competition:</strong> &quot;The last task in Barberton, I finally found my joy and had the best flight of the week. Not caring about what it was or was not.&quot; — Kurt B.
              </li>
              
              <li>
                <strong>The Power of the Tribe Mirror:</strong> &quot;Sharing ideas and experiences with this group will help me stay inspired and continue this amazing journey.&quot; — Reto P.
              </li>
              
              <li>
                <strong>Beyond the Sky:</strong> &quot;Your approach to paragliding and &apos;beyond flying&apos; is very useful in everyday life for self-reflection and understanding [my] behavior.&quot; — Karin
              </li>
            </ul>
          </div>
          
          {/* Right Column - Senja Embed */}
          <div className="w-full flex items-start justify-center">
            <div className="w-full max-w-md">
              <SenjaEmbed
                widgetId="7b15ce99-71e8-447d-9582-5dd2b154384b"
                showContainer={false}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupFlow;


