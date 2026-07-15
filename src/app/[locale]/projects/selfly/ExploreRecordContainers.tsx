import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";

type ExploreRecordContainersProps = {
  locale?: Locale;
};

const containerImages = {
  list: "/images/selfly0/record-container-list.webp",
  journal: "/images/selfly0/record-container-journal.webp",
  plan: "/images/selfly0/record-container-plan.webp",
  board: "/images/selfly0/record-container-board.webp",
} as const;

const copy = {
  zh: {
    figureLabel: "Selfly Explore 四种记录容器界面占位",
    cardsLabel: "入口内容与容器归类关系",
    sectionLabel: "记录容器",
    phoneLabelSuffix: "界面占位",
    containers: [
      { id: "list", name: "清单", alt: "Selfly 清单容器界面，展示我的喜好列表", tags: ["价值观", "优势", "喜好", "..."], principle: "归纳与持续补充" },
      { id: "journal", name: "日记", alt: "Selfly 日记容器界面，展示成功日记记录", tags: ["成功日记", "感恩日记", "..."], principle: "感受与反思" },
      { id: "plan", name: "计划", alt: "Selfly 计划容器界面，展示年度目标列表", tags: ["年度目标", "阅读计划", "..."], principle: "行动与推进" },
      { id: "board", name: "图册", alt: "Selfly 图册容器界面，展示愿景板图片拼贴", tags: ["愿景板", "我的风格", "..."], principle: "想象与视觉表达" },
    ],
  },
  en: {
    figureLabel: "Selfly Explore: four record-container interfaces (placeholder)",
    cardsLabel: "Relationship between entry content and container grouping",
    sectionLabel: "Record container",
    phoneLabelSuffix: "interface placeholder",
    containers: [
      { id: "list", name: "List", alt: "Selfly List container interface, showing a “My Preferences” list", tags: ["Values", "Strengths", "Preferences", "…"], principle: "Summarizing & adding over time" },
      { id: "journal", name: "Journal", alt: "Selfly Journal container interface, showing a Success Diary entry", tags: ["Success Diary", "Gratitude Diary", "…"], principle: "Feelings & reflection" },
      { id: "plan", name: "Plan", alt: "Selfly Plan container interface, showing an annual goals list", tags: ["Annual Goals", "Reading Plan", "…"], principle: "Action & progress" },
      { id: "board", name: "Board", alt: "Selfly Board container interface, showing a vision-board collage", tags: ["Vision Board", "My Style", "…"], principle: "Imagination & visual expression" },
    ],
  },
} as const;

export function ExploreRecordContainers({ locale = "zh" }: ExploreRecordContainersProps) {
  const c = copy[locale];

  return (
    <figure className={styles.exploreRecordContainers} aria-label={c.figureLabel}>
      <div className={styles.exploreRecordContainersCards} aria-label={c.cardsLabel}>
        {c.containers.map((container) => (
          <div className={styles.exploreRecordContainerCard} key={container.id}>
            <div className={styles.exploreRecordContainerSource}>
              <div className={styles.exploreRecordContainersTagStack}>
                {container.tags.map((tag) => (
                  <span className={styles.exploreRecordContainersSourceTag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.exploreRecordContainerAbstraction}>
              <span className={styles.exploreRecordContainersPrinciple}>
                {container.principle}
              </span>
            </div>

            <div className={styles.exploreRecordContainerCopy}>
              <span className={styles.exploreRecordContainerSectionLabel} aria-label={c.sectionLabel}>
                <span aria-hidden="true">↓</span>
              </span>
              <span className={styles.exploreRecordContainerName}>{container.name}</span>
            </div>

            <div className={styles.exploreRecordContainerPhone} aria-label={`${container.name} ${c.phoneLabelSuffix}`}>
              <Image
                src={assetPath(containerImages[container.id as keyof typeof containerImages])}
                alt={container.alt}
                width={600}
                height={1299}
                className={styles.exploreRecordContainerImage}
              />
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
