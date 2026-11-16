<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Always Open Local Preview First

At the start of every user request in this project, before code search,
analysis, planning, or edits, open the local preview in the Codex/GPT in-app
browser.

Use the Codex/GPT in-app browser by default. Do not use Chrome, Safari, or any
external system browser unless the user explicitly asks for that browser.
Preserve the current Codex/GPT app layout while doing this. Reuse the existing
in-app browser tab whenever possible. Do not create extra tabs, detach the
browser, open floating panels, or otherwise change the browser docking/layout
state unless the user explicitly asks for that UI change.

Use `http://localhost:3000` as the default local preview URL. If the user
mentions a specific route or the task clearly maps to one, open that route
directly, for example `http://localhost:3000/zh/projects/vr-education/`.
If the route is unclear, open `http://localhost:3000`.

Required startup sequence for every request:

1. Check whether `http://localhost:3000` is responding.
2. If it is not responding, start the dev server with `pnpm dev`.
3. Open the relevant local URL in the existing Codex/GPT in-app browser tab and
   keep the current browser docking/layout state unchanged.
4. Confirm the loaded URL before proceeding.
5. Only after the local page is open, inspect files, analyze feasibility, explain
   the likely approach, and make code changes.

Do not treat this as optional. Do not replace browser opening with only a
terminal-only code inspection, lint run, build run, or file search.
If no existing in-app browser tab can be reused without changing the UI state,
stop and tell the user instead of automatically creating a new tab or floating
window.

## Career and Portfolio Context

For career, portfolio positioning, resume, interview, or design critique
discussions, consider reading `CAREER_POSITIONING.md` for user context. This is
optional context for relevant advisory conversations, not a requirement for
ordinary coding, debugging, or implementation tasks.

## Visual Guidelines

Use [docs/visual-guidelines.md](docs/visual-guidelines.md) for established shared
visual rules. Preview them at `http://localhost:3000/zh/style-guide/` or
`http://localhost:3000/en/style-guide/`.

Check every current consumer before changing shared styles. Apply rules within
their documented scope and preserve documented project or content-role
exceptions. Keep candidate decisions in
[docs/visual-guidelines-candidates.md](docs/visual-guidelines-candidates.md), and
record page checks, exceptions, and remaining work in
[docs/visual-alignment.md](docs/visual-alignment.md). Do not put migration status
or source-page links on the public guidelines page. Existing compliant styles
stay unchanged; record unresolved differences before proposing new rules.

Use `src/components/CaseDesignList.tsx` for ordinary case-study design explanation
lists. Preserve local heading, emphasis, marker, mobile-size, and indent rules.
Show shared components as real instances in the dedicated Components chapter of
the visual guidelines page, with its own table-of-contents entry, so examples
and case pages use the same implementation.

Use `src/components/SectionNav.tsx` for section menus, including the guide menu.
Its shared type size is 16px. Page wrappers own sticky positioning, spacing
exceptions, and narrow-screen visibility; preserve those documented roles.
