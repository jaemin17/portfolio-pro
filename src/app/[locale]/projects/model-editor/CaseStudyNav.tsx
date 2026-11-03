"use client";

import { useEffect, useState } from "react";
import styles from "./modelEditor.module.css";

type CaseStudySection = {
  id: string;
  label: string;
};

type CaseStudyNavProps = {
  sections: CaseStudySection[];
  ariaLabel: string;
};

export function CaseStudyNav({ sections, ariaLabel }: CaseStudyNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections[0]?.target.id) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: 0 },
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={styles.caseStudyNav} aria-label={ariaLabel}>
      <ol>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={activeSection === section.id ? styles.caseStudyNavActive : undefined}
              aria-current={activeSection === section.id ? "location" : undefined}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
