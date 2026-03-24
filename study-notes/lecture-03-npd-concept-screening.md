---
title: "Lecture 3: New Product Development Part 2 — Concept Screening and Testing"
type: lecture
source_files:
  - "source-materials/lecture slides/lec 3 New Product Development part 2 - Concept Screening and Testing.pdf"
topics:
  - "Concept Screening"
  - "Concept Testing"
  - "Concept Scoring Matrix"
  - "Pugh Matrix"
  - "Product Specifications"
lecture_number: 3
---

## Overview

Lecture 3 continues the New Product Development process from where Lecture 2 left off, picking up at the critical bridge between customer needs and actionable product concepts. The session revisits the Jobs To Be Done (JTBD) framework and the challenge of translating raw customer language into properly structured needs statements — a discipline that turns qualitative field observations into inputs that engineers and designers can actually use. The lecture also formalises the conversion of customer needs into measurable product specifications, establishing the three-part formula of metric, value, and units as the standard output of this translation process.

The core of the lecture introduces the structured methods by which teams move from a broad field of candidate concepts down to a small set worth developing. Two complementary matrix tools — the Concept Screening Matrix and the Concept Scoring Matrix — are presented as the backbone of this evaluation process. The screening matrix uses a simple plus/zero/minus scale relative to a reference concept to eliminate clearly inferior options quickly, while the scoring matrix applies weighted criteria ratings (on a 1–5 scale) to produce total weighted scores that rank the surviving candidates with greater discrimination. Both tools are illustrated with a detailed reusable insulin syringe case involving seven distinct concept variants across seven selection criteria.

The lecture closes with the distinction between concept selection and concept testing, emphasising that the goal is not merely to pick the best option from the current set but to combine and refine concepts iteratively until a genuinely superior design emerges. Testing is positioned as a continuous, multi-stage discipline woven throughout the entire product development pipeline — from qualitative concept testing early on, through prototype iterations, to quantitative market testing and beta validation just before launch. The recurring warning is that skipping any stage of testing is an accelerated path to product failure.

---

## Key Concepts

### Customer Needs Translation

#### Jobs To Be Done (JTBD)
**Definition:** A framework that reframes the question of why customers buy products. Rather than asking what features users want, JTBD asks what "job" the customer is trying to accomplish in a given situation: "When [situation], I want to [motivation], so I can [desired outcome]."

**Context:** JTBD contrasts with traditional product management thinking, which centres on feature requests, user personas, and stated preferences. JTBD anchors the team to the real motivational trigger — the specific situation in which a person decides to "hire" a product to make progress. The class exercise used food-delivery apps (Grab/FoodPanda) as the interview subject, with participants divided into interviewer, interviewee, and observer roles focused entirely on a specific past event rather than hypotheticals.

**Relationships:** JTBD precedes customer needs statement writing. The insights gathered through JTBD interviews feed directly into the five-step Customer Need Analysis process (Define Scope, Gather Information, Interpret Data, Quantify Importance, Reflect). It connects to the Voice of the Customer concept, which is the raw material that gets translated into formal needs statements.

#### Customer Needs Statements
**Definition:** Formally structured expressions of what the customer requires from a product, written as positive attributes of the product itself rather than as descriptions of how a solution should work. A well-formed needs statement specifies "what" the product does, not "how" it does it.

**Context:** The lecture provides five guidelines for writing valid needs statements, illustrated with smart thermostat and handbag examples. (1) "What not How" — focus on the outcome, not the mechanism (e.g., "The thermostat can be controlled remotely" rather than "The thermostat is accompanied by a downloadable iPhone app"). (2) Specificity — be precise enough to be testable (e.g., "The thermostat can control separate heating and cooling systems" rather than "The thermostat is versatile"). (3) Positive not Negative — state what the product does do, not what it avoids doing. (4) Attribute of the Product — frame the need as a property of the product, not a user action. (5) Avoid "Must" and "Should" — these words introduce obligation that belongs in specifications, not needs statements.

