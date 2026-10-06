'use client';

interface ProgressBarProps {
  current: number;
  total: number;
  sectionTitle: string;
}

export function ProgressBar({ current, total, sectionTitle }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm font-medium text-muted-foreground">{sectionTitle}</span>
        <span className="text-xs text-muted-foreground">
          {current} / {total}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
