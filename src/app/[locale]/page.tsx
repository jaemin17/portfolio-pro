import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, type Locale } from "@/i18n/config";
import { getHomeCopy } from "@/i18n/copy";
import styles from "./page.module.css";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const copy = getHomeCopy(locale);

  return (
    <div className={styles.shell}>
      <SiteHeader locale={locale} />
      <main className={styles.main}>
        <p className={styles.eyebrow}>{copy.siteTitle}</p>
        <h1 className={styles.title}>{copy.placeholder}</h1>
        <p className={styles.subtitle}>{copy.subtitle}</p>
      </main>
    </div>
  );
}
