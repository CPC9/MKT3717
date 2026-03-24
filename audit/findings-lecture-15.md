# Audit Findings: Practice Problems: Project Management — Network Diagrams

## Formulas Checked

- **EF = ES + Duration**: VERIFIED — matches source formula `EF = ES + t` as documented in the lec-06 CPM scheduling formulas and standard CPM convention; all worked examples are arithmetically consistent.
- **ES = max(EF of all immediate predecessors)**: VERIFIED — correctly stated and applied throughout Problem 1 (e.g., D's ES = max(8, 6) = 8; G's ES = max(18, 11) = 18).
- **LS = LF − Duration**: VERIFIED — consistent with lec-06's `LS = LF - t`; backward-pass examples for H (25−4=21), G (21−3=18), and E (18−8=10) all check out.
- **LF = min(LS of all immediate successors)**: VERIFIED — correctly applied in Activity A's backward pass: min(LS_D=8, LS_F=20) = 8, giving LS_A = 0.
- **Slack = LS − ES = LF − EF**: VERIFIED — dual form stated correctly; all eight slack values in the schedule table are arithmetically consistent (A=0, B=2, C=7, D=0, E=7, F=12, G=0, H=0).
- **Path Length = Sum of durations of all activities on the path**: VERIFIED — all four Problem 1 paths and all four Problem 2 paths sum correctly.
- **Path Slack = Critical Path Length − Path Length**: VERIFIED — Problem 2 path slacks (1, 2, 0, 1) are all correct against the 14-day critical path.
- **New Project Duration = max(all path lengths after updating disrupted activity)**: VERIFIED — after F expands to 20 days, A-F = 28 days > 25 days; new duration 28 and delay of 3 days are correct.
- **Complete Schedule Table (Problem 1)**: VERIFIED — all 8 rows independently recalculated; every ES, EF, LS, LF, and Slack value is arithmetically correct.

## Missing Glossary Terms

The study note's own Overview states the supplement's glossary slide contains exactly five formal definitions: Activity, Path, Critical Path, Critical Activity, and Activity Slack. All five are present and accurately defined in the study note's glossary section. The note also includes numerous supplementary terms (Backward Pass, Crashing, CPM, Duration, ES, EF, Float, Forward Pass, LF, LS, Network Diagram, Node, Path Slack, Predecessor, Project Duration) that go beyond the source's five-term glossary.

- None — all five source-defined terms are present and correctly defined.

One minor inconsistency: the YAML frontmatter lists "Gantt Charts" as a topic, but no Gantt Chart content or definition appears anywhere in the note body. The supplement's content (as described throughout the note) is entirely network diagram / CPM-based. This is a metadata inconsistency, not a factual error about CPM content.

## Spot-Check Claims

- Claim 1 (most surprising — Activity F has 12 days of slack, the most of any activity): VERIFIED — independently confirmed: F's ES=8, LS=20, Slack=12; this exceeds B's slack of 2 and C/E's slack of 7, making F the least time-sensitive activity.
- Claim 2 (briefest definition — Float is "another term for slack"): VERIFIED — the lec-06 glossary and standard CPM literature both treat Float and Slack as synonymous; the definition accurately reflects course-level convention.
- Claim 3 (relationship claim — "Crashing a non-critical activity has no effect on project duration"): VERIFIED — supported by the supplement's own Question 3 answer (only G is crashable because only G is on the critical path A-D-G-H) and consistent with lec-06's statement that "only crashing activities on the critical path reduces total project time."

## Suggested Corrections

No FLAGGED items were identified. All formulas, schedule table values, path calculations, disruption scenarios, crashing logic, and glossary definitions are correct and internally consistent. The only note-worthy finding is the metadata issue below, which does not require a content correction.

**Gantt Charts topic tag in YAML frontmatter**
Location: YAML frontmatter (lines 10–11) and implicitly in the Overview's topic list
Current: `topics:` list includes `"Gantt Charts"`
Correction: Remove "Gantt Charts" from the topics list or add a brief note/section acknowledging that the supplement references Gantt-style scheduling charts (the schedule table in the note is described as "Gantt-Style Scheduling Chart" on line 76) but does not teach Gantt chart construction separately. The tag is misleading because no Gantt Chart concept, definition, or construction method appears in the body.
Source: [Supplement] Project Management Practice Problems.pdf (supplement focuses exclusively on network diagrams and CPM; Gantt charts are a separate scheduling tool not covered by the practice problems)
