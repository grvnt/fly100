// Pure suggestion selection, implementing the rule in
// config/suggestions/<step>.json meta.selection: gate-linked/triggered
// suggestions first by priority, deduped by topic, backfilled from the
// "always" pool up to min_shown, capped at max_shown.
//
// No React/Next imports — importable by scripts/check-personas.ts.

import type { Answers, Condition, Recommendation, ScoringConfig, Category, Suggestion, SuggestionsConfig } from './types';

interface EvalContext {
  answers: Answers;
  categoryScores: Record<Category, number>;
  recommendation: Recommendation;
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
    return cond.recommendation_in.includes(ctx.recommendation);
  }
  return false;
}

/** Every suggestion whose trigger matches — used for persona testing, not display. */
export function triggeredSuggestions(
  answers: Answers,
  categoryScores: Record<Category, number>,
  recommendation: Recommendation,
  scoring: ScoringConfig,
  suggestions: SuggestionsConfig
): Suggestion[] {
  const ctx: EvalContext = { answers, categoryScores, recommendation };
  return suggestions.suggestions.filter((s) => {
    if (s.always) return true;
    if (!s.trigger) return false;
    return evaluateCondition(s.trigger, ctx, scoring);
  });
}

/** The 3-5 suggestions actually shown to the pilot. */
export function selectDisplaySuggestions(
  answers: Answers,
  categoryScores: Record<Category, number>,
  recommendation: Recommendation,
  scoring: ScoringConfig,
  suggestions: SuggestionsConfig
): Suggestion[] {
  const triggered = triggeredSuggestions(answers, categoryScores, recommendation, scoring, suggestions);
  const byPriority = [...triggered].sort((a, b) => a.priority - b.priority);

  const seenTopics = new Set<string>();
  const display: Suggestion[] = [];
  for (const s of byPriority) {
    if (seenTopics.has(s.topic)) continue;
    seenTopics.add(s.topic);
    display.push(s);
    if (display.length >= suggestions.meta.selection.max_shown) break;
  }

  if (display.length < suggestions.meta.selection.min_shown) {
    const alwaysPool = suggestions.suggestions
      .filter((s) => s.always && !display.includes(s))
      .sort((a, b) => a.priority - b.priority);
    for (const s of alwaysPool) {
      if (display.length >= suggestions.meta.selection.min_shown) break;
      if (seenTopics.has(s.topic)) continue;
      seenTopics.add(s.topic);
      display.push(s);
    }
  }

  return display;
}
