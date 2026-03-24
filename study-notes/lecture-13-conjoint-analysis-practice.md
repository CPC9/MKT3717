---
title: "Practice Problems: Conjoint Analysis Practice Problems"
type: supplementary
source_files:
  - "source-materials/Lec 5_Conjoint anlaysis practice.xlsx"
topics:
  - "Conjoint Analysis"
  - "Part-Worth Utilities"
  - "Relative Importance"
  - "Market Share Simulation"
lecture_number: 13
---

## Overview

Conjoint analysis is a survey-based quantitative technique that measures how consumers value the individual attributes that make up a product or service. The foundational assumption is that any product can be treated as a bundle of discrete attributes, and that a consumer's total preference for a product equals the sum of the utilities derived from each individual attribute level. This additive model — sometimes called the part-worth utility model — allows researchers to reverse-engineer consumer preferences from observed choices or ratings, rather than relying on respondents to articulate what they want directly.

The worksheet practices three complete conjoint problems. The first uses a salsa product with three attributes (thickness, spiciness, and color) spanning 18 possible combinations and asks students to estimate part-worth utilities through regression, then compute relative importance scores for each attribute. The second considers a Sentosa hotel staycation package with room size, view type, and price across 12 combinations, extending the analysis to monetary willingness-to-pay translation. The third is a class exercise on notebook computers (weight, battery life, and brand across 8 combinations) that introduces a manual averaging method for estimating attribute importance without regression software. Together, these three problems build the full skill set: setting up dummy variables, running regression, reading coefficients, computing relative importance, and translating utility scores into price equivalents.

The worksheet is paired with the Lecture 5 slides from MKT3717 and directly supports the quantitative portion of any exam or written assessment that tests conjoint methodology. Students who can work through all three problems end-to-end — from attribute table to regression output to managerial interpretation — will have mastered the core analytical workflow that the course requires.

---

## Key Concepts

### Attributes and Levels

An **attribute** is a product characteristic that matters to consumers and varies meaningfully across product alternatives. A **level** is a specific value or category that an attribute can take. In the salsa example: the attribute is "Thickness" and its levels are Regular, Thick, and Extra-Thick. The worksheet always begins by identifying the full attribute-level structure, because this determines the number of product profiles and the regression specification.

### Full Factorial vs. Fractional Factorial Design

A **full factorial design** presents respondents with every possible combination of attribute levels. With 3 attributes at 3 × 3 × 2 levels, there are 18 profiles; with 2 × 3 × 2, there are 12 profiles; with 2 × 2 × 2, there are 8 profiles. All three worksheet problems use full factorial designs, making every profile observable and the regression straightforward. A **fractional factorial design** presents only a carefully chosen subset of profiles — useful when the number of combinations is too large for respondents to evaluate without fatigue, but requires more advanced design principles.

### Preference Elicitation: Rating vs. Ranking

The salsa problem collects **rankings** (1 = most preferred, 18 = least preferred — a lower rank number means higher preference). The hotel problem collects **ratings** (0–10 scale, 10 = highest preference). Both are valid dependent variables for regression; the interpretation differs slightly. With rankings, a lower coefficient on a dummy variable indicates the attribute level is preferred (because lower rank = better). With ratings, a higher coefficient indicates higher preference. Students must keep track of the scale direction.

### Dummy Variable Coding and Baseline Selection

For each attribute with k levels, conjoint regression uses k − 1 dummy variables, setting one level as the **baseline** (omitted category). The coefficient on each dummy measures the utility difference between that level and the baseline. In the worksheet:

- **Salsa**: Baseline = Regular thickness, Mild spiciness, Green color
- **Hotel**: Baseline = 40m² room, Garden view, $300/night price
- **Notebook**: Baseline = 2kg weight, 4-hour battery, Dell brand (implicit in averaging method)

Choosing the baseline does not affect the relative importance conclusions, but it does affect how individual coefficients are interpreted.

### Part-Worth Utilities

