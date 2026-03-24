# Sub-PRD: Sample Questions Page

**Target file:** site/sample-questions.html
**Template source:** C:\Users\Conno\OneDrive\Documents\GitHub\study-site-builder\templates\page-templates\sample-questions.html
**Content sources:** study-notes/lecture-01 through lecture-08 (type: lecture), lecture-09 through lecture-17 (type: supplementary)

## Placeholder Mappings

| Placeholder | Source | Transformation |
|-------------|--------|----------------|
| {{SITE_NAME}} | Course name | "MKT 3717 — Product & Brand Management" |
| {{THEME_CSS}} | Design spec | "css/theme.css" |
| {{SAMPLE_QUESTIONS_CONTENT}} | All study-notes/*.md | Generated Q&A grouped by lecture |
| {{NAV_JS}} | shared-js | "js/nav.js" |

## Transform Rules

Read ALL study notes in study-notes/ (17 files).

For each type:lecture note (lectures 01–08), generate 3–5 comprehension questions.
For each type:supplementary note (lectures 09–17), generate 1–3 questions grouped in a "Supplementary Topics" section at the end.

Question types to mix: definition ("What is X?"), short-answer ("Explain the difference between X and Y"), application ("Given this scenario, which framework would you apply and why?"), compare/contrast.

Structure:
- Each lecture group: `<div class="question-group"><h2>Lecture N: Title</h2>...</div>`
- Each question: `<div class="question-item"><p class="question-text">Q?</p><details><summary>Show Answer</summary><div class="answer-content">Answer here.</div></details></div>`
- Supplementary section at end: same structure with heading "Supplementary Topics"

Answers should be concise but complete — 2–4 sentences. Reference specific frameworks, formulas, or examples from the study notes.
