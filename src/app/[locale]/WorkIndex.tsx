"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { CurrentlyBuilding, ToolProjects, WorkIndexItem } from "@/i18n/copy";
import { ToolProjectList } from "./ToolProjectList";
import styles from "./page.module.css";

export function WorkIndex({
  label,
  items,
  buildingProjects,
  toolProjects,
  visualProjects,
  locale,
  className,
}: {
  label: string;
  items: WorkIndexItem[];
  buildingProjects: CurrentlyBuilding;
  toolProjects: ToolProjects;
  visualProjects: ToolProjects;
  locale: Locale;
  className?: string;
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const allProjects = [
    ...buildingProjects.items,
    ...toolProjects.items,
    ...visualProjects.items,
  ];
  const visibleProjects =
    activeId === "all"
      ? allProjects
      : allProjects.filter((project) =>
          project.categoryIds?.includes(activeId),
        );

  return (
    <section className={className} aria-label={label}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      <div className={styles.workIndexTabs} role="tablist" aria-label={label}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeId === item.id}
            className={styles.workIndexTab}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={styles.workIndexPanel} role="tabpanel">
        <ToolProjectList
          className={styles.workIndexList}
          items={visibleProjects}
          locale={locale}
          initialCount={visibleProjects.length}
        />
      </div>
    </section>
  );
}
