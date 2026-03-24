---
title: "Lecture 6: Market Experiment and Project Management"
type: lecture
source_files:
  - "source-materials/lecture slides/lec 6 Market Experiment and Project Management.pdf"
topics:
  - "Market Experiments"
  - "A/B Testing"
  - "Project Management"
  - "Gantt Charts"
  - "Critical Path Method"
lecture_number: 6
---

## Overview

This lecture covers two major domains that are central to successful product launch management. The first half addresses market experiments as an analytic tool for predicting product success. The core motivation is causality: marketing decisions almost always implicitly assert a causal claim — that a new product design will improve satisfaction, or that an advertising program will drive purchase intent. Establishing true causality is difficult because we cannot replay the world under different conditions. The realized world is the factual scenario; the hypothetical alternative is the counterfactual. To approximate the counterfactual, practitioners use either randomized controlled experiments or econometric analysis of observational data. Experiments are considered the "gold standard" because random assignment ensures that the only expected difference between groups is the variable being manipulated, allowing clean causal inference.

The lecture then develops the logic of experimental design in marketing contexts. A/B testing is introduced as the simplest form of experiment — randomly splitting a subject pool into a control group (A) and a treatment group (B) and comparing outcome variable means. The lecture also introduces factorial design, which tests multiple dimensions simultaneously and can reveal optimal combinations that sequential A/B testing would never find. Key issues of within-subject versus between-subject designs, statistical significance via confidence intervals and regression, and the real-world endowment effect experiment conducted in class (using Lindor chocolate) are all used to ground these concepts.

The second half of the lecture transitions to project management, which is directly relevant to new product development (NPD). A project is defined as a unique, one-time set of interrelated activities with a definite start and end point and a specific resource allocation. Project management failure — illustrated by the 2014 Sochi Olympics and the Fyre Festival — can be reputationally and financially catastrophic. The lecture introduces Work Breakdown Structure (WBS) for organizing activities hierarchically, network diagramming using the Activities-On-Node (AON) format, and the Critical Path Method (CPM) / PERT technique for scheduling. These tools allow managers to identify the longest path through a project network, determine the minimum project duration, calculate slack time for non-critical activities, and analyze cost-time trade-offs through project crashing.

---

## Key Concepts

### Causality and Experimental Logic

#### Causality
**Definition:** A causal relationship exists when manipulating variable X directly produces a change in variable Y, independent of all other factors.

**Context:** Every marketing effort involves an implicit causal claim. "Does this new product design improve user satisfaction?" is not a question about correlation — it is a question about whether the design itself causes the improvement. The difficulty is that we cannot run the same world twice under different conditions. When Apple Watch ownership is negatively correlated with body weight in a survey, at least five different causal stories could produce the same pattern: the watch reduces weight (desired treatment effect), overweight people buy the watch to lose weight (reverse causation), health-conscious people buy both (common cause), wealth correlates with both (confound), and gender correlates with both (confound). Correlation alone cannot disentangle these.

**Relationships:** Causality is related to confounding variables, treatment effects, and the distinction between factual and counterfactual scenarios.

#### Factual vs. Counterfactual Scenarios
**Definition:** The factual scenario is the world that actually occurred. The counterfactual scenario is the hypothetical world in which a different treatment was applied to the same subjects at the same time.

**Context:** The fundamental problem of causal inference is that we observe only one scenario per subject. A student either ate breakfast before an exam or did not — we cannot observe both outcomes for the same student at the same moment. The ideal causal estimate would compare the same individual across both scenarios simultaneously.

**Relationships:** Linked to randomized controlled trials, which approximate counterfactuals by making treatment and control groups statistically identical on all observable and unobservable dimensions through random assignment.

#### Confounding Variables
**Definition:** Variables that affect both the treatment variable and the outcome variable, creating a spurious association between them.

**Context:** In the Apple Watch example, wealth is a confounder because it increases the likelihood of owning an Apple Watch (treatment) and also correlates with lower body weight (outcome) through diet, gym access, and lifestyle — creating a negative correlation between watch ownership and weight that has nothing to do with any direct effect of the watch. Regression analysis can control for observed confounders, but infinitely many unobserved confounders may remain.

**Relationships:** Randomization in experiments eliminates confounding in expectation, which is why experiments are the gold standard. Regression analysis reduces but does not eliminate confounding.

### Experimental Design

#### Randomized Controlled Trial (RCT)
**Definition:** An experiment in which subjects are randomly assigned to a control group or one or more treatment groups. The treatment variable is manipulated while all other conditions are held constant. Outcomes are then compared across groups.

