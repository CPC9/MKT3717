---
title: "Practice Problems: Project Management Practice Problems"
type: supplementary
source_files:
  - "source-materials/[Supplement] Project Management Practice Problems.pdf"
topics:
  - "Project Management"
  - "Critical Path Method"
  - "Network Diagrams"
  - "Project Scheduling"
lecture_number: 15
---

# Practice Problems: Project Management — Network Diagrams

## Overview

This supplement provides structured practice problems in project scheduling using the Critical Path Method (CPM) and network diagram analysis. The problems build from basic network construction and path identification through to advanced scheduling calculations including earliest start, earliest finish, latest start, latest finish, and slack time for every activity. Mastering these problems is essential for the project management portion of MKT3717, where product launch timelines, new product development schedules, and resource allocation decisions all depend on the same underlying logic.

The supplement is organized around two core practice problems. Practice Problem 1 uses a table of activities and predecessors to build a network diagram from scratch, then asks a series of progressively harder questions about that diagram: identifying the critical path, recalculating the path under a disruption scenario, deciding which activities to crash, computing slack for specific activities, and determining latest start and earliest finish times. Practice Problem 2 provides a pre-drawn network diagram and asks for the critical path, project duration, and path-level slack. Together, the two problems cover every calculation type that can appear on an exam.

A glossary slide at the end of the supplement consolidates five formal definitions: activity, path, critical path, critical activity, and activity slack. These definitions are precise and exam-ready. The key insight running through all problems is that the critical path is always the longest path through the network, that activities on it have zero slack, and that any delay to a critical activity delays the entire project by the same amount — while activities off the critical path have slack that buffers the project schedule.

---

## Key Concepts

- **Network Diagram (Activity-on-Node):** A directed graph in which each node represents an activity (with its duration), arrows represent precedence relationships (which activities must finish before the next can start), and all paths flow from a single Start node to a single Finish node.
- **Predecessor Relationships:** Each activity lists which other activities must be completed before it can begin. Activities with no predecessors (shown as "--") can start immediately at Day 0.
- **Path Enumeration:** To analyze a network, every distinct route from Start to Finish must be identified. The length of a path is the sum of durations of all activities on that path.
- **Critical Path:** The longest path from Start to Finish. Its length equals the minimum possible project duration. The project cannot finish any earlier than the critical path length.
- **Slack (Float):** The amount of time an activity or path can be delayed without pushing back the project completion date. Activities on the critical path have zero slack.
- **Crashing:** Deliberately shortening the duration of a critical activity (by adding resources, cost, or effort) to reduce the overall project duration. Crashing a non-critical activity has no effect on project duration.
- **Earliest Start (ES) and Earliest Finish (EF):** Calculated in a forward pass through the network. ES for an activity is the latest EF of all its predecessors. EF = ES + Duration.
- **Latest Start (LS) and Latest Finish (LF):** Calculated in a backward pass through the network. LF for an activity is the earliest LS of all its successors. LS = LF − Duration.
- **Dynamic Critical Path:** If a non-critical activity is delayed beyond its slack, it becomes critical and can create a new (longer) critical path, extending the project.
- **Schedule Table:** A completed table listing ES, EF, LS, LF, and Slack for every activity is the standard deliverable of a full CPM analysis.

---

## Frameworks & Mental Models

### Network Diagram (Activity-on-Node Format)

The network diagram is the primary visual tool for CPM analysis. Each activity is drawn as a labeled node (circle or box) containing the activity name and duration. Arrows connect nodes to show which activities must precede others. The diagram makes it possible to see all paths simultaneously and to reason visually about dependencies.

**How to construct a network diagram from a predecessor table:**
1. List all activities with no predecessors — these all connect directly from Start.
2. For each remaining activity, draw an arrow from each of its predecessors to it.
3. All activities with no successors connect to Finish.
4. Verify that every activity appears exactly once and that all precedence constraints are respected.

**Practice Problem 1 network structure (from the table):**
- Start → A (8 days), B (6 days), C (3 days) [all have no predecessors]
- A, B → D (10 days) [D requires both A and B to finish]
- C → E (8 days)
- A → F (5 days)
- D, E → G (3 days) [G requires both D and E to finish]
- G → H (4 days)
- F and H both → Finish

This produces four distinct paths: A-F, A-D-G-H, B-D-G-H, and C-E-G-H.

