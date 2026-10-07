// Regression test for the exact trap BRIEF.md's "Multi-step jumps"
// section records: question ids repeat across steps with different
// answer bands, so the chain merge must never dedupe on id alone.
//
// Checks every adjacent step pair that exists today: for each, that
// the set of questions actually merged matches a hand-verified list,
// and that every known same-id-different-bands question is NOT
// merged.
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

interface ChainCheck {
  label: string;
  chain: [string, string];
  // Hand-verified (and, for each addition, independently re-derived
  // from the actual question files, not copy-pasted from an agent's
  // report): ids that are byte-identical (id+text+option ids+option
  // labels) across both steps and must merge.
  expectedMergedIds: string[];
  // Shared ids that must NEVER merge, because the bands, wording, or
  // option labels genuinely differ between the two steps.
  mustNotMergeIds: string[];
}

const CHAINS: ChainCheck[] = [
  {
    label: 'a-to-low-b -> low-b-to-mid-b',
    chain: ['a-to-low-b', 'low-b-to-mid-b'],
    // Updated 2026-10-06: (a) step-4 review tightened sameQuestion() to
    // also compare option labels, which correctly dropped
    // ground_handling_practice (its "rarely" option reads "Once or
    // twice ever" at A->low-B vs "Hardly ever" at low-B->mid-B, same
    // id/score, different words); (b) a rubric-designer pass aligned
    // 'ambitions' and 'reserve_familiarity' wording so they now
    // genuinely are the same question and correctly merge.
    expectedMergedIds: [
      'ambitions',
      'decline_to_fly',
      'flying_frequency',
      'incidents_12m',
      'manoeuvre_course',
      'peer_pressure',
      'reserve_familiarity',
      'response_when_rough',
    ],
    mustNotMergeIds: [
      'total_airtime',
      'total_flights',
      'airtime_last_12m',
      'training_status',
      'ground_handling_kiting',
      'ground_handling_practice',
      'launch_reliability',
      'conditions_flown',
      'speed_bar',
      'collapse_experience',
      'upgrade_motivation',
      'wing_expectation',
      'learning_curve_willingness',
      'external_feedback',
    ],
  },
  {
    label: 'low-b-to-mid-b -> mid-b-to-high-b',
    chain: ['low-b-to-mid-b', 'mid-b-to-high-b'],
    // Added 2026-10-07. The rubric-designer deliberately reused exact
    // id/text/option wording from low-b-to-mid-b wherever a question
    // is genuinely the same at this step too (see
    // config/questions/mid-b-to-high-b.json's CHAIN_MERGE design
    // note) — independently re-derived here by actually diffing both
    // question files, not trusted from that note alone.
    expectedMergedIds: [
      'active_piloting',
      'ambitions',
      'collapse_experience',
      'conditions_flown',
      'current_wing_time',
      'decline_to_fly',
      'descent_options',
      'external_feedback',
      'flying_frequency',
      'ground_handling_practice',
      'incidents_12m',
      'launch_reliability',
      'learning_curve_willingness',
      'manoeuvre_course',
      'peer_pressure',
      'progress_goals',
      'reading_the_day',
      'reserve_familiarity',
      'response_when_rough',
      'site_variety',
      'thermal_turn_control',
      'training_status',
      'upgrade_motivation',
    ],
    // Shared ids kept deliberately distinct: total_airtime,
    // total_flights and airtime_last_12m scale their bands up for a
    // more advanced step (expected and correct, not a wording
    // accident); ground_handling_kiting and speed_bar scale their
    // option sets; wing_expectation names the specific target class
    // in its options; collapse_practice is scored-only below this
    // step but a Ready-blocker here, which is a genuine step-specific
    // difference, not an oversight.
    mustNotMergeIds: ['total_airtime', 'total_flights', 'airtime_last_12m', 'ground_handling_kiting', 'speed_bar', 'wing_expectation', 'collapse_practice'],
  },
];

let failures = 0;

for (const check of CHAINS) {
  const stepConfigs: Record<string, StepConfig> = {
    [check.chain[0]]: loadStep(check.chain[0]),
    [check.chain[1]]: loadStep(check.chain[1]),
  };
  const merged = mergeQuestionsAcrossChain(check.chain, stepConfigs);
  const expectedMergedIds = [...check.expectedMergedIds].sort();

  console.log(`\n${check.label}:`);

  const actuallyMergedIds = merged.filter((item) => item.alsoAnswersForSteps.length > 0).map((item) => item.question.id).sort();

  if (JSON.stringify(actuallyMergedIds) !== JSON.stringify(expectedMergedIds)) {
    failures++;
    console.log('  FAIL  merged-id set changed');
    console.log(`          got:      [${actuallyMergedIds.join(', ')}]`);
    console.log(`          expected: [${expectedMergedIds.join(', ')}]`);
  } else {
    console.log(`  PASS  merged-id set is exactly the ${expectedMergedIds.length} hand-verified safe ids`);
  }

  let mustNotMergeOk = true;
  for (const id of check.mustNotMergeIds) {
    const occurrences = merged.filter((item) => item.question.id === id);
    const anyMerged = occurrences.some((item) => item.alsoAnswersForSteps.length > 0);
    if (anyMerged) {
      failures++;
      mustNotMergeOk = false;
      console.log(`  FAIL  "${id}" was merged despite different bands/wording between steps`);
    }
  }
  if (mustNotMergeOk) {
    console.log(`  PASS  none of the ${check.mustNotMergeIds.length} known different-banded ids were merged`);
  }

  const expectedTotal = stepConfigs[check.chain[0]].questions.questions.length + stepConfigs[check.chain[1]].questions.questions.length - expectedMergedIds.length;
  if (merged.length !== expectedTotal) {
    failures++;
    console.log(`  FAIL  merged list length: got ${merged.length}, expected ${expectedTotal}`);
  } else {
    console.log(`  PASS  merged list length is ${merged.length} (${stepConfigs[check.chain[0]].questions.questions.length} + ${stepConfigs[check.chain[1]].questions.questions.length} - ${expectedMergedIds.length} deduped)`);
  }
}

console.log(failures === 0 ? '\nAll merge-rule checks passed.' : `\n${failures} merge-rule check(s) failed.`);
if (failures > 0) process.exit(1);
