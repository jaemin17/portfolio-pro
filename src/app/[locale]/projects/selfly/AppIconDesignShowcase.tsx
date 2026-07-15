import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import styles from "./selfly0.module.css";

const finalVersions = [
  {
    id: "flat",
    src: assetPath("/images/selfly0/icon-design/final-flat.webp"),
    title: "最终方案",
    alt: "Selfly 最终图标：浅色扁平版",
  },
  {
    id: "gradient",
    src: assetPath("/images/selfly0/icon-design/final-gradient.webp"),
    title: "暗黑模式",
    alt: "Selfly 最终图标：暗黑模式版",
  },
] as const;

export function AppIconDesignShowcase() {
  return (
    <figure className={styles.iconDesignShowcase} aria-label="Selfly 应用图标设计演变">
      <div className={styles.iconDesignEvolutionSection}>
        <div className={styles.iconDesignEvolutionBoard}>
          <div className={styles.iconDesignEvolutionGroup}>
            <figure className={styles.iconDesignEvolutionSketch}>
              <Image
                src={assetPath("/images/selfly0/icon-design/draft-01-sketch.webp")}
                alt="Selfly 图标草图：橙色手绘书本与紫色蝴蝶"
                width={200}
                height={200}
                className={styles.iconDesignEvolutionIcon}
              />
              <figcaption className={styles.iconDesignEvolutionIndex}>草图</figcaption>
            </figure>
          </div>

          <span className={styles.iconDesignEvolutionLargeArrow} aria-hidden="true">→</span>

          <div className={`${styles.iconDesignEvolutionGroup} ${styles.iconDesignEvolutionGroupFinal}`}>
            <div className={styles.iconDesignFinalVariants}>
              {finalVersions.map((version) => (
                <figure key={version.id} className={styles.iconDesignEvolutionSketch}>
                  <Image
                    src={version.src}
                    alt={version.alt}
                    width={200}
                    height={200}
                    className={styles.iconDesignEvolutionIcon}
                    priority={version.id === "flat"}
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
