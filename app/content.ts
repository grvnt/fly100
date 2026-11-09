/**
 * ALL FLY100 SALES PAGE COPY LIVES HERE.
 *
 * Edit this file to change the words on fly100.co (the homepage, now the sales page
 * for the Fly100 founding cohort). You should never need to touch page.tsx to
 * change text.
 *
 * Source: "Fly100 Sales Page Draft 1" (2026-11-08), Grant's finished copy.
 * Use close to verbatim; this is not a draft to improve on, only to structure.
 */

export const hero = {
  eyebrow: 'FOUNDING COHORT · KICK-OFF 10 DECEMBER',
  headline: 'Paraglide Your First 100km With Confidence',
  subline:
    'Learn how to fly further in 6 weeks, and beat your personal best within 12 months.',
  audience:
    "For licensed pilots who've flown their first XC flights and want to go further.",
  cta: 'Join Fly100 (founding cohort, $297)',
  urgency: 'Doors close at midnight on Friday 27 November.',
};

/**
 * Proof teaser — a short, single pull-quote shown directly under the hero,
 * before the origin story. A different Farrell line than the one in Section 7
 * (which is a full testimonial card). Purpose: fast trust signal so the reader
 * has a reason to keep reading into the origin story.
 */
export const proofTeaser = {
  quote:
    "I'd recommend Fly100 to anyone who has a mental barrier or is struggling with progression. The guidance I received from Grant made internal dialogue an important part of flying, alongside discussing technical skills and strategies.",
  name: 'Farrell Davids',
  photo: '/farrell-davids.jpg',
};

/**
 * Section 2 — "I landed 100km from launch and had no idea how I got there"
 * Grant's origin story, verbatim. Rendered as paragraph blocks with one pull quote.
 */
export const origin = {
  heading: 'I landed 100km from launch and had no idea how I got there',
  blocks: [
    {
      type: 'p' as const,
      text:
        "I'm standing on a dusty semi-desert plateau in what feels like the middle-of-nowhere. It's getting windy now. I've just landed over a 100km away from launch. I'm tired but in that good way you feel after doing something strenuous and meaningful, like after a long hike in the mountains. It's as if I feel everything all at once: elated, surprised, fulfilled, whole, and mind-blown. But most of all my whole being is satisfyingly confused.",
    },
    {
      type: 'p' as const,
      text:
        "I hadn't expected to fly 100km today. How did this happen? How did I get here? How is this possible?",
    },
    {
      type: 'p' as const,
      text:
        "I'd had some incredible XC experiences before this but none had exceeded around 35km distance. I'd dreamt of flying to a place called Clanwilliam that season. I'd secretly set it as a goal but didn't really believe it would happen. It was just a dream that I'd excitedly entertained. Yet here I was on my first truly big XC flight having flown over Clanwilliam and flying my first 100km.",
    },
    {
      type: 'p' as const,
      text:
        "Thinking about how I got here brought about a feeling of familiarity. It was as if I'd flown this route before. I didn't have to think in the air. I was so immersed in the experience that every moment and every decision just flowed into the next one as if it was meant to be.",
    },
    {
      type: 'quote' as const,
      text:
        "I'd been studying this route so well by looking at the tracklogs of others that my mind was free to just fly.",
    },
    {
      type: 'p' as const,
      text:
        "And that's when it dawned on me. I didn't know about it then but I was in flow. I'd visualised the whole route so many times that when I got there it was already so familiar.",
    },
    {
      type: 'p' as const,
      text:
        "I became obsessed with a simple process: ask questions, debrief, test. I studied my own tracklogs. Looked at crux points of others. Planned routes. And somehow, that season, my first full XC season, I flew six 100km+ flights including a local record and, as far as anyone can tell, the furthest any footlaunch pilot had flown on an EN B in South Africa.",
    },
    {
      type: 'p' as const,
      text:
        'And all of them "just happened." My expectation on each day was not to fly 100km. I went out to have fun. To fly and go with the flow to see what the day would bring.',
    },
    {
      type: 'quote' as const,
      text: 'Later I would come to realise that the debrief is the learning.',
    },
  ],
};

