---
title: "Supplementary Reading: Product Concept Selection Methods"
type: supplementary
source_files:
  - "source-materials/lect 3_Product concept selection methods.pdf"
topics:
  - "Concept Selection"
  - "Pugh Matrix"
  - "Concept Screening"
  - "Decision Methods"
  - "Product Development"
lecture_number: 17
---

# Supplementary Reading: Product Concept Selection Methods

## Overview

Concept selection is the process by which a product development team narrows a field of candidate ideas down to one or a small set of concepts that will move forward into development. Because generating ideas is relatively cheap while developing them is expensive, choosing the right concept at this stage has enormous downstream consequences for product success, resource allocation, and team alignment. The selection method chosen must be appropriate to the team's size, timeline, organizational culture, and the degree of analytical rigor required.

The ten methods documented in this reading span a spectrum from highly informal to formally quantitative. At the informal end, techniques like open multi voting and group consensus rely on interpersonal dynamics and collective judgment, making them fast and easy to facilitate but susceptible to bias, groupthink, and the influence of dominant personalities. At the formal end, the concept screening matrix and concept scoring matrix impose structured criteria and numerical scoring, producing defensible, reproducible rankings at the cost of additional setup time and potential false precision.

No single method is universally superior. Practitioners choose based on context: a startup racing to ship may rely on a leader's decision or quick voting round, while a large consumer-goods company investing millions in a new product line may require a weighted scoring matrix and market testing before committing. Understanding the tradeoffs of each method — speed, inclusivity, validity, cost, and analytical depth — is the core skill this supplement develops.

---

## Key Concepts

### Voting-Based Methods

#### Open Multi Voting

**Definition**: A technique in which team members publicly cast votes for their preferred concepts, with the results visible to all participants in real time.

**Context**: Open multi voting is best suited to early-stage brainstorming sessions where energy and momentum matter. It is fast to execute and requires no special setup, making it a common choice in workshops and sprint planning sessions.

**Relationships**: Shares the speed advantage of Secret Ballot Voting but sacrifices anonymity. Its main failure mode — groupthink — is the very problem Secret Ballot Voting is designed to solve. It is often used as a first pass before more rigorous methods like the Concept Screening Matrix.

#### Secret Ballot Voting

**Definition**: An anonymous voting process in which participants record their preferences privately before results are tallied, preventing any individual's vote from being publicly attributed.

**Context**: Most valuable when the team includes a clear authority figure (manager, senior engineer, client) whose expressed preferences might unduly sway others. Also appropriate when interpersonal conflict makes open deliberation uncomfortable or counterproductive.

**Relationships**: Directly addresses the bias vulnerability of Open Multi Voting. Like open voting, it still produces a raw preference count rather than a criterion-weighted score, so it is qualitative in nature. May be combined with Group Consensus as a way to surface individual preferences before collective discussion.

### Qualitative Comparison Methods

#### Pro/Con or Benefit/Effort List

**Definition**: A structured qualitative comparison in which each concept is evaluated by explicitly listing its advantages versus its disadvantages, or its expected benefits versus the effort or resources required to execute it.

**Context**: Useful when the evaluation criteria are not yet well-defined and the team needs a lightweight framework to organize intuitions. The Benefit/Effort variant is particularly common in product management, where it maps directly onto prioritization frameworks like the Impact/Effort matrix.

**Relationships**: More structured than pure voting but less rigorous than the Concept Screening or Scoring Matrix. Often used in consulting contexts alongside the Client's Decision method, where the list helps communicate tradeoffs to the decision-maker.

#### Group Consensus

**Definition**: A facilitated discussion process in which the team continues deliberating until all members agree on, or can at least accept, a single concept selection.

**Context**: Builds the strongest team buy-in because every voice is heard and the outcome is collectively owned. Most appropriate when the team is small, time pressure is low, and long-term commitment to the chosen direction is critical.

**Relationships**: Can be preceded by Secret Ballot Voting to surface initial preferences before discussion begins. Shares the risk of groupthink with Open Multi Voting if facilitation is weak, but its iterative dialogue nature gives it more opportunity to surface minority concerns.