A **part-worth utility** is the regression coefficient associated with a specific attribute level. It represents the change in preference (rating or rank score) when moving from the baseline level to that level, holding all other attributes constant. Part-worths are the raw material for all subsequent analysis: computing total product utility, comparing products, and calculating willingness to pay.

### Relative Importance

**Relative importance** quantifies how much of the total variation in consumer preference is explained by each attribute. It is calculated by finding the range of part-worths within each attribute (maximum part-worth minus minimum part-worth), summing all ranges, and expressing each attribute's range as a percentage of the total. In the salsa example, spiciness dominates at 59.8%, while color barely matters at 5.6%.

### Willingness-to-Pay Translation

When price is included as one attribute, its coefficient can convert utility differences into monetary values. The price coefficient tells you how much utility changes per unit of price change. Dividing any other attribute's utility by the absolute value of the price coefficient per dollar gives the dollar amount a consumer would be willing to pay for that attribute improvement.

---

## Frameworks & Mental Models

### The Conjoint Workflow: Six Steps

**Step 1 — Define attributes and levels.**
List every product characteristic that meaningfully differentiates options in the category. Assign specific, discrete, unambiguous levels to each attribute. Count the total number of profiles: multiply the number of levels across all attributes (e.g., 3 × 3 × 2 = 18).

**Step 2 — Design the survey and collect preference data.**
In a full factorial design, present all profiles to respondents. Ask them to rate (0–10) or rank (1 to N) each profile. Randomize presentation order across respondents to control for order effects.

**Step 3 — Set up the regression data table.**
Create a spreadsheet with one row per profile. The dependent variable column contains the rating or rank score. For each attribute, create k − 1 dummy variable columns (one per non-baseline level): assign 1 if that profile has that level, 0 otherwise.

**Step 4 — Run the regression.**
Use Excel's Data Analysis Toolpak (Regression). Select the rating/ranking column as Y and all dummy variable columns as X. Record the coefficient (part-worth) for each dummy variable and check p-values for statistical significance (threshold: p < 0.05).

**Step 5 — Compute relative importance.**
For each attribute, find the maximum part-worth among its levels and the minimum part-worth (the baseline level has part-worth = 0 by definition, so the range is max coefficient − min coefficient, where the minimum is either 0 or a negative coefficient). Sum all ranges. Divide each attribute's range by the total to get its relative importance percentage.

**Step 6 — Interpret and translate to strategy.**
Identify which attributes drive preference most. For price-included studies, translate utility differences into willingness-to-pay dollar amounts. Use results to choose the optimal product design and set pricing strategy.

### The Averaging Method (Manual, No Regression)

For simple two-level attributes studied in class exercises, a quick non-regression approach works:

1. List all profiles and their ranks/ratings.
2. For each level of an attribute, compute the **average rank** across all profiles that have that level.
3. The attribute's importance is approximated by the **difference between the average ranks** (or ratings) of its two levels — a larger difference means the attribute matters more.
4. Sum all pairwise differences and express each as a percentage to get approximate relative importance.

This method is used explicitly in the notebook computer class exercise on slide 17.

---

## Formulas & Quantitative Tools

---

### Formula 1: Total Number of Profiles (Full Factorial)

**Formula:**

$$N_{profiles} = L_1 \times L_2 \times \cdots \times L_k$$

**Variables:**

| Variable | Meaning |
|---|---|
| N_profiles | Total number of distinct product profiles |
| L_i | Number of levels for attribute i |
| k | Total number of attributes |

**Interpretation:** Every combination of attribute levels yields one distinct profile. This is the minimum number of profiles a full factorial design requires respondents to evaluate.

**Example (from worksheet):**
- Salsa: 3 (thickness) × 3 (spiciness) × 2 (color) = **18 profiles**
- Hotel: 2 (room size) × 3 (view) × 2 (price) = **12 profiles**
- Notebook: 2 (weight) × 2 (battery) × 2 (brand) = **8 profiles**

**Common Mistakes:**
- Adding levels instead of multiplying them.
- Forgetting that the formula gives profiles, not the number of dummy variables needed.

---

### Formula 2: Conjoint Regression Model

**Formula (Salsa):**

