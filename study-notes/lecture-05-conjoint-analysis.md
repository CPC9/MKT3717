---
title: "Lecture 5: Conjoint Analysis for Product Design"
type: lecture
source_files:
  - "source-materials/lecture slides/lec 5 Conjoint Analysis for Product Design.pdf"
topics:
  - "Conjoint Analysis"
  - "Part-Worth Utilities"
  - "Relative Importance"
  - "Market Simulation"
  - "Product Design Optimization"
lecture_number: 5
---

## Overview

Conjoint analysis — also called trade-off analysis — is a survey-based statistical technique used to determine how consumers value the individual attributes that make up a product or service. The foundational assumption is that any product can be decomposed into a bundle of discrete attributes, and that a consumer's overall valuation of a product is the additive sum of the utility they place on each attribute level. By presenting respondents with many different product configurations and recording their preferences, researchers can work backward through regression analysis to isolate the contribution of each attribute. This makes conjoint a particularly powerful tool at the product development and concept-testing stage, because it reveals not just what consumers prefer in aggregate, but how much they are willing to sacrifice in one dimension to gain in another.

The lecture positions conjoint analysis within the broader New Product Development (NPD) process. After the "fuzzy front end" — opportunity identification, concept generation, and concept screening — the firm moves into product development and launch. Conjoint bridges these phases by providing quantitative evidence about which product configurations will resonate most with target segments. The technique can be used both to test early-stage concepts and to simulate market share across competing product configurations, making it applicable throughout the commercialization process.

The lecture also covers the downstream design implications that follow from conjoint insights: product architecture (modular vs. integral), mass customization through delayed differentiation (postponement), and fail-proof design using poka-yoke principles. Together, these topics constitute the full journey from measuring consumer preferences to translating those preferences into a manufacturable, market-ready product. Two worked examples — a salsa product and a Sentosa hotel staycation package — are used throughout to ground every calculation in a concrete business scenario.

---

## Key Concepts

### Conjoint Analysis Foundations

#### Product as a Bundle of Attributes

**Definition**: The core axiom of conjoint analysis holds that a product is not experienced as a holistic whole but as a collection of separable attributes, each of which contributes independently to overall consumer utility.

**Context**: This assumption enables the additive utility model — the consumer's total preference for a product equals the sum of the part-worth utilities of each attribute level present. It is what makes regression-based estimation of individual attribute values possible.

**Relationships**: Directly related to the concept of part-worth utilities; also underpins the willingness-to-pay (WTP) calculations derived from conjoint output. Conflicts with products where attribute interactions are non-additive (e.g., fragrances, meal ingredients).

---

#### Attributes, Levels, and Utility

**Definition**: An **attribute** is an important product characteristic (e.g., thickness, spiciness, color, price, room size, view type). A **level** is a specific quantity or quality value that an attribute can take (e.g., Mild / Medium-Hot / Extra-Hot for the spiciness attribute). **Utility** is the value — measured in preference units — that a consumer places on a specific level of an attribute; it is estimated as a regression coefficient.

**Context**: Choosing the right attributes and levels is the most critical design decision in a conjoint study. Attributes must be determinant (they actually drive choice), discrete and unambiguous, and independently combinable. Levels must span a range wide enough to be meaningful but not so extreme as to seem unrealistic.

**Relationships**: The number of possible product profiles equals the product of the number of levels across all attributes (e.g., 3 × 3 × 2 = 18 profiles in the salsa example). Utility values feed directly into relative importance calculations and market simulation.

---

#### Full Factorial vs. Fractional Factorial Design

**Definition**: A **full factorial design** requires respondents to evaluate every possible combination of attribute levels. A **fractional factorial design** uses a statistically selected subset of combinations that still allows unbiased estimation of all main effects, reducing respondent burden.

**Context**: The salsa example (18 profiles) and hotel example (12 profiles) use full factorial designs. In practice, when products have many attributes and levels, full factorial becomes unwieldy — a product with 5 attributes each at 3 levels generates 243 profiles, far too many for a single respondent.

**Relationships**: Design choice affects respondent fatigue, data quality, and the ability to detect interaction effects. Fractional factorial designs sacrifice the ability to estimate interaction terms but are far more practical for complex products.

---

#### Willingness to Pay (WTP) Derivation

**Definition**: The dollar value a consumer would forgo to obtain a preferred attribute level, derived by computing the ratio of an attribute's part-worth utility to the price coefficient.

