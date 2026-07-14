import styles from "./selfly0.module.css";
import { ReviewSettingsCarousel } from "./ReviewSettingsCarousel";
import { Selfly0PhoneVideoSlot } from "./Selfly0PhoneVideoSlot";

export function ReviewRedistribution() {
  return (
    <figure
      className={`${styles.selfly0EvidenceCard} ${styles.selfly0EvidenceCard_review}`}
      aria-label="Review 低压力回顾：回顾范围设置与每日卡片"
    >
      <p className={styles.selfly0EvidenceTitle}>跨模块再分发</p>

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span className={styles.selfly0EvidenceCaptionAccent}>低压力回顾</span>
        <span>像翻阅旧笔记，而非数据中心</span>
      </figcaption>

      <div className={styles.reviewRedistributionLayout}>
        <ReviewSettingsCarousel />

        <div className={styles.reviewRedistributionDemo}>
          <Selfly0PhoneVideoSlot
            src="/videos/selfly0/review-redistribution.mp4"
            ariaLabel="Review 每日卡片流演示"
          />
        </div>
      </div>
    </figure>
  );
}
