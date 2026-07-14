"use client";

import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./selfly0.module.css";

const states = [
  {
    id: "empty",
    src: assetPath("/images/selfly0/today-empty.webp"),
    alt: "Selfly Today 空态：三个待添加任务槽位",
    phase: "空态",
    caption: "3 个槽位，克制入口",
  },
  {
    id: "active",
    src: assetPath("/images/selfly0/today-active.webp"),
    alt: "Selfly Today 进行中：Top 3 展示三项聚焦任务，一项已完成",
    phase: "进行中",
    caption: "每日只盯少数几件",
  },
  {
    id: "done",
    src: assetPath("/images/selfly0/today-done.webp"),
    alt: "Selfly Today 已完成：Top 3 全部完成并显示祝贺反馈",
    phase: "已完成",
    caption: "完成有反馈",
  },
] as const;

const INTERVAL_MS = 3200;

export function TodayTop3States() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const active = states[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex(index % states.length);
  }, []);

  useEffect(() => {
    if (hoverPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % states.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [hoverPaused]);

  return (
    <figure
      className={`${styles.positioningDiagram} ${styles.todayTop3CarouselFigure}`}
      aria-label="Selfly Today 页 Top 3：空态、进行中与完成反馈"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={() => setHoverPaused(false)}
    >
      <div className={styles.todayTop3Carousel}>
        <div className={styles.todayTop3Labels} role="tablist" aria-label="Top 3 状态">
          {states.map((state, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={state.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={[
                  styles.todayTop3Label,
                  selected ? styles.todayTop3LabelActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => goTo(index)}
              >
                <span className={styles.todayTop3LabelPhase}>{state.phase}</span>
                <span className={styles.todayTop3LabelCaption}>{state.caption}</span>
              </button>
            );
          })}
          <div className={styles.todayTop3Dots} aria-hidden="true">
            {states.map((state, index) => (
              <span
                key={state.id}
                className={[
                  styles.todayTop3Dot,
                  index === activeIndex ? styles.todayTop3DotActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              />
            ))}
          </div>
        </div>

        <div className={styles.todayTop3PhoneStage}>
          <div className={styles.todayTop3PhoneBezel}>
            <div className={styles.todayTop3PhoneFrame}>
              <div className={styles.todayTop3PhoneScreen}>
                {states.map((state, index) => (
                  <Image
                    key={state.id}
                    src={state.src}
                    alt={state.alt}
                    width={470}
                    height={1024}
                    className={`${styles.todayTop3CarouselImage} ${
                      index === activeIndex ? styles.todayTop3CarouselImageActive : ""
                    }`}
                    sizes="(max-width: 760px) 52vw, 220px"
                    priority={index === 0}
                  />
                ))}
              </div>
              <span className={styles.positioningDynamicIsland} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <p className={styles.todayTop3CarouselLive} aria-live="polite">
        {active.phase}：{active.caption}
      </p>
    </figure>
  );
}
