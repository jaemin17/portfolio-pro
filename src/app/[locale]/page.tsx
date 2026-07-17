import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyEmail } from "@/components/CopyEmail";
import { HeroShaderBackground } from "@/components/HeroShaderBackground";
import { LazyVideo } from "@/components/LazyVideo";
import { RevealOnView } from "@/components/RevealOnView";
import { SnapshotMarquee } from "@/components/SnapshotMarquee";
import { isLocale, type Locale } from "@/i18n/config";
import {
  getHomeCopy,
  type CurrentlyBuildingItem,
  type ToolProjectItem,
} from "@/i18n/copy";
import { localePath } from "@/i18n/paths";
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

function ToolProjectCard({
  item,
  locale,
  className,
  showCaption = true,
}: {
  item: ToolProjectItem;
  locale: Locale;
  className?: string;
  showCaption?: boolean;
}) {
  const classes = [styles.toolCard, className].filter(Boolean).join(" ");
  const framed = item.framed !== false;
  const frameClass = framed
    ? styles.toolFrame
    : `${styles.toolFrame} ${styles.toolFrameBare}`;

  const media = item.videoSrc && item.posterSrc ? (
    <LazyVideo
      className={styles.toolVideo}
      src={assetSrc(item.videoSrc)}
      posterSrc={assetSrc(item.posterSrc)}
      label={item.title}
    />
  ) : item.imageSrc ? (
    <img
      className={styles.toolVideo}
      src={assetSrc(item.imageSrc)}
      srcSet={item.imageVariants
        ?.map((variant) => `${assetSrc(variant.src)} ${variant.width}w`)
        .join(", ")}
      sizes={item.imageVariants ? "(max-width: 480px) 100vw, 416px" : undefined}
      alt={item.title}
      loading="lazy"
      decoding="async"
    />
  ) : null;

  const cardBody = (
    <div
      className={frameClass}
      style={
        framed && item.frameColor
          ? { backgroundColor: item.frameColor }
          : undefined
      }
    >
      {media}
    </div>
  );

  return (
    <article className={classes}>
      {item.href?.startsWith("/") ? (
        <Link href={localePath(locale, item.href)} className={styles.toolCardLink}>
          {cardBody}
        </Link>
      ) : item.href ? (
        <a
          className={styles.toolCardLink}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardBody}
        </a>
      ) : (
        cardBody
      )}
      {showCaption ? (
        <div className={styles.toolCaption}>
          <p className={styles.toolTitle}>{item.title}</p>
        </div>
      ) : null}
    </article>
  );
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
              <div className={styles.toolList}>
                {copy.toolProjects.items.map((item, index) => (
                  <ToolProjectCard
                    key={item.title}
                    item={item}
                    locale={locale}
                    className={`${styles.revealItem} ${revealDelays[Math.min(index + 1, 3)]}`}
                  />
                ))}
              </div>
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
              <div className={styles.visualList}>
                {copy.visualProjects.items.map((item, index) => (
                  <ToolProjectCard
                    key={item.title}
                    item={item}
                    locale={locale}
                    showCaption={false}
                    className={`${styles.revealItem} ${revealDelays[Math.min(index + 1, 3)]}`}
                  />
                ))}
              </div>
            </RevealOnView>
          </section>

          <SnapshotMarquee items={copy.snapshots.items} />

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
