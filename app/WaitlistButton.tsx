'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { KIT_SCRIPT_URL, WAITLIST_URL, waitlistFormHtml } from '@/lib/kitWaitlist';

/**
 * "Join the Waitlist" button that opens into an email box on the page itself
 * (no redirect to Kit). Same behaviour as the waitlist button on flowghost.app.
 * The box is Kit's own form driven by Kit's own script, see lib/kitWaitlist.ts.
 */
export function WaitlistButton(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  // Fixed for the life of the box: re-creating the HTML would wipe what Kit's
  // script has done to it (typed text, errors, the success message).
  const formHtml = useMemo(() => waitlistFormHtml(), []);

  // Kit's script binds to the forms it finds when it RUNS, so it is added only
  // once the form is on the page.
  useEffect(() => {
    if (!open) return;
    const script = document.createElement('script');
    script.src = KIT_SCRIPT_URL;
    script.async = true;
    document.body.appendChild(script);
    boxRef.current?.querySelector('input')?.focus();
    return () => script.remove();
  }, [open]);

  if (!open) {
    return (
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-[15px] font-medium tracking-[-0.005em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white/5 backdrop-blur-[6px] text-[#4DA3FF] hover:text-white border border-[#0076FF] hover:bg-[#0076FF]/15 hover:border-[#4DA3FF] focus-visible:ring-[#0076FF] focus-visible:ring-offset-black"
        >
          Join the Waitlist
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-sm space-y-2">
      <div ref={boxRef} className="fg-waitlist" dangerouslySetInnerHTML={{ __html: formHtml }} />
      <p className="text-center text-[12px] text-white/60">
        Trouble joining?{' '}
        <a href={WAITLIST_URL} className="underline hover:text-white">
          Open the waitlist page
        </a>
      </p>
    </div>
  );
}
