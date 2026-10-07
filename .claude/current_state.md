# Current State

_Last updated: 2026-10-07_

## Open threads

- **Upgrade Readiness app** (`BRIEF.md`): A→low-B and low-B→mid-B both fully done (research, rubric, build, review) and wired into the chaining orchestrator. mid-B→high-B rubric done and wired in, **not yet reviewed**. Full history in memory `upgrade-app-knowledge-base`; highlights below.
  - **Standing rule (memory `no-deploy-without-approval`): nothing gets deployed or pushed toward deployment until Grant gives explicit final approval**, even once a step is fully verified. Keep committing locally and reporting progress; don't push to `origin` or run `/fly100-deploy` without being asked.
  - **mid-B→high-B rubric done 2026-10-07, wired into the orchestrator** (`ladder.ts`/`config.ts` registry entries only — zero engine/component changes needed, confirming the architecture holds for a 3rd rung). Built with more confidence than low-B→mid-B since this step's evidence is genuinely stronger (3 sources converge on ~50 thermic hours). Gates on thermic hours specifically, not total hours. Deliberately no stated-plans exemption here, unlike the two lower steps — every hours figure at this step is a thermic one, so exempting it would undercut the research's own position. 9/9 personas pass, chain-merge verified independently (23/32 questions merge with low-B→mid-B). **Next action: run the step-4 review pass on this rung before adding a 4th.**
  - **Note on background agents:** one rubric-designer dispatch hit a Claude Code monthly billing cap mid-task on 2026-10-06 and had to be finished by hand. Not a bug — if it happens again, check usage at claude.ai/settings/usage.
  - **Known pre-existing issue, not fixed:** `npm run lint` crashes repo-wide (ESLint 9/flat-config), unrelated to this work, Grant said leave it for later.
  - **Time-budget tension, flagged not solved:** multi-leg chains take longer than the brief's "under 10 minutes" framing (a 3-leg A→high-B chain is now 59 questions). Handled by being upfront about it on the picker screen, not by capping or shortening. Worth revisiting as more rungs are added and chains get even longer.
  - **Next:** review pass on mid-B→high-B + its orchestrator wiring (step 4), then rung 5 — high-B→low-C — repeating rubric→wire-in→review. That step is where XC distance and site variety become genuinely well-sourced per earlier research (knowledge base gap-check from 2026-10-05), so the rubric there can lean on real citations for those, unlike the earlier steps.
  - Grant is testing locally via `npm run dev` only. Nothing pushed, nothing deployed.
  - Offered but not actioned: drafting a takedown notice for the site (Paraclinic Aotearoa) that lifted Grant's YouTube transcript content without attribution.
