/**
 * Destination directory — shared types.
 *
 * This shape is deliberately faithful to the Postgres schema in
 * `00 Mission Control/Grant's Inbox/2026-05-06_fly100-directory-implementation-plan.md`
 * so a later Supabase migration is a drop-in: rename this interface's fields
 * to match `destinations` columns 1:1 and swap `lib/destinations/seed.ts`
 * for a Supabase query. Nothing about the component layer should need to change.
 */

/** The six continent groupings used for filtering. Validated app-side, not DB-enforced. */
export type Continent =
  | 'Europe'
  | 'Asia'
  | 'Africa'
  | 'North America'
  | 'South America'
  | 'Australasia';

/** Three-letter month abbreviations, matching the source data's month ranges. */
export type MonthAbbr =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export type FlyingType = 'xc' | 'thermal' | 'ridge' | 'coastal' | 'acro' | 'hike-and-fly';

/**
 * The 7 scoring dimensions from the plan. Each is 0-10, one decimal place.
 * `null` means "not yet scored" — the UI should render "—", never fabricate a number.
 */
export interface DestinationScores {
  xcPotential: number | null;
  accessibility: number | null;
  schoolAvailability: number | null;
  safety: number | null;
  scenery: number | null;
  value: number | null;
  weatherReliability: number | null;
}

/** Which score dimensions the free tier is allowed to sort by. Wingmates unlocks the rest. */
export type SortableScoreKey = keyof DestinationScores | 'overall';

/**
 * Real XContest-derived stats from the enrichment pass, when a confident site
 * match exists. Grounds the XC Potential / Weather Reliability scores instead
 * of pure LLM guessing. `null` fields mean the match was too uncertain to trust
 * for scoring (see `statsConfidence`).
 */
export interface DestinationXcStats {
  flightsPerYear: number | null;
  avgPoints: number | null;
  maxPoints: number | null;
  totalFlights: number | null;
  pgForumThreadCount: number | null;
  /**
   * Confidence of the underlying NOGA site match in the enrichment data.
   * 'high' | 'medium' scores were used to ground the scoring rubric directly.
   * 'low' or 'unmatched' means the stats exist but were treated as noise —
   * scoring for that destination leans on the XC Mag guide text instead.
   */
  matchConfidence: 'high' | 'medium' | 'low' | 'unmatched';
}

/** Long-form markdown sections. Free tier sees a teaser of `whatsItLike`; the rest is gated. */
export interface DestinationContent {
  whatsItLike: string;
  flyingConditions: string;
  gettingThere: string;
  whenToGo: string;
  hazards: string;
}

export interface Destination {
  // identity
  slug: string; // "bir-india" — cleaned, no "guide-to-" prefix
  name: string; // "Bir"
  country: string; // "India"
  countryCode: string; // ISO-2, "IN" — for flag lookup
  continent: Continent;
  region: string | null; // "Himachal Pradesh"

  // geography
  lat: number | null;
  lng: number | null;

  // timing
  bestMonths: MonthAbbr[];
  seasonNotes: string | null;

  // one-liners (free tier surface)
  whyGo: string;
  vibeTags: string[];

  // long-form (gated to Wingmates, except a teaser of whatsItLike)
  content: DestinationContent;

  // scoring
  scores: DestinationScores;

  // grounding data
  xcStats: DestinationXcStats;

  // skill / type filters
  skillLevel: SkillLevel[];
  flyingTypes: FlyingType[];

  // source provenance
  sourceUrl: string;
  sourceName: string; // 'XC Mag'

  // editorial
  status: 'draft' | 'published';
  isFeatured: boolean;
  curatorNotes: string | null;
}
