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
      title: 'Plan an XC Project Worth Flying (Before You Waste Another Season on the Wrong Goal)',
      body: [
        "Choose a project that fits your site, your wing, and what you want from flying, whether that's a first 30K triangle, a flight home from the hill, or a 100km line. You'll map what it takes to get there, so you're working toward your own dream and not someone else's number.",
      ],
    },
    {
      title: "Discover What's Holding You Back (Before Spending More Money on Gear)",
      body: [
        "When XC stalls, most pilots assume they need a better wing or more airtime. Usually it's fear quietly steering your decisions: hesitating at the wrong moment, bombing out early, pushing when you should back off. You'll identify whether Egofear or Somafear is driving, and build the in-air habits that keep you calm and thinking clearly. No gear upgrade required.",
      ],
    },
    {
      title: "Never Land From a Flight You Can't Learn From Again",
      body: [
        "The debrief is the learning. Most pilots glance at the track and move on, so the lessons from a great flight or a bomb-out disappear. Inside Wingmates you'll run a structured debrief after every flight and share it with pilots who understand. They'll help you see your decisions, your state, and what the flight was trying to teach you.",
      ],
    },
    {
      title: 'Stay Connected and Keep Growing Through Every Slump',
      body: [
        "Each debrief feeds your next plan, so you refine the project, change it, or set it down. And because you're part of a gaggle, you keep learning in the seasons you fly a lot and stay connected in the ones you don't, with a crew to fly with wherever you end up.",
      ],
    },
  ],
  refrain: 'The debrief is the learning.',
};

export const bands = {
  afterVillain: {
    shape: 'feature' as const,
    quote:
      'In the last two months I have made more progress in my flying journey than in the last two.',
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
  heading: 'Exactly How Wingmates Helps You Fly Further and Trust Your Own Decisions',
  intro:
    'Four parts, working together: a system to follow, a coach who reviews your flying, private time when you need it, and a crew that keeps you in the sport.',
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
        'Plan a project that fits your site, your wing and what you want from flying.',
        'Find what is actually holding you back, and whether it is Egofear or Somafear.',
        'Debrief every flight, so nothing you learn disappears on the drive home.',
        'Feed each debrief into the next plan, and keep going through the slumps.',
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
      heading: 'Send Me a Flight and Find Out What Actually Happened',
      body: [
        'Upload a launch, a landing, a climb, or a tracklog from a day you cannot account for. Tell me what you thought was going on.',
        'I go through it and tell you what I saw, which is usually a different story from the one you flew. Not a mark out of ten. The difference between what happened and what it felt like.',
      ],
      leadIn: 'What a debrief covers:',
      bullets: [
        'The decisions you made an hour into the flight, not just the launch.',
        'Where you left a climb that was still going.',
        'Where you turned back, and whether that was wisdom or fear.',
        'What the flight was trying to teach you.',
      ],
      // Real debrief, 10m34s / 38MB. Click-to-play with a poster, never autoplay.
      media: {
        video:
          'https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/debrief-web.mp4',
        poster: '/wingmates-debrief-poster.jpg',
        caption: 'A real debrief, start to finish. 10 min.',
      },
    },
    {
      label: 'HOT SEATS',
      heading: 'Get One to One Time on Whatever Is Actually Yours',
      body: [
        'Some things do not belong in a group thread. A private hot seat with me, on whatever is holding you back in the air, available to you inside the community.',
        'Not a group call where you wait your turn, and not a fixed syllabus. We work on your thing.',
      ],
      leadIn: 'Pilots bring things like:',
      bullets: [
        'A flight that rattled them and will not leave.',
        'Coming back after a break, an accident, or a season off.',
        'A wing decision they keep going back and forth on.',
        'The gap between how they fly alone and how they fly watched.',
      ],
      media: {
        src: '/wingmates-hot-seat.png',
        alt: 'A recorded one to one session inside Wingmates, titled Anxiety and Fear',
        width: 1668,
        height: 1036,
      },
    },
    {
      label: 'THE CREW',
      heading: 'Fly With Pilots Who Are Doing the Same Work',
      body: [
        'Thirty pilots across fourteen countries, working on the same thing you are. Members organise their own flights, meetups and XC days.',
        'Somewhere to keep a home in this sport when life makes flying hard, and a crew to fly with wherever you end up.',
      ],
      leadIn: 'What the crew gives you:',
      bullets: [
        'People who read your debrief and tell you what they see.',
        'Pilots to fly with in a country you have just landed in.',
        'A reason to stay in the sport through a season you are not flying.',
        'Direct access to me on DMs, not a help desk.',
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
        'In the last two months I have made more progress in my flying journey than in the last ten.',
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

export const forYou = {
  heading: 'Wingmates Is for Pilots Who Want to Fly Further, Not Just Fly More',
  forHeading: "It's for you if",
  forItems: [
    'You are working towards bigger XC flights and something other than skill keeps deciding them',
    'You have flights you cannot explain and nobody to ask about them',
    'You would rather understand one flight properly than log ten more',
    'You are willing to put a flight you are not proud of in front of other people',
  ],
  notHeading: "It's not for you if",
  notItems: [
    'You want technique instruction. That is a real thing to want and this is not it. Ask me and I will point you somewhere useful',
    'You want to be told you are already flying well',
    'You want to read and never send anything',
  ],
  /**
   * learn.community's strongest move: after "yes if" and "not for you if", a list that
   * REMOVES the reasons people disqualify themselves. For Wingmates this is where the
   * blocking belief ("I don't fly enough for this to help") gets answered up front.
   */
  doesntMatterHeading: "It doesn't matter if",
  doesntMatterItems: [
    'You are not flying much at the moment. The learning is in the flights you already had.',
    'You have never flown 100km. Plenty of members have not.',  // TODO Grant: confirm against Circle before publishing
    'You are coming back after a break, an accident, or a season off.',
    'You would rather read than post. Plenty of members never post and still send flights.',
  ],
  // Grant 2026-09-30: "its a home for pilots wanting to progress at all xc levels."
  note: 'This is a home for pilots who want to progress at every XC level, from your first flight away from the hill to your first three figures. If you are still in training, the flying comes first and this will keep.',
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
  refrain: 'The debrief is the learning. Send me the flight.',
  cta: 'Join Wingmates',
  terms: '$150 a quarter. Cancel anytime.',
};

export const about = {
  heading: "Hey, I'm Grant",
  imageUrl:
    'https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/grant-profile-pgatlas-crop.jpg',
  paragraphs: [
    "I'm a qualified paragliding instructor, guide, and accomplished XC pilot. I'm also an accredited Flow Coach with The Flow Centre, and the world's first paragliding flow coach.",
    "My method follows the tradition of Gallwey's Inner Game. Not more instruction, but removing the interference that is already in the way. When the noise is cleared, pilots discover they already know how to fly. The work is in getting out of your own way.",
    "Most coaching focuses on technique. This doesn't. I spend most of my working life watching pilots fly and telling them the truth about what they did.",
    'Send me the flight you would rather nobody saw. That is where the useful work is.',
  ],
};

/** Shared palette. The repo has no DaisyUI, so bg-base-200 and friends render nothing. */
export const colors = {
  section: '#0F172A',
  card: '#07122d',
  accent: '#3B82F6',
};
