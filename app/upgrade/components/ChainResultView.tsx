'use client';

import { cn } from '@/lib/utils';
import { ResultView } from './ResultView';
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

// Not yet < Nearly ready < Ready — lower rank is more blocking.
const RANK: Record<Recommendation, number> = { not_yet: 0, nearly_ready: 1, ready: 2 };

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
  // The focus leg is the earliest one that isn't Ready — that's the
  // pilot's real, immediate hurdle. If every leg is Ready, the focus
  // is the final leg, since that's the wing they're actually about to
  // fly. Either way the focus leg's own recommendation IS the overall
  // one: it's either the first blocker, or (if none) "ready" throughout.
  const focusLeg = legs.find((leg) => leg.recommendation !== 'ready') ?? legs[legs.length - 1];

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
