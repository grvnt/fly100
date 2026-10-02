/**
 * ALL WINGMATES SALES PAGE COPY LIVES HERE.
 *
 * Edit this file to change the words on fly100.co/wingmates.
 * You should never need to touch page.tsx to change text.
 *
 * Quotes marked VERBATIM are real pilot or client words. Do not edit those.
 * Source for all of it: "00 Mission Control/Grant's Inbox/2026-09-30_wingmates-page-copy.md"
 */

export const hero = {
  // The Wingmates belief. This is the refrain. It repeats 5 more times down the page.
  eyebrow: 'THE DEBRIEF IS THE LEARNING',
  headline:
    'The Paragliding System for Pilots Who Want Consistent XC Growth and Confidence in the Air',
  /**
   * Ed's shape: "Turn [what you have] into [what you want], with [three mechanisms]."
   * Grant's brief 2026-09-30: pilots are held back by their minds, more performance and
   * joy without upgrading gear, learning from others, fear training, post-flight debriefs.
   *
   * The gear demote is the kicker on purpose. It is Grant's strongest packaging register,
   * and Guschlbauer's quote in the very next section confirms it word for word:
   * "paragliding is won in the mind, not with gear." Claim, then proof, immediately.
   *
   * ALTERNATES, if this one does not sound like him:
   * A) "Your mind is the limit, not your wing. Turn the hours you already have into flying
   *     that is calmer, further and a lot more enjoyable, with fear training, post-flight
   *     debriefs and 30 pilots who tell you what they see."
   * B) "Fly further and enjoy it more without spending a cent on gear, using fear training,
   *     post-flight debriefs with a coach, and a crew of pilots who fly the way you want to."
   */
  subline:
    'Turn the skills you already have into better, more enjoyable flying, with fear training, post-flight debriefs and a gaggle of pilots in the core with you. No gear upgrade required.',
  cta: 'Join Wingmates',
  /**
   * Hero video. Autoplays muted and loops, so it answers "what is this" without a click.
   *
   * This is Grant's original intro clip. The DEBRIEF video lives further down the page,
   * in the "Exactly How Wingmates Helps" section, next to the Debrief block.
   */
  videoUrl:
    'https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/wingmates-intro-small.mp4',
  /**
   * The social-proof badge beside the CTA.
   *
   * Built in-page rather than using the Senja "Total Reviews" widget, because the widget's
   * caption ("Loved by Wingmates") is a Senja dashboard setting and cannot be edited from
   * the repo. Building it here puts the wording in this file with the rest of the copy.
   *
   * rating and reviewCount are real: all 15 Senja testimonials are 5 stars (checked 2026-09-30).
   * Avatars are the same member images the Senja widget already serves publicly.
   */
  badge: {
    caption: 'Loved by 30+ pilots in 14 countries',
    rating: '5.0',
    reviewCount: 15,
    avatars: [
      'https://cdn.senja.io/public/media/2e833191-d1e6-45e5-8c0e-7a6e370107cb_b97de09c-a2ce-47d9-bcdc-e83e347a7a57_zeeeeeee.jpg',
      'https://cdn.senja.io/public/avatar/acab6065-c6ef-4b5a-89e1-7acf0267d3a7_F351DA62-F948-450F-BDA7-698C63033D68.jpeg',
      'https://cdn.senja.io/public/avatar/6aafb943-3725-4baf-b8ab-124f6c2df42b_A75EABCE-8748-48E3-9E10-C641E03AE0A0_1_201_a.jpeg',
      'https://cdn.senja.io/public/media/aa22d46c-4a35-4927-af4f-772e1fed9501_9ba703e5-0fb9-426f-9246-bb04c3b75e79_image.png',
      'https://cdn.senja.io/public/avatar/7c9103c8-84b2-4a61-8ba5-47453877679e_IMG_5212.jpeg',
    ],
  },
};

