// Pure scoring engine for one upgrade step. No React/Next imports —
// this file is also imported directly by scripts/check-personas.ts.
//
// Implements exactly what's encoded in config/scoring/<step>.json:
// category weighted means (unanswered questions excluded from the
// denominator), a capped total bonus, gate evaluation with
// short-circuit, then category floors / critical_check_floor /
// unevidenced_core_checks (with its stated-plans exemption).
//
// Internal `source`/`ref`/`cites`/`note` fields from the configs are
// never read by this file and never appear on ScoreResult — nothing
// here can leak provenance text to the UI.

import type { Answers, Category, Condition, Gate, GateHit, QuestionsConfig, Recommendation, ScoreResult, ScoringConfig } from './types';

interface EvalContext {
  answers: Answers;
  categoryScores: Record<Category, number>;
  recommendation?: Recommendation;
}

function matchesProfile(ambitions: string[], scoring: ScoringConfig, profile: 'local_only' | 'exposure_bound'): boolean {
  const profiles = scoring.intended_flying_context.profiles;
  if (profile === 'exposure_bound') {
    return ambitions.some((a) => profiles.exposure_bound.ambitions_includes_any.includes(a));
  }
  const [positive, excluded] = profiles.local_only.requires_all;
  const hasPositive = ambitions.some((a) => positive.ambitions_includes_any.includes(a));
  const hasExcluded = ambitions.some((a) => excluded.ambitions_includes_none_of.includes(a));
  return hasPositive && !hasExcluded;
}

function evaluateCondition(cond: Condition, ctx: EvalContext, scoring: ScoringConfig): boolean {
  if (cond.all_of) return cond.all_of.every((c) => evaluateCondition(c, ctx, scoring));
  if (cond.any_of) return cond.any_of.some((c) => evaluateCondition(c, ctx, scoring));

  if (cond.question && cond.answer_in) {
    const answer = ctx.answers[cond.question];
    return typeof answer === 'string' && cond.answer_in.includes(answer);
  }
  if (cond.question && cond.answer_includes_any) {
    const answer = ctx.answers[cond.question];
    return Array.isArray(answer) && answer.some((a) => cond.answer_includes_any!.includes(a));
  }
  if (cond.category_below) {
    return ctx.categoryScores[cond.category_below.category] < cond.category_below.value;
  }
  if (cond.intended_flying_context) {
    const ambitions = ctx.answers['ambitions'];
    const list = Array.isArray(ambitions) ? ambitions : [];
    return matchesProfile(list, scoring, cond.intended_flying_context);
  }
  if (cond.recommendation_in) {
    return !!ctx.recommendation && cond.recommendation_in.includes(ctx.recommendation);
  }
  return false;
}

function computeCategoryScore(category: Category, answers: Answers, scoring: ScoringConfig): number {
  let weightedSum = 0;
  let weightTotal = 0;
  for (const [questionId, qDef] of Object.entries(scoring.questions)) {
    if (qDef.category !== category) continue;
    if (qDef.weight === 0) continue; // e.g. zero-weighted "ambitions"
    const answer = answers[questionId];
    if (typeof answer !== 'string') continue; // unanswered or multi-select -> excluded from denominator
    const optionScore = qDef.options[answer];
    if (optionScore === undefined) continue;
    weightedSum += qDef.weight * optionScore;
    weightTotal += qDef.weight;
  }
  if (weightTotal === 0) return 0;
  return (weightedSum / weightTotal) * 100;
}

function computeBonus(answers: Answers, scoring: ScoringConfig): number {
  let total = 0;
  for (const bonus of scoring.bonuses) {
    const answer = answers[bonus.question];
    const raw = typeof answer === 'string' ? bonus.points[answer] ?? 0 : 0;
    const clamped = bonus.never_negative ? Math.max(0, raw) : raw;
    total += Math.min(clamped, bonus.max_total_bonus);
  }
  return total;
}

function countUnansweredCore(answers: Answers, questions: QuestionsConfig): number {
  return questions.questions.filter((q) => q.priority === 'core' && answers[q.id] === undefined).length;
}

function evaluateGates(answers: Answers, categoryScores: Record<Category, number>, scoring: ScoringConfig): GateHit[] {
  const ctx: EvalContext = { answers, categoryScores };
  const fired: GateHit[] = [];
  for (const gate of scoring.gates) {
    if (evaluateCondition(gate.when, ctx, scoring)) {
      fired.push({ id: gate.id, message: gate.message });
    }
  }
  return fired;
}

