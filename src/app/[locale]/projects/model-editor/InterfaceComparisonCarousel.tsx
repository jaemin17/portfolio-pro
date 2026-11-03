"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import styles from "./modelEditor.module.css";

type Slide = { src: string; alt: string; label: string };

export function InterfaceComparisonCarousel({ slides, label }: { slides: Slide[]; label: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const id = useId();

  useEffect(() => {
    if (paused || slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 4000);
    return () => window.clearInterval(timer);
  }, [active, paused, slides.length]);

  return (
    <div
      className={styles.interfaceCarousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          className={
            index === 0
              ? styles.interfaceCarouselPanelBefore
              : index === 1
                ? styles.interfaceCarouselPanelAfter
                : undefined
          }
          hidden={active !== index}
        >
          <Image src={slide.src} alt={slide.alt} width={1920} height={1080} sizes="(max-width: 900px) 100vw, 840px" className={styles.interfaceCarouselImage} />
        </div>
      ))}
      <div className={styles.interfaceCarouselTabs} role="tablist" aria-label={label}>
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel-${index}`}
            aria-selected={active === index}
            className={
              index === 0
                ? styles.interfaceCarouselTabBefore
                : index === 1
                  ? styles.interfaceCarouselTabAfter
                  : undefined
            }
            onClick={() => setActive(index)}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
}
