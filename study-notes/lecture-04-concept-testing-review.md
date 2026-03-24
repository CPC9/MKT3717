---
title: "Lecture 4: Concept Testing Review and Guest Lecture"
type: lecture
source_files:
  - "source-materials/lecture slides/lec 4 Concept Testing Review and Guest Lecture.pdf"
topics:
  - "Concept Testing"
  - "Concept Scoring Matrix"
  - "Product Specifications"
  - "Consumer Research"
lecture_number: 4
---

## Overview

Lecture 4 serves as a consolidation and review session for the concept selection process covered in Lecture 3, with particular emphasis on the Concept Scoring Matrix and its correct application. The session revisits how criteria weights derived from consumer problem surveys are used to score competing product concepts, how those scores are summed into a final weighted total, and how teams should rank, combine, and refine concepts rather than treating the matrix as a simple mechanical selection tool. The central pedagogical tension introduced here is that a scoring matrix can — if used naively — select a mediocre "average" product rather than pointing a team toward the genuinely best solution.

The lecture also situates concept testing within the full product development lifecycle, illustrating how testing evolves in character across phases: early testing answers "Should we build this?" while later testing shifts to "How do we make it work better at scale?" Multiple testing modalities are introduced — from qualitative concept testing and specification benchmarking in early stages to alpha/beta performance testing, quantitative market testing, and A/B release testing in later stages. The overarching message is that skipping testing at any stage dramatically increases the risk of product failure.

The second half of the session features a guest lecture by Jeungmin Kim (Director, SeeArt Foundation and For My Stories, Korea), who applies experience design and behavioral insights to reimagine public libraries as exploration-driven environments for young people. Her work provides a real-world illustration of how user-centered concept development, creative brainstorming, and story-centered design can be applied outside traditional commercial product contexts. The lecture also includes a brief review of group brainstorming norms and setup conditions, reinforcing the connection between ideation quality and the downstream quality of concepts that enter the scoring matrix.

---

## Key Concepts

### Concept Scoring Matrix

#### Weighted Concept Scoring

**Definition**: A structured decision tool that multiplies each concept's raw rating on a criterion by that criterion's importance weight, then sums all weighted scores to produce a total score per concept.

**Context**: Used after concept screening to compare surviving concepts on a quantitative basis. Criteria weights are sourced from consumer problem surveys so that the matrix reflects actual customer priorities rather than internal assumptions. The boat cup-holder example in the slides demonstrates a full matrix with seven criteria categories (Flexible Use, Maintains Drink Condition, Survives Boating Environment, Keeps Drink Container Stable, Requires Little Maintenance, Easy to Use, Attractive in Environment, Manufacturing Ease), each broken into sub-criteria with individual weights summing to the category total.

**Relationships**: Builds directly on the Concept Screening Matrix (Lecture 3), which used a simpler +/0/- scale against a reference concept. The Scoring Matrix replaces ordinal ratings with cardinal scores (typically 1–5, where 1 = Much Worse than Reference, 3 = Same, 5 = Much Better) to enable finer differentiation among concepts that all passed screening.

#### Criteria Weighting

**Definition**: The assignment of numerical importance weights to each selection criterion, reflecting how much that criterion matters to the target customer.

**Context**: Weights are derived from consumer surveys about the problem being solved — not from internal engineering or marketing judgment alone. In the spill-proof cup holder example, "Flexible Use" and "Keeps Drink Container Stable" each carry a weight of 20, while "Survives Boating Environment" and "Requires Little Maintenance" each carry only 5, directly reflecting what boaters actually value.

**Relationships**: Weights interact with raw ratings to produce weighted scores. Sensitivity analysis — checking how the final ranking changes if weights shift — is an important quality control step after the matrix is complete.

#### Concept Refinement (Combine and Improve)

**Definition**: The practice of merging strong features from multiple concepts into a new hybrid concept rather than simply selecting one winner from the matrix.

**Context**: The debrief on the mechanical pencil exercise in Lecture 4 makes explicit that different teams chose different "best" concepts because of different weight assumptions and rating interpretations — a sign that the matrix alone is insufficient. The slide asks: "Which features from the losing concepts would you steal?" This reframes the matrix as a diagnostic tool, not a verdict.

