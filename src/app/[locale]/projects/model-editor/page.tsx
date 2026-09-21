import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LazyAutoVideo } from "@/components/LazyAutoVideo";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
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

  return (
    <div className={`${selflyStyles.pagePlain} ${selflyStyles.selfly0Page}`} data-page="model-editor">
      <main className={selflyStyles.main}>
        <header className={`${selflyStyles.featuredHero} ${selflyStyles.projectOneHero}`}>
          <h1 className={selflyStyles.title}>
            {t(
              locale,
              <>
                面向教学的{" "}
                <span className={styles.conceptHeadlineEmphasis}>3D 模型编辑器</span>
              </>,
              <>
                A <span className={styles.conceptHeadlineEmphasis}>3D Model Editor</span> for Teaching
              </>,
            )}
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "帮助非专业用户完成材质、结构、动画与标注预处理。",
              "Helping non-expert users preprocess materials, structure, animation, and labels.",
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
            <div className={selflyStyles.meta}>
              <span className={selflyStyles.metaItem}>2023–2024</span>
              <span className={selflyStyles.metaDot} aria-hidden="true">
                ·
              </span>
              <span className={selflyStyles.metaItem}>
                {t(locale, "交互 & 视觉设计", "Interaction & Visual Design")}
              </span>
            </div>
          </div>
        </header>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.positioningSection}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>{t(locale, "项目背景", "Project Background")}</p>
              <div className={styles.positioningGrid}>
                <h2 className={styles.positioningHeading}>
                  <span className={styles.positioningHeadingLight}>
                    {t(locale, "把 3D 模型整理成", "Turn 3D models into")}
                  </span>
                  <br />
                  <span className={styles.positioningHeadingDark}>
                    {t(locale, "课堂可讲的素材", "teaching-ready classroom assets")}
                  </span>
                </h2>
                <div className={styles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "3D 模型进入课堂前，通常需要根据教学场景进行二次编辑，例如添加部件说明、调整模型结构、设置拆解展示或动画效果。",
                      "Before a 3D model enters the classroom, it usually needs a second pass for the teaching scenario — adding part labels, adjusting structure, setting up exploded views, or animation.",
                    )}
                  </p>
                  <p>
                    {t(
                      locale,
                      <>
                        Model Editor 是一款面向 3D 课件制作的
                        <strong className={styles.positioningEmphasis}>模型编辑工具</strong>
                        ，帮助中高职教师快速将模型整理为适合课堂讲解的互动素材。
                      </>,
                      <>
                        Model Editor is a{" "}
                        <strong className={styles.positioningEmphasis}>model editing tool</strong> for 3D
                        courseware — helping vocational teachers quickly turn models into interactive assets
                        for classroom explanation.
                      </>,
                    )}
                  </p>
                  <div className={styles.roleBlock}>
                    <p className={styles.roleLabel}>{t(locale, "我的角色", "My Role")}</p>
                    <p>
                      {t(
                        locale,
                        "全流程界面设计 · 设计系统与规范搭建 · 交互体验优化",
                        "End-to-end interface design · Design system & guidelines · Interaction experience optimization",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "设计目标", "Design Goals")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "降低模型处理门槛，", "Lower the model editing threshold,")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "更快完成整理", "finish prep faster")}
                  </span>
                </h3>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      <>
                        模型编辑器承担的是 3D 模型进入课件前的
                        <strong className={styles.positioningEmphasis}>轻量处理任务</strong>
                        ，而不是完整的专业建模流程。因此，设计重点需要从「提供完整工具」转向「
                        <strong className={styles.positioningEmphasis}>降低理解成本、缩短操作路径</strong>
                        」，帮助教师更快完成模型整理。
                      </>,
                      <>
                        The editor handles{" "}
                        <strong className={styles.positioningEmphasis}>lightweight preprocessing</strong>{" "}
                        before models enter courseware — not a full professional modeling pipeline. The design
                        focus shifts from &ldquo;provide every tool&rdquo; to{" "}
                        <strong className={styles.positioningEmphasis}>
                          lowering cognitive load and shortening the path
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
                        <span>{t(locale, "更容易理解", "Easier to understand")}</span>
                      </div>
                      <p>
                        {t(
                          locale,
                          "明确不同功能的作用范围，让用户知道当前在编辑什么、会影响哪里。",
                          "Clarify what each function affects so users know what they are editing and where changes apply.",
                        )}
                      </p>
                    </div>
                    <div className={styles.directionCard}>
                      <div className={`${styles.directionCardVisual} ${styles.directionCardVisualOperate}`}>
                        <svg className={styles.directionIcon} viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M19 7c-2.6-1.1-5.4.8-5.4 3.6v37.8c0 3.3 3.8 5.1 6.4 3.1l8.5-6.6 5.4 11.5c1.2 2.5 4.2 3.6 6.8 2.4l3.7-1.8c2.5-1.2 3.6-4.2 2.4-6.8l-5.1-10.8h10.9c3.7 0 5.2-4.8 2.2-6.9L19 7Z" />
                        </svg>
                        <span>{t(locale, "更容易操作", "Easier to operate")}</span>
                      </div>
                      <p>
                        {t(
                          locale,
                          "放大关键操作入口，减少专业参数和密集控件带来的使用负担。",
                          "Enlarge key entry points and reduce the burden of dense professional controls.",
                        )}
                      </p>
                    </div>
                    <div className={styles.directionCard}>
                      <div className={`${styles.directionCardVisual} ${styles.directionCardVisualFast}`}>
                        <svg className={styles.directionIcon} viewBox="0 0 64 64" aria-hidden="true">
                          <path d="M32 6c14.4 0 26 11.6 26 26S46.4 58 32 58 6 46.4 6 32 17.6 6 32 6Zm13.7 19.3c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0L28.8 30.8l-4.6-4.6c-1.6-1.6-4.1-1.6-5.7 0s-1.6 4.1 0 5.7l7.4 7.4c1.6 1.6 4.1 1.6 5.7 0l14.1-14Z" />
                        </svg>
                        <span>{t(locale, "更快完成编辑任务", "Faster editing tasks")}</span>
                      </div>
                      <p>
                        {t(
                          locale,
                          "围绕「选择 → 调整 → 预览」组织流程，让用户更快完成模型编辑。",
                          "Organize the flow around select → adjust → preview so users finish edits faster.",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
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
                        网页里预览高度更紧，顶栏等固定区域会进一步挤压模型可视面积。我将全局编辑入口移到左侧，把
                        <strong className={styles.positioningEmphasis}>垂直空间还给预览</strong>
                        ，横向再承载面板展开。
                      </>,
                      <>
                        On the web, preview height is tighter, and fixed regions like the top bar squeeze the
                        model further. I moved global editing entry points to the left to{" "}
                        <strong className={styles.positioningEmphasis}>give vertical space back to the preview</strong>
                        , using horizontal room for panels.
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
                      layout: "row",
                      slides: [
                        {
                          label: tStr(
                            locale,
                            "调整前:面板环绕，预览受挤压",
                            "Before: Panels surround the model, preview is squeezed",
                          ),
                          content: (
                            <Image
                              className={styles.protoEvidenceImage}
                              src={assetPath(modelEditorAssets.prototype)}
                              alt={tStr(locale, "Model Editor 开发原型", "Model Editor development prototype")}
                              width={1440}
                              height={778}
                              sizes="(max-width: 840px) 50vw, 420px"
                            />
                          ),
                        },
                        {
                          src: assetPath(modelEditorAssets.previewOverlay),
                          alt: tStr(locale, "3D 教学工坊模型编辑器界面 3", "3D workshop model editor interface 3"),
                          label: tStr(
                            locale,
                            "调整后: 预览面积增加,分区更清晰",
                            "After: Larger preview area, clearer tool zones",
                          ),
                        },
                      ],
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
                <FinalLayoutCarousel
                  tone="dark"
                  slides={[
                    {
                      label: tStr(locale, "放大点击目标", "Larger targets"),
                      content: (
                        <div className={styles.carouselSlideFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={assetPath(modelEditorAssets.enlargedControls)}
                            alt={tStr(locale, "放大点击目标控件样式", "Enlarged control styles")}
                          />
                        </div>
                      ),
                    },
                    {
                      label: tStr(locale, "对比深色模式", "Dark mode comparison"),
                      content: (
                        <div className={styles.carouselSlideFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={assetPath(modelEditorAssets.themeCompare)}
                            alt={tStr(locale, "黑色与白色版本对比", "Light and dark theme comparison")}
                          />
                        </div>
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
