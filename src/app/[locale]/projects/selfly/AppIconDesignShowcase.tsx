import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import styles from "./selfly0.module.css";

const finalVersions = [
  {
    id: "flat",
    src: assetPath("/images/selfly0/icon-design/final-flat.webp"),
    title: "浅色扁平版",
    detail: "白底高对比，适合 App Store 展示",
    alt: "Selfly 最终图标：浅色扁平版",
  },
  {
    id: "gradient",
    src: assetPath("/images/selfly0/icon-design/final-gradient.webp"),
    title: "暗黑模式版",
    detail: "深色底高对比，适配暗黑模式",
    alt: "Selfly 最终图标：暗黑模式版",
  },
] as const;

export function AppIconDesignShowcase() {
  return (
    <figure className={styles.iconDesignShowcase} aria-label="Selfly 应用图标设计演变">
      <div className={styles.iconDesignEvolutionSection}>
        <div className={styles.iconDesignEvolutionBoard}>
          {/* Row 1 — images + arrow */}
          <figure className={styles.iconDesignEvolutionSketch}>
            <Image
              src={assetPath("/images/selfly0/icon-design/draft-01-sketch.webp")}
              alt="Selfly 图标草图：橙色手绘书本与紫色蝴蝶"
              width={200}
              height={200}
              className={styles.iconDesignEvolutionIcon}
            />
          </figure>

          <span className={styles.iconDesignEvolutionArrow} aria-hidden="true">→</span>

          <figure className={styles.iconDesignEvolutionSketch}>
            <Image
              src={finalVersions[0].src}
              alt={finalVersions[0].alt}
              width={200}
              height={200}
              className={styles.iconDesignEvolutionIcon}
              priority
            />
          </figure>

          {/* Row 2 — notes (same 3-column order: note, empty, note) */}
          <div className={styles.iconDesignEvolutionNote}>
            <span className={styles.iconDesignEvolutionIndex}>草图捕捉第一直觉</span>
          </div>

          <span aria-hidden="true" />

          <div className={styles.iconDesignEvolutionNote}>
            <span className={styles.iconDesignEvolutionIndex}>最终版本</span>
          </div>
        </div>
      </div>

    </figure>
  );
}