**Relationships**: Directly tied to the caveat about "best average product" — a concept that scores moderately well on all criteria may beat a concept that excels on the most important criteria but is weak on others. Combining concepts can cancel out individual weaknesses.

#### Product Innovation Charter (PIC) as Concept Filter

**Definition**: A strategic document that sets the boundaries for what kinds of product concepts the firm will pursue, used during concept testing as an elimination filter.

**Context**: Concept testing following the PIC excludes concepts that require technologies the firm does not possess, target customer segments the firm does not understand well, are inappropriately innovative (too radical or too incremental), or are misaligned on cost, competitive position, or other strategic dimensions.

**Relationships**: The PIC operates before the scoring matrix in the overall NPD sequence: Mission Statement → Identify Customer Needs → Establish Target Specifications → Generate Concepts → Select Concepts → **Test Concepts** → Set Final Specifications → Plan Downstream Development.

### Testing Phases Across the Product Development Lifecycle

#### Qualitative Concept Testing

**Definition**: Early-stage consumer research that explores whether target users understand, find desirable, and would likely purchase a proposed product concept, before any physical prototype exists.

**Context**: Occurs in the Concept Development phase of the product development pipeline. Answers the question "Should we build this?" by exposing concept descriptions (written, visual, or verbal) to representative consumers and recording their reactions.

**Relationships**: Precedes prototype testing and quantitative market testing. Feeds insights back into concept refinement.

#### Alpha and Beta Testing

**Definition**: Alpha testing (Performance and User Interface Testing) is conducted internally with company personnel; beta testing (Validation/Acceptance Testing) involves real users testing a near-final product in realistic conditions.

**Context**: Both occur in the Testing and Refinement phase, after system-level and detail design are complete. Alpha tests identify functional failures; beta tests validate that the product meets user expectations at scale.

**Relationships**: Preceded by prototype testing (design iterations); followed by production ramp-up and A/B release versioning.

#### A/B Testing

**Definition**: A controlled experiment in which two versions of a product or feature are simultaneously released to different user segments to compare performance outcomes.

**Context**: Occurs at or near production release. Common in digital products where versioning is low-cost. Shifts the testing question to optimization rather than go/no-go decisions.

**Relationships**: Final stage in the testing sequence shown in the product development process diagram (Planning → Concept Development → System-Level Design → Detail Design → Testing and Refinement → Production Ramp-Up).

---

## Frameworks & Mental Models

### The Concept Scoring Matrix Process (Six Steps)

**Visual Description**: A table where rows represent selection criteria (with weights in an adjacent column) and columns represent competing concepts. Each cell contains a raw rating and a weighted score (rating × weight). The bottom row shows total scores and ranks. The process flows through six sequential steps: (1) Prepare the matrix using criteria weights from problem surveys; (2) Rate each concept using scores based on quantitative analysis; (3) Rank concepts by total weighted score; (4) Combine and improve — ask whether negatives can be cancelled by merging concepts; (5) Select one or more concepts per function; (6) Reflect and seek consensus by questioning uncertain metrics and identifying missing criteria.

**How to Apply**: Begin by pulling criteria and weights directly from consumer survey data. Rate each concept on each sub-criterion (e.g., 1–5 scale) by comparing them to each other and, where available, to a reference concept. Multiply each rating by its weight to get the weighted score. Sum weighted scores per concept. After ranking, do not stop — ask which losing concept's strengths could be grafted onto the winner.

**When to Use**: After concept screening has already eliminated clearly inferior or strategically misaligned concepts. The scoring matrix is appropriate when two or more concepts remain viable and finer discrimination is needed to direct development resources.

### Testing in the Product Development Process Diagram

**Visual Description**: A horizontal pipeline with six phases (Planning, Concept Development, System-Level Design, Detail Design, Testing and Refinement, Production Ramp-Up) connected by arrows. Overlaid on the pipeline are two types of symbols: diamond-shaped Go/No-Go Decision Gates and circular testing event markers color-coded by testing type. The testing types in sequence are: Specification Testing (benchmarking), Prototype Testing (design iterations), Qualitative Concept Testing, Performance and User Interface Testing (alpha), Quantitative Market Testing, Validation/Acceptance Testing (beta), and A/B Testing (release versioning).

