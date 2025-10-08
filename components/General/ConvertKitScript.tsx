'use client';

import { useEffect } from 'react';
import type { ReactElement } from 'react';

export default function ConvertKitScript(): ReactElement | null {
  useEffect(() => {
    // Avoid duplicate injection
    if (document.querySelector('script[data-uid="28797b89a2"]')) return;

    const script: HTMLScriptElement = document.createElement('script');
    script.src = 'https://fly100.kit.com/28797b89a2/index.js';
    script.async = true;
    script.setAttribute('data-uid', '28797b89a2');
    document.body.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-uid="28797b89a2"]');
      if (el && el.parentNode) el.parentNode.removeChild(el);
    };
  }, []);

  return null;
}