$$\text{Rank}_i = \beta_0 + \beta_1 \text{Thick}_i + \beta_2 \text{ExtraThick}_i + \beta_3 \text{MediumHot}_i + \beta_4 \text{ExtraHot}_i + \beta_5 \text{Red}_i + \varepsilon_i$$

**Formula (Hotel):**

$$Y_i = \beta_0 + \beta_1 \text{LargeRoom}_i + \beta_2 \text{CityView}_i + \beta_3 \text{OceanView}_i + \beta_4 \text{HighPrice}_i + \varepsilon_i$$

**Variables:**

| Variable | Meaning |
|---|---|
| Y_i / Rank_i | Preference score (rating 0–10) or ranking number for profile i |
| β_0 | Intercept — predicted score for the baseline profile (all baseline levels) |
| β_j | Part-worth utility for the j-th non-baseline attribute level |
| Dummy_i | 1 if profile i has that level, 0 otherwise |
| ε_i | Regression error term |

**Interpretation:** Each β coefficient represents the change in preference score when moving from the baseline level to the specified level, holding all other attributes at their baseline. A positive β (in a rating-based study) means the level is preferred over baseline. A negative β means it is less preferred. In the hotel model, β_4 on HighPrice is negative (–1.683), confirming consumers prefer the lower price.

**Example — Salsa regression output (from slide 11):**

| Variable | Coefficient | p-value | Interpretation |
|---|---|---|---|
| Intercept | 3.333 | 0.001 | Baseline: Regular, Mild, Green |
| Thick | −2.333 | 0.010 | Thick preferred over Regular (lower rank = better) |
| Extra-Thick | 3.833 | < 0.001 | Extra-Thick less preferred than Regular |
| Med-Hot | 4.833 | < 0.001 | Medium-Hot less preferred than Mild |
| Extra-Hot | 10.667 | < 0.001 | Extra-Hot much less preferred |
| Red | 1.000 | 0.138 | Red vs. Green not statistically significant |

Note: In the ranking regression, a negative coefficient means the rank number decreases (i.e., preference improves). The model R² = 0.956, indicating excellent fit.

**Example — Hotel regression output (from slide 15):**

| Variable | Coefficient | p-value | Interpretation |
|---|---|---|---|
| Intercept | 2.083 | 0.002 | Baseline: 40m², Garden view, $300 |
| LargeRoom (+10m²) | 1.417 | 0.008 | Larger room adds 1.42 utility points |
| CityView | 2.050 | 0.004 | City view adds 2.05 utility points |
| OceanView | 5.825 | < 0.001 | Ocean view adds 5.83 utility points |
| HighPrice (+$50) | −1.683 | 0.003 | $50 price increase reduces utility by 1.68 |

The estimated hotel model: **Y = 2.08 + 1.42 LargeRoom + 2.05 CityView + 5.83 OceanView − 1.683 HighPrice**

**Common Mistakes:**
- Including all k levels for an attribute instead of k − 1 dummies (causes perfect multicollinearity — Excel will drop a variable and results become uninterpretable).
- Forgetting that the intercept represents the baseline profile, not an overall mean.
- Misreading the sign of the coefficient without accounting for scale direction (rating vs. ranking).

---

### Formula 3: Part-Worth Range for Each Attribute

**Formula:**

$$\text{Range}_j = \max(\text{part-worths for attribute } j) - \min(\text{part-worths for attribute } j)$$

**Variables:**

| Variable | Meaning |
|---|---|
| Range_j | Utility swing for attribute j |
| max(part-worths) | Highest part-worth among all levels of attribute j (including 0 for baseline) |
| min(part-worths) | Lowest part-worth among all levels of attribute j (including 0 for baseline) |

**Interpretation:** The range measures the total utility "swing" driven by varying that attribute across its levels. A large range means the attribute strongly affects consumer preference; a small range means it barely matters.