/**
 * Section 3 — "Who's teaching this". Short credentials list.
 */
export const teacher = {
  heading: "Who's teaching this",
  lead: "I'm Grant, a paragliding instructor, XC guide and flow coach.",
  credentials: [
    'SAHPA Grade B and Grade C (tandem) instructor.',
    'Flow coach, trained through the Flow Centre.',
    'Instructor and Guide at Birdmen Paragliding and Cofounder of the Sparrows XC Mentorship Academy.',
    'Founder of Wingmates, a paragliding mentorship community.',
    "Set multiple local XC records, including the furthest footlaunch flight on an EN B in South Africa (193km from Sir Lowry's Pass). One of a handful of pilots to have ever flown over 200km in the Western Cape Province, South Africa.",
  ],
};

/**
 * Section 4 — "Learn on the ground, so you can fly in flow"
 * The reframe / method explanation. Rendered as paragraph blocks with the loop-refrain
 * callout surfaced as an Refrain element.
 */
export const method = {
  heading: 'Learn on the ground, so you can fly in flow',
  blocks: [
    {
      type: 'p' as const,
      text:
        "If you're like most pilots you land, tell the story in the retrieve vehicle, and move on. The flight you can't explain, the thermal you left too early, the fear you had in turbulence, never gets looked at properly. You might call it luck, or blame your gear, or claim that you wanted to land while not really understanding why you did.",
    },
    {
      type: 'p' as const,
      text:
        'But that confusion after the flight is the best material you have. I call it curious confusion: embracing confusion with curiosity. Instead of blaming you ask questions. You answer them by studying tracklogs. And then you test the answers by turning them into an experiment for your next flight.',
    },
  ],
  loop: 'Confused → Questions → Debrief → Experiment → Repeat',
  afterLoop: [
    {
      type: 'p' as const,
      text:
        "That loop is at the heart of Fly100. You don't need talent. You need a way to learn from every flight so that no experience is wasted.",
    },
    {
      type: 'p' as const,
      text:
        "There's research behind the habit. Debriefing, also called an after-action review, improved performance by about 25% on average across 46 samples (Tannenbaum & Cerasoli, 2013). A later review of 61 studies found that self-led debriefs work when they're anchored in an objective record (Keiser & Arthur, 2021), and your tracklog is exactly that.",
    },
    {
      type: 'p' as const,
      text:
        "It's also why the work happens on the ground. When you've done the thinking before you launch, you don't have to do it in the air, and that leaves your mind free so you can fly in flow. Studying a tracklog is a form of visualisation too: you've already flown the route in your head, so when you get there it feels familiar.",
    },
    {
      type: 'p' as const,
      text:
        "You'll fly further because you'll fly better: calmer decisions, clearer debriefs, and knowing exactly what to work on next.",
    },
  ],
};

/**
 * Section 5 — "Here's exactly what you get"
 * Numbered deliverables, using the StoryOS-style numbered steps from wingmates.
 */
export const whatYouGet = {
  heading: "Here's exactly what you get",
  intro:
    'Fly100 gives you a system for learning from every flight, and a weekly rhythm to build the habit.',
  items: [
    {
      label: 'Training',
      title: 'The Fly100 Debrief System',
      body: 'Read any tracklog through six lenses.',
    },
    {
      label: 'Quests',
      title: 'Weekly Quests',
      body: 'A new quest every week, each one building on the last.',
    },
    {
      label: 'Tool',
      title: 'FlowGhost App',
      body:
        'Load tracks from different days or seasons and watch them together in 3D. Free inside Fly100.',
      // Grant's own mascot from the FlowGhost app itself (public/mascot/
      // mascot-idle.png in the flowghost repo) — ties this bullet to the
      // real product rather than just naming it.
      image: '/flowghost-mascot.png',
    },
    {
      label: 'Training',
      title: 'Flow Training Built In',
      body: "Learn to spot when you're in flow and what pulls you out.",
    },
    {
      label: 'Live call',
      title: 'Live Kickoff',
      body:
        "Thursday 10 December. Pick the flight you're working towards. It can be 100km or any dream flight.",
    },
  ],
};

