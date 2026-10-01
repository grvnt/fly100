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

export const villain = {
  heading: 'Most Paragliding Coaching Works on the Flight. Wingmates Works on the Debrief.',
  subheading: 'Why "just fly more" does not fix it',
  intro: [
    'There is a stage most pilots pass through at around a hundred hours. You have enough skill to go places now. You have some results behind you. And your assessment of your own flying quietly stops matching your actual flying.',
    'The sport has a name for it. Intermediate syndrome.',
    'It does not only look like overconfidence. It has a second face that nobody talks about, and I have worn both.',
  ],
  // VERBATIM Grant, published 2026-06-11 in "seek-mastery". Both faces of intermediate syndrome.
  published: [
    'It’s also why you might upgrade your glider too early. The added performance to mask your perceived shortcomings and the ego-boost that saying you fly a C or a D gives you.',
    'On the other end of the scale you might avoid takeoffs, people, conditions, even ground handling that is well within your ability, just to avoid looking bad. To avoid looking like a newbie. To avoid the shame of appearing foolish.',
    'But this keeps you exactly where you don’t want to be. Your skills don’t improve. You fly less. You become rusty. And when you do fly you make mistakes because you haven’t practiced or developed your relationship with fear, feeding the cycle of belief that you are “bad” at paragliding. It becomes a self-fulfilling prophecy.',
  ],
  // VERBATIM Grant, published 2026-05-21 in "launch-anxiety". The villain sentence.
  villainSentence:
    'This is why “just fly more” doesn’t fix anxiety for many pilots. More skill doesn’t dissolve Egofear — it often inflates it. After some success, the self now has more to protect, not less.',
  // The anti-scoreboard argument. This is where it belongs: the metric fixation is a
  // symptom of the villain, not a separate enemy.
  scoreboard: [
    'So what do you do when you cannot see your own flying? You borrow somebody else’s measure. The league table. The guy who just upgraded to a C. The kilometre count on the way home.',
    'That is where the number-chasing comes from. Not ambition. It is what you reach for when you have no other way of knowing whether you flew well. One pilot who answered my survey put his own version of it down as the thing standing between him and enjoying his flying: "Part of me is competitive and wants to reach new measurable goals." Another, well past a hundred kilometres, wrote that what he wanted was pleasure, and named the obstacle as "chasing figures."',
    'I am not against your numbers. Your first hundred is worth wanting, and I will help you get it. I am against the number being the only thing telling you how you are doing, because it is a terrible instrument and it is not even yours.',
  ],
  close:
    'Both faces come from the same place. You are the only one grading your own flying, and the grader is not neutral.',
  refrain: 'The debrief is the learning.',
};