### Authority-Based Methods

#### Leader's Decision

**Definition**: A method in which a designated senior decision-maker — a project lead, product manager, or executive — makes the final concept selection, potentially after reviewing input from the team.

**Context**: Efficient in time-critical situations or when the organization is hierarchically structured and accountability for the decision rests with one individual. Common in military, consulting, and startup environments where speed and clear ownership are valued.

**Relationships**: Most efficient in terms of calendar time but lowest in inclusivity. Risk of overlooking valuable input from subject-matter experts on the team. Stands in contrast to Group Consensus; organizations often toggle between these two depending on urgency.

#### Client's Decision

**Definition**: A method in which the external customer or client holds final authority over concept selection, overriding internal team preferences or analytical recommendations if they conflict.

**Context**: Extremely common in consulting, contract manufacturing, and agency engagements where the client is paying for the development work and retains decision rights. Even a rigorous internal analysis may be set aside if the client prefers otherwise.

**Relationships**: Shares the speed advantage of the Leader's Decision but introduces an external authority, which can create tension when the client's preference conflicts with internal expert judgment. Highlights the importance of managing client expectations and communicating analytical findings clearly.

### Externally Validated Methods

#### Market Testing

**Definition**: A concept validation approach in which alternatives are exposed to real potential customers through controlled experiments, pilots, surveys, or prototypes, and customer response data informs the selection decision.

**Context**: Provides the highest external validity of any method because it grounds the decision in actual customer behavior rather than internal judgment. Most appropriate when the stakes are high, the budget allows for testing, and the development timeline permits a testing phase before final commitment.

**Relationships**: Directly complements the Concept Screening and Scoring Matrix by providing customer-facing data to populate or validate the criteria weights and ratings. More expensive and time-consuming than any of the judgment-based methods.

#### Online Community Rating

**Definition**: A lightweight external validation method in which concepts are posted to an online community, platform, or crowd-sourcing tool and rated or commented on by users.

**Context**: Scalable and fast — a concept can gather hundreds of responses in hours at very low cost. Common in consumer tech, gaming, and open-innovation contexts. Platforms like Reddit, Product Hunt, or internal idea management tools can serve this purpose.

**Relationships**: A lower-cost, lower-rigor alternative to formal Market Testing. Feedback volume is high but depth and representativeness may be low; the responding audience may not match the actual target market. Useful as a complement to, rather than a replacement for, more structured methods.

### Matrix-Based Analytical Methods

#### Concept Screening Matrix (Pugh Matrix — Screening Phase)

**Definition**: A decision tool in which multiple concepts are compared against a reference concept (the datum) using a simple +/0/– rating on each evaluation criterion, producing net scores used to eliminate weaker concepts and identify candidates for further development.

**Context**: Developed as part of Stuart Pugh's concept selection methodology. Designed specifically to reduce a large field of concepts down to a manageable shortlist quickly. The use of relative ratings (+/0/–) rather than absolute scores keeps the process fast and focused on directional differentiation.

**Relationships**: Precedes the Concept Scoring Matrix in a two-stage process. The screening phase is explicitly not meant to produce a final answer — its goal is rapid elimination, not precise ranking. Concepts that score poorly are dropped; those that score well move to the scoring phase.

#### Concept Scoring Matrix (Pugh Matrix — Scoring Phase)

**Definition**: A weighted quantitative decision tool in which each surviving concept is rated on each criterion using a numerical scale, and ratings are multiplied by criterion weights to produce a total weighted score, enabling rank-ordering of concepts.

**Context**: Used after screening to differentiate among the remaining strong candidates with greater precision. The weight assigned to each criterion reflects its relative importance to customer needs or strategic goals. More time-intensive than screening but produces a defensible, documented selection rationale.

**Relationships**: Builds directly on the Concept Screening Matrix. The criteria used in scoring are typically the same as those used in screening, but the scoring phase applies finer-grained numerical ratings instead of +/0/–. The output is a ranked list of concepts, with the highest total weighted score indicating the preferred option.

