---
title: "Lecture 5: Conjoint Analysis for Product Design"
source_files:
  - "source-materials/lec 5 Conjoint Analysis for Product Design.pdf"
  - "source-materials/Lec 5_Conjoint anlaysis practice.xlsx"
topics:
  - "Conjoint Analysis"
  - "Regression Analysis for Product Design"
  - "Attribute Valuation"
  - "Product Architecture"
  - "Modular Design"
  - "Mass Customization"
  - "Delayed Differentiation"
  - "Poka-Yoke"
  - "Product Launch Strategy"
lecture_number: 5
---

## Overview

Lecture 5 marks the transition from the "fuzzy front end" of new product development (opportunity identification, concept generation, concept testing) into product development and launch. The centerpiece of this lecture is conjoint analysis, a survey-based quantitative technique used to determine how consumers value different attributes of a product or service. By presenting respondents with product configurations that combine different attribute levels and asking them to rank or rate their preferences, firms can use regression analysis to decompose overall preference into the contribution of each individual attribute -- enabling data-driven product design decisions.

The lecture walks through conjoint analysis methodology using two detailed examples: a salsa product with three attributes (thickness, spiciness, color) and a hotel staycation package in Sentosa with three attributes (room size, view, price). Students learn to set up the regression equation using dummy-coded variables with baseline levels, interpret the resulting coefficients to understand both the magnitude and statistical significance of each attribute's impact on preference, and calculate the relative importance of attributes. The practice Excel workbook extends this with a notebook computer example (weight, battery life, brand) and provides full regression output for both the salsa and notebook problems, reinforcing the computational mechanics.

The second half of the lecture covers product architecture and design, including modular vs. integral design, mass customization through delayed differentiation (postponement), and fail-proof design using the Poka-Yoke method. A class discussion of Slack's product development and launch strategy grounds these concepts in a real-world case. Together, these topics connect the analytical rigor of conjoint analysis to the practical decisions firms face when moving from concept to manufactured product.

## Key Concepts

### Conjoint Analysis Fundamentals

#### Conjoint (Trade-off) Analysis
- **Definition**: A survey-based statistical technique used to determine how people value different attributes of a product or service. It works by presenting respondents with product profiles that combine different attribute levels and asking them to rank, rate, or choose among them.
- **Context**: The key assumption underlying conjoint analysis is that a product is a bundle of attributes and that customers combine the values they derive from individual attributes to generate their overall valuation of the product. Regression analysis is then used to decompose reported preferences and infer the utility (value) each attribute level provides.
- **Relationships**: Used in concept evaluation and market testing; feeds into product design decisions; connects to the broader NPD process from Lectures 1-4.

#### Attributes
- **Definition**: The important product characteristics that are varied in a conjoint analysis study. Each attribute represents a dimension along which the product can differ.
- **Context**: In the salsa example, the three attributes are thickness, spiciness, and color. In the hotel example, they are room size, view, and price. Attributes must be describable in discrete, unambiguous terms for conjoint analysis to work well.
- **Relationships**: Each attribute has multiple Levels; attributes are the independent variables in the conjoint regression.

#### Levels
- **Definition**: The specific quantities or qualities that an attribute can take in a conjoint analysis. Each attribute has two or more levels that represent the options being tested.
- **Context**: For salsa thickness, the levels are Regular, Thick, and Extra-Thick. For hotel view, the levels are Garden View, City View, and Ocean View. The total number of product profiles equals the product of the number of levels across all attributes.
- **Relationships**: Define the specific values of Attributes; one level per attribute is designated as the Baseline Level in dummy coding.

#### Utility (Part-Worth)
- **Definition**: The value that customers place on each level of an attribute. Utility is estimated from the regression coefficients in conjoint analysis.
- **Context**: Higher utility means greater preference contribution. In the salsa example, the Extra-Hot level has a coefficient of 10.67, meaning it increases the rank (i.e., makes it less preferred, since higher rank = less preferred) by 10.67 positions compared to the Mild baseline -- indicating strong negative preference for extra-hot salsa in this respondent's case.
- **Relationships**: Estimated via Regression Analysis; used to calculate Relative Importance of attributes.

