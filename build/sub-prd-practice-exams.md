# Sub-PRD: Practice Exams Landing Page

**Target file:** site/practice-exams.html
**Template source:** C:\Users\Conno\OneDrive\Documents\GitHub\study-site-builder\templates\page-templates\practice-exams.html
**Content sources:** design/design-spec.md (examCount: 3)

## Placeholder Mappings

| Placeholder | Source | Transformation |
|-------------|--------|----------------|
| {{SITE_NAME}} | Course name | "MKT 3717 — Product & Brand Management" |
| {{THEME_CSS}} | Design spec | "css/theme.css" |
| {{PRACTICE_EXAMS_CONTENT}} | Design spec | 3 exam cards linking to exams/practice-exam-1.html, exams/practice-exam-2.html, exams/practice-exam-3.html |
| {{NAV_JS}} | shared-js | "js/nav.js" |

## Exam Cards Content

Generate 3 .exam-card divs:

**Exam 1: Full Course Review**
- Topics: NPD Process, Opportunity ID, Concept Screening, Concept Testing
- Meta tags: 30 Questions, Multiple Choice + Short Answer, Lectures 1–5
- Link: exams/practice-exam-1.html

**Exam 2: Brand Management Focus**
- Topics: Conjoint Analysis, Market Experiments, Brand Management, Brand Sustainability
- Meta tags: 30 Questions, Multiple Choice + Short Answer, Lectures 4–8
- Link: exams/practice-exam-2.html

**Exam 3: Comprehensive Final**
- Topics: All topics — NPD through Brand Management, Supplementary Cases
- Meta tags: 30 Questions, Multiple Choice + Short Answer, All Lectures
- Link: exams/practice-exam-3.html

Note: Individual exam HTML files will be generated in Phase 6 (exam-generator). The landing page is built now with placeholder links.
