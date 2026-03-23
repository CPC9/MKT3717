---
title: "Lecture 6: Market Experiment & Project Management"
source_files:
  - "source-materials/lec 6 Market Experiment and Project Management.pdf"
  - "source-materials/[Supplement] Project Management Practice Problems.pdf"
  - "source-materials/From 0 to $1B - Slack's Founder Shares Their Epic Launch Strategy _ First Round Review.pdf"
topics:
  - "market experiments"
  - "causality"
  - "A/B testing"
  - "factorial design"
  - "project management"
  - "network diagrams"
  - "critical path method"
lecture_number: 6
---

## Overview

Lecture 6 covers two major topics relevant to product and brand management. The first half addresses **market experiments** -- the gold standard for establishing causality in marketing decisions. It covers why correlation does not imply causation, how to design experiments (including A/B testing and factorial designs), and how to interpret results using statistical significance and regression analysis. The second half introduces **project management** fundamentals, including Work Breakdown Structures (WBS), network diagrams, the Critical Path Method (CPM/PERT), and scheduling calculations (ES, EF, LS, LF, Slack). Together, these tools equip product managers to both validate marketing decisions with evidence and manage the execution timeline of product launches and campaigns.

## Key Concepts

### Causality vs. Correlation
- **Definition:** Causality means that a change in one variable directly produces a change in another. Correlation means two variables move together but one does not necessarily cause the other.
- **Context:** Marketers often observe correlations (e.g., ice cream sales and drowning rates both rise in summer) but must use experiments to establish that a marketing action *causes* an outcome. The key question is: "What would have happened if we had not taken this action?" (the counterfactual).
- **Relationships:** Underpins the rationale for running experiments rather than relying on observational data alone. Confounding variables (e.g., weather, seasonality) can create spurious correlations.

### Experiments (Randomized Controlled Trials)
- **Definition:** A research method where subjects are randomly assigned to treatment and control groups to isolate the causal effect of a variable. Considered the "gold standard" for causal inference.
- **Context:** Steps include (1) formulate a hypothesis, (2) select independent and dependent variables, (3) design the experiment (select and assign subjects, control extraneous variables), (4) conduct the experiment, and (5) analyze the results. Random assignment ensures that treatment and control groups are comparable.
- **Relationships:** Directly addresses the causality problem. A/B testing is a common marketing application. Between-subjects designs assign different groups to different conditions; within-subjects designs expose the same group to all conditions.

### A/B Testing
- **Definition:** A controlled experiment comparing two versions (A and B) of a single variable to determine which performs better on a defined metric.
- **Context:** Widely used in digital marketing -- e.g., testing two webpage layouts, email subject lines, or UI designs. Netflix famously A/B tests thumbnail images, button placements, and recommendation algorithms. Only one variable should differ between A and B to isolate its effect.
- **Relationships:** A specific application of between-subjects experimental design. Extends to multivariate testing when combined with factorial design.

### Factorial Design
- **Definition:** An experimental design that tests all possible combinations of two or more independent variables (factors) simultaneously.
- **Context:** A 2x2 factorial design tests 2 levels of Factor A crossed with 2 levels of Factor B, yielding 4 conditions. This allows researchers to detect not only main effects of each factor but also interaction effects (where the effect of one factor depends on the level of the other). More efficient than testing each factor separately.
- **Relationships:** Builds on basic A/B testing. Commonly used in conjoint analysis and product feature testing.

### Endowment Effect
- **Definition:** A cognitive bias where people value an item more highly once they own it, compared to what they would pay to acquire it.
- **Context:** Demonstrated in experiments where participants randomly given a coffee mug demanded roughly twice the price to sell it as what non-owners were willing to pay. This has implications for free trial strategies, return policies, and product sampling in marketing.
- **Relationships:** Connects to behavioral economics and consumer psychology. Relevant to pricing strategy and promotional tactics.

### Statistical Significance and Confidence Intervals
- **Definition:** Statistical significance indicates that an observed result is unlikely to have occurred by chance alone. A 95% confidence interval means that if the experiment were repeated many times, 95% of the intervals would contain the true population parameter.
- **Context:** In marketing experiments, results must be statistically significant to justify changing strategy. The p-value represents the probability of observing the result (or more extreme) if the null hypothesis were true; a p-value below 0.05 is the conventional threshold for significance.
- **Relationships:** Used to evaluate experiment outcomes. Regression analysis (Y = a + bX) provides coefficients and p-values to quantify the relationship between variables.

