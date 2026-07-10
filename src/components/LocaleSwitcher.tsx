"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { switchLocaleInPathname } from "@/i18n/paths";
import styles from "./LocaleSwitcher.module.css";

type LocaleSwitcherProps = {
  locale: Locale;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className={styles.switcher} role="group" aria-label="Language">
      {locales.map((target) => {
        const href = switchLocaleInPathname(pathname, target);
        const isActive = target === locale;

        return (
          <Link
            key={target}
            className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
            href={href}
            aria-current={isActive ? "page" : undefined}
            lang={target}
          >
            {localeLabels[target]}
          </Link>
        );
      })}
    </div>
  );
}
