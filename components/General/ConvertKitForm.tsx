"use client";

import React, { useEffect, useRef } from "react";
import styles from './ConvertKitForm.module.css';

export default function ConvertKitForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fly100.ck.page/6be775b702/index.js";
    script.async = true;
    script.setAttribute("data-uid", "6be775b702");

    scriptRef.current = script;

    script.onload = () => {
      const existingForm = document.querySelector("form.formkit-form");
      if (existingForm && formContainerRef.current) {
        formContainerRef.current.appendChild(existingForm);
      }
    };

    document.body.appendChild(script);

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
      const form = document.querySelector("form.formkit-form");
      if (form && form.parentNode) {
        form.parentNode.removeChild(form);
      }
    };
  }, []);

  return (
    <div className="py-8">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`rounded-2xl overflow-hidden border-4 border-[#3B82F6] animate-pulse-border ${styles.formWrapper}`}
        >
          <div className="max-w-2xl mx-auto">
            <div
              ref={formContainerRef}
              id="convertkit-form-container"
              className="flex justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
