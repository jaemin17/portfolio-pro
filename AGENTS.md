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
