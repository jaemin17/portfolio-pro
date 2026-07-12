# Ysabella-style Site Navigation

Date: 2026-07-12  
Status: Approved for planning

## Goal

Replace the unused brand header pattern with a Ysabella-inspired centered bracket nav: `[ work  about  resume  EN/中文 ]`. Mount it globally. Keep about/resume non-navigable for now.

## Decisions

| Topic | Choice |
|-------|--------|
| Nav label language | Always English lowercase (`work`, `about`, `resume`) |
| Locale control | Show only the *target* language (`EN` on zh pages, `中文` on en pages) |
| Implementation | Extend `SiteHeader`, mount in `[locale]/layout` |
| Footer locale switcher | Remove (avoid duplicate controls) |

## Structure

```
header
  nav#site-menu [aria-label="Site Menu"]
    span "["
    a.work → localePath(locale, "/")   // active on home
    span.about (disabled)
    span.resume (disabled)
    a.locale → switchLocaleInPathname(...)  // single target link
    span "]"
```

## Behavior

- **work**: `Link` to `/{locale}/`. Active when pathname is the locale home. Active uses darker foreground; inactive tabs use muted gray.
- **about / resume**: Non-interactive (`span` + `aria-disabled="true"`). Same muted style as inactive tabs. No `href`, no pointer cursor change toward clickable.
- **locale**: One `Link` to the other locale, preserving path via existing `switchLocaleInPathname`. Label from `localeLabels[target]`.
- No new routes for about/resume in this change.

## Visual style

- Centered absolutely (or sticky-equivalent) at top of the page, over content — no full-width bar, no bottom border, no card chrome.
- Monospace caption type (prefer existing stack; add a mono face only if needed for the Ysabella look).
- Square brackets as text siblings with the same tab padding as links.
- Hover on interactive tabs: slightly stronger color (existing `--accent` or darker foreground). Disabled items do not respond to hover.
- Transparent background so the hero shader remains visible behind the nav.

## Files to change

| File | Change |
|------|--------|
| `src/components/SiteHeader.tsx` | Bracket nav markup; drop brand link |
| `src/components/SiteHeader.module.css` | Centered bracket/tab styles |
| `src/components/LocaleSwitcher.tsx` (+ CSS) | Unmount from footer; keep file for now (unused) or delete if nothing imports it after this change |
| `src/app/[locale]/layout.tsx` | Render `<SiteHeader locale={locale} />` above `{children}` |
| `src/app/[locale]/page.tsx` | Remove footer `LocaleSwitcher` |

Locale toggle is implemented **inline in `SiteHeader`** as a single target `Link` (not a `LocaleSwitcher` variant), so the bracket row stays one component.

Out of scope: about/resume pages, dark mode toggle, footer redesign beyond removing the switcher.

## Acceptance

1. On `/zh/` and `/en/`, centered nav reads `[ work  about  resume  EN ]` or `[ work  about  resume  中文 ]` respectively.
2. Clicking `work` stays on / returns to home for that locale.
3. `about` and `resume` are not links and do not navigate.
4. Locale control switches zh ↔ en and preserves path.
5. Footer no longer shows a language switcher.
6. Nav does not introduce a solid header bar that blocks the hero.

## Non-goals

- Translating nav labels with locale
- Showing both `中文` and `EN` at once
- Implementing about/resume destinations
