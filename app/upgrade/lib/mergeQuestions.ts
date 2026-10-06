// Merges the question lists of a chain of steps into one flat,
// ordered list for the UI to walk through — asking a question once
// only when it is PROVABLY the same question in every step that has
// it (same id, same text, same option ids, in order). Everything else
// is kept fully separate per step, on purpose: config/questions/*.json
// shows many ids repeat across steps with different answer bands
// (e.g. total_airtime), and merging on id alone would silently score
// an answer against the wrong step's bands. See BRIEF.md "Multi-step
// jumps" for the trap this avoids.
//
// No React/Next imports — importable by a plain script the same way
// scoreEngine.ts is.

import type { QuestionDef, StepConfig } from './types';

export interface MergedQuestionItem {
  // The step that owns this screen in the flow (the first step in the
  // chain that contains this exact question).
  ownerStepId: string;
  sectionTitle: string;
  question: QuestionDef;
  // Other step ids in the chain whose answer bucket should also
  // receive this question's answer, because it's the identical
  // question there too. Empty if this question is unique to ownerStepId.
  alsoAnswersForSteps: string[];
}

function sameQuestion(a: QuestionDef, b: QuestionDef): boolean {
  if (a.id !== b.id || a.text !== b.text) return false;
  if (a.options.length !== b.options.length) return false;
  return a.options.every((opt, i) => opt.id === b.options[i].id);
}

export function mergeQuestionsAcrossChain(
  chainStepIds: string[],
  stepConfigs: Record<string, StepConfig>
): MergedQuestionItem[] {
  const items: MergedQuestionItem[] = [];

  for (const stepId of chainStepIds) {
    const { questions } = stepConfigs[stepId];
    const byId = new Map(questions.questions.map((q) => [q.id, q]));

    for (const section of questions.sections) {
      for (const qId of section.questions) {
        const question = byId.get(qId);
        if (!question) continue;

        const existing = items.find((item) => sameQuestion(item.question, question));
        if (existing) {
          existing.alsoAnswersForSteps.push(stepId);
          continue;
        }

        items.push({
          ownerStepId: stepId,
          sectionTitle: section.title,
          question,
          alsoAnswersForSteps: [],
        });
      }
    }
  }

  return items;
}