export const origin = {
  /**
   * ⛔ HEADING CORRECTED 2026-09-30. It was "The One Change That Took Me From Winning a
   * League to Throwing My Reserve", borrowed from StoryOS's "The One Change That Took Me
   * From X to Y". That structure demanded a change, and Grant's story does not contain
   * one -- it contains a realisation. Forcing the shape produced a false first-person
   * claim about his own accident. Grant: "the change i made came from deep reflection
   * where i saw the role that ego had played and how it could have cost me my life."
   */
  heading: 'It Took a Thrown Reserve for Me to See What My Ego Was Doing',
  // VERBATIM Grant, published 2026-05-21. His account, unedited.
  published: [
    'The cause of my cascade was a type of Egofear born from insecurity and driven by the need for recognition — also known as intermediate syndrome. I’d burst onto the XC scene that year winning our local league and when I saw a friend doing wingovers I felt compelled to try them too. I hadn’t studied the skill and didn’t understand the dynamics, so when I had a small asymmetric on high side my immediate thought was, “ah that doesn’t scare me, I’ll just do it bigger,” incorrectly thinking that it was a lack of energy that caused the collapse. On the next turn I went bigger and the typical sequence of events for this type of mistake occurred — big assym on the topside into a cravat.',
    'The need to prove myself, to be the best, to win and fly further than others came from deep wounds.',
  ],
  // FLOX DRAFT in Grant's register, built from his own correction. Rewrite in his words.
  landing: [
    'I threw my reserve a week before a scheduled SIV course. The part that still gets me is not the cravat. It is that I diagnosed my own collapse wrong, in the air, with total confidence, and then acted on the diagnosis.',
    'What changed things afterwards was not a course, and it was not more airtime. It was sitting with what had happened for long enough to see the part my ego had been playing, and how close that had come to costing me my life.',
    'Nobody was watching that flight except me. Nobody had been watching the months before it either, while I drifted towards it.',
  ],
  /**
   * The second story, from Grant 2026-09-30: "i got isolated twice in my flying career -
   * once i didnt fly for 4 years, the other for 2 years - i didnt have a crew of pilots."
   *
   * FLOX DRAFT in his register. Rewrite in his own words.
   *
   * Why it belongs here and not as the villain: as a claim about pilots quitting it turns
   * grim on repetition, which is why that version was parked in September. As HIS OWN
   * STORY it is unarguable, and it pairs with the reserve throw. Two ways of losing years.
   */
  isolation: [
    'There is a second thing I learned the slow way, and it cost me more time than the cravat did.',
    'Twice in my flying career I got isolated. The first time I did not fly for four years. The second time, two. Nothing went wrong and I did not lose interest. I just did not have a crew, and without other pilots around it, the flying quietly stopped happening.',
  ],
  /**
   * Grant 2026-09-30: "wingmates is the community i wish i had and the feedback to see
   * i was heading in the wrong direction."
   *
   * NOTE THE FRAME: it is a wish about his own past, not a promise about the reader's
   * future. ⛔ Never write that Wingmates would have prevented the accident, or that it
   * will prevent anyone else's. That is a safety claim.
   */
  handoff: [
    'Wingmates is the community I wish I had had. Not because anyone else can fly your glider, but because the drift is obvious from outside long before it is obvious from inside. What I was missing was somebody willing to tell me I was heading the wrong way.',
    'And somewhere to keep a home in this sport when life makes flying hard, so you keep learning in the seasons you fly a lot and you are still here in the ones you do not.',
    'Let me show you how it works.',
  ],
};

export const howItWorks = {
  heading: 'The Four-Step System Behind Every Debrief I Do',
  intro:
    "You upload a launch, a landing, a climb, or a tracklog from a day you can't account for. You tell me what you thought was going on. I go through it and tell you what I saw, which is usually a different story from the one you flew.",
  // Four steps, each titled as a RESULT rather than a module name.
  // PARA runs underneath. The letters stay off the page on purpose.
  /**
   * ⚠️ FLOX DRAFT — expanded to StoryOS depth (2-3 paragraphs per step) at Grant's request.
   * The TITLES are his and unchanged. The added paragraphs are my wording in his register
   * and should be rewritten in his own words before this ships.
   */
  steps: [
    {
      title: "Know what you're actually flying towards",
      body: [
        'Most pilots are working towards whatever the group at launch is working towards this season. A bigger wing, a longer flight, the site everyone is talking about.',
        'Before anything else we get clear on what you actually want from your flying, and why it matters to you rather than to them. That is what every debrief afterwards gets measured against.',
      ],
    },
    {
      title: 'Have something to do when it gets rough',
      body: [
        'Knowing the technique is not the problem. Reaching for it when your heart rate is up is the problem, and most pilots have never practised that part.',
        'You get the fear work, the seven-step protocol for the air and the short version for the moment it peaks. Not theory to read once, but something you take to the hill and use.',
      ],
    },
    {
      title: 'Find out what really happened on the flight',
      body: [
        'You send me a launch, a landing, a climb, or a tracklog from a day you cannot account for. You tell me what you thought was going on.',
        'I go through it and tell you what I saw, which is usually a different story from the one you flew. Not a mark out of ten. The difference between what happened and what it felt like.',
      ],
    },
    {
      title: 'Fly the next one differently',
      body: [
        'Then you go flying, and the next one is different, because you are no longer working from your own version of what happened.',
        'That is the part that compounds. One flight understood properly changes the next ten. Ten flights logged and never looked at change nothing.',
      ],
    },
  ],
  gaggle: [
    'You already know how this works in the air. You join a gaggle because somebody else found the thermal first, and from outside their climb you can see things about it they cannot see from inside it.',
    'Your flying is the same. You cannot read the label of the jar from inside the jar.',
  ],
  refrain: 'The debrief is the learning.',
};

/**
 * TESTIMONIAL BANDS — used as dividers between the big sections, the way StoryOS does it.
 *
 * Two shapes:
 *   `feature` — quote + name + a result line + a supporting image (the Rian Doris shape)
 *   `statement` — one big centred quote on dark with an avatar (the Charlie Morgan shape)
 *
 * All quotes are 🔵 VERBATIM from Senja. Do not edit them.
 * `image` slots are empty until Grant supplies them. The band renders fine without one.
 */
