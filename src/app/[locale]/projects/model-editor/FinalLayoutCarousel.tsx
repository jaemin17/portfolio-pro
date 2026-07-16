"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import styles from "./FinalLayoutCarousel.module.css";

type ImageSlide = { src: string; alt: string; label: string; description?: string };
type ContentSlide = { content: ReactNode; label: string; description?: string };
type Slide = ImageSlide | ContentSlide;

type FinalLayoutCarouselProps = {
  slides: Slide[];
  caption?: string;
};

export function FinalLayoutCarousel({ slides, caption }: FinalLayoutCarouselProps) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.frame}>
      <div className={styles.canvas}>
        {slides.map((slide, index) =>
          "content" in slide ? (
            <div
              key={slide.label}
              className={`${styles.slide} ${index === active ? styles.slideActive : ""}`}
            >
              {slide.content}
            </div>
          ) : (
            <Image
              key={slide.label}
              src={slide.src}
              alt={slide.alt}
              fill
              className={`${styles.image} ${index === active ? styles.imageActive : ""}`}
              sizes="(max-width: 840px) 100vw, 840px"
            />
          ),
        )}
      </div>

      <div className={styles.tabs}>
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            className={`${styles.tab} ${index === active ? styles.tabActive : ""}`}
            onClick={() => setActive(index)}
            aria-label={slide.label}
          >
            <span className={styles.tabLabel}>{slide.label}</span>
          </button>
        ))}
      </div>

      {(slides[active].description ?? caption) ? (
        <p className={styles.caption}>{slides[active].description ?? caption}</p>
      ) : null}
    </div>
  );
}