**Example — Salsa:**
- Thickness: levels are Regular (0, baseline), Thick (−2.333), Extra-Thick (3.833). Max = 3.833, Min = −2.333. Range = 3.833 − (−2.333) = **6.167**
- Spiciness: Mild (0), Med-Hot (4.833), Extra-Hot (10.667). Max = 10.667, Min = 0. Range = **10.667**
- Color: Green (0), Red (1.000). Max = 1.000, Min = 0. Range = **1.000**
- Total range = 6.167 + 10.667 + 1.000 = **17.833**

**Common Mistakes:**
- Omitting 0 (the baseline) when computing the min or max — the baseline always contributes a part-worth of zero and must be included in the comparison.
- Using absolute values of coefficients instead of signed values when computing the range.

---

### Formula 4: Relative Importance of Each Attribute

**Formula:**

$$\text{Relative Importance}_j = \frac{\text{Range}_j}{\sum_{j=1}^{k} \text{Range}_j} \times 100\%$$

**Variables:**

| Variable | Meaning |
|---|---|
| Relative Importance_j | Percentage of total utility variation explained by attribute j |
| Range_j | Utility range for attribute j (from Formula 3) |
| k | Total number of attributes |

**Interpretation:** Relative importance percentages sum to 100% across all attributes. The attribute with the highest percentage is the most important driver of consumer preference and should receive the most design and investment attention.

**Example — Salsa (from slide 11):**

| Attribute | Range | Relative Importance |
|---|---|---|
| Spiciness | 10.667 | 10.667 / 17.833 = **59.8%** |
| Thickness | 6.167 | 6.167 / 17.833 = **34.6%** |
| Color | 1.000 | 1.000 / 17.833 = **5.6%** |
| **Total** | **17.833** | **100%** |

**Common Mistakes:**
- Dividing by the wrong total (e.g., using the total of absolute coefficients rather than the total of ranges).
- Reporting importance without verifying that the percentages sum to 100%.

---

### Formula 5: Willingness-to-Pay (WTP) Translation

**Formula:**

$$\text{WTP for attribute improvement} = \frac{\text{Part-worth of attribute level}}{\left|\text{Price coefficient per dollar}\right|}$$

**Variables:**

| Variable | Meaning |
|---|---|
| WTP | Additional dollars consumer will pay for the attribute upgrade |
| Part-worth | Regression coefficient for the non-price attribute level |
| Price coefficient per dollar | The β on the price dummy, divided by the dollar difference the dummy represents |

**Interpretation:** If a $50 price increase corresponds to a utility loss of −1.68, then each utility point is worth 50/1.683 = $29.71. Multiplying any attribute's part-worth by $29.71 gives the maximum additional price that makes consumers indifferent between having and not having that attribute.

**Example — Hotel (from slide 16):**
- Price coefficient: −1.683 for a $50 increase → each utility point = $50 / 1.683 = **$29.71 per utility point**
- Room size (+10m²): part-worth = 1.417 → WTP = 1.417 × $29.71 = **~$42** above baseline price ($300 + $42 = $342)
  - Consumer is indifferent between 40m² at $300 and 50m² at $342
- City view: part-worth = 2.050 → WTP = 2.050 × $29.71 = **~$61** ($300 + $61 = $361)
  - Consumer is indifferent between garden view at $300 and city view at $361
- Ocean view: part-worth = 5.825 → WTP = 5.825 × $29.71 = **~$173** ($300 + $173 = $473)
  - Consumer is indifferent between garden view at $300 and ocean view at $474

**Common Mistakes:**
- Forgetting to adjust the price coefficient for the dollar scale of the dummy variable (the dummy captures $50 increments, not $1 increments, so you must divide to get per-dollar utility).
- Applying WTP translation when price is not statistically significant.
- Treating WTP as a precise ceiling price rather than a consumer indifference point.

---

### Formula 6: Attribute Importance via Averaging (Manual Method)

**Formula:**

$$\text{Average score for level L} = \frac{\sum \text{(scores of all profiles containing level L)}}{\text{Number of profiles containing level L}}$$

$$\text{Attribute importance proxy} = \left|\text{Average}_{L1} - \text{Average}_{L2}\right|$$

**Variables:**

