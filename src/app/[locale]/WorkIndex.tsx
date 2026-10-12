"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { CurrentlyBuilding, ToolProjects, WorkIndexItem } from "@/i18n/copy";
import { ToolProjectList } from "./ToolProjectList";
import styles from "./page.module.css";

function resolveAllProjects<T extends { title: string }>(
  orderedProjects: { title: string }[],
  allProjects: T[],
) {
  const ordered = orderedProjects
    .map((orderedProject) =>
      allProjects.find((project) => project.title === orderedProject.title),
    )
    .filter((project): project is T => Boolean(project));
  const orderedProjectTitles = new Set(ordered.map((project) => project.title));
  const remainingProjects = allProjects.filter(
    (project) => !orderedProjectTitles.has(project.title),
  );

  return [...ordered, ...remainingProjects];
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
  const allItem = items.find((item) => item.id === "all");
  const categories = items.filter((item) => item.id !== "all");
  const allInitialCount = 6;
  const allLoadMoreLabel =
    locale === "zh" ? "更多项目" : "More projects";
  const groups =
    activeId === "all"
      ? [
          {
            ...(allItem ?? items[0]),
            projects: resolveAllProjects(allItem?.projects ?? [], allProjects),
          },
        ]
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
            {activeId !== "all" ? (
              <h2 className={styles.workIndexGroupHeading}>{group.label}</h2>
            ) : null}
            <ToolProjectList
              className={styles.workIndexList}
              items={group.projects}
              locale={locale}
              loadMoreLabel={
                activeId === "all" ? allLoadMoreLabel : undefined
              }
              initialCount={
                activeId === "all" ? allInitialCount : group.projects.length
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
