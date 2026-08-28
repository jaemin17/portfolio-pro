import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import styles from "./officeTools.module.css";

type OfficeToolsPageProps = {
  params: Promise<{ locale: string }>;
};

type ToolCopy = {
  title: string;
  eyebrow: string;
  body: ReactNode;
  href: string;
  cta: string;
  preview: "notes" | "next" | "tday";
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

function ToolPreview({ type }: { type: ToolCopy["preview"] }) {
  if (type === "notes") {
    return (
      <div className={styles.notesPreview} aria-hidden="true">
        <span className={styles.noteYellow} />
        <span className={styles.noteBlue} />
        <span className={styles.notePink} />
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
      eyebrow: tStr(locale, "快速记录", "Quick capture"),
      body: t(
        locale,
        "用于把临时信息、想法和片段先放下来，不需要创建文档或进入复杂的知识库。",
        "A small place to put temporary information, ideas, and fragments without creating a document or opening a heavier knowledge base.",
      ),
      href: "https://jaemin17.github.io/sticky-notes/",
      cta: tStr(locale, "打开 Sticky Notes", "Open Sticky Notes"),
      preview: "notes",
    },
    {
      title: "Next",
      eyebrow: tStr(locale, "当天计划", "Daily planning"),
      body: t(
        locale,
        "用于把今天要处理的事情放在一个空间画布里，适合临时计划、重新排序和把任务从脑子里拿出来。",
        "A spatial canvas for today's tasks, useful for temporary planning, reordering, and getting work out of my head.",
      ),
      href: "https://jaemin17.github.io/plan/",
      cta: tStr(locale, "打开 Next", "Open Next"),
      preview: "next",
    },
    {
      title: "T-Day",
      eyebrow: tStr(locale, "目标倒计时", "Countdown"),
      body: t(
        locale,
        "用于把重要的目标日放在日历上，随时看到还剩多少天，并在倒计时范围内安排事情。",
        "A calendar countdown to a target date, useful for keeping an important day in view and planning the days leading up to it.",
      ),
      href: "https://jaemin17.github.io/t-day/",
      cta: tStr(locale, "打开 T-Day", "Open T-Day"),
      preview: "tday",
    },
  ];

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element -- simple static SVG asset */}
        <img
          className={styles.heroIcon}
          src={assetPath("/office-tools-icon.svg")}
          alt=""
          width={88}
          height={88}
          aria-hidden="true"
        />
        <p className={styles.kicker}>{t(locale, "0→1 独立开发", "0→1 Build")}</p>
        <h1 className={styles.title}>Personal Tools</h1>
        <p className={styles.lead}>
          {t(
            locale,
            "一组为自己日常工作流做的轻量浏览器工具，用来处理计划、记录、倒计时和临时整理。",
            "A small collection of browser tools I built for my own daily workflow: planning, notes, countdown, and temporary organization.",
          )}
        </p>
        <div className={styles.meta} aria-label={tStr(locale, "项目信息", "Project information")}>
          <span>2026</span>
          <span aria-hidden="true">·</span>
          <span>Personal Workflow</span>
          <span aria-hidden="true">·</span>
          <span>Web</span>
        </div>
      </header>

      <section className={styles.story} aria-label={tStr(locale, "项目背景", "Project background")}>
        <p className={styles.sectionLabel}>{t(locale, "项目背景", "Project Background")}</p>
        <div className={styles.storyGrid}>
          <h2>
            {t(
              locale,
              <>
                把每天的小摩擦，
                <br />
                做成顺手的工具
              </>,
              <>
                Turning daily friction
                <br />
                into small useful tools
              </>,
            )}
          </h2>
          <div className={styles.storyBody}>
            <p>
              {t(
                locale,
                "这些工具不是从完整商业需求开始的，而是来自我每天反复遇到的小摩擦：有些内容只需要先记下来，有些任务只需要今天被看见和重新摆放，有些日子只需要被倒计时看见。",
                "These tools did not start from a full commercial brief. They came from repeated daily friction: some information only needs to be captured quickly, some tasks only need to be visible and movable today, and some dates only need a countdown.",
              )}
            </p>
            <p>
              {t(
                locale,
                "所以它们共同遵循一个原则：打开就能用，不需要账号，不把临时工作流变成更重的系统。",
                "They share the same principle: open and use immediately, with no account, and without turning temporary workflows into a heavier system.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.toolsSection} aria-label={tStr(locale, "工具列表", "Tool list")}>
        <p className={styles.sectionLabel}>{t(locale, "工具集合", "Tool Collection")}</p>
        <div className={styles.toolsGrid}>
          {tools.map((tool) => (
            <article className={styles.toolCard} key={tool.title}>
              <ToolPreview type={tool.preview} />
              <div className={styles.toolBody}>
                <p className={styles.toolEyebrow}>{tool.eyebrow}</p>
                <h2>{tool.title}</h2>
                <p>{tool.body}</p>
                <a className={styles.toolLink} href={tool.href} target="_blank" rel="noopener noreferrer">
                  {tool.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.footerLink} href={localePath(locale, "/")}>
          {t(locale, "← 返回首页", "← Back home")}
        </Link>
      </footer>
    </main>
  );
}