**Relationships:** Needs statements are derived from the Voice of the Customer and serve as the direct input to product specifications. They sit in the middle of the chain: Voice of the Customer → Customer Needs → Product Specifications.

#### Product Specifications
**Definition:** The quantified, measurable translation of customer needs into engineering terms. A product specification consists of three components: a metric (what is measured), a value (the target number or range), and units (the unit of measurement). Example: Total Mass | 8.5–10 | kg.

**Context:** The lecture distinguishes between target specifications (set early, expressed as marginal and ideal value ranges) and final specifications (committed point values set after design feasibility is confirmed). Target specs are deliberately dynamic — they evolve as customers change, competitors respond, technical capabilities improve, and design tradeoffs become apparent. The process for building specifications involves: (1) starting with the customer needs statement; (2) preparing a list of metrics with importance ratings and units; (3) benchmarking competitive products on both perceived customer satisfaction and objective metrics; and (4) setting marginal and ideal target values.

**Relationships:** Specifications are downstream of customer needs statements and upstream of concept generation. The lecture notes two key decision points when freezing specifications: Early Freeze allows downstream tasks to start with firm inputs and facilitates cost and performance optimisation; Late Freeze allows better alignment with a changing market but delays downstream work.

### Concept Generation and Selection

#### Product Concept
**Definition:** A verbal or prototype statement of what is going to be changed and how the customer stands to gain or lose. A concept requires at least two of three inputs — Form (the physical thing or service process), Technology (the source by which the form is attained), and Benefit/Needs (the customer value) — to be feasible. Technology permits the firm to develop a form that provides a benefit.

**Context:** Three patterns of concept generation exist: (1) customer need drives technology development which produces a form — considered lowest risk; (2) the firm develops a technology first and then finds a matching customer need; (3) the firm envisions a form, develops the technology, and tests with customers to learn what benefits are actually delivered. The "Designer Decaf" espresso example illustrates all three inputs: the need (consumers want decaf that tastes like regular), the form (darker, thicker Turkish-style espresso), and the technology (a new chemical extraction process).

**Relationships:** Product concepts are the outputs of the concept generation phase and the inputs to concept selection. They are evaluated through the Concept Screening Matrix and Concept Scoring Matrix.

#### Concept Screening Matrix (Pugh Matrix)
**Definition:** A structured decision tool that compares multiple product concepts against a reference concept (typically the current or most familiar design) on a set of selection criteria using a simple three-point scale: + (better than reference), 0 (same as reference), – (worse than reference). The net score is Plusses minus Minuses.

**Context:** In the insulin syringe example, seven concepts (A through G) were evaluated against seven criteria (Ease of Handling, Ease of Use, Readability of Settings, Dose Metering Accuracy, Durability, Ease of Manufacture, Portability). The existing product served as the reference (all zeros). Concept A (Master Cylinder) ranked first with a net score of +3; concepts C (Ratchet) and F (Lever Set) were eliminated. Concepts that survive move to the Scoring Matrix for finer discrimination.

**Relationships:** Screening precedes scoring. It is fast and qualitative, designed to rapidly prune a large set. Results are used to decide which concepts to "Continue" developing. Eliminated concepts may still contribute individual features to surviving concepts through combination.

#### Concept Scoring Matrix
**Definition:** A weighted evaluation tool that rates surviving concepts on each selection criterion using a 1–5 numerical scale (1 = Much Worse than Reference, 3 = Same as Reference, 5 = Much Better than Reference), multiplies each rating by the criterion's importance weight (as a percentage), and sums the weighted scores to produce a total score for ranking.

**Context:** In the syringe example, four concepts (A, DF, E, G+) were scored across seven weighted criteria. Concept DF (Lever Stop, a combination of concepts D and F) won with a total score of 3.45 and was selected for development. The weights reflected engineering and market priorities: Dose Metering Accuracy (25%), Ease of Manufacture (20%), Ease of Use and Durability (15% each), Readability (10%), Portability (10%), and Ease of Handling (5%). The boat cup-holder example showed the same tool applied to seven concepts across six major criteria groups, with Concept C winning at 594 points.