**Context:** RCTs are the gold standard for causal inference. The four-step procedure is: (1) randomize subjects into treatment groups, (2) manipulate the explanatory variable of interest in each group while holding everything else constant, (3) let the experiment run, and (4) compare the average outcome variable across groups. Because randomization distributes all confounding variables approximately equally across groups in expectation, any observed difference in outcomes can be causally attributed to the treatment.

**Relationships:** RCTs are used as the basis for A/B testing, factorial design, and the class endowment effect experiment. They contrast with observational data analysis (regression).

#### A/B Testing
**Definition:** The simplest form of experiment, in which a subject pool is randomly split into two groups — A (control) and B (treatment) — a single variable is manipulated for group B, and outcomes are compared.

**Context:** A/B testing is ubiquitous in digital marketing. Netflix tests different thumbnail artwork for the same title across randomly assigned user segments and has observed 20–30% increases in viewing from optimized artwork. E-commerce sites use it to test webpage layouts, button colors, pricing displays, and recommendation algorithms. The slide shows two versions of a t-shirt retailer's website presented simultaneously to different segments entering through the same site entrance. Allocation must be managed carefully across concurrent tests to prevent subjects from participating in conflicting experiments simultaneously (illustrated by Netflix's internal ABlazer scheduling dashboard).

**Relationships:** A/B testing is a two-condition RCT. For more conditions or more dimensions, factorial design is needed.

#### Factorial Design
**Definition:** An experimental design that tests multiple treatment variables (dimensions) simultaneously by crossing all levels of each dimension, creating a full grid of conditions.

**Context:** Suppose a wine retailer wants to optimize personalized email advertisements. Dimension 1 is the product recommended: a $24 Cabernet Sauvignon or a $32 Rioja. Dimension 2 is the text length: short, medium (includes taste profile), or long (includes taste profile and food pairing). There are 2 × 3 = 6 conditions in this factorial design. The key insight is that iterative A/B testing starting from one cell may never reach the globally optimal combination. In the example data, the highest-profitability condition is [long text + $32 Rioja], but an A/B test starting from [short text + $24 Cabernet] would follow a path of incremental changes and never converge on this combination.

**Relationships:** Factorial design extends A/B testing to multi-dimensional optimization. Related to interaction effects between treatment dimensions.

#### Between-Subjects vs. Within-Subjects Design
**Definition:** In a between-subjects design, each participant receives exactly one randomly assigned condition. In a within-subjects design, each participant experiences all conditions.

**Context:** Between-subjects designs are the most common because subjects cannot be "reset" between conditions. Within-subjects designs require each subject to go through all conditions, which means the results may be contaminated by order effects, learning effects, or fatigue. However, within-subjects designs require fewer total subjects to achieve the same statistical power, and individual variation is controlled because the same person acts as their own baseline. The lecture notes that within-subjects design is sometimes appropriate depending on the nature of the task and the ability to counterbalance order.

**Relationships:** Design choice affects required sample size, statistical power, and susceptibility to bias.

#### Statistical Significance and Confidence Intervals
**Definition:** A result is statistically significant if the observed difference between groups is unlikely to have occurred by chance alone. A 95% confidence interval shows the range within which the true population mean lies with 95% probability.

**Context:** Sample means are estimates of true population means and vary across samples. If the 95% confidence intervals for two groups do not overlap, the difference is statistically significant. If they overlap, the difference is not statistically significant. In Excel: Data > Data Analysis > Descriptive Statistics, check "Confidence Level for Mean: 95%." The upper bound is Mean + Confidence Level(95%) and the lower bound is Mean − Confidence Level(95%). The alternative approach is regression analysis, which provides an exact p-value: the coefficient b in Y = a + bX represents the treatment effect, and significance is assessed by whether the p-value is sufficiently small (conventionally below 0.05).

**Relationships:** Confidence intervals and regression both test for statistical significance. Regression provides additional precision through the p-value and can accommodate additional control variables.

#### Endowment Effect
**Definition:** A cognitive bias in which people assign higher value to objects they own than to identical objects they do not own.

**Context:** Demonstrated experimentally by Kahneman, Knetsch, and Thaler (1990) using coffee mugs priced at $6. Half the class received a mug (treatment); half did not (control). The median seller's minimum acceptable price was $5.25, while the median buyer's maximum willingness to pay was $2.50 — a gap of $2.75 driven purely by ownership status. The lecture reproduced this experiment using Lindor chocolates as the endowed object, with students in the endowed group reporting significantly higher valuations than students in the control group. The regression model was: Value_i = a + b × Endowed_i, where a is the mean valuation of the control group, a + b is the mean valuation of the endowed group, and b is the estimated endowment effect.

