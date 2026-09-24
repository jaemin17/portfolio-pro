"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import styles from "./modelEditor.module.css";

type ThemeComparisonSliderProps = {
  src: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
  controlLabel: string;
};

export function ThemeComparisonSlider({
  src,
  beforeLabel,
  afterLabel,
  alt,
  controlLabel,
}: ThemeComparisonSliderProps) {
  const [split, setSplit] = useState(50);
  const splitStyle = { "--split": `${split}%` } as CSSProperties;

  return (
    <div className={styles.themeComparisonShell}>
      <div className={styles.themeComparisonSlider} style={splitStyle}>
        <div className={`${styles.comparisonLayer} ${styles.comparisonBefore}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} />
        </div>
        <div className={`${styles.comparisonLayer} ${styles.comparisonAfter}`} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" />
        </div>
        <div className={styles.comparisonLabels} aria-hidden="true">
          <span>{beforeLabel}</span>
          <span>{afterLabel}</span>
        </div>
        <div className={styles.comparisonDivider} aria-hidden="true">
          <span />
        </div>
        <input
          className={styles.comparisonRange}
          type="range"
          min="18"
          max="82"
          value={split}
          aria-label={controlLabel}
          onChange={(event) => setSplit(Number(event.target.value))}
        />
      </div>
    </div>
  );
}