| Variable | Meaning |
|---|---|
| Average_L1 | Mean rating/ranking for profiles that have level 1 of the attribute |
| Average_L2 | Mean rating/ranking for profiles that have level 2 of the attribute |
| Importance proxy | Absolute difference between the two level averages |

**Interpretation:** For two-level attributes, this method approximates the part-worth difference without regression. The attribute with the largest average difference across its levels is the most important. The method works cleanly only when all attributes have exactly two levels (fully orthogonal design).

**Example — Notebook computer class exercise (from slide 17):**

Profiles and rankings:

| Combination | Rank |
|---|---|
| 1.5kg, 4 hours, HP | 4 |
| 2kg, 6 hours, Dell | 5 |
| 2kg, 4 hours, HP | 8 |
| 1.5kg, 6 hours, HP | 3 |
| 1.5kg, 4 hours, Dell | 2 |
| 2kg, 6 hours, HP | 7 |
| 2kg, 4 hours, Dell | 6 |
| 1.5kg, 6 hours, Dell | 1 |

*Note: Rank 1 = most preferred, Rank 8 = least preferred.*

**Weight calculations:**
- 1.5kg profiles: ranks 4, 3, 2, 1 → Average = (4+3+2+1)/4 = **2.5**
- 2kg profiles: ranks 5, 8, 7, 6 → Average = (5+8+7+6)/4 = **6.5**
- Difference = |2.5 − 6.5| = **4.0** (lower average rank = more preferred, so 1.5kg is strongly preferred)

**Battery life calculations:**
- 4-hour profiles: ranks 4, 8, 2, 6 → Average = (4+8+2+6)/4 = **5.0**
- 6-hour profiles: ranks 5, 3, 7, 1 → Average = (5+3+7+1)/4 = **4.0**
- Difference = |5.0 − 4.0| = **1.0** (6-hour battery slightly preferred but weak effect)

**Brand calculations:**
- HP profiles: ranks 4, 8, 3, 7 → Average = (4+8+3+7)/4 = **5.5**
- Dell profiles: ranks 5, 2, 6, 1 → Average = (5+2+6+1)/4 = **3.5**
- Difference = |5.5 − 3.5| = **2.0** (Dell is preferred over HP)

**Summary of importance:**

| Attribute | Average Difference | Approximate Importance |
|---|---|---|
| Weight | 4.0 | 4.0 / 7.0 = **57.1%** — Most important |
| Brand | 2.0 | 2.0 / 7.0 = **28.6%** |
| Battery | 1.0 | 1.0 / 7.0 = **14.3%** — Least important |
| Total | 7.0 | 100% |

**Conclusion for notebook exercise:** Weight is the most important attribute for this consumer; battery life is the least important.

**Common Mistakes:**
- Computing the average of all ranks rather than the average for each specific level.
- Treating the absolute difference as the final importance without normalizing to percentages.
- Applying this averaging method to attributes with three or more levels, where it becomes ambiguous.

---

## Case Studies

### Case 1: Salsa Product — Identifying Dominant Flavor Attributes

**Scenario:** A food company is developing a new salsa for young consumers and wants to know which product attributes drive preference most strongly.

**Attribute structure:**
- Thickness: 3 levels (Regular, Thick, Extra-Thick)
- Spiciness: 3 levels (Mild, Medium-Hot, Extra-Hot)
- Color: 2 levels (Green, Red)
- Total profiles: 3 × 3 × 2 = **18**

**Elicitation method:** One consumer ranks all 18 profiles from 1 (most preferred) to 18 (least preferred).

**Selected actual rankings:**

| Thickness | Spiciness | Color | Rank |
|---|---|---|---|
| Regular | Mild | Red | 4 |
| Regular | Mild | Green | 3 |
| Regular | Medium-Hot | Red | 10 |
| Regular | Medium-Hot | Green | 6 |
| Regular | Extra-Hot | Red | 15 |
| Regular | Extra-Hot | Green | 16 |
| Thick | Mild | Red | 2 |
| Thick | Mild | Green | 1 |
| Thick | Medium-Hot | Red | 8 |
| Thick | Medium-Hot | Green | 5 |
| Thick | Extra-Hot | Red | 13 |
| Thick | Extra-Hot | Green | 11 |
| Extra-Thick | Mild | Red | 7 |
| Extra-Thick | Mild | Green | 9 |
| Extra-Thick | Medium-Hot | Red | 14 |
| Extra-Thick | Medium-Hot | Green | 12 |
| Extra-Thick | Extra-Hot | Red | 17 |
| Extra-Thick | Extra-Hot | Green | 18 |

