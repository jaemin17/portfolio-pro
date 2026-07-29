"use client";

import { useState } from "react";
import styles from "../biomedical-vr/biomedicalVr.module.css";

type BackgroundTransferItem = {
  src: string;
  label: string;
  category: string;
  caption: string;
  alt: string;
};

export function BackgroundTransferSwitcher({
  items,
}: {
  items: BackgroundTransferItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const total = items.length;

  const prev = () => setActiveIndex((index) => (index - 1 + total) % total);
  const next = () => setActiveIndex((index) => (index + 1) % total);

  return (
    <div className={styles.backgroundTransferSwitcher}>
      <div className={styles.backgroundTransferStage}>
        {items.map((item, index) => (
          /* eslint-disable-next-line @next/next/no-img-element -- static export */
          <img
            className={`${styles.backgroundTransferSlide} ${index === activeIndex ? styles.backgroundTransferSlideActive : ""}`}
            src={item.src}
            alt={index === 0 ? item.alt : `${item.alt} (${index + 1})`}
            width={1920}
            height={1080}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            key={item.src}
          />
        ))}
        <div className={styles.backgroundTransferOverlay}>
          <div className={styles.backgroundTransferMeta}>
            <span>{activeItem.label}</span>
            <small className={styles.backgroundTransferCategory}>{activeItem.category}</small>
          </div>
          <small>{activeItem.caption}</small>
        </div>
      </div>
      <div className={styles.backgroundTransferControls}>
        <button type="button" className={styles.backgroundTransferArrow} onClick={prev} aria-label="Previous background">
          ←
        </button>
        <div className={styles.backgroundTransferDots}>
          {items.map((item, index) => (
            <button
              aria-label={`Background ${index + 1}: ${item.label}`}
              aria-pressed={index === activeIndex}
              className={styles.backgroundTransferDot}
              key={item.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <button type="button" className={styles.backgroundTransferArrow} onClick={next} aria-label="Next background">
          →
        </button>
      </div>
    </div>
  );
}