export const problem = {
  heading: 'Does This Sound Familiar?',
  /**
   * StoryOS format: plain second-person statements, not quote cards.
   * A quote asks the reader to identify with a stranger; "you" points at them.
   *
   * Every line below is DERIVED from a real pilot answer, kept in the comment above it,
   * so the language stays grounded even though it is no longer a direct quote.
   * Sources: the comment/DM corpus and the pilot survey (Q1 and Q3).
   */
  lines: [
    // "It's not like the technique stops working. It's rather my mind racing with thoughts
    //  driven by fear so I am forgetting to use the technique."
    'You know the technique. In the air your mind races and you forget to use it.',

    // "My skills and the conditions were ideal, but still I felt somehow anxious... I was scared
    //  about what other people will think of me when I come in too high."
    'The conditions are good and your skills are good, and you are still uneasy about who is watching from launch.',

    // "Why didn't I dare to continue south, even though that was the flight plan?
    //  ... I didn't fully trust my skills and decision-making; fear of the unknown."
    'You had a plan for the flight, you turned back early, and you still cannot say why.',

    // "I tend to exit thermals too early, even knowing they're still climbing."
    'You leave thermals before they stop climbing, knowing full well they are still going up.',

    // "Finally getting away from my start hill... I already fly 6+ hours a session but am
    //  too scared not to find lift when I fly away."
    'You fly plenty of hours and you still have not got away from your local hill.',

    // "Yes all the poor decisions I've made. Lots of them."
    'You replay the decisions you got wrong, and you cannot tell which ones were actually wrong.',
  ],
  /**
   * The bridge into the origin story. StoryOS has one here: "I struggled with every one of
   * these problems too, until one change fixed everything."
   *
   * Grant's steer 2026-09-30: "maybe a line that says - You're not alone."
   *
   * Written as EVIDENCE rather than reassurance. On its own, "you're not alone" is comfort,
   * and comfort is the sympathy frame his own research warns against. The second sentence
   * makes it a fact about where the six cards came from, and hands off to his story.
   */
  bridge:
    'You are not alone in any of it. Every one of those came from a pilot describing their own flying.',
};

/**
 * ALL COPY BELOW IS GRANT'S, from `02 Wingmates/Landing Page/most-coaching.md`.
 * Replaced Flox's drafted villain section on 2026-10-01. Do not edit.
 *
 * `blocks` is an ordered mix of paragraphs and pull quotes, matching the markdown.
 */
export const villain = {
  // Grant's heading, recovered from VS Code local history after Flox overwrote it.
  // "andConnection" was a missing space in his original; fixed.
  heading:
    'Most Paragliding Advice Creates Rankings and Competition. Wingmates is Designed to Create Group Flow and Connection.',
  blocks: [
    { type: 'p' as const, text: 'Traditional paragliding culture encourages you to chase metrics, enter XC leagues, and participate in competitions.' },
    { type: 'p' as const, text: 'This works if it enriches your flying and helps you to learn and grow.' },
    { type: 'p' as const, text: 'Unfortunately, when society forces the elemental arts into an organized, competitive box, it fundamentally changes the nature of the activity.' },
    { type: 'p' as const, text: 'Success is measured by points, podiums, medals, and judges\u2019 scores.' },
    { type: 'p' as const, text: 'Other pilots become an obstacle.' },
    { type: 'p' as const, text: 'Rivalries are born.' },
    { type: 'p' as const, text: 'Suddenly flying, humanity\u2019s dream since the dawn of consciousness, becomes a zero-sum status game. A game of ranking and hierarchy. A game of comparison.' },
    { type: 'p' as const, text: 'The ego gets attached to results which become a proxy for your value as a pilot. Your status in the community and individual worth gets boiled down to a single metric.' },
    { type: 'p' as const, text: 'A metric that says nothing about the quality of the experience.' },
    {
      type: 'quote' as const,
      text: 'It is good to have an end to journey toward; but it is the journey that matters, in the end.',
      cite: 'Ursula K. Le Guin',
    },
    { type: 'p' as const, text: 'Flying a big line through complex terrain is a deeply subjective, profound experience. Kilometres and league points turn a complex, soulful act into a cheap, easily digestible number. A pilot can land from an objectively stunning and creative flight feeling on top of the world, only to have the feeling whipped away simply because they fell 5km short of another pilot\u2019s tracklog.' },
    { type: 'p' as const, text: 'The problem with zero-sum games is that for you to win, someone else must lose. In this model joy is scarce and fleeting.'}, 
    { type: 'p' as const, text: 'However, in a positive-sum game everyone can win simultaneously.'},
    { type: 'p' as const, text: 'This is known as wealth creation. And in this case the wealth you create is of experience. Success is measured by mastery, presence, a connection to the environment, and the richness of the experience.' },
    { type: 'p' as const, text: 'In adventure sports, this shift from zero-sum competition to \u201Cthe act of doing\u201D is a deeply researched and lived philosophy. Many free-ride movements have broken away from the shackles of this imposed structure.' },
    { type: 'p' as const, text: 'They moved towards connected communities, supportive celebration, and group flow.' },
    { type: 'p' as const, text: 'That\u2019s why Wingmates uses a community-first XC Growth System.' },
    { type: 'p' as const, text: 'A place to connect with other pilots and increase the collective knowledge and safety of the group in a supportive and collaborative environment.' },
  ],
  refrain: 'The debrief is the learning.',
};

