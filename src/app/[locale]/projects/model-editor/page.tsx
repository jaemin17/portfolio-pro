import Image from "next/image";
import { InterfaceComparisonCarousel } from "./InterfaceComparisonCarousel";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LazyAutoVideo } from "@/components/LazyAutoVideo";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import { CaseStudyNav } from "./CaseStudyNav";
import { FinalLayoutCarousel } from "./FinalLayoutCarousel";
import { modelEditorAssets } from "./modelEditorAssets";
import selflyStyles from "../selfly/selfly0.module.css";
import styles from "./modelEditor.module.css";

type ModelEditorPageProps = {
  params: Promise<{ locale: string }>;
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

export default async function ModelEditorPage({ params }: ModelEditorPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const caseSections = [
    { id: "context", label: tStr(locale, "概览", "Overview") },
    { id: "challenge", label: tStr(locale, "挑战", "Challenge") },
    { id: "solution", label: tStr(locale, "方案", "Solution") },
    { id: "onboarding", label: tStr(locale, "指引", "Onboarding") },
    { id: "reflection", label: tStr(locale, "反思", "Reflection") },
  ];

  return (
    <div className={`${selflyStyles.pagePlain} ${selflyStyles.selfly0Page}`} data-page="model-editor">
      <main className={selflyStyles.main}>
        <header className={`${selflyStyles.featuredHero} ${selflyStyles.projectOneHero} ${styles.modelEditorHero}`}>
          <h1 className={selflyStyles.title}>
            {t(
              locale,
              <>
                把复杂 3D 模型整理成
                <br />
                <span className={styles.conceptHeadlineEmphasis}>课堂可讲的素材</span>
              </>,
              <>
                Turning complex 3D models into
                <br />
                <span className={styles.conceptHeadlineEmphasis}>classroom-ready teaching assets</span>
              </>,
            )}
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "为非专业教师设计的轻量模型整理工具，让材质、结构、动画与标注更适合课堂讲解。",
              "A lightweight model prep tool for non-expert teachers, making materials, structure, animation, and labels easier to use in class.",
            )}
          </p>
          <div className={selflyStyles.headerCta}>
            <div className={styles.projectHeroCoverFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element -- static export: manual srcset replaces next/image */}
              <img
                src={assetPath(modelEditorAssets.previewMaximized)}
                srcSet={[
                  `${assetPath("/images/model-editor/hero-editor-1-750w.webp")} 750w`,
                  `${assetPath(modelEditorAssets.previewMaximized)} 1440w`,
                ].join(", ")}
                sizes="(max-width: 980px) 100vw, 940px"
                alt={tStr(locale, "Model Editor 界面预览", "Model Editor interface preview")}
                width={1440}
                height={778}
                className={styles.projectHeroCoverImage}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </header>

        <div className={styles.caseStudyBody}>
          <CaseStudyNav
            sections={caseSections}
            ariaLabel={tStr(locale, "案例章节导航", "Case study sections")}
          />

          <div className={styles.caseStudyContent}>
        <section id="context" className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.positioningSection}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>{t(locale, "概览", "Overview")}</p>
              <h2 className={styles.caseOpeningHeading}>
                {t(
                  locale,
                  "让教师更容易上手 3D 模型编辑",
                  "Reduce model-prep friction for non-expert teachers creating 3D courseware",
                )}
              </h2>

              <div className={styles.caseMetaGrid}>
                {[
                  {
                    label: tStr(locale, "我的角色", "My Role"),
                    value: tStr(locale, "UI 设计 / 设计规范 / 交互优化", "UI design / Design guidelines / Interaction refinement"),
                  },
                  {
                    label: tStr(locale, "项目类型", "Project Type"),
                    value: tStr(locale, "教学用 3D 模型编辑器", "3D education tool / Courseware editor"),
                  },
                  {
                    label: tStr(locale, "时间", "Timeline"),
                    value: "2023–2024",
                  },
                  {
                    label: tStr(locale, "协作对象", "Collaborators"),
                    value: tStr(locale, "产品经理 / 前端开发 / 3D 开发", "Product manager / Front-end developers / 3D developers"),
                  },
                  {
                    label: tStr(locale, "设计范围", "Design Scope"),
                    value: tStr(locale, "全功能界面设计", "UI design for all Model Editor features"),
                  },
                ].map((item) => (
                  <div key={item.label} className={styles.caseMetaItem}>
                    <p>{item.label}</p>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className={styles.caseContribution}>
                <h3>
                  {t(
                    locale,
                    "负责全功能 UI 设计与设计规范",
                    "UI design and guidelines across all features",
                  )}
                </h3>
                <p>
                  {t(
                    locale,
                    "负责模型编辑器全部功能的 UI 设计与设计规范，与产品经理协作优化局部交互，并对接前端及 3D 开发推进设计落地。",
                    "I designed the UI and design guidelines for all Model Editor features, worked with the product manager to refine specific interactions, and coordinated with front-end and 3D developers to bring the designs into production.",
                  )}
                </p>
                <ul>
                  <li>{t(locale, "完成全部功能界面的 UI 设计，统一视觉层级与界面风格", "Designed the UI for all features with consistent visual hierarchy and styling")}</li>
                  <li>
                    {t(
                      locale,
                      "重组编辑入口、工具面板与模型预览之间的空间关系",
                      "Restructured the spatial relationship between entry points, panels, and model preview",
                    )}
                  </li>
                  <li>
                    {t(
                      locale,
                      "建立按钮、工具、材质球、面板等关键状态规范",
                      "Defined key states for buttons, tools, material swatches, and panels",
                    )}
                  </li>
                  <li>
                    {t(
                      locale,
                      "为 6 类核心功能设计新手引导与示例模型匹配方式",
                      "Designed onboarding and model matching for six core feature guides",
                    )}
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </section>

        <section id="challenge" className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "问题判断", "Problem Framing")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "难点不在功能多少，", "The hard part was not more features,")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "而在编辑能否被看懂", "but whether editing could be understood")}
                  </span>
                </h3>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      <>
                        教师需要在调整模型时，持续确认选中了哪个部件、修改会影响哪里，以及最终的展示效果。因此，我将设计重点放在让
                        <strong className={styles.positioningEmphasis}>编辑对象、影响范围与结果反馈始终清晰可见</strong>。
                      </>,
                      <>
                        When adjusting a model, teachers need to keep track of the selected part, where
                        changes apply, and the final visual result. I therefore focused on helping them quickly
                        tell{" "}
                        <strong className={styles.positioningEmphasis}>
                          what they were editing, where it applied, and whether the result helped classroom
                          explanation
                        </strong>
                        .
                      </>,
                    )}
                  </p>
                </div>
              </div>
              <div className={styles.directionPanel}>
                <div className={styles.directionCards}>
                  <div className={styles.directionCard}>
                      <div className={`${styles.directionCardVisual} ${styles.directionCardVisualUnderstand}`}>
                        <svg className={styles.directionIcon} viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M32 6a26 26 0 1 0 0 52 26 26 0 0 0 0-52Zm0 10a16 16 0 1 1 0 32 16 16 0 0 1 0-32Zm0 10a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
                        </svg>
                        <span>{t(locale, "先看懂编辑对象", "Understand the object first")}</span>
                      </div>
                      <p>
                        {t(
                          locale,
                          "材质、结构、标签、动画影响的对象不同，界面需要持续说明当前选中了什么、会改到哪里。",
                          "Materials, structure, labels, and animation affect different objects, so the interface must keep clarifying what is selected and where changes apply.",
                        )}
                      </p>
                    </div>
                    <div className={styles.directionCard}>
                      <div className={`${styles.directionCardVisual} ${styles.directionCardVisualOperate}`}>
                        <svg className={styles.directionIcon} viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M19 7c-2.6-1.1-5.4.8-5.4 3.6v37.8c0 3.3 3.8 5.1 6.4 3.1l8.5-6.6 5.4 11.5c1.2 2.5 4.2 3.6 6.8 2.4l3.7-1.8c2.5-1.2 3.6-4.2 2.4-6.8l-5.1-10.8h10.9c3.7 0 5.2-4.8 2.2-6.9L19 7Z" />
                        </svg>
                        <span>{t(locale, "保留模型判断空间", "Keep room for model judgment")}</span>
                      </div>
                      <p>
                        {t(
                          locale,
                          "模型预览不是装饰区域，而是用户确认结构、角度和反馈的主要依据，不能被工具面板持续挤压。",
                          "The model preview is not decoration; it is where users judge structure, angle, and feedback, so panels cannot keep squeezing it.",
                        )}
                      </p>
                    </div>
                    <div className={styles.directionCard}>
                      <div className={`${styles.directionCardVisual} ${styles.directionCardVisualFast}`}>
                        <svg className={styles.directionIcon} viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M32 6c14.4 0 26 11.6 26 26S46.4 58 32 58 6 46.4 6 32 17.6 6 32 6Zm13.7 19.3c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0L28.8 30.8l-4.6-4.6c-1.6-1.6-4.1-1.6-5.7 0s-1.6 4.1 0 5.7l7.4 7.4c1.6 1.6 4.1 1.6 5.7 0l14.1-14Z" />
                        </svg>
                        <span>{t(locale, "围绕课堂任务收束", "Narrow around teaching tasks")}</span>
                      </div>
                      <p>
                        {t(
                          locale,
                          "流程不追求专业软件的完整度，而是围绕选择对象、调整表达、确认效果来缩短课前整理路径。",
                          "The flow does not chase professional completeness; it shortens prep around selecting objects, shaping expression, and checking results.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <section id="solution" className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "关键设计 01", "Key Design 01")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "把主要空间", "Give the main space")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "还给模型预览", "back to model preview")}
                  </span>
                </h3>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      <>
                        核心矛盾是：用户越需要判断模型结构和调整反馈，界面越不能持续占用预览区域。我将全局编辑入口移到左侧，把
                        <strong className={styles.positioningEmphasis}>垂直空间还给预览</strong>
                        ，让面板在横向按需展开，避免课前整理过程被固定栏打断。
                      </>,
                      <>
                        The central conflict was that the more users needed to judge model structure and
                        editing feedback, the less the interface could keep occupying the preview. I moved
                        global editing entry points to the left to{" "}
                        <strong className={styles.positioningEmphasis}>give vertical space back to the preview</strong>
                        , letting panels expand horizontally on demand instead of interrupting prep with fixed bars.
                      </>,
                    )}
                  </p>
                  <div className={styles.narrativeDesignPoints}>
                    <h4>{t(locale, "设计决策", "Design Decisions")}</h4>
                    <ul>
                      <li>
                        <strong>{t(locale, "固定入口占高度", "Fixed entries use height")}</strong> →{" "}
                        {t(locale, "移到左侧", "move to the left")}
                      </li>
                      <li>
                        <strong>{t(locale, "面板占空间", "Panels take space")}</strong> →{" "}
                        {t(locale, "按需展开、利用横向空间", "expand on demand using horizontal space")}
                      </li>
                      <li>
                        <strong>{t(locale, "右侧参数浮层", "Right parameter overlay")}</strong> →{" "}
                        {t(locale, "不挤压模型画布", "does not squeeze the model canvas")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.finalLayoutEvidence}>
                <FinalLayoutCarousel
                  tone="dark"
                  slides={[
                    {
                      label: "",
                      content: (
                        <div className={styles.comparisonOnWhite}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={assetPath(modelEditorAssets.layoutComparison)}
                            alt={tStr(locale, "布局对比示意图", "Layout comparison diagram")}
                          />
                        </div>
                      ),
                    },
                    {
                      label: "",
                      content: (
                        <InterfaceComparisonCarousel
                          label={tStr(locale, "布局调整前后对比", "Layout before and after")}
                          slides={[
                            {
                              src: assetPath("/images/model-editor/interface-before.png"),
                              alt: tStr(locale, "调整前：顶部入口占用预览高度", "Before: Top navigation takes up preview height"),
                              label: tStr(locale, "调整前", "Before"),
                            },
                            {
                              src: assetPath("/images/model-editor/interface-after.png"),
                              alt: tStr(locale, "调整后：入口移至左侧，释放垂直空间", "After: Navigation moves left, freeing vertical space"),
                              label: tStr(locale, "调整后", "After"),
                            },
                          ]}
                        />
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "关键设计 02", "Key Design 02")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "按操作性质", "Assign interface placement")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "分配界面位置", "by operation type")}
                  </span>
                </h3>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      <>
                        按<strong className={styles.positioningEmphasis}>操作性质</strong>
                        决定位置与视觉样式：需要展开内容的、需要盯着模型反馈的、以及高频全局动作，不应挤在同一套交互里。
                      </>,
                      <>
                        Place and style follow{" "}
                        <strong className={styles.positioningEmphasis}>operation type</strong>: panel
                        expanders, live-feedback tools, and high-frequency global actions should not share
                        one interaction pattern.
                      </>,
                    )}
                  </p>
                  <div className={styles.narrativeDesignPoints}>
                    <h4>{t(locale, "设计决策", "Design Decisions")}</h4>
                    <ul>
                      <li>
                        <strong>{t(locale, "左侧固定面板", "Left fixed panel")}</strong>
                        {t(locale, "：内容多，部分操作不依赖模型视口", ": rich content, some actions don't need the viewport")}
                      </li>
                      <li>
                        <strong>{t(locale, "右侧浮动工具", "Right floating tools")}</strong>
                        {t(locale, "：需实时观察反馈，浮动保持视口完整", ": need live feedback; floating keeps the viewport intact")}
                      </li>
                      <li>
                        <strong>{t(locale, "顶部全局动作", "Top global actions")}</strong>
                        {t(locale, "：高频操作，右上角符合使用惯例", ": high-frequency actions follow top-right convention")}
                      </li>
                      <li>
                        <strong>{t(locale, "顶部过程控制", "Top process controls")}</strong>
                        {t(locale, "：辅助性操作，轻量图标降低视觉权重", ": secondary actions use light icons to reduce weight")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.protoEvidenceFrame}>
                <div className={styles.protoEvidenceCanvas}>
                  <LazyAutoVideo
                    className={styles.protoEvidenceImage}
                    src={assetPath(modelEditorAssets.operationVideo)}
                    aria-label={tStr(
                      locale,
                      "模型编辑器操作归属演示",
                      "Model editor operation ownership demo",
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "关键设计 03", "Key Design 03")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "把复杂工具，", "Make complex tools")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "做得更容易上手", "easier to get started with")}
                  </span>
                </h3>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      <>
                        面向非专业教师，轻量化不只是减少控件数量，也需要让每一次操作都有
                        <strong className={styles.positioningEmphasis}>稳定、可识别的状态反馈</strong>
                        。我为按钮、工具、材质球、播放器和菜单建立统一状态，让用户持续知道当前选中了什么、什么可以继续操作。
                      </>,
                      <>
                        For non-expert teachers, simplification is not only about fewer controls. Each action
                        also needs{" "}
                        <strong className={styles.positioningEmphasis}>
                          stable, recognizable feedback
                        </strong>{" "}
                        across buttons, tools, material swatches, players, and menus, so users always know what
                        is selected and what can happen next.
                      </>,
                    )}
                  </p>
                  <div className={styles.narrativeDesignPoints}>
                    <h4>{t(locale, "设计决策", "Design Decisions")}</h4>
                    <ul>
                      <li>
                        <strong>{t(locale, "关键入口保持可点击", "Key entries stay easy to hit")}</strong>
                        {t(locale, "：按钮和工具保持足够尺寸，降低点击门槛", ": controls stay large enough to tap easily")}
                      </li>
                      <li>
                        <strong>{t(locale, "统一状态层级", "Unified state hierarchy")}</strong>
                        {t(
                          locale,
                          "：默认、悬停、按下、选中、不可用状态有一致反馈",
                          ": default, hover, pressed, selected, and disabled states stay consistent",
                        )}
                      </li>
                      <li>
                        <strong>{t(locale, "隐藏次级说明", "Secondary help appears on demand")}</strong>
                        {t(locale, "：默认保持轻量，悬停、右键和快捷键提示补足说明", ": hover, context menus, and shortcuts add detail on demand")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.controlExploration}>
                <div className={styles.interfaceCarousel}>
                  <Image
                    src={assetPath(modelEditorAssets.previewOverlay)}
                    alt={tStr(locale, "模型编辑器调整后界面：结构标注与材质面板", "Redesigned Model Editor with structure labels and material panel")}
                    width={1024}
                    height={596}
                    sizes="(max-width: 900px) 100vw, 840px"
                    className={styles.interfaceCarouselImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="onboarding" className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "新手指引设计", "Onboarding Design")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "用合适模型，", "Use the right model")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "讲清功能价值", "to clarify feature value")}
                  </span>
                </h3>
                <div className={styles.narrativeBody}>
	                  <p>
	                    {t(
	                      locale,
	                      <>
	                        为了让功能演示更清晰高效，我将新手指引拆成 6 类功能，并为每类功能选择
	                        <strong className={styles.positioningEmphasis}>最符合使用场景的模型</strong>
	                        。
	                      </>,
	                      <>
	                        To make each feature demo clearer and more efficient, I split onboarding into six guides and chose{" "}
	                        <strong className={styles.positioningEmphasis}>the model that best fit each use scenario</strong>
	                        .
	                      </>,
	                    )}
	                  </p>
                  <div className={styles.narrativeDesignPoints}>
                    <h4>{t(locale, "设计决策", "Design Decisions")}</h4>
                    <ul>
                      <li>
                        <strong>{t(locale, "先定义功能要被看懂什么", "Define what the feature must make visible")}</strong>
                        {t(
                          locale,
                          "：移动、材质、透视、标签、爆炸和动画各自对应不同教学表达",
                          ": movement, material, x-ray, labels, exploded views, and animation each explain a different teaching need",
                        )}
                      </li>
                      <li>
                        <strong>{t(locale, "用模型特征匹配功能场景", "Match model traits to feature scenarios")}</strong>
                        {t(
                          locale,
                          "：外壳与内部结构用于显隐透视，可拆解结构用于爆炸，有运动原理的模型用于动画",
                          ": shell and inner structure support visibility/x-ray, separable structures support exploded views, and motion-driven models support animation",
                        )}
                      </li>
                      <li>
                        <strong>{t(locale, "用引导连接理解与操作", "Bridge understanding and operation")}</strong>
                        {t(
                          locale,
                          "：在进入编辑前先解释对象、影响范围和操作结果",
                          ": explain the object, scope, and expected result before users start editing",
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.scenarioMatrix} aria-label={tStr(locale, "模型选择方法", "Model selection method")}>
                {[
                  {
                    title: tStr(locale, "基本控制", "Basic controls"),
                    criteria: tStr(locale, "前后左右差异明显", "Distinct front, back, and side views"),
                    value: tStr(locale, "让移动、旋转、缩放的效果更容易被看见", "Makes move, rotate, and zoom effects easy to see"),
                  },
                  {
                    title: tStr(locale, "材质修改", "Material editing"),
                    criteria: tStr(locale, "有多种材质或部件", "Multiple materials or parts"),
                    value: tStr(locale, "展示颜色、材质替换对模型表达的影响", "Shows how color and material changes affect expression"),
                  },
                  {
                    title: tStr(locale, "显隐 / 透视", "Visibility / X-ray"),
                    criteria: tStr(locale, "有外壳，内部结构复杂", "Outer shell with complex internal structure"),
                    value: tStr(locale, "突出隐藏外壳、观察内部结构的功能价值", "Clarifies why users hide shells and inspect inner structure"),
                  },
                  {
                    title: tStr(locale, "标签 / 简介", "Labels / Notes"),
                    criteria: tStr(locale, "多部件，有讲解信息", "Multiple parts with explanation value"),
                    value: tStr(locale, "适合展示结构说明和教学标注", "Supports structural explanation and teaching annotations"),
                  },
                  {
                    title: tStr(locale, "爆炸设置", "Exploded view"),
                    criteria: tStr(locale, "可拆解，零件关系明显", "Separable parts with clear relationships"),
                    value: tStr(locale, "体现拆解观察与结构理解", "Shows disassembly-based observation and structure learning"),
                  },
                  {
                    title: tStr(locale, "动画设置", "Animation setup"),
                    criteria: tStr(locale, "自带运动原理", "Built-in motion principle"),
                    value: tStr(locale, "让动画预览服务于运动机制讲解", "Turns animation preview into motion-mechanism explanation"),
                  },
                ].map((item) => (
                  <article key={item.title} className={styles.scenarioCard}>
                    <p className={styles.scenarioTitle}>{item.title}</p>
                    <p className={styles.scenarioCriteria}>{item.criteria}</p>
                    <p className={styles.scenarioValue}>{item.value}</p>
                  </article>
                ))}
              </div>
	            </div>
	          </div>
	        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
	          <div className={styles.conceptSection}>
	            <div className={styles.conceptInner}>
	              <p className={styles.positioningLabel}>
	                {t(locale, "6 类功能引导", "Six Feature Guides")}
	              </p>
	              <div className={styles.onboardingVideoGrid}>
	                {[
	                  {
	                    title: tStr(locale, "基本控制", "Basic controls"),
	                    trait: tStr(locale, "前后左右差异明显", "Distinct front, back, and side views"),
	                    value: tStr(locale, "看清移动、旋转、缩放带来的视角变化", "Shows how move, rotate, and zoom change the view"),
	                    video: modelEditorAssets.onboardingBasicControls,
	                  },
	                  {
	                    title: tStr(locale, "材质修改", "Material editing"),
	                    trait: tStr(locale, "有多种材质或部件", "Multiple materials or parts"),
	                    value: tStr(locale, "展示材质替换如何改变模型表达", "Shows how material changes alter model expression"),
	                    video: modelEditorAssets.onboardingMaterialEditing,
	                  },
	                  {
	                    title: tStr(locale, "显隐 / 透视", "Visibility / X-ray"),
	                    trait: tStr(locale, "有外壳，内部结构复杂", "Outer shell with complex internal structure"),
	                    value: tStr(locale, "让隐藏外壳、观察内部结构的价值可见", "Makes shell hiding and inner-structure inspection visible"),
	                    video: modelEditorAssets.onboardingVisibilityXray,
	                  },
	                  {
	                    title: tStr(locale, "标签 / 简介", "Labels / Notes"),
	                    trait: tStr(locale, "多部件，有讲解信息", "Multiple parts with explanation value"),
	                    value: tStr(locale, "用标注把结构说明连接到具体部件", "Connects structural explanation to specific parts"),
	                    video: modelEditorAssets.onboardingNotes,
	                  },
	                  {
	                    title: tStr(locale, "爆炸设置", "Exploded view"),
	                    trait: tStr(locale, "可拆解，零件关系明显", "Separable parts with clear relationships"),
	                    value: tStr(locale, "通过拆开展示帮助理解部件关系", "Uses disassembly to clarify part relationships"),
	                    video: modelEditorAssets.onboardingExplodedView,
	                  },
	                  {
	                    title: tStr(locale, "动画设置", "Animation setup"),
	                    trait: tStr(locale, "自带运动原理", "Built-in motion principle"),
	                    value: tStr(locale, "让动画预览服务于运动机制讲解", "Turns animation preview into motion-mechanism explanation"),
	                    video: modelEditorAssets.onboardingAnimation,
	                  },
	                ].map((demo) => (
	                  <article key={demo.title} className={styles.onboardingVideoCard}>
	                    <LazyAutoVideo
	                      className={styles.onboardingVideo}
	                      src={assetPath(demo.video)}
	                      aria-label={demo.title}
	                    />
		                    <div className={styles.onboardingVideoText}>
		                      <p className={styles.onboardingVideoMeta}>
		                        <span className={styles.onboardingVideoTitle}>{demo.title}</span>
		                        <span className={styles.onboardingVideoTrait}>{demo.trait}</span>
		                      </p>
		                      <p className={styles.onboardingVideoValue}>{demo.value}</p>
		                    </div>
	                  </article>
	                ))}
	              </div>
	            </div>
	          </div>
        </section>

        <section id="reflection" className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={`${styles.narrativeSection} ${styles.reflectionSection}`}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>{t(locale, "项目反思", "Reflection")}</p>
              <div className={styles.narrativeBody}>
                <p>
                  {t(
                    locale,
                    "项目初期，面对放大功能按钮的建议，我曾因为这个方案明显超出行业常见的 UI 尺寸，也比我过去习惯的界面尺度更大，而对它有所犹豫。我当时更在意界面是否保持熟悉的视觉密度，却忽略了教师缺少 3D 编辑经验，以及产品希望降低使用门槛的出发点。这个项目让我意识到，界面尺度不应只服从行业惯例，也要根据目标用户的识别和操作需求进行调整。",
                    "Early in the project, I hesitated about enlarging the feature buttons because the proposed scale was noticeably larger than common industry UI dimensions and larger than the interface scale I was used to. I was focused on preserving a familiar visual density, but overlooked teachers’ limited experience with 3D editing and the product’s goal of lowering the barrier to use. This project taught me that interface scale should not simply follow industry conventions; it should also respond to the intended users’ recognition and interaction needs.",
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
          </div>
        </div>

        <section className={selflyStyles.selfly0ContactSection} aria-label={tStr(locale, "页面导航", "Page navigation")}>
          <div className={`${selflyStyles.selfly0ContactInner} ${styles.contactAlign}`}>
            <Link className={selflyStyles.selfly0ContactBack} href={localePath(locale, "/")}>
              {t(locale, "← 返回首页", "← Back to home")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
