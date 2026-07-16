import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
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
              <Image
                src={assetPath(modelEditorAssets.previewMaximized)}
                alt={tStr(locale, "Model Editor 界面预览", "Model Editor interface preview")}
                width={1440}
                height={778}
                className={styles.projectHeroCoverImage}
                priority
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
                    {t(locale, "从原始 3D 模型，", "From raw 3D models")}
                  </span>
                  <br />
                  <span className={styles.positioningHeadingDark}>
                    {t(locale, "到课堂可用的教学素材", "to classroom-ready teaching assets")}
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
                  <p className={styles.roleLabel}>{t(locale, "我的角色", "My Role")}</p>
                  <p>
                    {t(
                      locale,
                      "在已有功能框架上继续推进体验设计，围绕编辑器的操作流程、界面层级与视觉一致性完善全量界面，并与开发对接推动方案落地上线。",
                      "I continued experience design on top of an existing functional framework — refining the full interface around workflow, hierarchy, and visual consistency, and working with engineering to ship the solution.",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
            <div className={`${styles.positioningInner} ${styles.positioningInnerCentered}`}>
              <div className={styles.protoEvidence}>
                <p className={`${styles.positioningLabel} ${styles.protoIntroLabel}`}>
                  {t(locale, "设计目标", "Design Goals")}
                </p>
                <div className={styles.protoIntroRow}>
                  <h3 className={styles.protoIntroTitle}>
                    <span className={styles.positioningHeadingDark}>
                      {t(locale, "面向课件的轻量处理，", "Lightweight prep for courseware,")}
                    </span>
                    <br />
                    <span className={styles.positioningHeadingLight}>
                      {t(locale, "而不是专业建模", "not professional modeling")}
                    </span>
                  </h3>
                  <div>
                    <div className={styles.protoAreas}>
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
                            before models enter courseware — not a full professional modeling pipeline. The
                            design focus shifts from &ldquo;provide every tool&rdquo; to{" "}
                            <strong className={styles.positioningEmphasis}>
                              lowering cognitive load and shortening the path
                            </strong>
                            .
                          </>,
                        )}
                      </p>
                    </div>
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
          </div>
        </section>

        <section className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}>
          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "模型预览最大化", "Preview Maximization")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "从「面板包围模型」", "From panels surrounding the model")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "到「模型获得主要空间」", "to the model owning the main space")}
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
                      label: tStr(locale, "空间对比", "Space comparison"),
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
                            "早期原型：面板环绕，预览受挤压",
                            "Early prototype: panels surround the model, preview is squeezed",
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
                          label: tStr(locale, "调整后", "After"),
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
                {t(locale, "操作归属", "Operation Attribution")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "操作性质不同，", "Different operation types,")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "位置与视觉样式由此而定", "so placement and visual style follow")}
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
                  <video
                    className={styles.protoEvidenceImage}
                    src={assetPath(modelEditorAssets.operationVideo)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
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
                {t(locale, "工具操作轻量化", "Tool Simplification")}
              </p>
              <div className={styles.narrativeGrid}>
                <h3 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "从「专业工具范式」", "From professional-tool patterns")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "切换到「低密度轻量可识别」", "to low-density, lightweight, recognizable UI")}
                  </span>
                </h3>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      <>
                        面向非专业教师，界面从专业工具的高密度控件转向
                        <strong className={styles.positioningEmphasis}>识别优先、决策减负</strong>
                        ：放大关键入口并强化选中态，让用户更快确认当前在用什么工具。
                      </>,
                      <>
                        For non-expert teachers, the UI shifts from dense professional controls to{" "}
                        <strong className={styles.positioningEmphasis}>
                          recognition-first, decision-light
                        </strong>{" "}
                        patterns — larger entry points and clearer selected states so users know which tool is
                        active.
                      </>,
                    )}
                  </p>
                  <div className={styles.narrativeDesignPoints}>
                    <h4>{t(locale, "设计决策", "Design Decisions")}</h4>
                    <ul>
                      <li>
                        <strong>{t(locale, "放大点击目标", "Larger tap targets")}</strong>
                        {t(locale, "：按钮和控件保持足够尺寸，降低点击门槛", ": controls stay large enough to tap easily")}
                      </li>
                      <li>
                        <strong>{t(locale, "强化选中状态", "Strong selected state")}</strong>
                        {t(locale, "：当前工具和模块有明确反馈，减少状态迷失", ": active tools/modules have clear feedback")}
                      </li>
                      <li>
                        <strong>{t(locale, "线性图标 + hover 文案", "Line icons + hover labels")}</strong>
                        {t(locale, "：默认轻量，悬停再补足功能说明", ": lightweight by default, descriptive on hover")}
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
          <div className={styles.conceptSection}>
            <div className={styles.conceptInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "关键能力", "Core Capabilities")}
              </p>
              <div className={styles.capabilityStack}>
                {[
                  {
                    headline: t(
                      locale,
                      "预设材质一键应用，支持金属、木纹、塑料等常见材质切换",
                      "One-click material presets — metal, wood, plastic, and more",
                    ),
                    video: modelEditorAssets.materialDemo,
                  },
                  {
                    headline: t(
                      locale,
                      "透视模式与显隐控制，快速聚焦目标部件",
                      "X-ray and visibility controls to focus on target parts",
                    ),
                    video: modelEditorAssets.transparencyDemo,
                  },
                  {
                    headline: t(
                      locale,
                      "为模型部件添加标注，清晰传达结构与功能信息",
                      "Part labels that convey structure and function",
                    ),
                    video: modelEditorAssets.labelsDemo,
                  },
                ].map((demo) => (
                  <div key={String(demo.headline)} className={styles.capabilityItem}>
                    <p className={styles.conceptHeadline}>{demo.headline}</p>
                    <video
                      className={styles.video}
                      src={assetPath(demo.video)}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={selflyStyles.selfly0ContactSection} aria-label={tStr(locale, "结语", "Closing")}>
          <div className={selflyStyles.selfly0ContactInner}>
            <p className={selflyStyles.selfly0ContactClosing}>
              {t(locale, "感谢你看到这里 :) ✰", "Thanks for reading this far :) ✰")}
            </p>
            <Link className={selflyStyles.selfly0ContactBack} href={localePath(locale, "/")}>
              {t(locale, "← 返回首页", "← Back to home")}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
