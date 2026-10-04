# EN/LTF classification baseline (context for every step)

This is the shared foundation the step files build on. It is NOT one of the upgrade steps itself — it's what "A", "B", "C", "D" actually mean before we get into sub-classes and transitions.

## What the official standard actually says

EN 926-2 (the European standard) and LTF (the German standard, aligned with EN since roughly 2010) both grade a wing by putting it through a fixed set of manoeuvres and scoring the worst result the wing achieves on any single manoeuvre. That single worst score becomes the wing's overall class. See [BHPA's EN class summary](https://www.bhpa.co.uk/pdf/En_PG_Classes.pdf), [DHPC's advice document](https://www.dhpc.org.uk/assets/files/Exam%20Revision%20Material/Glider%20ratings%20-%20en926.pdf), and [DHV's classification page](https://www.dhv.de/en/type-inspection/classification/).

In our own words, the four classes describe a sliding scale of how much the wing forgives you versus how much it expects you to actively fly it:

- **A** — maximum passive safety, highly resistant to leaving normal flight, suitable for pilots still in training.
- **B** — good passive safety, forgiving, but with less resistance to disturbance than A; some B wings are approved for training use if the manufacturer says so.
- **C** — moderate passive safety; the wing can react dynamically to turbulence or pilot error and getting back to normal flight may need precise, correct pilot input; intended for pilots who fly actively, regularly, and understand they're trading safety margin for performance.
- **D** — demanding; reactions to turbulence or error can be abrupt, and recovery needs precise pilot input; intended for pilots who are well practised in recovery, fly very actively, and have real experience in turbulent air.

**CCC is not an EN/LTF safety class at all.** It's a FAI/CIVL competition-equipment specification (aspect ratio capped at 7.9, speed-bar travel capped at 18cm, no mid-span concave sections, and a slightly relaxed but still demanding test-reaction window). See [FAI Sporting Code Section 7G](https://www.fai.org/sites/default/files/civl/documents/sporting_code_s7_g_-_ccc_paragliders_requirements_2020_1.0_0.pdf) and [FAI's history of serial vs competition class](https://www.fai.org/news/brief-history-serial-vs-competition-class-paragliders). CCC wings are not independently certified against EN A-D at all — they live outside that ladder, gated by competition entry rules rather than a passive-safety rating.

## An important, consistent finding across every official body we checked

None of the certifying bodies themselves (CEN/EN, DHV, LTF) publish pilot-hours or pilot-experience thresholds. Their job is to classify the *wing*, not to say when a *pilot* is ready for it. Every hours/skills figure anywhere in this knowledge base comes from national associations' training syllabi, manufacturers, retailers, instructors, or community discussion — never from the certifying standard itself. This matters for the app: there is no single "official" hours table to defer to: we're synthesising practitioner consensus, not quoting a regulator.

## Sub-class labels (low/mid/high B, 2-liner C) are not official

EN/LTF only recognise A, B, C, D. "Low B", "mid B", "high B", "low C", "high C" and "2-liner C" are informal industry/community shorthand that different manufacturers, retailers and forums apply inconsistently. See `knowledge/disagreements.md` for how badly these disagree. Treat every sub-class boundary in the step files as a soft, descriptive band — never a precise cutoff.

## National pilot-rating ladders are a separate system from wing class

BHPA (CP → Pilot → Advanced Pilot), USHPA (P1–P5), FFVL (green → blue → brown brevets) and SAHPA (Basic → Sport licence) all grade the *pilot*, not the wing, and none of them map cleanly onto each other or onto EN A–D. USHPA's P2 syllabus explicitly defers to "whatever the manufacturer recommends for Beginner-to-Intermediate pilots" rather than specifying an EN letter itself — see [AirAddict's P2 requirements summary](https://airaddict.com/p2-certification-requirements/). This is a second reason the app should ask about hours/skills/conditions directly rather than asking "what's your pilot rating?" — most users, especially outside the UK/US, won't hold one of these formal ratings anyway.
