# Sub-PRD: Home Page

**Target file:** site/index.html
**Template source:** C:\Users\Conno\OneDrive\Documents\GitHub\study-site-builder\templates\page-templates\index.html
**Content sources:** synthesis/conceptual-map.md (course name, description), study-notes/*.md (page count)

## Placeholder Mappings

| Placeholder | Source | Transformation |
|-------------|--------|----------------|
| {{SITE_NAME}} | Course name | "MKT 3717 — Product & Brand Management" |
| {{THEME_CSS}} | Design spec | "css/theme.css" |
| {{COURSE_DESCRIPTION}} | conceptual-map.md narrative | 1–2 sentence summary of the course |
| {{QUICK_LINKS}} | Design spec pages | 5 quick-link cards for Study Map, Flashcards, Last-Minute Review, Sample Questions, Practice Exams |
| {{NAV_JS}} | shared-js | "js/nav.js" |

## Quick Links Content

Generate 5 cards in this order:
1. Study Map → study-map.html — "Explore all course concepts organized by lecture, with detailed explanations, formulas, and connections"
2. Flashcards → flashcards.html — "Study key terms and definitions with interactive flashcards organized by lecture deck"
3. Last-Minute Review → last-minute-review.html — "Quick-scan reference covering must-remember facts, formulas, and exam traps from every lecture"
4. Sample Questions → sample-questions.html — "Comprehension questions with revealed answers, organized by lecture and topic"
5. Practice Exams → practice-exams.html — "Full-length practice exams with multiple choice and short answer questions"

Each card: icon (emoji), h2 title, p description, href to page.
