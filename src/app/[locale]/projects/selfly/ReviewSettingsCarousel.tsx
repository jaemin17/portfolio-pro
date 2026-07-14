"use client";

import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./selfly0.module.css";

const slides = [
  {
    id: "module",
    src: assetPath("/images/selfly0/review-settings-module-zh.webp"),
    label: "自选模块",
    alt: "回顾设置：自选模块，勾选成功日记、愿景板等具体模块",
  },
  {
    id: "category",
    src: assetPath("/images/selfly0/review-settings-category-zh.webp"),
    label: "自选分类",
    alt: "回顾设置：自选分类，按清单、图册等记录类型筛选回顾范围",
  },
] as const;

const INTERVAL_MS = 3600;

export function ReviewSettingsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const active = slides[activeIndex];

  useEffect(() => {
    if (hoverPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [hoverPaused]);

  return (
    <div
      className={styles.reviewSettingsCarousel}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      onFocusCapture={() => setHoverPaused(true)}
      onBlurCapture={() => setHoverPaused(false)}
    >
      <div className={styles.selfly0PhoneSlotStage}>
        <div className={styles.reviewSettingsPhoneShell}>
          <div className={styles.reviewSettingsPhoneScreen}>
            {slides.map((slide, index) => (
              <Image
                key={slide.id}
                src={slide.src}
                alt={slide.alt}
                width={470}
                height={1024}
                className={`${styles.reviewSettingsCarouselImage} ${
                  index === activeIndex ? styles.reviewSettingsCarouselImageActive : ""
                }`}
                sizes="(max-width: 760px) 72vw, 300px"
                priority={index === 0}
              />
            ))}
          </div>
          <span className={styles.positioningDynamicIsland} aria-hidden="true" />
          <span className={styles.selfly0PhoneHomeIndicator} aria-hidden="true" />
        </div>
      </div>

      <div className={styles.reviewSettingsCarouselDots} aria-hidden="true">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={[
              styles.reviewSettingsCarouselDot,
              index === activeIndex ? styles.reviewSettingsCarouselDotActive : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>

      <p className={styles.reviewSettingsCarouselLive} aria-live="polite">
        {active.label}
      </p>
    </div>
  );
}