**How to Apply**: Use the diagram to determine which testing modality is appropriate for the current development phase. Early phases warrant qualitative and specification testing; later phases require quantitative market and acceptance testing. Decision gates enforce go/no-go discipline between phases.

**When to Use**: As a project management reference throughout the NPD process. Particularly useful when scoping a concept testing plan for a course project or real product launch to ensure no testing phase is skipped.

### Brainstorming Setup Framework

**Visual Description**: Two parallel columns — "Common Rules" and "Setting It Up" — that define the behavioral norms and physical/logistical conditions for a productive group ideation session.

**How to Apply**: Before a brainstorming session, prepare the physical space (whiteboards, paper, markers, stimulating environment), limit the group to 4–8 participants, designate a skilled facilitator, and brief participants on the rules: defer judgment, build on others' ideas, encourage wild ideas, express ideas visually, stay on topic, one conversation at a time, use topic-relevant stimuli.

**When to Use**: During the concept generation phase of NPD, before scoring matrices are needed. Also applicable whenever a team needs to generate alternatives or escape convergent thinking that is producing only incremental ideas.

---

## Formulas & Quantitative Tools

### Weighted Concept Score Formula

**Formula**:

$$\text{Total Score}_{\text{concept}} = \sum_{i=1}^{n} (w_i \times r_{i,\text{concept}})$$

**Variables**:

| Variable | Description |
|---|---|
| $w_i$ | Importance weight of criterion $i$ (derived from consumer survey data) |
| $r_{i,\text{concept}}$ | Raw rating of the concept on criterion $i$ (e.g., 1–5 scale) |
| $n$ | Total number of criteria (or sub-criteria) in the matrix |
| Total Score | Sum of all weighted scores for a given concept; used for ranking |

**Interpretation**: A higher total score indicates a concept that performs better across consumer-relevant criteria on a weighted basis. The concept with the highest total score is ranked first. However, ranking alone does not end the process — the team must still assess whether the top-ranked concept is genuinely superior or merely the best average performer.

**Example**: In the boat cup-holder matrix from the lecture, Concept C received a total score of 594 (ranked 1st), while Concept A scored 578 (ranked 4th) and Concept O scored 587 (ranked 2nd). The weights for major categories were: Flexible Use = 20, Maintains Drink Condition = 15, Survives Boating Environment = 5, Keeps Drink Container Stable = 20, Requires Little Maintenance = 5, Easy to Use = 15, Attractive in Environment = 10, Manufacturing Ease = 10. A sub-criterion such as "Prevents spilling" (weight 7 within the Keeps Drink Container Stable category of weight 20) received a rating of 3 for Concept A, producing a weighted score of 21 for that sub-criterion.

**Common Mistakes**:
- Using internally determined weights rather than weights grounded in consumer survey data, which causes the matrix to reflect team preferences rather than customer priorities.
- Treating the highest-scoring concept as the automatic winner without considering whether combining features from lower-ranked concepts could produce a superior hybrid.
- Failing to perform sensitivity analysis — if small changes to uncertain weights flip the ranking, that instability should trigger further consumer research before committing to a concept.
- Applying uniform weights across all criteria rather than differentiating by customer importance, which collapses the scoring matrix into a simple average.
- Ignoring sub-criteria with extreme scores (very high or very low) that may signal a concept's unique strength or fatal flaw even when its aggregate score is moderate.

---

## Case Studies

### Boat Spill-Proof Cup Holder — Concept Scoring Matrix Application

**Company**: Illustrative industrial design example (not a named commercial firm).

**Challenge**: Multiple cup holder concepts had been generated and passed initial screening. The team needed to select the best concept (or combination) for a cup holder to be used on a boat, where the product must simultaneously handle rough water conditions, be easy to use one-handed, resist corrosion, and be manufacturable at low cost.