/**
 * ALL COPY BELOW IS GRANT'S, from `02 Wingmates/Landing Page/reserve.md`.
 * Replaced Flox's drafted origin section on 2026-10-01. Do not edit.
 *
 * This now carries the intermediate-syndrome argument AND the isolation story AND the
 * handoff, which were three separate drafted blocks before.
 */
export const origin = {
  heading: 'The Moment That Catalysed My Shift From Ego to Flow',
  blocks: [
    { type: 'p' as const, text: 'I almost killed myself.' },
    { type: 'p' as const, text: 'A week before the one and only SIV course I\u2019ve ever done, I threw my reserve.' },
    { type: 'p' as const, text: 'I didn\u2019t even have time to see it open. It opened just before I hit the perfectly angled slope. I landed without a scratch.' },
    { type: 'p' as const, text: 'I\u2019d burst onto the XC scene that year winning our local league and when I saw a friend doing wingovers I felt compelled to try them too. I hadn\u2019t studied the skill and didn\u2019t understand the dynamics, so when I had a small asymmetric on high side my immediate thought was, \u201Cah that doesn\u2019t scare me, I\u2019ll just do it bigger,\u201D incorrectly thinking that it was a lack of energy that caused the collapse. On the next turn I went bigger and the typical sequence of events for this type of mistake occurred \u2014 big assym on the topside into a cravat.' },
    {
      type: 'quote' as const,
      text: 'The cause of my cascade was a type of Egofear born from insecurity and driven by the need for recognition.',
    },
    { type: 'p' as const, text: 'The need to prove myself, to be the best, to win and fly further than others came from deep wounds.' },
    { type: 'p' as const, text: 'What turned my trajectory around wasn\u2019t more airtime, it was the insights I gained through struggle and reflection. A debrief that only came years later. I had to dig deep. To be open and see the part my ego had been playing. To be open to feedback as a path to growth.' },
    { type: 'p' as const, text: 'To explore and uncover deeper truths about why we fly.' },
    { type: 'p' as const, text: 'That paragliding is a mind game and that it\u2019s gifts can be found when you focus on...' },
    { type: 'quote' as const, text: 'Connection over competition.' },
    { type: 'p' as const, text: 'I became isolated twice in my paragliding journey.' },
    { type: 'p' as const, text: 'After getting my licence I didn\u2019t fly for four years. The second time, while living in Sweden, it was two years.' },
    { type: 'p' as const, text: 'Wingmates is the community I wish I had had.' },
    { type: 'p' as const, text: 'Somewhere to keep a home in this elemental art when life makes flying hard.' },
    { type: 'p' as const, text: 'To keep learning in the seasons you fly a lot and to stay connected in the ones you do not.' },
    { type: 'p' as const, text: 'To connect and find a crew to fly with, no matter what country you find yourself in.' },
    { type: 'quote' as const, text: 'There is nothing more powerful than group flow.' },
    { type: 'p' as const, text: 'To share your own hard won experience with others to help them stay on track.' },
    { type: 'p' as const, text: 'To keep yourself accountable.' },
    { type: 'p' as const, text: 'This is the power of community and why I started Wingmates.' },
    { type: 'p' as const, text: 'Be part of a new connected movement of pilots putting flow and the love of free flight first.' },
  ],
};

/**
 * ALL COPY BELOW IS GRANT'S, supplied 2026-10-01. Do not edit.
 * Rendered as StoryOS-style numbered steps: circled numeral, connecting rule, then the
 * step heading and body.
 */
