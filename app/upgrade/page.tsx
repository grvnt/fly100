'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { STEP_CONFIGS } from './lib/config';
import { STEP_REGISTRY } from './lib/ladder';
import { mergeQuestionsAcrossChain } from './lib/mergeQuestions';
import { resolveRuleMessages, scoreAnswers } from './lib/scoreEngine';
import { selectDisplaySuggestions } from './lib/selectSuggestions';
import { ProgressBar } from './components/ProgressBar';
import { QuestionScreen } from './components/QuestionScreen';
import { ChainResultView, type LegSummary } from './components/ChainResultView';
import { WingPicker } from './components/WingPicker';
import type { Answers } from './lib/types';

type Stage = 'picker' | 'question' | 'result';

export default function UpgradePage() {
  const [stage, setStage] = useState<Stage>('picker');
  const [chain, setChain] = useState<string[]>([]);
  const [answersByStep, setAnswersByStep] = useState<Record<string, Answers>>({});
  const [index, setIndex] = useState(0);

  const flatQuestions = useMemo(() => {
    if (chain.length === 0) return [];
    return mergeQuestionsAcrossChain(chain, STEP_CONFIGS);
  }, [chain]);

  const total = flatQuestions.length;
  const current = flatQuestions[index];

  function startChain(newChain: string[]) {
    setChain(newChain);
    setAnswersByStep({});
    setIndex(0);
    setStage('question');
  }

  function stepsForCurrent(): string[] {
    if (!current) return [];
    return [current.ownerStepId, ...current.alsoAnswersForSteps];
  }

  function goNext() {
    if (index + 1 >= total) {
      setStage('result');
    } else {
      setIndex(index + 1);
    }
  }

  function goBack() {
    if (index > 0) setIndex(index - 1);
  }

  function handleSingleAnswer(optionId: string) {
    if (!current) return;
    const steps = stepsForCurrent();
    setAnswersByStep((prev) => {
      const next = { ...prev };
      for (const stepId of steps) {
        next[stepId] = { ...next[stepId], [current.question.id]: optionId };
      }
      return next;
    });
    goNext();
  }

  function handleMultiToggle(optionId: string) {
    if (!current) return;
    const steps = stepsForCurrent();
    setAnswersByStep((prev) => {
      const next = { ...prev };
      for (const stepId of steps) {
        const stepAnswers = next[stepId] ?? {};
        const existing = Array.isArray(stepAnswers[current.question.id]) ? (stepAnswers[current.question.id] as string[]) : [];
        const updated = existing.includes(optionId) ? existing.filter((o) => o !== optionId) : [...existing, optionId];
        next[stepId] = { ...stepAnswers, [current.question.id]: updated };
      }
      return next;
    });
  }

  function handleSkip() {
    if (!current) {
      goNext();
      return;
    }
    const steps = stepsForCurrent();
    setAnswersByStep((prev) => {
      const next = { ...prev };
      for (const stepId of steps) {
        const stepAnswers = { ...next[stepId] };
        delete stepAnswers[current.question.id];
        next[stepId] = stepAnswers;
      }
      return next;
    });
    goNext();
  }

  function restart() {
    setChain([]);
    setAnswersByStep({});
    setIndex(0);
    setStage('picker');
  }

  const legs: LegSummary[] = useMemo(() => {
    if (stage !== 'result') return [];
    return chain.map((stepId) => {
      const { questions, scoring, suggestions } = STEP_CONFIGS[stepId];
      const answers = answersByStep[stepId] ?? {};
      const result = scoreAnswers(answers, scoring, questions);
      const displaySuggestions = selectDisplaySuggestions(
        answers,
        { skills: result.skillsScore, psychological: result.psychScore },
        result.recommendation,
        scoring,
        suggestions
      );
      const ruleMessages = resolveRuleMessages(result.firedRules, scoring);
      const { from, to } = STEP_REGISTRY[stepId];
      return {
        stepId,
        from,
        to,
        recommendation: result.recommendation,
        totalScore: result.total,
        skillsScore: result.skillsScore,
        psychScore: result.psychScore,
        gates: result.firedGates.slice(0, scoring.gate_behaviour.max_gate_reasons_shown),
        ruleMessages,
        suggestions: displaySuggestions,
        alwaysOutput: scoring.always_output,
      };
    });
  }, [stage, chain, answersByStep]);

  return (
    <main className="min-h-screen bg-background px-4 py-8 flex justify-center">
      <div className="w-full max-w-md">
        {stage === 'picker' && (
          <WingPicker onSubmit={(newChain) => startChain(newChain)} />
        )}

        {stage === 'question' && current && (
          <div className="flex flex-col gap-6">
            <ProgressBar current={index + 1} total={total} sectionTitle={current.sectionTitle} />
            <QuestionScreen
              question={current.question}
              value={answersByStep[current.ownerStepId]?.[current.question.id]}
              onSingleAnswer={handleSingleAnswer}
              onMultiToggle={handleMultiToggle}
              onSkip={handleSkip}
            />
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={goBack} disabled={index === 0}>
                Back
              </Button>
              {current.question.type === 'multi' && (
                <Button onClick={goNext}>{index + 1 >= total ? 'See my result' : 'Next'}</Button>
              )}
            </div>
          </div>
        )}

        {stage === 'result' && legs.length > 0 && <ChainResultView legs={legs} onRestart={restart} />}
      </div>
    </main>
  );
}