**Relationships:** Scoring follows screening. It is more labour-intensive but produces a more defensible ranking. The process includes a reflection step: teams should interrogate which ratings they are least confident in and whether any criteria are missing before committing to a selection.

#### Concept Testing
**Definition:** The phase in which selected concepts are exposed to external validation — primarily customer feedback — to check whether the concept genuinely addresses a market need before significant development resources are committed. It is a stage of elimination guided by the Product Innovation Charter (PIC).

**Context:** Following the PIC, concept testing should eliminate concepts that require technologies the firm does not possess, target customer segments the firm does not know well, offer inappropriate levels of innovativeness, or are wrong on cost, competitive proximity, or other strategic dimensions. Testing is not a single event but a continuous strand running through the entire development pipeline, including: Go/No-Go decision gates, specification testing (benchmarking), prototype testing (design iterations), qualitative concept testing, alpha performance and user interface testing, quantitative market testing, beta validation/acceptance testing, and A/B testing for release versioning.

**Relationships:** Concept testing follows concept selection and precedes setting final specifications. The lecture emphasises that the goal is not merely selection but creation — teams must combine and refine concepts iteratively to produce something genuinely better than any individual candidate.

---

## Frameworks & Mental Models

### The Voice of the Customer to Specifications Pipeline

**Visual Description:** A three-box linear flow: [Voice of the Customer] → [Customer Needs] → [Product Specifications]. Each arrow represents a translation act. The first arrow converts raw customer quotes into properly structured needs statements. The second arrow converts needs statements into metric + value + units triples.

**How to Apply:** Begin with verbatim customer quotes gathered through interviews, focus groups, observation, or ethnography. Apply the five guidelines (What not How, Specificity, Positive not Negative, Attribute of Product, Avoid Must/Should) to write a needs statement for each quote. Then for each needs statement, identify one or more metrics that would confirm or deny satisfaction of the need, determine appropriate units, and benchmark competitive products to set marginal and ideal target values.

**When to Use:** Use this pipeline whenever raw customer research data needs to be converted into engineering or design inputs. It is the foundational translation sequence that precedes concept generation and must be complete before any meaningful concept evaluation can occur.

---

### Concept Screening Matrix (Pugh Matrix)

**Visual Description:** A grid with product concepts as columns and selection criteria as rows. One column is designated the Reference concept (usually the existing product). Each cell contains +, 0, or –. Below the criteria rows are summary rows for Plusses, Sames, Minuses, Net Score (Plusses minus Minuses), Rank, and a Continue? Yes/No decision.

**How to Apply:**
1. List all candidate concepts as columns; designate one as the Reference.
2. List selection criteria as rows (derived from the customer needs hierarchy).
3. For each concept-criterion cell, judge whether the concept is better (+), the same (0), or worse (–) than the reference.
4. Count Plusses, Sames, and Minuses for each concept; calculate Net = Plusses – Minuses.
5. Rank concepts by Net score.
6. Decide which to continue (typically positive net scores) and which to eliminate.
7. Before eliminating any concept, note whether specific features could be transplanted into surviving concepts.

**When to Use:** Use the Screening Matrix early in the selection process when there are many concepts (five or more) and the team needs a rapid, low-effort method to prune the field before investing in the more detailed Scoring Matrix. It is also useful for building team consensus around which concepts are clearly weak.

---

### Concept Scoring Matrix

**Visual Description:** A grid with concepts as columns and weighted selection criteria as rows. Each concept has two sub-columns: Rating (1–5) and Weighted Score (Rating × Weight%). The bottom row shows Total Score and Rank. A legend maps ratings to performance descriptors (1 = Much Worse, 2 = Worse, 3 = Same, 4 = Better, 5 = Much Better than reference).

