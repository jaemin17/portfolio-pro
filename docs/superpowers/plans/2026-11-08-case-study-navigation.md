# Shared case-study navigation implementation plan

**Goal:** Reuse the Model Editor reading navigation across long portfolio cases.

**Architecture:** A server-rendered CaseStudyLayout contains a small client-side CaseStudyNav. Each page supplies localized labels and stable anchor IDs. Preserve existing case content and the narrow sticky desktop rail; hide the rail below 769px.

**Tech stack:** Next.js App Router, React, TypeScript, CSS Modules.

- [x] Extract navigation and its two-column layout into shared components; replace the Model Editor and XR Courseware wrappers.
- [x] Add Selfly anchors for overview, structure, Today, Explore, Review, icon, launch, reflection. Keep related examples within the same reading chapter.
- [x] Add VR anchors for overview, spatial design, UI system, manufacturing, biomedical, app icons.
- [x] Derive the current chapter from all anchor positions on scroll, including long gaps and the final section near the page bottom. Retain native links and keyboard navigation.
- [x] Verify real link targets, click navigation, reverse scrolling, one active chapter, both languages, and the mobile layout in the existing browser tab.
- [x] Run a production build and whitespace checks. Leave the changes available for review without committing.

Validation: all 50 localized links across the four cases resolve; each page has exactly one active chapter. Verified Selfly forward/backward navigation and the short final chapter, plus nested VR chapters. All four Chinese mobile pages hide the rail and have no horizontal overflow at 390px. Changed TSX files pass ESLint; production build and whitespace checks pass.

Review update: Selfly now presents five main entries: overview (including product structure), UX design (Today / Explore / Review), app icon, launch, reflection. All existing subsection anchors and headings remain. Verified both localized menus, click-to-Today, and Review continuing to highlight UX design. ESLint and whitespace checks pass for this refinement.