**What Was Done**: A full concept scoring matrix was constructed with eight major criteria categories weighted according to their importance to boaters. Seven concepts (A, C, F, I, J, K, O) were rated on each sub-criterion. Weighted scores were calculated and summed. Concept C ranked first with 594 points; Concept O ranked second with 587; Concept F ranked third with 585. The team was then directed to examine features from lower-ranked concepts (e.g., Concept F's strong manufacturing ease scores, Concept A's high scores on attractiveness) and consider whether those features could be combined into the winning concept to address its weaknesses.

**Takeaway**: The matrix is a starting point for development decisions, not a final verdict. The highest total score identifies the strongest overall concept, but examining the score breakdown by criterion reveals which competing concepts have pockets of excellence worth incorporating. The ultimate goal is to develop a better concept than any individual concept evaluated in the matrix.

### Mechanical Pencil Debrief — Team Divergence in Concept Selection

**Company**: In-class exercise simulating a real NPD team environment.

**Challenge**: Multiple student teams applied the concept scoring matrix to the same set of mechanical pencil concepts but arrived at different "best" choices, raising the question of why a structured tool produced divergent outputs.

**What Was Done**: The class debriefed on the sources of divergence: different teams assigned different weights to criteria; different team members interpreted the same rating scale differently; communication breakdowns within teams led to inconsistent scoring. The instructor posed the real-world analogy: in a firm, this debate would be resolved by whoever holds authority over the product — typically a senior product manager or cross-functional committee — which is itself a process worth designing.

**Takeaway**: A concept scoring matrix is only as objective as the inputs (weights and ratings) it receives. Subjective variation in those inputs is inevitable unless they are anchored to rigorous consumer research. Teams should also question whether any criteria were missing from their matrix and whether the metrics they were least confident about were driving the outcome. Achieving consensus through structured reflection is part of the process, not a sign that the tool has failed.

### Jeungmin Kim — Redesigning the Public Library Experience

**Company**: SeeArt Foundation (Korea) / For My Stories library.

**Challenge**: Public libraries in Korea were perceived as passive, book-storage institutions with low engagement among young people. The challenge was to reimagine the library as an active, exploration-driven environment that ignites curiosity and creativity in the next generation.

**What Was Done**: Jeungmin Kim applied youth exploration frameworks, story-centered experience design, and behavioral insights to redesign the library environment and programming. Her approach treated library visitors — particularly young people — as consumers whose needs and behaviors needed to be understood before new "product" (library experience) concepts could be developed and tested. This mirrors the NPD process: identify needs, generate concepts, test and refine.

**Takeaway**: The NPD framework applies beyond physical consumer goods. Experience design, service design, and institutional redesign all benefit from systematic concept generation, consumer-centered criteria weighting, and iterative testing. The guest lecture illustrates that the tools covered in MKT3717 are domain-general.

---

## Key Takeaways