**How to Apply:**
1. Prepare the matrix with criteria weights derived from customer importance surveys.
2. For each surviving concept, assign a rating (1–5) for each criterion relative to the reference concept.
3. Calculate weighted scores: Rating × Criterion Weight.
4. Sum weighted scores to get the total score for each concept.
5. Rank concepts by total score.
6. Investigate whether low-scoring concepts on specific criteria can be combined with high-scoring concepts to cancel weaknesses.
7. Reflect: Which ratings are least certain? Are any criteria missing? Check sensitivity to weight changes.

**When to Use:** Use after the Screening Matrix has reduced the candidate set to a manageable number (typically 3–5 concepts). Use it when the team needs a documented, defensible ranking that accounts for the differential importance of various customer requirements.

---

### The Need–Form–Technology Venn Diagram

**Visual Description:** Three overlapping circles labelled Need, Form, and Technology. The overlapping regions between any two circles are labelled "C" (Concepts). The centre intersection of all three circles is labelled "New Product." This illustrates that concepts emerge from any pairing of the three inputs, and a fully specified new product requires all three.

**How to Apply:** When generating concepts, explicitly identify which of the three inputs are known and which are missing. A benefit without a form or technology is not yet a concept. Use the diagram to diagnose whether a proposed idea is truly a concept (at least two inputs present) or merely a single input that still needs development. Apply it to identify which development risks are open: missing technology means R&D risk; missing form means design work remains; an unclear need means market research is insufficient.

**When to Use:** Use this model in the concept generation brainstorming phase to evaluate whether candidate ideas are truly feasible concepts or just partial ideas. Also use it when reviewing a concept to ensure all three dimensions have been addressed before committing to development.

---

## Formulas & Quantitative Tools

### Concept Scoring Formula

**Formula:**

Total Score = Σ (Weight_i × Rating_i)

where the sum is taken across all i selection criteria.

**Variables:**

| Variable | Description | Range / Units |
|---|---|---|
| Weight_i | Importance weight of criterion i, derived from customer surveys | Expressed as a decimal (e.g., 0.25 for 25%); all weights must sum to 1.0 |
| Rating_i | Performance rating of the concept on criterion i relative to the reference concept | Integer 1–5 (1 = Much Worse, 2 = Worse, 3 = Same, 4 = Better, 5 = Much Better) |
| Total Score | Weighted sum of all criteria ratings for a concept | Range: 1.0 (all ratings = 1) to 5.0 (all ratings = 5); the reference concept always scores 3.0 |

**Interpretation:** A concept with a Total Score above 3.0 outperforms the reference on a weighted basis. The concept with the highest Total Score is ranked first and is the primary candidate for development, though combination with other concepts should be considered before committing. Concepts scoring below the reference (< 3.0) are candidates for elimination, though individual high-performing features may be salvaged.

**Example (Insulin Syringe):**

Concept DF (Lever Stop), selected criteria:

- Ease of Use: Weight = 15%, Rating = 4 → Weighted Score = 0.60
- Dose Metering Accuracy: Weight = 25%, Rating = 3 → Weighted Score = 0.75
- Durability: Weight = 15%, Rating = 5 → Weighted Score = 0.75
- Ease of Manufacture: Weight = 20%, Rating = 3 → Weighted Score = 0.60
- Portability: Weight = 10%, Rating = 3 → Weighted Score = 0.30
- Readability: Weight = 10%, Rating = 3 → Weighted Score = 0.30
- Ease of Handling: Weight = 5%, Rating = 3 → Weighted Score = 0.15

Total Score = 3.45 → Ranked 1st → Decision: Develop

**Common Mistakes:**
- Allowing criterion weights to sum to more or less than 100%; always normalise weights before scoring.
- Using the screening matrix scale (+/0/–) in the scoring matrix instead of the 1–5 scale — these are different tools with different scales.
- Setting the reference concept to anything other than a neutral score of 3 on all criteria; the reference is the baseline by definition.
- Selecting the concept with the highest average score without checking whether combining two concepts could eliminate each other's weaknesses (the "best average product" trap).
- Failing to conduct a sensitivity check — if small changes in weights would flip the ranking, the result is not robust.

