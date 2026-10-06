// Types mirroring config/questions|scoring|suggestions/<step>.json.
// No React/Next imports here on purpose — this file (and scoreEngine.ts,
// selectSuggestions.ts) must be importable by scripts/check-personas.ts
// as plain Node/TS, outside of Next's build.

export type Category = 'skills' | 'psychological';
export type Priority = 'core' | 'secondary' | 'optional';
export type Recommendation = 'ready' | 'nearly_ready' | 'not_yet';

export type Answers = Record<string, string | string[]>;

// ---- ladder / multi-step chaining ----

export type LadderRung = 'A' | 'low-B' | 'mid-B' | 'high-B' | 'low-C' | 'high-C' | 'D' | 'CCC';

export interface StepConfig {
  questions: QuestionsConfig;
  scoring: ScoringConfig;
  suggestions: SuggestionsConfig;
}

// One leg's complete result, used to build a chain summary.
export interface ChainLegResult {
  stepId: string;
  from: LadderRung;
  to: LadderRung;
  answers: Answers;
  result: ScoreResult;
}

// ---- questions config ----

export interface QuestionOption {
  id: string;
  label: string;
}

export interface QuestionDef {
  id: string;
  category: Category;
  priority: Priority;
  type: 'single' | 'multi';
  ordered: boolean;
  optional?: boolean;
  scored?: boolean;
  text: string;
  help?: string;
  options: QuestionOption[];
}

export interface SectionDef {
  id: string;
  title: string;
  questions: string[];
}

export interface QuestionsConfig {
  step: string;
  version: number;
  meta: {
    label: string;
    pilot_facing_title: string;
    estimated_minutes: number;
    intro: string;
    category_labels: Record<Category, string>;
    design_notes: string[];
  };
  sections: SectionDef[];
  questions: QuestionDef[];
}

// ---- scoring config ----

// A leaf or combinator condition, used by gates, exemptions and
// (via the same shape) suggestion triggers. Only one key is ever set.
export interface Condition {
  question?: string;
  answer_in?: string[];
  answer_includes_any?: string[];
  category_below?: { category: Category; value: number };
  intended_flying_context?: 'local_only' | 'exposure_bound';
  recommendation_in?: Recommendation[];
  all_of?: Condition[];
  any_of?: Condition[];
}

export interface Gate {
  id: string;
  cap: 'not_yet';
  when: Condition;
  message: string;
}

export interface Exemption {
  id: string;
  exempts: string; // "question:answerId"
  when: Condition;
  effect: string;
}

export interface ScoringQuestion {
  category: Category;
  weight: number;
  options: Record<string, number>; // optionId -> 0..1 score
}

export interface Bonus {
  id: string;
  question: string;
  points: Record<string, number>;
  max_total_bonus: number;
  never_negative: boolean;
  applies_to: 'total';
}

export interface ScoringConfig {
  step: string;
  version: number;
  intended_flying_context: {
    profiles: {
      exposure_bound: { ambitions_includes_any: string[] };
      local_only: {
        requires_all: [{ ambitions_includes_any: string[] }, { ambitions_includes_none_of: string[] }];
      };
    };
  };
  categories: Record<Category, { label: string; weight: number }>;
  questions: Record<string, ScoringQuestion>;
  bonuses: Bonus[];
  thresholds: {
    ready: {
      total_min: number;
      category_floors: Record<Category, number>;
      on_floor_failure: 'nearly_ready';
      critical_check_floor: {
        min_answer_score: number;
        questions: string[];
        on_failure: 'nearly_ready';
      };
      unevidenced_core_checks: {
        answers: string[]; // "question:answerId"
        on_match: 'nearly_ready';
        exemptions: Exemption[];
      };
    };
    nearly_ready: { total_min: number };
    not_yet: {
      total_max: number;
      category_floors: Record<Category, number>;
    };
  };
  gates: Gate[];
  gate_behaviour: {
    max_gate_reasons_shown: number;
  };
  // Pilot-safe copy for the threshold rules, mirroring gate.message.
  // `by_rule` is keyed by the exact string the engine puts in
  // ScoreResult.firedRules ("critical_check_floor:ground_handling_kiting",
  // "ready_category_floor:psychological", "conservative_backstop").
  // `fallback_by_rule_id` is keyed by the part before the colon and is
  // only hit when a rule gains a question/answer without per-case copy.
  // See config/scoring/<step>.json rule_messages.lookup.
  rule_messages: {
    display: { max_rule_reasons_shown: number };
    by_rule: Record<string, { message: string }>;
    fallback_by_rule_id: Record<string, { message?: string }>;
  };
  always_output: {
    instructor_recommendation: string;
    disclaimer: string;
    methodology_note: string;
  };
}

// ---- suggestions config ----

export interface Suggestion {
  id: string;
  topic: string;
  priority: number;
  always?: boolean;
  trigger?: Condition;
  title: string;
  body: string;
}

export interface SuggestionsConfig {
  step: string;
  version: number;
  meta: {
    selection: { min_shown: number; max_shown: number };
  };
  suggestions: Suggestion[];
}

// ---- scoring engine result ----

export interface GateHit {
  id: string;
  message: string;
}

export interface ScoreResult {
  skillsScore: number; // 0-100, unrounded
  psychScore: number; // 0-100, unrounded
  total: number; // 0-100, unrounded, includes bonus, pre-gate
  bonus: number;
  recommendation: Recommendation;
  firedGates: GateHit[]; // FULL fired-gate list, uncapped — caller applies max_gate_reasons_shown at display time
  firedRules: string[]; // e.g. "critical_check_floor", "unevidenced_core_checks:rough_air_awareness"
  exemptions: string[]; // exemption ids that suppressed a rule
}

// ---- personas (for scripts/check-personas.ts) ----

export interface PersonaExpected {
  recommendation: Recommendation;
  total_score_range: [number, number];
  category_score_ranges: Record<Category, [number, number]>;
  gates_expected: string[];
  rules_expected: string[];
  exemptions_expected?: string[];
  suggestions_must_include?: string[];
  suggestions_must_not_include?: string[];
}

export interface Persona {
  step: string;
  id: string;
  name: string;
  answers: Answers;
  expected: PersonaExpected;
}