#### Baseline Level
- **Definition**: The reference level for each attribute that is omitted from the regression equation. All other levels of that attribute are interpreted relative to the baseline.
- **Context**: In the salsa example, the baselines are Regular (thickness), Mild (spiciness), and Green (color). In the notebook example, the baselines are 1.5kg (weight), 4hr (battery life), and HP (brand). The intercept in the regression represents the predicted preference score when all attributes are at their baseline levels.
- **Relationships**: Critical for interpreting regression Coefficients; chosen by the analyst before running the regression.

### Regression Analysis in Conjoint

#### Dummy Variable Coding
- **Definition**: The practice of converting categorical attribute levels into binary (0/1) variables for use in regression analysis. Each non-baseline level gets its own dummy variable.
- **Context**: For salsa with 3 thickness levels (Regular, Thick, Extra-Thick), two dummy variables are created: Thick (1 if thick, 0 otherwise) and Extra-Thick (1 if extra-thick, 0 otherwise). Regular is the baseline (all dummies = 0). This coding scheme avoids the "dummy variable trap" of perfect multicollinearity.
- **Relationships**: Required setup for the conjoint Regression equation; determines how Coefficients are interpreted.

#### Regression Coefficient (Beta)
- **Definition**: The estimated parameter in the regression equation that quantifies the effect of moving from the baseline level to the specified level on the dependent variable (preference score or rank).
- **Context**: In the equation Y = a + bX, b is the coefficient of interest. Its magnitude tells you the size of the effect (a one-unit increase in X is associated with a b-unit change in Y), and its statistical significance (p-value) tells you whether the effect is reliably different from zero.
- **Relationships**: Used to calculate Utility, Relative Importance, and Willingness to Pay.

#### Statistical Significance (p-value)
- **Definition**: A measure of the probability that the observed coefficient could have arisen by chance if the true effect were zero. A p-value below 0.05 is conventionally considered statistically significant.
- **Context**: In the salsa regression, all coefficients except Red (p = 0.138) are statistically significant at the 0.05 level, meaning we can be confident that thickness and spiciness matter, but we cannot conclude that color (red vs. green) significantly affects preference.
- **Relationships**: Determines whether a Regression Coefficient can be trusted for decision-making.

#### R-Squared
- **Definition**: The proportion of variance in the dependent variable (preference ranking/rating) that is explained by the regression model. Ranges from 0 to 1.
- **Context**: The salsa model has R-squared = 0.956, meaning 95.6% of the variation in preference rankings is explained by the three attributes. The notebook model has R-squared = 1.0 (a perfect fit due to the full factorial design with no error). Higher R-squared indicates the model captures consumer preferences well.
- **Relationships**: Indicates overall model quality; complements individual Coefficient significance.

### Product Architecture and Design

#### Product Architecture
- **Definition**: The arrangement of functional elements into physical chunks (modules) which become the building blocks for the product or a family of products.
- **Context**: Product architecture decisions determine how a product is decomposed into components and how those components interact. This has implications for manufacturing flexibility, product variety, and the ability to customize.
- **Relationships**: Enables Modular Design, Mass Customization, and Delayed Differentiation.

#### Modular Product Architecture
- **Definition**: A design approach where a product is composed of discrete, interchangeable modules, each implementing one or a few functions, with well-defined interfaces between modules.
- **Context**: Examples include sectional furniture (Roche Bobois), DIN audio systems (Alpine), modular homes (Lovetann), smartphone operating systems (Apple iOS with app modules), and TurboTax product variants (Basic, Deluxe, Premier, Home & Business, Business, Military Edition). Modular product design is a form of standardization in which component parts are grouped in modules that are easily replaced or interchanged.
- **Relationships**: Enables Mass Customization, Delayed Differentiation, and product family strategies.

#### Mass Customization
- **Definition**: A production strategy that combines the efficiency of mass production with the flexibility of individual customization, typically enabled by modular design and postponement.
- **Context**: Mass customization allows firms to offer product variety without the cost penalty of fully bespoke production. The key is postponing differentiation until customer preferences are known.
- **Relationships**: Enabled by Modular Product Architecture and Delayed Differentiation; reduces inventory risk.

#### Delayed Differentiation (Postponement)
- **Definition**: The process of producing, but not quite completing, a product or service until customer preferences or demand signals are known. Differentiation is postponed to the latest possible point in the supply network.
- **Context**: Benetton pioneered this by switching from dyeing yarn before knitting (early differentiation) to knitting white garments and dyeing them after demand was observed, reducing unsold stock from 33% to 8%. HP uses modular design to postpone final assembly of printers with region-specific power supplies and packaging.
- **Relationships**: Requires Modular Product Architecture; key strategy in Mass Customization; improves forecasting accuracy.

