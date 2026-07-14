import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";
import { resolveSelfly0Screenshot, selfly0Screenshots } from "./selfly0Screenshots";

const positioningArrow = (
  <svg width="101" height="24" viewBox="0 0 101 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 8.83373C2.57145 8.83373 2.64291 8.83373 18.6572 8.86261C34.6715 8.89149 66.6266 8.94925 82.8399 8.92303C99.0533 8.89681 98.5567 8.78487 94.2751 7.46963C89.9935 6.15438 81.9419 3.63923 79.0663 2.52903C78.3106 2.23727 87.2513 4.13874 95.8585 7.27645C98.634 8.28827 97.9217 8.763 94.7819 10.3823C91.6421 12.0016 86.0312 14.9151 82.3691 16.9772C78.707 19.0393 77.1636 20.1618 75.3912 21.4138"
      stroke="#FFA84A"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

type ExploreModulesCompareProps = {
  locale?: Locale;
};

const compareCopy = {
  zh: {
    ariaLabel: "Explore 模块化记录：从功能名称入口到四种记录容器",
    before: {
      phase: "改造前",
      caption: "功能名称入口",
      description: "价值观、愿景板等并列出现，需逐个理解用途与规则",
      alt: "改造前：价值观、优势测试等独立功能入口",
    },
    after: {
      phase: "改造后",
      caption: "四种记录容器",
      description: "按内容选清单 / 计划 / 日记 / 图册，场景模板一键进入",
      alt: "改造后：清单、计划、图册、日记四种记录容器与场景模板",
    },
  },
  en: {
    ariaLabel: "Explore modular recording: from feature names to four record containers",
    before: {
      phase: "Before",
      caption: "Feature-name entries",
      description: "Values, Vision Board, and more — each with its own rules to learn",
      alt: "Before: separate feature entries such as values and strengths",
    },
    after: {
      phase: "After",
      caption: "Four record containers",
      description: "Pick List, Plan, Journal, or Board — then start from a scenario template",
      alt: "After: List, Plan, Board, and Journal record containers with scenario templates",
    },
  },
} as const;

export function ExploreModulesCompare({ locale = "zh" }: ExploreModulesCompareProps) {
  const beforeSrc = resolveSelfly0Screenshot(selfly0Screenshots.exploreModules.before, locale);
  const afterSrc = resolveSelfly0Screenshot(selfly0Screenshots.exploreModules.after, locale);
  const afterFilePath = path.join(process.cwd(), "public", afterSrc.replace(/^\//, ""));
  const hasAfterImage = fs.existsSync(afterFilePath);
  const copy = compareCopy[locale];

  return (
    <figure className={styles.positioningDiagram} aria-label={copy.ariaLabel}>
      <div className={styles.positioningDiagramFlow}>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>{copy.before.phase}</span>
          <div className={styles.positioningDiagramCopy}>
            <p className={styles.positioningDiagramCaption}>{copy.before.caption}</p>
            <p className={styles.positioningDiagramDescription}>{copy.before.description}</p>
          </div>
          <div className={styles.positioningPhoneFrame}>
            <span className={styles.positioningDynamicIsland} aria-hidden="true" />
            <Image
              src={assetPath(beforeSrc)}
              alt={copy.before.alt}
              width={360}
              height={780}
              className={styles.positioningDiagramPhone}
            />
          </div>
        </div>
        <div className={styles.positioningDiagramArrow} aria-hidden="true">
          {positioningArrow}
        </div>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>{copy.after.phase}</span>
          <div className={styles.positioningDiagramCopy}>
            <p className={styles.positioningDiagramCaption}>{copy.after.caption}</p>
            <p className={styles.positioningDiagramDescription}>{copy.after.description}</p>
          </div>
          <div className={styles.positioningPhoneFrame}>
            <span className={styles.positioningDynamicIsland} aria-hidden="true" />
            {hasAfterImage ? (
              <Image
                src={assetPath(afterSrc)}
                alt={copy.after.alt}
                width={360}
                height={780}
                className={styles.positioningDiagramPhone}
              />
            ) : (
              <div className={styles.exploreModulesAfterPending} aria-hidden="true">
                <span>待替换截图</span>
                <code>public{afterSrc}</code>
              </div>
            )}
          </div>
        </div>
      </div>
    </figure>
  );
}
