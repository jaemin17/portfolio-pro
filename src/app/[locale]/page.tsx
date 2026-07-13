import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/CopyEmail";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";
import { RevealOnView } from "@/components/RevealOnView";
import { isLocale, type Locale } from "@/i18n/config";
import {
  getHomeCopy,
  type CurrentlyBuildingItem,
  type ToolProjectItem,
} from "@/i18n/copy";
import styles from "./page.module.css";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

const revealDelays = [
  styles.revealDelay1,
  styles.revealDelay2,
  styles.revealDelay3,
  styles.revealDelay4,
] as const;

function assetSrc(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}

function Section({
  label,
  empty,
}: {
  label: string;
  empty: string;
}) {
  return (
    <section className={styles.section}>
      <RevealOnView className={styles.scrollReveal}>
        <h2
          className={`${styles.sectionLabel} ${styles.revealItem} ${styles.revealDelay1}`}
        >
          {label}
        </h2>
        <p
          className={`${styles.emptyNote} ${styles.revealItem} ${styles.revealDelay2}`}
        >
          {empty}
        </p>
      </RevealOnView>
    </section>
  );
}

function ToolProjectCard({
  item,
  className,
}: {
  item: ToolProjectItem;
  className?: string;
}) {
  const classes = [styles.toolCard, className].filter(Boolean).join(" ");

  return (
    <article className={classes}>
      <div
        className={styles.toolFrame}
        style={
          item.frameColor
            ? { backgroundColor: item.frameColor }
            : undefined
        }
      >
        <video
          className={styles.toolVideo}
          src={assetSrc(item.videoSrc)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={item.title}
        />
      </div>
      <div className={styles.toolCaption}>
        <p className={styles.toolTitle}>{item.title}</p>
        <p className={styles.toolDescription}>{item.description}</p>
      </div>
    </article>
  );
}

function BuildingItem({
  item,
  className,
}: {
  item: CurrentlyBuildingItem;
  className?: string;
}) {
  const classes = [styles.buildingItem, className].filter(Boolean).join(" ");

  const content = (
    <>
      <img
        className={styles.buildingIcon}
        src={assetSrc(item.iconSrc)}
        alt={item.iconAlt}
        width={72}
        height={72}
      />
      <div className={styles.buildingText}>
        <p className={styles.buildingTitle}>{item.title}</p>
        <p className={styles.buildingDescription}>{item.description}</p>
        <p className={styles.buildingMeta}>{item.meta}</p>
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        className={`${classes} ${styles.buildingItemLink}`}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
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
            <RevealOnView className={styles.scrollReveal}>
              <h2
                className={`${styles.sectionLabel} ${styles.revealItem} ${styles.revealDelay1}`}
              >
                {copy.currentlyBuilding.label}
              </h2>
              <div className={styles.buildingList}>
                {copy.currentlyBuilding.items.map((item, index) => (
                  <BuildingItem
                    key={item.title}
                    item={item}
                    className={`${styles.revealItem} ${revealDelays[index + 1] ?? styles.revealDelay4}`}
                  />
                ))}
              </div>
            </RevealOnView>
          </section>

          <section
            className={styles.section}
            aria-label={copy.toolProjects.label}
          >
            <RevealOnView className={styles.scrollReveal}>
              <h2
                className={`${styles.sectionLabel} ${styles.revealItem} ${styles.revealDelay1}`}
              >
                {copy.toolProjects.label}
              </h2>
              <div className={styles.toolList}>
                {copy.toolProjects.items.map((item, index) => (
                  <ToolProjectCard
                    key={item.title}
                    item={item}
                    className={`${styles.revealItem} ${revealDelays[Math.min(index + 1, 3)]}`}
                  />
                ))}
              </div>
            </RevealOnView>
          </section>

          <Section label={copy.caseStudies.label} empty={copy.caseStudies.empty} />
          <Section label={copy.about.label} empty={copy.about.empty} />

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
