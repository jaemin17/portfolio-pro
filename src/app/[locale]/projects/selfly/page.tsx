import { assetPath } from "@/i18n/assets";
import type { ReactNode } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import Link from "next/link";
import { localePath } from "@/i18n/paths";
import styles from "./selfly0.module.css";
import { TabStructureDiagram } from "./TabStructureDiagram";
import { ExploreRecordContainers } from "./ExploreRecordContainers";
import { ExploreTemplatesSwitcher } from "./ExploreTemplatesSwitcher";
import { ReviewRedistribution } from "./ReviewRedistribution";
import { ProductLaunchEvidence } from "./ProductLaunchEvidence";
import { DiaryEmojiInputPolish } from "./DiaryEmojiInputShowcase";
import { AppIconDesignShowcase } from "./AppIconDesignShowcase";
import { TodayRhythmSystem } from "./TodayRhythmSystem";

const appDownloadUrl = "https://apps.apple.com/cn/app/selfly%E6%97%A5%E8%AE%B0/id6762545235";

type Selfly0PageProps = {
  params: Promise<{ locale: string }>;
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

export default async function Selfly0Page({ params }: Selfly0PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={`${styles.pagePlain} ${styles.selfly0Page}`} data-page="about">
      <main className={styles.main}>
        <header className={`${styles.featuredHero} ${styles.projectOneHero}`}>
          <h1 className={styles.title}>
            <span className={styles.titleEn}>Selfly</span>
            <span className={styles.titleSep}>{t(locale, "：", ": ")}</span>
            <span className={styles.titleZh}>
              {t(locale, "让记录不再变成", "Journaling without the")}
              <span className={styles.strikeWord}>{t(locale, "压力", "pressure")}</span>
            </span>
          </h1>
          <p className={styles.subtitle}>
            {t(
              locale,
              "帮助用户每日聚焦、自我记录与长期回看的 iOS 产品",
              "An iOS app that helps you focus daily, record yourself, and look back over time",
            )}
          </p>
          <div className={styles.headerCta}>
            {/* eslint-disable-next-line @next/next/no-img-element -- static export: manual srcset replaces next/image */}
            <img
              src={assetPath("/images/selfly0/hero.webp")}
              srcSet={[
                `${assetPath("/images/selfly0/hero-750w.webp")} 750w`,
                `${assetPath("/images/selfly0/hero-1200w.webp")} 1200w`,
                `${assetPath("/images/selfly0/hero.webp")} 1664w`,
              ].join(", ")}
              sizes="(max-width: 980px) 100vw, 940px"
              alt="Selfly app preview showing Today, My Journal, and Review screens"
              width={1664}
              height={899}
              className={styles.appPreviewImage}
              fetchPriority="high"
              decoding="async"
            />
            <div className={styles.meta}>
              <span className={styles.metaItem}>2025–2026</span>
              <span className={styles.metaDot} aria-hidden="true">
                ·
              </span>
              <span className={styles.metaItem}>
                {t(locale, "独立产品设计与 iOS 开发", "Solo Product Designer & iOS Developer")}
              </span>
            </div>
            <a
              className="buttonSticker buttonStickerOrange"
              href={appDownloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t(locale, "下载体验 App", "Download the App")}
            </a>
          </div>
        </header>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0PositioningSection}>
            <h2 className={styles.selfly0PositioningLabel}>{t(locale, "产品定位", "Product Positioning")}</h2>
            <div className={styles.selfly0PositioningGrid}>
              <h3 className={styles.selfly0PositioningHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>
                  {t(locale, "从独立功能集合，", "From scattered features")}
                </span>
                <br className={styles.desktopLineBreak} aria-hidden="true" />
                <span className={styles.selfly0PositioningHeadingDark}>
                  {t(locale, "到可持续自我记录系统", "to a sustainable self-recording system")}
                </span>
              </h3>
              <div className={styles.selfly0PositioningBody}>
                {t(
                  locale,
                  <>
                    <p className={styles.p}>
                      Selfly 是一个面向长期使用的
                      <strong className={styles.selfly0Emphasis}>个人记录工具</strong>，帮助用户通过持续记录、回看与反思，更清晰地理解自己。
                    </p>
                    <p className={styles.p}>
                      在迭代过程中，我意识到，自我探索并不会在一次探索后结束。人在不同阶段会不断重新理解自己，真正需要的是
                      <strong className={styles.selfly0Emphasis}>长期记录、回看与反思</strong>。
                    </p>
                    <p className={styles.p}>
                      因此，我将 Selfly 从以
                      <strong className={styles.selfly0Emphasis}>价值观、优势等独立预设练习</strong>为主的探索工具，转向更长期的个人记录空间：提供
                      <strong className={styles.selfly0Emphasis}>更自由的记录方式</strong>，并通过
                      <strong className={styles.selfly0Emphasis}>每日聚焦与回顾机制</strong>，让记录真正进入日常。
                    </p>
                  </>,
                  <>
                    <p className={styles.p}>
                      Selfly is a <strong className={styles.selfly0Emphasis}>personal recording tool</strong> designed for long-term use, helping people understand themselves more clearly through ongoing recording, review, and reflection.
                    </p>
                    <p className={styles.p}>
                      As I iterated, I realized self-exploration doesn&apos;t end after one round of exploration. People keep re-understanding themselves at different life stages — what they really need is{" "}
                      <strong className={styles.selfly0Emphasis}>long-term recording, review, and reflection</strong>.
                    </p>
                    <p className={styles.p}>
                      So I evolved Selfly from a self-exploration tool built around{" "}
                      <strong className={styles.selfly0Emphasis}>separate preset exercises such as values and strengths</strong> into a long-term personal recording space: offering{" "}
                      <strong className={styles.selfly0Emphasis}>freer ways to record</strong> and using{" "}
                      <strong className={styles.selfly0Emphasis}>daily focus and review</strong> to bring recording into everyday life.
                    </p>
                  </>,
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={`${styles.positioningDiagram} ${styles.positioningPhaseCompare}`}>
            <div className={styles.positioningDiagramFlow}>
              <div className={styles.positioningDiagramCol}>
                <span className={styles.positioningDiagramPhase}>{t(locale, "前期", "Before")}</span>
                <div className={styles.positioningDiagramCopy}>
                  <p className={styles.positioningDiagramCaption}>{t(locale, "固定内容探索", "Preset self-exploration")}</p>
                  <p className={styles.positioningDiagramDescription}>{t(locale, "固定 · 单次 · 预设练习", "Fixed · One-off · Preset exercises")}</p>
                </div>
                <div className={styles.positioningPhoneFrame}>
                  <Image
                    src={assetPath("/images/selfly0/positioning-phone-1.webp")}
                    alt={tStr(locale, "前期：固定内容探索", "Before: preset self-exploration")}
                    width={360}
                    height={780}
                    className={styles.positioningDiagramPhone}
                  />
                </div>
              </div>
              <div className={styles.positioningDiagramArrow} aria-hidden="true">
                <svg width="101" height="24" viewBox="0 0 101 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 8.83373C2.57145 8.83373 2.64291 8.83373 18.6572 8.86261C34.6715 8.89149 66.6266 8.94925 82.8399 8.92303C99.0533 8.89681 98.5567 8.78487 94.2751 7.46963C89.9935 6.15438 81.9419 3.63923 79.0663 2.52903C78.3106 2.23727 87.2513 4.13874 95.8585 7.27645C98.634 8.28827 97.9217 8.763 94.7819 10.3823C91.6421 12.0016 86.0312 14.9151 82.3691 16.9772C78.707 19.0393 77.1636 20.1618 75.3912 21.4138" stroke="#FFA84A" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
              <div className={styles.positioningDiagramCol}>
                <span className={styles.positioningDiagramPhase}>{t(locale, "后期", "After")}</span>
                <div className={styles.positioningDiagramCopy}>
                  <p className={styles.positioningDiagramCaption}>{t(locale, "长期自我探索", "Long-term self-exploration")}</p>
                  <p className={styles.positioningDiagramDescription}>{t(locale, "自由 · 持续 · 自主记录", "Free-form · Ongoing · Self-directed recording")}</p>
                </div>
                <div className={styles.positioningPhoneFrame}>
                  <Image
                    src={assetPath("/images/selfly0/positioning-phone-3.webp")}
                    alt={tStr(locale, "后期：长期自我探索", "After: long-term self-exploration")}
                    width={360}
                    height={780}
                    className={styles.positioningDiagramPhone}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>{t(locale, "产品结构", "Product Structure")}</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>
                  {t(locale, "把「当下、记录、回看」组织成", "Organizing “now, record, and look back”")}
                </span>
                <span className={styles.selfly0PositioningHeadingDark}>
                  {t(locale, "一个日常循环", "into one daily loop")}
                </span>
              </h3>
              <div className={styles.selfly0Body}>
                <p>
                  {t(
                    locale,
                    "Selfly 用 Today / Explore / Review 三个 Tab 建立「当下—记录—回看」的清晰节奏。Today 聚焦每日重要的任务，Explore 负责记录更加长期的发现，Review 把旧内容重新带回。",
                    "Selfly uses three tabs — Today, Explore, and Review — to build a clear rhythm of “now → record → look back.” Today focuses on the day's most important tasks, Explore captures longer-term discoveries, and Review brings older entries back into view.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <TabStructureDiagram locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>
              <span className={styles.selfly0ChapterIndex}>01 /</span> {t(locale, "当下", "Today")}
            </h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>
                  {t(locale, "用 Top 3、Tomorrow 和 Backlog", "Using Top 3, Tomorrow, and Backlog")}
                </span>
                <span className={styles.selfly0PositioningHeadingDark}>
                  {t(locale, "控制任务压力", "to keep the day from overflowing")}
                </span>
              </h3>
              <div className={styles.selfly0Body}>
                {t(
                  locale,
                  <>
                    <p>
                      我为首页设置了 Top 3 的容量限制，让用户每天只保留三件最重要的事。
                      明确的边界减少了任务不断累积带来的压力，也把注意力从「收集更多任务」转向
                      <strong className={styles.selfly0Emphasis}>「判断今天真正重要的事」</strong>。
                    </p>
                    <div className={styles.designPoints}>
                      <h4>设计取舍</h4>
                      <ul>
                        <li><strong>Top 3</strong>：限制今日容量，迫使用户做选择</li>
                        <li><strong>Tomorrow</strong>：提前准备明日重点，降低第二天启动成本</li>
                        <li><strong>Backlog</strong>：承接暂不处理的事项，避免挤占今日注意力</li>
                        <li><strong>完成反馈</strong>：保留成就感，但不制造无限待办压力</li>
                      </ul>
                    </div>
                  </>,
                  <>
                    <p>
                      I set a Top 3 capacity on the home screen so users keep only the three things that matter most each day. A clear boundary reduces the pressure of an ever-growing task list and shifts attention from &ldquo;collecting more tasks&rdquo; to{" "}
                      <strong className={styles.selfly0Emphasis}>&ldquo;deciding what actually matters today&rdquo;</strong>.
                    </p>
                    <div className={styles.designPoints}>
                      <h4>Design Trade-offs</h4>
                      <ul>
                        <li><strong>Top 3</strong>: caps today&apos;s capacity, forcing a choice</li>
                        <li><strong>Tomorrow</strong>: prepares tomorrow&apos;s focus in advance, lowering the next day&apos;s start-up cost</li>
                        <li><strong>Backlog</strong>: holds items not due yet, so they don&apos;t crowd out today&apos;s attention</li>
                        <li><strong>Completion feedback</strong>: keeps a sense of accomplishment without creating endless to-do pressure</li>
                      </ul>
                    </div>
                  </>,
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <TodayRhythmSystem locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>
              <span className={styles.selfly0ChapterIndex}>02.1 /</span> {t(locale, "记录", "Explore")}
            </h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>
                  {t(locale, "把自我发现方式，", "Distilling self-discovery")}
                  <br className={styles.desktopLineBreak} aria-hidden="true" />
                  {t(locale, "抽象成", "into")}
                </span>
                <span className={styles.selfly0PositioningHeadingDark}>
                  {t(locale, "四种记录容器", "four record containers")}
                </span>
              </h3>
              <div className={styles.selfly0Body}>
                {t(
                  locale,
                  <>
                    <p>
                      原有的价值观、愿景板、成功日记和优势测试以独立功能呈现，入口彼此割裂。为降低理解成本，我按内容形态重新组织这些功能，将它们归纳为
                      <strong className={styles.selfly0Emphasis}>清单、计划、日记和图册四类记录容器</strong>。
                      用户理解的不再是一组预设用途的工具，而是不同的<strong className={styles.selfly0Emphasis}>记录方式</strong>。
                    </p>
                    <p>
                      按功能进入会更容易预设用途，<strong className={styles.selfly0Emphasis}>按容器进入能承接自我发现</strong>，同时适配不同人的内容、习惯和状态。
                      用户可以在归纳自己、记录感受、规划行动和想象未来之间，<strong className={styles.selfly0Emphasis}>选择合适的记录方式</strong>。
                    </p>
                    <div className={styles.designPoints}>
                      <h4>结构调整</h4>
                      <ul>
                        <li><strong>把功能入口抽象为记录容器</strong></li>
                        <li>减少用户理解成本</li>
                        <li>按内容形态匹配记录方式</li>
                        <li>兼容不同用户的个别记录情况</li>
                      </ul>
                    </div>
                  </>,
                  <>
                    <p>
                      Values, Vision Board, Success Diary, and Strengths Test originally appeared as separate features, leaving their entry points fragmented. To reduce cognitive overhead, I reorganized them by content form into{" "}
                      <strong className={styles.selfly0Emphasis}>four record containers: List, Plan, Journal, and Board</strong>. Users now encounter different{" "}
                      <strong className={styles.selfly0Emphasis}>ways of recording</strong>, rather than a set of tools with preset purposes.
                    </p>
                    <p>
                      Entering by feature tends to presuppose a fixed purpose; <strong className={styles.selfly0Emphasis}>entering by container leaves room for self-discovery</strong>, while adapting to each person&apos;s content, habits, and state.
                      Users can <strong className={styles.selfly0Emphasis}>choose whichever way of recording fits</strong> — summarizing themselves, capturing feelings, planning action, or imagining the future.
                    </p>
                    <div className={styles.designPoints}>
                      <h4>Structural Adjustments</h4>
                      <ul>
                        <li><strong>Abstracting feature entries into record containers</strong></li>
                        <li>Lowers the cost of understanding for users</li>
                        <li>Matches recording style to content type</li>
                        <li>Accommodates different users&apos; individual recording needs</li>
                      </ul>
                    </div>
                  </>,
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <ExploreRecordContainers locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>
              <span className={styles.selfly0ChapterIndex}>02.2 /</span> {t(locale, "记录", "Explore")}
            </h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>{t(locale, "用场景启发", "Using scenarios to spark")}</span>
                <span className={styles.selfly0PositioningHeadingDark}>{t(locale, "自我记录", "self-recording")}</span>
              </h3>
              <div className={styles.selfly0Body}>
                {t(
                  locale,
                  <>
                    <p>
                      自定义选项越多，新用户在开始记录前需要做的决定也越多。类型、名称、图标和设置等选择，会把注意力从记录内容转移到配置过程。
                      因此，我将创建流程拆分为两条路径：熟悉产品的用户可以自由配置，新用户则可以从情绪日记、年度目标、我的边界、理想自我等模板直接开始。
                    </p>
                    <div className={styles.designPoints}>
                      <h4>设计要点</h4>
                      <ul>
                        <li><strong>首次使用路径优化</strong></li>
                        <li>降低空白页压力</li>
                        <li>用场景解释模块</li>
                        <li>创建后直接进入记录</li>
                      </ul>
                    </div>
                  </>,
                  <>
                    <p>
                      The more customization options users face, the more decisions they must make before they can start recording. Choices about type, name, icon, and settings shift attention from the content itself to configuration.
                      So I split the creation flow into two paths: users familiar with the product can configure freely, while new users can start directly from templates like Mood Diary, Annual Goals, My Boundaries, or Ideal Self.
                    </p>
                    <div className={styles.designPoints}>
                      <h4>Design Highlights</h4>
                      <ul>
                        <li><strong>Optimized first-time path</strong></li>
                        <li>Reduces blank-page anxiety</li>
                        <li>Explains modules through scenarios</li>
                        <li>Goes straight into recording after creation</li>
                      </ul>
                    </div>
                  </>,
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <ExploreTemplatesSwitcher locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>
              <span className={styles.selfly0ChapterIndex}>02.3 /</span> {t(locale, "记录", "Explore")}
            </h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>
                  {t(locale, "用情绪图标，", "Using mood icons")}
                </span>
                <span className={styles.selfly0PositioningHeadingDark}>
                  {t(locale, "让文字记录更生动", "to make written entries more vivid")}
                </span>
              </h3>
              <div className={styles.selfly0Body}>
                {t(
                  locale,
                  <p>
                    文字能够记录发生了什么，情绪图标则补充当下的感受，让日记在回看时更直观、更有记忆点。由于发布仍需要文字输入，图标选择不应打断后续记录。因此，我在选择完成后<strong className={styles.selfly0Emphasis}>自动恢复输入框焦点</strong>，让「选情绪 → 写内容 → 发布」能够在同一次输入会话中自然完成。
                  </p>,
                  <p>
                    Text captures what happened, while mood icons add how it felt, making entries more vivid and easier to recognize when looking back. Because publishing still requires text input, choosing an icon should not interrupt the writing flow. So after an icon is selected, I <strong className={styles.selfly0Emphasis}>automatically restore focus to the text field</strong>, allowing &ldquo;choose a mood → write → publish&rdquo; to unfold naturally within one input session.
                  </p>,
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <DiaryEmojiInputPolish locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>
              <span className={styles.selfly0ChapterIndex}>03 /</span> {t(locale, "回看", "Review")}
            </h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>
                  {t(locale, "回顾机制：把沉淀内容", "Review mechanism: taking settled content")}
                </span>
                <span className={styles.selfly0PositioningHeadingDark}>
                  {t(locale, "重新分发给用户", "and redistributing it to users")}
                </span>
              </h3>
              <div className={styles.selfly0Body}>
                {t(
                  locale,
                  <>
                    <p>
                      如果记录只停留在各个模块里，<u>内容分散在不同模块中，回顾依赖用户主动进入</u>。我把回顾设计成一个跨模块的内容再分发机制：
                      清单、计划、日记、图册里的内容都可以进入每日卡片流，用户也可以选择全部、指定模块或指定分类。
                      这样，<u>系统每天从真实记录中抽取卡片，让旧内容重新出现</u>，不再依赖用户主动寻找。
                    </p>
                    <div className={styles.designPoints}>
                      <h4>机制设计</h4>
                      <ul>
                        <li><strong>跨模块重新分发内容</strong></li>
                        <li>支持自选回顾范围</li>
                        <li>弱化统计与连续性焦虑</li>
                      </ul>
                    </div>
                  </>,
                  <>
                    <p>
                      If entries only lived inside separate modules, <u>content would stay scattered across modules, and review would depend on users actively going to find it</u>. I designed Review as a cross-module content redistribution mechanism:
                      entries from List, Plan, Journal, and Board can all flow into a daily card stream, and users can choose everything, specific modules, or specific categories.
                      This way, <u>the system pulls cards from real entries every day, bringing old content back into view</u> — no longer dependent on users seeking it out.
                    </p>
                    <div className={styles.designPoints}>
                      <h4>Mechanism Design</h4>
                      <ul>
                        <li><strong>Redistributes content across modules</strong></li>
                        <li>Supports a custom review scope</li>
                        <li>De-emphasizes stats and streak anxiety</li>
                      </ul>
                    </div>
                  </>,
                )}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <ReviewRedistribution locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>{t(locale, "应用图标", "App Icon")}</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>{t(locale, "把「记录与成长」", "Distilling “recording and growth”")}</span>
                <span className={styles.selfly0PositioningHeadingDark}>{t(locale, "凝练成一个图标", "into one icon")}</span>
              </h3>
              <div className={styles.selfly0Body}>
                {t(
                  locale,
                  <p>
                    Selfly 的核心是「记录自己、看见变化」。我在图标设计里用<strong className={styles.selfly0Emphasis}>打开的书</strong>表达记录容器，用<strong className={styles.selfly0Emphasis}>蝴蝶</strong>表达成长与蜕变——两者叠加，传达「在记录中持续变化」的产品叙事。
                  </p>,
                  <p>
                    Selfly&apos;s core idea is &ldquo;record yourself, see the change.&rdquo; In the icon, I used <strong className={styles.selfly0Emphasis}>an open book</strong> to represent the record container, and{" "}
                    <strong className={styles.selfly0Emphasis}>a butterfly</strong> to represent growth and transformation — together, they tell the story of &ldquo;continuous change through recording.&rdquo;
                  </p>,
                )}
                <div className={styles.designPoints}>
                  <h4>{t(locale, "视觉取舍", "Visual Trade-offs")}</h4>
                  <ul>
                    {t(
                      locale,
                      <>
                        <li><strong>橙色书本 × 紫色蝴蝶，建立视觉层级</strong></li>
                        <li>简化线条，保证小尺寸识别</li>
                        <li>多显示模式一致性</li>
                      </>,
                      <>
                        <li><strong>Orange book × purple butterfly for clear visual hierarchy</strong></li>
                        <li>Simplified lines for small-size recognition</li>
                        <li>Consistency across display modes</li>
                      </>,
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <AppIconDesignShowcase locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>{t(locale, "产品化落地", "Shipping the Product")}</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>{t(locale, "把设计方案推进到", "Taking the design")}</span>
                <span className={styles.selfly0PositioningHeadingDark}>{t(locale, "真实可用的 iOS 产品", "to a real, working iOS product")}</span>
              </h3>
              <div className={styles.selfly0Body}>
                {t(
                  locale,
                  <p>
                    除了体验设计，我也独立完成了 Selfly 的 iOS 开发、上线与持续迭代。从界面实现、数据模型到同步与订阅，我将设计方案推进为真实可用的产品，并在实际使用中不断校准体验。
                  </p>,
                  <p>
                    Beyond experience design, I independently developed, launched, and continue to iterate on Selfly. From the interface and data model to sync and subscriptions, I turned the design into a working product and keep refining the experience through real-world use.
                  </p>,
                )}
                <div className={styles.designPoints}>
                  <h4>{t(locale, "落地能力", "Delivery Capabilities")}</h4>
                  <ul>
                    {t(
                      locale,
                      <>
                        <li><strong>从设计方案到 SwiftUI 实现</strong></li>
                        <li>数据模型、同步、订阅与多语言支持</li>
                        <li>真实使用场景下的体验边界校准</li>
                      </>,
                      <>
                        <li><strong>From design to SwiftUI implementation</strong></li>
                        <li>Data model, sync, subscriptions, and localization</li>
                        <li>Calibrating experience edge cases against real usage</li>
                      </>,
                    )}
                  </ul>
                </div>
                <div style={{ marginTop: "24px" }}>
                  <a
                    className="buttonSticker buttonStickerOrange"
                    href={appDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t(locale, "在 App Store 查看 Selfly", "View Selfly on the App Store")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <ProductLaunchEvidence locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>{t(locale, "项目反思", "Project Reflection")}</h2>
            <div className={styles.caseText}>
            <div className={styles.selfly0ReflectionBody}>
              {t(
                locale,
                <>
                  <p>
                    在推进 Selfly 从 0 到 1 的过程中，我逐渐意识到，真正困难的并不是持续增加功能，而是在不断变化的需求中保持产品边界清晰，并判断哪些能力真正支持长期使用。
                  </p>
                  <p>
                    独立完成这个项目，也训练了我从产品约束、体验判断到真实上线之间建立闭环的能力。设计不只停留在方案层面，也需要在实现、审核与持续迭代中被验证。
                  </p>
                </>,
                <>
                  <p>
                    While taking Selfly from 0 to 1, I gradually realized that the hardest part is not adding more features, but keeping the product&apos;s boundaries clear as needs evolve and deciding which capabilities truly support long-term use.
                  </p>
                  <p>
                    Building the project independently also taught me to close the loop between product constraints, experience judgment, and a real launch. Design cannot remain a proposal; it must be validated through implementation, review, and continuous iteration.
                  </p>
                </>,
              )}
            </div>
            </div>
          </div>
        </section>
        <section className={styles.selfly0ContactSection} aria-label={tStr(locale, "结语", "Closing")}>
          <div className={styles.selfly0ContactInner}>
            <p className={styles.selfly0ContactClosing}>{t(locale, "感谢你看到这里 :) ✰", "Thanks for reading this far :) ✰")}</p>
            <Link className={styles.selfly0ContactBack} href={localePath(locale, "/")}>
              {t(locale, "← 返回首页", "← Back to home")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
