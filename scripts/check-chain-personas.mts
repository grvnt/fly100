// Chain-level regression test, added after step-4 review flagged that
// no test exercised resolveChain + per-step answer storage +
// selectFocusLegIndex together for a real multi-leg pilot profile —
// the one layer of the orchestrator with no per-step rubric test to
// lean on. Fixtures reference existing, already-verified single-step
// personas by id rather than duplicating answer data, so this re-uses
// scripts/check-personas.mts's own confidence in per-leg scoring and
// adds direct coverage of just the NEW combination layer.
//
// Run with: node --experimental-strip-types scripts/check-chain-personas.mts

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { scoreAnswers } from '../app/upgrade/lib/scoreEngine.ts';
import { selectFocusLegIndex } from '../app/upgrade/lib/chainResult.ts';
import type { Persona, QuestionsConfig, Recommendation, ScoringConfig } from '../app/upgrade/lib/types.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function readJson<T>(relPath: string): T {
  return JSON.parse(readFileSync(path.join(ROOT, relPath), 'utf-8')) as T;
}

interface ChainPersona {
  id: string;
  chain: string[];
  legSources: Record<string, string>;
  expected: {
    legs: { stepId: string; recommendation: Recommendation }[];
    focusStepId: string;
    overallRecommendation: Recommendation;
  };
}

function findPersonaById(stepId: string, personaId: string): Persona {
  const dir = path.join(ROOT, 'tests/personas', stepId);
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.json') || file === '_index.json') continue;
    const persona = readJson<Persona>(`tests/personas/${stepId}/${file}`);
    if (persona.id === personaId) return persona;
  }
  throw new Error(`No persona with id "${personaId}" found in tests/personas/${stepId}/`);
}

const chainDir = path.join(ROOT, 'tests/personas/chains');
const chainFiles = readdirSync(chainDir).filter((f) => f.endsWith('.json'));

let failures = 0;
let passed = 0;

for (const file of chainFiles) {
  const chainPersona = readJson<ChainPersona>(`tests/personas/chains/${file}`);
  const issues: string[] = [];

  const legs = chainPersona.chain.map((stepId) => {
    const sourcePersonaId = chainPersona.legSources[stepId];
    const sourcePersona = findPersonaById(stepId, sourcePersonaId);
    const questions = readJson<QuestionsConfig>(`config/questions/${stepId}.json`);
    const scoring = readJson<ScoringConfig>(`config/scoring/${stepId}.json`);
    const result = scoreAnswers(sourcePersona.answers, scoring, questions);
    return { stepId, recommendation: result.recommendation };
  });

  for (let i = 0; i < chainPersona.expected.legs.length; i++) {
    const want = chainPersona.expected.legs[i];
    const got = legs[i];
    if (!got || got.stepId !== want.stepId || got.recommendation !== want.recommendation) {
      issues.push(
        `leg ${i} (${want.stepId}): got ${got?.recommendation ?? 'missing'}, expected ${want.recommendation} — if this fails, the underlying single-step persona's own result changed, not the chain logic`
      );
    }
  }

  const focusIndex = selectFocusLegIndex(legs);
  const focusStepId = legs[focusIndex]?.stepId;
  if (focusStepId !== chainPersona.expected.focusStepId) {
    issues.push(`focus leg: got "${focusStepId}", expected "${chainPersona.expected.focusStepId}"`);
  }

  const overall = legs[focusIndex]?.recommendation;
  if (overall !== chainPersona.expected.overallRecommendation) {
    issues.push(`overall recommendation: got "${overall}", expected "${chainPersona.expected.overallRecommendation}"`);
  }

  if (issues.length === 0) {
    passed++;
    console.log(`PASS  ${chainPersona.id}`);
  } else {
    failures++;
    console.log(`FAIL  ${chainPersona.id}`);
    for (const issue of issues) console.log(`        - ${issue}`);
  }
}

console.log(`\n${passed}/${chainFiles.length} chain personas passed.`);
if (failures > 0) process.exit(1);
