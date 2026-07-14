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

function FinalVersionsShowcase() {
  return (
    <div className={styles.iconDesignFinalPicker}>
      <div className={styles.iconDesignFinalDual} aria-label="最终图标：浅色与深色两版并排展示">
        {finalVersions.map((version) => (
          <figure key={version.id} className={styles.iconDesignFinalCard}>
            <Image
              src={version.src}
              alt={version.alt}
              width={200}
              height={200}
              className={styles.iconDesignFinalIcon}
              priority={version.id === "flat"}
            />
            <figcaption>
              <span className={styles.iconDesignFinalCardTitle}>
                <strong>{version.title}</strong>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function AppIconDesignShowcase() {
  return (
    <figure className={styles.iconDesignShowcase} aria-label="Selfly 应用图标设计演变">
      <FinalVersionsShowcase />

      <div className={styles.iconDesignEvolutionSection}>
        <div className={styles.iconDesignEvolutionBoard}>
          {/* Row 1 — images + arrows */}
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

          <figure
            className={styles.iconDesignExplorationWall}
            aria-label="精稿阶段同期探索：多种书本与蝴蝶组合方案"
          >
            <Image
              src={assetPath("/images/selfly0/icon-design/exploration-wall.webp")}
              alt="Selfly 图标精稿探索墙：书本比例、蝴蝶位置与开放框等多方案并列"
              width={1024}
              height={341}
              className={styles.iconDesignExplorationWallImage}
            />
          </figure>

          <span className={styles.iconDesignEvolutionArrow} aria-hidden="true">→</span>

          <figure className={styles.iconDesignEvolutionSketch}>
            <Image
              src={assetPath("/images/selfly0/icon-design/final-flat.webp")}
              alt="Selfly 最终图标：不闭合橙色边框与双色蝴蝶"
              width={200}
              height={200}
              className={styles.iconDesignEvolutionIcon}
            />
          </figure>

          {/* Row 2 — notes (same 5-column order: note, empty, note, empty, note) */}
          <div className={styles.iconDesignEvolutionNote}>
            <span className={styles.iconDesignEvolutionStepNumber}>01</span>
            <span className={styles.iconDesignEvolutionIndex}>草图捕捉第一直觉</span>
          </div>

          <span aria-hidden="true" />

          <div className={styles.iconDesignEvolutionNote}>
            <span className={styles.iconDesignEvolutionStepNumber}>02</span>
            <span className={styles.iconDesignEvolutionIndex}>平衡手绘与精稿</span>
          </div>

          <span aria-hidden="true" />

          <div className={styles.iconDesignEvolutionNote}>
            <span className={styles.iconDesignEvolutionStepNumber}>03</span>
            <span className={styles.iconDesignEvolutionIndex}>最终版本</span>
          </div>
        </div>
      </div>

    </figure>
  );
}