/**
 * Section 6 — "Stacked bonuses"
 */
export const bonuses = {
  heading: 'Stacked bonuses',
  intro: 'Every bonus is included.',
  items: [
    {
      title: '12 months in Wingmates',
      body:
        "Your global crew to plan, fly and debrief with, including the space where you post your debriefs and read other pilots'. Access starts the day you enrol and runs 12 months from the cohort start.",
      value: '$596',
    },
    {
      title: 'Thermal Flow Masterclass',
      body: 'Climb better by flying in flow.',
      value: '$97',
    },
    {
      title: 'Ground Handling Masterclass',
      body:
        "Wing control and strong-wind launches, for the days you can't fly.",
      value: '$67',
    },
    {
      title: 'Spot a 100km Day: Skew-T Masterclass',
      body: 'Read soundings and recognise the best days.',
      value: '$67',
    },
    {
      title: 'Gaggle Flying Masterclass',
      body:
        'How record-setting pilots fly together, and how to fly with your own crew (coming in 2027).',
      value: '$97',
    },
  ],
  total: 'Total bonus value: $924',
  plus:
    'Plus: The first 5 pilots to join within 24 hours of doors opening (Monday 23 November) get a private 30-minute Personal XC Strategy Call with me, booked any time between 11 January and 21 February.',
};

/**
 * Section 7 — "What pilots say"
 * Five testimonials. Senja, cleared for use. Rendered as a mix of Band (statement) and
 * MemberQuote markup. Photo URLs are Senja CDN-hosted; `photo` is optional and
 * falls back to an initial-circle when absent (currently Farrell).
 */
export const testimonials: Array<{ quote: string; name: string; photo?: string }> = [
  {
    quote:
      'In the last two months I have made more progress... broke my personal best twice, crossed over to another valley for the first time and was higher than ever before!',
    name: 'Zee',
    photo:
      'https://cdn.senja.io/public/media/2e833191-d1e6-45e5-8c0e-7a6e370107cb_b97de09c-a2ce-47d9-bcdc-e83e347a7a57_zeeeeeee.jpg',
  },
  {
    quote:
      "Grant was always there to support with the 'mental game' of paragliding — helping me get out of my head, redirect my fears to good use, and training me mentally.",
    name: 'Evan Chapman',
    photo:
      'https://cdn.senja.io/public/avatar/95351647-9b01-4a31-b89a-6bf97540cdb9_Birdmen%20Paragliding%2C%20Kardoesie%20SW%20-%20Samuel%20Tome%20%2820250715%29%20%28STP53969%29_2048px.jpg',
  },
  {
    quote: "I'm finally starting to feel like I'm actually flying now",
    name: 'Kurt Bester',
    photo:
      'https://cdn.senja.io/public/avatar/acab6065-c6ef-4b5a-89e1-7acf0267d3a7_F351DA62-F948-450F-BDA7-698C63033D68.jpeg',
  },
  {
    quote:
      'I was searching for a long time why I lack flow state during paragliding... I followed the steps — and got it! And will never let it go.',
    name: 'Nikola Dentschev',
    photo:
      'https://cdn.senja.io/public/avatar/e8ad2ea2-f32d-4b7f-a207-92b31d3ee946_IMG_4384.jpeg',
  },
  {
    quote:
      'My debriefs helped me see where I could improve — maxing the thermals, being aware of my emotional state, feeling what the air and the wing were doing. My thermal handling became consistent, and on my 50km flight I could see the lines and choose between route A, B, or C.',
    name: 'Farrell Davids',
    photo: '/farrell-davids.jpg',
  },
];