**Context**: In the hotel example, the coefficient for a larger room (+10 m²) is 1.42 and the coefficient for a $50 price increase is −1.68. The ratio 1.42 / 1.68 = 0.845, meaning a larger room is worth approximately 84.5% of a $50 price increment, or roughly $42. The consumer is therefore indifferent between the 40 m² room at $300 and the 50 m² room at $342.

**Relationships**: WTP calculations require a price attribute to be included in the conjoint design. The accuracy of WTP estimates depends on the statistical reliability of both the attribute coefficient and the price coefficient.

---

### Survey Design and Execution

#### Preference Elicitation Methods

**Definition**: The format in which respondents communicate their evaluations. Options include: rank-ordering all profiles from most to least preferred; rating each profile on a numerical scale; making discrete choices between pairs or sets; or adaptive (hybrid) methods that update the profile set based on prior responses.

**Context**: The salsa example uses rank-ordering (rank 1 = most preferred, rank 18 = least preferred) across all 18 profiles. The hotel example uses rating on a 0–10 scale. Choice-based conjoint (CBC) is closest to actual purchasing behavior and is increasingly common in commercial practice.

**Relationships**: The choice of elicitation method determines the regression specification and affects external validity. Rating-based data allow OLS regression; choice-based data typically require logit or probit models.

---

#### Order Effects and Randomization

**Definition**: Order effects occur when the sequence in which profiles are presented influences a respondent's evaluations, independent of the profiles' actual attribute values. Randomization of presentation order mitigates this bias.

**Context**: The lecture explicitly notes that order can be randomized to minimize order effects when conducting the hotel staycation survey. This is a standard best practice in conjoint administration.

**Relationships**: Related to broader survey design concerns about response fatigue, anchoring, and demand effects. Fractional factorial designs also help by limiting the number of profiles each respondent must evaluate.

---

### Regression Estimation

#### OLS Regression in Conjoint

**Definition**: Ordinary Least Squares (OLS) regression is the statistical engine that converts raw preference data into part-worth utility estimates. The dependent variable is the preference score (rank or rating); the independent variables are binary (dummy) indicator variables for each non-baseline attribute level.

**Context**: One level per attribute is designated as the baseline and omitted from the regression (its utility is captured in the intercept). The estimated coefficient for each included dummy variable represents the utility of that level relative to the baseline. In the salsa model, "Regular" thickness, "Mild" spiciness, and "Green" color are baselines.

**Relationships**: The R² statistic indicates how well the attribute structure explains observed preferences. High R² (e.g., 0.956 in the salsa example, 0.964 in the hotel example) signals that the chosen attributes collectively capture most of the variance in preferences.

---

#### Baseline Categories and Dummy Coding

**Definition**: For each multi-level attribute, one level is designated as the reference (baseline) and receives no dummy variable. Every other level gets its own binary dummy (1 if present, 0 if absent). The regression coefficient on each dummy measures that level's utility premium or discount relative to the baseline.

**Context**: In the salsa regression: Thickness baseline = Regular; Spicy baseline = Mild; Color baseline = Green. In the hotel regression: Room size baseline = 40 m²; View baseline = Garden view; Price baseline = $300/night.

**Relationships**: The choice of baseline does not affect the estimated differences between levels (relative part-worths are invariant), but it does affect the interpretation of the intercept and the sign of individual coefficients.

---

### Relative Importance

#### Computing Attribute Importance

**Definition**: The relative importance of an attribute is the range of its part-worth utilities (maximum level utility minus minimum level utility) expressed as a percentage of the total range summed across all attributes.

**Context**: In the salsa example (textbook p. 148), the relative importance values are: Spiciness = 59.8%, Thickness = 34.6%, Color = 5.6%. This tells the product manager that getting spiciness right is nearly six times more important than getting color right when designing for this consumer.

**Relationships**: Relative importance guides prioritization of product design trade-offs and resource allocation in R&D. It also informs which attributes should be featured in marketing communications.

---

### Product Architecture

#### Modular vs. Integral Architecture

**Definition**: **Product architecture** is the arrangement of functional elements into physical or logical chunks (modules) that become the building blocks for a product or family of products. A **modular architecture** allows modules to be interchanged independently with minimal effect on other modules. An **integral architecture** deeply couples functional elements across physical components.

