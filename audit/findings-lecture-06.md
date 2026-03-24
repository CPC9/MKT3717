# Audit Findings: Lecture 6: Market Experiment and Project Management

## Formulas Checked
- `EF = ES + t`: VERIFIED — Matches slide 53 exactly.
- `LS = LF - t`: VERIFIED — Matches slide 53 exactly.
- `Slack (S) = LS - ES = LF - EF`: VERIFIED — Matches slide 53 exactly.
- `Y_i = a + b * X_i` (regression): VERIFIED — Slide 27 states `Y = a + bX`; the subscript notation is an acceptable expansion.
- Path duration table (A-I-K=33, A-F-K=28, A-C-G-J-K=67, B-D-H-J-K=69, B-E-J-K=43): VERIFIED — Matches slide 52 exactly.
- Activity A values (ES=0, EF=12, LF=14, LS=2, S=2): VERIFIED — Consistent with slides 56–59.
- Activity B values (ES=0, EF=9, LF=9, LS=0, S=0): VERIFIED — Consistent with slides 56–59.
- ES_J = max(EF_E, EF_G, EF_H) = max(33, 57, 59) = 59: VERIFIED — Consistent with the forward-pass values shown in slide 56 (EF_E=33, EF_G=57, EF_H=59).

## Missing Glossary Terms
- **Incentive Compatibility**: found in source at slide 30 (Step 3 of experimental design checklist) — A design check ensuring subjects have the right incentives to respond honestly and in a way that reflects real behavior; unincentivized surveys are prone to stated-preference biases. Not present as a standalone glossary entry in the study note (it is mentioned in the Frameworks section but not defined in the glossary).

## Spot-Check Claims
- Claim 1 (most surprising — iterative A/B testing may never reach global optimum): VERIFIED — Slide 19 states explicitly: "If you iterate A/B testing, starting from the first cell [short text & $24 Cabernet Sauvignon], you may never reach the most profitable combination of [long text & $32 Rioja]."
- Claim 2 (briefest definition — Activity as "smallest unit of work"): VERIFIED — Slide 40 defines Activity as "The smallest unit of work effort consuming both time and resources that the project manager can schedule and control."
- Claim 3 (relationship claim — "gap of over $2.75" from endowment effect mug experiment): FLAGGED — The study note states "a gap of over $2.75 driven purely by ownership status." The source (slide 22) gives median seller price of $5.25 and median buyer price of $2.50. The arithmetic difference is exactly $2.75, not "over $2.75."

## Suggested Corrections

**Endowment effect gap arithmetic**
Location: Key Concepts > Endowment Effect (Context paragraph); also Case Studies > Kahneman, Knetsch, and Thaler Mug Experiment
Current: "a gap of over $2.75 driven purely by ownership status"
Correction: "a gap of $2.75 driven purely by ownership status"
Source: lec 6 Market Experiment and Project Management.pdf, slide 22
