# Current State

_Last updated: 2026-10-06_

## Open threads

- **Upgrade Readiness app** (`BRIEF.md`): steps 1–4 done for the A→low-B step (research, rubric, build, review). Full history in memory `upgrade-app-knowledge-base`; highlights below.
  - **Step 4 (review) done 2026-10-06.** Independent reviewer found 2 real bugs (missing headline score, a tagging inconsistency) — both fixed and verified same session (screenshot + 9/9 personas + clean build). Two more findings needed sourced copy, not code, so sent to a rubric-designer follow-up: suggestions can drop below the required minimum of 3 for a content "just wants to enjoy flying" pilot profile; threshold-rule blocks (vs. hard gates) have no pilot-safe explanation on the result screen yet. **That follow-up agent was still running when this was last updated — check its outcome before assuming it's done.**
  - **Step 3 (build) done 2026-10-06** — live at `/upgrade`, route inside the main app (not a subdomain, per the `/wing-load` precedent — this resolved the brief's open question). Engine at `app/upgrade/lib/scoreEngine.ts`; `node --experimental-strip-types scripts/check-personas.mts` runs all persona fixtures against it.
  - **Multi-step jump decision, 2026-10-06** (now written into `BRIEF.md` itself): a pilot picks current wing + target wing, the tool chains every intermediate step's rubric and requires clearing all of them — no separate, easier "skip" assessment. Not built yet — needs a wing-picker and step-chaining orchestrator, due at step 5 once a second step's rubric exists. `app/upgrade/page.tsx` is currently hardcoded to one step and will need restructuring then.
  - **Knowledge base**: built, reviewed, corrected (dropped a plagiarized source, added several podcast/instructor voices), and gap-checked against thermal-strength/XC-distance/site-variety questions (none apply to A→low-B; site variety is sourced and worth adding at high-B→low-C later). Bruce Goldsmith, Théo de Blic, and DHV-affiliated voices deliberately deferred — research only if Grant asks.
  - **Known pre-existing issue, not fixed:** `npm run lint` crashes repo-wide (ESLint 9/flat-config incompatibility), reproduces on unmodified `wing-load/page.tsx` too — unrelated to this work, Grant said leave it for later.
  - **Next:** once the rubric-designer follow-up lands and is wired in, move to step 5 — low-B→mid-B rubric, then build, then review, repeating the pattern. The multi-step jump UI (wing-picker + orchestrator) needs to land around the same time.
  - Grant is testing locally via `npm run dev`, nothing pushed to `origin/main` is deployed yet — needs `/fly100-deploy` when ready (git push alone does not deploy this project).
  - Offered but not actioned: drafting a takedown notice for the site (Paraclinic Aotearoa) that lifted Grant's YouTube transcript content without attribution.