### Project (Definition and Goals)
- **Definition:** A project is a unique, one-time effort with a defined objective, requiring the coordination of multiple activities and resources.
- **Context:** Every project balances three main goals: (1) completing on time, (2) staying within budget, and (3) meeting specifications/quality requirements. These three constraints form the "iron triangle" of project management.
- **Relationships:** The project life cycle has four phases: Definition, Planning, Execution, and Delivery/Close-out.

### Work Breakdown Structure (WBS)
- **Definition:** A hierarchical decomposition of a project into progressively smaller, manageable work packages.
- **Context:** Level 1 is the overall project, Level 2 comprises major deliverables, Level 3 breaks deliverables into sub-deliverables, and so on until the lowest level contains individual work packages with assigned costs, time, and resources. Examples include a coffee shop build-out (design, construction, equipment, staffing) and a hospital construction project.
- **Relationships:** The WBS feeds directly into the network diagram by identifying all activities and their relationships.

### Network Diagram and Critical Path Method (CPM/PERT)
- **Definition:** A network diagram is a visual representation of project activities and their precedence relationships using Activity-on-Node (AON) notation. CPM/PERT calculates the longest path through the network (the critical path), which determines the minimum project duration.
- **Context:** Each node shows an activity with its duration. Arrows indicate precedence (which activities must finish before others can start). Forward pass calculates ES (Earliest Start) and EF (Earliest Finish); backward pass calculates LS (Latest Start) and LF (Latest Finish). Slack = LS - ES = LF - EF.
- **Relationships:** Critical activities have zero slack -- any delay to a critical activity delays the entire project. Non-critical activities have positive slack and can be delayed without affecting project completion.

### Project Crashing
- **Definition:** The process of reducing activity durations on the critical path by adding resources (at additional cost) to shorten the overall project duration.
- **Context:** Only activities on the critical path are candidates for crashing, since reducing non-critical activities does not affect project completion time. The decision involves a cost-time trade-off: the crash cost per day saved must be weighed against the benefit of earlier completion.
- **Relationships:** After crashing an activity, a new critical path may emerge, requiring re-evaluation of the network.

## Frameworks & Mental Models

### Experimental Design Framework
A structured approach to validating marketing hypotheses:
1. **Formulate the hypothesis** -- State a clear, testable prediction (e.g., "Changing the CTA button color to green will increase click-through rates by 10%").
2. **Select variables** -- Identify the independent variable (what you manipulate), dependent variable (what you measure), and extraneous variables (what you control).
3. **Design the experiment** -- Choose between-subjects or within-subjects design; randomly assign participants; determine sample size.
4. **Conduct the experiment** -- Run treatment and control conditions simultaneously to minimize temporal confounds.
5. **Analyze results** -- Use statistical tests (t-test, regression, confidence intervals) to determine significance.

**When to use:** Any time a marketing team needs to make a data-driven decision about product features, pricing, messaging, or UX design.

### Project Management Planning Framework (WBS to CPM)
A systematic approach to planning and controlling project timelines:
1. **Create the WBS** -- Decompose the project into hierarchical work packages.
2. **Identify activities and precedence relationships** -- Determine which activities depend on others.
3. **Build the network diagram** -- Map activities as nodes with arrows showing dependencies.
4. **Perform forward pass** -- Calculate ES and EF for each activity (ES = max EF of all predecessors; EF = ES + duration).
5. **Perform backward pass** -- Calculate LF and LS for each activity (LF = min LS of all successors; LS = LF - duration).
6. **Identify the critical path** -- The path where all activities have zero slack.
7. **Evaluate crashing options** -- If the project needs to be shortened, crash activities on the critical path with the lowest crash cost per unit of time saved.

**When to use:** Planning any product launch, marketing campaign, or cross-functional initiative with multiple interdependent tasks.

