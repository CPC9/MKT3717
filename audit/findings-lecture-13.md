# Audit Findings: Practice Problems: Conjoint Analysis Practice Problems

## Formulas Checked

- `N_profiles = L1 × L2 × ... × Lk` (Formula 1, profile count): VERIFIED — Salsa 3×3×2=18, Hotel 2×3×2=12, Notebook 2×2×2=8 all correct.
- Salsa regression: Intercept 3.333, Thick −2.333, Extra-Thick 3.833, Med-Hot 4.833, Extra-Hot 10.667, Red 1.000 (Formula 2 / Case 1 table): VERIFIED — matches lecture-05 regression output exactly.
- Hotel regression: Intercept 2.083, LargeRoom 1.417, CityView 2.050, OceanView 5.825, HighPrice −1.683 (Formula 2 / Case 2 table): VERIFIED — matches lecture-05 regression output exactly.
- Salsa part-worth ranges — Thickness 6.167, Spiciness 10.667, Color 1.000, Total 17.833 (Formula 3): VERIFIED — arithmetic confirmed (3.833−(−2.333)=6.167; 10.667−0=10.667; sum=17.833).
- Salsa relative importance — Spiciness 59.8%, Thickness 34.6%, Color 5.6% (Formula 4): VERIFIED — 10.667/17.833=59.8%, 6.167/17.833=34.6%, 1.000/17.833=5.6%; sum=100%.
- WTP per-utility-point value (Formula 5, Key Concepts section, line ~258): FLAGGED — Key Concepts uses rounded coefficient 1.68, yielding $50/1.68 = $29.76, while Case 2 (line ~431) uses the exact coefficient 1.683, yielding $50/1.683 = $29.74. This internal inconsistency produces a discrepancy in the ocean view WTP: Key Concepts states ~$174, Case 2 states ~$173.
- Notebook averaging calculations — Weight avg 2.5 vs 6.5 (diff 4.0), Battery avg 5.0 vs 4.0 (diff 1.0), Brand avg 5.5 vs 3.5 (diff 2.0), total 7.0 (Formula 6): VERIFIED — arithmetic confirmed from the listed profile rankings.
- Notebook relative importance — Weight 57.1%, Brand 28.6%, Battery 14.3% (Formula 6 summary table): VERIFIED — 4.0/7.0=57.1%, 2.0/7.0=28.6%, 1.0/7.0=14.3%; sum=100%.

## Missing Glossary Terms

- "Choice-Based Conjoint (CBC)": found in lecture-05 glossary — A variant of conjoint analysis in which respondents choose their most preferred option from a set of competing profiles rather than rating or ranking; more closely mirrors real purchasing behavior.
- "Determinant Attribute": found in lecture-05 glossary — An attribute that is both important to consumers and varies meaningfully across competing products, making it a key driver of actual choice behavior.
- "Order Effects": found in lecture-05 (Key Concepts, Order Effects and Randomization) — Bias that occurs when the sequence in which profiles are presented influences evaluations; mitigated by randomizing presentation order.

## Spot-Check Claims

- Claim 1 (most surprising — "Ocean view worth 4× more than a larger room"): VERIFIED — OceanView WTP ≈ $174, LargeRoom WTP ≈ $42; ratio = 4.14×, making "4×" a conservative but accurate characterization.
- Claim 2 (briefest definition — Level: "a specific value or category that an attribute can take"): VERIFIED — consistent with lecture-05 glossary definition and standard conjoint terminology.
- Claim 3 (relationship claim — "A high R² validates the additive utility assumption"): VERIFIED — lecture-05 (OLS Regression in Conjoint section) confirms that R²=0.956 (salsa) and R²=0.964 (hotel) indicate the additive part-worth model explains over 95% of preference variation; high R² is the standard diagnostic for model adequacy.

## Suggested Corrections

**WTP per-utility-point inconsistency**
Location: Formula 5: Willingness-to-Pay (WTP) Translation (Interpretation paragraph) and Case 2: Sentosa Hotel Staycation
Current (Key Concepts, Formula 5 Interpretation): "each utility point is worth 50/1.68 = $29.76" and ocean view WTP "~$174"
Current (Case 2 WTP Translation): "Per-utility-point value: $50 / 1.683 = $29.74" and ocean view WTP "~$173 premium"
Correction: Standardize on the exact coefficient throughout. Use the exact regression coefficient (−1.683) consistently in both sections. The correct per-utility-point value is $50 / 1.683 = $29.71 (rounded to nearest cent), and the ocean view WTP is 5.825 × $29.71 ≈ **$173** (not $174). Update the Key Concepts Interpretation paragraph to read: "each utility point is worth $50 / 1.683 = $29.71" and the ocean view indifference price to "$300 + $173 = $473" (not $474). The Case 2 line "$29.74" should also be updated to "$29.71" ($50 ÷ 1.683 = 29.7088…, rounds to $29.71 not $29.74).
Source: source-materials/Lec 5_Conjoint anlaysis practice.xlsx (Hotel regression output, HighPrice coefficient); corroborated by lecture-05 study note regression table showing HighPrice coefficient = −1.683.