export const howItWorks = {
  heading: 'The Four-Step System Behind Unbelievable XC Growth',
  intro:
    "Here's how Wingmates turns the flights you already have into a project worth flying, and a crew that keeps you flying it.",
  steps: [
    {
      title: 'Plan a Meaningful XC Project (Before You Waste More Time Chasing the Wrong Goal)',
      body: [
        "Choose a project that aligns with your values, whether that's a first 30K triangle, a flight home from the hill, or a 100km line. You'll map what it takes to get there, so you're working toward your own dream not someone else's.",
      ],
    },
    {
      title: "Discover What's Holding You Back (Before Spending More Money on Gear)",
      body: [
        "When XC progress slows, most pilots blame time or gear but the blocks are usually mental. Uncover what's holding you back so that yuo can develop a practice that boosts your performance and enjoyment on the ground and in the air. No gear upgrade required.",
      ],
    },
    {
      title: "Never Land From a Flight You Can't Learn From Again",
      body: [
        "The debrief is the learning. If you're like most pilots you glance at your track, see what number you flew, compare it to others on the day, and move on. The lessons from a great flight or a bomb-out disappear. Inside Wingmates you'll run a simple debrief and share it with your online flying friends. Work through your decisions, your state, and uncover insights to take with you into your next flight.",
      ],
    },
    {
      title: 'Stay Connected and Keep Growing (Even Through A Flying Slump)',
      body: [
        "You don't need to be flying actively to benefit from Wingmates. In fact, pilots going through a flying drought often benefit even more, it's through the tough times when you need the most support. When you're part of a gaggle, you keep learning in the seasons you fly a lot and stay connected in the ones you don't, with a crew to fly with wherever in the world you end up.",
      ],
    },
  ],
  refrain: 'The debrief is the learning.',
};

export const bands = {
  afterVillain: {
    shape: 'feature' as const,
    quote:
      'In the last two months I have made more progress in my flying journey than in the last two years.',
    name: 'Zee',
    // VERBATIM from the same testimonial.
    result:
      'Broke a personal best twice in a month, crossed to another valley for the first time, and flew higher than ever before.',
    avatar:
      'https://cdn.senja.io/public/media/2e833191-d1e6-45e5-8c0e-7a6e370107cb_b97de09c-a2ce-47d9-bcdc-e83e347a7a57_zeeeeeee.jpg',
    // Zee's 50km flight. Sits BELOW the quote, full width, not beside it.
    image:
      'https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/zee-50k-paragliding.png',
    imageAlt: "Tracklog of Zee's 50km cross-country flight",
    // Name on the tracklog is public on XContest. Grant confirmed 2026-10-01.
  },
  afterSystem: {
    shape: 'statement' as const,
    quote: "It's only been a month and seen a real change.",
    name: 'Mark Limb',
    sub: 'Found Grant on YouTube and joined',
    avatar:
      'https://cdn.senja.io/public/media/4296449a-9332-49df-8160-359ffd362161_2d7f3199-b80c-4ebc-a0d4-c852c32959b7_mark-limb.jpeg',
  },
  afterDebrief: {
    shape: 'statement' as const,
    quote: 'Grant = emotional intelligence + didactical excellence + flying expertise.',
    name: 'Nikola Dentschev',
    sub: '',
    avatar:
      'https://cdn.senja.io/public/avatar/e8ad2ea2-f32d-4b7f-a207-92b31d3ee946_IMG_4384.jpeg',
  },
  afterCall: {
    shape: 'statement' as const,
    quote:
      "I'm finally starting to feel after two and a half years of flying that I'm actually starting to fly now.",
    name: 'Kurt Bester',
    sub: '',
    avatar:
      'https://cdn.senja.io/public/avatar/acab6065-c6ef-4b5a-89e1-7acf0267d3a7_F351DA62-F948-450F-BDA7-698C63033D68.jpeg',
  },
  afterTracklog: {
    shape: 'statement' as const,
    quote:
      'I think Grant\'s skill is in recognising what people want from the sport and assisting in their own personal journey.',
    name: 'Jeremy Samson',
    sub: '',
    avatar:
      'https://cdn.senja.io/public/avatar/1e683ae6-0c91-425d-ba9a-d5e76dc21e9f_IMG_7880.jpeg',
  },
};

