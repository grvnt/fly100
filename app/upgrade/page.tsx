'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { questionsConfig, scoringConfig, suggestionsConfig } from './lib/config';
import { resolveRuleMessages, scoreAnswers } from './lib/scoreEngine';
import { selectDisplaySuggestions } from './lib/selectSuggestions';
import { ProgressBar } from './components/ProgressBar';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultView } from './components/ResultView';
import type { Answers } from './lib/types';

type Stage = 'intro' | 'question' | 'result';

export default function UpgradePage() {
  const [stage, setStage] = useState<Stage>('intro');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const flatQuestions = useMemo(() => {
    const byId = new Map(questionsConfig.questions.map((q) => [q.id, q]));
    return questionsConfig.sections.flatMap((section) =>
      section.questions.map((id) => ({ sectionTitle: section.title, question: byId.get(id)! }))
    );
  }, []);

  const total = flatQuestions.length;
  const current = flatQuestions[index];

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
    setAnswers((prev) => ({ ...prev, [current.question.id]: optionId }));
    goNext();
  }

  function handleMultiToggle(optionId: string) {
    setAnswers((prev) => {
      const existing = Array.isArray(prev[current.question.id]) ? (prev[current.question.id] as string[]) : [];
      const next = existing.includes(optionId) ? existing.filter((o) => o !== optionId) : [...existing, optionId];
      return { ...prev, [current.question.id]: next };
    });
  }

  function handleSkip() {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[current.question.id];
      return next;
    });
    goNext();
  }

  function restart() {
    setAnswers({});
    setIndex(0);
    setStage('intro');
  }

  const result = useMemo(() => {
    if (stage !== 'result') return null;
    return scoreAnswers(answers, scoringConfig, questionsConfig);
  }, [stage, answers]);

  const suggestions = useMemo(() => {
    if (!result) return [];
    return selectDisplaySuggestions(
      answers,
      { skills: result.skillsScore, psychological: result.psychScore },
      result.recommendation,
      scoringConfig,
      suggestionsConfig
    );
  }, [result, answers]);

  return (
    <main className="min-h-screen bg-background px-4 py-8 flex justify-center">
      <div className="w-full max-w-md">
        {stage === 'intro' && (
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold">{questionsConfig.meta.pilot_facing_title}</h1>
              <p className="mt-3 text-muted-foreground leading-relaxed">{questionsConfig.meta.intro}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              About {questionsConfig.meta.estimated_minutes} minutes. You can skip anything you're not sure about.
            </p>
            <Button onClick={() => setStage('question')} size="lg">
              Start
            </Button>
          </div>
        )}

        {stage === 'question' && current && (
          <div className="flex flex-col gap-6">
            <ProgressBar current={index + 1} total={total} sectionTitle={current.sectionTitle} />
            <QuestionScreen
              question={current.question}
              value={answers[current.question.id]}
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

        {stage === 'result' && result && (
          <ResultView
            recommendation={result.recommendation}
            totalScore={result.total}
            skillsScore={result.skillsScore}
            psychScore={result.psychScore}
            gates={result.firedGates.slice(0, scoringConfig.gate_behaviour.max_gate_reasons_shown)}
            ruleMessages={resolveRuleMessages(result.firedRules, scoringConfig)}
            suggestions={suggestions}
            alwaysOutput={scoringConfig.always_output}
            onRestart={restart}
          />
        )}
      </div>
    </main>
  );
}
