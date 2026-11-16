"use client";

import { useEffect, useState } from "react";
import styles from "./SectionNav.module.css";

export type SectionNavItem = { id: string; label: string };

export function SectionNav({ sections, ariaLabel, className = "", layout = "vertical", preview = false }: {
  sections: SectionNavItem[];
  ariaLabel: string;
  className?: string;
  layout?: "vertical" | "responsive";
  preview?: boolean;
}) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (preview) return;
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
  }, [sections, preview]);

  const Container = preview ? "div" : "nav";

  return (
    <Container className={[styles.nav, layout === "responsive" ? styles.responsive : "", className].filter(Boolean).join(" ")} aria-label={ariaLabel} role={preview ? "group" : undefined}>
      <ol>
        {sections.map(({ id, label }) => (
          <li key={id}>
            {preview ? (
              <button type="button" aria-pressed={activeSection === id} onClick={() => setActiveSection(id)}>
                {label}
              </button>
            ) : (
              <a href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
                {label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </Container>
  );
}
