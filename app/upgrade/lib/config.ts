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

import lowCToHighCQuestions from '@/config/questions/low-c-to-high-c.json';
import lowCToHighCScoring from '@/config/scoring/low-c-to-high-c.json';
import lowCToHighCSuggestions from '@/config/suggestions/low-c-to-high-c.json';

import highCToDQuestions from '@/config/questions/high-c-to-d.json';
import highCToDScoring from '@/config/scoring/high-c-to-d.json';
import highCToDSuggestions from '@/config/suggestions/high-c-to-d.json';

import dToCCCQuestions from '@/config/questions/d-to-ccc.json';
import dToCCCScoring from '@/config/scoring/d-to-ccc.json';
import dToCCCSuggestions from '@/config/suggestions/d-to-ccc.json';

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
  'low-c-to-high-c': {
    questions: lowCToHighCQuestions as unknown as QuestionsConfig,
    scoring: lowCToHighCScoring as unknown as ScoringConfig,
    suggestions: lowCToHighCSuggestions as unknown as SuggestionsConfig,
  },
  'high-c-to-d': {
    questions: highCToDQuestions as unknown as QuestionsConfig,
    scoring: highCToDScoring as unknown as ScoringConfig,
    suggestions: highCToDSuggestions as unknown as SuggestionsConfig,
  },
  'd-to-ccc': {
    questions: dToCCCQuestions as unknown as QuestionsConfig,
    scoring: dToCCCScoring as unknown as ScoringConfig,
    suggestions: dToCCCSuggestions as unknown as SuggestionsConfig,
  },
};
