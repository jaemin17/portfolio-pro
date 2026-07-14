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
import {
  DiaryEmojiInputPolish,
  DiaryEmojiPickerCompare,
} from "./DiaryEmojiInputShowcase";
import { AppIconDesignShowcase } from "./AppIconDesignShowcase";
import { TodayRhythmSystem } from "./TodayRhythmSystem";
import { TodayTaskCardInteraction } from "./TodayTaskCardInteraction";

const appDownloadUrl = "https://apps.apple.com/cn/app/selfly%E6%97%A5%E8%AE%B0/id6762545235";

type Selfly0PageProps = {
  params: Promise<{ locale: string }>;
};

function ChapterIntro({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={styles.selfly0ChapterIntro}
      aria-labelledby={`selfly0-chapter-${id}`}
    >
      <div className={styles.selfly0ChapterInner}>
        <div className={styles.selfly0ChapterCopy}>
          <span className={styles.selfly0ChapterIcon} aria-hidden="true">
            {icon}
          </span>
          <div>
            <h2 id={`selfly0-chapter-${id}`}>{title}</h2>
            <p>{children}</p>
          </div>
        </div>

      </div>
    </section>
  );
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
            <span className={styles.titleSep}>：</span>
            <span className={styles.titleZh}>
              让记录不再变成
              <span className={styles.strikeWord}>压力</span>
            </span>
          </h1>
          <p className={styles.subtitle}>帮助用户每日聚焦、自我记录与长期回看的 iOS 产品</p>
          <div className={styles.headerCta}>
            <Image
              src={assetPath("/images/selfly0/hero.webp")}
              alt="Selfly app preview showing Today, My Journal, and Review screens"
              width={1500}
              height={844}
              className={styles.appPreviewImage}
              priority
            />
            <div className={styles.meta}>
              <span className={styles.metaItem}>2025–2026</span>
              <span className={styles.metaDot} aria-hidden="true">
                ·
              </span>
              <span className={styles.metaItem}>Solo Product Designer & iOS Developer</span>
            </div>
            <a
              className="buttonSticker buttonStickerOrange"
              href={appDownloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              下载体验 App
            </a>
          </div>
        </header>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0PositioningSection}>
            <h2 className={styles.selfly0PositioningLabel}>产品定位</h2>
            <div className={styles.selfly0PositioningGrid}>
              <h3 className={styles.selfly0PositioningHeading}><span className={styles.selfly0PositioningHeadingLight}>从独立功能集合，</span><br className={styles.desktopLineBreak} aria-hidden="true" /><span className={styles.selfly0PositioningHeadingDark}>到可持续自我记录系统</span></h3>
              <div className={styles.selfly0PositioningBody}>
                <p className={styles.p}>
                  Selfly 最初是一个帮助用户进行「自我探索」的工具，通过价值观、优势等练习，让人更清晰地认识自己。它来源于我的<strong className={styles.selfly0Emphasis}>个人真实需求</strong>。
                </p>
                <p className={styles.p}>
                  在迭代过程中，我意识到，自我探索并不会在一次测试后结束。人在不同阶段会不断重新理解自己，真正需要的是
                  <strong className={styles.selfly0Emphasis}>长期记录、回看与反思</strong>。
                </p>
                <p className={styles.p}>
                  于是，Selfly 从一次性的自我探索工具，转向
                  <strong className={styles.selfly0Emphasis}>更长期的个人记录空间</strong>
                  ——从预设练习调整为
                  <strong className={styles.selfly0Emphasis}>更自由的记录方式</strong>，并通过
                  <strong className={styles.selfly0Emphasis}>每日聚焦</strong>与
                  <strong className={styles.selfly0Emphasis}>回顾机制</strong>，让记录真正进入日常。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={`${styles.positioningDiagram} ${styles.positioningPhaseCompare}`}>
            <div className={styles.positioningDiagramFlow}>
              <div className={styles.positioningDiagramCol}>
                <span className={styles.positioningDiagramPhase}>前期</span>
                <span className={styles.positioningDiagramCaption}>固定内容入口</span>
                <div className={styles.positioningPhoneFrame}>
                  <Image
                    src={assetPath("/images/selfly0/positioning-phone-1.webp")}
                    alt="前期：固定内容入口"
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
                <span className={styles.positioningDiagramPhase}>后期</span>
                <span className={styles.positioningDiagramCaption}>个人记录空间</span>
                <div className={styles.positioningPhoneFrame}>
                  <Image
                    src={assetPath("/images/selfly0/positioning-phone-3.webp")}
                    alt="后期：个人记录空间"
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
            <h2 className={styles.selfly0PositioningLabel}>产品结构</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}><span className={styles.selfly0PositioningHeadingLight}>把「当下、记录、回看」组织成</span><span className={styles.selfly0PositioningHeadingDark}>一个日常循环</span></h3>
              <div className={styles.selfly0Body}>
                <p>
                  Selfly 用 Today / Explore / Review 三个 Tab 建立「当下—记录—回看」的清晰节奏。Today 聚焦每日重要的任务，Explore 负责记录更加长期的发现，Review 把旧内容重新带回。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <TabStructureDiagram />
        </section>
        <ChapterIntro id="today" icon="🎯" title="Today：降低任务压力">
          今日不是为了收集更多任务，而是帮助用户判断今天真正重要的事。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>每日任务节奏</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>用 Top 3、Tomorrow 和 Backlog</span>
                <span className={styles.selfly0PositioningHeadingDark}>控制任务压力</span>
              </h3>
              <div className={styles.selfly0Body}>
                <p>
                  我没有把首页设计成可以无限添加的任务列表，而是让用户每天只保留三件最重要的事。
                  这个限制不是功能缺失，而是刻意把「收集更多任务」转成
                  <strong className={styles.selfly0Emphasis}>判断今天真正重要的事</strong>。
                </p>
                <p>
                  仅限制今日任务还不够，用户仍然需要处理那些暂时不属于今天、但仍需要保留的事项。
                  因此我把今日页拆成 Today / Tomorrow / Backlog：今天要做的进入 Top 3，提前想好的进入 Tomorrow，暂不处理的进入 Backlog。
                  这个结构让今日页保持轻量，同时给未来事项一个明确去处。
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
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <TodayRhythmSystem />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>任务卡片交互</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>平衡低压力视觉与</span>
                <br />
                <span className={styles.selfly0PositioningHeadingDark}>明确操作</span>
              </h3>
              <div className={styles.selfly0Body}>
                <p>
                  早期版本中，我有意<strong className={styles.selfly0Emphasis}>弱化未完成状态</strong>，避免 Today 像传统待办列表一样，用醒目的 Checkbox 持续提醒用户「还有任务没完成」。
                  我将完成操作隐藏在任务卡片中，让未完成任务更像<strong className={styles.selfly0Emphasis}>「今日关注」</strong>，而非压力清单。
                </p>
                <p>
                  但在真实反馈中，用户编辑任务时容易<strong className={styles.selfly0Emphasis}>误触完成</strong>；完成结果被收起后，用户也更容易失去对「我今天已经完成了什么」的<strong className={styles.selfly0Emphasis}>确认感</strong>。
                </p>
                <p>
                  最终，我重新引入了<strong className={styles.selfly0Emphasis}>用户熟悉的完成交互</strong>：卡片主体用于编辑，右侧完成方块负责状态操作。同时完成控件保持克制，只提供明确操作，<strong className={styles.selfly0Emphasis}>不成为视觉主角</strong>，在减少压力与保留完成反馈之间取得平衡。
                </p>
                <div className={styles.designPoints}>
                  <h4>设计取舍</h4>
                  <ul>
                    <li><strong>降低压力感</strong>：未完成状态不成为视觉主角</li>
                    <li><strong>回到用户习惯</strong>：点击内容进入编辑，点击方块改变状态</li>
                    <li><strong>保留确认感</strong>：完成结果可见，但不打断继续专注</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <TodayTaskCardInteraction />
        </section>
        <ChapterIntro id="explore" icon="🧩" title="Explore：降低开始记录的成本">
          通过不同记录容器，承接不同用户、不同内容状态下的自我发现方式。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>模块化记录</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}><span className={styles.selfly0PositioningHeadingLight}>把自我发现方式，<br className={styles.desktopLineBreak} aria-hidden="true" />抽象成</span><span className={styles.selfly0PositioningHeadingDark}>四种记录容器</span></h3>
              <div className={styles.selfly0Body}>
                <p>
                  我对原有自我探索功能进行结构重组，把价值观、愿景板、成功日记、优势测试等独立入口，抽象成
                  <strong className={styles.selfly0Emphasis}>清单、计划、日记和图册四类记录容器</strong>。
                  这样用户理解的是<strong className={styles.selfly0Emphasis}>记录方式</strong>，而不是一组彼此割裂的工具。
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
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <ExploreRecordContainers />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>优化创建体验</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}><span className={styles.selfly0PositioningHeadingLight}>用场景启发</span><span className={styles.selfly0PositioningHeadingDark}>自我记录</span></h3>
              <div className={styles.selfly0Body}>
                <p>
                  我发现高度自定义并不等于容易开始。新用户如果一开始就面对类型、名称、图标和设置，启动成本反而会被提前放大。
                  因此我把创建模块改成两条路径：熟悉产品的人可以自定义，新用户可以从情绪日记、年度目标、我的边界、理想自我等模板直接开始。
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
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <ExploreTemplatesSwitcher locale={locale} />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>日记输入体验</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>从内联展开条，</span>
                <span className={styles.selfly0PositioningHeadingDark}>到可扩展的 Sheet 系统</span>
              </h3>
              <div className={styles.selfly0Body}>
                <p>
                  日记记录同时包含情绪与文字：用户用 emoji 标记当下状态，再补充具体感受。最早的表情选择是在输入框上方展开一条横向滚动条——轻量、不打断输入流，适合选项较少的阶段。
                  但随着候选 emoji 增加，横向扫完所有选项也不现实。
                </p>
                <p>
                  我把选择器改成<strong className={styles.selfly0Emphasis}>半屏 Sheet + 网格布局</strong>。
                </p>
                <div className={styles.designPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>范式切换</strong>：横向条在选项增多后难以浏览，改为半屏 Sheet 网格，并统一了 App 内的选择器交互</li>
                    <li><strong>分组 IA</strong>：emoji 扩至 40+ 后，按表情 / 爱心 / 天气 / 自然分组，替代扁平盲扫</li>
                    <li><strong>稳定目录</strong>：撤销 MRU 动态排序；固定分组顺序 + 记住上次选择 + 条目 emoji 快捷修改</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <DiaryEmojiPickerCompare />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>体验抛光</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>让「选情绪 + 写文字」</span>
                <span className={styles.selfly0PositioningHeadingDark}>成为一条连贯路径</span>
              </h3>
              <div className={styles.selfly0Body}>
                <p>
                  在测试过程中，我发现用户选择完表情并关闭 Sheet 后，键盘会自动收起，必须再次点击输入框才能继续记录。虽然只是一次额外操作，却打断了原本连续的输入流程。
                </p>
                <p>
                  由于发送按钮始终依附于文本输入区域，用户最终仍需要回到文字输入完成发布。因此，我在表情选择完成后<strong className={styles.selfly0Emphasis}>自动恢复输入框焦点</strong>，让「选情绪 → 写内容 → 发布」能够在同一次输入会话中自然完成，进一步<strong className={styles.selfly0Emphasis}>减少记录过程中的操作摩擦</strong>。
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <DiaryEmojiInputPolish />
        </section>
        <ChapterIntro id="review" icon="🕰️" title="Review：让旧内容重新出现">
          回顾不是数据统计，而是把过去的记录轻量地带回用户面前。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>低压力回顾</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}><span className={styles.selfly0PositioningHeadingLight}>回顾机制：把沉淀内容</span><span className={styles.selfly0PositioningHeadingDark}>重新分发给用户</span></h3>
              <div className={styles.selfly0Body}>
                <p>
                  如果记录只停留在各个模块里，<u>内容分散在不同模块中，回顾依赖用户主动进入</u>。我把回顾设计成一个跨模块的内容再分发机制：
                  清单、计划、日记、图册里的内容都可以进入每日卡片流，用户也可以选择全部、指定模块或指定分类。
                  这样，<u>系统每天从真实记录中抽取卡片，让旧内容重新出现</u>，不再依赖用户主动寻找。
                </p>
                <p>
                  我没有把回顾页做成数据中心，而是刻意弱化连续打卡、完成统计和趋势分析带来的焦虑。
                  回顾更接近翻阅旧笔记：用户可以轻量浏览过去的记录，并重新理解当时在意的内容。
                </p>
                <div className={styles.designPoints}>
                  <h4>机制设计</h4>
                  <ul>
                    <li><strong>跨模块重新分发内容</strong></li>
                    <li>支持自选回顾范围</li>
                    <li>弱化统计与连续性焦虑</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <ReviewRedistribution />
        </section>
        <ChapterIntro id="brand" icon="✨" title="应用图标：记录与成长的视觉隐喻">
          图标需要在极小尺寸下讲清楚产品气质——我围绕「书」与「蝴蝶」做了多轮迭代，最终收敛为开放边框与双色蝴蝶。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>应用图标</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>从书本隐喻到</span>
                <span className={styles.selfly0PositioningHeadingDark}>开放边框</span>
              </h3>
              <div className={styles.selfly0Body}>
                <p>
                  Selfly 的核心是「记录自己、看见变化」。我在图标设计里用<strong className={styles.selfly0Emphasis}>打开的书</strong>表达记录容器，用<strong className={styles.selfly0Emphasis}>蝴蝶</strong>表达成长与蜕变——两者叠加，传达「在记录中持续变化」的产品叙事。
                </p>
                <p>
                  过程中我尝试过更强的手绘感，也尝试过更精致、曲线更多的书本轮廓；但这些方向在小尺寸下容易变复杂。最后我把书本收敛成<strong className={styles.selfly0Emphasis}>不闭合的橙色边框</strong>：既保留记录空间的隐喻，也让蝴蝶飞出边界，暗示记录不是封闭容器，而是持续展开的过程。
                </p>
                <div className={styles.designPoints}>
                  <h4>设计决策</h4>
                  <ul>
                    <li><strong>橙 × 紫的品牌色对比</strong></li>
                    <li>小尺寸优先：减少线条与细节</li>
                    <li>双色蝴蝶作为视觉锚点，连接两种主色</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <AppIconDesignShowcase />
        </section>
        <ChapterIntro id="launch" icon="🚀" title="iOS 落地与上线">
          这个项目不只停留在设计方案，我也把它实现为可下载、可使用、可订阅的 iOS 产品。
        </ChapterIntro>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>产品化落地</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}><span className={styles.selfly0PositioningHeadingLight}>把设计方案推进到</span><span className={styles.selfly0PositioningHeadingDark}>真实可用的 iOS 产品</span></h3>
              <div className={styles.selfly0Body}>
                <p>
                  除了体验设计，我也独立完成了 Selfly 的 iOS 实现，包括 SwiftUI 界面、SwiftData
                  数据模型、iCloud 同步、StoreKit 订阅、多语言和数据重置等能力，让设计方案能够在真实交互和上线环境中成立。
                </p>
                <p>
                  在实现过程中，我也持续校准真实使用中的体验边界，例如长文本承载、多语言显示、交互状态、内容清晰度和页面反馈，
                  确保产品在不同内容和使用场景下依然稳定、清楚、可用。
                </p>
                <div className={styles.designPoints}>
                  <h4>落地能力</h4>
                  <ul>
                    <li><strong>从设计方案到 SwiftUI 实现</strong></li>
                    <li>数据模型、同步、订阅与多语言支持</li>
                    <li>真实使用场景下的体验边界校准</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <ProductLaunchEvidence />
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>App Store 上线</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}><span className={styles.selfly0PositioningHeadingLight}>从内部版本到</span><span className={styles.selfly0PositioningHeadingDark}>可下载的公开产品</span></h3>
              <div className={styles.selfly0Body}>
                <p>
                  我独立完成了 App Store Connect 配置、审核材料、隐私与订阅说明，以及提审反馈处理，让 Selfly
                  成为可公开下载的 iOS 应用。
                </p>
                <div className={styles.designPoints}>
                  <h4>上架清单</h4>
                  <ul>
                    <li><strong>App Store Connect 配置</strong></li>
                    <li>审核材料与产品描述</li>
                    <li>隐私、订阅与权限说明</li>
                    <li>提审反馈处理与版本发布</li>
                  </ul>
                </div>
                <p className={styles.p}>
                  <a
                    className="buttonSticker buttonStickerOrange"
                    href={appDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    在 App Store 查看 Selfly
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>项目反思</h2>
            <div className={styles.caseText}>
            <div className={styles.selfly0ReflectionBody}>
              <p>
                Selfly 让我更明确地意识到，产品体验的质量往往来自连续的取舍，而不是单个功能的完成度。面向长期使用的个人工具，需要持续平衡功能完整性、信息密度和情绪负担。
              </p>
              <p>
                这个过程也让我意识到，0 到 1 阶段最难的并不是持续增加功能，而是在不断变化的需求中保持产品边界清晰，并判断哪些能力真正支撑长期使用。
              </p>
              <p>
                作为一个独立完成的产品项目，它也训练了我从产品约束、体验判断到真实上线之间建立闭环的能力：设计不只停留在方案层面，也需要在实现、审核和持续迭代中被验证。
              </p>
            </div>
            </div>
          </div>
        </section>
        <hr className={styles.selfly0SectionDivider} aria-hidden="true" />
        <section className={styles.selfly0ContactSection} aria-labelledby="selfly0-contact-title">
          <div className={styles.selfly0ContactInner}>
            <h2 id="selfly0-contact-title">想了解更多细节？</h2>
            <p>欢迎联系我聊聊这个项目。</p>
            <a href="mailto:lijaemin1993@gmail.com?subject=Selfly%20project" className={styles.selfly0ContactLink}>
              lijaemin1993@gmail.com
            </a>
            <div style={{ marginTop: "24px" }}>
              <Link className="buttonSticker buttonStickerOrange" href={localePath(locale, "/")}>
                返回首页
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