**Relationships:** The endowment effect is a key concept in behavioral economics with implications for product design (trials, free samples, ownership experiences) and pricing strategy.

### Project Management

#### Project Definition
**Definition:** A project is a unique, one-time operation designed to accomplish a specific set of objectives within a limited time frame. It consists of interrelated activities with a definite start and end point and a specific resource allocation.

**Context:** Projects differ from recurring operational processes in that they are non-routine and bounded. Examples include constructing a building, designing a political campaign, producing a film, and new product/service development. The three overarching goals of any project are: (1) complete on time or earlier, (2) do not exceed the budget, and (3) meet specifications for customer satisfaction. Failure on any of these dimensions has real consequences — the 2014 Sochi Winter Olympics and the Fyre Festival are cited as high-profile examples of project management failure resulting in reputational and financial damage.

**Relationships:** In NPD, the product manager plays the role of project manager. Project management tools (WBS, CPM) translate the product roadmap into a schedulable, trackable plan.

#### Work Breakdown Structure (WBS)
**Definition:** A hierarchical decomposition of all work that must be completed to accomplish a project. It organizes tasks into levels, from the overall project objective at Level 0 down to individual schedulable activities at the lowest level.

**Context:** The WBS for opening a coffee shop at NUS has three levels. Level 0 is the overall goal. Level 1 contains the two major work streams: Organizing HR (Barista) and Physical Facilities Remodeling. Level 2 contains the individual activities: (1) Barista Interview, (2) Recruitment and Training, (3) Locate facility, (4) Order furniture, (5) Furniture setup, (6) Remodeling of venue. An activity is defined as the smallest unit of work effort consuming both time and resources that the project manager can schedule and control. The WBS for the St. John's Hospital Relocation Project illustrates a more complex two-stream structure across Organizing and Site Preparation vs. Physical Facilities and Infrastructure.

**Relationships:** WBS is the input to the network diagram and CPM/PERT analysis. Each Level 2 activity becomes a node in the AON diagram.

#### Network Diagram and Precedence Relationships
**Definition:** A network diagram is a graphical representation of project activities and their dependencies. In the Activities-On-Node (AON) format, activities are circles (nodes) and dependencies are arrows (arcs). A precedence relationship specifies that one activity cannot begin until a preceding activity is completed.

**Context:** The coffee shop AON diagram shows nodes for each of the six activities (plus Start and Finish), connected by arrows that encode which activities must be completed before others can begin. The hospital relocation example features 11 activities (A through K) with a complex precedence table (e.g., activity J requires E, G, and H all to be completed before it can start). Drawing the network correctly requires carefully reading every precedence constraint from the activity table.

**Relationships:** The network diagram is used to enumerate all paths and apply CPM to find the critical path.

#### Critical Path Method (CPM) / PERT
**Definition:** CPM and PERT are two names for essentially the same technique for planning and scheduling complex projects. They use the network diagram to identify the longest path through the project (the critical path), which determines the minimum project duration, and to calculate slack time for all other paths.

**Context:** CPM provides four outputs: a graphical display of project activities, an estimate of total project duration, identification of which activities are most critical to timely completion, and an indication of how long any activity can be delayed without delaying the project. Activities on the critical path have zero slack. The hospital relocation network has five paths: A-I-K (33 weeks), A-F-K (28 weeks), A-C-G-J-K (67 weeks), B-D-H-J-K (69 weeks, the critical path), and B-E-J-K (43 weeks). The expected project duration is 69 weeks.

**Relationships:** CPM requires the WBS and network diagram as inputs. It produces ES, EF, LS, LF, and slack values for each activity, and is used as the basis for project crashing.

#### Project Life Cycle Phases
**Definition:** Projects pass through four phases: (1) Definition and organization (concept identification and feasibility analysis), (2) Planning (detailing the work, estimating resources, time, and cost), (3) Execution (doing the actual work; consumes the majority of resources), and (4) Close-out (writing final reports, reassigning personnel, completing remaining deliverables).

**Context:** The resource requirements curve across the project life cycle is bell-shaped: low at the start (definition/planning), high during execution, and tapering at close-out. Understanding phase transitions helps managers anticipate resource needs and budget allocation patterns.

**Relationships:** The WBS and CPM are tools primarily used in the Planning phase. Monitoring activities are conducted throughout Execution.

---

## Frameworks & Mental Models

### The Causality Hierarchy: From Correlation to Experiment