### Factual vs. Counterfactual Thinking
- **Factual:** What actually happened (the observed outcome).
- **Counterfactual:** What *would have* happened in the absence of the intervention.
- **Causal effect** = Factual outcome - Counterfactual outcome.
- Since the counterfactual is never directly observed, experiments use control groups as a proxy.

**When to use:** Evaluating the true impact of any marketing initiative -- advertising spend, product changes, promotional offers.

## Formulas & Quantitative Tools

### Linear Regression

**Formula:**

$$Y = a + bX$$

| Variable | Meaning |
|----------|---------|
| Y | Dependent variable (outcome being predicted) |
| a | Y-intercept (value of Y when X = 0) |
| b | Slope coefficient (change in Y for a one-unit change in X) |
| X | Independent variable (predictor) |

**Interpretation:** The coefficient *b* tells you the magnitude and direction of the relationship. A positive *b* means Y increases as X increases. The p-value associated with *b* indicates whether the relationship is statistically significant.

**Example:** If Y = Sales and X = Advertising Spend, and the regression yields Y = 500 + 2.3X with p < 0.05, then each additional dollar of ad spend is associated with $2.30 in additional sales, and this relationship is statistically significant.

**Common Mistakes:**
- Interpreting a significant regression coefficient as proof of causation (regression on observational data shows correlation, not causation -- experiments are needed for causal claims).
- Ignoring confounding variables that may bias the estimate of *b*.

### Earliest Start / Earliest Finish (Forward Pass)

**Formula:**

$$ES = \max(EF \text{ of all immediate predecessors})$$
$$EF = ES + \text{Activity Duration}$$

| Variable | Meaning |
|----------|---------|
| ES | Earliest Start -- the earliest time an activity can begin |
| EF | Earliest Finish -- the earliest time an activity can be completed |

**Interpretation:** The forward pass moves left to right through the network. For starting activities (no predecessors), ES = 0. For all others, ES equals the maximum EF of all predecessor activities (because all predecessors must finish before the activity can start).

**Example (Practice Problem 1):**
- Activity A: ES = 0, EF = 0 + 8 = 8
- Activity D (predecessors A, B): ES = max(EF_A, EF_B) = max(8, 6) = 8, EF = 8 + 10 = 18
- Activity G (predecessors D, E): ES = max(EF_D, EF_E) = max(18, 11) = 18, EF = 18 + 3 = 21
- Activity H: ES = 21, EF = 21 + 4 = 25

**Common Mistakes:**
- Using the minimum instead of the maximum EF of predecessors (all predecessors must complete, so you take the max).
- Forgetting that an activity with multiple predecessors must wait for the slowest one.

### Latest Start / Latest Finish (Backward Pass)

**Formula:**

$$LF = \min(LS \text{ of all immediate successors})$$
$$LS = LF - \text{Activity Duration}$$

| Variable | Meaning |
|----------|---------|
| LF | Latest Finish -- the latest time an activity can finish without delaying the project |
| LS | Latest Start -- the latest time an activity can start without delaying the project |

**Interpretation:** The backward pass moves right to left. For the final activity, LF = project completion time. For all others, LF equals the minimum LS of all successor activities.

**Example (Practice Problem 1):**
- Activity H: LF = 25, LS = 25 - 4 = 21
- Activity G: LF = LS_H = 21, LS = 21 - 3 = 18
- Activity F: LF = 25 (goes directly to finish), LS = 25 - 5 = 20
- Activity D: LF = LS_G = 18, LS = 18 - 10 = 8

**Common Mistakes:**
- Using the maximum instead of the minimum LS of successors (you take the min to avoid delaying any successor).

### Slack (Float)

**Formula:**

$$\text{Slack} = LS - ES = LF - EF$$

| Variable | Meaning |
|----------|---------|
| Slack | The maximum time an activity can be delayed without delaying the project |
| LS | Latest Start |
| ES | Earliest Start |

**Interpretation:** Activities with Slack = 0 are on the critical path. Activities with positive slack can be delayed by up to that many time units without affecting the project completion date.

**Example (Practice Problem 1 -- Full Scheduling Table):**

