import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";

type AppIconDesignShowcaseProps = {
  locale?: Locale;
};

const finalVersionSrcs = {
  flat: assetPath("/images/selfly0/icon-design/final-flat.webp"),
  gradient: assetPath("/images/selfly0/icon-design/final-gradient.webp"),
} as const;

const copy = {
  zh: {
    figureLabel: "Selfly 应用图标设计演变",
    sketchAlt: "Selfly 图标草图：橙色手绘书本与紫色蝴蝶",
    sketchCaption: "草图",
    finalVersions: [
      { id: "flat", title: "最终方案", alt: "Selfly 最终图标：浅色扁平版" },
      { id: "gradient", title: "暗黑模式", alt: "Selfly 最终图标：暗黑模式版" },
    ],
  },
  en: {
    figureLabel: "Selfly app icon design evolution",
    sketchAlt: "Selfly icon sketch: hand-drawn orange book and purple butterfly",
    sketchCaption: "Sketch",
    finalVersions: [
      { id: "flat", title: "Final version", alt: "Selfly final icon: light flat version" },
      { id: "gradient", title: "Dark mode", alt: "Selfly final icon: dark mode version" },
    ],
  },
} as const;

export function AppIconDesignShowcase({ locale = "zh" }: AppIconDesignShowcaseProps) {
  const c = copy[locale];

  return (
    <figure className={styles.iconDesignShowcase} aria-label={c.figureLabel}>
      <div className={styles.iconDesignEvolutionSection}>
        <div className={styles.iconDesignEvolutionBoard}>
          <div className={styles.iconDesignEvolutionGroup}>
            <figure className={styles.iconDesignEvolutionSketch}>
              <Image
                src={assetPath("/images/selfly0/icon-design/draft-01-sketch.webp")}
                alt={c.sketchAlt}
                width={200}
                height={200}
                className={styles.iconDesignEvolutionIcon}
              />
              <figcaption className={styles.iconDesignEvolutionIndex}>{c.sketchCaption}</figcaption>
            </figure>
          </div>

          <span className={styles.iconDesignEvolutionLargeArrow} aria-hidden="true">→</span>

          <div className={`${styles.iconDesignEvolutionGroup} ${styles.iconDesignEvolutionGroupFinal}`}>
            <div className={styles.iconDesignFinalVariants}>
              {c.finalVersions.map((version) => (
                <figure key={version.id} className={styles.iconDesignEvolutionSketch}>
                  <Image
                    src={finalVersionSrcs[version.id as keyof typeof finalVersionSrcs]}
                    alt={version.alt}
                    width={200}
                    height={200}
                    className={styles.iconDesignEvolutionIcon}
                  />
                  <figcaption className={styles.iconDesignEvolutionIndex}>{version.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

    </figure>
  );
}
