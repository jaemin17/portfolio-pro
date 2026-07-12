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
  const isWorkActive = normalized === `/${locale}`;

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
          className={`${styles.tab} ${styles.tabLocale}`}
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