**Regression model:**
Rank_i = β_0 + β_1 Thick_i + β_2 ExtraThick_i + β_3 MediumHot_i + β_4 ExtraHot_i + β_5 Red_i + ε_i

**Regression output (R² = 0.956, Standard Error = 1.333, n = 18):**

| Variable | Coefficient | p-value |
|---|---|---|
| Intercept | 3.333 | 0.001 |
| Thick | −2.333 | 0.010 |
| Extra-Thick | 3.833 | < 0.001 |
| Med-Hot | 4.833 | < 0.001 |
| Extra-Hot | 10.667 | < 0.001 |
| Red | 1.000 | 0.138 (not significant) |

**Relative importance results:**
- Spiciness range: 10.667 − 0 = 10.667 → **59.8%**
- Thickness range: 3.833 − (−2.333) = 6.167 → **34.6%**
- Color range: 1.000 − 0 = 1.000 → **5.6%**

**Strategic implication:** The company should prioritize getting the spiciness level right (consumers strongly prefer mild salsa and strongly reject extra-hot). Thickness matters moderately. Color is not statistically significant and should not be a design priority. Thick salsa is preferred over both Regular and Extra-Thick.

---

### Case 2: Sentosa Hotel Staycation — Pricing Attribute Upgrades

**Scenario:** A hotel manager wants to determine how much consumers value different room features in order to set prices for upgrade packages.

**Attribute structure:**
- Room size: 2 levels (40m² baseline, 50m²)
- View: 3 levels (Garden view baseline, City view, Ocean view)
- Price: 2 levels ($300/night baseline, $350/night)
- Total profiles: 2 × 3 × 2 = **12**

**Elicitation method:** One respondent rates each of the 12 profiles on a 0–10 scale (10 = highest preference). Randomization of presentation order minimizes order effects.

**Regression model:**
Y_i = β_0 + β_1 LargeRoom_i + β_2 CityView_i + β_3 OceanView_i + β_4 HighPrice_i + ε_i

**Estimated model (R² = 0.964, n = 12):**
Y = **2.08 + 1.42 LargeRoom + 2.05 CityView + 5.83 OceanView − 1.68 HighPrice**

**Regression output:**

| Variable | Coefficient | Std. Error | p-value |
|---|---|---|---|
| Intercept | 2.083 | 0.435 | 0.002 |
| LargeRoom (+10m²) | 1.417 | 0.389 | 0.008 |
| CityView | 2.050 | 0.476 | 0.004 |
| OceanView | 5.825 | 0.476 | < 0.001 |
| HighPrice (+$50) | −1.683 | 0.389 | 0.003 |

**WTP Translation:**
- Per-utility-point value: $50 / 1.683 = $29.71
- 50m² room: WTP = 1.417 × $29.74 ≈ **$42** premium → indifference price = **$342**
- City view: WTP = 2.050 × $29.74 ≈ **$61** premium → indifference price = **$361**
- Ocean view: WTP = 5.825 × $29.74 ≈ **$173** premium → indifference price = **$474**

**Strategic implication:** Ocean view commands an enormous price premium (up to $174/night above the base). City view is worth $61. The room size upgrade is relatively affordable to offer but commands a modest premium. The manager should price ocean view rooms aggressively and invest in views over floor space expansion.

---

### Case 3: Notebook Computer — Class Exercise with Manual Averaging

**Scenario:** A consumer is evaluating notebook computers across three attributes. Determine which attribute is most important to this consumer using the manual averaging method.

