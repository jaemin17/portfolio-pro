# Personal Tools Collection Implementation Plan

**Goal:** Merge Sticky Notes, Next and T-Day into one homepage entry and a minimal bilingual collection page.

**Architecture:** Reuse the current screenshot assets and locale routing. Keep the collection as a server-rendered page with native external links. Render the homepage cover from the three existing screenshots with CSS.

**Tech Stack:** Next.js 16 App Router, React, TypeScript, CSS Modules.

The user approved the design and implementation in chat. Execute inline on the existing redesign branch. No new dependencies or automated tests for this reversible presentation change.

- [x] Replace individual tools in both homepage locales and category lists with one internal collection link.
- [x] Restore `/[locale]/projects/personal-tools/` with a title, short introduction and three screenshot cards; each card opens its original product in a new tab.
- [x] Add responsive three-column/one-column styling, visible keyboard focus and restrained hover feedback.
- [x] Verify Chinese and English routes, homepage filters, image loading, link destinations and narrow-screen layout; run scoped lint and production build, reporting unrelated existing failures separately.

Verification: Chinese and English homepage/collection rendered; personal and product filters show one collection entry; all three screenshots loaded; external links use `_blank` and `noopener noreferrer`; 390px layout is one column without overflow. Scoped ESLint: no errors, one pre-existing image warning in ToolProjectList. Production compilation succeeded; type checking remains blocked by the existing model-editor/page.tsx:189 ReactNode/string alt error.
