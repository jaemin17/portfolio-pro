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
            <h2 className={styles.selfly0PositioningLabel}>体验抛光</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>让「选情绪 + 写文字」</span>
                <span className={styles.selfly0PositioningHeadingDark}>成为一条连贯路径</span>
              </h3>
              <div className={styles.selfly0Body}>
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
        <section className={`${styles.caseSection} ${styles.selfly0CaseSection}`}>
          <div className={styles.selfly0StructureSection}>
            <h2 className={styles.selfly0PositioningLabel}>应用图标</h2>
            <div className={styles.caseText}>
              <h3 className={styles.selfly0StructureHeading}>
                <span className={styles.selfly0PositioningHeadingLight}>围绕</span>
                <span className={styles.selfly0PositioningHeadingDark}>「书」</span>
                <span className={styles.selfly0PositioningHeadingLight}>与</span>
                <span className={styles.selfly0PositioningHeadingDark}>「蝴蝶」</span>
              </h3>
              <div className={styles.selfly0Body}>
                <p>
                  Selfly 的核心是「记录自己、看见变化」。我在图标设计里用<strong className={styles.selfly0Emphasis}>打开的书</strong>表达记录容器，用<strong className={styles.selfly0Emphasis}>蝴蝶</strong>表达成长与蜕变——两者叠加，传达「在记录中持续变化」的产品叙事。
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
                <div className={styles.designPoints}>
                  <h4>落地能力</h4>
                  <ul>
                    <li><strong>从设计方案到 SwiftUI 实现</strong></li>
                    <li>数据模型、同步、订阅与多语言支持</li>
                    <li>真实使用场景下的体验边界校准</li>
                  </ul>
                </div>
                <div style={{ marginTop: "24px" }}>
                  <a
                    className="buttonSticker buttonStickerOrange"
                    href={appDownloadUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    在 App Store 查看 Selfly
                  </a>
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
        <section className={styles.selfly0ContactSection} aria-label="结语">
          <div className={styles.selfly0ContactInner}>
            <p className={styles.selfly0ContactClosing}>感谢你看到这里 :) ✰</p>
            <Link className={styles.selfly0ContactBack} href={localePath(locale, "/")}>
              ← 返回首页
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
