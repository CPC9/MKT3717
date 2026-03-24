# Sub-PRD: Last-Minute Review Page

**Target file:** site/last-minute-review.html
**Template source:** C:\Users\Conno\OneDrive\Documents\GitHub\study-site-builder\templates\page-templates\last-minute-review.html
**Content sources:** synthesis/last-minute-review.md

## Placeholder Mappings

| Placeholder | Source | Transformation |
|-------------|--------|----------------|
| {{SITE_NAME}} | Course name | "MKT 3717 — Product & Brand Management" |
| {{THEME_CSS}} | Design spec | "css/theme.css" |
| {{REVIEW_CONTENT}} | synthesis/last-minute-review.md | Convert markdown to styled HTML review sections |
| {{NAV_JS}} | shared-js | "js/nav.js" |

## Transform Rules

Convert synthesis/last-minute-review.md into HTML that fits inside the .review-columns two-column grid:

1. Each `## Lecture N:` section becomes a `<div class="review-section">` with `<h2>` heading
2. `### Must-Remember Facts` → `<h3>` + `<ul>` list items; bold terms become `<span class="critical-term">`
3. `### Key Formulas` table → `<div class="formula-card">` per formula row
4. `### Critical Distinctions` table → HTML table or definition list with clear formatting
5. `### Common Exam Traps` blockquote → `<blockquote>` styled with accent border, or `<div class="card">` with warning icon
6. Add print-friendly class to main container

Place content in the {{REVIEW_CONTENT}} slot inside .review-columns div. Alternate sections between columns for visual balance.