/**
 * THE FOUR DELIVERABLE BLOCKS, in the StoryOS two-column format Grant screenshotted:
 * eyebrow label, heading, body, a bold lead-in, a checkmark list, media alongside, CTA.
 *
 * ⚠️ FLOX DRAFT — headings, body and bullets are my wording in Grant's register,
 * built from the four things he named. Rewrite before this ships.
 * ✅ All media is real: the debrief video plus three screenshots Grant supplied.
 */
export const objections = {
  heading: 'Exactly How Wingmates Helps You Build Confidence and Fly Further ',
  intro:
    'Four parts, working together: a system to follow, a coach who reviews your flying, 1:1 time when you need it, and a crew that keeps you plugged in.',
  items: [
    {
      label: 'THE XC GROWTH SYSTEM',
      heading: 'Follow the XC Growth System Inside Wingmates',
      body: [
        'The whole system lives inside the community, broken into steps you work through at your own pace, with the templates and prompts for each one.',
        'You are never guessing what to do next, and you are never doing it alone.',
      ],
      leadIn: 'The four steps:',
      bullets: [
        'Plan a project that fits your skill level, and what you want from flying.',
        'Find what is actually holding you back, and develop a practice around it.',
        'Debrief, so nothing you learn disappears on the drive home.',
        'Use the insights from each debrief for the next plan: iterate, repeat, grow.',
      ],
      media: {
        src: '/wingmates-xc-system.png',
        alt: 'The Wingmates community, showing the Debrief space with a flight review and the course and resource sections alongside',
        width: 1654,
        height: 1048,
      },
    },
    {
      label: 'THE DEBRIEF',
      heading: 'Share Your Insights or Send Me Your Tracklog or Video To Review',
      body: [
        'Upload a launch, a landing, a climb, or a tracklog from a day you want to learn from. Share your experience and what you thought was going on.',
        'I go through it and help you discover your own insights. No marks, only learning.',
      ],
      leadIn: 'Example of what a debrief covers:',
      bullets: [
        'The decisions you made.',
        'What was happening internally.',
        'Uncover what works well so you can repeat.',
        'What lessons the flight was trying to teach you.',
      ],
      // Real debrief, 10m34s / 38MB. Click-to-play with a poster, never autoplay.
      media: {
        video:
          'https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/debrief-web.mp4',
        poster: '/wingmates-debrief-poster.jpg',
        caption: 'A takeoff debrief inside Wingmates.',
      },
    },
    {
      label: 'HOT SEATS',
      heading: 'Get 1:1 Time on Something You Want To Work On',
      body: [
        'Some things do not belong in a group thread. A hot seat with me, on whatever is holding you back, available to you inside the community.',
        'Not a group call where you wait your turn, and not a fixed syllabus. We work on whatever is most meaningful to you.',
      ],
      leadIn: 'Pilots bring topics like:',
      bullets: [
        'A flight that rattled them.',
        'Coming back after a break, an accident, or a season off.',
        'A wing decision they keep going back and forth on.',
        'The gap between solo performance and group flow.',
      ],
      media: {
        src: '/wingmates-hot-seat.png',
        alt: 'A recorded one to one session inside Wingmates, titled Anxiety and Fear',
        width: 1668,
        height: 1036,
      },
    },
    {
      label: 'YOUR WINGMATES ',
      heading: 'Fly With Pilots On The Same Journey',
      body: [
        'Thirty pilots across fourteen countries, growing through paragliding. Members organise their own flights, meetups and XC days.',
        'Somewhere to stay connected when life makes flying hard, celebrate wins when things are good, and to fly with wherever you end up in the world.',
      ],
      leadIn: 'What the crew gives you:',
      bullets: [
        'Feedback and support on your debriefs.',
        'Pilots to connect with while traveling.',
        'Friends that keep you going even through periods when you are not flying.',
        'Direct access to support from Grant in the DMs and the community.',
      ],
      media: {
        src: '/wingmates-member-map.png',
        alt: 'A world map of Wingmates members, with pilots across Europe, the Americas, the UK and South Africa',
        width: 2457,
        height: 1222,
      },
    },
  ],
};

