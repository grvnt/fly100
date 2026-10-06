# Current State

_Last updated: 2026-10-06_

## Open threads

- **Upgrade Readiness app** (`BRIEF.md`): A→low-B fully done (research, rubric, build, review — all closed). low-B→mid-B rubric done, not yet built into the app. Full history in memory `upgrade-app-knowledge-base`; highlights below.
  - **Standing rule, 2026-10-06 (saved as memory `no-deploy-without-approval`): nothing gets deployed or pushed toward deployment until Grant gives explicit final approval**, even once a step is fully verified. Keep committing locally and reporting progress; don't push to `origin` or run `/fly100-deploy` without being asked.
  - **Step 5 (Expand), rung 2 — low-B→mid-B rubric done 2026-10-06.** `config/*/low-b-to-mid-b.json` + 9 personas, all pass. Deliberately softer than A→low-B (fewer gates, wider bands, honest low-confidence framing) since that step's own research calls it the weakest-evidenced rung on the ladder. **Not yet wired into the app** — still needs its own build + review pass.
  - **Multi-step jump decision, 2026-10-06** (in `BRIEF.md`): pilot picks current + target wing, tool chains every intermediate step's rubric, requires clearing all of them. Not built yet — needs a wing-picker and step-chaining orchestrator. Now genuinely due, since a second step's rubric exists. `app/upgrade/page.tsx` is still hardcoded to one step.
  - **Implementation trap for the orchestrator** (in `BRIEF.md`): question ids repeat/near-rename across steps but answer bands differ — can't dedupe merged questions by id alone, must compare option sets.
  - **Known pre-existing issue, not fixed:** `npm run lint` crashes repo-wide (ESLint 9/flat-config), unrelated to this work, Grant said leave it for later.
  - **Next:** build low-B→mid-B into the app. This is the point where the wing-picker/orchestrator work can no longer be deferred — building this rung as a second hardcoded single-step page would just create rework. Plan mode before starting, per the brief.
  - Grant is testing locally via `npm run dev` only. Nothing pushed, nothing deployed.
  - Offered but not actioned: drafting a takedown notice for the site (Paraclinic Aotearoa) that lifted Grant's YouTube transcript content without attribution.
