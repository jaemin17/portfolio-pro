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
  1: assetPath("/images/selfly0/diary-input-flow-step-2.webp"),
  2: assetPath("/images/selfly0/diary-input-flow-step-3.webp"),
  3: assetPath("/images/selfly0/diary-input-flow-step-4.webp"),
} as const;

const copy = {
  zh: {
    diagramLabel: "日记输入流程：三步与优化跳转",
    skipLabel: "改造后",
    demoTitle: "改造后",
    demoCaption: "自动聚焦",
    steps: [
      { id: 1, alt: "步骤 1：半屏 Sheet 中选择表情", title: "选表情", caption: "分类 Sheet" },
      { id: 2, alt: "步骤 2：Sheet 关闭后需再次点击输入框，键盘未展开", title: "需再次点击输入", caption: "改造前断点", breakpoint: true },
      { id: 3, alt: "步骤 3：键盘展开，可直接输入文字并确认发送", title: "输入发送", caption: "键盘展开" },
    ],
  },
  en: {
    diagramLabel: "Diary input flow: three steps and the optimized jump",
    skipLabel: "After",
    demoTitle: "After",
    demoCaption: "Auto-focus",
    steps: [
      { id: 1, alt: "Step 1: pick a mood in the half-screen sheet", title: "Pick mood", caption: "Category sheet" },
      { id: 2, alt: "Step 2: after the sheet closes, the user must tap the text field again — keyboard not shown", title: "Must tap again", caption: "Before: break point", breakpoint: true },
      { id: 3, alt: "Step 3: keyboard appears, ready to type and send", title: "Type & send", caption: "Keyboard shown" },
    ],
  },
} as const;

function FlowArrow({ skipped = false }: { skipped?: boolean }) {
  return (
    <svg
      className={`${styles.diaryFlowInlineArrow} ${skipped ? styles.diaryFlowInlineArrowSkipped : ""}`}
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
        strokeDasharray={skipped ? "4 4" : undefined}
      />
    </svg>
  );
}

function SkipOverStepTwoArrow({ fourColumn = false, label }: { fourColumn?: boolean; label: string }) {
  // Arc spans step ① → over ② → step ③ (proportional to card + inline-arrow layout).
  const step1X = fourColumn ? 99 : 131;
  const step2X = fourColumn ? 333 : 450;
  const step3X = fourColumn ? 567 : 769;

  return (
    <svg
      className={styles.diaryFlowSkipArc}
      viewBox="0 0 900 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="diaryFlowSkipArrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0 0L8 4L0 8Z" fill="#FFBC6E" />
        </marker>
      </defs>
      <path
        d={`M${step1X} 8 Q${step2X} 100 ${step3X} 8`}
        stroke="#FFBC6E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 5"
        markerEnd="url(#diaryFlowSkipArrowhead)"
      />
      <text
        className={styles.diaryFlowSkipLabel}
        x={step2X}
        y="102"
        textAnchor="middle"
        fill="#FFBC6E"
        fontSize="16"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

type FlowStep = {
  id: number;
  src?: string;
  alt?: string;
  title: string;
  caption: string;
  breakpoint?: boolean;
  demo?: ReactNode;
};

function FlowStepCard({
  step,
  hideBadge = false,
}: {
  step: FlowStep;
  hideBadge?: boolean;
}) {
  const isBreakpoint = Boolean(step.breakpoint);

  return (
    <div
      className={[
        styles.diaryFlowStepCard,
        isBreakpoint ? styles.diaryFlowStepCardBreakpoint : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {hideBadge ? null : (
        <span
          className={[
            styles.diaryFlowStepBadge,
            isBreakpoint ? styles.diaryFlowStepBadgeBreakpoint : "",
          ]
            .filter(Boolean)
            .join(" ")}
          aria-hidden="true"
        >
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
        <SkipOverStepTwoArrow fourColumn={hasDemo} label={c.skipLabel} />
        <div className={styles.diaryFlowRow}>
          {steps.map((step, index) => (
            <div key={step.id} className={styles.diaryFlowStepGroup}>
              <FlowStepCard step={step} />
              {index < steps.length - 1 ? (
                <div className={styles.diaryFlowArrowWrap}>
                  <FlowArrow skipped={index === 0} />
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
