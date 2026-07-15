"use client";

import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";

type TodayRhythmSystemProps = {
  locale?: Locale;
};

const top3DemoVideoSrc = assetPath("/images/selfly0/today-top3-demo.mp4");
const todayFocusImageSrc = assetPath("/images/selfly0/today-rhythm-today-annotated-zh.webp");

const copy = {
  zh: {
    figureLabel: "Selfly Today 节奏系统：Top 3 状态与 Today、Tomorrow、Backlog 分流",
    videoLabel: "Selfly Today Top 3 演示视频",
    imageAlt: "Selfly 今日重要 Top 3：仅保留今日聚焦",
    limitTitle: "限制今天",
    limitDescription: "Top 3 压低首页容量，让用户只盯少数重点。",
    parkTitle: "安放未来",
    parkDescription: "Tomorrow 和 Backlog 承接非今日事项，不挤占今天。",
  },
  en: {
    figureLabel: "Selfly Today rhythm system: Top 3 states and Today/Tomorrow/Backlog routing",
    videoLabel: "Selfly Today Top 3 demo video",
    imageAlt: "Selfly Today's Top 3: keeping only today's focus",
    limitTitle: "Limit today",
    limitDescription: "Top 3 caps home-screen capacity, keeping users focused on just a few priorities.",
    parkTitle: "Park the rest",
    parkDescription: "Tomorrow and Backlog hold anything not due today, so today stays uncluttered.",
  },
} as const;

function PhoneVideoPanel({
  title,
  description,
  videoLabel,
}: {
  title: string;
  description: string;
  videoLabel: string;
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
                aria-label={videoLabel}
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
  imageAlt,
}: {
  title: string;
  description: string;
  imageAlt: string;
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
                src={todayFocusImageSrc}
                alt={imageAlt}
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

export function TodayRhythmSystem({ locale = "zh" }: TodayRhythmSystemProps) {
  const c = copy[locale];

  return (
    <figure
      className={styles.todayRhythmSystemFigure}
      aria-label={c.figureLabel}
    >
      <div className={styles.todayRhythmSystemGrid}>
        <PhoneVideoPanel
          title={c.limitTitle}
          description={c.limitDescription}
          videoLabel={c.videoLabel}
        />
        <PhoneImagePanel
          title={c.parkTitle}
          description={c.parkDescription}
          imageAlt={c.imageAlt}
        />
      </div>
    </figure>
  );
}
