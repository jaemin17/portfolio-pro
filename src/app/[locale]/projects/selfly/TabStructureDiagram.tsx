import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";

type TabStructureDiagramProps = {
  locale?: Locale;
};

const tabsCopy = {
  zh: {
    label: "三个 Tab 建立日常循环",
    tabs: [
      { id: "today", role: "当下", name: "Today", goal: "聚焦当下" },
      { id: "explore", role: "记录", name: "Explore", goal: "按内容选容器" },
      { id: "review", role: "回看", name: "Review", goal: "把旧内容带回" },
    ],
  },
  en: {
    label: "Three tabs, one daily loop",
    tabs: [
      { id: "today", role: "Now", name: "Today", goal: "Focus on today" },
      { id: "explore", role: "Record", name: "Explore", goal: "Pick a container by content" },
      { id: "review", role: "Look back", name: "Review", goal: "Bring old entries back" },
    ],
  },
} as const;

const tabIcons = {
  today: { icon: assetPath("/images/selfly0/jinri.svg"), width: 20, height: 19 },
  explore: { icon: assetPath("/images/selfly0/tansuo.svg"), width: 23, height: 25 },
  review: { icon: assetPath("/images/selfly0/huigu.fill.svg"), width: 23, height: 23 },
} as const;

function FlowArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="16"
      viewBox="0 0 32 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 8H24M24 8L18 3.5M24 8L18 12.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TabStructureDiagram({ locale = "zh" }: TabStructureDiagramProps) {
  const copy = tabsCopy[locale];

  return (
    <figure
      className={styles.tabStructureDiagram}
      aria-labelledby="selfly0-tab-structure-label"
      aria-describedby="selfly0-tab-structure-cycle"
    >
      <p id="selfly0-tab-structure-label" className={styles.tabStructureLabel}>
        {copy.label}
      </p>
      <div className={styles.tabStructureTrack}>
        {copy.tabs.map((tab, index) => {
          const icon = tabIcons[tab.id];
          return (
            <div key={tab.id} className={styles.tabStructureStep}>
              <article className={styles.tabStructureNode}>
                <div className={styles.tabStructureIconWrap}>
                  <Image
                    src={icon.icon}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                    className={styles.tabStructureIcon}
                  />
                </div>
                <div className={styles.tabStructureCopy}>
                  <h4 className={styles.tabStructureTitle}>
                    <span className={styles.tabStructureRole}>{tab.role}</span>
                    <span aria-hidden="true" className={styles.tabStructureTitleSep}>
                      ·
                    </span>
                    <span className={styles.tabStructureName}>{tab.name}</span>
                  </h4>
                  <p className={styles.tabStructureGoal}>{tab.goal}</p>
                </div>
              </article>
              {index < copy.tabs.length - 1 ? (
                <div className={styles.tabStructureConnector}>
                  <FlowArrow className={styles.tabStructureFlowArrow} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

    </figure>
  );
}