/**
 * Section 8 — "Add it all up". The pricing summary.
 */
export const pricing = {
  heading: 'Add it all up',
  stack: [
    {
      line: 'The Fly100 Programme: Debrief System, weekly quests, FlowGhost, flow training, live kickoff',
      value: '$397',
    },
    { line: 'Bonuses (see above)', value: '$924' },
  ],
  totalLabel: 'Total value',
  totalValue: '$1,321',
  founding: {
    price: '$297',
    oneLine:
      "Founding price: $297, one payment, with lifetime access to the course. That's 77% off the total value.",
    instalments: 'Or 2 instalments of $169 ($338 total).',
  },
  note:
    'Join Wingmates the day you enrol, with 12 months of community support from the cohort start and every bonus. After 12 months the course is still yours, and the community continues at $60 per quarter.',
  cta: 'Join the Waitlist',
};

/**
 * Section 9 — "This is not a 'fly 100km or fail' course"
 */
export const notThis = {
  heading: 'This is not a "fly 100km or fail" course',
  lead:
    'Your dream flight is legitimate. Fly100 is about becoming the pilot who can fly it with confidence, not about chasing a scoreboard.',
  items: [
    {
      head: "It's not a technique course.",
      tail:
        "You'll get some thermaling and gliding content, but the heart of it is learning from your own flights and those of others.",
    },
    {
      head: "It's not a ranking or a competition.",
      tail: 'Your project can be any dream flight, not only 100km.',
    },
    {
      head: "It's not a guarantee.",
      tail:
        "I can't promise you a distance, and no honest coach can. I can give you a system that makes every flight teach you something so that you learn faster.",
    },
    {
      head: "It's not a one-off.",
      tail: "You build a habit that keeps working, including when you can't fly.",
    },
  ],
};

/**
 * Section 10 — "Your next 6 weeks". Rendered as a dated timeline.
 */
export const timeline = {
  heading: 'Your next 6 weeks',
  items: [
    { when: 'Fri 27 Nov', what: 'Doors close at midnight.' },
    {
      when: 'Thu 10 Dec',
      what: 'Live kickoff: meet the cohort, get access, set your project.',
    },
    {
      when: 'Over the holidays',
      what:
        'Optional Week 0 at your own pace: read "Goals ruin your paragliding" and introduce yourself in Wingmates.',
    },
    {
      when: 'Week 1, from Mon 11 Jan',
      what:
        'Install the system. Learn the Fly100 Debrief System and debrief a flight of your own.',
    },
    {
      when: 'Weeks 2 to 6',
      what:
        'Mondays 18 Jan, 25 Jan, 1 Feb, 8 Feb, 15 Feb. A new quest is revealed each Monday. Bonuses are released through the programme.',
    },
    {
      when: 'Sun 21 Feb',
      what: 'The 6 weeks end. Your system is running, and your community continues.',
    },
  ],
  note:
    "What's in each quest stays a surprise until the Monday it opens. Each one builds on the last.",
  afterNote:
    "You get Wingmates access the day you enrol, so there's plenty to do before Week 1: meet the pilots you'll be learning alongside, join the live kickoff, and start Week 0 at your own pace.",
};

/**
 * Section 11 — "What you walk away with"
 */
export const walkAway = {
  heading: 'What you walk away with',
  items: [
    "A debrief habit you'll still be using next season.",
    "Your own system for reading a tracklog, yours and other pilots'.",
    'A library of your own debriefed flights, and a project you can explain in one sentence.',
    "Clearer, calmer decisions in the air, because you know what's holding you back.",
    'A real answer to "what should I work on next?"',
    'A community of pilots who debrief, and a year of it included.',
  ],
};

/**
 * Section 12 — "14-day buy-back guarantee"
 */
