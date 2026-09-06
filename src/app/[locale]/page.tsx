import { notFound } from "next/navigation";
import Image from "next/image";
import { EnvelopeMail } from "@/components/EnvelopeMail";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";
import { RevealOnView } from "@/components/RevealOnView";
import { SnapshotMarquee } from "@/components/SnapshotMarquee";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { getHomeCopy } from "@/i18n/copy";
import { WorkIndex } from "./WorkIndex";
import styles from "./page.module.css";

const heroPortrait = "/images/snapshots/snapshot-08.webp";

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
          <h1 className={styles.greeting}>
            <span>{copy.greetingHi}</span>
            <span className={styles.portraitWrap}>
              <Image
                className={styles.portrait}
                src={assetPath(heroPortrait)}
                alt="Jiamin Li"
                width={128}
                height={128}
              />
            </span>
            <span>{copy.name}</span>
          </h1>
          <p className={styles.lead}>{copy.lead}</p>
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