**Context**: Examples of modular architecture include sectional furniture, DIN audio systems, smartphone operating systems (app ecosystems), modular homes, and TurboTax's multiple software editions. HP's Deskjet printer supply chain is the canonical mass-customization example: a common printed-circuit-board subassembly is shipped globally and differentiated by adding power supplies and localization materials at regional distribution centers.

**Relationships**: Modularity is the enabling condition for mass customization and delayed differentiation (postponement). Modular design also facilitates product variety without proportional increases in manufacturing complexity.

---

#### Mass Customization and Postponement

**Definition**: **Mass customization** combines the efficiency of mass production with the responsiveness of individual customization. **Delayed differentiation (postponement)** is the specific strategy of producing a generic, semi-finished product and deferring the differentiating step (the step that makes the product specific to a variant or customer) to the latest possible point in the supply network.

**Context**: Benetton's classic case: by knitting garments in undyed yarn first and dyeing them after observing actual color demand, Benetton reduced unsold stock from 33% to 8%. Gillette postpones country-specific and retailer-specific packaging to the distribution stage. The principle is captured in the Feitzinger and Lee (1997) HBR article: "The key to mass-customizing effectively is postponing the task of differentiating a product for a specific customer until the latest possible point in the supply network."

**Relationships**: Postponement is appropriate when: (1) demand is uncertain across many product variants, (2) customer lead times are short, and (3) modular design is technologically feasible. It reduces inventory risk (need only hold a single generic subassembly rather than stock of each finished variant) and improves forecasting accuracy by requiring only aggregate demand estimates.

---

#### Poka-Yoke (Fail-Proof Design)

**Definition**: **Poka-yoke** is a Japanese engineering concept meaning "mistake-proofing." It refers to building physical or procedural safeguards into a product or process so that errors are prevented or immediately detected before they cause harm.

**Context**: Examples from the lecture include asymmetric battery terminals (which physically prevent incorrect insertion), diesel fuel nozzles sized differently from petrol nozzles (preventing wrong-fuel incidents), and polarized electrical plugs. These design features eliminate the possibility of certain user errors rather than relying on training or warning labels.

**Relationships**: Poka-yoke is a product design philosophy that reduces post-purchase failure, warranty costs, and customer dissatisfaction. It connects to broader quality management frameworks (Total Quality Management, Six Sigma) and to user experience design.

---

## Frameworks & Mental Models

### The Conjoint Analysis Workflow

**Visual Description**: A five-step linear process: (1) Identify determinant attributes and define their levels → (2) Generate all profile combinations (full or fractional factorial) → (3) Administer preference survey to respondents → (4) Estimate OLS regression to obtain part-worth utilities → (5) Compute relative importance and conduct market simulation.

**How to Apply**: Begin by selecting 3–6 attributes that genuinely drive consumer choice. Define 2–4 discrete, unambiguous levels per attribute. Calculate the number of profiles (product of all level counts). Collect ranking or rating data. Run OLS with dummy-coded attribute levels. Read off coefficients as part-worth utilities, compute importance ranges, and use the estimated model to predict preference scores for any hypothetical product configuration.

**When to Use**: During concept evaluation before committing to a product design; when entering a new market segment; when evaluating potential product line extensions; when benchmarking against competitor configurations; when estimating willingness to pay for specific features without directly asking respondents about prices.

---

### The Attribute Importance Bar Chart

**Visual Description**: A horizontal bar chart in which each attribute occupies one row. Bar length equals the attribute's relative importance percentage (range of part-worths / total range × 100). In the salsa example: Spiciness extends to 59.8%, Thickness to 34.6%, Color to 5.6%.

**How to Apply**: After running the regression, calculate the range for each attribute: (maximum coefficient among its levels) − (minimum coefficient among its levels, which may be 0 for the baseline). Sum all ranges. Divide each attribute's range by the total sum and multiply by 100.

**When to Use**: Presenting conjoint results to a management audience that needs to quickly grasp which attributes matter most for product design and marketing investment decisions.

---

### Early Differentiation vs. Postponement Diagram

**Visual Description**: Two parallel process flows. In Early Differentiation: partial assembly → differentiation into variants A, B, C → transport (three separate shipments) → inventory of three distinct finished-product SKUs. In Postponement: partial assembly → transport (one shipment of generic subassembly) → inventory of one generic subassembly → delayed differentiation into A, B, C at the point closest to the customer.

