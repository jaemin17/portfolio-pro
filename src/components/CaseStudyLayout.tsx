import type { ReactNode } from "react";
import { CaseStudyNav, type CaseStudySection } from "./CaseStudyNav";
import styles from "./CaseStudy.module.css";

export function CaseStudyLayout({ sections, ariaLabel, children, className = "" }: {
  sections: CaseStudySection[];
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.body} ${className}`}>
      <CaseStudyNav sections={sections} ariaLabel={ariaLabel} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