#### Poka-Yoke (Fail-Safe Design)
- **Definition**: A fail-safe design method that builds safeguards into a product or process to reduce or eliminate the potential for user errors or mistakes.
- **Context**: Examples include battery compartments shaped so batteries can only be inserted in the correct orientation, diesel fuel nozzles sized differently from gasoline nozzles to prevent misfueling, and differently sized fuel pump nozzles at gas stations.
- **Relationships**: A principle of Product Design; enhances usability and safety.

## Frameworks & Mental Models

### Conjoint Analysis Process

- **Visual Description**: A four-step workflow: (1) Define attributes and levels, creating all possible combinations (full factorial) or a representative subset (fractional factorial). (2) Survey respondents by presenting product profiles and collecting rankings, ratings, or choices. (3) Run regression analysis with dummy-coded attribute levels as independent variables and preference as the dependent variable. (4) Interpret coefficients to determine attribute importance, willingness to pay, and optimal product configuration.
- **How to Apply**:
  1. Identify the key product attributes and define 2-3 discrete levels for each.
  2. Calculate total combinations (product of all level counts). If too many, use fractional factorial design.
  3. Present all (or a subset of) combinations to respondents and collect preference data (ranks, ratings, or choices).
  4. Set up the regression equation with dummy variables for each non-baseline level.
  5. Run regression and examine coefficients, p-values, and R-squared.
  6. Calculate relative importance of each attribute.
  7. Use coefficients to estimate willingness to pay and identify optimal configurations.
- **When to Use**: When product value can be approximated from the sum of its parts (e.g., computers, financial products, hotel packages). Not suitable when attributes interact strongly (fragrances, meal ingredients), when products cannot be decomposed into discrete attributes (clothing design aesthetics), or when attributes are subjective and ambiguous ("friendly," "sporty").

### When to Use Conjoint (Three Conditions)

- **Visual Description**: A decision checklist with three conditions that must be met: (1) Product value equals the sum of attribute values (no interactions). (2) Attributes are independent of each other. (3) Attributes can be described in discrete, unambiguous terms.
- **How to Apply**: Before designing a conjoint study, verify all three conditions. Good candidates: computers, credit cards, car rental options, financial products, pack/size combinations. Poor candidates: soft drinks, clothing design, fragrances, meal ingredients, speeches, or anything where subjective terms like "friendly" or "sporty" describe the attributes.
- **When to Use**: As a pre-check before investing in conjoint study design and data collection.

### Modular vs. Integral Architecture Decision

- **Visual Description**: A spectrum from fully modular (each module maps to one function, interfaces are standardized) to fully integral (functions are distributed across tightly coupled components). Modular enables variety, customization, and independent component upgrades. Integral enables optimized performance and compact form factors.
- **How to Apply**: Choose modular architecture when product variety, customization, or delayed differentiation is important. Choose integral architecture when performance optimization or miniaturization is the priority. Consider the postponement strategy -- modular design enables production flexibility that reduces inventory risk.
- **When to Use**: During the system-level design phase of product development, when determining how to decompose the product into physical components.

### Delayed Differentiation Process

- **Visual Description**: Two contrasting production flows. Early Differentiation: assembly occurs, then differentiation into variants A/B/C, then transport, then inventory of three separate models. Postponement: partial assembly occurs, then transport of one generic subassembly, then inventory of one subassembly, then delayed differentiation into variants A/B/C at the point closest to the customer.
- **How to Apply**: Identify which product features drive variant differentiation (e.g., color, power supply voltage, language/packaging). Redesign the production process so that these differentiating features are applied as late as possible. This requires modular product architecture where the differentiating module can be added or changed at the end.
- **When to Use**: When there is uncertain demand across many product variants, short customer lead times, and the product design is technologically feasible for modular construction.

## Formulas & Quantitative Tools

### Conjoint Regression Equation (General Form)

- **Formula**: Rank_i = B0 + B1*X1_i + B2*X2_i + ... + Bk*Xk_i + e_i

- **Variables**:

