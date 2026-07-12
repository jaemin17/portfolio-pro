import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/CopyEmail";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";
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
          <h1 className={styles.name}>
            <span className={styles.wave} aria-hidden="true">
              👋
            </span>
            {"\u00A0\u00A0"}
            {copy.name}
          </h1>
          <p className={styles.lead}>{copy.lead}</p>
          <p className={styles.body}>{copy.focus}</p>
          <CopyEmail
            email={copy.email}
            copyLabel={copy.copyEmail}
            copiedLabel={copy.copiedEmail}
          />
        </section>

        <div className={styles.contentShell}>
          <section className={styles.section} aria-label={copy.currentlyBuilding.label}>
            <h2 className={styles.sectionLabel}>{copy.currentlyBuilding.label}</h2>
            <div className={styles.buildingItem}>
              <img
                className={styles.buildingIcon}
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${copy.currentlyBuilding.iconSrc}`}
                alt={copy.currentlyBuilding.iconAlt}
                width={72}
                height={72}
              />
              <div className={styles.buildingText}>
                <p className={styles.buildingTitle}>{copy.currentlyBuilding.title}</p>
                <p className={styles.buildingDescription}>
                  {copy.currentlyBuilding.description}
                </p>
                <p className={styles.buildingMeta}>{copy.currentlyBuilding.meta}</p>
              </div>
            </div>
          </section>

          <Section label={copy.selectedWork.label} empty={copy.selectedWork.empty} />
          <Section label={copy.caseStudies.label} empty={copy.caseStudies.empty} />
          <Section label={copy.about.label} empty={copy.about.empty} />

          <footer className={styles.footer}>
            <p className={styles.footerRole}>{copy.footerRole}</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
