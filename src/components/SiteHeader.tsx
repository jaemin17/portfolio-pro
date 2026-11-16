"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { localeLabels, type Locale } from "@/i18n/config";
import { localePath, switchLocaleInPathname } from "@/i18n/paths";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  locale: Locale;
  preview?: boolean;
};

export function SiteHeader({ locale, preview = false }: SiteHeaderProps) {
  const [previewActive, setPreviewActive] = useState("work");
  const pathname = usePathname();
  const homeHref = localePath(locale, "/");
  const targetLocale: Locale = locale === "zh" ? "en" : "zh";
  const localeHref = switchLocaleInPathname(pathname, targetLocale);

  const normalized = pathname.replace(/\/+$/, "") || "/";
  const isWorkActive = preview ? previewActive === "work" : normalized === `/${locale}`;
  const isAboutActive = preview ? previewActive === "about" : normalized === `/${locale}/about`;
  const Menu = preview ? "div" : "nav";

  const renderItem = ({ id, text, href, className, lang, label, external = false }: {
    id: string; text: string; href: string; className: string;
    lang?: string; label?: string; external?: boolean;
  }) => {
    const attributes = { className, lang, "aria-label": label, "data-tab": id === "locale" ? undefined : id };
    if (preview) {
      return <button {...attributes} type="button" aria-pressed={previewActive === id} onClick={() => setPreviewActive(id)}>{text}</button>;
    }
    return external
      ? <a {...attributes} href={href} target="_blank" rel="noopener noreferrer">{text}</a>
      : <Link {...attributes} href={href}>{text}</Link>;
  };

  return (
    <header className={`${styles.header}${preview ? ` ${styles.preview}` : ""}`}>
      <Menu className={styles.nav} aria-label={preview ? (locale === "zh" ? "站点导航示例" : "Site navigation example") : "Site Menu"} id={preview ? undefined : "site-menu"} role={preview ? "group" : undefined}>
        <span className={styles.bracket} aria-hidden="true">
          [
        </span>
        {renderItem({ id: "work", text: "work", href: homeHref, className: `${styles.tab} ${isWorkActive ? styles.tabActive : ""}` })}
        {renderItem({ id: "about", text: "about", href: localePath(locale, "/about"), className: `${styles.tab} ${isAboutActive ? styles.tabActive : ""}` })}
        {renderItem({ id: "resume", text: "resume", href: "https://drive.google.com/file/d/1ixfK3WGaswqJQ_xjclbjdxqZvugWPGaf/view", className: `${styles.tab} ${preview && previewActive === "resume" ? styles.tabActive : ""}`, external: true })}
        {renderItem({ id: "locale", text: localeLabels[targetLocale], href: localeHref, className: `${styles.tab} ${styles.tabLocale}`, lang: targetLocale, label: targetLocale === "en" ? "Switch to English" : "切换到中文" })}
        <span className={styles.bracket} aria-hidden="true">
          ]
        </span>
      </Menu>
    </header>
  );
}