### Product Specification Formula

**Formula:**

Product Specification = Metric + Value(s) + Units

**Variables:**

| Component | Description | Example |
|---|---|---|
| Metric | The measurable property being specified | Total Mass; Cycles to Failure; Unit Production Cost |
| Value | The target number or acceptable range | 8.5–10; >500k; <110 |
| Units | The unit of measurement for the metric | kg; cycles; US$ |

**Interpretation:** A specification is only complete when all three components are present. A needs statement without a metric is not yet a specification. A metric without a value is not actionable. A value without units is ambiguous.

**Common Mistakes:**
- Confusing needs statements with specifications — needs statements use qualitative language ("the lock is lightweight"); specifications are quantitative ("Total Mass: ≤ 1.0 kg").
- Setting only a marginal value without an ideal value, losing the ability to differentiate between minimally acceptable and truly excellent designs.
- Freezing specifications too early before design feasibility is understood, or too late to allow downstream development to begin.

---

## Case Studies

### Nest Smart Thermostat — Building a Mission and Specifications

**Company:** Nest Labs (Google)

**Challenge:** Develop a programmable thermostat for residential use that replaces an existing device, is compatible with most existing wiring, appeals to residential consumers, and achieves a 50% gross margin with a 10% share of the replacement thermostat market within four years.

**What Was Done:** The team constructed a formal mission statement defining product description, benefit proposition (simple to use, attractive, saves energy), key business goals, primary and secondary markets, assumptions (replacement device, compatible with existing wiring), and stakeholders (users, retailers, sales force, service centres, production, legal). Customer quotes were translated into needs statements using the five guidelines — for example, "I would like my iPhone to adjust my thermostat" became "The thermostat can be controlled remotely without requiring a special device" (not "The thermostat is accompanied by a downloadable iPhone app," which specifies a solution, not a need). Needs were then translated into measurable metrics with importance weights and benchmarked against six competing products (ST Tritrack, Maniray 2, Rox Tahx Quadra, Rox Tahx Ti 21, Tonka Pro, Gunhill Head Shox) on both perceived customer satisfaction and objective metric values.

**Takeaway:** A complete mission statement — including stakeholders, assumptions, and explicit business goals — is a prerequisite to productive customer needs analysis. The Nest example demonstrates that the same customer complaint can be written correctly or incorrectly as a needs statement, and that only the correct form is directly usable as an input to metric development and competitive benchmarking.

---

### Reusable Insulin Syringe — Two-Stage Concept Selection

**Company:** Generic medical device development team (course example)

**Challenge:** Select the best dose-metering mechanism for a reusable insulin syringe from seven candidate concepts (A through G), balancing ease of use, dose accuracy, durability, portability, and ease of manufacture.

**What Was Done:** In Stage 1 (Concept Screening), all seven concepts were rated against the existing product on seven criteria using the +/0/– scale. Concept A (Master Cylinder) ranked first (net +3); Concepts C (Ratchet) and F (Lever Set) were eliminated (net –2 and –1 respectively). In Stage 2 (Concept Scoring), four surviving concepts — A, a combination DF (Lever Stop, merging eliminated concepts D and F), E (Swash Ring), and G+ (an enhanced Dial Screw) — were scored on the 1–5 weighted scale. Concept DF won with a total weighted score of 3.45, primarily because it rated 5 on Durability (weight 15%) and 4 on Ease of Use (weight 15%), while performing adequately on the highest-weighted criterion, Dose Metering Accuracy (25%). Importantly, the winning concept DF was a combination of two concepts that had individually been eliminated in the screening stage, demonstrating the value of concept combination.

