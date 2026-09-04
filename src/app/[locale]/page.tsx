import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/CopyEmail";
import { EnvelopeMail } from "@/components/EnvelopeMail";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";
import { RevealOnView } from "@/components/RevealOnView";
import { SnapshotMarquee } from "@/components/SnapshotMarquee";
import { isLocale, type Locale } from "@/i18n/config";
import { getHomeCopy } from "@/i18n/copy";
import { WorkIndex } from "./WorkIndex";
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
          <RevealOnView className={styles.scrollReveal}>
            <WorkIndex
              className={`${styles.workIndex} ${styles.revealItem} ${styles.revealDelay1}`}
              label={copy.workIndex.label}
              items={copy.workIndex.items}
              buildingProjects={copy.currentlyBuilding}
              toolProjects={copy.toolProjects}
              visualProjects={copy.visualProjects}
              locale={locale}
            />
          </RevealOnView>

          <SnapshotMarquee items={copy.snapshots.items} />

          <RevealOnView className={styles.scrollReveal}>
            <div className={`${styles.revealItem} ${styles.revealDelay1}`}>
              <EnvelopeMail
                locale={locale}
                copy={{
                  ...copy.envelopeMail,
                  email: copy.email,
                }}
              />
            </div>
          </RevealOnView>

          <RevealOnView className={styles.scrollReveal}>
            <footer className={`${styles.footer} ${styles.revealItem} ${styles.revealDelay1}`}>
              <p className={styles.footerRole}>{copy.footerRole}</p>
            </footer>
          </RevealOnView>
        </div>
      </main>
    </div>
  );
}
