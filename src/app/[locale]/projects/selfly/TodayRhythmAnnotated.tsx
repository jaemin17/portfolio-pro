"use client";

import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./selfly0.module.css";

const slides = [
  {
    id: "today",
    src: assetPath("/images/selfly0/today-rhythm-today-zh.webp"),
    alt: "Selfly 今日重要 Top 3：从这里分流非今日事项",
    phase: "今日聚焦",
    caption: "从这里分流非今日事项",
  },
  {
    id: "tomorrow",
    src: assetPath("/images/selfly0/today-rhythm-tomorrow-zh.webp"),
    alt: "Selfly 明日重要 Top 3：提前写好明日草稿",
    phase: "明日草稿",
    caption: "跨日后进入今日 Top 3",
  },
  {
    id: "backlog",
    src: assetPath("/images/selfly0/today-rhythm-backlog-zh.webp"),
    alt: "Selfly 其他待办：Backlog 保留暂不处理的事项",
    phase: "其他待办",
    caption: "Backlog · 暂不处理",
  },
] as const;

const INTERVAL_MS = 3200;

export function TodayRhythmAnnotated() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const active = slides[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex(index % slides.length);
  }, []);

  useEffect(() => {
    if (hoverPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [hoverPaused]);

  return (
    <figure
      className={styles.todayRhythmAnnotated}
      aria-label="Selfly 每日节奏：今日聚焦、明日草稿与其他待办"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={() => setHoverPaused(false)}
    >
      <p className={styles.todayRhythmCarouselTitle}>分流非今日事项，减轻 Top 3 压力</p>

      <div className={styles.todayRhythmCarousel}>
        <div className={styles.todayTop3Labels} role="tablist" aria-label="每日节奏容器">
          {slides.map((slide, index) => {
            const selected = index === activeIndex;
            return (
              <button
                key={slide.id}
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
                <span className={styles.todayTop3LabelPhase}>{slide.phase}</span>
                <span className={styles.todayTop3LabelCaption}>{slide.caption}</span>
              </button>
            );
          })}
          <div className={styles.todayTop3Dots} aria-hidden="true">
            {slides.map((slide, index) => (
              <span
                key={slide.id}
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
                {slides.map((slide, index) => (
                  <Image
                    key={slide.id}
                    src={slide.src}
                    alt={slide.alt}
                    width={470}
                    height={1024}
                    className={`${styles.todayTop3CarouselImage} ${
                      index === activeIndex ? styles.todayTop3CarouselImageActive : ""
                    }`}
                    sizes="(max-width: 760px) 56vw, 220px"
                    priority={index === 0}
                  />
                ))}
              </div>
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