| Activity | ES | EF | LS | LF | Slack |
|----------|-----|-----|-----|-----|-------|
| A | 0 | 8 | 0 | 8 | 0 |
| B | 0 | 6 | 2 | 8 | 2 |
| C | 0 | 3 | 7 | 10 | 7 |
| D | 8 | 18 | 8 | 18 | 0 |
| E | 3 | 11 | 10 | 18 | 7 |
| F | 8 | 13 | 20 | 25 | 12 |
| G | 18 | 21 | 18 | 21 | 0 |
| H | 21 | 25 | 21 | 25 | 0 |

Critical Path: **A-D-G-H** (all activities with Slack = 0), duration = **25 days**.

**Common Mistakes:**
- Confusing path slack with activity slack. Path slack = Critical Path Length - Path Length. Activity slack uses the ES/LS or EF/LF calculations.

### Path Slack (Alternative Method)

**Formula:**

$$\text{Path Slack} = \text{Critical Path Length} - \text{Path Length}$$

**Example (Practice Problem 2):**

| Path | Length | Slack |
|------|--------|-------|
| A-B-D-F | 4+3+5+1 = 13 | 14 - 13 = 1 |
| A-B-E-F | 4+3+4+1 = 12 | 14 - 12 = 2 |
| A-C-D-F | 4+4+5+1 = 14 | 14 - 14 = 0 |
| A-C-E-F | 4+4+4+1 = 13 | 14 - 13 = 1 |

Critical Path: **A-C-D-F**, duration = **14 days**.

**Common Mistakes:**
- Forgetting that when an activity duration changes (e.g., Activity F jumps from 5 to 20 days in Practice Problem 1), the critical path may shift. Always recalculate all paths after a change.

### Practice Problem Walkthrough: Impact of Activity Duration Change

**Scenario (Practice Problem 1, Q2):** Activity F increases from 5 to 20 days.

**Revised Path Lengths:**
- A-F: 8 + 20 = **28 days** (new critical path)
- A-D-G-H: 8 + 10 + 3 + 4 = 25 days
- B-D-G-H: 6 + 10 + 3 + 4 = 23 days
- C-E-G-H: 3 + 8 + 3 + 4 = 18 days

**Result:** Project now takes 28 days instead of 25, a delay of **3 days**. The critical path shifts from A-D-G-H to A-F.

## Case Studies

### Slack: From 0 to $1 Billion

- **Company:** Slack Technologies (enterprise messaging platform)
- **Challenge:** Launching a new enterprise communication tool in a market with established competitors (email, HipChat, Yammer) while having no established brand or user base. The team needed to prove product-market fit and achieve rapid adoption without a traditional sales force.
- **What Was Done:**
  - **Preview release strategy (August 2013):** CEO Stewart Butterfield deliberately avoided calling it a "beta" (which implies a broken product) and instead used "preview release" to set the right expectations. Started with a media blitz that generated 8,000 sign-ups on day one and 15,000 within two weeks.
  - **Customer feedback loop:** Invited companies in progressively, starting with small teams. Used Twitter as a real-time feedback channel and Zendesk for support tickets (8,000+ tickets/month plus 10,000+ tweets). Iterated rapidly based on user feedback during the 6-month preview period.
  - **Bottoms-up adoption:** Targeted individual teams within companies rather than selling top-down to IT departments. Teams would adopt Slack organically, and usage would spread virally within organizations.
  - **Magic number discovery:** Found that teams sending 2,000+ messages had a 93% retention rate -- this became the key engagement metric. Teams that crossed this threshold virtually never churned.
  - **Public launch (February 2014):** By launch, Slack had 30,000+ teams, 250,000 daily active users, and had achieved a $1B+ valuation. Of 220,000 teams created, approximately 30,000 were actively using the product.
  - **Core differentiators:** Search (making all messages and files findable), synchronization (seamless across devices), and simple file-sharing. These addressed real pain points that email failed to solve.
- **Takeaway:** A disciplined, feedback-driven preview release can be more effective than a traditional big-bang launch. By controlling the rollout pace, measuring engagement through a clear retention metric (the 2,000-message threshold), and iterating based on real user behavior, Slack achieved product-market fit before scaling. The "preview release" framing (vs. "beta") set user expectations appropriately and generated positive word-of-mouth.

## Key Takeaways

