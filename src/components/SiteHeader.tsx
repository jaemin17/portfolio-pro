import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { LocaleSwitcher } from "./LocaleSwitcher";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const homeHref = localePath(locale, "/");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href={homeHref}>
          Jiamin Li
        </Link>
        <LocaleSwitcher locale={locale} />
      </div>
    </header>
  );
}
