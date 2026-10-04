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
5. **Expand:** add the remaining steps one at a time, repeating steps 2 and 4 for each.

Use plan mode before each build step. Commit after each working step.

## Open questions
- Route inside the existing fly100.co app, or separate app on a subdomain?
- Should results be shareable (e.g. a link a pilot can send their instructor)? Not needed for v1.
