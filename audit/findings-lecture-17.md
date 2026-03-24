# Audit Findings: Supplementary Reading: Product Concept Selection Methods

## Formulas Checked
- `Total Score (Concept j) = Σ [ Weight(i) × Rating(i, j) ]`: FLAGGED — Formula does not appear anywhere in the source. The source (a single-page list) contains no equations, variables, or quantitative expressions. This formula is plausible and mathematically standard, but it is constructed content, not sourced content.
- `Net Score (Concept j) = (Count of '+' ratings for j) – (Count of '–' ratings for j)`: FLAGGED — Same issue. The source describes the Concept Screening Matrix as using "+/0/–" ratings but states no formula for computing a net score. The formula is a reasonable inference but cannot be verified against this source document.

## Missing Glossary Terms
- None of the glossary terms in the study note are explicitly defined in the source. The source is a single-page enumerated list that names each method and provides one-to-two sentence descriptions. No bolded sub-terms, no section headings beyond the document title, and no defined vocabulary beyond the 10 method names themselves appear. The study note's extended glossary terms (Datum, Dominance Effect, Groupthink, Net Score, Pugh Matrix, Sensitivity Analysis, Weighted Score) are absent from the source — they are elaborations added by the note author, not omissions of source-defined terms. Since the source defines no glossary terms independently of the 10 method names, there are no missing terms to flag.

## Spot-Check Claims
- Claim 1 (ten recognized concept selection methods): VERIFIED — The source document is an explicitly numbered list of exactly 10 methods (items 1 through 10), consistent with the study note's statement "There are ten recognized concept selection methods."
- Claim 2 (briefest definition — Datum): FLAGGED — The study note defines "Datum" as "The reference concept used as the baseline in a Concept Screening Matrix." The source never uses the word "datum." Item 9 (Concept Screening Matrix) references "a reference" but does not name this element or define it as a term. The definition is reasonable but is not sourced from this document.
- Claim 3 (Secret Ballot directly addresses Open Multi Voting bias): FLAGGED — The study note states "Secret Ballot Voting directly addresses the bias vulnerability of Open Multi Voting." The source describes these as two separate items with no explicit relational language between them. Item 1 notes open multi voting is "prone to groupthink and dominance effects"; item 2 notes secret ballot "reduces social pressure and hierarchy bias." The relationship is an inference drawn by the note author, not a stated claim in the source.

## Suggested Corrections

**Weighted Score Formula**
Location: Formulas & Quantitative Tools — Concept Scoring Matrix — Weighted Score Calculation
Current: "Total Score (Concept j) = Σ [ Weight(i) × Rating(i, j) ]"
Correction: Add a source caveat or attribution note: this formula is a standard operations-management formulation that is consistent with the source's description of the Concept Scoring Matrix but does not appear verbatim in the source document. If the formula is drawn from a different source (e.g., the lecture slides or a textbook), cite that source explicitly. If it is the note author's formalization, label it as such.
Source: lect 3_Product concept selection methods.pdf, page 1 (formula absent)

**Net Score Formula**
Location: Formulas & Quantitative Tools — Concept Screening Net Score
Current: "Net Score (Concept j) = (Count of '+' ratings for j) – (Count of '–' ratings for j)"
Correction: Same as above — this formula is a reasonable formalization of the +/0/– mechanics described in the source but does not appear in the source. Add a note that this is an inferred formalization, or cite the originating reference (e.g., Pugh's original work or the lecture slides).
Source: lect 3_Product concept selection methods.pdf, page 1 (formula absent)

**Datum Definition**
Location: Key Terms and Definitions Glossary — Datum
Current: "The reference concept used as the baseline in a Concept Screening Matrix; all other concepts are rated as better (+), the same (0), or worse (–) than the datum on each criterion."
Correction: The term "datum" does not appear in this source. The source says "compared against a reference." If the term "datum" is introduced in another source (e.g., lecture slides or Pugh's original methodology), cite that source. If this is the note author's terminology, note that the source uses "reference" rather than "datum."
Source: lect 3_Product concept selection methods.pdf, page 1, item 9

**Secret Ballot — Open Multi Voting Relationship Claim**
Location: Key Concepts — Secret Ballot Voting — Relationships
Current: "Directly addresses the bias vulnerability of Open Multi Voting."
Correction: This relationship is an inference not stated in the source. The source lists the two methods independently without explicitly linking them. The claim is defensible but should be framed as an analytical inference ("can be seen as addressing...") rather than a source-verified fact, unless a different source explicitly states the relationship.
Source: lect 3_Product concept selection methods.pdf, page 1, items 1 and 2
