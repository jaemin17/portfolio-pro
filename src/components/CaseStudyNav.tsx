"use client";

import { useEffect, useState } from "react";
import styles from "./CaseStudy.module.css";

export type CaseStudySection = { id: string; label: string };

export function CaseStudyNav({ sections, ariaLabel }: {
  sections: CaseStudySection[];
  ariaLabel: string;
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const anchors = sections.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });
    if (!anchors.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = Math.min(96, window.innerHeight * 0.18);
      let current = anchors[0].id;
      for (const anchor of anchors) {
        if (anchor.element.getBoundingClientRect().top <= readingLine) {
          current = anchor.id;
        }
      }
      const last = anchors[anchors.length - 1];
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (atBottom && last.element.getBoundingClientRect().top < window.innerHeight) {
        current = last.id;
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [sections]);

  return (
    <nav className={styles.nav} aria-label={ariaLabel}>
      <ol>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
