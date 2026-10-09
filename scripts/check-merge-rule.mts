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
  {
    label: 'mid-b-to-high-b -> high-b-to-low-c',
    chain: ['mid-b-to-high-b', 'high-b-to-low-c'],
    // Added 2026-10-08, independently re-derived by diffing both
    // question files (not trusted from the rubric-designer's report,
    // same discipline as the two chains above). 31 of 34 shared ids
    // merge, including thermic_airtime and wing_limiting_evidence —
    // both introduced at mid-b-to-high-b and reused verbatim here,
    // which is the chain-merge discipline working as intended.
    expectedMergedIds: [
      'active_piloting',
      'airtime_last_12m',
      'ambitions',
      'collapse_experience',
      'collapse_practice',
      'conditions_flown',
      'current_wing_time',
      'decline_to_fly',
      'descent_options',
      'external_feedback',
      'flying_frequency',
      'ground_handling_kiting',
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
      'speed_bar',
      'thermal_turn_control',
      'thermic_airtime',
      'total_airtime',
      'total_flights',
      'training_status',
      'upgrade_motivation',
      'wing_limiting_evidence',
    ],
    // Only one shared id stays deliberately distinct: wing_expectation
    // names the specific target class (mid-B vs low-C) in its options,
    // so it can never be the same question across a class boundary.
    mustNotMergeIds: ['wing_expectation'],
  },
  {
    label: 'high-b-to-low-c -> low-c-to-high-c',
    chain: ['high-b-to-low-c', 'low-c-to-high-c'],
    // Added 2026-10-08, independently re-derived by diffing both
    // question files directly (not trusted from the rubric-designer's
    // design_notes claim, same discipline as every chain above). 29 of
    // 30 shared ids merge. This is the first chain pair where the
    // target step adds brand-new questions (is_2_liner and the five
    // two-liner skill questions, plus flying_style_intent) that don't
    // exist at all in the step below — those correctly appear in the
    // merged list unmerged (alsoAnswersForSteps empty) rather than as
    // a false merge.
    expectedMergedIds: [
      'active_piloting',
      'airtime_last_12m',
      'ambitions',
      'collapse_experience',
      'collapse_practice',
      'conditions_flown',
      'current_wing_time',
      'decline_to_fly',
      'descent_options',
      'external_feedback',
      'flying_frequency',
      'ground_handling_kiting',
      'incidents_12m',
      'launch_reliability',
      'learning_curve_willingness',
      'manoeuvre_course',
      'peer_pressure',
      'progress_goals',
      'reading_the_day',
      'reserve_familiarity',
      'response_when_rough',
      'speed_bar',
      'thermal_turn_control',
      'thermic_airtime',
      'total_airtime',
      'training_status',
      'upgrade_motivation',
      'wing_limiting_evidence',
      'effort_already_invested',
    ],
    // wing_expectation is reworded at this step (now about collapse
    // behaviour/warning-time rather than info/precision) so it must
    // never merge. is_2_liner, pitch_control, cravat_recovery,
    // frontal_collapse_energy, ears_deflation, collapse_training_access
    // and flying_style_intent don't exist at high-b-to-low-c at all, so
    // they can never be merge candidates — listed here anyway as an
    // explicit guard against a future regression that invents a
    // same-named question at the step below and merges it wrongly.
    mustNotMergeIds: [
      'wing_expectation',
      'is_2_liner',
      'pitch_control',
      'cravat_recovery',
      'frontal_collapse_energy',
      'ears_deflation',
      'collapse_training_access',
      'flying_style_intent',
    ],
  },
  {
    label: 'low-c-to-high-c -> high-c-to-d',
    chain: ['low-c-to-high-c', 'high-c-to-d'],
    // Added 2026-10-09, independently re-derived by diffing both
    // question files directly (not trusted from the questions
    // config's own design_notes claim, same discipline as every chain
    // above). 35 of 37 shared ids merge — the highest merge rate of
    // any chain pair so far, since this step deliberately reuses the
    // two-liner-specific question set (is_2_liner, pitch_control,
    // cravat_recovery, frontal_collapse_energy, ears_deflation,
    // collapse_training_access) byte-identically as its own
    // architectural choice, not just where it happened to line up.
    expectedMergedIds: [
      'active_piloting',
      'ambitions',
      'collapse_experience',
      'collapse_practice',
      'collapse_training_access',
      'conditions_flown',
      'cravat_recovery',
      'current_wing_time',
      'decline_to_fly',
      'descent_options',
      'ears_deflation',
      'effort_already_invested',
      'external_feedback',
      'flying_frequency',
      'flying_style_intent',
      'frontal_collapse_energy',
      'ground_handling_kiting',
      'incidents_12m',
      'is_2_liner',
      'launch_reliability',
      'learning_curve_willingness',
      'manoeuvre_course',
      'peer_pressure',
      'pitch_control',
      'progress_goals',
      'reading_the_day',
      'reserve_familiarity',
      'response_when_rough',
      'speed_bar',
      'thermal_turn_control',
      'thermic_airtime',
      'total_airtime',
      'training_status',
      'upgrade_motivation',
      'wing_limiting_evidence',
    ],
    // airtime_last_12m is deliberately rewritten with new, tighter
    // bands reflecting this step's own 100+/year consensus (see
    // config/scoring/high-c-to-d.json meta.design_decisions
    // 'v1-annual-currency-is-this-steps-own-best-evidenced-figure-and-gets-a-new-gate').
    // wing_expectation is reworded again, same pattern as every prior
    // chain boundary where the honest expectation genuinely changes.
    mustNotMergeIds: ['airtime_last_12m', 'wing_expectation'],
  },
  {
    label: 'high-c-to-d -> d-to-ccc',
    chain: ['high-c-to-d', 'd-to-ccc'],
    // Added 2026-10-09, independently re-derived by diffing both
    // question files directly (not trusted from d-to-ccc's own
    // design_notes claim). 36 of 37 shared ids merge — the highest
    // merge rate of any chain pair on the ladder, reflecting how
    // little new skill evidence this step's own research found: it
    // explicitly instructs treating everything that applies to EN-D
    // as applying at least as strongly to CCC, so nearly every
    // question is deliberately unchanged rather than re-derived.
    expectedMergedIds: [
      'active_piloting',
      'airtime_last_12m',
      'ambitions',
      'collapse_experience',
      'collapse_practice',
      'collapse_training_access',
      'conditions_flown',
      'cravat_recovery',
      'current_wing_time',
      'decline_to_fly',
      'descent_options',
      'ears_deflation',
      'effort_already_invested',
      'external_feedback',
      'flying_frequency',
      'flying_style_intent',
      'frontal_collapse_energy',
      'ground_handling_kiting',
      'incidents_12m',
      'is_2_liner',
      'launch_reliability',
      'learning_curve_willingness',
      'manoeuvre_course',
      'peer_pressure',
      'pitch_control',
      'progress_goals',
      'reading_the_day',
      'reserve_familiarity',
      'response_when_rough',
      'speed_bar',
      'thermal_turn_control',
      'thermic_airtime',
      'total_airtime',
      'training_status',
      'upgrade_motivation',
      'wing_limiting_evidence',
    ],
    // wing_expectation is reworded again (CCC-specific framing).
    // competition_pathway is entirely new at this step and has no
    // counterpart at high-c-to-d, so it can never be a merge
    // candidate — listed here as an explicit guard against a future
    // regression that invents a same-named question at the step below.
    mustNotMergeIds: ['wing_expectation', 'competition_pathway'],
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
