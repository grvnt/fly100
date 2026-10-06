'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { QuestionDef } from '../lib/types';

interface QuestionScreenProps {
  question: QuestionDef;
  value: string | string[] | undefined;
  onSingleAnswer: (optionId: string) => void;
  onMultiToggle: (optionId: string) => void;
  onSkip: () => void;
}

// Options always render in the config's own array order, with no
// gradient/highlight tied to position — this is what makes `ordered:
// false` on a question (see config/questions/<step>.json) safe: there
// is no ranking cue to imply the last option is "best" in the first
// place, for any question, ordered or not.
export function QuestionScreen({ question, value, onSingleAnswer, onMultiToggle, onSkip }: QuestionScreenProps) {
  const isMulti = question.type === 'multi';
  const selectedSingle = typeof value === 'string' ? value : undefined;
  const selectedMulti = Array.isArray(value) ? value : [];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-semibold leading-snug">{question.text}</h2>
        {question.help && <p className="mt-1.5 text-sm text-muted-foreground">{question.help}</p>}
        {question.optional && (
          <span className="mt-2 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
            Optional
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2.5">
        {question.options.map((option) => {
          const isSelected = isMulti ? selectedMulti.includes(option.id) : selectedSingle === option.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => (isMulti ? onMultiToggle(option.id) : onSingleAnswer(option.id))}
              className="text-left"
            >
              <Card
                className={cn(
                  'transition-colors border-2',
                  isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'
                )}
              >
                <CardContent className="p-4 text-base">{option.label}</CardContent>
              </Card>
            </button>
          );
        })}
      </div>

      <button type="button" onClick={onSkip} className="self-start text-sm text-muted-foreground underline underline-offset-2 mt-1">
        Skip this one
      </button>
    </div>
  );
}