1. **Correlation is not causation.** Observational data can mislead; only properly designed experiments (with random assignment, control groups, and controlled extraneous variables) can establish causal relationships between marketing actions and outcomes.

2. **A/B testing is the marketer's experiment.** It applies the scientific method to marketing decisions -- test one variable at a time, measure the outcome, and use statistical significance to make data-driven choices rather than relying on intuition.

3. **Factorial designs are more efficient than sequential tests.** Testing multiple factors simultaneously reveals interaction effects that single-variable tests miss, and requires fewer total observations.

4. **The endowment effect is a powerful marketing tool.** Free trials, product sampling, and generous return policies leverage the psychological tendency for people to overvalue what they already possess.

5. **The critical path determines your project timeline.** No amount of optimization on non-critical activities will shorten the project. Focus crashing efforts and management attention on critical path activities.

6. **Slack (float) tells you where you have flexibility.** Non-critical activities can absorb delays up to their slack value without affecting the project deadline. This is essential for resource allocation and risk management.

7. **Changes in activity durations can shift the critical path.** When unexpected delays occur, always recalculate all paths -- the critical path may change, requiring a new management focus.

8. **Scheduling calculations (ES, EF, LS, LF) are foundational.** The forward pass and backward pass together give you complete visibility into when each activity can and must occur, enabling proactive project control.

## Key Terms and Definitions Glossary

**A/B Testing:** A controlled experiment comparing two versions of a single variable (e.g., webpage design, email subject line) to determine which performs better on a defined metric.

**Activity:** The smallest unit of work effort in a project that consumes both time and resources, and can be scheduled and controlled by the project manager.

**Activity Slack (Float):** The maximum length of time an activity can be delayed without delaying the entire project's completion. Calculated as LS - ES or LF - EF. Critical activities have zero slack.

**Confounding Variable:** An extraneous variable that correlates with both the independent and dependent variables, potentially creating a spurious apparent relationship between them.

**Counterfactual:** The hypothetical outcome that would have occurred in the absence of a treatment or intervention. Since counterfactuals cannot be directly observed, control groups serve as proxies in experiments.

**Critical Activity:** An activity on the critical path with zero slack. Any delay to a critical activity directly delays the entire project.

**Critical Path:** The longest path through a project network diagram, determining the minimum project duration. All activities on this path have zero slack.

**Earliest Finish (EF):** The earliest time at which an activity can be completed, calculated as ES + Activity Duration during the forward pass.

**Earliest Start (ES):** The earliest time at which an activity can begin, determined by the maximum EF of all its immediate predecessors.

**Endowment Effect:** A cognitive bias where people ascribe higher value to objects they own compared to equivalent objects they do not own, leading to a gap between willingness to accept (selling price) and willingness to pay (buying price).

**Factorial Design:** An experimental design in which all possible combinations of two or more independent variables are tested, allowing researchers to assess both main effects and interaction effects.

**Latest Finish (LF):** The latest time at which an activity can finish without delaying the project, calculated during the backward pass as the minimum LS of all immediate successors.

**Latest Start (LS):** The latest time at which an activity can start without delaying the project, calculated as LF - Activity Duration.

**Network Diagram:** A visual representation of project activities and their precedence relationships, typically using Activity-on-Node (AON) notation, where nodes represent activities and arrows represent dependencies.

**Path:** A sequence of connected activities that leads from the starting node to the finishing node in a network diagram.

**PERT/CPM:** Program Evaluation and Review Technique / Critical Path Method -- scheduling techniques used to plan and control project activities by identifying the critical path and calculating activity timing.

**Project Crashing:** The process of reducing the duration of critical path activities by allocating additional resources, typically at increased cost, to shorten the overall project timeline.

**Randomized Controlled Trial (RCT):** An experimental design in which participants are randomly assigned to treatment and control groups, considered the gold standard for establishing causal effects.

**Statistical Significance:** An indication that an observed result is unlikely to have occurred by chance alone (conventionally, p < 0.05), providing confidence that the effect is real rather than due to random variation.

**Work Breakdown Structure (WBS):** A hierarchical decomposition of a project's total scope into progressively smaller, manageable work packages, organized by levels from the overall project down to individual tasks.
