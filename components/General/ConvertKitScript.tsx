'use client';

import { useEffect } from 'react';

export default function ConvertKitScript() {
  useEffect(() => {
    // Load ConvertKit script for modal functionality
    const script = document.createElement('script');
    script.src = 'https://fly100.kit.com/28797b89a2/index.js';
    script.async = true;
    script.setAttribute('data-uid', '28797b89a2');
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
