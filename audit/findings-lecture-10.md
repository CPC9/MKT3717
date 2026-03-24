# Audit Findings: Practice Problems: Final Test Study Guide

## Formulas Checked

- `Total Score = Σ (w_i × r_i)` (Concept Scoring Matrix): FLAGGED — The formula expression is correct, but the study note states ratings are "typically on a 1–10 scale." The source lecture slides (lec 3) explicitly define the rating scale as 1–5 (1 = Much Worse than Reference, 3 = Same as Reference, 5 = Much Better than Reference), consistent with the syringe worked example where the winning concept DF scored 3.45 out of a possible 5.00. The note's boat cup-holder scores (e.g., 594 out of 100×10=1000 max) are numerically consistent with a 1–10 scale, suggesting the boat cup-holder example may use a different scale than the syringe example — but describing "typically 1–10" as the standard is inconsistent with the lecture source's stated scale of 1–5.
- `Preference_j = β_0 + β_1 X_{1j} + ⋯ + β_k X_{kj} + ε_j` (Conjoint regression): VERIFIED — Variables, subscript conventions, and interpretation all match the regression approach described in lec 5 slides (cross-referenced via lecture-05 and lecture-13 study notes).
- `Relative Importance_j = Range_j / Σ Range_j × 100%` (Conjoint attribute importance): VERIFIED — Formula, worked example arithmetic (Screen 4.0/7.0 = 57.1%, Battery 1.0/7.0 = 14.3%, Brand 2.0/7.0 = 28.6%), and sum-to-100% check all confirmed against lecture-13 source cross-reference.
- `Slack = LS − ES = LF − EF`: VERIFIED — Formula and variable definitions confirmed in lec 6 CPM formulas (cross-referenced via lecture-06 and lecture-15 study notes).
- `EF = ES + Duration` (implied in forward pass description): VERIFIED — Consistent with lecture-06 and lecture-15.
- `Crash Cost Rate = (Crash Cost − Normal Cost) / (Normal Duration − Crash Duration)`: VERIFIED — Formula, variable definitions, and example arithmetic ($200/2 = $100/day) are internally consistent and match the CPM crashing logic in lecture-06.
- `Market Size = Total Units Sold × Average Price per Unit`: VERIFIED — Formula structure and the Nike yoga apparel example (TAM = 1,000,000 × SGD 300 = SGD 300M; SAM = SGD 300M × 60% = SGD 180M; SOM = SGD 180M × 10% = SGD 18M) confirmed against lecture-02 source cross-reference.

## Missing Glossary Terms

- **Poka-Yoke**: found in source at lec 5 slides (cross-referenced via lecture-05 study note, section "Poka-Yoke (Fail-Proof Design)") — a Japanese engineering concept meaning "mistake-proofing": building physical or procedural safeguards into a product or process so that errors are prevented or immediately detected. The study note covers modular design and mass customization from lec 5 but omits poka-yoke entirely, including from the Topic Area 4 (Product Design and Architecture) section and the glossary.
- **Delayed Differentiation (Postponement)**: found in source at lec 5 slides (cross-referenced via lecture-05 study note, section "Mass Customization and Postponement") — the strategy of producing a semi-finished generic product and deferring the differentiating step to the latest possible point in the supply chain to reduce inventory risk under demand uncertainty. The study note discusses modular design benefits in general terms but does not name or define postponement as a distinct concept, and it is absent from the glossary.
- **Endowment Effect**: found in source at lec 6 slides (cross-referenced via lecture-06 study note, section "Endowment Effect") — a cognitive bias in which people assign higher value to objects they own than to identical objects they do not own; demonstrated in the class Lindor chocolate experiment. The study note covers A/B testing and factorial design from lec 6 but does not mention the endowment effect, despite it being a named and tested concept in the source lecture.

## Spot-Check Claims

- Claim 1 (surprising — RWW maps onto Desirability/Viability/Feasibility as "Real = People desirable; Win = Technically feasible; Worth It = Business viable"): VERIFIED — lecture-02 study note (sourced from lec 2 slides) states verbatim: "Real = People desirable; Win = Technically feasible; Worth It = Business viable" and confirms the George Day HBR December 2007 attribution. The mapping is correctly reproduced in lecture-10.
- Claim 2 (briefest definition — Line Extension: "an addition to an existing product line of the firm, designed to broaden the portfolio for the firm's current markets"): VERIFIED — This definition is consistent with the NPD product classification taxonomy described in lecture-01 and lecture-02, and the Ace Corporation detergent pod case study answer ("a new format added to Ace's existing detergent portfolio for the same target market") correctly applies the definition. No inconsistency found.
- Claim 3 (relationship claim — "crashing a non-critical activity does not reduce project duration"): VERIFIED — lecture-06 states explicitly: "Crashing a non-critical activity has no effect on project duration." lecture-15 confirms: "Crashing a non-critical activity has no effect on project duration." The study note's statement is accurate.

## Suggested Corrections

**Concept Scoring Matrix rating scale**
Location: Key Concepts > Topic Area 3: Concept Generation and Evaluation > Concept Scoring Matrix; and Frameworks & Mental Models > Concept Scoring Matrix (Weighted)
Current: "Ratings are typically on a 1–10 scale."
Correction: "Ratings are typically on a 1–5 scale (1 = Much Worse than Reference, 3 = Same as Reference, 5 = Much Better than Reference)." Note that the boat cup-holder example scores (e.g., 594 for Concept C) imply a scale with a higher ceiling — if the source study guide PDF uses 1–10 for that specific example, the text should clarify that the standard scale is 1–5 per the lecture slides, and state explicitly if the boat example uses a different convention. As written, claiming 1–10 as the default contradicts the lecture source.
Source: lec 3 New Product Development part 2 - Concept Screening and Testing.pdf (cross-referenced via lecture-03-npd-concept-screening.md, Concept Scoring Matrix definition)

**Missing glossary entry: Poka-Yoke**
Location: Key Terms and Definitions Glossary (absent); Topic Area 4: Product Design and Architecture (absent)
Current: No entry exists for poka-yoke anywhere in the study note.
Correction: Add a glossary entry: "**Poka-Yoke**: A Japanese engineering concept meaning 'mistake-proofing' — the practice of building physical or procedural safeguards into a product or process so that user errors are prevented before they occur or detected immediately before causing harm. [Related: Modular Design, Product Architecture, Fail-Proof Design]" Also consider adding a sub-section under Topic Area 4 alongside modular design.
Source: lec 5 Conjoint Analysis for Product Design.pdf (cross-referenced via lecture-05-conjoint-analysis.md, section "Poka-Yoke (Fail-Proof Design)")

**Missing glossary entry: Delayed Differentiation / Postponement**
Location: Key Terms and Definitions Glossary (absent); Topic Area 4: Product Design and Architecture (absent)
Current: Modular design is discussed in terms of reducing inventory risk and enabling mass customization, but the named strategy of postponement is never introduced.
Correction: Add a glossary entry: "**Delayed Differentiation (Postponement)**: A supply chain strategy in which a generic, semi-finished product is produced first and the differentiating step (e.g., packaging, customization, final assembly) is deferred to the latest possible point in the supply network, reducing the risk of holding finished-goods inventory for demand patterns that may not materialize. Enabled by modular product architecture. [Related: Modular Design, Mass Customization, Demand Uncertainty]"
Source: lec 5 Conjoint Analysis for Product Design.pdf (cross-referenced via lecture-05-conjoint-analysis.md, section "Mass Customization and Postponement")