| Variable | Description | Units |
|----------|-------------|-------|
| Rank_i | Preference ranking or rating for product profile i (dependent variable) | Rank (1 = most preferred) or Rating score |
| B0 | Intercept -- predicted preference when all attributes are at baseline levels | Same units as dependent variable |
| B1...Bk | Regression coefficients for each dummy-coded attribute level | Change in preference per unit change in dummy |
| X1...Xk | Dummy variables (0 or 1) for each non-baseline attribute level | Binary (0 or 1) |
| e_i | Error term representing unexplained variation | Same units as dependent variable |

- **Interpretation**: Each coefficient Bk represents the change in the predicted preference score when moving from the baseline level to that level of the attribute, holding all other attributes constant. For rank-order data where 1 = most preferred, a positive coefficient means the level makes the product less preferred (higher rank number). For rating data where higher = better, a positive coefficient means the level increases preference.

- **Example (Salsa)**: Rank_i = 3.33 + (-2.33)*Thick_i + 3.83*ExtraThick_i + 4.83*MedHot_i + 10.67*ExtraHot_i + 1.00*Red_i. Interpretation: Compared to regular-mild-green salsa (baseline, predicted rank = 3.33), a thick salsa is ranked 2.33 positions better (lower rank = more preferred), while extra-thick is ranked 3.83 positions worse. Medium-hot adds 4.83 to the rank (worse), and extra-hot adds 10.67 (much worse). Red color adds 1.0 to the rank but is not statistically significant (p = 0.138).

- **Common Mistakes**:
  - Confusing the direction of the scale: with rank data (1 = best), a negative coefficient means the attribute level is preferred; with rating data (10 = best), a positive coefficient means preferred.
  - Forgetting to designate a baseline level for each attribute, leading to the dummy variable trap.
  - Including all levels of an attribute as dummies (e.g., Regular AND Thick AND Extra-Thick) instead of omitting the baseline.

### Conjoint Regression Equation (Notebook Example)

- **Formula**: Rank_i = 4 + 4*Weight_i + (-1)*Battery_i + (-2)*Brand_i

- **Variables**:

| Variable | Description | Units |
|----------|-------------|-------|
| Rank_i | Preference ranking (1 = most preferred, 8 = least) | Rank |
| B0 = 4 | Intercept (predicted rank for 1.5kg, 4hr, HP -- baseline) | Rank |
| Weight_i | Dummy for 2kg (baseline = 1.5kg) | 0 or 1 |
| Battery_i | Dummy for 6hr (baseline = 4hr) | 0 or 1 |
| Brand_i | Dummy for Dell (baseline = HP) | 0 or 1 |

- **Interpretation**: Moving from 1.5kg to 2kg increases rank by 4 positions (makes it much less preferred -- this consumer strongly prefers lighter laptops). Moving from 4hr to 6hr battery decreases rank by 1 (slightly more preferred). Moving from HP to Dell decreases rank by 2 (more preferred -- this consumer prefers Dell). The model has R-squared = 1.0, indicating a perfect fit. Weight is the most important attribute (coefficient magnitude = 4), followed by Brand (magnitude = 2), then Battery Life (magnitude = 1).

- **Example**: What is the predicted rank of a 2kg, 6hr, Dell notebook? Rank = 4 + 4(1) + (-1)(1) + (-2)(1) = 4 + 4 - 1 - 2 = 5. This matches the actual data.

- **Common Mistakes**:
  - Interpreting the weight coefficient as "weight doesn't matter" because it is a positive number -- in rank-order conjoint, positive means less preferred.
  - Failing to verify the model by plugging in known data points to confirm correct predictions.

### Relative Importance of Attributes

- **Formula**: Relative Importance of Attribute A = (Range of coefficients for Attribute A) / (Sum of ranges across all attributes) x 100%

Where Range = |Max coefficient - Min coefficient| for all levels of that attribute (with the baseline level having a coefficient of 0).

- **Variables**:

| Variable | Description | Units |
|----------|-------------|-------|
| Range of Attribute A | Absolute difference between the highest and lowest coefficient values across all levels of Attribute A (baseline = 0) | Same as coefficient units |
| Sum of Ranges | Total of ranges across all attributes | Same as coefficient units |
| Relative Importance | Percentage contribution of the attribute to overall preference | Percentage |

- **Interpretation**: The attribute with the highest relative importance has the greatest influence on consumer preference. This helps product managers prioritize which attributes to invest in optimizing.

