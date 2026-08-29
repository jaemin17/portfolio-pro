import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import modelStyles from "../model-editor/modelEditor.module.css";
import selflyStyles from "../selfly/selfly0.module.css";
import styles from "./officeTools.module.css";

type OfficeToolsPageProps = {
  params: Promise<{ locale: string }>;
};

type ToolCopy = {
  title: string;
  body: ReactNode;
  href: string;
  preview: "notes" | "next" | "tday";
  coverSrc?: string;
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

function ToolPreview({
  type,
  coverSrc,
}: {
  type: ToolCopy["preview"];
  coverSrc?: string;
}) {
  if (coverSrc) {
    return (
      <div className={styles.notesPreview} aria-hidden="true">
        <img
          className={styles.toolCoverImage}
          src={assetPath(coverSrc)}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }

  if (type === "tday") {
    return (
      <div className={styles.tdayPreview} aria-hidden="true">
        <span className={styles.tdayNumber}>8</span>
        <div className={styles.tdayCal}>
          {Array.from({ length: 12 }, (_, index) => (
            <span
              key={index}
              className={
                index === 11
                  ? styles.tdayCellTarget
                  : index >= 7
                    ? styles.tdayCellActive
                    : styles.tdayCell
              }
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.nextPreview} aria-hidden="true">
      <span className={styles.planNode}>Draft</span>
      <span className={styles.planLine} />
      <span className={styles.planNode}>Today</span>
      <span className={styles.planNodeMuted}>Later</span>
    </div>
  );
}

export default async function OfficeToolsPage({ params }: OfficeToolsPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  const tools: ToolCopy[] = [
    {
      title: "Sticky Notes",
      body: t(
        locale,
        "用于把临时信息、想法和片段先放下来，不需要创建文档或进入复杂的知识库。",
        "A small place to put temporary information, ideas, and fragments without creating a document or opening a heavier knowledge base.",
      ),
      href: "https://jaemin17.github.io/sticky-notes/",
      preview: "notes",
      coverSrc: "/images/tools/personal-tools-cover.png",
    },
    {
      title: "Next",
      body: t(
        locale,
        "用于把想法摊开到空间画布上，重新排列，把思绪理清楚。",
        "A spatial canvas for laying out thoughts, rearranging them, and getting thinking clear.",
      ),
      href: "https://jaemin17.github.io/plan/",
      preview: "next",
      coverSrc: "/images/tools/next-cover.png",
    },
    {
      title: "T-Day",
      body: t(
        locale,
        "用于在截止日期前把任务安排好。",
        "A countdown for lining up tasks before a deadline.",
      ),
      href: "https://jaemin17.github.io/t-day/",
      preview: "tday",
      coverSrc: "/images/tools/tday-cover.png",
    },
  ];

  return (
    <div className={`${selflyStyles.pagePlain} ${selflyStyles.selfly0Page}`} data-page="personal-tools">
      <main className={selflyStyles.main}>
        <header className={`${selflyStyles.featuredHero} ${selflyStyles.projectOneHero}`}>
          <h1 className={selflyStyles.title} aria-label="Personal Tools">
            Personal <span className={styles.titleEmphasis}>Tools</span>
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "一组为自己日常工作流做的轻量浏览器工具，用来处理计划、记录、倒计时和临时整理。",
              "A small collection of browser tools I built for my own daily workflow: planning, notes, countdown, and temporary organization.",
            )}
          </p>
          <div className={selflyStyles.meta}>
            <span className={selflyStyles.metaItem}>2026</span>
            <span className={selflyStyles.metaDot} aria-hidden="true">
              ·
            </span>
            <span className={selflyStyles.metaItem}>Personal Workflow</span>
            <span className={selflyStyles.metaDot} aria-hidden="true">
              ·
            </span>
            <span className={selflyStyles.metaItem}>Web</span>
          </div>
        </header>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={modelStyles.positioningSection} aria-label={tStr(locale, "工具列表", "Tool list")}>
            <div className={modelStyles.positioningInner}>
              <div className={styles.toolsGrid}>
                {tools.map((tool) => (
                  <a
                    className={styles.toolCard}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tStr(locale, `打开 ${tool.title}`, `Open ${tool.title}`)}
                    key={tool.title}
                  >
                    <ToolPreview type={tool.preview} coverSrc={tool.coverSrc} />
                    <div className={styles.toolBody}>
                      <h3>{tool.title}</h3>
                      <p>{tool.body}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={selflyStyles.selfly0ContactSection} aria-label={tStr(locale, "结语", "Closing")}>
          <div className={`${selflyStyles.selfly0ContactInner} ${modelStyles.contactAlign}`}>
            <Link className={selflyStyles.selfly0ContactBack} href={localePath(locale, "/")}>
              {t(locale, "← 返回首页", "← Back to home")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
