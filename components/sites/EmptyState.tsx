import { Compass } from 'lucide-react';

/** Shown when filters exclude every destination — the whole point of a shareable filtered URL is you can also empty it out. */
export default function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border py-16 text-center">
      <Compass className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
      <p className="text-foreground">No destinations match those filters.</p>
      <p className="text-sm text-muted-foreground">Try clearing a month or continent pill above.</p>
    </div>
  );
}
