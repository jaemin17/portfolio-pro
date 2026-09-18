import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import type { ReactNode } from "react";
import { LazyAutoVideo } from "@/components/LazyAutoVideo";
import type { Locale } from "@/i18n/config";
import styles from "./selfly0.module.css";

type DiaryInputFlowDiagramProps = {
  locale?: Locale;
  demoVideo?: {
    src: string;
    ariaLabel: string;
  };
};

const stepImages = {
  1: assetPath("/images/selfly0/diary-input-flow-step-3.webp"),
  2: assetPath("/images/selfly0/diary-input-flow-step-2.webp"),
  3: assetPath("/images/selfly0/diary-input-flow-step-4.webp"),
} as const;

const copy = {
  zh: {
    diagramLabel: "日记输入流程：从记录入口到自动返回输入",
    demoTitle: "改造后",
    demoCaption: "自动聚焦",
    steps: [
      { id: 1, alt: "步骤 1：日记输入页的记录入口", title: "记录入口", caption: "日记输入页" },
      { id: 2, alt: "步骤 2：在半屏 Sheet 中选择情绪", title: "选择情绪", caption: "分类 Sheet" },
      { id: 3, alt: "步骤 3：输入框自动聚焦并展开键盘", title: "继续输入", caption: "自动聚焦" },
    ],
  },
  en: {
    diagramLabel: "Diary input flow: from the entry point to returning to text input",
    demoTitle: "After",
    demoCaption: "Auto-focus",
    steps: [
      { id: 1, alt: "Step 1: the entry point on the journal input screen", title: "Entry point", caption: "Journal input" },
      { id: 2, alt: "Step 2: choose a mood in the half-screen sheet", title: "Choose mood", caption: "Category sheet" },
      { id: 3, alt: "Step 3: the text field regains focus and the keyboard appears", title: "Keep writing", caption: "Auto-focus" },
    ],
  },
} as const;

function FlowArrow() {
  return (
    <svg
      className={styles.diaryFlowInlineArrow}
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 12H32M32 12L26 7M32 12L26 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type FlowStep = {
  id: number;
  src?: string;
  alt?: string;
  title: string;
  caption: string;
  demo?: ReactNode;
};

function FlowStepCard({
  step,
  hideBadge = false,
}: {
  step: FlowStep;
  hideBadge?: boolean;
}) {
  return (
    <div className={styles.diaryFlowStepCard}>
      {hideBadge ? null : (
        <span className={styles.diaryFlowStepBadge} aria-hidden="true">
          {step.id}
        </span>
      )}
      {step.demo ? (
        step.demo
      ) : (
        <div className={styles.diaryFlowPhone}>
          <Image
            src={step.src ?? ""}
            alt={step.alt ?? ""}
            width={470}
            height={1024}
            className={styles.diaryFlowPhoneImage}
            sizes="148px"
          />
        </div>
      )}
      <div className={styles.diaryFlowStepCopy}>
        <strong>{step.title}</strong>
        <span>{step.caption}</span>
      </div>
    </div>
  );
}

export function DiaryInputFlowDiagram({ locale = "zh", demoVideo }: DiaryInputFlowDiagramProps = {}) {
  const hasDemo = Boolean(demoVideo);
  const c = copy[locale];
  const steps: FlowStep[] = c.steps.map((step) => ({
    ...step,
    src: stepImages[step.id as keyof typeof stepImages],
  }));

  return (
    <div
      className={[styles.diaryFlowDiagram, hasDemo ? styles.diaryFlowDiagramWithDemo : ""]
        .filter(Boolean)
        .join(" ")}
      aria-label={c.diagramLabel}
    >
      <div className={styles.diaryFlowRowWrap}>
        <div className={styles.diaryFlowRow}>
          {steps.map((step, index) => (
            <div key={step.id} className={styles.diaryFlowStepGroup}>
              <FlowStepCard step={step} />
              {index < steps.length - 1 ? (
                <div className={styles.diaryFlowArrowWrap}>
                  <FlowArrow />
                </div>
              ) : null}
            </div>
          ))}
          {demoVideo ? (
            <div className={`${styles.diaryFlowStepGroup} ${styles.diaryFlowDemoGroup}`}>
              <FlowStepCard
                hideBadge
                step={{
                  id: 4,
                  title: c.demoTitle,
                  caption: c.demoCaption,
                  demo: (
                    <div className={styles.diaryFlowPhone}>
                      <span className={styles.positioningDynamicIsland} aria-hidden="true" />
                      <LazyAutoVideo
                        src={demoVideo.src}
                        className={styles.diaryFlowPhoneVideo}
                        aria-label={demoVideo.ariaLabel}
                      />
                    </div>
                  ),
                }}
              />
            </div>
          ) : null}
        </div>
      </div>

    </div>
  );
}
