import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import styles from "./selfly0.module.css";

const containers = [
  {
    name: "清单",
    description: "适合归纳和持续补充",
    image: "/images/selfly0/record-container-list.webp",
    alt: "Selfly 清单容器界面，展示我的喜好列表",
  },
  {
    name: "日记",
    description: "适合记录感受和反思",
    image: "/images/selfly0/record-container-journal.webp",
    alt: "Selfly 日记容器界面，展示成功日记记录",
  },
  {
    name: "计划",
    description: "适合承接目标与行动",
    image: "/images/selfly0/record-container-plan.webp",
    alt: "Selfly 计划容器界面，展示年度目标列表",
  },
  {
    name: "图册",
    description: "适合表达愿景与想象",
    image: "/images/selfly0/record-container-board.webp",
    alt: "Selfly 图册容器界面，展示愿景板图片拼贴",
  },
] as const;
const sourceGroups = [
  { target: "清单", tags: ["价值观", "优势", "喜好", "..."], principle: "归纳与持续补充" },
  { target: "日记", tags: ["成功日记", "感恩日记", "..."], principle: "感受与反思" },
  { target: "计划", tags: ["年度目标", "阅读计划", "..."], principle: "行动与推进" },
  { target: "图册", tags: ["愿景板", "我的风格", "..."], principle: "想象与视觉表达" },
] as const;
const containerCards = containers.map((container) => ({
  ...container,
  source: sourceGroups.find((group) => group.target === container.name),
}));

export function ExploreRecordContainers() {
  return (
    <figure className={styles.exploreRecordContainers} aria-label="Selfly Explore 四种记录容器界面占位">
      <div className={styles.exploreRecordContainersCards} aria-label="入口内容与容器归类关系">
        {containerCards.map((container) => (
          <div className={styles.exploreRecordContainerCard} key={container.name}>
            <div className={styles.exploreRecordContainerSource}>
              {container.source ? (
                <div className={styles.exploreRecordContainersTagStack}>
                  {container.source.tags.map((tag) => (
                    <span className={styles.exploreRecordContainersSourceTag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div className={styles.exploreRecordContainerAbstraction}>
              {container.source ? (
                <>
                  <span className={styles.exploreRecordContainersPrinciple}>
                    {container.source.principle}
                  </span>
                </>
              ) : null}
            </div>

            <div className={styles.exploreRecordContainerCopy}>
              <span className={styles.exploreRecordContainerSectionLabel} aria-label="记录容器">
                <span aria-hidden="true">↓</span>
              </span>
              <span className={styles.exploreRecordContainerName}>{container.name}</span>
            </div>

            <div className={styles.exploreRecordContainerPhone} aria-label={`${container.name}界面占位`}>
              <Image
                src={assetPath(container.image)}
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
