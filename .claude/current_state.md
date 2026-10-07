# Current State

_Last updated: 2026-10-07_

## Open threads

- **Upgrade Readiness app** (`BRIEF.md`): three rungs fully done — research, rubric, build, review — all to the same bar: A→low-B, low-B→mid-B, mid-B→high-B. All wired into the chaining orchestrator; a pilot can run A straight to high-B as one chained assessment. Full history in memory `upgrade-app-knowledge-base`; highlights below.
  - **Standing rule (memory `no-deploy-without-approval`): nothing gets deployed or pushed toward deployment until Grant gives explicit final approval**, even once a step is fully verified. Keep committing locally and reporting progress; don't push to `origin` or run `/fly100-deploy` without being asked.
  - **mid-B→high-B review done 2026-10-07 — clean pass, no must-fix issues.** Two small items fixed directly (a stale test-coverage note, a naive time-estimate calculation). Added a 4th chain persona covering a 3-leg A→high-B chain. All regression suites pass (10/10 + 9/9 + 9/9 step personas, 4/4 chain personas, both merge-rule chain checks, tsc, build).
  - **Note on background agents:** one rubric-designer dispatch hit a Claude Code monthly billing cap mid-task on 2026-10-06 and had to be finished by hand. Not a bug — if it happens again, check usage at claude.ai/settings/usage.
  - **Known pre-existing issue, not fixed:** `npm run lint` crashes repo-wide (ESLint 9/flat-config), unrelated to this work, Grant said leave it for later.
  - **Time-budget tension, now partially addressed:** the picker's time estimate is more honest than it was (accounts for merged/deduped questions, not a naive sum), but multi-leg chains are still genuinely over the brief's "under 10 minutes" framing (A→high-B is ~15 min). Flagged on the picker screen itself, not hidden.
  - **Next:** rung 5 — high-B→low-C. Per the knowledge base's own 2026-10-05 gap-check, this is the step where XC distance and site variety become genuinely well-sourced (unlike the earlier steps, where those were explicitly declined as unsupported) — the rubric there can lean on real citations for them. Same pattern: rubric → wire into orchestrator (registry entries only) → review.
  - Grant is testing locally via `npm run dev` only. Nothing pushed, nothing deployed.
  - Offered but not actioned: drafting a takedown notice for the site (Paraclinic Aotearoa) that lifted Grant's YouTube transcript content without attribution.