---

## Frameworks & Mental Models

### Concept Screening Matrix (Pugh Screening)

**Visual Description**: A grid with concepts listed as columns and evaluation criteria listed as rows. One concept is designated the "datum" or reference (typically the current product, most familiar option, or a baseline concept). Each non-datum concept receives a rating of + (better than datum), 0 (same as datum), or – (worse than datum) for each criterion. The bottom of the matrix totals the plusses, zeros, and minuses and computes a net score (plusses minus minuses). Concepts with strongly negative net scores are eliminated; those with neutral or positive net scores advance.

**How to Apply**:
1. List all candidate concepts as column headers.
2. Designate one concept as the datum (reference).
3. Define the evaluation criteria as row headers (typically drawn from customer requirements or design specifications).
4. For each cell, rate the concept relative to the datum: + if better, 0 if equivalent, – if worse.
5. Sum the +, 0, and – counts for each concept.
6. Compute net score = (count of +) – (count of –).
7. Eliminate concepts with the lowest net scores. Consider whether low-scoring concepts contain any superior individual attributes that could be combined with stronger concepts ("concept combining").
8. Advance the highest-scoring concepts to the Concept Scoring Matrix.

**When to Use**: When the team has generated a large number of candidate concepts (5 or more) and needs to reduce the field quickly without investing heavily in detailed analysis. Best used early in the concept development phase, before significant resources have been committed to any individual concept.

---

### Concept Scoring Matrix (Weighted Scoring)

**Visual Description**: A grid similar to the screening matrix but with numerical ratings instead of +/0/–. Criteria are listed as rows, each with an associated weight (importance percentage, summing to 100%). Concepts are listed as columns. Each cell contains a raw score (e.g., on a 1–5 or 1–10 scale) reflecting how well the concept performs on that criterion. The weighted score for each cell is the raw score multiplied by the criterion weight. Column totals (sum of weighted scores) rank the concepts.

**How to Apply**:
1. Retain the criteria from the screening phase (add or refine as needed).
2. Assign a weight to each criterion reflecting its relative importance (weights must sum to 100% or 1.0).
3. Rate each surviving concept on each criterion using a consistent numerical scale.
4. Multiply each rating by the criterion weight to get the weighted cell score.
5. Sum all weighted scores in each column to get the total score for each concept.
6. Rank concepts by total score; the highest score is the recommended selection.
7. Conduct sensitivity analysis: check whether changing weights plausibly would flip the ranking.

**When to Use**: After screening has reduced the field to a manageable shortlist (typically 2–4 concepts). When the team needs a documented, criterion-based rationale for the selection. When multiple stakeholders must be aligned on the selection decision and need to see how tradeoffs were evaluated.

---

### The Pugh Two-Stage Process (Screening Then Scoring)

**Visual Description**: A funnel diagram with a broad input (many concepts) narrowing through a screening gate (Pugh Screening Matrix) to a smaller set, then narrowing further through a scoring gate (Weighted Scoring Matrix) to a final recommended concept.

**How to Apply**: Execute the Concept Screening Matrix first to eliminate clearly inferior concepts, then apply the Concept Scoring Matrix to the survivors. Between the two stages, revisit whether any eliminated concepts contain features worth incorporating into a surviving concept ("concept combining"). After scoring, verify the top-ranked concept against original customer requirements before committing.

**When to Use**: The standard recommended approach when rigor and documentation are important, the concept field is large, and the team has sufficient time to run both stages. Most appropriate for mid-to-large product development projects where the cost of selecting a wrong concept is high.

---

### Voting Methods Spectrum

**Visual Description**: A horizontal axis from "lowest bias control" to "highest bias control." Open Multi Voting sits at the low end (fast, social, susceptible to dominance). Secret Ballot Voting moves to the right (same speed, removes social pressure). Group Consensus occupies a middle position (slow, but surfaces all concerns). Matrix methods sit at the far right (systematic, criterion-based, highly bias-controlled).

**How to Apply**: Choose a position on this spectrum based on team size, time available, sensitivity of the decision, and the degree to which hierarchy or personality dynamics pose a risk to honest input.

