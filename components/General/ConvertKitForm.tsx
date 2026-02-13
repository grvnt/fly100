"use client";

import React from "react";
import styles from "./ConvertKitForm.module.css";

export default function ConvertKitForm() {
  return (
    <div className="py-8">
      <div className="container mx-auto max-w-3xl flex flex-col items-center gap-6 text-center">
        <div className="w-full">
          <p className="text-xl md:text-2xl font-semibold italic text-slate-100">
            “Thanks Grant — your newsletter is super well written. I’m amazed at the
            quality of your writing — what a gift.”
          </p>
          <p className="mt-2 text-sm font-medium tracking-[0.25em] text-slate-400 uppercase">
            Rory Sutter
          </p>
        </div>
        <div
          className={`rounded-2xl overflow-hidden border-4 border-[#3B82F6] animate-pulse-border ${styles.formWrapper}`}
        >
          <iframe
            src="https://flow.grantonthefly.com/embed"
            width="480"
            height="320"
            style={{
              border: "1px solid #EEE",
              background: "white",
              display: "block",
              margin: "0 auto",
            }}
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
