# XR Courseware Implementation Plan

**Goal:** Add a bilingual XR课件 case study following the existing Model Editor layout and connect its homepage card.

**Architecture:** Server-rendered locale route, dedicated content module and CSS module, existing case-study layout classes and local optimized source images. No new interaction library or changes to other project pages.

**Tech Stack:** Next.js 16 App Router, React, TypeScript, CSS Modules, sharp.

Approved design: `docs/xr-courseware-first-design.md`. User requested direct implementation in this checkout.

1. Inspect and download old Webflow screenshots; review a contact sheet and actual selected images. Optimize selected images into `public/images/xr-courseware/` using sharp, preserving source proportions.
2. Add `src/app/[locale]/projects/xr-courseware/content.ts` with Chinese and English copy. Preserve source attribution internally; do not add unverified metrics or invented historical explorations.
3. Add `page.tsx` using async locale params and existing case-study primitives. Render overview, teacher needs, design direction, resource selection, editing layout, model demonstration, headset context and reflection. Add only verified working internal links.
4. Add `xrCourseware.module.css` for purple accents, responsive media, task flows and insight cards. Reuse Model Editor chapter navigation and shared typography.
5. Update both XR Courseware entries in `src/i18n/copy.ts`: add `/projects/xr-courseware`, remove unavailable status and describe lesson creation accurately.
6. Verify locale routes, home card navigation, media loading and chapter anchors in browser; inspect desktop and narrow layouts. Run targeted ESLint, TypeScript and the existing availability regression check. Run production build for static export compatibility.

This is a reversible content/layout addition; use browser validation and existing checks rather than adding implementation-mirroring content tests.
