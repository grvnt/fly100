'use client';

import React, { useEffect, useRef } from 'react';

export default function ConvertKitForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fly100.ck.page/6be775b702/index.js';
    script.async = true;
    script.setAttribute('data-uid', '6be775b702');
    
    // Add an event listener to run after the script has loaded
    script.onload = () => {
      // Check if the form has been created elsewhere and move it if necessary
      const existingForm = document.querySelector('form.formkit-form');
      if (existingForm && formContainerRef.current) {
        formContainerRef.current.appendChild(existingForm);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Remove the script only if it's still in the document
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Also remove the form if it exists
      const form = document.querySelector('form.formkit-form');
      if (form && form.parentNode) {
        form.parentNode.removeChild(form);
      }
    };
  }, []);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden border-2 border-[#3B82F6] animate-pulse-border">
            <div ref={formContainerRef} id="convertkit-form-container" className="flex justify-center items-center">
              {/* ConvertKit form will be inserted here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