**Attribute structure:**
- Weight: 2 levels (1.5kg, 2kg)
- Battery life: 2 levels (4 hours, 6 hours)
- Brand: 2 levels (HP, Dell)
- Total profiles: 2 × 2 × 2 = **8**

**Rankings (1 = most preferred, 8 = least preferred):**

| Weight | Battery | Brand | Rank |
|---|---|---|---|
| 1.5kg | 4 hours | HP | 4 |
| 2kg | 6 hours | Dell | 5 |
| 2kg | 4 hours | HP | 8 |
| 1.5kg | 6 hours | HP | 3 |
| 1.5kg | 4 hours | Dell | 2 |
| 2kg | 6 hours | HP | 7 |
| 2kg | 4 hours | Dell | 6 |
| 1.5kg | 6 hours | Dell | 1 |

**Manual calculations:**

*Weight:*
- Avg rank for 1.5kg: (4 + 3 + 2 + 1) / 4 = **2.5**
- Avg rank for 2kg: (5 + 8 + 7 + 6) / 4 = **6.5**
- Difference = **4.0** (1.5kg strongly preferred — lower rank = better)

*Battery life:*
- Avg rank for 4-hour: (4 + 8 + 2 + 6) / 4 = **5.0**
- Avg rank for 6-hour: (5 + 3 + 7 + 1) / 4 = **4.0**
- Difference = **1.0** (6-hour marginally preferred)

*Brand:*
- Avg rank for HP: (4 + 8 + 3 + 7) / 4 = **5.5**
- Avg rank for Dell: (5 + 2 + 6 + 1) / 4 = **3.5**
- Difference = **2.0** (Dell preferred)

**Relative importance:**

| Attribute | Difference | Importance |
|---|---|---|
| Weight | 4.0 | **57.1%** — Most important |
| Brand | 2.0 | **28.6%** |
| Battery life | 1.0 | **14.3%** — Least important |

**Answer:** Weight is the most important attribute; battery life is the least important.

---

## Key Takeaways

- **Always count profiles before building the regression.** Multiply the number of levels across all attributes to get the full factorial count. This tells you how many rows your data table should have and whether a full factorial design is feasible.
- **Use k − 1 dummy variables per attribute, never k.** Including all levels causes perfect multicollinearity and makes the regression impossible to estimate. One level per attribute must serve as the baseline (omitted category) and receives a part-worth of zero by definition.
- **Read the scale direction before interpreting coefficients.** In ranking studies, a negative coefficient on a dummy means the rank number decreases, i.e., that level is more preferred. In rating studies, a positive coefficient means higher preference. Mixing these up inverts the entire interpretation.
- **Relative importance comes from ranges, not individual coefficients.** An attribute with a large range across its levels — not just a large coefficient on one level — is the important one. Always compute max part-worth minus min part-worth (including zero for the baseline) before normalizing.
- **Statistical significance matters for color in the salsa case.** The Red color coefficient (p = 0.138) is not statistically significant, meaning the data do not support the conclusion that color affects preference. Managerially, this means color decisions can be made on cost or aesthetic grounds, not consumer preference grounds.
- **The price coefficient enables willingness-to-pay translation.** Divide any attribute's part-worth by the absolute price coefficient per dollar to get the dollar premium consumers would pay for that attribute improvement. This directly informs product pricing and upgrade package design.
- **Ocean view is worth 4× more than a larger room in the hotel case.** When attributes vary widely in their part-worth ranges, the differences in consumer valuation can be striking and counterintuitive — this is the key managerial insight that regression-based conjoint delivers over simple survey questions.
- **The manual averaging method only works cleanly for two-level attributes.** For attributes with three or more levels, averaging across levels conflates distinct part-worths and yields misleading results. Use regression for three-plus level attributes.
- **A high R² validates the additive utility assumption.** The salsa model has R² = 0.956 and the hotel model has R² = 0.964, meaning the additive part-worth model explains over 95% of the variation in preference. Low R² would signal attribute interactions or nonlinearities that violate the model's assumptions.
- **Conjoint results apply to the population you surveyed.** A single respondent's part-worths (as in the salsa ranking exercise) reveal that individual's preferences, not the market's. Real conjoint studies average part-worths across many respondents and can segment the market by identifying clusters of consumers with similar part-worth patterns.

