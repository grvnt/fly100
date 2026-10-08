# Current State

_Last updated: 2026-10-08_

## Open threads

- **Upgrade Readiness app** (`BRIEF.md`): four rungs on the ladder now exist — A→low-B, low-B→mid-B, mid-B→high-B are fully done (research, rubric, build, review). high-B→low-C is built and wired into the orchestrator, **not yet reviewed**. Full history in memory `upgrade-app-knowledge-base`; highlights below.
  - **Standing rule (memory `no-deploy-without-approval`): nothing gets deployed or pushed toward deployment until Grant gives explicit final approval**, even once a step is fully verified. Keep committing locally and reporting progress; don't push to `origin` or run `/fly100-deploy` without being asked.
  - **high-B→low-C rubric done 2026-10-08, wired into the orchestrator.** Different kind of uncertainty than any prior step — contested, not thin (the community argues whether this boundary is even real). Rubric separates fuzzy-evidence-governs-method from asymmetric-risk-governs-level. First step where XC distance and site variety are actually scored. 9/9 personas pass (hand-computed by the building agent, independently verified against the real engine here since it couldn't run the script itself this time). Chain-merge re-verified independently: 31/34 questions merge with mid-B→high-B. **Next action: run the step-4 review pass on this rung before adding a 5th.**
  - **Note on background agents:** one rubric-designer dispatch hit a Claude Code monthly billing cap mid-task on 2026-10-06 and had to be finished by hand; another (2026-10-08) had no shell access and hand-computed persona scores instead (verified correct). Neither is a bug — just worth knowing agent environments can vary, and always independently verify hand-computed claims rather than trust them.
  - **Known pre-existing issue, not fixed:** `npm run lint` crashes repo-wide (ESLint 9/flat-config), unrelated to this work, Grant said leave it for later.
  - **Time-budget tension, partially addressed:** the picker's time estimate now accounts for merged/deduped questions, but multi-leg chains are still genuinely over the brief's "under 10 minutes" framing. Flagged on the picker screen itself, not hidden.
  - **Next:** review pass on high-B→low-C (step 4), then rung 6 — low-C→high-C / 2-liner C. That's the step where 2-liner-specific safety material (cravat risk, collapse behaviour) becomes central, and where the "is this a 2-liner" hard-gate axis from knowledge/disagreements.md point 4 needs to actually get built into a rubric for the first time.
  - Grant is testing locally via `npm run dev` only. Nothing pushed, nothing deployed.
  - Offered but not actioned: drafting a takedown notice for the site (Paraclinic Aotearoa) that lifted Grant's YouTube transcript content without attribution.