export const proof = {
  heading: 'What the Wingmates Say',
  // VERBATIM from Senja. Order is deliberate: the ones a stranger cannot discount go first.
  items: [
    {
      quote:
        'In the last two months I have made more progress in my flying journey than in the last two years.',
      name: 'Zee',
      detail: 'Two personal bests, a first valley crossing, and the highest they had ever flown.',
    },
    {
      quote:
        "I'm finally starting to feel after two and a half years of flying that I'm actually starting to fly now.",
      name: 'Kurt Bester',
      detail: 'Video testimonial, 102 seconds.',
    },
    {
      quote:
        "Found Grant on youtube and the info was excellent so joined Wingmates, its only been a month and seen a real change... Open up to the program and it delivers.",
      name: 'Mark Limb',
      detail: '',
    },
    {
      quote: 'Grant = emotional intelligence + didactical excellence + flying expertise.',
      name: 'Nikola Dentschev',
      detail: '',
    },
    {
      quote:
        "I took up flying to explore my inner self and the mental aspect that comes into play up there... Talking about these things with most of the pilots I've met is either impossible or very difficult.",
      name: 'Christian',
      detail: '',
    },
  ],
  // Jason confirmed he/him by Grant 2026-09-30.
  // Running it unnamed on purpose so there is no permission question. Grant can add the name.
  takeoffReview: {
    heading: 'A takeoff he was not proud of',
    body: [
      'One member sent me a takeoff he wasn’t proud of. Thermic, stronger air than he wanted, jerking the glider on the way up. His own words were "not best practice but functional". He had already spotted most of the faults before I said anything, because of the review before that one.',
      'That is what this is for. You stop needing me to find what you can now see yourself.',
    ],
  },
};

/**
 * ALL COPY BELOW IS GRANT'S, supplied 2026-10-01. Do not edit.
 */
export const forYou = {
  heading: 'Wingmates Is for Pilots Who Put Flow Before Status',
  forHeading: "It's for you if",
  forItems: [
    'You want to keep growing as a pilot, whatever that looks like for you: a first flight away from the hill, a big XC line, or a better comp result.',
    "You want to sharpen your skills and your head, because you've noticed both decide your flights: technique, weather reading, and the fear, hesitation, or pushing that sits underneath.",
    "You'd rather understand one flight properly than log ten more.",
    'You want a crew to learn with, wherever in the world you fly.',
    "You'll share honestly, including the flights you're not proud of, and help others do the same.",
  ],
  notHeading: "It's not for you if",
  notItems: [
    "You're here to prove you're better than other pilots. Rankings have their place, but this isn't it.",
    'You want praise more than honest, kind feedback.',
    "You're looking for quick tips without reflecting on your own flying. Here the learning comes from doing the work to reflect on your flights, with supportive feedback from Grant and the community.",
  ],
  doesntMatterHeading: "It doesn't matter if",
  doesntMatterItems: [
    'You compete, fly XC, or mostly soar your local site. Bring your goals, whatever they are.',
    "You're not flying much right now. The learning is in the flights you've already had.",
    "You're coming back after a break, an accident, or a season off.",
    "You're quiet by nature. Start by reading other pilots' debriefs and share when you're ready.",
  ],
  note: "Mentored by an instructor and flow coach, so you get the technical skills and the mental game in one place. While entering leagues and comps are welcome here, we take a flow approach prioritising growth, connection, and the joy of the journey, not status and ranking.",
};