**How to Apply**: Map your production process to identify the differentiation point — the step that locks the product into a specific variant. Assess whether that step can be moved downstream closer to the customer. If so, redesign the product architecture to enable modular assembly at the distribution or retail stage.

**When to Use**: When a product is sold in multiple variants (colors, languages, voltage specifications, regional configurations) and demand across variants is uncertain and volatile. The inventory-pooling benefit is greatest when variant demand is negatively correlated or highly variable.

---

## Formulas & Quantitative Tools

### Formula 1: Conjoint Regression Model — Salsa Example

**Formula**:

```
Rank_i = β₀ + β₁·Thick_i + β₂·ExtraThick_i + β₃·MediumHot_i + β₄·ExtraHot_i + β₅·Red_i + e_i
```

**Variables**:

| Symbol | Description | Baseline |
|---|---|---|
| Rank_i | Actual ranking of profile i (1 = most preferred, 18 = least preferred) | — |
| β₀ | Intercept (utility of baseline product: Regular, Mild, Green) | — |
| Thick_i | 1 if profile i has Thick consistency; 0 otherwise | Regular thickness |
| ExtraThick_i | 1 if profile i has Extra-Thick consistency; 0 otherwise | Regular thickness |
| MediumHot_i | 1 if profile i has Medium-Hot spiciness; 0 otherwise | Mild spiciness |
| ExtraHot_i | 1 if profile i has Extra-Hot spiciness; 0 otherwise | Mild spiciness |
| Red_i | 1 if profile i is Red in color; 0 otherwise | Green color |
| e_i | Error term | — |

**Interpretation**: Each β coefficient is the part-worth utility of that attribute level relative to its baseline. Because the dependent variable is a rank (lower = better), a positive coefficient means the level increases the rank number (makes it less preferred); a negative coefficient means the level decreases the rank number (makes it more preferred). Note: the sign convention depends on whether ranking is ascending (1 = best) or descending. In this dataset, rank 1 = most preferred, so a lower rank value is better — a negative coefficient on Thick (β₁ = −2.33) means Thick salsa is ranked lower (more preferred) than Regular.

**Estimated Regression Output (Salsa)**:

| Variable | Coefficient | Std Error | t-Stat | p-value |
|---|---|---|---|---|
| Intercept | 3.333 | 0.7698 | 4.330 | 0.000978 |
| Thick | −2.333 | 0.7698 | −3.031 | 0.010445 |
| Extra-Thick | 3.833 | 0.7698 | 4.980 | 0.000320 |
| Med-Hot | 4.833 | 0.7698 | 6.279 | 0.0000408 |
| Extra-Hot | 10.667 | 0.7698 | 13.856 | 9.59E-09 |
| Red | 1.000 | 0.6285 | 1.591 | 0.137597 |

R² = 0.9560; Adjusted R² = 0.9376; Observations = 18

**Example**: The Extra-Hot coefficient is 10.667, meaning Extra-Hot salsa receives a ranking nearly 11 positions worse (less preferred) than Mild salsa, holding all else equal. The Red color coefficient is 1.00 but p = 0.138, meaning color is not statistically significant at the 5% level — consumers in this sample do not strongly differentiate between green and red salsa.

**Common Mistakes**:
- Forgetting that the rank scale direction matters for coefficient sign interpretation. If rank 1 = best, a more-preferred level will have a negative coefficient (it pulls rank toward 1).
- Including a dummy for every level of an attribute (dummy trap) — always omit one level per attribute as the baseline.
- Treating the Red coefficient as meaningful when its p-value exceeds 0.05.
- Confusing "Extra-Thick" (less preferred, β = +3.83) with "Thick" (more preferred, β = −2.33) — they move in opposite directions from the Regular baseline.

---

### Formula 2: Conjoint Regression Model — Hotel Staycation Example

**Formula**:

```
Y_i = β₀ + β₁·LargeRoom_i + β₂·CityView_i + β₃·OceanView_i + β₄·HighPrice_i + e_i
```

**Estimated Model**:

```
Y_i = 2.08 + 1.42·LargeRoom_i + 2.05·CityView_i + 5.83·OceanView_i − 1.68·HighPrice_i
```

**Variables**:

