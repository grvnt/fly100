import Link from 'next/link';
import { Lock } from 'lucide-react';
import { ReactNode } from 'react';

interface WingmatesGateProps {
  isMember: boolean;
  title: string;
  children: ReactNode;
  /**
   * 'teaser' shows a truncated preview with a fade before the CTA (used for
   * "What's It Like" — free tier sees the opening, not nothing).
   * 'locked' shows no content at all, just the CTA (used for Flying
   * Conditions, Hazards, Getting There, When To Go).
   */
  variant?: 'teaser' | 'locked';
  teaserText?: string;
}

/**
 * Single source of truth for the free/Wingmates split on detail pages.
 * Every gated section renders through this component rather than a
 * scattered `if (isMember)` — see plan section 4. `isMember` is resolved
 * once, server-side, via `lib/membership.ts` and passed down as a prop.
 */
export default function WingmatesGate({
  isMember,
  title,
  children,
  variant = 'locked',
  teaserText,
}: WingmatesGateProps) {
  if (isMember) {
    return <>{children}</>;
  }

  if (variant === 'teaser' && teaserText) {
    const preview = teaserText.length > 220 ? `${teaserText.slice(0, 220).trimEnd()}` : teaserText;
    return (
      <div className="relative">
        <p className="text-foreground/80">{preview}…</p>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />
        <WingmatesCta title={title} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2 rounded-lg border border-dashed border-border bg-muted/30 p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <Lock className="h-4 w-4" aria-hidden="true" />
        {title}
      </div>
      <p className="text-sm text-muted-foreground">Unlock the full guide with Wingmates.</p>
      <WingmatesCta title={title} />
    </div>
  );
}

function WingmatesCta({ title }: { title: string }) {
  return (
    <Link
      href="/wingmates"
      className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-sky-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-sky-400"
    >
      <Lock className="h-3.5 w-3.5" aria-hidden="true" />
      Unlock {title} with Wingmates
    </Link>
  );
}