- **Example (Salsa)**:
  - Thickness range: max(|-2.33|, |3.83|) = 3.83, min = -2.33, range = 3.83 - (-2.33) = 6.17
  - Spiciness range: max(|4.83|, |10.67|) = 10.67, min = 0 (mild baseline), range = 10.67
  - Color range: |1.00| - 0 = 1.00
  - Sum of ranges = 6.17 + 10.67 + 1.00 = 17.84
  - Spiciness importance = 10.67 / 17.84 = 59.8%
  - Thickness importance = 6.17 / 17.84 = 34.6%
  - Color importance = 1.00 / 17.84 = 5.6%
  - Spiciness dominates preference (59.8%), followed by Thickness (34.6%), with Color having minimal impact (5.6%).

- **Common Mistakes**:
  - Using the coefficient value directly instead of the range across levels.
  - Forgetting to include the baseline level (coefficient = 0) when computing the range.
  - Confusing statistical significance with relative importance -- an attribute can be relatively important but not statistically significant if the sample is small.

### Willingness to Pay (WTP) Estimation

- **Formula**: WTP for Attribute Level X = (Coefficient of X / |Coefficient of Price|) x Price Increment

- **Variables**:

| Variable | Description | Units |
|----------|-------------|-------|
| Coefficient of X | The regression coefficient for the attribute level being valued | Preference units |
| Coefficient of Price | The regression coefficient for the price dummy variable | Preference units per price increment |
| Price Increment | The dollar difference between the price levels in the study | Dollars |
| WTP | The implied dollar value the consumer places on the attribute | Dollars |

- **Interpretation**: WTP tells you how much more a consumer would pay for a specific attribute level relative to the baseline, while remaining equally satisfied. It converts preference units into monetary terms.

- **Example (Hotel Staycation)**: Model: Y_i = 2.08 + 1.42*LargeRoom + 2.05*CityView + 5.83*OceanView - 1.68*HighPrice. The price increment is $50 ($300 to $350). HighPrice coefficient = -1.68 (negative means higher price reduces preference, as expected).
  - WTP for larger room (40m2 to 50m2): (1.42 / 1.68) x $50 = $42. Consumer is indifferent between a 40m2 room at $300 and a 50m2 room at $342.
  - WTP for city view (vs. garden): (2.05 / 1.68) x $50 = $61. Indifferent between garden view at $300 and city view at $361.
  - WTP for ocean view (vs. garden): (5.83 / 1.68) x $50 = $174. Indifferent between garden view at $300 and ocean view at $474.

- **Common Mistakes**:
  - Forgetting to use the absolute value of the price coefficient (it should be negative in a well-behaved model, but you need its magnitude for the ratio).
  - Extrapolating WTP far beyond the price range tested in the study.
  - Assuming WTP is the same across all consumer segments (conjoint can be estimated at the individual level).

### Number of Product Profiles (Full Factorial)

- **Formula**: Total Profiles = L1 x L2 x ... x Ln

- **Variables**:

| Variable | Description | Units |
|----------|-------------|-------|
| L1, L2, ..., Ln | Number of levels for each of the n attributes | Count |
| Total Profiles | Total number of unique product combinations | Count |

- **Interpretation**: The total number of product profiles that respondents would need to evaluate in a full factorial design. If this number is too large (e.g., more than 20-25), a fractional factorial design should be used.

- **Example**: Salsa: 3 (thickness) x 3 (spiciness) x 2 (color) = 18 profiles. Hotel: 2 (room size) x 3 (view) x 2 (price) = 12 profiles. Notebook: 2 (weight) x 2 (battery) x 2 (brand) = 8 profiles.

- **Common Mistakes**:
  - Using a full factorial when the number of profiles is impractically large, causing respondent fatigue and unreliable data.
  - Using too few profiles in a fractional factorial, leading to insufficient data for estimating all coefficients.

## Case Studies

### Salsa Product Design

- **Company**: Textbook example (Crawford, p. 148)
- **Challenge**: A firm developing a new salsa product for young consumers needs to determine which combination of thickness (Regular, Thick, Extra-Thick), spiciness (Mild, Medium-Hot, Extra-Hot), and color (Green, Red) would be most preferred.
- **What Was Done**: 18 product profiles (full factorial of 3x3x2) were presented to respondents who ranked them from 1 (most preferred) to 18 (least preferred). Regression analysis with dummy-coded variables produced: Rank = 3.33 - 2.33*Thick + 3.83*ExtraThick + 4.83*MedHot + 10.67*ExtraHot + 1.00*Red. Relative importance: Spiciness 59.8%, Thickness 34.6%, Color 5.6%.
- **Takeaway**: Spiciness is by far the most important attribute. The most preferred salsa is Thick, Mild, Green (predicted rank = 3.33 - 2.33 = 1.0). Color has minimal and statistically insignificant impact (p = 0.138), meaning the firm can choose color based on other considerations (brand identity, shelf appeal) without sacrificing preference.

