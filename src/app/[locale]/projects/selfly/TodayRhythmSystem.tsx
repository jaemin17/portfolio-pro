"use client";

import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import styles from "./selfly0.module.css";

const top3DemoVideoSrc = assetPath("/images/selfly0/today-top3-demo.mp4");
const todayFocusImage = {
  src: assetPath("/images/selfly0/today-rhythm-today-annotated-zh.webp"),
  alt: "Selfly 今日重要 Top 3：仅保留今日聚焦",
};

function PhoneVideoPanel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.todayRhythmSystemPanel}>
      <div className={styles.todayRhythmSystemPanelCopy}>
        <p className={styles.todayRhythmSystemPanelTitle}>{title}</p>
        <p className={styles.todayRhythmSystemPanelDescription}>{description}</p>
      </div>

      <div className={styles.todayRhythmSystemPhoneStage}>
        <div className={styles.todayTop3PhoneBezel}>
          <div className={styles.todayTop3PhoneFrame}>
            <div className={styles.todayTop3PhoneScreen}>
              <video
                className={styles.todayTop3PhoneVideo}
                src={top3DemoVideoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Selfly Today Top 3 演示视频"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneImagePanel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className={styles.todayRhythmSystemPanel}>
      <div className={styles.todayRhythmSystemPanelCopy}>
        <p className={styles.todayRhythmSystemPanelTitle}>{title}</p>
        <p className={styles.todayRhythmSystemPanelDescription}>{description}</p>
      </div>

      <div className={styles.todayRhythmSystemPhoneStage}>
        <div className={styles.todayTop3PhoneBezel}>
          <div className={styles.todayTop3PhoneFrame}>
            <div className={styles.todayTop3PhoneScreen}>
              <Image
                src={todayFocusImage.src}
                alt={todayFocusImage.alt}
                width={470}
                height={1024}
                className={`${styles.todayTop3CarouselImage} ${styles.todayTop3CarouselImageActive}`}
                sizes="(max-width: 760px) 58vw, 210px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TodayRhythmSystem() {
  return (
    <figure
      className={styles.todayRhythmSystemFigure}
      aria-label="Selfly Today 节奏系统：Top 3 状态与 Today、Tomorrow、Backlog 分流"
    >
      <div className={styles.todayRhythmSystemGrid}>
        <PhoneVideoPanel
          title="限制今天"
          description="Top 3 压低首页容量，让用户只盯少数重点。"
        />
        <PhoneImagePanel
          title="安放未来"
          description="Tomorrow 和 Backlog 承接非今日事项，不挤占今天。"
        />
      </div>
    </figure>
  );
}