**Practice Problem 2 network structure (pre-drawn diagram):**
- Start → A (4 days)
- A → B (3 days), A → C (4 days)
- B → D (5 days), B → E (4 days)
- C → D (5 days), C → E (4 days)
- D → F (1 day), E → F (1 day)
- F → Finish

This produces four distinct paths: A-B-D-F, A-B-E-F, A-C-D-F, and A-C-E-F.

### Schedule Table (Gantt-Style Scheduling Chart)

Once the network diagram is drawn, the schedule table captures all timing information in a structured format. Each row represents one activity; columns are: Earliest Start, Earliest Finish, Latest Start, Latest Finish, Slack. Activities with Slack = 0 are on the critical path. The table is the standard answer format when an exam asks you to "fill in the scheduling table."

**Reading the table:** If ES = LS (or equivalently EF = LF), the activity is critical. The larger the slack value, the more scheduling flexibility that activity has.

---

## Formulas & Quantitative Tools

### Formula 1: Earliest Finish

**Formula:** EF = ES + Duration

| Variable | Meaning |
|----------|---------|
| EF | Earliest Finish — the earliest day the activity can be completed |
| ES | Earliest Start — the earliest day the activity can begin |
| Duration | The estimated time the activity takes (in days, weeks, etc.) |

**Interpretation:** An activity can finish no earlier than the day it starts plus however long it takes. This is computed in the forward pass (left to right through the network).

**Example (Problem 1, Activity D):** D has predecessors A (EF = 8) and B (EF = 6). ES for D = max(8, 6) = 8. EF for D = 8 + 10 = **Day 18**.

**Common Mistakes:**
- When an activity has multiple predecessors, ES must be the **maximum** EF among all predecessors — not the minimum. D cannot start until both A and B are done.
- Forgetting to apply this rule causes you to underestimate the earliest finish.

---

### Formula 2: Earliest Start (Multiple Predecessors)

**Formula:** ES = max(EF of all immediate predecessors)

| Variable | Meaning |
|----------|---------|
| ES | Earliest Start of the current activity |
| EF | Earliest Finish of each predecessor |
| max() | Take the largest value — the activity must wait for all predecessors |

**Interpretation:** A successor activity cannot begin until every one of its predecessors has finished. The binding constraint is the last predecessor to finish.

**Example (Problem 1, Activity G):** G requires D (EF = 18) and E (EF = 11). ES for G = max(18, 11) = **18**. EF for G = 18 + 3 = 21.

**Common Mistakes:**
- Using the minimum instead of maximum — this is the single most common error in forward-pass calculations.

---

### Formula 3: Latest Start

**Formula:** LS = LF − Duration

| Variable | Meaning |
|----------|---------|
| LS | Latest Start — the latest day an activity can begin without delaying the project |
| LF | Latest Finish — the latest day an activity can end without delaying the project |
| Duration | Time the activity takes |

**Interpretation:** Computed in the backward pass (right to left). Start from the project end (LF = project duration for all activities feeding Finish) and work backwards.

**Example (Problem 1, Activity E):** LF for E = 18 (because G's LS = 18, and G is E's only successor). LS for E = 18 − 8 = **Day 10**. This matches the exam answer for Question 5: "What is the latest start time for activity E? Answer: Day 10."

**Common Mistakes:**
- When an activity feeds multiple successors, LF = **minimum** LS among all successors (not maximum).
- Starting the backward pass with the wrong end-of-project date.

---

### Formula 4: Latest Finish (Multiple Successors)

**Formula:** LF = min(LS of all immediate successors)

| Variable | Meaning |
|----------|---------|
| LF | Latest Finish of the current activity |
| LS | Latest Start of each successor |
| min() | Take the smallest value — the activity must finish before the earliest successor needs to start |

**Interpretation:** If an activity feeds multiple downstream activities, it must finish in time for whichever successor needs to start soonest.

**Example (Problem 1, Activity A):** A feeds D (LS = 8) and F (LS = 20). LF for A = min(8, 20) = **8**. LS for A = 8 − 8 = 0.

**Common Mistakes:**
- Using max instead of min in the backward pass — the reverse of the forward-pass error.

---

### Formula 5: Activity Slack

**Formula:** Slack = LS − ES = LF − EF

| Variable | Meaning |
|----------|---------|
| Slack | Number of days the activity can be delayed without affecting project completion |
| LS | Latest Start |
| ES | Earliest Start |
| LF | Latest Finish |
| EF | Earliest Finish |

**Interpretation:** Slack = 0 means the activity is on the critical path and has no scheduling flexibility. Positive slack means the activity can start later (or take longer) by that many days without impacting the project end date.

