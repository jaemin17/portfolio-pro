import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/CopyEmail";
import { EnvelopeMail } from "@/components/EnvelopeMail";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";
import { RevealOnView } from "@/components/RevealOnView";
import { SnapshotMarquee } from "@/components/SnapshotMarquee";
import { isLocale, type Locale } from "@/i18n/config";
import {
  getHomeCopy,
  type CurrentlyBuildingItem,
} from "@/i18n/copy";
import { localePath } from "@/i18n/paths";
import { ToolProjectList } from "./ToolProjectList";
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

function BuildingItem({
  item,
  locale,
  className,
}: {
  item: CurrentlyBuildingItem;
  locale: Locale;
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
        loading="lazy"
        decoding="async"
      />
      <div className={styles.buildingText}>
        <p className={styles.buildingTitle}>{item.title}</p>
        <p className={styles.buildingDescription}>{item.description}</p>
        <p className={styles.buildingMeta}>{item.meta}</p>
      </div>
    </>
  );

  if (item.href?.startsWith("/")) {
    return (
      <Link
        className={`${classes} ${styles.buildingItemLink}`}
        href={localePath(locale, item.href)}
      >
        {content}
      </Link>
    );
  }

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
                    locale={locale}
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
              <ToolProjectList
                className={`${styles.toolList} ${styles.revealItem} ${styles.revealDelay2}`}
                items={copy.toolProjects.items}
                locale={locale}
                loadMoreLabel={copy.toolProjects.loadMore}
              />
            </RevealOnView>
          </section>

          <section
            className={styles.section}
            aria-label={copy.visualProjects.label}
          >
            <RevealOnView className={styles.scrollReveal}>
              <h2
                className={`${styles.sectionLabel} ${styles.revealItem} ${styles.revealDelay1}`}
              >
                {copy.visualProjects.label}
              </h2>
              <ToolProjectList
                className={`${styles.visualList} ${styles.revealItem} ${styles.revealDelay2}`}
                items={copy.visualProjects.items}
                locale={locale}
                loadMoreLabel={copy.visualProjects.loadMore}
                initialCount={3}
                showCaption={false}
              />
            </RevealOnView>
          </section>

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