- The **Concept Scoring Matrix** is a weighted evaluation tool, not an automatic selector — its value lies in exposing trade-offs across criteria and directing the team toward a refined hybrid concept, not just picking the highest scorer.
- **Criteria weights must come from consumer research** (problem surveys), not internal team judgment; using internal weights produces a matrix that reflects team preferences rather than actual customer priorities.
- The **ultimate goal of concept evaluation is to create and develop the best concept**, not merely to select one; the process should always include a "combine and improve" step where strong features from losing concepts are incorporated into the winner.
- A matrix can select the **best average product** — one that is mediocre on every dimension rather than excellent on the dimensions customers care most about; sensitivity analysis and sub-criterion inspection guard against this failure mode.
- **Concept testing is a stage of elimination** guided by the Product Innovation Charter, which filters out concepts misaligned with the firm's technology capabilities, customer knowledge, innovation ambitions, or competitive positioning.
- **Testing evolves across the product development lifecycle**, from qualitative concept testing ("Should we build this?") through alpha/beta performance testing to A/B release versioning ("How do we optimize at scale?"); skipping stages dramatically increases failure risk.
- **Go/No-Go Decision Gates** enforce discipline between phases of the development pipeline, ensuring resources are not committed to development before sufficient evidence of concept viability exists.
- **Brainstorming quality** — governed by clear rules (defer judgment, build on others' ideas, encourage wild ideas) and proper setup (4–8 people, skilled facilitator, stimulating space) — directly determines the quality of concepts that enter the scoring process downstream.
- **Sensitivity analysis** on importance weightings is a required quality check after completing a scoring matrix; if the ranking flips when weights shift within a plausible range, the team needs more consumer data before committing.
- **Concept scoring for multiple customer segments** should be performed separately and compared, as different segments may weight criteria very differently, potentially pointing to distinct product variants or target market choices.

---

## Key Terms and Definitions Glossary

**A/B Testing**: A controlled experiment releasing two product versions simultaneously to different user groups to compare performance; used at or near production release for optimization decisions. [Related: Beta Testing, Quantitative Market Testing]

**Alpha Testing**: Internal performance and user interface testing conducted by company personnel on a near-complete product to identify functional failures before external exposure. [Related: Beta Testing, Prototype Testing]

**Beta Testing**: Validation and acceptance testing conducted by real external users in realistic conditions to confirm the product meets expectations prior to full production ramp-up. [Related: Alpha Testing, Validation]

**Brainstorming**: A structured group ideation method governed by rules such as deferring judgment, building on others' ideas, and encouraging wild ideas, used during the concept generation phase to maximize the variety and creativity of product concepts. [Related: Concept Generation, Group Creativity]

**Concept Refinement**: The process of merging strong attributes from multiple evaluated concepts into a superior hybrid concept, rather than accepting the highest-scoring concept as-is. [Related: Concept Scoring Matrix, Combine and Improve]

**Concept Scoring Matrix**: A quantitative decision tool that multiplies criteria weights (from consumer surveys) by concept ratings and sums the products to rank competing concepts; used after concept screening for finer concept selection. [Related: Concept Screening, Weighted Score, Criteria Weighting]

**Concept Screening**: An earlier, coarser evaluation method using a +/0/- scale to compare concepts against a reference concept and eliminate clearly inferior options before the scoring matrix is applied. [Related: Concept Scoring Matrix, Reference Concept]

**Concept Testing**: Phase 3 of the NPD process in which surviving product concepts are evaluated — through consumer research, technical assessment, and strategic alignment checks — to determine which should move into development. [Related: PIC, Go/No-Go Decision Gate]

**Criteria Weighting**: The assignment of numerical importance scores to each selection criterion, derived from consumer problem surveys, that determine how much each criterion influences the total concept score. [Related: Concept Scoring Matrix, Consumer Research]

**Go/No-Go Decision Gate**: A structured checkpoint between phases of the product development pipeline where management decides whether sufficient evidence exists to commit resources to the next phase. [Related: Product Development Process, Stage-Gate]

**Product Innovation Charter (PIC)**: A strategic document defining the boundaries of acceptable product concepts for the firm, used during concept testing to eliminate concepts that fall outside the firm's technology, market knowledge, innovation level, or competitive strategy. [Related: Concept Testing, Strategic Alignment]

**Prototype Testing**: Iterative physical or digital design testing conducted during the system-level and detail design phases to evaluate how well a prototype meets specifications before user testing begins. [Related: Alpha Testing, Specification Testing]

**Qualitative Concept Testing**: Early-stage consumer research exposing concept descriptions to target users to assess comprehension, desirability, and purchase intent before any prototype is built. [Related: Concept Testing, Consumer Research]

**Quantitative Market Testing**: Statistical consumer research conducted in the Testing and Refinement phase to measure demand, preference share, and purchase probability at scale. [Related: Beta Testing, Market Research]

**Reference Concept**: The baseline product (often the current market leader or current company offering) against which all other concepts are rated in a concept screening matrix. [Related: Concept Screening, Benchmarking]

**Sensitivity Analysis**: The process of varying uncertain criteria weights or ratings in the scoring matrix to determine whether the concept ranking is robust or would change under plausible alternative assumptions. [Related: Concept Scoring Matrix, Criteria Weighting]

**Specification Testing**: Benchmarking of a concept or prototype against established technical specifications, typically conducted in the early stages of system-level design. [Related: Target Specifications, Benchmarking]

**Weighted Score**: The product of a criterion's importance weight and a concept's raw rating on that criterion; the sum of all weighted scores for a concept constitutes its total score in the matrix. [Related: Concept Scoring Matrix, Criteria Weighting]
