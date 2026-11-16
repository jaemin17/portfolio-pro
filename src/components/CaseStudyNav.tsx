import { SectionNav, type SectionNavItem } from "./SectionNav";
import styles from "./CaseStudy.module.css";

export type CaseStudySection = SectionNavItem;

export function CaseStudyNav({ sections, ariaLabel }: {
  sections: CaseStudySection[];
  ariaLabel: string;
}) {
  return <SectionNav sections={sections} ariaLabel={ariaLabel} className={styles.nav} />;
}