**When to Use**: As a meta-framework for selecting which concept selection method to employ before beginning the selection process itself.

---

## Formulas & Quantitative Tools

### Concept Scoring Matrix — Weighted Score Calculation

**Formula**:

```
Total Score (Concept j) = Σ [ Weight(i) × Rating(i, j) ]
```

Where the sum runs over all criteria i for a given concept j.

**Variables**:

| Variable | Description |
|---|---|
| Weight(i) | The importance weight assigned to criterion i, expressed as a decimal (e.g., 0.20 for 20%) |
| Rating(i, j) | The raw performance score assigned to concept j on criterion i (e.g., on a 1–5 scale) |
| Total Score(j) | The sum of all weighted scores for concept j; used to rank concepts |

Weights across all criteria must sum to 1.0 (100%).

**Interpretation**: A higher total score indicates a concept that performs better across the criteria when performance is weighted by each criterion's importance. The concept with the highest total score is the analytically preferred choice. Scores close together (within 5–10% of the top score) indicate sensitivity — small changes in weights or ratings could flip the ranking, and additional deliberation or market testing may be warranted.

**Example**:

A team is evaluating two concepts (A and B) against three criteria: Ease of Use (weight 0.40), Cost to Produce (weight 0.35), and Aesthetic Appeal (weight 0.25). Ratings are on a 1–5 scale.

| Criterion | Weight | Concept A Rating | Concept A Weighted | Concept B Rating | Concept B Weighted |
|---|---|---|---|---|---|
| Ease of Use | 0.40 | 4 | 1.60 | 3 | 1.20 |
| Cost to Produce | 0.35 | 3 | 1.05 | 5 | 1.75 |
| Aesthetic Appeal | 0.25 | 5 | 1.25 | 4 | 1.00 |
| **Total** | **1.00** | | **3.90** | | **3.95** |

Concept B wins by a narrow margin (3.95 vs 3.90). Because the scores are very close, the team should conduct sensitivity analysis on the weights before committing.

**Common Mistakes**:
- Weights not summing to 1.0 (or 100%), producing invalid totals.
- Using inconsistent rating scales across criteria (e.g., mixing 1–5 and 1–10).
- Treating the top-scoring concept as definitively correct when scores are nearly tied — close scores require sensitivity analysis.
- Allowing the most senior person in the room to implicitly drive ratings, reintroducing the bias that the matrix is meant to remove.
- Forgetting to define criteria based on customer requirements rather than internal preferences.

---

### Concept Screening Net Score

**Formula**:

```
Net Score (Concept j) = (Count of '+' ratings for j) – (Count of '–' ratings for j)
```

**Variables**:

| Variable | Description |
|---|---|
| '+' rating | Concept j is better than the datum on this criterion |
| '0' rating | Concept j is equivalent to the datum on this criterion |
| '–' rating | Concept j is worse than the datum on this criterion |
| Net Score | Positive values indicate the concept is generally superior to the datum; negative values indicate inferiority |

**Interpretation**: Concepts with the highest net scores advance to the scoring phase. Concepts with strongly negative net scores are eliminated. Zeros are informative but do not contribute to the net score. A concept with many zeros may be indistinguishable from the datum, suggesting it is not sufficiently differentiated.

**Example**: A concept rated across 8 criteria receives: +, +, +, 0, 0, –, 0, + → 4 plusses, 1 minus → Net Score = 4 – 1 = 3. This concept would likely advance.

**Common Mistakes**:
- Selecting an inappropriate datum — if the datum is too strong, almost all concepts score negatively; if too weak, almost all score positively.
- Treating the net score as a precise rank rather than a rough filter for elimination.
- Failing to revisit eliminated concepts to check whether any + ratings represent features worth incorporating into surviving concepts.

---

## Case Studies

### Applying Screening and Scoring in Consumer Product Development