**Example (Problem 1, Activity F):** ES = 8, LS = 20. Slack = 20 − 8 = **12 days**. Activity F can slip up to 12 days without delaying the 25-day project.

**Example (Problem 1, Activity C):** Path C-E-G-H = 3 + 8 + 3 + 4 = 18 days. Critical path = 25 days. Slack for activity C = 25 − 18 = **7 days** (Question 4 answer).

**Common Mistakes:**
- Confusing path slack with activity slack. In simple networks, they are the same; in networks where paths share activities, they differ.
- Assuming non-critical activities have unlimited slack — they only have slack up to the critical path length.

---

### Formula 6: Path Length

**Formula:** Path Length = Sum of durations of all activities on the path

| Variable | Meaning |
|----------|---------|
| Path Length | Total time from Start to Finish along one specific route |
| Activity Duration | Time for each individual activity on the path |

**Interpretation:** Enumerate every path, sum the durations, and compare. The longest path is the critical path.

**Example (Problem 1):**
- A-F: 8 + 5 = **13 days**
- A-D-G-H: 8 + 10 + 3 + 4 = **25 days** ← Critical Path
- B-D-G-H: 6 + 10 + 3 + 4 = **23 days**
- C-E-G-H: 3 + 8 + 3 + 4 = **18 days**

**Example (Problem 2):**
- A-B-D-F: 4 + 3 + 5 + 1 = **13 days**
- A-B-E-F: 4 + 3 + 4 + 1 = **12 days**
- A-C-D-F: 4 + 4 + 5 + 1 = **14 days** ← Critical Path
- A-C-E-F: 4 + 4 + 4 + 1 = **13 days**

**Common Mistakes:**
- Missing paths — in networks with many cross-connections, it is easy to skip combinations. Draw the diagram carefully before enumerating.
- Double-counting shared activities when computing path slack.

---

### Formula 7: Path Slack

**Formula:** Path Slack = Critical Path Length − Path Length

| Variable | Meaning |
|----------|---------|
| Path Slack | Days by which this path can slip before it becomes critical |
| Critical Path Length | Duration of the longest path (= project duration) |
| Path Length | Duration of the path in question |

**Interpretation:** A path with slack > 0 is non-critical. If any event on that path slips by more than its path slack, that path becomes the new critical path and extends the project.

**Example (Problem 2):** Critical path = 14 days.
- A-B-D-F (13 days): Slack = 14 − 13 = **1 day**
- A-B-E-F (12 days): Slack = 14 − 12 = **2 days**
- A-C-D-F (14 days): Slack = **0 days** (critical)
- A-C-E-F (13 days): Slack = 14 − 13 = **1 day**

**Common Mistakes:**
- Reporting path slack for a non-critical path as if every activity on it has that much individual slack — only true if no activities are shared with shorter-slack paths.

---

### Formula 8: New Critical Path After Disruption

