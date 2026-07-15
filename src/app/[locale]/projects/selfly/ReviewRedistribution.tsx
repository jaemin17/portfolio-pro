import styles from "./selfly0.module.css";
import { Selfly0PhoneVideoSlot } from "./Selfly0PhoneVideoSlot";

export function ReviewRedistribution() {
  return (
    <figure
      className={`${styles.selfly0EvidenceCard} ${styles.selfly0EvidenceCard_review}`}
      aria-label="Review 低压力回顾：回顾范围设置与每日卡片"
    >
      <div className={styles.reviewRedistributionLayout}>
        <div className={styles.reviewRedistributionDemo}>
          <Selfly0PhoneVideoSlot
            src="/videos/selfly0/review-redistribution.mp4"
            ariaLabel="Review 每日卡片流演示"
          />
        </div>
      </div>

      <figcaption className={styles.selfly0EvidenceCaption}>
        <span>跨模块回顾</span>
      </figcaption>
    </figure>
  );
}
