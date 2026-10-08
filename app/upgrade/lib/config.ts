// Typed, statically-imported config for every built step. Adding a new
// step later is 3 import lines + 1 map entry here, plus a registry
// entry in ladder.ts — not a rewrite of the engine, merge logic or UI.

import type { QuestionsConfig, ScoringConfig, StepConfig, SuggestionsConfig } from './types';

import aToLowBQuestions from '@/config/questions/a-to-low-b.json';
import aToLowBScoring from '@/config/scoring/a-to-low-b.json';
import aToLowBSuggestions from '@/config/suggestions/a-to-low-b.json';

import lowBToMidBQuestions from '@/config/questions/low-b-to-mid-b.json';
import lowBToMidBScoring from '@/config/scoring/low-b-to-mid-b.json';
import lowBToMidBSuggestions from '@/config/suggestions/low-b-to-mid-b.json';

import midBToHighBQuestions from '@/config/questions/mid-b-to-high-b.json';
import midBToHighBScoring from '@/config/scoring/mid-b-to-high-b.json';
import midBToHighBSuggestions from '@/config/suggestions/mid-b-to-high-b.json';

import highBToLowCQuestions from '@/config/questions/high-b-to-low-c.json';
import highBToLowCScoring from '@/config/scoring/high-b-to-low-c.json';
import highBToLowCSuggestions from '@/config/suggestions/high-b-to-low-c.json';

export const STEP_CONFIGS: Record<string, StepConfig> = {
  'a-to-low-b': {
    questions: aToLowBQuestions as unknown as QuestionsConfig,
    scoring: aToLowBScoring as unknown as ScoringConfig,
    suggestions: aToLowBSuggestions as unknown as SuggestionsConfig,
  },
  'low-b-to-mid-b': {
    questions: lowBToMidBQuestions as unknown as QuestionsConfig,
    scoring: lowBToMidBScoring as unknown as ScoringConfig,
    suggestions: lowBToMidBSuggestions as unknown as SuggestionsConfig,
  },
  'mid-b-to-high-b': {
    questions: midBToHighBQuestions as unknown as QuestionsConfig,
    scoring: midBToHighBScoring as unknown as ScoringConfig,
    suggestions: midBToHighBSuggestions as unknown as SuggestionsConfig,
  },
  'high-b-to-low-c': {
    questions: highBToLowCQuestions as unknown as QuestionsConfig,
    scoring: highBToLowCScoring as unknown as ScoringConfig,
    suggestions: highBToLowCSuggestions as unknown as SuggestionsConfig,
  },
};