The source material describes the Concept Screening Matrix and Concept Scoring Matrix as a sequential two-stage process. To illustrate: imagine a team at a consumer electronics company has generated eight smartphone case concepts during ideation. Running all eight through the Concept Scoring Matrix immediately would be time-consuming and generate false precision at an early stage. Instead, the team sets up a Concept Screening Matrix with the current best-selling case as the datum. Using criteria such as drop protection, manufacturing cost, aesthetic variety, and ease of installation, each of the eight concepts is rated +, 0, or –. Three concepts score +3 or higher, two score around 0, and three score –2 or below. The bottom three are eliminated. The two neutral concepts are reviewed for combinable features. The top three advance to the Concept Scoring Matrix, where weights are applied: drop protection (0.40), manufacturing cost (0.30), aesthetic variety (0.20), ease of installation (0.10). Ratings on a 1–5 scale produce total weighted scores that rank the three finalists clearly, and the team selects the top scorer for prototyping.

### Voting Methods in Practice — Bias and Its Remedies

The document implicitly illustrates the progression from informal to formal methods through the contrast between voting-based approaches and matrix methods. Consider a startup team evaluating three product concepts. If the CEO openly states a preference before the vote, Open Multi Voting will likely converge on the CEO's choice regardless of individual team members' genuine assessments — groupthink and dominance effects operate even when unintentional. Switching to Secret Ballot Voting addresses this: team members submit private rankings and the aggregated result may differ substantially from what an open vote would have produced. If the results remain unclear after voting, the team might use a Pro/Con list to structure a Group Consensus discussion, or escalate to a Concept Screening Matrix to introduce explicit criteria. This progression from informal to formal is a common real-world pattern.

### Client Override in Consulting Contexts

The Client's Decision method reflects a real tension in consulting and agency work. A team may run a thorough Concept Scoring Matrix analysis and identify a clear winner, only for the client to select a lower-scoring concept based on personal preference, brand familiarity, or political considerations internal to their organization. This is not a failure of the process — the Client's Decision method exists precisely because the client retains authority. The practitioner's role shifts to ensuring the client understands the tradeoffs documented in the scoring matrix, so the override is an informed one rather than an uninformed one.

---

## Key Takeaways

- There are ten recognized concept selection methods, ranging from informal voting to rigorous quantitative scoring. No single method is universally best — the right choice depends on time, budget, team dynamics, and stakes.
- Voting-based methods (Open Multi Voting, Secret Ballot) are fast but prone to bias; Secret Ballot mitigates hierarchy and social pressure effects that distort Open Multi Voting.
- The Concept Screening Matrix (Pugh screening) uses +/0/– relative ratings against a reference concept to rapidly eliminate weak options from a large field; it is designed for speed, not precision.
- The Concept Scoring Matrix (Pugh scoring) applies weighted numerical ratings to surviving concepts to produce a ranked total score; weights must reflect customer-driven priorities and must sum to 100%.
- The two-stage Pugh process — screen first, then score — is the gold standard for teams that need both efficiency and analytical rigor: screening reduces the field quickly, scoring provides a documented, defensible selection.
- Sensitivity analysis on the Concept Scoring Matrix is critical when top scores are close; if small changes in weights flip the ranking, the team should seek additional data (e.g., market testing) before committing.
- The datum chosen for the Concept Screening Matrix significantly influences outcomes; an inappropriately strong or weak datum distorts the entire screening result.
- Market Testing and Online Community Rating bring actual customer voices into selection decisions, providing external validity that internal methods cannot, but at higher cost or lower rigor respectively.
- Authority-based methods (Leader's Decision, Client's Decision) are efficient but risk excluding valuable expertise; they are most defensible when the decision-maker has reviewed analytical outputs from matrix methods.
- Concept combining — revisiting eliminated concepts to harvest their best features and incorporate them into surviving concepts — is an often-overlooked step between the screening and scoring phases that can improve the final selected concept.

---

## Key Terms and Definitions Glossary

**Benefit/Effort List**: A qualitative comparison tool that maps expected benefits of a concept against the effort or resources required to execute it, helping teams identify high-impact, low-cost options. [Related: Pro/Con List, Concept Screening Matrix]

