import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/CopyEmail";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { isLocale, type Locale } from "@/i18n/config";
import { getHomeCopy } from "@/i18n/copy";
import styles from "./page.module.css";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

function Section({
  label,
  empty,
}: {
  label: string;
  empty: string;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      <p className={styles.emptyNote}>{empty}</p>
    </section>
  );
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const copy = getHomeCopy(locale);

  return (
    <div className={styles.page}>
      <div className={styles.heroBand} aria-hidden="true">
        <HeroShaderBackground />
      </div>

      <main className={styles.main}>
        <section className={styles.hero} aria-label="Intro">
          <h1 className={styles.name}>{copy.name}</h1>
          <p className={styles.lead}>{copy.lead}</p>
          <p className={styles.body}>{copy.body}</p>
          <CopyEmail
            email={copy.email}
            copyLabel={copy.copyEmail}
            copiedLabel={copy.copiedEmail}
          />
        </section>

        <div className={styles.contentShell}>
          <Section label={copy.selectedWork.label} empty={copy.selectedWork.empty} />
          <Section label={copy.caseStudies.label} empty={copy.caseStudies.empty} />
          <Section label={copy.about.label} empty={copy.about.empty} />

          <footer className={styles.footer}>
            <p className={styles.footerRole}>{copy.footerRole}</p>
            <LocaleSwitcher locale={locale} />
          </footer>
        </div>
      </main>
    </div>
  );
}