export const guarantee = {
  heading: '14-day buy-back guarantee',
  body:
    "Join Fly100, experience the programme and meet your fellow pilots. If within 14 days of the cohort starting (Monday 11 January, so by Monday 25 January) you don't feel it's right for you, email me and I'll buy it back. No hard feelings.",
};

/**
 * Section 13 — "Is this for you?"
 */
export const forYou = {
  heading: 'Is this for you?',
  forHeading: 'This is for you if',
  forItems: [
    "You're a licensed pilot with some XC flights and you can thermal at least a little.",
    'You want a repeatable way to improve, not a one-off tip.',
    "You're willing to look honestly at your own flights, including the ones that went badly.",
    "You'll debrief and share what you learn so others learn too.",
    'You want to fly further without turning flying into a scoreboard.',
  ],
  notHeading: 'This is not for you if',
  notItems: [
    "You're a beginner still learning the basics of launching and flying.",
    'You want a technique shortcut or a guaranteed distance.',
    "You won't review your flights or try the experiments.",
    'You want one-to-one coaching or me reviewing every tracklog.',
  ],
};

/**
 * Section 14 — "Questions". FAQ.
 */
export const faq = {
  heading: 'Questions',
  items: [
    {
      q: 'Is it live?',
      a: "There's a live kickoff on Thursday 10 December. After that it's self-paced inside the weekly rhythm: a new quest opens every Monday and you work through it when you can.",
    },
    {
      q: 'When does it start?',
      a: 'Kickoff is Thursday 10 December, the optional Week 0 runs over the holidays, and Week 1 begins Monday 11 January 2027.',
    },
    {
      q: 'Do I have to be flying during the 6 weeks?',
      a: "No. You can run the loop on your own flights, friends' or master tracklogs, or filmed ground handling. It works in your off-season.",
    },
    {
      q: 'What if I fall behind?',
      a: 'You keep lifetime access to the course, so you can catch up any time.',
    },
    {
      q: 'Do I get coaching?',
      a: "You get 12 months in Wingmates, a community to debrief and learn alongside. There are no weekly calls and I don't review every tracklog. The first 5 pilots to join within 24 hours of doors opening (Monday 23 November) get a private 30-minute strategy call.",
    },
    {
      q: 'What tracklog and equipment do I need?',
      a: 'Any GPS tracklog from your vario or phone app. FlowGhost, my tracklog tool, is free inside Fly100.',
    },
    {
      q: 'Is it for beginners?',
      a: "No. It's for pilots who have the basics, have flown some XC and can thermal at least a little.",
    },
    {
      q: 'Do I get updates?',
      a: 'Yes. Your lifetime access includes updates to the programme.',
    },
    {
      q: 'Can I pay in instalments?',
      a: 'Yes. Pay $297 once, or 2 instalments of $169 ($338 total).',
    },
    {
      q: "What if it's not for me?",
      a: "You have 14 days from the cohort start (Monday 11 January, so by Monday 25 January). Email me and I'll buy it back. No hard feelings.",
    },
    {
      q: 'Is the kickoff recorded?',
      a: "Yes. If you can't make it live, you can watch the recording.",
    },
  ],
};

/**
 * Section 15 — "Last call"
 */
export const lastCall = {
  heading: 'Last call',
  body: [
    'You can keep landing with questions you never answer, or you can build a way to learn from every flight.',
    'The founding Fly100 cohort kicks off on Thursday 10 December, and enrolment closes at midnight on Black Friday, 27 November. The founding price is $297, and it rises for the next cohort.',
  ],
  cta: 'Join the Waitlist',
  signoff: 'Happy flying 🪽\nGrant',
  ps:
    "P.S. Your next personal best won't come from flying more hours. It will come from the questions you ask after you land. The first 5 pilots to join within 24 hours of doors opening (Monday 23 November) also get a private 30-minute Personal XC Strategy Call with me.",
};
