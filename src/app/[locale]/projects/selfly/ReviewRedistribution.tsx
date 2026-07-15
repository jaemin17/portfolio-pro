import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";
import { Selfly0PhoneVideoSlot } from "./Selfly0PhoneVideoSlot";

type ReviewRedistributionProps = {
  locale?: Locale;
};

const copy = {
  zh: {
    figureLabel: "Review 低压力回顾：回顾范围设置与每日卡片",
    videoLabel: "Review 每日卡片流演示",
    caption: "跨模块回顾",
  },
  en: {
    figureLabel: "Review low-pressure recall: scope settings and daily cards",
    videoLabel: "Review daily card stream demo",
    caption: "Cross-module review",
  },
} as const;

export function ReviewRedistribution({ locale = "zh" }: ReviewRedistributionProps) {
  const c = copy[locale];

  return (
    <figure
      className={`${styles.selfly0EvidenceCard} ${styles.selfly0EvidenceCard_review}`}
      aria-label={c.figureLabel}
    >
      <div className={styles.reviewRedistributionLayout}>
        <div className={styles.reviewRedistributionDemo}>
          <Selfly0PhoneVideoSlot
            src="/videos/selfly0/review-redistribution.mp4"
            ariaLabel={c.videoLabel}
          />
        </div>
      </div>

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span>{c.caption}</span>
      </figcaption>
    </figure>
  );
}