**Takeaway:** Concept screening and concept scoring are sequential, not interchangeable. The screening stage removes clear losers quickly; the scoring stage discriminates among near-equals. The most important design insight from this case is that concepts eliminated in screening may still contribute valuable features — teams must actively look for combination opportunities rather than treating eliminated concepts as entirely worthless.

---

### Boat Cup Holder — Multi-Criteria Weighted Scoring at Scale

**Company:** Generic marine product development (course example)

**Challenge:** Select the best spill-proof cup holder design for marine vessel use from seven concepts (A, C, F, I, J, K, O) across six major criteria groups and numerous sub-criteria.

**What Was Done:** A full Concept Scoring Matrix was built with six weighted criteria groups: Flexible Use (20%), Keeps Drink Container Stable (20%), Easy to Use (15%), Maintains Drink Condition (15%), Attractive in Environment (10%), and Manufacturing Ease (10%), with Requires Little Maintenance at 5% and Survives Boating Environment at 5%. Each criterion group was further decomposed into sub-criteria with their own importance weights. Concept C won with 594 total points, followed by Concept O at 587 and Concept F at 585 — a very tight race that highlights the importance of weight sensitivity analysis before finalising the decision.

**Takeaway:** When total scores are close (within 1–2%), small changes in criterion weights can flip the ranking. The Concept Scoring Matrix is not a mechanical decision machine — it is a structured thinking tool. Close scores should trigger a sensitivity analysis and a deeper qualitative discussion rather than an automatic selection of the numerically highest concept.

---

## Key Takeaways

- **Jobs To Be Done** shifts focus from feature requests to the underlying situational motivation — "What progress is the user trying to make?" — keeping product teams anchored in real customer problems rather than surface-level requests.
- **Customer needs statements** must be written as positive product attributes using "what not how" language, at an appropriate level of specificity, and without prescribing solutions or using obligatory language ("must," "should").
- **Product specifications** are the measurable translation of needs statements; they require a metric, a value (or range), and units — all three components must be present for a specification to be actionable.
- **Target specifications** are dynamic and should be set with both marginal and ideal values; they evolve as technical feasibility is understood and should only be frozen (early or late) after deliberate strategic consideration.
- The **Concept Screening Matrix (Pugh Matrix)** is a fast, qualitative tool using a +/0/– scale relative to a reference concept, designed to prune a large set of candidates efficiently before detailed scoring.
- The **Concept Scoring Matrix** applies weighted importance criteria and a 1–5 performance scale to produce total weighted scores; the concept with the highest score is the primary development candidate, but scores alone do not end the conversation.
- The **goal of concept evaluation is not selection but creation** — teams must combine and refine concepts to develop something genuinely better than any individual candidate, and features from eliminated concepts should be actively recycled.
- **Concept testing** is a continuous discipline spanning the entire development pipeline, from qualitative concept testing early on through Go/No-Go gates, prototype iterations, alpha/beta testing, and A/B versioning at release — skipping any stage accelerates failure.
- A **sensitivity check** on importance weightings is essential before committing to the top-ranked concept; if small weight changes flip the ranking, the decision is not robust and requires additional qualitative deliberation.
- The **least risky concept generation pattern** is to start from a confirmed customer need, then identify enabling technology, then design the form — because this sequence grounds the innovation in demonstrated demand rather than technological push.

---

## Key Terms and Definitions Glossary

**Benchmarking:** The process of evaluating competitive products against both customer needs (perceived satisfaction) and established metrics (objective measurements) to set realistic target specification values. [Related: Product Specifications, Concept Scoring Matrix]

**Concept Screening Matrix (Pugh Matrix):** A matrix tool for rapid, qualitative comparison of multiple product concepts against a reference concept on a set of selection criteria, using a +/0/– scale. Net score = Plusses minus Minuses. [Related: Concept Scoring Matrix, Concept Selection]

**Concept Scoring Matrix:** A weighted matrix tool that rates concepts on a 1–5 numerical scale across importance-weighted criteria, producing a total weighted score for ranking and selection. [Related: Concept Screening Matrix, Pugh Matrix]

