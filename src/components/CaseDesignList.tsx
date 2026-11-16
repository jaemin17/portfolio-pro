import type { ReactNode } from "react";
import styles from "./CaseDesignList.module.css";

export function CaseDesignList({ children, className = "" }: {
  children: ReactNode;
  className?: string;
}) {
  return <ul className={`${styles.list}${className ? ` ${className}` : ""}`}>{children}</ul>;
}
