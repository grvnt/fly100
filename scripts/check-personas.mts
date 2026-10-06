// Dev-time check: runs every persona in tests/personas/<step>/ through
// the real scoring engine and diffs against each persona's `expected`
// block. No test framework is configured in this project (see
// CLAUDE.md), so this is a plain script rather than a Jest/Vitest suite.
//
// Run with:  node --experimental-strip-types scripts/check-personas.mts [step]

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { scoreAnswers } from '../app/upgrade/lib/scoreEngine.ts';
import { selectDisplaySuggestions, triggeredSuggestions } from '../app/upgrade/lib/selectSuggestions.ts';
import type { Persona, QuestionsConfig, ScoringConfig, SuggestionsConfig } from '../app/upgrade/lib/types.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const step = process.argv[2] ?? 'a-to-low-b';

function readJson<T>(relPath: string): T {
  return JSON.parse(readFileSync(path.join(ROOT, relPath), 'utf-8')) as T;
}

const questions = readJson<QuestionsConfig>(`config/questions/${step}.json`);
const scoring = readJson<ScoringConfig>(`config/scoring/${step}.json`);
const suggestions = readJson<SuggestionsConfig>(`config/suggestions/${step}.json`);

const personaDir = path.join(ROOT, 'tests/personas', step);
const personaFiles = readdirSync(personaDir).filter((f) => f.endsWith('.json') && f !== '_index.json');

let failures = 0;
let passed = 0;

for (const file of personaFiles) {
  const persona = readJson<Persona>(`tests/personas/${step}/${file}`);
  const result = scoreAnswers(persona.answers, scoring, questions);
  const triggered = triggeredSuggestions(
    persona.answers,
    { skills: result.skillsScore, psychological: result.psychScore },
    result.recommendation,
    scoring,
    suggestions
  );
  const triggeredIds = new Set(triggered.map((s) => s.id));

  const issues: string[] = [];

  if (result.recommendation !== persona.expected.recommendation) {
    issues.push(`recommendation: got "${result.recommendation}", expected "${persona.expected.recommendation}"`);
  }

  const [totalMin, totalMax] = persona.expected.total_score_range;
  if (result.total < totalMin || result.total > totalMax) {
    issues.push(`total: got ${result.total.toFixed(1)}, expected in [${totalMin}, ${totalMax}]`);
  }
  for (const category of ['skills', 'psychological'] as const) {
    const [min, max] = persona.expected.category_score_ranges[category];
    const value = category === 'skills' ? result.skillsScore : result.psychScore;
    if (value < min || value > max) {
      issues.push(`${category}: got ${value.toFixed(1)}, expected in [${min}, ${max}]`);
    }
  }

  const gotGateIds = result.firedGates.map((g) => g.id).sort();
  const wantGateIds = [...persona.expected.gates_expected].sort();
  if (JSON.stringify(gotGateIds) !== JSON.stringify(wantGateIds)) {
    issues.push(`gates: got [${gotGateIds.join(', ')}], expected [${wantGateIds.join(', ')}]`);
  }

  const gotRules = [...result.firedRules].sort();
  const wantRules = [...persona.expected.rules_expected].sort();
  if (JSON.stringify(gotRules) !== JSON.stringify(wantRules)) {
    issues.push(`rules: got [${gotRules.join(', ')}], expected [${wantRules.join(', ')}]`);
  }

  if (persona.expected.exemptions_expected) {
    const gotExemptions = [...result.exemptions].sort();
    const wantExemptions = [...persona.expected.exemptions_expected].sort();
    if (JSON.stringify(gotExemptions) !== JSON.stringify(wantExemptions)) {
      issues.push(`exemptions: got [${gotExemptions.join(', ')}], expected [${wantExemptions.join(', ')}]`);
    }
  }

  for (const mustInclude of persona.expected.suggestions_must_include ?? []) {
    if (!triggeredIds.has(mustInclude)) issues.push(`missing triggered suggestion: ${mustInclude}`);
  }
  for (const mustExclude of persona.expected.suggestions_must_not_include ?? []) {
    if (triggeredIds.has(mustExclude)) issues.push(`unexpectedly triggered suggestion: ${mustExclude}`);
  }

  // Global invariant, not a per-persona assertion: BRIEF.md requires 3-5
  // suggestions on every result, so the DISPLAYED set (after priority
  // sort, topic dedupe and always-pool backfill) must land in that range
  // for every persona. A reviewer pass found a strong, no-stated-ambition
  // pilot who only reached two; tests/personas/a-to-low-b/10 is that case.
  const displayed = selectDisplaySuggestions(
    persona.answers,
    { skills: result.skillsScore, psychological: result.psychScore },
    result.recommendation,
    scoring,
    suggestions
  );
  const { min_shown, max_shown } = suggestions.meta.selection;
  if (displayed.length < min_shown || displayed.length > max_shown) {
    issues.push(
      `displayed suggestions: got ${displayed.length} [${displayed.map((s) => s.id).join(', ')}], expected between ${min_shown} and ${max_shown}`
    );
  }

  if (issues.length === 0) {
    passed++;
    console.log(`PASS  ${persona.id}`);
  } else {
    failures++;
    console.log(`FAIL  ${persona.id}`);
    for (const issue of issues) console.log(`        - ${issue}`);
  }
}

console.log(`\n${passed}/${personaFiles.length} personas passed.`);
if (failures > 0) process.exit(1);
