import { Destination } from '@/types/destination';

/**
 * Static typed seed — MVP stand-in for the `destinations` Supabase table in
 * the implementation plan. 10 destinations only, hand-curated for global
 * recognition + continent spread + verifiability.
 *
 * Source: XC Mag travel guides (xcmag.com/travel-guide), condensed and
 * paraphrased from the original long-form guides, cross-referenced against
 * real XContest flight-log stats where a confident site match exists
 * (see each entry's `xcStats.matchConfidence`). Long-form sections are
 * summarised, not copied verbatim — full attribution links back to the
 * source article on every detail page.
 *
 * Every field here maps 1:1 to a column in the plan's `destinations` schema.
 * A future migration to Supabase should only need to change how this array
 * is produced (a query instead of a literal), not how it's consumed.
 */
export const DESTINATIONS: Destination[] = [
  {
    slug: 'bir-india',
    name: 'Bir',
    country: 'India',
    countryCode: 'IN',
    continent: 'Asia',
    region: 'Himachal Pradesh',
    lat: 32.0459,
    lng: 76.7211,
    bestMonths: ['Mar', 'Apr', 'Sep', 'Oct', 'Nov', 'Dec'],
    seasonNotes:
      'Pre-monsoon (Mar–May) is stronger and higher but less reliable. Post-monsoon (Oct–Nov) is more stable and consistent.',
    whyGo: 'A choice of easy or committing mountain flying, with a dazzling array of ancient cultures.',
    vibeTags: ['himalayan', 'mountain', 'hike-and-fly', 'cultural', 'committing'],
    content: {
      whatsItLike:
        "Bir is a small Tibetan colony at the foot of the first ridge of the Himalayas — a ridge that runs almost 100km, offering a genuine out-and-return adventure on a half-decent day. Take-off is a beautiful grassy meadow 40 minutes from town by taxi. The main route runs west toward Dharamsala (50km), with a choice of soaring the higher back ridge or hopping spine to spine along the front, accompanied by circling vultures and a backdrop of glistening high peaks. Landing is often crowded with kids keen to pack your wing for a few rupees, then it's a two-minute stroll into town for a chai.",
      flyingConditions:
        "Classic mountain thermal flying on almost every spine, with cloudbase normally around 4,000m — though it can drop during the day as moister plains air is drawn in. The plains out front are stable and harder to fly. Heading northeast toward Manali offers spectacular but committing flying with difficult foot or mule retrieves.",
      gettingThere:
        'Fly SpiceJet from Delhi to Dharamsala (60 minutes), then taxi 90 minutes to Bir. Alternatively, bus from Delhi to Mandi (14 hours) and transfer locally, or train to Pathankot followed by a four-hour taxi or local bus.',
      whenToGo:
        'Pre-monsoon in March–May: stronger and higher, less reliable. Post-monsoon in October–November: more stable, very consistent.',
      hazards:
        "Overdevelopment has led to accidents here, including pilots going missing — treat big clouds with respect. Some rural hospitals are best avoided (the big cities have top-class facilities). Don't overfly the Dalai Lama's residence in Dharamsala or the Yol military base. Flying \"into the back\" is committing: gorges, long walkouts, and strong valley winds. Helicopter rescue is expensive and often unavailable — carry a satellite tracker and buddy up.",
    },
    scores: {
      xcPotential: 8.0,
      accessibility: 6.5,
      schoolAvailability: 8.5,
      safety: 5.0,
      scenery: 9.0,
      value: 8.5,
      weatherReliability: 7.0,
    },
    xcStats: {
      flightsPerYear: 613.4,
      avgPoints: 155,
      maxPoints: 409,
      totalFlights: 6747,
      pgForumThreadCount: 17,
      matchConfidence: 'high',
    },
    skillLevel: ['beginner', 'intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal', 'hike-and-fly'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-bir-india',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: true,
    curatorNotes:
      'High-confidence NOGA match (Bir Billing) — XC stats used directly to ground xcPotential and weatherReliability.',
  },
  {
    slug: 'annecy-france',
    name: 'Annecy',
    country: 'France',
    countryCode: 'FR',
    continent: 'Europe',
    region: 'Haute-Savoie',
    lat: 45.8992,
    lng: 6.1294,
    bestMonths: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    seasonNotes: 'Can run strong in spring, tends to mellow through midsummer as the area stabilises.',
    whyGo: 'Classic Alpine flying with everything made easy for you.',
    vibeTags: ['alpine', 'lake', 'beginner-friendly', 'gear-shopping', 'classic'],
    content: {
      whatsItLike:
        "Annecy sits on the north-west corner of the Alps, its 15km lake ringed by launches on both sides and continuous west-facing ridges that make for effortless XC routes. The main take-off faces west above the lake's southern end and starts working around 1:30pm; a simple soar north reaches the limestone pinnacle of Dents de Lanfon, from where pilots cross the lake, head into Annecy town, or push east toward Mont Blanc. To the west, Semnoz offers a 35km ridge run — arguably the easiest 70km out-and-return in the world. Land at the southern lakeside field, take a dip in Europe's cleanest lake, then browse two well-stocked paragliding shops.",
      flyingConditions:
        "Easy mountain thermal flying with a valley breeze setting up from the north-west every afternoon. Annecy can be strong in spring but tends to mellow by midsummer, when nearby Grand Bornand becomes the better option.",
      gettingThere: 'Geneva is the closest major international airport — train onward to Annecy, or hire a car.',
      whenToGo: 'April through October.',
      hazards:
        "A small airport sits in Annecy, and Chambéry's airspace touches the northern end of Semnoz. Cu-Nims to the north can send strong gusts down the lake — watch the water surface for warning signs.",
    },
    scores: {
      xcPotential: 8.0,
      accessibility: 9.0,
      schoolAvailability: 9.0,
      safety: 7.5,
      scenery: 9.0,
      value: 5.0,
      weatherReliability: 7.0,
    },
    xcStats: {
      flightsPerYear: null,
      avgPoints: null,
      maxPoints: null,
      totalFlights: null,
      pgForumThreadCount: 9,
      matchConfidence: 'low',
    },
    skillLevel: ['beginner', 'intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal', 'ridge'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-annecy-france',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: true,
    curatorNotes:
      'NOGA match (Sancy, medium confidence) is a different site entirely — XContest stats excluded from scoring; rubric grounded in guide text only.',
  },
  {
    slug: 'interlaken-switzerland',
    name: 'Interlaken',
    country: 'Switzerland',
    countryCode: 'CH',
    continent: 'Europe',
    region: 'Bernese Oberland',
    lat: 46.6863,
    lng: 7.8632,
    bestMonths: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    seasonNotes: 'Flyable all year, but best between March and October.',
    whyGo:
      "Some of the world's best pilots are based here. Excellent infrastructure, take-offs easily accessible, landing right in the centre of town, with amazing Alpine views.",
    vibeTags: ['alpine', 'iconic', 'tandem-hub', 'high-infrastructure', 'glacier-views'],
    content: {
      whatsItLike:
        "Home to generations of paragliding champions — Chrigel Maurer, Andy Aebi, Stefan Wyss among them — Interlaken sits in the Bernese Oberland beneath the Eiger, Mönch and Jungfrau. Fifteen launches serve pilots of every level: big mountain thermals around the Schilthorn or Grindelwald on stable summer days, or easy, light-thermal soaring from Amisbühl, the Niederhorn, or an evening flight from Schynige Platte. A huge grassy landing field sits in the centre of town, reachable from all 15 take-offs.",
      flyingConditions:
        'Everything from powerful high-mountain flights to low-level soaring above the lake. Protected from strong wind by the surrounding high mountains, Interlaken is flyable on roughly 300 days a year — the stronger the forecast wind, the lower the take-off to choose.',
      gettingThere: 'Fly to Zürich or Basel, then train to Interlaken (about two hours, changing at Bern).',
      whenToGo: 'Flyable year-round; best between March and October.',
      hazards:
        'Stop flying when there is more than 5 HPa of pressure difference across the Alps — the Föhn wind arrives late here but can still reach the ground. Lake Thun is open to the north-west, so wind from that direction can blow out the site (rare). The rescue helicopter base at Wilderswil airfield should be avoided as a landing spot, and the Amisbühl launch gets crowded with tandem operators.',
    },
    scores: {
      xcPotential: 7.5,
      accessibility: 8.5,
      schoolAvailability: 8.5,
      safety: 7.5,
      scenery: 9.5,
      value: 3.5,
      weatherReliability: 9.0,
    },
    xcStats: {
      flightsPerYear: null,
      avgPoints: null,
      maxPoints: null,
      totalFlights: null,
      pgForumThreadCount: 3,
      matchConfidence: 'medium',
    },
    skillLevel: ['beginner', 'intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal', 'ridge'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-interlaken-switzerland',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: true,
    curatorNotes:
      'NOGA match (Winteregg, medium confidence) is a nearby but distinct site — XContest stats excluded from scoring; "~300 flyable days/year" from guide text drives the weatherReliability score. Value scored low: Switzerland is consistently the most expensive of the 10.',
  },
  {
    slug: 'oludeniz-turkey',
    name: 'Ölüdeniz',
    country: 'Turkey',
    countryCode: 'TR',
    continent: 'Europe',
    region: 'Muğla Province, Turquoise Coast',
    lat: 36.5527,
    lng: 29.1417,
    bestMonths: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    seasonNotes: 'July–August are hot and stable; September–October are dry and reliable.',
    whyGo: 'Wring the living daylights out of your wing, land on the beach, then do it again.',
    vibeTags: ['coastal', 'acro-siv', 'tandem-hub', 'beach-landing', 'resort'],
    content: {
      whatsItLike:
        "Set on a Mediterranean cove in south-west Turkey, Ölüdeniz pairs a full tourist-resort infrastructure with a 1,900m mountain, Babadağ, rising straight from the sea. Four paved launches (1,200m, 1,700m, 1,800m, 1,900m) serve every wind direction and conditions level, reached by cablecar to restaurant terraces overlooking the valley. The main landing runs along the promenade — solo pilots land in front of Cloud 9, staying clear of tandem traffic on the main street.",
      flyingConditions:
        'Lift forms above the spineback ridge and in the house thermal beside the 1,700m launch, with light winds and cloudbase 2,500–3,500m typical. Serious cross country is genuinely difficult here — it needs at least 3,000m AMSL or 1,000m above Babadağ — and this is fundamentally a soaring, acro and SIV site rather than an XC destination. May, June and October give the best chance of a run toward Kemer Valley or Kaş.',
      gettingThere:
        'Dalaman is the nearest airport, about an hour by transfer. Alternatively, bus to Fethiye then a local minibus (dolmuş) to Ölüdeniz.',
      whenToGo: 'April to November; midsummer is stable, September–October dry and reliable.',
      hazards:
        'No major airspace conflicts, but Dalaman CTZ sits north of Fethiye. Watch for wind shifting to come up both sides of the ridge at once, and don\'t follow tandem pilots into the lee blindly. Launches are tightly regulated following crowding and past accidents — they close before sunset and when conditions turn tricky.',
    },
    scores: {
      xcPotential: 4.5,
      accessibility: 8.5,
      schoolAvailability: 9.5,
      safety: 6.0,
      scenery: 8.5,
      value: 6.0,
      weatherReliability: 8.0,
    },
    xcStats: {
      flightsPerYear: null,
      avgPoints: null,
      maxPoints: null,
      totalFlights: null,
      pgForumThreadCount: 2,
      matchConfidence: 'low',
    },
    skillLevel: ['beginner', 'intermediate'],
    flyingTypes: ['acro', 'ridge', 'coastal'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-oludeniz-turkey',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: true,
    curatorNotes:
      'NOGA match (Cokelez, low confidence) excluded from scoring. Guide text is explicit that big XCs are "difficult" here — xcPotential scored low deliberately despite the site\'s fame; it sells on acro/SIV/tandem volume and reliability, not distance.',
  },
  {
    slug: 'pokhara-nepal',
    name: 'Pokhara',
    country: 'Nepal',
    countryCode: 'NP',
    continent: 'Asia',
    region: 'Gandaki Province',
    lat: 28.2096,
    lng: 83.9856,
    bestMonths: ['Mar', 'Apr', 'Sep', 'Oct', 'Nov', 'Dec'],
    seasonNotes: 'October–November for cloud flying in shorts and T-shirts; March–April for big air and XC.',
    whyGo: 'Perfect for northern-latitude migrants escaping from the winter blues.',
    vibeTags: ['himalayan', 'budget', 'laid-back', 'high-altitude', 'scenic'],
    content: {
      whatsItLike:
        "A hippie hangout since the 1970s, Pokhara still runs on that laid-back current while offering serious mountain flying beneath the fishtail peak of Machapuchare (6,993m). Sarangkot (1,500m) is the most accessible launch, 20 minutes from Lakeside, catching light thermic breezes from as early as 9am with three clear landing zones. Dickie Danda, 40 minutes north, is the go-to XC site once the day has heated up. Korchon (3,100m), a day's walk north, is the site every pilot here should fly once — either an early glide down to the valley floor or, for the high-altitude inclined, a boost above 5,000m.",
      flyingConditions:
        'September to December is easy and suited to all levels (2–3m/s climbs). January to May picks up, and spring mountain thermals (February–April) are genuinely strong, as expected in the Himalayas. Being closer to the equator than the Alps, days are short: flying typically runs 10am–3:30pm.',
      gettingThere:
        "Kathmandu is Nepal's only international airport, with connections from Delhi, Bangkok and Europe. Pokhara is a 25-minute flight from Kathmandu, or 5–7 hours by bus or taxi.",
      whenToGo: 'October–November for relaxed cloud flying; March–April for big air and cross country.',
      hazards:
        "Bureaucracy — Nepal has plenty of it. No-fly zones sit south and south-east of Sarangkot due to airport proximity, and crossing the lake is prohibited as it's on the flight path. Rotor along the Sarangkot ridge is an issue only on the rare spring days when valley winds pick up.",
    },
    scores: {
      xcPotential: 7.0,
      accessibility: 6.0,
      schoolAvailability: 6.0,
      safety: 6.0,
      scenery: 9.5,
      value: 9.0,
      weatherReliability: 7.5,
    },
    xcStats: {
      flightsPerYear: null,
      avgPoints: null,
      maxPoints: null,
      totalFlights: null,
      pgForumThreadCount: 3,
      matchConfidence: 'medium',
    },
    skillLevel: ['beginner', 'intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-pokhara-nepal',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: false,
    curatorNotes:
      'NOGA match (Dharan, medium confidence) is a different Nepali site — XContest stats excluded from scoring; rubric grounded in guide text. Scenery scored highest of the 10 — direct sightlines to three 8,000m peaks.',
  },
  {
    slug: 'valle-de-bravo-mexico',
    name: 'Valle de Bravo',
    country: 'Mexico',
    countryCode: 'MX',
    continent: 'North America',
    region: 'State of Mexico',
    lat: 19.1947,
    lng: -100.1358,
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Nov', 'Dec'],
    seasonNotes: 'November–February for paragliders; into March for hang gliders.',
    whyGo: "Here, if anywhere, you're guaranteed top-quality flying.",
    vibeTags: ['convergence', 'competition-venue', 'lakeside', 'consistent', 'mountain'],
    content: {
      whatsItLike:
        "A picturesque lakeside town west of Mexico City, Valle de Bravo draws pilots and Mexico City's weekend elite alike from December to March, when the weather turns amazingly consistent. El Peñón, the main launch, is 45 minutes from town and starts working by 11am; the valley reliably cools toward evening, rewarding patient pilots with glorious glass-offs. La Torre, a ridge-soaring site above the lakeside landing zone, needs only 12km/h of westerly wind and flies most afternoons. Valle has hosted many top-tier international competitions for good reason.",
      flyingConditions:
        'A bit of everything in a single day: pumping mountain thermals give way to classic plateau convergence flying and flatland crossings, ending at a lakeside landing zone close to the town centre.',
      gettingThere:
        'Toluca is the nearest airport, a short taxi from Valle. Mexico City is roughly 90 minutes further, with daily buses from the central terminal, or arrange a pickup from a local operator.',
      whenToGo: 'November–February for paragliders; January–March for hang gliders.',
      hazards:
        'Launch can blow out once midday heat overwhelms the valley floor — avoid the saddle behind El Peñón entirely. Many fields hide power lines, and the house thermals (the "G-spot" and the "Crazy Thermal Place") get crowded. Pilots must register at clubpenon.org before flying.',
    },
    scores: {
      xcPotential: 8.5,
      accessibility: 6.5,
      schoolAvailability: 8.5,
      safety: 7.0,
      scenery: 8.0,
      value: 6.0,
      weatherReliability: 9.0,
    },
    xcStats: {
      flightsPerYear: null,
      avgPoints: null,
      maxPoints: null,
      totalFlights: null,
      pgForumThreadCount: 8,
      matchConfidence: 'low',
    },
    skillLevel: ['intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-valle-de-bravo-mexico',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: true,
    curatorNotes:
      'Continent corrected to North America per Grant\'s brief — source enrichment data mistakenly tagged this South America. NOGA match (Allende, low confidence) excluded from scoring; guide text ("most consistent flying site in the world", repeated world-class competition hosting) drives xcPotential and weatherReliability.',
  },
  {
    slug: 'roldanillo-colombia',
    name: 'Roldanillo',
    country: 'Colombia',
    countryCode: 'CO',
    continent: 'South America',
    region: 'Valle del Cauca',
    lat: 4.4142,
    lng: -76.1547,
    bestMonths: ['Jan', 'Feb', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    seasonNotes: 'Summer season is best, but even in the rainy season roughly 60% of days are flyable.',
    whyGo: 'Consistent flying with friendly thermals and even friendlier people.',
    vibeTags: ['flatland', 'competition-venue', 'tropical', 'consistent', 'beginner-friendly'],
    content: {
      whatsItLike:
        "Colombia's flying capital has hosted the Paragliding World Cup Superfinal and the FAI Paragliding World Championships, on the strength of super-reliable trade-wind conditions. The agricultural Valle del Cauca, with its unfenced farmland and dense road network, makes retrieves easy across a huge, go-anywhere flying arena. Three launches — Los Tanques (the highest, known as the Competition Launch), La Tulia and Pico — are served by shared jeeps leaving the town square each morning from about 8:45am.",
      flyingConditions:
        'Take-offs sit above town facing east across the wide-open valley. Pilots launch early on east-facing slopes, then as the flatlands begin working around 1pm, hop across to west-facing mountains on the far side, riding the day out ahead of the advancing Pacific sea breeze. Winds are typically light; thermals are gentle, though recent years have brought slightly stronger conditions than Rolda\'s "wafting thermal" reputation suggests.',
      gettingThere:
        'A 60-minute flight from Bogotá reaches the regional airports of Pereira or Armenia, each a 90-minute taxi from Roldanillo. Cali International is 90 minutes by taxi or two hours by bus.',
      whenToGo: 'December–March and July–September; even the rainy season sees roughly 60% flyable days.',
      hazards:
        'Launching with a backwind before the upslope breeze establishes causes accidents most years — wait for it. The advancing Pacific sea breeze brings turbulent air across the valley in the afternoon. Power lines sit below launch, and airspace ceilings apply (9,000ft south-east, 10,000ft north). Avoid the sugarcane-field fires — the air above them is rough, not a reliable thermal marker.',
    },
    scores: {
      xcPotential: 9.0,
      accessibility: 6.0,
      schoolAvailability: 7.5,
      safety: 7.0,
      scenery: 7.0,
      value: 8.5,
      weatherReliability: 8.5,
    },
    xcStats: {
      flightsPerYear: 1056.6,
      avgPoints: 143,
      maxPoints: 379,
      totalFlights: 11623,
      pgForumThreadCount: 5,
      matchConfidence: 'high',
    },
    skillLevel: ['beginner', 'intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-roldanillo-colombia',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: true,
    curatorNotes:
      'High-confidence NOGA match — the highest average XC flights/year (1,056) of all 10 seed destinations, used directly to ground xcPotential and weatherReliability.',
  },
  {
    slug: 'governador-valadares-brazil',
    name: 'Governador Valadares',
    country: 'Brazil',
    countryCode: 'BR',
    continent: 'South America',
    region: 'Minas Gerais',
    lat: -18.8511,
    lng: -41.9494,
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    seasonNotes: 'Conditions strengthen through the year, peaking August–September when climbs can reach 8m/s.',
    whyGo: 'Fly in shorts and T-shirt at cloudbase, in smooth thermals over beautiful country.',
    vibeTags: ['flatland', 'thermal-training', 'tropical', 'coring-practice', 'warm'],
    content: {
      whatsItLike:
        "Pico do Ibituruna (911m) is the only take-off in GV, but it's a superbly equipped one — large grassy launch slopes on both sides of the summit ridge, a cobbled connecting road, two cafés, and a club bus running from town. It's a genuinely good place to sharpen coring skills and speed-to-fly, flying alongside other free-flyers or in friendly local competitions over a rolling green landscape that extends as far as the eye can see.",
      flyingConditions:
        "Thermals are light and often form in the same places — the skill here is getting the cycles right. A typical day means arriving at launch around 11am, taking off from noon to 1pm.",
      gettingThere:
        'GV has a small airport with flights to Belo Horizonte and onward connections to Rio and São Paulo. Overnight buses from the big cities are the cheap, comfortable option, arriving into town early morning.',
      whenToGo:
        'January–April for the best smooth, reliable conditions; days get stronger through the year, peaking August–September.',
      hazards:
        "An airport sits west-south-west of town — don't fly over the river except to land in the official field (Vila Dapas), and even then stay below 300m and never over the town itself. Avoid scratching low in front or in the steep valleys leading to the main cliff face.",
    },
    scores: {
      xcPotential: 6.5,
      accessibility: 5.5,
      schoolAvailability: 6.5,
      safety: 6.5,
      scenery: 6.5,
      value: 7.5,
      weatherReliability: 7.5,
    },
    xcStats: {
      flightsPerYear: 38.9,
      avgPoints: 122,
      maxPoints: 260,
      totalFlights: 428,
      pgForumThreadCount: 2,
      matchConfidence: 'high',
    },
    skillLevel: ['intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-governador-valadares-brazil',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: false,
    curatorNotes:
      'High-confidence NOGA match — moderate but real XC volume (428 logged flights). Scored as a solid skill-building destination rather than a record-chasing one; guide frames it around coring practice, not distance.',
  },
  {
    slug: 'manilla-australia',
    name: 'Manilla',
    country: 'Australia',
    countryCode: 'AU',
    continent: 'Australasia',
    region: 'New South Wales',
    lat: -30.75,
    lng: 150.7333,
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Sep', 'Oct', 'Nov', 'Dec'],
    seasonNotes: 'October–November and January–April are the most consistent windows for weather.',
    whyGo: 'Pilots come here to break their personal bests, and most go home happy.',
    vibeTags: ['flatland', 'record-setting', 'big-air', 'reliable', 'xc-focused'],
    content: {
      whatsItLike:
        "A classic small Aussie country town with a handful of pubs, 12km from Australia's premier flying site: Mount Borah, purpose-developed for the 2007 PG Worlds. Local guru and site owner Godfrey Wenness broke the world distance record from here with a 335km flight in 1998, and personal bests get shattered here on an average week. Four astroturfed launches, walkable from one another, cover every wind direction, with easy two-wheel-drive access and safe top-landing on the flat, 2km-square mountaintop.",
      flyingConditions:
        'Ridge soaring runs all day, often into late evening, over a mix of flatlands and low hills — smoother than alpine or desert thermals. A good average day sees 3–5m/s climbs to 3,500m, over ground that sits around 300m ASL.',
      gettingThere:
        'Tamworth airport connects to Sydney and Brisbane. A CountryLink bus runs daily from Sydney; otherwise it\'s a five-hour drive from Sydney or seven from Brisbane.',
      whenToGo: 'October–April for 100km+ XC; October–November and January–April are the most consistent windows.',
      hazards:
        'A 16km controlled airspace zone sits around Tamworth airport, 60km south. Compression can build 30km east on the tablelands in strong westerlies, and "blue holes" on otherwise good XC days mean it\'s easy to sink out unexpectedly.',
    },
    scores: {
      xcPotential: 9.0,
      accessibility: 5.5,
      schoolAvailability: 7.5,
      safety: 8.0,
      scenery: 6.0,
      value: 7.0,
      weatherReliability: 8.5,
    },
    xcStats: {
      flightsPerYear: 190.6,
      avgPoints: 150,
      maxPoints: 436,
      totalFlights: 2097,
      pgForumThreadCount: 3,
      matchConfidence: 'high',
    },
    skillLevel: ['beginner', 'intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal', 'ridge'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-manilla-australia',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: true,
    curatorNotes:
      'High-confidence NOGA match — highest max points logged (436) of the 10, consistent with its world-record history. xcPotential and weatherReliability scored top-tier on real XContest data.',
  },
  {
    slug: 'porterville-south-africa',
    name: 'Porterville and Wilderness',
    country: 'South Africa',
    countryCode: 'ZA',
    continent: 'Africa',
    region: 'Western Cape',
    lat: -32.9117,
    lng: 19.0181,
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Nov', 'Dec'],
    seasonNotes:
      'Porterville: November–March for XC. Wilderness: November–mid-April; avoid mid-December to early January when it gets crowded.',
    whyGo: 'Not only the theatre of XC dreams, but mountain and beach flying too.',
    vibeTags: ['flatland', 'desert', 'coastal', 'dual-site', 'record-setting'],
    content: {
      whatsItLike:
        "South Africa has held more XC records than any other country, and Porterville is arguably its best-known free-flying site. The main launch at Dasklip Pass sets up a 100km west-facing escarpment for relatively easy out-and-returns, with flat plains running 80km to the coast out front and wild, committing terrain behind. A second launch, Pampoenfontein, sits 200m higher, 3km away. Five hours south-east, Wilderness offers a completely different reward: sublime coastal soaring along the Garden Route, with 15 sites within easy reach and dolphins and whales visible from the air.",
      flyingConditions:
        'Porterville: strong South African desert flatland and ridge flying, mostly blue thermals, launched from Dasklip Pass. Wilderness: mellow coastal soaring looking out over the ocean, landing on the beach.',
      gettingThere: 'Both sites are best reached from Cape Town — Porterville two hours away, Wilderness five.',
      whenToGo:
        'Porterville: November–March for the best XC conditions. Wilderness: November–mid-April, avoiding the crowded mid-December to early-January window.',
      hazards:
        "Porterville: bombing out in genuinely remote country, with an air force training area to the west. Wilderness: an airspace ceiling of 465m ASL applies to most take-offs, and the main risk is simply staying too long at the bar.",
    },
    scores: {
      xcPotential: 7.5,
      accessibility: 5.0,
      schoolAvailability: 7.0,
      safety: 6.5,
      scenery: 8.0,
      value: 7.5,
      weatherReliability: 7.5,
    },
    xcStats: {
      flightsPerYear: 45.6,
      avgPoints: 134,
      maxPoints: 284,
      totalFlights: 502,
      pgForumThreadCount: 0,
      matchConfidence: 'high',
    },
    skillLevel: ['beginner', 'intermediate', 'advanced'],
    flyingTypes: ['xc', 'thermal', 'ridge', 'coastal'],
    sourceUrl: 'https://xcmag.com/travel-guide/guide-to-porterville-and-wilderness-south-africa',
    sourceName: 'XC Mag',
    status: 'published',
    isFeatured: false,
    curatorNotes:
      'High-confidence NOGA match for Porterville. This is a dual-site guide (Porterville desert XC + Wilderness coastal soaring) — scores reflect the pair, weighted toward Porterville\'s XC record but softened by Wilderness\'s more relaxed, lower-XC-ceiling profile. Zero pgforum threads despite real XC volume — likely thin forum coverage for South Africa rather than low popularity.',
  },
];
