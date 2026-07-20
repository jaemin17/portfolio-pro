import { assetPath } from "@/i18n/assets";
import type { Locale } from "@/i18n/config";
import type { VisualShot } from "./animalVrAssets";
import { VisualSceneCarousel } from "./VisualSceneCarousel";
import styles from "./biomedicalVr.module.css";

type VisualSceneBlockProps = {
  shot: VisualShot;
  locale: Locale;
};

function shotLabel(shot: VisualShot, locale: Locale): string {
  const title = locale === "en" ? shot.title.en : shot.title.zh;
  const subtitle = locale === "en" ? shot.subtitle.en : shot.subtitle.zh;
  return `${title} — ${subtitle}`;
}

export function VisualSceneBlock({ shot, locale }: VisualSceneBlockProps) {
  const label = shotLabel(shot, locale);
  const title = locale === "en" ? shot.title.en : shot.title.zh;
  const subtitle = locale === "en" ? shot.subtitle.en : shot.subtitle.zh;
  const images = shot.carousel ?? [shot.src];

  return (
    <figure className={styles.sceneBlock}>
      <figcaption className={styles.sceneTitle}>
        {title}
        <span className={styles.sceneTitleAccent}> — {subtitle}</span>
      </figcaption>
      {images.length > 1 ? (
        <VisualSceneCarousel images={images} alt={label} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- static export
        <img
          className={`${styles.mediaBorder} ${styles.evidenceImage}`}
          src={assetPath(shot.src)}
          alt={label}
          loading="lazy"
          decoding="async"
        />
      )}
    </figure>
  );
}
