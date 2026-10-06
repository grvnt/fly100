'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { GateHit, Recommendation, ScoringConfig, Suggestion } from '../lib/types';

const RECOMMENDATION_COPY: Record<Recommendation, { label: string; blurb: string }> = {
  ready: {
    label: 'Ready',
    blurb: "Your answers line up with what the published guidance looks for at this step.",
  },
  nearly_ready: {
    label: 'Nearly ready',
    blurb: 'Close. A specific thing or two is worth closing before you change wings.',
  },
  not_yet: {
    label: 'Not yet',
    blurb: "That's a legitimate, useful result — not a failure. Here's what to work on.",
  },
};

// All three results use the same calm, neutral treatment on purpose —
// per the brief, "not yet" must never read as a fail state.
const BADGE_CLASSES = 'border-primary/40 bg-primary/10 text-foreground';

interface ResultViewProps {
  recommendation: Recommendation;
  totalScore: number;
  skillsScore: number;
  psychScore: number;
  gates: GateHit[];
  suggestions: Suggestion[];
  alwaysOutput: ScoringConfig['always_output'];
  onRestart: () => void;
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">{Math.round(value)}/100</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <div className="h-full rounded-full bg-primary" style={{ width: `${Math.round(value)}%` }} />
      </div>
    </div>
  );
}

export function ResultView({ recommendation, totalScore, skillsScore, psychScore, gates, suggestions, alwaysOutput, onRestart }: ResultViewProps) {
  const copy = RECOMMENDATION_COPY[recommendation];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className={cn('inline-block rounded-full px-3 py-1 text-sm font-semibold border', BADGE_CLASSES)}>
          {copy.label}
        </span>
        <p className="mt-3 text-4xl font-bold tabular-nums">{Math.round(totalScore)}<span className="text-lg font-medium text-muted-foreground">/100</span></p>
        <p className="mt-2 text-lg">{copy.blurb}</p>
      </div>

      <Card>
        <CardContent className="p-5 flex flex-col gap-4">
          <h3 className="font-semibold">Your breakdown</h3>
          <ScoreBar label="Skills and experience" value={skillsScore} />
          <ScoreBar label="Mindset and motivation" value={psychScore} />
        </CardContent>
      </Card>

      {gates.length > 0 && (
        <Card>
          <CardContent className="p-5 flex flex-col gap-3">
            <h3 className="font-semibold">What's holding this back</h3>
            {gates.map((g) => (
              <p key={g.id} className="text-sm leading-relaxed">
                {g.message}
              </p>
            ))}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-5 flex flex-col gap-4">
          <h3 className="font-semibold">Things to work on</h3>
          {suggestions.map((s) => (
            <div key={s.id}>
              <p className="font-medium text-sm">{s.title}</p>
              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5 flex flex-col gap-3">
          <p className="text-sm leading-relaxed">{alwaysOutput.instructor_recommendation}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{alwaysOutput.disclaimer}</p>
        </CardContent>
      </Card>

      <Button variant="outline" onClick={onRestart} className="self-start">
        Start again
      </Button>
    </div>
  );
}
