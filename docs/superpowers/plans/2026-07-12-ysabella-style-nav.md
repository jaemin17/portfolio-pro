# Ysabella-style Nav Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a centered Ysabella-style bracket nav `[ work  about  resume  EN/中文 ]` globally, with work linking home, about/resume disabled, and a single target-locale toggle.

**Architecture:** Refactor unused `SiteHeader` into a client nav (needs `usePathname` for active + locale switch). Mount it in `[locale]/layout.tsx`. Remove the footer `LocaleSwitcher`. Keep `LocaleSwitcher` file if unused, or delete once nothing imports it.

**Tech Stack:** Next.js App Router, React 19, CSS Modules, existing i18n helpers (`localePath`, `switchLocaleInPathname`, `localeLabels`).

**Spec:** `docs/superpowers/specs/2026-07-12-ysabella-style-nav-design.md`

---

## File map

| File | Responsibility |
|------|----------------|
| `src/components/SiteHeader.tsx` | Bracket nav markup + target locale link |
| `src/components/SiteHeader.module.css` | Centered transparent nav styles |
| `src/app/[locale]/layout.tsx` | Mount header above children |
| `src/app/[locale]/page.tsx` | Drop footer LocaleSwitcher |
| `src/components/LocaleSwitcher.tsx` (+ CSS) | Delete if unused after footer removal |

---

### Task 1: Rewrite SiteHeader markup + styles

**Files:**
- Modify: `src/components/SiteHeader.tsx`
- Modify: `src/components/SiteHeader.module.css`

- [x] **Step 1: Replace `SiteHeader.tsx` with client bracket nav**

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, type Locale } from "@/i18n/config";
import { localePath, switchLocaleInPathname } from "@/i18n/paths";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const homeHref = localePath(locale, "/");
  const targetLocale: Locale = locale === "zh" ? "en" : "zh";
  const localeHref = switchLocaleInPathname(pathname, targetLocale);

  const normalized = pathname.replace(/\/+$/, "") || "/";
  const isWorkActive =
    normalized === `/${locale}` || normalized === `/${locale}/`;

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Site Menu" id="site-menu">
        <span className={styles.bracket} aria-hidden="true">
          [
        </span>
        <Link
          className={`${styles.tab} ${isWorkActive ? styles.tabActive : ""}`}
          href={homeHref}
          data-tab="work"
        >
          work
        </Link>
        <span className={`${styles.tab} ${styles.tabDisabled}`} aria-disabled="true">
          about
        </span>
        <span className={`${styles.tab} ${styles.tabDisabled}`} aria-disabled="true">
          resume
        </span>
        <Link
          className={styles.tab}
          href={localeHref}
          lang={targetLocale}
          aria-label={
            targetLocale === "en" ? "Switch to English" : "切换到中文"
          }
        >
          {localeLabels[targetLocale]}
        </Link>
        <span className={styles.bracket} aria-hidden="true">
          ]
        </span>
      </nav>
    </header>
  );
}
```

- [x] **Step 2: Replace `SiteHeader.module.css`**

```css
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 1.2rem var(--page-gutter) 0;
  pointer-events: none;
  background: transparent;
}

.nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  pointer-events: auto;
}

.bracket,
.tab {
  display: flex;
  align-items: center;
  padding: 0.7rem 0.95rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.94rem;
  font-weight: 400;
  line-height: 1;
  color: var(--text-muted);
  text-decoration: none;
  user-select: none;
}

.tab:hover {
  color: var(--text-primary);
}

.tabActive {
  color: var(--text-primary);
}

.tabDisabled {
  cursor: default;
  pointer-events: none;
}

.tabDisabled:hover {
  color: var(--text-muted);
}
```

- [x] **Step 3: Visual check against acceptance (manual after mount)**

Expected: centered `[ work about resume EN ]` on `/zh/`, monospace, no solid bar.

---

### Task 2: Mount header globally; remove footer switcher

**Files:**
- Modify: `src/app/[locale]/layout.tsx`
- Modify: `src/app/[locale]/page.tsx`
- Delete if unused: `src/components/LocaleSwitcher.tsx`, `src/components/LocaleSwitcher.module.css`

- [x] **Step 1: Mount SiteHeader in locale layout**

```tsx
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;

  return (
    <div lang={locale}>
      <SiteHeader locale={locale} />
      {children}
    </div>
  );
}
```

- [x] **Step 2: Remove LocaleSwitcher from home footer**

In `src/app/[locale]/page.tsx`:
- Remove `LocaleSwitcher` import
- Footer becomes only the role paragraph:

```tsx
<footer className={styles.footer}>
  <p className={styles.footerRole}>{copy.footerRole}</p>
</footer>
```

- [x] **Step 3: Delete unused LocaleSwitcher files if nothing imports them**

```bash
rg "LocaleSwitcher" src
```

If only the component files match, delete:
- `src/components/LocaleSwitcher.tsx`
- `src/components/LocaleSwitcher.module.css`

- [x] **Step 4: Verify build**

```bash
npm run build
```

Expected: success, no TypeScript/import errors.

- [x] **Step 5: Browser check**

- `/zh/` shows `[ work  about  resume  EN ]`, work active (darker)
- Click EN → `/en/`, nav shows `中文`
- about/resume not clickable
- No footer language control

---

## Spec coverage

| Spec item | Task |
|-----------|------|
| Always English lowercase labels | Task 1 |
| Target-only locale label | Task 1 |
| work → home, about/resume disabled | Task 1 |
| Mount in locale layout | Task 2 |
| Remove footer switcher | Task 2 |
| No solid header bar / transparent | Task 1 CSS |
| No about/resume routes | (out of scope — none created) |

**Note:** Plan skips automated tests — repo has no test runner. Verification is `npm run build` + manual browser check. Commits only when the user asks.