| Symbol | Description | Baseline |
|---|---|---|
| Y_i | Preference rating of profile i (0 = least preferred, 10 = most preferred) | — |
| β₀ | Intercept: utility of baseline room (40 m², Garden view, $300/night) = 2.08 | — |
| LargeRoom_i | 1 if room is 50 m²; 0 if 40 m² | 40 m² |
| CityView_i | 1 if City view; 0 otherwise | Garden view |
| OceanView_i | 1 if Ocean view; 0 otherwise | Garden view |
| HighPrice_i | 1 if price is $350/night; 0 if $300/night | $300/night |
| e_i | Error term | — |

**Full Regression Output (Hotel)**:

| Variable | Coefficient | Std Error | t-Stat | p-value |
|---|---|---|---|---|
| Intercept | 2.083 | 0.4348 | 4.792 | 0.001985 |
| LargeRoom (+10 m²) | 1.417 | 0.3889 | 3.643 | 0.008255 |
| CityView | 2.050 | 0.4763 | 4.304 | 0.003548 |
| OceanView | 5.825 | 0.4763 | 12.230 | 5.5967E-06 |
| HighPrice (+$50) | −1.683 | 0.3889 | −4.329 | 0.003444 |

R² = 0.9637; Adjusted R² = 0.9430; Observations = 12

**Interpretation**:
- A $50 price increase (from $300 to $350) decreases preference rating by **1.68 points**.
- A 10 m² room size increase (from 40 to 50 m²) increases preference rating by **1.42 points**.
- Switching view from Garden to City increases preference by **2.05 points**.
- Switching view from Garden to Ocean increases preference by **5.83 points**.

All coefficients are statistically significant at p < 0.01.

**Example — Willingness to Pay Calculations**:

The price coefficient tells us that 1.68 preference points = $50 in price. Therefore, 1 preference point = $50 / 1.68 = $29.76.

| Attribute upgrade | Preference gain | WTP = (gain / 1.68) × $50 | Break-even price |
|---|---|---|---|
| 40 m² → 50 m² | +1.42 | (1.42 / 1.68) × $50 = **$42** | $300 + $42 = **$342** |
| Garden → City view | +2.05 | (2.05 / 1.68) × $50 = **$61** | $300 + $61 = **$361** |
| Garden → Ocean view | +5.83 | (5.83 / 1.68) × $50 = **$174** | $300 + $174 = **$474** |

Interpretation: A consumer is indifferent between a 40 m² garden-view room at $300 and a 50 m² garden-view room at $342. The ocean view commands a staggering $174 premium — it is by far the highest-valued attribute.

**Common Mistakes**:
- Dividing by the wrong unit: the price coefficient maps to a $50 increment (the gap between levels), not $1. Always use the actual gap between price levels in the denominator of WTP calculations.
- Ignoring statistical significance: if a coefficient's p-value exceeds 0.05, its WTP estimate is unreliable.
- Applying conjoint WTP estimates beyond the range of price levels tested (extrapolation risk).
- Forgetting that WTP is the maximum consumers would pay, not the price that maximizes revenue.

---

### Formula 3: Number of Profiles in Full Factorial Design

**Formula**:

```
Total profiles = L₁ × L₂ × L₃ × ... × Lₖ
```

**Variables**:

| Symbol | Description |
|---|---|
| Lⱼ | Number of levels for attribute j |
| k | Total number of attributes |

**Interpretation**: Every unique combination of attribute levels constitutes one profile. Respondents in a full factorial study must evaluate all profiles.

**Example**:
- Salsa: Thickness (3) × Spiciness (3) × Color (2) = **18 profiles**
- Hotel: Room size (2) × View (3) × Price (2) = **12 profiles**
- Laptop (class exercise): Weight (2) × Battery (2) × Brand (2) = **8 profiles**

**Common Mistakes**: Confusing the number of profiles with the number of attributes or levels. Adding levels to a single attribute increases profiles multiplicatively, not additively — this rapidly makes full factorial designs infeasible.

---

### Formula 4: Relative Importance of an Attribute

**Formula**:

```
Importance_j (%) = [Range_j / Σ Range_k] × 100

where Range_j = max(part-worth utilities for attribute j) − min(part-worth utilities for attribute j)
```

**Variables**:

| Symbol | Description |
|---|---|
| Range_j | Utility spread for attribute j across its levels |
| Σ Range_k | Sum of utility ranges across all attributes |

**Interpretation**: An attribute's relative importance is its "decision-making footprint" — how much the choice of level for that attribute can swing the consumer's overall preference. An attribute with a large range dominates the decision; one with a small range is nearly irrelevant.

