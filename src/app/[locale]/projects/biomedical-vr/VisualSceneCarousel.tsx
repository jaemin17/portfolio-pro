"use client";

import { assetPath } from "@/i18n/assets";
import { useState } from "react";
import styles from "./VisualSceneCarousel.module.css";

type VisualSceneCarouselProps = {
  images: readonly string[];
  alt: string;
};

export function VisualSceneCarousel({ images, alt }: VisualSceneCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const prev = () => setActiveIndex((index) => (index - 1 + total) % total);
  const next = () => setActiveIndex((index) => (index + 1) % total);

  return (
    <div className={styles.root}>
      <div className={styles.viewport}>
        {images.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element -- static export
          <img
            key={src}
            className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ""}`}
            src={assetPath(src)}
            alt={index === 0 ? alt : `${alt} (${index + 1})`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
      <div className={styles.controls}>
        <button type="button" className={styles.controlBtn} onClick={prev} aria-label="Previous slide">
          ←
        </button>
        <div className={styles.dots}>
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <button type="button" className={styles.controlBtn} onClick={next} aria-label="Next slide">
          →
        </button>
      </div>
    </div>
  );
}