**Visual Description:** A spectrum with "Observational data / Regression" on the left and "Randomized Controlled Trial" on the right. Moving right increases internal validity (ability to make causal claims) but also increases cost and feasibility constraints. Advanced methods — difference-in-differences, regression discontinuity, propensity score matching — occupy the middle of the spectrum.

**How to Apply:** When evaluating a marketing study or designing a research plan, first ask what causal claim you want to support. Then identify whether an RCT is feasible given time, cost, and ethical constraints. If not, choose the highest-validity observational method available. When interpreting results, always distinguish between association ("correlated with") and causation ("leads to"). Regression analysis can partially control for observed confounders but cannot rule out unobserved ones.

**When to Use:** Use this hierarchy when designing market research, evaluating claims made by A/B test results, or assessing whether survey-based correlations justify product decisions. Particularly important when justifying causal claims to stakeholders who may conflate correlation with causation.

### The Experimental Design Checklist

**Visual Description:** A four-step sequential checklist: (1) Do background research — descriptive analytics, cluster analysis, regression; (2) Form hypotheses and prioritize ideas to test; (3) Design the experiment — measure outcome variable, choose unit of randomization, decide number of treatments, choose between-subjects or within-subjects design, check incentive compatibility; (4) Run the experiment.

**How to Apply:** Before running any A/B test or market experiment, work through all four steps. In step 3, pay particular attention to incentive compatibility: do subjects have the right incentives to respond honestly and in a way that reflects real behavior? Unincentivized surveys are prone to stated-preference biases (people say what they think you want to hear, or what sounds socially desirable). Providing real stakes — as in the chocolate endowment experiment — aligns stated valuations with revealed preferences.

**When to Use:** Any time a product or marketing decision needs empirical validation before full-scale launch. Particularly valuable before committing to expensive distribution, branding, or pricing choices.

### Work Breakdown Structure (WBS) Tree

**Visual Description:** A hierarchical tree diagram. Level 0 is a single root node representing the project. Level 1 branches represent major work streams or phases. Level 2 leaves represent individual schedulable activities (nodes in the subsequent network diagram). Arrows flow downward from general to specific.

**How to Apply:** Start with the project objective at Level 0. Identify two to five major categories of work at Level 1 (e.g., "Organizing HR" and "Physical Facilities" for the coffee shop). For each Level 1 category, list every individual task that must be completed — these become Level 2 activities and are the inputs to the network diagram. Number activities for reference in the precedence table.

**When to Use:** At the start of any project, before building the network diagram. The WBS ensures no tasks are overlooked and provides a shared vocabulary for the project team.

### Activities-On-Node (AON) Network Diagram

**Visual Description:** A directed graph. Start and Finish are rectangles on the left and right ends. Activities are circles in the middle, each labeled with activity name and duration. Arrows between circles represent precedence relationships (an arrow from A to B means A must be completed before B can start). Each activity node (in the detailed CPM format) is divided into four quadrants: top-left = ES, top-right = EF, bottom-left = LS, bottom-right = LF, with activity name and duration in the center.

**How to Apply:** (1) Draw Start and Finish nodes. (2) Place all activities with no predecessors directly after Start. (3) For each remaining activity, draw an arrow from each of its predecessors to it. (4) Connect all terminal activities (no successors) to Finish. (5) Perform a forward pass to calculate ES and EF. (6) Perform a backward pass to calculate LF and LS. (7) Calculate slack = LS − ES for each node. (8) Activities with S = 0 are on the critical path.

**When to Use:** After completing the WBS, when detailed scheduling and critical path analysis are needed. Essential for any project with multiple interdependent activities where completing on time is critical.

### Critical Path Identification

**Visual Description:** The AON diagram with the critical path highlighted in red (or a distinct color). All other paths are shown in gray. A table lists every path from Start to Finish with its total duration in time units. The longest row in the table is the critical path.

**How to Apply:** Enumerate every path from Start to Finish by traversing the network diagram. Sum the activity durations along each path. The path with the longest sum is the critical path; its length is the minimum project duration. Any activity on the critical path has zero slack. For all other paths, slack = (critical path length) − (path length). A delay in any critical activity delays the entire project by an equal amount. Non-critical activities can be delayed up to their path's slack without affecting project duration.

**When to Use:** After drawing the AON diagram. Critical path identification is required for any scheduling or resource-allocation decision. It is especially important for deciding which activities to "crash" (accelerate at additional cost) when the project falls behind schedule.

---

## Formulas & Quantitative Tools

### CPM Scheduling Formulas

**Formula:**

```
EF = ES + t
LS = LF - t
Slack (S) = LS - ES = LF - EF
```