### Hotel Staycation Package Design (Sentosa)

- **Company**: Lecture in-class example
- **Challenge**: A hotel in Sentosa needs to design staycation packages by understanding how consumers value room size (40m2 vs. 50m2), view (Garden, City, Ocean), and price ($300 vs. $350 per night).
- **What Was Done**: 12 product profiles (2x3x2) were evaluated by respondents on a 0-10 preference scale. Regression analysis produced: Y = 2.08 + 1.42*LargeRoom + 2.05*CityView + 5.83*OceanView - 1.68*HighPrice (R-squared = 0.964). All coefficients are statistically significant (all p < 0.01).
- **Takeaway**: Ocean view is overwhelmingly the most valued attribute (coefficient = 5.83), worth approximately $174 in willingness to pay over a garden view. This implies the hotel should invest heavily in ocean-view rooms and can charge a significant premium for them. The larger room is worth about $42 in WTP -- meaningful but far less than the view premium.

### Benetton Delayed Differentiation

- **Company**: Benetton (United Colors of Benetton)
- **Challenge**: The traditional garment production process (dye yarn first, then knit sweaters) required Benetton to forecast demand for each color far in advance, leading to 33% unsold stock.
- **What Was Done**: Benetton reversed the production sequence: knit white garments first, then dye finished sweaters based on actual demand signals. This postponement strategy allowed them to produce garments in aggregate and differentiate (by color) only when market demand was known.
- **Takeaway**: By delaying differentiation, Benetton reduced unsold stock from 33% to 8%. This demonstrates the power of modular/postponement thinking -- the same total quantity is produced, but the timing of the differentiating step dramatically reduces waste. The key insight: "The key to mass-customizing effectively is postponing the task of differentiating a product for a specific customer until the latest possible point in the supply network."

### Slack Product Launch Strategy

- **Company**: Slack
- **Challenge**: Launch a team communication tool in a market with established competitors (email, existing chat tools).
- **What Was Done**: Slack used a preview release period (August 2013 to February 2014) before its official launch on February 12, 2014. During the preview period, daily active users grew from near zero to approximately 14,600. After the official launch, growth accelerated dramatically -- reaching 128,000 daily active users by August 2014.
- **Takeaway**: Slack's launch strategy demonstrates the value of phased rollout -- using a preview/beta period to refine the product based on real user feedback before scaling. This aligns with the product development process concept of testing evolving from "Should we build this?" to "How do we make it work better at scale?"

## Key Takeaways

- **Conjoint analysis** is a powerful survey-based technique that decomposes overall product preference into the value contribution of individual attribute levels, enabling data-driven product design and pricing decisions.
- **Regression analysis** is the analytical engine behind conjoint analysis: dummy-coded attribute levels serve as independent variables, and the resulting coefficients reveal both the direction and magnitude of each attribute's impact on preference.
- **Relative importance** calculations show which attributes matter most to consumers -- in the salsa example, spiciness accounts for nearly 60% of preference variation while color accounts for only 5.6%.
- **Willingness to pay** can be estimated from conjoint results when price is included as an attribute, allowing firms to quantify the dollar value consumers place on each feature (e.g., ocean view is worth $174 over garden view in the hotel example).
- **Conjoint limitations** must be understood: it requires decomposable attributes, independent attribute effects, discrete and unambiguous levels, and can cause respondent fatigue with too many profiles.
- **Modular product architecture** enables mass customization and delayed differentiation by structuring products as interchangeable modules with standardized interfaces.
- **Delayed differentiation (postponement)** reduces inventory risk by postponing product-differentiating steps until demand is known, as demonstrated by Benetton reducing unsold stock from 33% to 8%.
- **Poka-Yoke design** builds safeguards into products to prevent user errors, improving usability and safety through design rather than relying on user vigilance.
- **Full factorial vs. fractional factorial** design determines whether respondents see all possible attribute combinations or an efficient subset -- critical for managing respondent burden in studies with many attributes.
- **Statistical significance (p < 0.05)** must be checked for each coefficient -- an attribute that is not statistically significant (like Red color in the salsa example) should not drive product design decisions.

