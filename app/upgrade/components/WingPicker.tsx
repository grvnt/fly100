'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LADDER_LABELS, LADDER_RUNGS, reachableTargets, resolveChain } from '../lib/ladder';
import { STEP_CONFIGS } from '../lib/config';
import type { LadderRung } from '../lib/types';

interface WingPickerProps {
  onSubmit: (chain: string[], from: LadderRung, to: LadderRung) => void;
}

const selectClasses =
  'w-full rounded-md border border-input bg-background px-3 py-2.5 text-base focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring';

export function WingPicker({ onSubmit }: WingPickerProps) {
  const [from, setFrom] = useState<LadderRung>('A');
  const [to, setTo] = useState<LadderRung>('low-B');

  const targets = useMemo(() => reachableTargets(from), [from]);

  function handleFromChange(next: LadderRung) {
    setFrom(next);
    const nextTargets = reachableTargets(next);
    if (!nextTargets.includes(to)) {
      setTo(nextTargets[0] ?? next);
    }
  }

  const chain = useMemo(() => resolveChain(from, to), [from, to]);

  const estimatedMinutes = useMemo(() => {
    if (!chain) return null;
    return chain.reduce((sum, stepId) => sum + STEP_CONFIGS[stepId].questions.meta.estimated_minutes, 0);
  }, [chain]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">What are you thinking about?</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Tell us what you fly now and what you're considering, and we'll ask the right questions for that jump.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">What are you flying now?</label>
          <select className={selectClasses} value={from} onChange={(e) => handleFromChange(e.target.value as LadderRung)}>
            {LADDER_RUNGS.slice(0, -1).map((rung) => (
              <option key={rung} value={rung}>
                {LADDER_LABELS[rung]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">What are you considering moving to?</label>
          <select className={selectClasses} value={to} onChange={(e) => setTo(e.target.value as LadderRung)} disabled={targets.length === 0}>
            {targets.length === 0 && <option>Nothing beyond here is built yet</option>}
            {targets.map((rung) => (
              <option key={rung} value={rung}>
                {LADDER_LABELS[rung]}
              </option>
            ))}
          </select>
          {targets.length === 0 && (
            <p className="mt-1.5 text-sm text-muted-foreground">
              We haven't built the research and questions for anything past {LADDER_LABELS[from]} yet.
            </p>
          )}
        </div>
      </div>

      {chain && estimatedMinutes !== null && (
        <Card>
          <CardContent className="p-5 flex flex-col gap-2">
            {chain.length > 1 && (
              <p className="text-sm font-medium">
                That's {chain.length} steps on the ladder, not one — we'll ask about each in turn.
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              About {estimatedMinutes} minutes in total
              {chain.length > 1 ? '. Longer than a single step, because a bigger jump genuinely asks more of you — feel free to come back and finish later.' : '.'}
            </p>
          </CardContent>
        </Card>
      )}

      <Button size="lg" disabled={!chain} onClick={() => chain && onSubmit(chain, from, to)}>
        Start
      </Button>
    </div>
  );
}
