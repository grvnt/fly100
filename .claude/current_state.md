# Current State

_Last updated: 2026-10-08_

## Open threads

- **Upgrade Readiness app** (`BRIEF.md`): four rungs fully done — research, rubric, build, review — all to the same bar: A→low-B, low-B→mid-B, mid-B→high-B, high-B→low-C. All wired into the chaining orchestrator; a pilot can run the full A-to-low-C chain today. Full history in memory `upgrade-app-knowledge-base`; highlights below.
  - **Standing rule (memory `no-deploy-without-approval`): nothing gets deployed or pushed toward deployment until Grant gives explicit final approval**, even once a step is fully verified. Keep committing locally and reporting progress; don't push to `origin` or run `/fly100-deploy` without being asked.
  - **high-B→low-C review done 2026-10-08 — clean pass, no must-fix issues.** Three small documentation fixes made. **One real, unresolved flag: a full A→low-C chain is now ~16 minutes (62 questions), genuinely over the brief's "under 10 minutes." This needs a decision from Grant** — options include capping chain length, a lighter path for big multi-rung jumps, or accepting it with clear upfront time estimates (current approach, already on the picker screen). Not fixed, just flagged — don't let it get lost.
  - **Note on background agents:** two rubric-designer dispatches this week hit environment limits (one a billing cap, one no shell access) and had to be finished/verified by hand — both handled correctly, not bugs. Worth knowing agent environments can vary; always independently verify hand-computed claims.
  - **Known pre-existing issue, not fixed:** `npm run lint` crashes repo-wide (ESLint 9/flat-config), unrelated to this work, Grant said leave it for later.
  - **Next:** decide the time-budget question above, then rung 6 — low-C→high-C / 2-liner C. That's where 2-liner-specific safety material (cravat risk, block-collapse behaviour) becomes central, and where the "is this a 2-liner" independent hard-gate axis from knowledge/disagreements.md point 4 needs to actually get built into a rubric for the first time — not just a wing-class question, a construction-type question.
  - Grant is testing locally via `npm run dev` only. Nothing pushed, nothing deployed.
  - Offered but not actioned: drafting a takedown notice for the site (Paraclinic Aotearoa) that lifted Grant's YouTube transcript content without attribution.