## Key Terms and Definitions Glossary

**Attribute**: An important product characteristic that is varied in a conjoint analysis study (e.g., thickness, spiciness, price). Each attribute has multiple levels. [Related: Levels, Utility]

**Baseline Level**: The reference level for each attribute that is omitted from the regression equation; all other levels are interpreted relative to it (e.g., Regular thickness, Mild spiciness, Green color). [Related: Dummy Variable Coding, Regression Coefficient]

**Choice-Based Conjoint**: A variant of conjoint analysis where respondents choose their preferred option from sets of product profiles rather than ranking or rating all profiles. [Related: Conjoint Analysis, Full Factorial Design]

**Coefficient**: The estimated numerical value in a regression equation that quantifies the effect of an attribute level on the dependent variable, holding all other attributes constant. [Related: Regression Analysis, Utility]

**Conjoint Analysis**: A survey-based statistical technique used to determine how people value different attributes of a product or service, based on the assumption that product value equals the sum of attribute values. [Related: Regression Analysis, Trade-off Analysis, Attribute]

**Delayed Differentiation (Postponement)**: A production strategy that postpones the differentiating steps of manufacturing until customer preferences or demand signals are known, reducing inventory risk and waste. [Related: Mass Customization, Modular Product Architecture]

**Dummy Variable Coding**: The practice of converting categorical attribute levels into binary (0/1) variables for regression analysis, with one level per attribute designated as the baseline and omitted. [Related: Baseline Level, Regression Coefficient]

**Fractional Factorial Design**: An experimental design approach that tests only a strategically chosen subset of all possible attribute combinations, used when the full factorial would require too many product profiles. [Related: Full Factorial Design, Conjoint Analysis]

**Full Factorial Design**: A conjoint analysis design where respondents evaluate every possible combination of attribute levels (e.g., 3x3x2 = 18 salsa profiles). [Related: Fractional Factorial Design, Product Profiles]

**Mass Customization**: A production strategy that combines the efficiency of mass production with the flexibility of individual customization, typically enabled by modular design and postponement. [Related: Delayed Differentiation, Modular Product Architecture]

**Modular Product Architecture**: A design approach in which a product is composed of discrete, interchangeable modules with standardized interfaces, allowing independent upgrade, replacement, or customization of individual modules. [Related: Product Architecture, Mass Customization, Delayed Differentiation]

**P-value**: The probability that the observed regression coefficient could have arisen by chance if the true effect were zero. A p-value below 0.05 is conventionally considered statistically significant. [Related: Regression Coefficient, Statistical Significance]

**Poka-Yoke**: A Japanese term meaning "mistake-proofing" -- a fail-safe design method that builds safeguards into products or processes to prevent user errors (e.g., battery compartments shaped for correct orientation only). [Related: Product Design, Fail-Proof Design]

**Product Architecture**: The arrangement of functional elements into physical chunks (modules) which become the building blocks for the product or product family. [Related: Modular Product Architecture, Mass Customization]

**R-Squared**: The proportion of variance in the dependent variable explained by the regression model, ranging from 0 (no explanatory power) to 1 (perfect fit). [Related: Regression Analysis, Conjoint Analysis]

**Regression Analysis**: A statistical method used to estimate the relationship between a dependent variable and one or more independent variables. In conjoint analysis, it decomposes preference into attribute-level contributions. [Related: Conjoint Analysis, Coefficient, R-Squared]

**Relative Importance**: The percentage contribution of each attribute to overall preference, calculated as the range of an attribute's coefficients divided by the sum of ranges across all attributes. [Related: Conjoint Analysis, Coefficient, Utility]

**Trade-off Analysis**: An alternative name for conjoint analysis, emphasizing that respondents trade off less desirable attribute levels for more desirable ones when evaluating product profiles. [Related: Conjoint Analysis, Attribute]

**Utility (Part-Worth)**: The value that customers place on each level of an attribute, estimated from regression coefficients in conjoint analysis. Higher utility indicates greater preference contribution. [Related: Conjoint Analysis, Coefficient, Relative Importance]

**Willingness to Pay (WTP)**: The maximum additional amount a consumer would pay for a specific attribute level relative to the baseline while remaining equally satisfied, calculated from the ratio of attribute and price coefficients. [Related: Conjoint Analysis, Coefficient, Pricing]