export function scoreAnswers(answers: Answers, scoring: ScoringConfig, questions: QuestionsConfig): ScoreResult {
  const skillsScore = computeCategoryScore('skills', answers, scoring);
  const psychScore = computeCategoryScore('psychological', answers, scoring);
  const categoryScores: Record<Category, number> = { skills: skillsScore, psychological: psychScore };

  const bonus = computeBonus(answers, scoring);
  const rawTotal = scoring.categories.skills.weight * skillsScore + scoring.categories.psychological.weight * psychScore + bonus;
  const total = Math.max(0, Math.min(100, rawTotal));

  // Full fired-gate list — NOT capped here. max_gate_reasons_shown is a
  // display-only limit applied by the caller (page.tsx); the engine's
  // result must expose every gate that actually fired, since that's
  // what the persona checks (and any future reviewer) verify against.
  const allFiredGates = evaluateGates(answers, categoryScores, scoring);
  const firedRules: string[] = [];
  const exemptions: string[] = [];

  if (allFiredGates.length > 0) {
    // Gates short-circuit: threshold rules are not evaluated at all.
    return {
      skillsScore,
      psychScore,
      total,
      bonus,
      recommendation: 'not_yet',
      firedGates: allFiredGates,
      firedRules: [],
      exemptions: [],
    };
  }

  const notYet = scoring.thresholds.not_yet;
  const ready = scoring.thresholds.ready;
  const nearlyReady = scoring.thresholds.nearly_ready;

  // Not-yet category floors override everything else, regardless of total.
  if (skillsScore < notYet.category_floors.skills) firedRules.push('not_yet_category_floor:skills');
  if (psychScore < notYet.category_floors.psychological) firedRules.push('not_yet_category_floor:psychological');
  if (firedRules.length > 0) {
    return { skillsScore, psychScore, total, bonus, recommendation: 'not_yet', firedGates: [], firedRules, exemptions: [] };
  }

  if (total < nearlyReady.total_min) {
    return { skillsScore, psychScore, total, bonus, recommendation: 'not_yet', firedGates: [], firedRules: [], exemptions: [] };
  }

  // From here, total >= nearly_ready.total_min (55). Work out whether
  // the pilot clears every additional Ready-level condition.
  const ctx: EvalContext = { answers, categoryScores };
  const meetsReadyTotal = total >= ready.total_min;
  const meetsCategoryFloors = skillsScore >= ready.category_floors.skills && psychScore >= ready.category_floors.psychological;

  let criticalFloorOk = true;
  let criticalFloorQuestionId = '';
  for (const qId of ready.critical_check_floor.questions) {
    const answer = answers[qId];
    const score = typeof answer === 'string' ? scoring.questions[qId]?.options[answer] : undefined;
    if (score !== undefined && score < ready.critical_check_floor.min_answer_score) {
      criticalFloorOk = false;
      criticalFloorQuestionId = qId;
      break;
    }
  }

  let unevidencedBlocks = false;
  let unevidencedQuestionId = '';
  for (const spec of ready.unevidenced_core_checks.answers) {
    const [qId, answerId] = spec.split(':');
    if (answers[qId] === answerId) {
      unevidencedBlocks = true;
      unevidencedQuestionId = qId;
      break;
    }
  }
  let unevidencedExempted = false;
  if (unevidencedBlocks) {
    for (const exemption of ready.unevidenced_core_checks.exemptions) {
      if (evaluateCondition(exemption.when, ctx, scoring)) {
        unevidencedExempted = true;
        exemptions.push(exemption.id);
        break;
      }
    }
  }

  const unansweredCoreOk = countUnansweredCore(answers, questions) <= 2; // conservative_backstop

  const wouldBeReady =
    meetsReadyTotal && meetsCategoryFloors && criticalFloorOk && (!unevidencedBlocks || unevidencedExempted) && unansweredCoreOk;

  if (wouldBeReady) {
    return { skillsScore, psychScore, total, bonus, recommendation: 'ready', firedGates: [], firedRules: [], exemptions };
  }

  // Nearly ready. Only tag a specific rule when the total itself would
  // otherwise have reached Ready but one extra condition blocked it.
  if (meetsReadyTotal) {
    if (skillsScore < ready.category_floors.skills) firedRules.push('ready_category_floor:skills');
    if (psychScore < ready.category_floors.psychological) firedRules.push('ready_category_floor:psychological');
    if (!criticalFloorOk) firedRules.push(`critical_check_floor:${criticalFloorQuestionId}`);
    if (unevidencedBlocks && !unevidencedExempted) firedRules.push(`unevidenced_core_checks:${unevidencedQuestionId}`);
    if (!unansweredCoreOk) firedRules.push('conservative_backstop');
  }

  return { skillsScore, psychScore, total, bonus, recommendation: 'nearly_ready', firedGates: [], firedRules, exemptions };
}

/**
 * Pilot-safe messages for fired threshold rules (as opposed to hard
 * gates, which already carry their own `message`). Implements the
 * lookup algorithm documented at scoring.rule_messages.lookup:
 * exact rule string -> fallback by rule id prefix -> nothing (never
 * render a raw rule/question id). Caps at display.max_rule_reasons_shown.
 */
export function resolveRuleMessages(firedRules: string[], scoring: ScoringConfig): string[] {
  const { by_rule, fallback_by_rule_id, display } = scoring.rule_messages;
  const messages: string[] = [];
  for (const rule of firedRules) {
    const exact = by_rule[rule]?.message;
    if (exact) {
      messages.push(exact);
      continue;
    }
    const ruleId = rule.split(':')[0];
    const fallback = fallback_by_rule_id[ruleId]?.message;
    if (fallback) messages.push(fallback);
  }
  return messages.slice(0, display.max_rule_reasons_shown);
}