export const faq = {
  heading: 'You Might Be Wondering...',
  items: [
    {
      q: 'What happens if I cancel?',
      a: 'You stop being billed and you keep access to the end of the quarter you have already paid for. No call, no form, no talking me out of it.',
    },
    {
      q: 'Do I have to talk to anyone?',
      a: 'No. Plenty of members read and watch and never post. The debriefs work either way. The one thing I would ask is that you send a flight, because that is the part that actually changes anything.',
    },
    {
      q: 'What does a debrief actually look like?',
      a: 'You upload a video or a tracklog, and you tell me what you thought was happening. I go through it and tell you what I see, which is usually a different story. It is not a mark out of ten.',
    },
    {
      q: 'Do I need to be an experienced pilot?',
      a: 'Most people here have flown XC. You do not need to be good. You need to be flying, and willing to look at what you did.',
    },
    {
      q: 'Is this a course?',
      a: 'The Way of Fear is a course and it is included. Wingmates is not. It is a practice you keep returning to, each flight and each season.',
    },
    {
      q: 'You talk a lot about not chasing numbers. Does that mean Wingmates is against goals?',
      // GRANT'S COPY, verbatim 2026-10-01. Multi-paragraph, so it renders as an array.
      a: [
        "No. We're not against goals. We're against goals that own you.",
        'Wanting to fly 100km is a legitimate dream, and so is a first flight away from the hill, a podium at a comp, or simply flying your local ridge with more ease and joy. What matters is who owns the goal and what it means to you.',
        "A goal as a scoreboard is a number set by a leaderboard or someone else's tracklog. Hitting it proves your worth, and missing it means you failed. That's the version we step away from, because it turns flying into a status game where your worth rides on a single number.",
        'A goal as a project is one you choose, shaped by your site, your wing, and what you want from flying. It gives you direction. A flight can fall short and still be a good flight, because the debrief turns it into learning either way.',
        "This isn't just philosophy. Clear goals and immediate feedback are two of the classic conditions for flow. In Wingmates, your project gives you the goal and the debrief gives you the feedback. Without a direction, pilots tend to drift. With a rigid attachment to the outcome, they tend to push, and pushing for the wrong reasons is where many of the worst decisions in the air come from. I learned that the hard way.",
        "And if you'd rather not set a distance goal at all, that's fine too. Your project can be to enjoy your flying more, and the system works the same way.",
      ],
      quote: {
        text: 'It is good to have an end to journey toward; but it is the journey that matters, in the end.',
        cite: 'Ursula K. Le Guin',
      },
    },
    {
      q: 'What if I fly in winter, or hardly fly at all right now?',
      a: 'That is the best argument for joining rather than against it. The learning is in the flights you already had, and most pilots have years of them that nobody ever looked at. The debrief is the learning.',
    },
  ],
};

export const finalCta = {
  heading: "Can't I Work This Out on My Own?",
  body: [
    'Yes. I did.',
    'It took winning a league, a collapse I diagnosed wrong with complete confidence, a cravat, a thrown reserve, and several years afterwards working out what had actually been driving me. I got there. I would not recommend the route.',
    'The part I could not do alone was the only part that mattered, which was seeing my own flying from outside it. That still needs somebody else, and it is the one thing you cannot buy anywhere else in this sport.',
  ],
  refrain: 'The debrief is the learning.',
  cta: 'Join Wingmates',
};

/**
 * Course testimonial, sits under the pricing section.
 * VERBATIM from the Wingmates member survey, 2026-10-02 (Keriman Haire, NPS 10).
 * Displayed as 'Keri' at Grant's request.
 * Her full answer to "What's been most valuable to you?".
 */
export const courseProof = {
  quote:
    'The most valuable thing for me has been The Way of Fear Course that\u2019s offered on this platform.',
  name: 'Keri',
  sub: 'Wingmates member',
};

export const about = {
  heading: "Hey, I'm Grant - The World's First Paragliding Flow Coach",
  imageUrl:
    'https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/grant-profile-pgatlas-crop.jpg',
  // Flow Coaching Federation Certified badge, extracted from his accreditation
  // certificate PDF (01 FLOW Coaching Resources/FCA Training/, 2026-09-02).
  badge: {
    src: '/flow-coaching-federation-certified.png',
    alt: 'Flow Coaching Federation Certified',
  },
  paragraphs: [
    "I'm a qualified paragliding instructor, guide, and accomplished XC pilot with multiple local records. I'm also an accredited Flow Coach with The Flow Coaching Federation, the leaders in Flow Science.",
    "My method follows the tradition of Gallwey's Inner Game. Not more technical instruction, but removing the interference getting in your way. When the noise clears, you discover that you already know how to fly. The work is in getting out of your own way.",
    "I see paragliding as an Elemental Art. A practice that has the power to transform your life if you approach it in the right way. I'm here to help you on that journey.",
  ],
};

/** Shared palette. The repo has no DaisyUI, so bg-base-200 and friends render nothing. */
export const colors = {
  section: '#0F172A',
  card: '#07122d',
  accent: '#3B82F6',
};