**Concept Testing:** The phase in which selected product concepts are validated against customer and strategic criteria to eliminate concepts that are technically unfeasible, strategically misaligned, or lacking market fit. [Related: Go/No-Go Decision Gates, Phase 3 NPD]

**Customer Needs Statement:** A formally structured, product-attribute expression of what the customer requires, written in "what not how" positive language without solution prescription or obligatory phrasing. [Related: Voice of the Customer, Product Specifications]

**Early Freeze:** A specification-setting strategy in which final specifications are committed to early in the development process, enabling downstream tasks to begin with firm inputs and facilitating cost and performance optimisation. [Related: Late Freeze, Product Specifications]

**Ideal Value:** The best achievable value for a product specification metric, representing the target if no constraints existed; contrasted with the Marginal Value. [Related: Marginal Value, Target Specifications]

**Jobs To Be Done (JTBD):** A customer insight framework asserting that people "hire" products to accomplish a specific job in a specific situation, structured as: "When [situation], I want to [motivation], so I can [desired outcome]." [Related: Customer Needs Statement, Voice of the Customer]

**Late Freeze:** A specification-setting strategy in which final specifications are committed to as late as possible in the development process, allowing better alignment with evolving customer needs and competitive dynamics. [Related: Early Freeze, Product Specifications]

**Latent Needs:** Customer needs that customers may not yet be aware of or cannot articulate; addressing them produces products that surprise and delight by solving problems customers did not know they had. Surfaced through ethnographic observation rather than traditional surveys. [Related: Explicit Needs, Voice of the Customer, Customer Needs Statement]

**Marginal Value:** The minimum acceptable value for a product specification metric — the threshold below which the product fails to satisfy the need. [Related: Ideal Value, Target Specifications]

**Metric:** The measurable property used to operationalise a customer need in the form of a product specification; combined with a value and units to form a complete specification. [Related: Product Specifications, Customer Needs Statement]

**Mission Statement (Product):** A formal document defining a product's description, benefit proposition, key business goals, primary and secondary markets, constraints and assumptions, and stakeholders; used to scope customer needs analysis. [Related: Stakeholders, Opportunity Identification]

**Needs-Form-Technology Model:** A conceptual framework representing a product concept as the intersection of at least two of three inputs — customer Need/Benefit, physical Form, and enabling Technology. A new product requires all three. [Related: Product Concept, Concept Generation]

**Product Concept:** A verbal or prototype statement describing what will change in a product and how the customer stands to gain or lose; requires at least two of Need, Form, and Technology to be a feasible concept. [Related: Needs-Form-Technology Model, Concept Generation]

**Product Innovation Charter (PIC):** A guiding document — also called a mission statement for the NPD project — that defines the product description, benefit proposition, key business goals, primary and secondary markets, constraints, assumptions, and stakeholders before development begins; functions as the strategic scope document for the entire NPD team. [Related: Concept Testing, NPD Process, Mission Statement]

**Product Specification:** The quantified, measurable translation of a customer needs statement into engineering terms; composed of Metric + Value(s) + Units. [Related: Customer Needs Statement, Metric]

**Reference Concept:** The baseline concept used as the comparison standard in Concept Screening and Scoring Matrices; typically the current/existing product; assigned a score of 0 (screening) or 3 (scoring) on all criteria. [Related: Concept Screening Matrix, Concept Scoring Matrix]

**Voice of the Customer (VoC):** The raw, verbatim language in which customers express their needs, frustrations, and desires, gathered through interviews, focus groups, observation, and ethnography; the starting input to the customer needs translation process. [Related: Customer Needs Statement, JTBD]

**Weighted Score:** The product of a criterion's importance weight and a concept's rating on that criterion in the Concept Scoring Matrix; summed across all criteria to produce the Total Score. [Related: Concept Scoring Matrix, Total Score]
