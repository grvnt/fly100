import React from "react";
import ButtonGradient from "./ButtonGradient";

const MentorStory = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-32">
        {/* Flex container to split the screen */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left side for images */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
            {/* First image aligned with heading */}
            <img
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/paragliding-grant-clan.jpg?t=2024-10-04T05%3A22%3A57.578Z"
              alt="Paragliding over Clan William"
              className="mb-6 rounded-lg shadow-lg"
            />
          </div>

          {/* Right side for text */}
          <div className="md:w-1/2 text-left">
            <h3 className="font-extrabold text-2xl md:text-3xl mb-6 md:mb-8">
              Why I built Wingmates
              {/* <br />
              (and my commitment to you) */}
            </h3>
            <div className="text-lg opacity-90 leading-relaxed mb-12 md:mb-0">
              <p className="mb-4">Howzit, Grant here.</p>
              <p className="mb-4">
                When I'm not flying or coaching with Barry, Wingmates is what I
                pour my time into. I want this to be the most valuable
                contribution I make to the paragliding community in my lifetime.
              </p>
              <p className="mb-4">
                XC Paragliding changed my life. It helped me out of dark places
                and showed me that I was capable of more than I believed.
                Through paragliding I found direction, purpose, connection to
                myself and nature, community, confidence, and identity.
              </p>
              <h3 className="font-extrabold text-2xl md:text-2xl mb-2 md:mb-2">
                But it wasn't always like that...
              </h3>
              <p className="mb-4">
                Soon after getting licensed my progression came to a screaming
                halt. I had a hard time finding peers. I didn't know how to
                forecast the weather.
              </p>
              <p className="mb-4">
                <strong>Flying alone felt too dangerous and daunting.</strong>
              </p>
              <p className="mb-4">
                At first my reasons not to fly seemed rational. But as time
                passed fear from not staying current crept in and the 'reasons'
                coalesced into a permanent excuse.
              </p>
              <p className="mb-4">
                Before I knew it, <strong>four years</strong> had passed.
              </p>
              <p className="mb-4">
                If it wasn't for seeing Barry at Sir Lowry's pass one fateful
                day, and his guidance, I may never have made it back.
              </p>
              <p className="mb-4">
                And I definitely would not have accomplished or experienced what
                I have without the support of my flying friends and mentors.
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>My first time over the back at Porterville</li>
                <li>My first 100 km</li>
                <li>My first site record</li>
                <li>My first comp</li>
                <li>My first Kommetjie run</li>
                <li>My first tandem</li>
                <li>My first international trip</li>
                <li>My first hike and fly</li>
              </ul>
              <p className="mb-4">This list could go on ad infinitum.</p>
              <p className="mb-4">I owe everything to people.</p>
              <p className="mb-4">I got lucky.</p>
              <p className="mb-4">
                But I've seen many pilots over the years just as keen and
                passionate get isolated and disappear soon after getting
                licenced.
              </p>
              <p className="mb-4">
                All that time and money invested, all the excitement and
                possibility. Gone, before they ever got to experience the true
                gifts paragliding has to offer.
              </p>
              <p className="mb-4">I don't want that to be you.</p>
              <p className="mb-4">
                Wingmates is the community I wish I had all those years ago.
              </p>
              {/* <div className="flex justify-center">
                <button className="btn btn-primary btn-wide mb-0">
                  Join Wingmates
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <ButtonGradient href="/#pricing" text="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default MentorStory;