**Formula:** New Project Duration = max(all path lengths after updating the disrupted activity's duration)

**Interpretation:** If an activity's duration increases, recalculate all path lengths that include that activity. The new longest path is the new critical path.

**Example (Problem 1, Question 2):** Activity F increases from 5 days to 20 days.
- A-F: 8 + 20 = **28 days** ← New Critical Path
- A-D-G-H: 8 + 10 + 3 + 4 = 25 days (unchanged)
- B-D-G-H: 23 days (unchanged)
- C-E-G-H: 18 days (unchanged)

New project duration = 28 days. Delay relative to original estimate = 28 − 25 = **3 days**.

**Common Mistakes:**
- Assuming the original critical path must still be critical after a disruption — always re-check all paths.

---

## Case Studies

### Practice Problem 1 — Building a Network from a Predecessor Table

**Setup:** A project has 8 activities (A through H) with the following structure:

| Activity | Predecessor | Duration (days) |
|----------|-------------|-----------------|
| A | — | 8 |
| B | — | 6 |
| C | — | 3 |
| D | A, B | 10 |
| E | C | 8 |
| F | A | 5 |
| G | D, E | 3 |
| H | G | 4 |

**Question 1 — Critical Path and Project Duration:**

Enumerate all paths from Start to Finish:
- A-F: 8 + 5 = 13 days
- A-D-G-H: 8 + 10 + 3 + 4 = 25 days
- B-D-G-H: 6 + 10 + 3 + 4 = 23 days
- C-E-G-H: 3 + 8 + 3 + 4 = 18 days

**Critical path: A-D-G-H. Expected project duration: 25 days.**

**Question 2 — Disruption: Activity F expands to 20 days:**

Recalculate A-F: 8 + 20 = 28 days. All other paths are unchanged. A-F is now the longest path.
**New project duration: 28 days. The project is delayed by 3 days.**

**Question 3 — Which activity to crash?**

Options: E, F, or G. Crashing only works if the activity is on the critical path (A-D-G-H). Activity E is on C-E-G-H, Activity F is on A-F. Only Activity G appears on the critical path A-D-G-H.
**Answer: Activity G (C). Crashing must target critical path activities.**

**Question 4 — Slack for Activity C:**

Activity C is only on path C-E-G-H (length = 18 days). Critical path = 25 days.
Slack = 25 − 18 = **7 days**. Activity C can be delayed up to 7 days without affecting project completion.

**Question 5 — Latest Start for Activity E:**

Backward pass: H's LF = 25, LS = 21. G's LF = 21, LS = 18. E feeds G, so E's LF = 18. LS for E = 18 − 8 = **Day 10**.

**Question 6 — Earliest Finish for Activity D:**

Forward pass: A's EF = 8, B's EF = 6. D's ES = max(8, 6) = 8. D's EF = 8 + 10 = **Day 18 (Answer A).**

**Complete Scheduling Table (from the network diagram in the supplement):**

| Activity | Earliest Start | Earliest Finish | Latest Start | Latest Finish | Slack |
|----------|---------------|-----------------|--------------|---------------|-------|
| A | 0 | 8 | 0 | 8 | 0 |
| B | 0 | 6 | 2 | 8 | 2 |
| C | 0 | 3 | 7 | 10 | 7 |
| D | 8 | 18 | 8 | 18 | 0 |
| E | 3 | 11 | 10 | 18 | 7 |
| F | 8 | 13 | 20 | 25 | 12 |
| G | 18 | 21 | 18 | 21 | 0 |
| H | 21 | 25 | 21 | 25 | 0 |

Activities A, D, G, H all have Slack = 0, confirming they are on the critical path. Activity F has the most slack (12 days), meaning it is the least time-sensitive activity. Activity B has 2 days of slack, and Activities C and E each have 7 days of slack.

---

### Practice Problem 2 — Reading a Pre-Drawn Network Diagram

**Setup:** A network diagram is provided with 6 activities (A through F). Activity durations are visible on the diagram nodes: A = 4, B = 3, C = 4, D = 5, E = 4, F = 1. Cross-connections exist: both B and C feed both D and E.

**Path Enumeration:**
- A-B-D-F: 4 + 3 + 5 + 1 = **13 days**
- A-B-E-F: 4 + 3 + 4 + 1 = **12 days**
- A-C-D-F: 4 + 4 + 5 + 1 = **14 days**
- A-C-E-F: 4 + 4 + 4 + 1 = **13 days**

**a. Critical path: A-C-D-F**

**b. Expected project length: 14 days**

**c. Path slack:**
- A-B-D-F: 14 − 13 = **1 day**
- A-B-E-F: 14 − 12 = **2 days**
- A-C-D-F: 14 − 14 = **0 days** (critical)
- A-C-E-F: 14 − 13 = **1 day**

**Key insight from Problem 2:** When B and C both feed D and E (cross-connections), it is essential to enumerate all four path combinations explicitly. The cross-connection means C-D is a valid sub-path even though B also connects to D.

---

## Key Takeaways

- **Enumerate all paths first.** Before answering any question, list every path from Start to Finish and compute its length. This is the foundation for all subsequent calculations.
- **The critical path = the longest path.** It is not the most important-sounding activities or the ones with the most resources — it is purely the path with the greatest total duration.
- **Zero slack = critical activity.** Any activity where ES = LS (or EF = LF) is on the critical path and cannot be delayed at all without pushing the project end date.
- **Crash only critical activities.** Spending money to speed up a non-critical activity wastes resources — it does not shorten the project. Always identify the critical path before deciding what to crash.
- **In the forward pass, use max(); in the backward pass, use min().** When an activity has multiple predecessors, its ES = max of predecessor EFs. When an activity has multiple successors, its LF = min of successor LSs.
- **Disruptions can shift the critical path.** If a non-critical activity slips beyond its slack, it can become the new critical path and extend the project. Always re-enumerate after a disruption.
- **Slack = critical path length − path length** for path-level slack, or **LS − ES** for activity-level slack. Both methods should give the same result on shared activities.
- **Activity D's earliest finish is determined by its latest-finishing predecessor.** D in Problem 1 requires both A (8 days) and B (6 days) — it waits for A, so ES = Day 8 and EF = Day 18.
- **The schedule table is the complete deliverable.** Filling in all five columns (ES, EF, LS, LF, Slack) for every activity demonstrates full command of CPM. Memorize the two-pass procedure: forward for ES/EF, backward for LS/LF, then subtract for slack.
- **Non-critical activities provide scheduling flexibility, not cost savings by default.** The slack on activity F (12 days in Problem 1) means you could start it later — but this does not save money unless it allows reallocation of resources.

---

## Key Terms and Definitions Glossary

**Activity**: The smallest unit of work effort consuming both time and resources that a project manager can schedule and control; a project step that takes time and uses resources. [Related: Critical Activity, Predecessor, Duration]

**Activity Slack**: The maximum number of days an activity can be delayed without delaying the entire project; computed as LS − ES or equivalently LF − EF; zero for critical activities. [Related: Critical Path, Float, Path Slack]

**Backward Pass**: The procedure of moving right to left through the network diagram to calculate Latest Finish and Latest Start for every activity, beginning from the project end date. [Related: Latest Finish, Latest Start, Forward Pass]

**Crashing**: The deliberate reduction of an activity's duration by adding extra resources or cost, done specifically to shorten the critical path and reduce total project duration; only effective when applied to critical activities. [Related: Critical Path, Critical Activity, Resource Allocation]

**Critical Activity**: Any activity that lies on the critical path; it has zero slack and any delay to it directly delays the entire project by the same amount. [Related: Critical Path, Activity Slack]

**Critical Path**: The longest path from Start to Finish in a network diagram; determines the minimum possible project duration; activities on it have zero slack. [Related: Critical Activity, Path, Project Duration]

**Critical Path Method (CPM)**: A project scheduling technique that identifies all paths through a network diagram, determines the critical path, and computes earliest/latest start and finish times and slack for every activity. [Related: Network Diagram, Activity Slack, Forward Pass, Backward Pass]

**Duration**: The estimated time required to complete one activity, measured in consistent units (days, weeks); the value shown in each node of the network diagram. [Related: Activity, Path Length, Earliest Finish]

**Earliest Finish (EF)**: The earliest possible day an activity can be completed, calculated as ES + Duration in the forward pass through the network. [Related: Earliest Start, Forward Pass]

**Earliest Start (ES)**: The earliest possible day an activity can begin, equal to the maximum Earliest Finish among all of its predecessors; Day 0 for activities with no predecessors. [Related: Predecessor, Earliest Finish, Forward Pass]

**Float**: Another term for slack — the amount of scheduling flexibility available to an activity or path without delaying the project end date. [Related: Activity Slack, Path Slack]

**Forward Pass**: The procedure of moving left to right through the network diagram to calculate Earliest Start and Earliest Finish for every activity, beginning from the project start (Day 0). [Related: Earliest Start, Earliest Finish, Backward Pass]

**Latest Finish (LF)**: The latest day an activity can be completed without delaying the project; equal to the minimum Latest Start of all its immediate successors; calculated in the backward pass. [Related: Latest Start, Backward Pass]

**Latest Start (LS)**: The latest day an activity can begin without delaying the project; calculated as LF − Duration in the backward pass. [Related: Latest Finish, Backward Pass, Activity Slack]

**Network Diagram**: A directed graph used to represent all project activities and their precedence relationships; nodes represent activities and arrows represent dependencies; used to identify all paths and the critical path. [Related: Path, Activity, CPM, Node]

**Node**: A connecting point in a network diagram; in the Activity-on-Node format used in this supplement, each node represents one activity and displays the activity label and duration. [Related: Network Diagram, Activity]

**Path**: A sequence of activities that leads continuously from the starting node to the finishing node of a network diagram; its length is the sum of its activities' durations. [Related: Critical Path, Path Length, Path Slack]

**Path Slack**: The difference between the critical path length and a given path's length; represents how much total delay that path can absorb before it becomes the new critical path. [Related: Activity Slack, Critical Path]

**Predecessor**: An activity that must be fully completed before a given activity can begin; shown in the "Predecessor" column of an activity table and as an incoming arrow in a network diagram. [Related: Activity, Successor, Earliest Start]

**Project Duration**: The total time required to complete the entire project; equal to the length of the critical path; cannot be reduced without crashing one or more critical activities. [Related: Critical Path, Crashing]
