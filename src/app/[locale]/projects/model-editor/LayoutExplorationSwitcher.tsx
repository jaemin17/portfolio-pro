"use client";

import { useState } from "react";
import styles from "./modelEditor.module.css";

export type LayoutExplorationItem = {
  image: string;
  marker: string;
  label: string;
  note: string;
};

type LayoutExplorationSwitcherProps = {
  items: LayoutExplorationItem[];
};

export function LayoutExplorationSwitcher({ items }: LayoutExplorationSwitcherProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];

  if (!activeItem) return null;

  return (
    <div className={styles.layoutExplorationSwitcher}>
      <figure className={styles.layoutExplorationStage}>
        <div className={styles.layoutExplorationImageFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeItem.image}
            alt={activeItem.label}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption className={styles.layoutExplorationStageCaption}>
          <span className={styles.layoutExplorationStep}>{activeItem.marker}</span>
          <strong>{activeItem.label}</strong>
          <span>{activeItem.note}</span>
        </figcaption>
      </figure>

      <div className={styles.layoutExplorationTabs} role="tablist" aria-label="Layout exploration options">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              className={styles.layoutExplorationTab}
              type="button"
              role="tab"
              aria-selected={isActive}
              key={item.label}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.layoutExplorationStep}>{item.marker}</span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.note}</small>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
