# Current State

_Last updated: 2026-10-06_

## Open threads

- **Upgrade Readiness app** (`BRIEF.md`): A→low-B fully done (research, rubric, build, review). low-B→mid-B rubric done. Wing-picker + step-chaining orchestrator built. Full history in memory `upgrade-app-knowledge-base`; highlights below.
  - **Standing rule (memory `no-deploy-without-approval`): nothing gets deployed or pushed toward deployment until Grant gives explicit final approval**, even once a step is fully verified. Keep committing locally and reporting progress; don't push to `origin` or run `/fly100-deploy` without being asked.
  - **Wing-picker + orchestrator built 2026-10-06.** `/upgrade` now starts with a current-wing/target-wing picker, chains the right steps' questions together (deduping only the 7 questions proven byte-identical across steps, never by id alone — `scripts/check-merge-rule.mts` guards this), and shows a per-leg result focused on whichever leg is actually blocking the pilot. Verified end to end with screenshots. Not yet reviewed by the step-4 reviewer agent for this specific piece (only directly verified by me) — worth a review pass before this is considered as settled as A→low-B was.
  - **low-B→mid-B rubric done 2026-10-06**, now wired into the app via the orchestrator above. Not yet independently reviewed (step 4) on its own terms the way A→low-B was.
  - **Known pre-existing issue, not fixed:** `npm run lint` crashes repo-wide (ESLint 9/flat-config), unrelated to this work, Grant said leave it for later.
  - **Time-budget tension, flagged not solved:** a 2-leg chain (A→mid-B, the only one possible right now) is ~15 minutes of questions, over the brief's "under 10 minutes" framing. Handled by being upfront about it on the picker screen, not by capping or shortening. Revisit if chains get longer as more rungs are built.
  - **Next:** a review pass (step 4) on low-B→mid-B and the orchestrator together would be the natural next move before adding a third rung — this session jumped straight from rubric to build without the independent review step A→low-B got. Then continue expanding: mid-B→high-B rubric, etc.
  - Grant is testing locally via `npm run dev` only. Nothing pushed, nothing deployed.
  - Offered but not actioned: drafting a takedown notice for the site (Paraclinic Aotearoa) that lifted Grant's YouTube transcript content without attribution.
