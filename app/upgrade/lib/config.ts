// Typed, statically-imported config for the one step this route serves.
// Adding a new step later is a data change (new JSON files + an entry
// here), not a rewrite of the engine or the UI.

import type { QuestionsConfig, ScoringConfig, SuggestionsConfig } from './types';
import aToLowBQuestions from '@/config/questions/a-to-low-b.json';
import aToLowBScoring from '@/config/scoring/a-to-low-b.json';
import aToLowBSuggestions from '@/config/suggestions/a-to-low-b.json';

export const CURRENT_STEP = 'a-to-low-b' as const;

export const questionsConfig = aToLowBQuestions as unknown as QuestionsConfig;
export const scoringConfig = aToLowBScoring as unknown as ScoringConfig;
export const suggestionsConfig = aToLowBSuggestions as unknown as SuggestionsConfig;
