'use client';

import { cn } from '@/lib/utils';
import { ResultView } from './ResultView';
import { selectFocusLegIndex } from '../lib/chainResult';
import type { GateHit, LadderRung, Recommendation, ScoringConfig, Suggestion } from '../lib/types';

export interface LegSummary {
  stepId: string;
  from: LadderRung;
  to: LadderRung;
  recommendation: Recommendation;
  totalScore: number;
  skillsScore: number;
  psychScore: number;
  gates: GateHit[];
  ruleMessages: string[];
  suggestions: Suggestion[];
  alwaysOutput: ScoringConfig['always_output'];
}

const LEG_BADGE_LABEL: Record<Recommendation, string> = {
  ready: 'Ready',
  nearly_ready: 'Nearly ready',
  not_yet: 'Not yet',
};

interface ChainResultViewProps {
  legs: LegSummary[];
  onRestart: () => void;
}

export function ChainResultView({ legs, onRestart }: ChainResultViewProps) {
  const focusLeg = legs[selectFocusLegIndex(legs)];

  return (
    <div className="flex flex-col gap-6">
      {legs.length > 1 && (
        <div className="flex flex-col gap-2">
          {legs.map((leg) => (
            <div
              key={leg.stepId}
              className={cn(
                'flex items-center justify-between rounded-lg border px-4 py-3 text-sm',
                leg.stepId === focusLeg.stepId ? 'border-primary/50 bg-primary/5' : 'border-border'
              )}
            >
              <span className="font-medium">
                {leg.from} → {leg.to}
              </span>
              <span className="text-muted-foreground">{LEG_BADGE_LABEL[leg.recommendation]}</span>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">
            The detail below is for the {focusLeg.from} → {focusLeg.to} step — that's the one actually deciding your result right now.
          </p>
        </div>
      )}

      <ResultView
        recommendation={focusLeg.recommendation}
        totalScore={focusLeg.totalScore}
        skillsScore={focusLeg.skillsScore}
        psychScore={focusLeg.psychScore}
        gates={focusLeg.gates}
        ruleMessages={focusLeg.ruleMessages}
        suggestions={focusLeg.suggestions}
        alwaysOutput={focusLeg.alwaysOutput}
        onRestart={onRestart}
      />
    </div>
  );
}
