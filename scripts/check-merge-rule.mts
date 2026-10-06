// Regression test for the exact trap BRIEF.md's "Multi-step jumps"
// section records: question ids repeat across steps with different
// answer bands, so the chain merge must never dedupe on id alone.
//
// This asserts, for the one chain that exists today (a-to-low-b ->
// low-b-to-mid-b), that the set of questions actually merged matches
// a hand-verified list, and that every known same-id-different-bands
// question is NOT merged.
//
// Run with: node --experimental-strip-types scripts/check-merge-rule.mts

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { mergeQuestionsAcrossChain } from '../app/upgrade/lib/mergeQuestions.ts';
import type { QuestionsConfig, ScoringConfig, StepConfig, SuggestionsConfig } from '../app/upgrade/lib/types.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function readJson<T>(relPath: string): T {
  return JSON.parse(readFileSync(path.join(ROOT, relPath), 'utf-8')) as T;
}

function loadStep(stepId: string): StepConfig {
  return {
    questions: readJson<QuestionsConfig>(`config/questions/${stepId}.json`),
    scoring: readJson<ScoringConfig>(`config/scoring/${stepId}.json`),
    suggestions: readJson<SuggestionsConfig>(`config/suggestions/${stepId}.json`),
  };
}

const stepConfigs: Record<string, StepConfig> = {
  'a-to-low-b': loadStep('a-to-low-b'),
  'low-b-to-mid-b': loadStep('low-b-to-mid-b'),
};

const merged = mergeQuestionsAcrossChain(['a-to-low-b', 'low-b-to-mid-b'], stepConfigs);

// Hand-verified (scripts/check-merge-rule.mts investigation, 2026-10-06):
// exactly these 7 ids have byte-identical id+text+options across both
// steps and must be merged (asked once, answer reused for both legs).
const EXPECTED_MERGED_IDS = [
  'decline_to_fly',
  'flying_frequency',
  'ground_handling_practice',
  'incidents_12m',
  'manoeuvre_course',
  'peer_pressure',
  'response_when_rough',
].sort();

// These share an id across both steps but have DIFFERENT answer bands
// (or, for external_feedback/reserve_familiarity, different wording
// despite identical options) and must never be merged.
const MUST_NOT_MERGE_IDS = [
  'total_airtime',
  'total_flights',
  'airtime_last_12m',
  'training_status',
  'ground_handling_kiting',
  'launch_reliability',
  'conditions_flown',
  'speed_bar',
  'collapse_experience',
  'upgrade_motivation',
  'wing_expectation',
  'learning_curve_willingness',
  'ambitions',
  'external_feedback',
  'reserve_familiarity',
];

let failures = 0;

const actuallyMergedIds = merged.filter((item) => item.alsoAnswersForSteps.length > 0).map((item) => item.question.id).sort();

if (JSON.stringify(actuallyMergedIds) !== JSON.stringify(EXPECTED_MERGED_IDS)) {
  failures++;
  console.log('FAIL  merged-id set changed');
  console.log(`        got:      [${actuallyMergedIds.join(', ')}]`);
  console.log(`        expected: [${EXPECTED_MERGED_IDS.join(', ')}]`);
} else {
  console.log(`PASS  merged-id set is exactly the 7 hand-verified safe ids`);
}

for (const id of MUST_NOT_MERGE_IDS) {
  const occurrences = merged.filter((item) => item.question.id === id);
  const anyMerged = occurrences.some((item) => item.alsoAnswersForSteps.length > 0);
  if (anyMerged) {
    failures++;
    console.log(`FAIL  "${id}" was merged despite different bands/wording between steps`);
  }
}
if (failures === 0) {
  console.log(`PASS  none of the ${MUST_NOT_MERGE_IDS.length} known different-banded ids were merged`);
}

// Sanity: total flat question count should be 28 + 30 - 7 = 51.
const expectedTotal = stepConfigs['a-to-low-b'].questions.questions.length + stepConfigs['low-b-to-mid-b'].questions.questions.length - EXPECTED_MERGED_IDS.length;
if (merged.length !== expectedTotal) {
  failures++;
  console.log(`FAIL  merged list length: got ${merged.length}, expected ${expectedTotal}`);
} else {
  console.log(`PASS  merged list length is ${merged.length} (28 + 30 - 7 deduped)`);
}

console.log(failures === 0 ? '\nAll merge-rule checks passed.' : `\n${failures} merge-rule check(s) failed.`);
if (failures > 0) process.exit(1);
