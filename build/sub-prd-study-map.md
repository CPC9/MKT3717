# Sub-PRD: Study Map Page

**Target file:** site/study-map.html
**Template source:** C:\Users\Conno\OneDrive\Documents\GitHub\study-site-builder\templates\page-templates\study-map.html
**Content sources:** synthesis/conceptual-map.md (structure), ALL study-notes/*.md (substantive content)

## Placeholder Mappings

| Placeholder | Source | Transformation |
|-------------|--------|----------------|
| {{SITE_NAME}} | Course name | "MKT 3717 — Product & Brand Management" |
| {{THEME_CSS}} | Design spec | "css/theme.css" |
| {{COURSE_NAME}} | Course name | "MKT 3717" |
| {{CENTRAL_QUESTIONS}} | Course framing | 3 cq-card grid (see below) |
| {{STUDY_MAP_CONTENT}} | All study notes + conceptual map | Full topic-block accordion HTML |
| {{NAV_JS}} | shared-js | "js/nav.js" |

## Central Questions Block

Generate a .central-questions grid with 3 cards:
1. "What is worth building?" — Tool: RWW Framework + PESTEL + Porter's Five Forces
2. "What do customers actually value?" — Tool: Conjoint Analysis + VoC + Needs Statements
3. "How do we build and sustain brand equity?" — Tool: CBBE Pyramid + Brand Repositioning

## Study Map Content — Full Requirements

Read ALL 17 study notes. Read synthesis/conceptual-map.md for lecture ordering and relationships.

### Lecture Topic Blocks (type: lecture, Lectures 1–8)

Generate one .topic-block per lecture. Each block has:
- A .subtopic-grid containing one .subtopic per key concept from the study note
- Minimum concepts per lecture: 5–10 subtopics covering all Key Concepts + Frameworks sections
- Every subtopic body follows the EXACT pattern: prose → section-labels → bullets → formula-wrap (if applicable) → insight-box → link-tags

**Topic block assignments:**
- t-npd-foundations: Lectures 1–2 (NPD Foundations) 🌱
- t-concept-eval: Lectures 3–4 (Concept Screening & Testing) 🔬
- t-quantitative: Lecture 5 (Conjoint Analysis) 📊
- t-market-pm: Lecture 6 (Market Experiments & Project Management) 🧪
- t-brand-foundations: Lecture 7 (Brand Management) 🏷️
- t-brand-sustainability: Lecture 8 (Brand Sustainability) ♻️

### Supplementary Topic Blocks (type: supplementary, Lectures 9–17)

After lecture blocks, add supplementary-divider, then one .topic-block per supplementary note.
Use .topic-eyebrow = "Supplementary" instead of lecture range.
Generate 2–4 subtopics per supplementary note covering key insights.

### Content Depth Requirements (NON-NEGOTIABLE)

- Every subtopic body: minimum 3–5 sentence prose + 2+ section-labels + insight-box
- Explain, don't label: "X is a framework" is insufficient; explain what it does, when to use it, and why it matters
- Include formulas where applicable with full .formula-wrap blocks (variables + intuition)
- Include real examples from case studies (Post-It Note, Slack, Gucci, etc.)
- Use <strong> tags on all key terms, critical distinctions, and decision rules
