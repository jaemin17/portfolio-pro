import { assetPath } from "@/i18n/assets";
import Image from "next/image";
import type { ReactNode } from "react";
import { LazyAutoVideo } from "@/components/LazyAutoVideo";
import styles from "./selfly0.module.css";

type DiaryInputFlowDiagramProps = {
  demoVideo?: {
    src: string;
    ariaLabel: string;
  };
};

const steps = [
  {
    id: 1,
    src: assetPath("/images/selfly0/diary-input-flow-step-2.webp"),
    alt: "步骤 1：半屏 Sheet 中选择表情",
    title: "选表情",
    caption: "分类 Sheet",
  },
  {
    id: 2,
    src: assetPath("/images/selfly0/diary-input-flow-step-3.webp"),
    alt: "步骤 2：Sheet 关闭后需再次点击输入框，键盘未展开",
    title: "需再次点击输入",
    caption: "改造前断点",
    breakpoint: true,
  },
  {
    id: 3,
    src: assetPath("/images/selfly0/diary-input-flow-step-4.webp"),
    alt: "步骤 3：键盘展开，可直接输入文字并确认发送",
    title: "输入发送",
    caption: "键盘展开",
  },
] as const;

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

function SkipOverStepTwoArrow({ fourColumn = false }: { fourColumn?: boolean }) {
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
        改造后
      </text>
    </svg>
  );
}

function FlowStepCard({
  step,
  hideBadge = false,
}: {
  step: (typeof steps)[number] | { id: number; title: string; caption: string; breakpoint?: boolean; demo?: ReactNode };
  hideBadge?: boolean;
}) {
  const isBreakpoint = "breakpoint" in step && step.breakpoint;

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
      {"demo" in step && step.demo ? (
        step.demo
      ) : (
        <div className={styles.diaryFlowPhone}>
          <Image
            src={(step as (typeof steps)[number]).src}
            alt={(step as (typeof steps)[number]).alt}
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

export function DiaryInputFlowDiagram({ demoVideo }: DiaryInputFlowDiagramProps = {}) {
  const hasDemo = Boolean(demoVideo);

  return (
    <div
      className={[styles.diaryFlowDiagram, hasDemo ? styles.diaryFlowDiagramWithDemo : ""]
        .filter(Boolean)
        .join(" ")}
      aria-label="日记输入流程：三步与优化跳转"
    >
      <div className={styles.diaryFlowRowWrap}>
        <SkipOverStepTwoArrow fourColumn={hasDemo} />
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
                  title: "改造后",
                  caption: "自动聚焦",
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