**Example (Salsa)**:
- Thickness range: the levels are Regular (baseline, utility = 0), Thick (utility = −2.33), Extra-Thick (utility = +3.83). Range = 3.83 − (−2.33) = **6.16**.
- Spiciness range: Mild (0), Medium-Hot (+4.83), Extra-Hot (+10.67). Range = 10.67 − 0 = **10.67**.
- Color range: Green (0), Red (+1.00). Range = 1.00 − 0 = **1.00**.
- Total range = 6.16 + 10.67 + 1.00 = **17.83**.
- Spiciness importance = 10.67 / 17.83 × 100 = **59.8%**
- Thickness importance = 6.16 / 17.83 × 100 = **34.6%**
- Color importance = 1.00 / 17.83 × 100 = **5.6%**

**Common Mistakes**:
- Using raw coefficients rather than ranges (you must consider the full spread across all levels of each attribute, including the baseline at 0).
- Forgetting that the baseline level has a utility of 0 by convention — this must be included when computing the range.
- Summing importances that do not add to 100% due to arithmetic errors.

---

### Formula 5: Predicted Preference Score for Any Profile

**Formula**:

```
Ŷ_profile = β₀ + Σ (βⱼ × Xⱼ_profile)
```

**Variables**:

| Symbol | Description |
|---|---|
| Ŷ_profile | Predicted preference rating for a specific product profile |
| β₀ | Regression intercept |
| βⱼ | Part-worth utility coefficient for attribute level j |
| Xⱼ_profile | 1 if the profile includes level j; 0 otherwise |

**Interpretation**: By plugging in the dummy variable values for any product configuration, you obtain its predicted preference score. This enables market simulation — comparing predicted scores for your product vs. competitor products to estimate relative preference share.

**Example (Hotel)**: A 50 m² room with Ocean view at $300/night:
```
Ŷ = 2.08 + 1.42(1) + 2.05(0) + 5.83(1) + (−1.68)(0)
Ŷ = 2.08 + 1.42 + 5.83
Ŷ = 9.33 out of 10
```
This is the highest-rated configuration possible given the available attribute levels.

**Common Mistakes**: Including both CityView and OceanView as 1 simultaneously — only one view level can be active at a time. Double-counting by including both a level's dummy and the baseline implicitly.

---

## Case Studies

### Salsa Product Design

**Company**: A consumer packaged goods firm developing a new salsa product targeting young consumers.

**Challenge**: The product team needed to determine which of three attributes — thickness, spiciness, and color — mattered most to the target segment, so they could design the optimal product configuration and prioritize feature investment.

**What Was Done**: A full factorial conjoint design was constructed: Thickness (Regular, Thick, Extra-Thick) × Spiciness (Mild, Medium-Hot, Extra-Hot) × Color (Green, Red) = 18 profiles. A representative respondent ranked all 18 profiles from 1 (most preferred) to 18 (least preferred). OLS regression was run with dummy variables for all non-baseline levels. Results showed: Extra-Hot coefficient = +10.67 (strongly disliked), Thick coefficient = −2.33 (preferred over Regular), Red color not statistically significant (p = 0.14). Relative importance: Spiciness 59.8%, Thickness 34.6%, Color 5.6%. Model fit: R² = 0.956.

**Takeaway**: Spiciness dominated this consumer's preferences by a large margin — nearly 60% of the total utility range. Thickness also mattered substantially (35%), while color was essentially irrelevant. The optimal product for this consumer would be Thick + Mild + either color. This framework allows the firm to avoid over-investing in colors and packaging variations while focusing R&D on achieving the right texture and mild heat profile.

---

### Hotel Staycation Package Design — Sentosa

**Company**: A hotel operator on Sentosa Island designing tiered accommodation packages.

**Challenge**: The hotel needed to understand how much consumers valued three room attributes — size, view, and price — to price packages correctly and identify which upgrade features justified a premium.

**What Was Done**: A full factorial conjoint design was constructed: Room size (40 m², 50 m²) × View (Garden, City, Ocean) × Price ($300, $350) = 12 profiles. Each respondent rated each profile on a 0–10 preference scale. OLS regression produced: Intercept = 2.08, LargeRoom = +1.42, CityView = +2.05, OceanView = +5.83, HighPrice = −1.68. All coefficients significant at p < 0.01. R² = 0.964. WTP calculations: Larger room is worth $42 premium; City view worth $61 premium; Ocean view worth $174 premium.

