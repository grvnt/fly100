# Current State

_Last updated: 2026-10-06_

## Open threads

- **Upgrade Readiness app** (`BRIEF.md`): A→low-B fully done (research, rubric, build, review). low-B→mid-B rubric done and reviewed. Wing-picker + step-chaining orchestrator built and reviewed. Full history in memory `upgrade-app-knowledge-base`; highlights below.
  - **Standing rule (memory `no-deploy-without-approval`): nothing gets deployed or pushed toward deployment until Grant gives explicit final approval**, even once a step is fully verified. Keep committing locally and reporting progress; don't push to `origin` or run `/fly100-deploy` without being asked.
  - **Step 4 (review) fully closed 2026-10-06 for low-B→mid-B + orchestrator** — same bar as A→low-B. Found and fixed a real must-fix (zero test coverage on the chain-combination logic — now covered by `scripts/check-chain-personas.mts` + `tests/personas/chains/`), several should-fix/nice-to-have items, and the one content item (duplicate question wording for `reserve_familiarity`/`ambitions`, now aligned so they merge correctly in a chain — a 2-leg chain is 50 questions, not 52). Note: the rubric-designer agent handling that last fix hit a Claude Code monthly billing cap mid-task; finished the last two files by hand using its own in-progress design notes as a guide. Worth knowing if agent dispatches start failing again — it's a spend-limit issue, not a bug, and the fix is to either wait for reset or raise the limit at claude.ai/settings/usage.
  - **Known pre-existing issue, not fixed:** `npm run lint` crashes repo-wide (ESLint 9/flat-config), unrelated to this work, Grant said leave it for later.
  - **Time-budget tension, flagged not solved:** a 2-leg chain (A→mid-B, the only one possible right now) is ~15 minutes of questions, over the brief's "under 10 minutes" framing. Handled by being upfront about it on the picker screen, not by capping or shortening. Revisit if chains get longer as more rungs are built.
  - **Next:** once the rubric-designer follow-up lands, this rung is genuinely done end-to-end. Then continue expanding: mid-B→high-B rubric next, repeating rubric→build-into-orchestrator→review for each new rung. The orchestrator itself shouldn't need further structural changes for additional steps — just registry entries in `ladder.ts` and `config.ts`.
  - Grant is testing locally via `npm run dev` only. Nothing pushed, nothing deployed.
  - Offered but not actioned: drafting a takedown notice for the site (Paraclinic Aotearoa) that lifted Grant's YouTube transcript content without attribution.