**Client's Decision**: A concept selection method in which the external customer or client holds final authority over which concept is chosen, regardless of internal analytical recommendations. [Related: Leader's Decision, Group Consensus]

**Concept Combining**: The practice of merging features or attributes from two or more concepts — including some that were eliminated in screening — into a new hybrid concept that captures the best elements of each. [Related: Concept Screening Matrix, Pugh Matrix]

**Concept Scoring Matrix**: A weighted quantitative decision tool in which each concept is rated numerically on each criterion, ratings are multiplied by criterion weights, and the resulting weighted scores are summed to rank concepts. [Related: Concept Screening Matrix, Pugh Matrix]

**Concept Screening Matrix**: A rapid elimination tool in which concepts are compared against a reference (datum) using +/0/– ratings; concepts with the worst net scores are eliminated and the rest advance. [Related: Concept Scoring Matrix, Pugh Matrix, Datum]

**Datum**: The reference concept used as the baseline in a Concept Screening Matrix; all other concepts are rated as better (+), the same (0), or worse (–) than the datum on each criterion. [Related: Concept Screening Matrix, Pugh Matrix]

**Dominance Effect**: The tendency for team members in open group settings to align their stated preferences with those of the most senior, vocal, or respected person present, distorting the true distribution of individual opinion. [Related: Open Multi Voting, Groupthink, Secret Ballot Voting]

**Group Consensus**: A concept selection method in which the team deliberates until all members agree on or can accept a single choice; maximizes buy-in but is slow and can produce compromise solutions that fully satisfy no one. [Related: Open Multi Voting, Leader's Decision]

**Groupthink**: A psychological phenomenon in which the desire for harmony or conformity in a group results in irrational or suboptimal collective decision-making, with minority viewpoints suppressed. [Related: Open Multi Voting, Secret Ballot Voting, Dominance Effect]

**Leader's Decision**: A concept selection method in which a designated authority figure makes the final selection, typically after (but sometimes without) receiving team input; efficient but potentially exclusionary. [Related: Client's Decision, Group Consensus]

**Market Testing**: An external validation method in which product concepts are exposed to real potential customers through experiments, surveys, or pilots, and customer response data informs or drives the selection decision. [Related: Online Community Rating, Concept Scoring Matrix]

**Net Score**: In the Concept Screening Matrix, the result of subtracting the count of minus (–) ratings from the count of plus (+) ratings for a given concept; used to rank concepts for advancement or elimination. [Related: Concept Screening Matrix, Datum]

**Online Community Rating**: A concept evaluation approach in which concepts are posted to an online audience for feedback, ratings, or comments; scalable and fast but potentially shallow and unrepresentative of the true target market. [Related: Market Testing, Open Multi Voting]

**Open Multi Voting**: A concept selection technique in which team members publicly vote for their preferred concepts; fast and energizing but susceptible to groupthink and dominance effects. [Related: Secret Ballot Voting, Dominance Effect, Groupthink]

**Pro/Con List**: A qualitative evaluation tool that organizes the advantages and disadvantages of each concept side by side, enabling straightforward comparison without numerical scoring. [Related: Benefit/Effort List, Group Consensus]

**Pugh Matrix**: The generic name for the two-stage concept selection system developed by Stuart Pugh, comprising a Concept Screening Matrix (stage one) and a Concept Scoring Matrix (stage two). [Related: Concept Screening Matrix, Concept Scoring Matrix, Datum]

**Secret Ballot Voting**: An anonymous voting method in which participants record preferences privately before results are tallied, removing social pressure and hierarchy bias from the selection process. [Related: Open Multi Voting, Dominance Effect]

**Sensitivity Analysis**: A check performed after completing the Concept Scoring Matrix in which criterion weights or ratings are varied to determine whether plausible changes would alter which concept ranks first; essential when top scores are close. [Related: Concept Scoring Matrix, Weighted Score]

**Weighted Score**: The product of a criterion's importance weight and a concept's raw rating on that criterion; weighted scores for all criteria are summed to produce a concept's total score in the Concept Scoring Matrix. [Related: Concept Scoring Matrix, Weight]