**Takeaway**: Ocean view is overwhelmingly the most valued attribute — worth $174 more per night than a garden view. A hotel charging $350 for an ocean-view room is actually underpricing relative to consumer WTP. Room size has the smallest non-price impact, suggesting that investing in viewfacing room construction yields far greater returns than square footage additions. The conjoint model enables precise, data-driven rack rate setting for each room category.

---

### Benetton — Postponement Strategy

**Company**: Benetton, Italian fashion apparel manufacturer.

**Challenge**: Benetton sold sweaters in many colors, but demand for specific colors was highly uncertain before the season began. Early color dyeing resulted in large quantities of unsold inventory when consumer preferences deviated from forecasts.

**What Was Done**: Benetton redesigned their production process. Previously (Process A / Early Differentiation): dye yarn in specific colors → knit garments → distribute finished colored sweaters. Redesigned (Process B / Postponement): knit garments in undyed white yarn → observe actual demand → dye finished garments in the colors actually selling. The differentiating step (dyeing) was moved from the beginning to the end of the production process.

**Takeaway**: By postponing color differentiation, Benetton needed to forecast only total sweater volume, not color-level demand — a far easier problem. Unsold stock fell from 33% to 8%. The case demonstrates that mass customization is not only a marketing strategy but also a supply chain redesign that requires modular thinking about which production steps create variety and when those steps can be deferred.

---

### Hewlett-Packard — Modular Design for Mass Customization

**Company**: Hewlett-Packard (HP), Deskjet printer division.

**Challenge**: HP's Deskjet printers were shipped from factories in Vancouver and Singapore to markets across the Americas, Europe, and Asia. Different markets required different power supplies, cables, and language-specific manuals, requiring HP to build and stock many distinct finished-product SKUs at regional distribution centers.

**What Was Done**: HP redesigned the printer for modularity. A single, universal Deskjet printer subassembly was manufactured and shipped globally. Country-specific power supplies, power cords, and localization materials (manuals, packaging) were added at regional distribution centers immediately prior to final delivery. The printer was engineered so that this final assembly step was simple and could be performed at the distribution stage.

**Takeaway**: Modular product architecture enabled postponement at the supply chain level. HP dramatically reduced the number of distinct finished-product SKUs held in global inventory from many country-specific variants to one universal subassembly, while still delivering a fully localized product to each market. This is the canonical industrial application of "mass customization at the latest possible point in the supply network" (Feitzinger and Lee, 1997).

---

## Key Takeaways

- **Conjoint analysis** is a survey-based technique that decomposes consumer preferences into part-worth utilities for individual product attributes, enabling firms to design products that maximize consumer value.
- **The additive utility assumption** — that product value equals the sum of attribute values with no interaction — is the core condition for conjoint to be valid; it holds for computers, financial products, and hotel rooms, but not for fragrances or meal ingredients.
- **Regression coefficients** from OLS estimation directly represent part-worth utilities; their magnitude indicates preference strength and their statistical significance (p < 0.05) indicates reliability.
- **Relative importance** is computed as each attribute's utility range as a percentage of the total utility range across all attributes; in the salsa example, Spiciness (59.8%) dominated Thickness (34.6%) and Color (5.6%).
- **Willingness to pay** for any attribute upgrade is derived by dividing that attribute's utility gain by the absolute value of the price coefficient and scaling by the price increment tested; Ocean view in the hotel example was worth $174 over Garden view.
- **Full factorial design** tests every attribute-level combination (e.g., 18 salsa profiles, 12 hotel profiles); **fractional factorial design** tests an efficient subset, reducing respondent burden at the cost of losing interaction-effect estimation.
- **Product architecture** choices — modular vs. integral — determine whether mass customization and postponement strategies are feasible; modularity is a prerequisite for delayed differentiation.
- **Postponement (delayed differentiation)** moves the differentiating production step as late as possible in the supply chain, allowing firms to forecast aggregate demand rather than variant-level demand; Benetton reduced unsold stock from 33% to 8% with this approach.
- **Poka-yoke** (fail-proof design) preemptively engineers out opportunities for user error through physical or procedural constraints, reducing failure rates without depending on user behavior change.
- Conjoint is **less appropriate** for new-to-the-world products (where consumers cannot meaningfully evaluate unfamiliar attribute combinations), for products with strong attribute interactions, and when attributes cannot be described in discrete and unambiguous terms.

---

