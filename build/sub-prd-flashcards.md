# Sub-PRD: Flashcards Page

**Target file:** site/flashcards.html
**Template source:** C:\Users\Conno\OneDrive\Documents\GitHub\study-site-builder\templates\page-templates\flashcards.html
**Content sources:** site/data/flashcards.json (already written)

## Placeholder Mappings

| Placeholder | Source | Transformation |
|-------------|--------|----------------|
| {{SITE_NAME}} | Course name | "MKT 3717 — Product & Brand Management" |
| {{THEME_CSS}} | Design spec | "css/theme.css" |
| {{FLASHCARD_DATA_PATH}} | Data path | "data/flashcards.json" |
| {{NAV_JS}} | shared-js | "js/nav.js" |
| {{FLASHCARDS_JS}} | shared-js | "js/flashcards.js" |

## Notes
This page is mostly template-driven. The flashcards.js script handles all interactivity by loading data/flashcards.json. No content transformation needed beyond placeholder replacement.
