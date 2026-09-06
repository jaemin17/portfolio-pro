"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { CurrentlyBuilding, ToolProjects, WorkIndexItem } from "@/i18n/copy";
import { ToolProjectList } from "./ToolProjectList";
import styles from "./page.module.css";

function primaryCategoryId(project: { categoryIds?: string[] }) {
  return project.categoryIds?.[0];
}

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
  const categories = items.filter((item) => item.id !== "all");
  const groups =
    activeId === "all"
      ? categories
          .map((category) => ({
            ...category,
            projects: allProjects.filter(
              (project) => primaryCategoryId(project) === category.id,
            ),
          }))
          .filter((group) => group.projects.length > 0)
      : [
          {
            ...(items.find((item) => item.id === activeId) ?? categories[0]),
            projects: allProjects.filter((project) =>
              project.categoryIds?.includes(activeId),
            ),
          },
        ];

  return (
    <section className={className} aria-label={label}>
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
      <div className={styles.workIndexRule} aria-hidden="true" />
      <div className={styles.workIndexPanel} role="tabpanel">
        {groups.map((group) => (
          <div key={group.id} className={styles.workIndexGroup}>
            {activeId === "all" ? (
              <h2 className={styles.workIndexGroupHeading}>{group.label}</h2>
            ) : null}
            <ToolProjectList
              className={styles.workIndexList}
              items={group.projects}
              locale={locale}
              initialCount={group.projects.length}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
