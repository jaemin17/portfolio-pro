import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";
import { resolveSelfly0Screenshot, selfly0Screenshots } from "./selfly0Screenshots";

type ExploreTemplatesSwitcherProps = {
  locale?: Locale;
};

const zhInspirationSlides = [
  {
    src: "/images/selfly0/explore-create-inspiration-list-zh.webp",
    alt: "从场景开始：清单模板展示我的价值观、核心优势、喜好、边界等记录灵感",
  },
  {
    src: "/images/selfly0/explore-create-inspiration-plan-zh.webp",
    alt: "从场景开始：计划模板展示周目标、想去的地方、年度目标、月目标等记录灵感",
  },
  {
    src: "/images/selfly0/explore-create-inspiration-diary-zh.webp",
    alt: "从场景开始：日记模板展示幸福日记、情绪日记、灵感日记、感恩日记等记录灵感",
  },
] as const;

const copy = {
  zh: {
    figureLabel: "Explore 创建体验：用场景启发自我记录",
    startFromType: "从类型开始",
    customizeContainer: "自定义记录容器",
    startFromScenario: "从场景开始",
    getInspired: "获得记录灵感",
    pendingImage: "待替换截图",
    beforeAlt: "从类型开始：自定义记录容器时填写标题、说明、图标和数量",
    afterAlt: "从场景开始：选择场景模板并获得记录灵感",
  },
  en: {
    figureLabel: "Explore creation experience: sparking self-recording through scenarios",
    startFromType: "Start from type",
    customizeContainer: "Customize a record container",
    startFromScenario: "Start from a scenario",
    getInspired: "Get inspired to record",
    pendingImage: "Screenshot pending",
    beforeAlt: "Before: create a list by filling title, description, icon, and quantity first",
    afterAlt: "After: choose a type to create and start from inspiration templates",
  },
} as const;

export function ExploreTemplatesSwitcher({ locale = "zh" }: ExploreTemplatesSwitcherProps) {
  const c = copy[locale];
  const beforeSrc = resolveSelfly0Screenshot(selfly0Screenshots.exploreCreate.before, locale);
  const afterSrc = resolveSelfly0Screenshot(selfly0Screenshots.exploreCreate.after, locale);
  const beforeFilePath = path.join(process.cwd(), "public", beforeSrc.replace(/^\//, ""));
  const hasBeforeImage = fs.existsSync(beforeFilePath);
  const inspirationSlides =
    locale === "zh" ? zhInspirationSlides : [{ src: afterSrc, alt: "Start from inspiration templates" }];

  return (
    <figure
      className={`${styles.positioningDiagram} ${styles.exploreCreateDiagram}`}
      aria-label={c.figureLabel}
    >
      <div className={styles.positioningDiagramFlow}>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>{c.startFromType}</span>
          <span className={styles.positioningDiagramCaption}>{c.customizeContainer}</span>
          <div className={styles.positioningPhoneFrame}>
            {hasBeforeImage ? (
              <Image
                src={assetPath(beforeSrc)}
                alt={c.beforeAlt}
                width={470}
                height={1024}
                className={styles.positioningDiagramPhone}
              />
            ) : (
              <div className={styles.exploreModulesAfterPending} aria-hidden="true">
                <span>{c.pendingImage}</span>
                <code>public{beforeSrc}</code>
              </div>
            )}
          </div>
        </div>
        <div className={styles.positioningDiagramCol}>
          <span className={styles.positioningDiagramPhase}>{c.startFromScenario}</span>
          <span className={styles.positioningDiagramCaption}>{c.getInspired}</span>
          <div className={styles.positioningPhoneFrame}>
            <div className={styles.exploreCreateInspirationCarousel} aria-label={c.afterAlt}>
              {inspirationSlides.map((slide) => (
                <Image
                  key={slide.src}
                  src={assetPath(slide.src)}
                  alt={slide.alt}
                  width={470}
                  height={1024}
                  className={`${styles.positioningDiagramPhone} ${styles.exploreCreateInspirationSlide}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
