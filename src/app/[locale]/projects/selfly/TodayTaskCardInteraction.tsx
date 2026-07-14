import { assetPath } from "@/i18n/assets";
import Image from "next/image";

import styles from "./selfly0.module.css";

const arrow = (
  <svg width="101" height="24" viewBox="0 0 101 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 8.83373C2.57145 8.83373 2.64291 8.83373 18.6572 8.86261C34.6715 8.89149 66.6266 8.94925 82.8399 8.92303C99.0533 8.89681 98.5567 8.78487 94.2751 7.46963C89.9935 6.15438 81.9419 3.63923 79.0663 2.52903C78.3106 2.23727 87.2513 4.13874 95.8585 7.27645C98.634 8.28827 97.9217 8.763 94.7819 10.3823C91.6421 12.0016 86.0312 14.9151 82.3691 16.9772C78.707 19.0393 77.1636 20.1618 75.3912 21.4138"
      stroke="#FFA84A"
      strokeLinecap="round"
      strokeWidth="5"
    />
  </svg>
);

type TaskInteractionImageProps = {
  alt: string;
  src: string;
};

function TaskInteractionImage({ alt, src }: TaskInteractionImageProps) {
  return (
    <div className={styles.todayTaskSemanticScreenshotFrame}>
      <Image
        className={styles.todayTaskSemanticScreenshot}
        src={assetPath(src)}
        alt={alt}
        width={1206}
        height={2622}
        sizes="(max-width: 760px) 70vw, 220px"
      />
    </div>
  );
}

export function TodayTaskCardInteraction() {
  return (
    <figure
      className={`${styles.positioningDiagram} ${styles.todayTaskSemanticFigure}`}
      aria-label="Selfly Today 任务卡片交互：从整卡完成到内容与状态分区"
    >
      <div className={styles.positioningDiagramFlow}>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造前</span>
          <div className={styles.positioningDiagramCopy}>
            <p className={styles.positioningDiagramDescription}>低压力，但易误触、确认弱</p>
          </div>
          <TaskInteractionImage
            src={assetPath("/images/selfly0/today-task-interaction-before.webp")}
            alt="改造前的 Selfly Today Top 3 界面，完成控件被弱化，点击卡片可能完成任务"
          />
        </div>

        <div className={styles.positioningDiagramArrow} aria-hidden="true">
          {arrow}
        </div>

        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>改造后</span>
          <div className={styles.positioningDiagramCopy}>
            <p className={styles.positioningDiagramDescription}>完成感克制，内容仍可见</p>
          </div>
          <TaskInteractionImage
            src={assetPath("/images/selfly0/today-task-interaction-after.webp")}
            alt="改造后的 Selfly Today Top 3 界面，右侧方块承担完成操作，卡片主体保留内容入口"
          />
        </div>
      </div>
    </figure>
  );
}
