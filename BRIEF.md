# Project Brief: Paraglider Upgrade Readiness App

## Goal
A web app that helps paragliding pilots judge whether they're ready to move up a wing class. It gives a readiness score, a clear recommendation, and specific things to work on. It lives on **fly100.co**.

## Users
Recreational, XC and competition-curious pilots thinking about their next wing. Most will use it on a phone, so it must take under 10 minutes.

## Wing class ladder
Cover each upgrade step along this ladder:

A → low B → mid B → high B → low C → high C / 2-liner C → D → CCC

Only A, B, C and D are official EN classes (CCC is the competition class). The sub-classes are industry labels that sources draw differently. Treat them as working labels: confirm or adjust them from the research, and record where sources disagree. Criteria and hard gates must differ per step. The jump to 2-liners, D and CCC needs much stricter requirements.

## Inputs
**Skills and experience:** hours and flights (total and recent), currency, ground handling, speed bar use, types of conditions flown (thermic, strong wind, turbulent, coastal, mountain, big air), collapse frequency and recovery, active piloting, descent techniques, reserve familiarity, current wing and how long they've flown it. SIV is optional context only and must not be a major factor, as its value is debated.

**Psychological factors:** why they want to upgrade, what they expect the new wing to give them, confidence in turbulent air, ambitions (XC, comps, hike & fly, acro), how they respond to fear and stress, honesty about recent incidents and near misses.

## Outputs
- Readiness score (0–100) with a breakdown by category
- Recommendation for the specific step: **Ready / Nearly ready / Not yet**
- 3–5 concrete suggestions for what to work on
- A recommendation to discuss the upgrade with an instructor, plus a clear disclaimer

## Multi-step jumps (decided 2026-10-06, applies once step 5 "Expand" adds more steps)
A pilot isn't always one rung below their target — e.g. a low-B pilot may genuinely be ready to skip mid-B and go straight to high-B. The tool must not invent a separate, easier "skip" assessment for this. Instead: let the pilot pick their current wing and their target wing (not just assume the next rung up), run them through **every intermediate step's questions in sequence** (merged so nothing is asked twice), score each step with its own already-built rubric, and only recommend Ready if every rung along the way clears. If an intermediate rung doesn't clear, that's the real, specific answer ("not ready to jump to high-B because of a gap at mid-B"), not a vague no. This matches `knowledge/disagreements.md` point 13's recommended handling — a pilot with a real case to skip gets asked harder questions, not a free pass. **Built 2026-10-06** (`app/upgrade/lib/ladder.ts`, `mergeQuestions.ts`, restructured `page.tsx`) — the picker, chaining, and per-leg result all work, committed locally, not deployed.

**Implementation trap found while building the second rung (2026-10-06):** question ids are not safe to treat as globally shared across steps, even when they look identical. `low-b-to-mid-b.json` reuses ids like `total_airtime` and has near-miss renames like `active_piloting` (vs `active_piloting_bumpy` at A→low-B) — but the answer *bands* behind the same-looking id differ step to step (e.g. different hour buckets). The merge orchestrator must not assume "same question id = same answer, don't ask twice" — it needs to compare the actual option sets, not just the id, before deduplicating a question across chained steps. Getting this wrong would silently misscore a pilot by reusing an answer against the wrong band.

## Knowledge base (research before building)
Research and compile upgrade guidance from reputable sources before any scoring or code:
- EN/LTF certification standards and what each class means
- National associations (BHPA, USHPA, SAHPA, DHV, FFVL and others)
- Manufacturer upgrade guidance (Ozone, Advance, Gin, Nova, Niviuk, Skywalk, etc.)
- Industry sources such as Flybubble
- Respected instructors, SIV/XC coaches and podcasts

Summarise each source's criteria in your own words with links. Never copy text. Note where sources agree, where they disagree, and how confident the consensus is.

Structure:
- `knowledge/sources.md`: every source, with link, type (official / manufacturer / industry / expert) and date
- `knowledge/steps/<step>.md`: criteria for each upgrade step, citing sources
- `knowledge/disagreements.md`: contested points (including SIV) and how the app handles them

## Scoring design
- Transparent and rule-based, not a black box. Every point traces back to a criterion in the knowledge base.
- Weights, thresholds and questions live in editable config (`config/`), not hard-coded, so the owner can tune them without touching the app code.
- Hard gates: some answers (e.g. frequent collapses they struggle to recover from, very low hours for the target class) cap the result at "Not yet" regardless of total score.
- Psychological answers carry real weight, not a side note.
- A set of test pilot personas (`tests/personas/`) with expected results, used to check the scoring behaves sensibly.

## Design context (private, don't name in the app)
The psychological questions and suggestions should be informed by the framework in `docs/design-context.md`. Use it to shape which questions we ask and how answers are interpreted, but never use its terminology in anything a pilot sees.

## Tech and hosting
- Next.js with TypeScript, matching the existing fly100.co stack.
- All scoring runs client-side from the config files. No logins, no database and no data collection for v1.
- Mobile-first, clean design.
- Hosted on fly100.co, either as a route (`fly100.co/upgrade`) in the existing app or on a subdomain (`upgrade.fly100.co`). See Open questions.

## Build order
1. **Research:** researcher agent builds the knowledge base. Owner reviews it before step 2.
2. **Rubric:** rubric-designer agent turns it into questions, weights, gates and personas for the **A → low B** step only.
3. **Build:** main session builds the app end to end for that one step.
4. **Review:** reviewer agent runs the personas, checks the safety wording and flags anything copied from sources.
5. **Expand:** add the remaining steps one at a time, repeating steps 2 and 4 for each. Once a second step exists, this is also where the current-wing/target-wing selector and step-chaining orchestrator from "Multi-step jumps" above need to get built — don't leave it for later, since the UI structure for a single hardcoded step (what exists today) needs to change to support it.

Use plan mode before each build step. Commit after each working step.

## Open questions
- Route inside the existing fly100.co app, or separate app on a subdomain? **Resolved 2026-10-06:** route (`/upgrade`) inside the main app, following the existing `/wing-load` precedent. No subdomain.
- Should results be shareable (e.g. a link a pilot can send their instructor)? Not needed for v1.