export const bands = {
  afterVillain: {
    shape: 'feature' as const,
    quote:
      'In the last two months I have made more progress in my flying journey than in the last ten.',
    name: 'Zee',
    // VERBATIM from the same testimonial.
    result:
      'Broke a personal best twice in a month, crossed to another valley for the first time, and flew higher than ever before.',
    avatar:
      'https://cdn.senja.io/public/media/2e833191-d1e6-45e5-8c0e-7a6e370107cb_b97de09c-a2ce-47d9-bcdc-e83e347a7a57_zeeeeeee.jpg',
    // TODO Grant: tracklog image from the 50km flight.
    image: '',
    imageAlt: '',
  },
  afterSystem: {
    shape: 'statement' as const,
    quote: "It's only been a month and seen a real change.",
    name: 'Mark Limb',
    sub: 'Found Grant on YouTube and joined',
    // ⚠️ Mark has NO photo in Senja — he is the only one of the five without one.
    // The band falls back to an initial until Grant adds a photo to his Senja entry.
    avatar: '',
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

export const objections = {
  heading:
    'Exactly How Wingmates Helps You Fly Further and Trust Your Own Decisions',
  intro:
    'Four parts, and each one exists because of something pilots told me was stopping them.',
  items: [
    {
      label: 'THE DEBRIEF',
      // A real debrief, 10m34s. Click-to-play with a poster, not autoplay: the file is 38MB.
      media: {
        video:
          'https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/video/debrief-web.mp4',
        poster: '/wingmates-debrief-poster.jpg',
        caption: 'A real debrief, start to finish. 10 min.',
      },
      result: 'Use the flights you have already had',
      // ⚠️ FLOX DRAFT bullets — rewrite in Grant's words.
      bullets: [
        'Send a launch, a landing, a climb, or a whole tracklog.',
        'Send one from last season. The learning does not expire.',
        'Hear what actually happened, not what it felt like.',
        'Stop needing me to spot what you can now see yourself.',
      ],
      objection: "I don't fly enough for this to be worth it.",
      answer:
        'This is the one I hear most, and it has the answer built into it. If the learning is in the debrief, you do not need more flights. You need to use the ones you have already had, and most pilots are carrying years of them that nobody ever looked at. Send me a flight from last season.',
    },
    {
      label: 'A ONE TO ONE CALL',
      result: 'Get to the thing that is actually yours',
      bullets: [
        'A private session, not a group call where you wait your turn.',
        'On whatever is actually holding you back, not a fixed syllabus.',
        'Available inside the community. Take it when you want it.',
      ],
      objection: "My situation is specific. I'm not like everyone else in there.",
      answer:
        'There is a one to one call with me available to you inside the community, on whatever is actually holding you back. Not a group call where you wait your turn. Take it when you want it.',
    },
    {
      label: 'THE TRACKLOG',
      result: 'See the decisions a bystander cannot see',
      bullets: [
        'The decisions you made an hour into the flight.',
        'Where you left a climb that was still going.',
        'Where you turned back, and whether that was wisdom or fear.',
      ],
      objection: "I'd rather pay someone to stand next to me on launch.",
      answer:
        'Sometimes you should, and I will tell you when that is the right call. But the thing standing between you and a bigger flight usually is not happening on launch, and it is not visible to somebody standing next to you. It is in the decisions you made an hour into the flight, which is what a tracklog shows and a bystander does not.',
    },
    {
      label: 'THE CREW',
      result: 'Have 30 pilots and me on the other end',
      bullets: [
        'DMs with me, not a help desk.',
        '30 pilots across 14 countries working on the same thing.',
        'Members organise their own flights, meetups and XC days.',
      ],
      objection: "I'll get stuck and have nobody to ask.",
      answer:
        'You get me on DMs, and 30 pilots across 14 countries who are working on the same thing and who organise their own flights, meetups and XC days.',
    },
  ],
  included: {
    title: 'Included Bonus: The Way of Fear',
    body: 'You also get The Way of Fear the day you join. It is the work I do with pilots on launch anxiety, on committing when the air changes, and on what your body does before you have decided anything. It is yours whether you stay or not.',
  },
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