## Key Terms and Definitions Glossary

**Additive Utility Model**: The assumption that a product's total utility is the sum of the part-worth utilities of its individual attribute levels, with no cross-attribute interaction effects. [Related: Conjoint Analysis, Part-Worth Utility]

**Attribute**: An important product characteristic that drives consumer choice in conjoint analysis (e.g., thickness, view type, price). Each attribute has two or more levels. [Related: Levels, Part-Worth Utility]

**Baseline Level**: The reference level of an attribute that is omitted from the OLS regression and against which all other levels are compared. Its utility is set to zero by convention and is captured in the intercept. [Related: Dummy Coding, OLS Regression]

**Choice-Based Conjoint (CBC)**: A variant of conjoint analysis in which respondents choose their most preferred option from a set of competing profiles, rather than rating or ranking. More closely mirrors real purchasing behavior. [Related: Conjoint Analysis, Preference Elicitation]

**Conjoint Analysis**: A survey-based statistical technique that determines how consumers value different attributes of a product or service by presenting product profiles and analyzing stated preferences through regression. [Related: Part-Worth Utility, Relative Importance, OLS Regression]

**Delayed Differentiation (Postponement)**: A supply chain strategy in which a product is manufactured up to a semi-finished state and held as a generic subassembly; the differentiating step (making it specific to a variant or market) is performed as late as possible in the supply network. [Related: Mass Customization, Modular Architecture]

**Determinant Attribute**: An attribute that is both important to consumers and varies meaningfully across competing products, making it a key driver of actual choice behavior. [Related: Attributes, Conjoint Analysis]

**Dummy Variable**: A binary (0/1) indicator variable used in OLS regression to represent whether a specific attribute level is present in a given profile. One level per attribute is omitted as the baseline. [Related: Baseline Level, OLS Regression]

**Full Factorial Design**: A conjoint study design in which respondents evaluate every possible combination of attribute levels. The number of profiles equals the product of the number of levels across all attributes. [Related: Fractional Factorial Design, Profile]

**Fractional Factorial Design**: A conjoint study design in which only a statistically chosen subset of all possible attribute-level combinations is shown to respondents, reducing survey length while still allowing unbiased estimation of main effects. [Related: Full Factorial Design, Conjoint Analysis]

**Levels**: The specific values or categories that an attribute can take in a conjoint study (e.g., Mild / Medium-Hot / Extra-Hot are the levels of the Spiciness attribute). [Related: Attributes, Profile]

**Mass Customization**: A production strategy that combines the efficiency of mass production with the responsiveness of individual customization, typically enabled by modular product architecture and postponement. [Related: Delayed Differentiation, Modular Architecture]

**Modular Architecture**: A product architecture in which functional elements are grouped into self-contained modules that can be independently designed, produced, and swapped with minimal effect on other modules. [Related: Product Architecture, Mass Customization]

**OLS Regression (Ordinary Least Squares)**: The statistical method used in conjoint analysis to estimate part-worth utilities. The preference score is regressed on dummy-coded attribute level variables to produce coefficient estimates. [Related: Part-Worth Utility, Dummy Variable]

**Part-Worth Utility**: The incremental value (in preference units) that a consumer places on a specific attribute level, estimated as the OLS regression coefficient on the corresponding dummy variable. [Related: Conjoint Analysis, Relative Importance]

**Poka-Yoke**: A Japanese fail-proofing design philosophy that builds physical or procedural safeguards into a product or process to prevent user errors before they occur. Examples include asymmetric battery terminals and diesel/petrol nozzle size differentiation. [Related: Product Design]

**Product Architecture**: The arrangement of functional elements of a product into physical or logical chunks (modules) that serve as building blocks for a product or family of products. [Related: Modular Architecture, Mass Customization]

**Profile**: A single product concept in a conjoint study, defined by one specific level from each attribute. Respondents evaluate profiles to reveal their underlying preferences. [Related: Full Factorial Design, Levels]

**Relative Importance**: The percentage contribution of each attribute to the total range of preference variation. Calculated as (attribute utility range / sum of all attribute utility ranges) × 100. [Related: Part-Worth Utility, Conjoint Analysis]

**Willingness to Pay (WTP)**: The maximum dollar amount a consumer would be willing to pay for an attribute upgrade, derived from conjoint results by scaling an attribute's utility gain by the price sensitivity coefficient. [Related: Part-Worth Utility, Conjoint Analysis]