---

## Key Terms and Definitions Glossary

**Additive Utility Model**: The assumption that a consumer's total utility for a product equals the simple sum of the utilities derived from each individual attribute level, with no interaction effects between attributes. [Related: Part-Worth Utility, Conjoint Analysis]

**Attribute**: A product characteristic that meaningfully differentiates alternatives in a product category, described in discrete and unambiguous terms. Examples include thickness, battery life, price, and brand. [Related: Level, Full Factorial Design]

**Baseline Level**: The omitted reference category for a given attribute in conjoint regression. All other levels' part-worths are measured relative to the baseline, which is assigned a part-worth of zero. [Related: Dummy Variable, Part-Worth Utility]

**Conjoint Analysis**: A survey-based quantitative technique that determines how consumers value different attributes of a product or service by presenting them with product profiles and analyzing their ratings, rankings, or choices via regression. [Related: Part-Worth Utility, Trade-Off Analysis]

**Dummy Variable**: A binary (0/1) indicator variable used in regression to represent whether a profile contains a specific attribute level. For an attribute with k levels, k − 1 dummy variables are required. [Related: Baseline Level, Regression Analysis]

**Full Factorial Design**: A conjoint study design in which respondents evaluate every possible combination of attribute levels. The total number of profiles equals the product of the number of levels across all attributes. [Related: Fractional Factorial Design, Profile]

**Fractional Factorial Design**: A conjoint study design in which only a carefully selected subset of all possible attribute level combinations is presented to respondents. Used when full factorial designs would create too many profiles for practical evaluation. [Related: Full Factorial Design]

**Level**: A specific value or category that an attribute can take. For example, the attribute "Battery Life" may have levels of 4 hours and 6 hours. [Related: Attribute, Profile]

**Ordinal Ranking**: A preference elicitation method in which respondents assign rank numbers (1 = most preferred) to product profiles, producing an ordered list without equal intervals between ranks. Contrasted with rating-scale elicitation. [Related: Rating Scale, Preference Elicitation]

**Part-Worth Utility**: The regression coefficient associated with a specific attribute level, representing the contribution of that level to overall product preference relative to the baseline level. Also called a part-worth. [Related: Additive Utility Model, Regression Analysis]

**Preference Elicitation**: The method by which respondents express their product preferences in a conjoint study. Common methods include rank-ordering, rating scales (0–10), choice between pairs (choice-based conjoint), and hybrid adaptive methods. [Related: Conjoint Analysis, Ordinal Ranking]

**Profile**: A specific product concept defined by one level for each attribute. In a full factorial design, the number of profiles equals the product of all attribute level counts. [Related: Full Factorial Design, Attribute]

**Rating Scale**: A preference elicitation method in which respondents score each product profile on a numerical scale (e.g., 0–10), allowing cardinal comparison of preferences. A score of 10 represents the highest degree of preference. [Related: Ordinal Ranking, Preference Elicitation]

**Regression Analysis**: The statistical technique used to estimate part-worth utilities in conjoint analysis. The dependent variable is the preference score or rank; independent variables are dummy-coded attribute levels. The estimated coefficients are the part-worths. [Related: Part-Worth Utility, Dummy Variable]

**Relative Importance**: The percentage of total utility variation attributable to each attribute, calculated as an attribute's part-worth range divided by the sum of all attributes' ranges. Quantifies which attributes drive consumer preference most. [Related: Part-Worth Utility, Range]

**Trade-Off Analysis**: An alternative name for conjoint analysis, emphasizing that respondents must implicitly trade off desirable attribute levels against undesirable ones when expressing preferences for product profiles. [Related: Conjoint Analysis]

**Willingness to Pay (WTP)**: The maximum additional price a consumer would pay to obtain an attribute improvement, estimated by dividing the attribute's part-worth by the price coefficient per dollar in the conjoint regression. [Related: Part-Worth Utility, Price Coefficient]