Where:
- ES = Earliest Start Time
- EF = Earliest Finish Time
- LS = Latest Start Time
- LF = Latest Finish Time
- t  = Estimated activity duration
- S  = Slack (activity slack)

**Variables:**

| Variable | Meaning | Computed By |
|----------|---------|-------------|
| ES | Earliest time the activity can begin | Max EF of all immediate predecessors (0 for first activities) |
| EF | Earliest time the activity can finish | ES + t |
| LF | Latest time the activity can finish without delaying the project | Min LS of all immediate successors (project duration for last activities) |
| LS | Latest time the activity can start without delaying the project | LF − t |
| S  | Maximum allowable delay for the activity | LS − ES (or equivalently LF − EF) |
| t  | Estimated duration of the activity | Given in the activity table |

**Interpretation:** ES and EF are calculated in a forward pass through the network (left to right). LF and LS are calculated in a backward pass (right to left). An activity with S = 0 is a critical activity: it lies on the critical path and any delay in it directly delays the project. An activity with S > 0 can be delayed by up to S time units without delaying project completion.

**Example (St. John's Hospital Relocation):**

The network has five paths. The critical path is B-D-H-J-K with a total duration of 69 weeks:

| Path | Duration (weeks) | Slack (weeks) |
|------|-----------------|---------------|
| A-I-K | 12+15+6 = 33 | 69 − 33 = 36 |
| A-F-K | 12+10+6 = 28 | 69 − 28 = 41 |
| A-C-G-J-K | 12+10+35+4+6 = 67 | 69 − 67 = 2 |
| B-D-H-J-K | 9+10+40+4+6 = 69 | 0 (critical path) |
| B-E-J-K | 9+24+4+6 = 43 | 69 − 43 = 26 |

For activity A (duration 12, no predecessor):
- ES = 0, EF = 0 + 12 = 12
- LF = 14, LS = 14 − 12 = 2
- S = LS − ES = 2 − 0 = 2

For activity B (duration 9, no predecessor, on critical path):
- ES = 0, EF = 0 + 9 = 9
- LF = 9, LS = 9 − 9 = 0
- S = 0 − 0 = 0 (confirmed critical)

**Common Mistakes:**
- Forgetting to take the maximum of all predecessor EFs when computing ES for activities with multiple predecessors (e.g., activity J requires E, G, and H all to finish before it can start — ES_J = max(EF_E, EF_G, EF_H) = max(33, 57, 59) = 59).
- Taking the maximum instead of the minimum when computing LF during the backward pass. For activities with multiple successors, LF = minimum LS of all successors.
- Confusing path slack with activity slack. Path slack is the difference between a path's total duration and the critical path duration. Activity slack is computed activity by activity using LS − ES.
- Declaring an activity critical based on it being on the "long path" without verifying S = 0 through actual calculation.
- Forgetting to set the project finish time correctly before beginning the backward pass: LF for the final node equals the critical path length (69 weeks in the hospital example).

### Regression Analysis for Experimental Data

**Formula:**

```
Y_i = a + b * X_i
```

Where Y is the outcome variable for subject i, X is the treatment indicator (0 = control, 1 = treatment), a is the intercept (mean of control group), and b is the treatment effect (mean difference between treatment and control groups).

**Variables:**

| Variable | Meaning | Example (Endowment Experiment) |
|----------|---------|-------------------------------|
| Y_i | Outcome for subject i | Chocolate valuation in dollars |
| X_i | Treatment indicator for subject i | 1 if endowed with chocolate, 0 if not |
| a | Intercept / control group mean | Mean valuation of non-endowed group |
| b | Treatment effect coefficient | Estimated endowment effect (value premium from ownership) |
| p-value | Probability of observing this b if true effect = 0 | Significant if p < 0.05 |

**Interpretation:** If b is positive and statistically significant (p-value sufficiently small), the treatment caused an increase in the outcome variable. If b is not statistically significant, we cannot rule out that the observed difference occurred by chance. In the endowment experiment: mean valuation of the endowed group = a + b; mean valuation of the control group = a; endowment effect = b.

**Example:** Regression output for endowment experiment: a = $0.90 (control group mean valuation); b = $0.35 (endowment effect); a + b = $1.25 (treatment group mean valuation). If p < 0.05 for b, the endowment effect is statistically significant.

**Common Mistakes:**
- Confusing the intercept a with the treatment effect b. The intercept is the control group baseline; b is the incremental effect of the treatment.
- Using regression on observational data and claiming causality without acknowledging that unobserved confounders may remain.
- Ignoring p-values and reporting b as an effect without testing significance.
- Running regression without first checking that the treatment assignment was truly random — if randomization failed, b does not have a causal interpretation.

---

## Case Studies

### Netflix Thumbnail A/B Testing

**Company:** Netflix

**Challenge:** Netflix's content library is vast, and users make quick decisions about what to watch based on the visual thumbnail displayed next to each title. The company needed to determine which artwork variant for each title would maximize click-through and viewing rates.

**What Was Done:** Netflix ran controlled A/B experiments (with multiple treatment cells) in which different user segments were randomly shown different thumbnail images for the same title. For a documentary called "The Short Game," the control cell (Cell 1) showed the default movie poster artwork, while Cell 2 showed a golfer mid-swing and Cell 3 showed a close-up of a child golfer. User viewing rates were measured and compared across cells. Netflix runs hundreds of these tests simultaneously using a scheduling platform (ABlazer) that carefully manages which subjects are allocated to which tests to avoid conflicting assignments across concurrent experiments.

**Takeaway:** Small changes to visual presentation can produce 20–30% increases in viewing rates. Because the assignments were random, these differences can be attributed causally to the artwork rather than to pre-existing differences in user preferences. The scale of Netflix's user base provides the statistical power to detect even small effects. The complexity of managing many simultaneous tests underscores the operational sophistication required to run an A/B testing program at scale.

### Kahneman, Knetsch, and Thaler Mug Experiment (1990)

**Company:** Academic research (applied to consumer behavior and product trials)

**Challenge:** Determine whether ownership of an object changes a person's subjective valuation of that object — and if so, by how much. This has direct implications for product sampling, free trials, and consumer psychology.

**What Was Done:** Half the participants in a classroom setting were randomly given a coffee mug retailing for $6. The other half were not. Both groups then participated in a bidding process for the mug. The median owner's minimum acceptable selling price was $5.25, while the median buyer's maximum willingness to pay was only $2.50 — a gap of $2.75 despite the mug having an identical objective value of $6 to both groups. The experiment was replicated in-class using Lindor chocolates, with random assignment to endowed (received chocolate) and non-endowed groups, followed by a valuation survey and statistical analysis.

**Takeaway:** People overvalue objects they own relative to objects they do not own — a behavioral bias known as the endowment effect. For product managers, this implies that getting customers to trial or "own" a product (even temporarily) can significantly increase their willingness to pay and reduce churn. Free samples, trial periods, and product customization experiences all leverage this effect. The experiment also demonstrates the power of RCT methodology: because assignment was random, the observed valuation difference is causally attributable to the act of endowment.

### Fyre Festival — Project Management Gone Disastrous

**Company:** Fyre Media / Fyre Festival (2017)

**Challenge:** Fyre Festival was promoted as a luxury music festival on a private island in the Bahamas, targeted at affluent millennials and promoted by social media influencers. The organizers needed to execute a complex multi-workstream project — venue preparation, accommodation, catering, transportation logistics, artist bookings, and ticketing — simultaneously and to a hard deadline.

**What Was Done:** The organizers failed to define a realistic project scope, conduct feasibility analysis, construct a work breakdown structure, or develop a critical path schedule. Activities were not properly sequenced; dependencies were ignored; budget overruns were concealed; and no contingency plans existed. When the festival launched, guests arrived to find disaster relief tents instead of luxury villas, prepackaged sandwiches instead of gourmet catering, and a complete collapse of the promised experience. The festival was cancelled mid-event, resulting in lawsuits, criminal convictions, and a Netflix documentary.

**Takeaway:** Projects without rigorous planning tools — WBS, network diagramming, CPM scheduling, and risk analysis — are vulnerable to catastrophic failure even when marketing hype is strong. The three project management goals (on time, on budget, to specification) were all violated simultaneously. For NPD specifically, product managers must apply the same structured project management discipline to product launches that engineers apply to construction projects.

### Sochi 2014 Winter Olympics

**Company:** Russian Olympic Committee / Russian Federal Government

**Challenge:** Hosting the Winter Olympic Games requires coordinating thousands of construction, logistics, infrastructure, hospitality, and security activities simultaneously under a fixed, immovable deadline.

**What Was Done:** Despite an estimated $51 billion budget — the most expensive Olympics in history at the time — numerous facilities were delivered incomplete or dysfunctional when the Games opened. Hotels lacked working plumbing, doors, and functioning bathrooms. Infrastructure was unfinished. Media and athletes reported broken facilities publicly via social media (the #SochiProblems hashtag).

**Takeaway:** Even with massive resources, poor project coordination — failure to track dependencies, monitor critical path activities, and enforce quality checkpoints — produces visible failures. In NPD, this is directly analogous to launching a product before key features, quality checks, or support infrastructure are complete. The critical path must be monitored continuously, not just planned at the start.

---

## Key Takeaways

- **Causality**, not correlation, is the relevant concept for marketing decisions — a negative correlation between Apple Watch ownership and body weight could reflect reverse causation, common causes, or confounders, and does not prove the watch reduces weight.
- **Randomized Controlled Trials (RCTs)** are the gold standard for establishing causality because random assignment eliminates the influence of confounding variables in expectation, leaving the treatment as the only systematic difference between groups.
- **A/B testing** is the marketing application of the RCT principle — split subjects randomly, manipulate one variable, measure the outcome, and compare means; it is used extensively for digital product and marketing optimization.
- **Factorial design** tests multiple variables simultaneously and reveals optimal combinations that sequential A/B testing cannot find; iterating one-variable-at-a-time risks getting stuck in a local optimum.
- **Statistical significance** must be confirmed before drawing conclusions from an experiment — non-overlapping 95% confidence intervals or a low p-value in regression analysis (Y = a + bX) are the two standard methods.
- The **endowment effect** demonstrates that ownership increases willingness to pay, with significant implications for product trials, sampling strategies, and loss-aversion-based marketing.
- A **Work Breakdown Structure (WBS)** is the essential first step in project management — it hierarchically decomposes all work into schedulable activities and prevents critical tasks from being overlooked.
- The **Critical Path Method (CPM)** identifies the longest sequence of dependent activities in a project network (the critical path), which determines the minimum project duration; activities on the critical path have zero slack and any delay in them delays the entire project.
- **Slack time** (S = LS − ES) for non-critical activities represents scheduling flexibility; activities with large slack can be deprioritized when resources are constrained, while critical activities must be monitored closely.
- **Project crashing** (accelerating critical activities at additional cost) is the primary tool for shortening project duration — only crashing activities on the critical path reduces total project time, and the minimum-cost approach crashes the cheapest critical activity first.

---

## Key Terms and Definitions Glossary

**A/B Testing**: The simplest form of randomized controlled experiment, in which subjects are randomly split into a control group (A) and a treatment group (B), a single variable is manipulated for group B, and outcome variables are compared. [Related: Randomized Controlled Trial, Factorial Design, Statistical Significance]

**Activity**: The smallest unit of work effort consuming both time and resources that a project manager can schedule and control; a node in the AON network diagram. [Related: Work Breakdown Structure, Critical Path, Network Diagram]

**Activity Slack (S)**: The maximum amount of time an activity can be delayed without delaying the overall project completion. Calculated as S = LS − ES (or equivalently LF − EF). Activities on the critical path have S = 0. [Related: Critical Path, Latest Start Time, Earliest Start Time]

**AON Diagram (Activities-On-Node)**: A network diagram format in which activities are represented as nodes (circles) and precedence relationships are represented as directed arrows between nodes. Each node stores ES, EF, LS, LF, and activity duration. [Related: Network Diagram, Precedence Relationship, CPM]

**Causality**: A relationship in which manipulation of variable X directly produces a change in variable Y, independent of all other factors. Distinct from correlation, which captures statistical association that may be confounded by third variables. [Related: Confounding Variables, Randomized Controlled Trial, Counterfactual]

**Confidence Interval (95% CI)**: A range of values within which the true population mean is estimated to lie with 95% probability. Non-overlapping confidence intervals between two groups indicate a statistically significant difference. [Related: Statistical Significance, P-Value, Regression Analysis]

**Confounding Variables**: Variables that affect both the treatment variable and the outcome variable, creating spurious associations. Random assignment in RCTs eliminates confounding in expectation. [Related: Causality, Randomized Controlled Trial, Regression Analysis]

**Counterfactual Scenario**: The hypothetical state of the world in which a different treatment was applied, as opposed to the factual scenario (what actually occurred). The fundamental challenge of causal inference is that counterfactuals are unobservable. [Related: Causality, Randomized Controlled Trial, Factual Scenario]

**CPM (Critical Path Method)**: A project scheduling technique that uses the network diagram to identify the critical path, calculate ES/EF/LS/LF for all activities, determine minimum project duration, and calculate slack times. Functionally equivalent to PERT. [Related: PERT, Critical Path, Slack, Network Diagram]

**Critical Activity**: An activity that lies on the critical path, has zero slack, and whose delay directly delays the entire project. [Related: Critical Path, Slack, CPM]

**Critical Path**: The longest path through the project network from Start to Finish. It determines the minimum possible project duration. All activities on the critical path have zero slack. [Related: CPM, Slack, Network Diagram, Path]

**Earliest Finish Time (EF)**: The earliest time an activity can be completed, calculated as EF = ES + t. Determined during the forward pass through the network. [Related: Earliest Start Time, Forward Pass, CPM]

**Earliest Start Time (ES)**: The earliest time an activity can begin, equal to the maximum EF of all immediate predecessors. For activities with no predecessors, ES = 0. [Related: Earliest Finish Time, Forward Pass, Precedence Relationship]

**Endowment Effect**: A cognitive bias in which individuals assign higher value to objects they own than to identical objects they do not own. First rigorously demonstrated by Kahneman, Knetsch, and Thaler (1990) using coffee mugs. Relevant to product trials, free samples, and loss aversion in pricing. [Related: Randomized Controlled Trial, A/B Testing, Behavioral Economics]

**Factorial Design**: An experimental design that simultaneously tests all combinations of levels across two or more treatment dimensions, creating a full grid of conditions. Reveals optimal combinations and interaction effects that sequential A/B testing cannot find. [Related: A/B Testing, Treatment Variable, Interaction Effects]

**Incentive Compatibility**: The property of an experimental or stated-preference design in which participants have a genuine incentive to reveal their true preferences — typically because they can actually receive the product at the price they state. Ensures that measured willingness-to-pay and preference data are behaviorally valid rather than hypothetical. [Related: Randomized Controlled Trial, Endowment Effect, A/B Testing]

**Latest Finish Time (LF)**: The latest time an activity can be completed without delaying the project. Determined during the backward pass as the minimum LS of all immediate successors. For the final activity, LF = project duration. [Related: Latest Start Time, Backward Pass, CPM]

**Latest Start Time (LS)**: The latest time an activity can begin without delaying the project. Calculated as LS = LF − t during the backward pass. [Related: Latest Finish Time, Backward Pass, Slack]

**Network Diagram**: A graphical display of project activities and their precedence relationships. Consists of nodes (activities) and directed arcs (dependencies). Used as the basis for CPM/PERT analysis. [Related: AON Diagram, Precedence Relationship, CPM, PERT]

**Path**: A sequence of activities in the network diagram leading from the Start node to the Finish node. Path length is the sum of activity durations along that route. [Related: Critical Path, Slack, Network Diagram]

**PERT (Program Evaluation and Review Technique)**: A project scheduling and network analysis technique functionally equivalent to CPM. Historically developed for large-scale government and defense projects. [Related: CPM, Network Diagram, Critical Path]

**Precedence Relationship**: A constraint specifying that one activity cannot begin until one or more preceding activities have been completed. Represented as directed arrows in the AON diagram. [Related: AON Diagram, Network Diagram, Activity]

**Project**: A unique, one-time set of interrelated activities with a definite start and end point, designed to achieve specific objectives within a limited time frame using a defined allocation of resources. [Related: Work Breakdown Structure, Project Management, CPM]

**Project Crashing**: The deliberate shortening of one or more activities on the critical path by committing additional resources, in order to reduce overall project duration. The minimum-cost approach crashes the cheapest critical activity first. [Related: Critical Path, CPM, Cost-Time Trade-Off]

**Randomized Controlled Trial (RCT)**: An experiment in which subjects are randomly assigned to a control group or treatment group(s). The gold standard for causal inference because random assignment distributes confounding variables equally across groups in expectation. [Related: A/B Testing, Random Assignment, Causality, Confounding Variables]

**Regression Analysis**: A statistical method for estimating the relationship between an outcome variable (Y) and one or more explanatory variables (X). In the model Y = a + bX, coefficient b represents the relationship between X and Y, and its p-value tests statistical significance. In experimental contexts with a binary treatment indicator, b represents the treatment effect. [Related: Statistical Significance, P-Value, Causality, Confounding Variables]

**Slack**: See Activity Slack. [Related: Critical Path, Activity Slack, CPM]

**Statistical Significance**: A result is statistically significant if the observed difference between groups is unlikely to have occurred by chance alone, typically assessed using non-overlapping 95% confidence intervals or a p-value below 0.05 in regression. [Related: Confidence Interval, P-Value, Regression Analysis, A/B Testing]

**Treatment Effect**: The causal impact of the manipulated variable (X) on the outcome variable (Y), isolated from all other influences through random assignment. In regression Y = a + bX, the coefficient b estimates the treatment effect. [Related: Causality, Randomized Controlled Trial, Coefficient]

**Work Breakdown Structure (WBS)**: A hierarchical decomposition of all work required to complete a project. Level 0 is the overall project; Level 1 represents major work streams; Level 2 and below represent individual schedulable activities. [Related: Activity, Project, Network Diagram, CPM]
