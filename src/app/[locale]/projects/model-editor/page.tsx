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
            <span className={selflyStyles.titleEn}>Model Editor</span>
            <span className={selflyStyles.titleSep}>{t(locale, "：", ": ")}</span>
            <span className={selflyStyles.titleZh}>
              {t(locale, "面向教学的 3D 模型编辑器", "A 3D Model Editor for Teaching")}
            </span>
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "帮助非专业用户完成材质、结构、动画与标注预处理。",
              "Helping non-expert users preprocess materials, structure, animation, and labels.",
            )}
          </p>
          <div className={selflyStyles.headerCta}>
            <video
              className={`${selflyStyles.appPreviewImage} ${styles.projectHeroCoverVideo}`}
              src={assetPath(modelEditorAssets.heroVideo)}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
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
          <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
            <div className={`${styles.positioningInner} ${styles.positioningInnerCentered}`}>
              <div className={styles.protoEvidence}>
                <p className={`${styles.positioningLabel} ${styles.protoIntroLabel}`}>
                  {t(locale, "当前状态", "Current State")}
                </p>
                <div className={styles.protoIntroRow}>
                  <h3 className={styles.protoIntroTitle}>
                    <span className={styles.positioningHeadingLight}>
                      {t(locale, "理清每个区域的职责，", "Clarify each region's role,")}
                    </span>
                    <br />
                    <span className={styles.positioningHeadingDark}>
                      {t(locale, "找到体验的改进点", "then find where experience can improve")}
                    </span>
                  </h3>
                  <div>
                    <div className={styles.protoAreas}>
                      <p>
                        {t(
                          locale,
                          <>
                            早期原型已经给出了<strong className={styles.positioningEmphasis}>基本功能分区</strong>
                            ：顶部承载编辑模块入口、过程控制和全局结果操作，左侧为编辑面板，中间为模型预览区，右侧为模型工具与参数调整区。但不同功能的
                            <strong className={styles.positioningEmphasis}>操作性质、视觉层级和影响范围</strong>
                            仍需要进一步区分。
                          </>,
                          <>
                            The early prototype established a{" "}
                            <strong className={styles.positioningEmphasis}>basic functional layout</strong>:
                            top bar for module entry and global actions, left panel for editing, center for
                            model preview, right for tools and parameters. But{" "}
                            <strong className={styles.positioningEmphasis}>
                              operation type, visual hierarchy, and impact scope
                            </strong>{" "}
                            still needed clearer separation.
                          </>,
                        )}
                      </p>
                      <p>
                        {t(
                          locale,
                          <>
                            同时，如果各区域都按原型展开，<strong className={styles.positioningEmphasis}>模型预览区会被挤压</strong>
                            ；而 3D 编辑器最关键的操作反馈来自模型本身，因此后续设计需要在明确功能层级的基础上，重新平衡
                            <strong className={styles.positioningEmphasis}>「工具密度」与「预览空间」</strong>。
                          </>,
                          <>
                            If every region expanded as in the prototype, the{" "}
                            <strong className={styles.positioningEmphasis}>preview area would be squeezed</strong>
                            . Since feedback comes from the model itself, the next design pass had to rebalance{" "}
                            <strong className={styles.positioningEmphasis}>tool density and preview space</strong>.
                          </>,
                        )}
                      </p>
                      <div className={styles.narrativeDesignPoints}>
                        <h4>{t(locale, "体验设计方向", "Experience Direction")}</h4>
                        <ul>
                          <li>{t(locale, "为模型预览释放更多空间", "Free more space for model preview")}</li>
                          <li>{t(locale, "不同操作更易识别", "Make different operations easier to recognize")}</li>
                          <li>{t(locale, "工具调整更轻量可控", "Keep tool adjustments lightweight and controllable")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.protoEvidenceFrame}>
                  <div className={styles.protoEvidenceCanvas}>
                    <Image
                      className={styles.protoEvidenceImage}
                      src={assetPath(modelEditorAssets.prototype)}
                      alt={tStr(locale, "Model Editor 开发原型", "Model Editor development prototype")}
                      width={1440}
                      height={900}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className={`${styles.protoAnnotation} ${styles.protoAnnotationTop}`}>
                      <strong>{t(locale, "顶部", "Top")}</strong>
                      {t(locale, "模型文件相关的全局功能入口", "Global file-related entry points")}
                    </div>
                    <div className={`${styles.protoAnnotation} ${styles.protoAnnotationLeft}`}>
                      <strong>{t(locale, "左侧", "Left")}</strong>
                      {t(locale, "当前全局功能下展开的编辑面板", "Editing panel expanded from global functions")}
                    </div>
                    <div className={`${styles.protoAnnotation} ${styles.protoAnnotationCenter}`}>
                      <strong>{t(locale, "中间", "Center")}</strong>
                      {t(locale, "模型的展示和交互空间", "Model display and interaction space")}
                    </div>
                    <div className={`${styles.protoAnnotation} ${styles.protoAnnotationRight}`}>
                      <strong>{t(locale, "右侧", "Right")}</strong>
                      {t(locale, "模型工具与参数调整区", "Model tools and parameter controls")}
                    </div>
                  </div>
                  <p className={styles.protoEvidenceCaption}>{t(locale, "早期原型", "Early prototype")}</p>
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
                        在浏览器界面中，3D 模型预览区的尺寸同时受到宽度和高度的限制，由于需要保持固定比例，实际可视区域通常会受到
                        <strong className={styles.positioningEmphasis}>较短一侧的约束</strong>。
                      </>,
                      <>
                        In a browser UI, 3D preview size is limited by both width and height; with a fixed
                        aspect ratio, the visible area is usually constrained by the{" "}
                        <strong className={styles.positioningEmphasis}>shorter dimension</strong>.
                      </>,
                    )}
                  </p>
                  <p>
                    {t(
                      locale,
                      <>
                        在网页布局中，<strong className={styles.positioningEmphasis}>高度空间相对更为紧张</strong>
                        ，因此模型上下的固定区域都会影响预览区域的有效高度，使模型显示尺寸被压缩。
                      </>,
                      <>
                        In web layout, <strong className={styles.positioningEmphasis}>vertical space is tighter</strong>
                        , so fixed regions above and below the model compress the effective preview height.
                      </>,
                    )}
                  </p>
                  <p>
                    {t(
                      locale,
                      <>
                        因此，我将顶部的固定全局编辑入口移动到左侧，以减少垂直空间的占用，并将其转移到
                        <strong className={styles.positioningEmphasis}>更充裕的横向空间</strong>
                        ，从而为模型预览区释放更多高度。
                      </>,
                      <>
                        I moved fixed global editing entry points from the top to the left to save vertical
                        space and use <strong className={styles.positioningEmphasis}>more horizontal room</strong>
                        , freeing height for the preview.
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
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={assetPath(modelEditorAssets.layoutComparison)}
                          alt={tStr(locale, "布局对比示意图", "Layout comparison diagram")}
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      ),
                    },
                    {
                      src: assetPath(modelEditorAssets.previewMaximized),
                      alt: tStr(locale, "3D 教学工坊模型编辑器界面 1", "3D workshop model editor interface 1"),
                      label: tStr(locale, "最大化预览", "Maximized preview"),
                    },
                    {
                      src: assetPath(modelEditorAssets.previewOverlay),
                      alt: tStr(locale, "3D 教学工坊模型编辑器界面 3", "3D workshop model editor interface 3"),
                      label: tStr(locale, "参数浮层", "Parameter overlay"),
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
                        顶部功能并非同一类型：编辑模块入口需要展开内容面板，模型工具需要实时观察反馈，
                        <strong className={styles.positioningEmphasis}>
                          保存、预览等高频全局动作则依循使用惯例置于右上角
                        </strong>
                        ——性质不同，归属各有依据。
                      </>,
                      <>
                        Top-bar functions are not one type: module entries expand panels, model tools need live
                        feedback, and{" "}
                        <strong className={styles.positioningEmphasis}>
                          high-frequency global actions like save and preview belong in the top-right by convention
                        </strong>
                        .
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
                        面向非专业教师用户，编辑器放弃传统专业工具的高密度小控件范式，转向以&quot;识别优先 +
                        决策减负&quot;为目标的操作界面设计，因此，我将按钮、工具入口和参数控件做得更大，并强化选中状态，让用户能快速判断
                        <strong className={styles.positioningEmphasis}>当前正在使用哪个工具</strong>。
                      </>,
                      <>
                        For non-expert teachers, the editor abandons dense professional-control patterns in favor
                        of recognition-first, decision-light UI — larger buttons and controls with clear selected
                        states so users know{" "}
                        <strong className={styles.positioningEmphasis}>which tool is active</strong>.
                      </>,
                    )}
                  </p>
                  <p>
                    {t(
                      locale,
                      "右侧工具默认使用简洁的线性图标，降低工具列的视觉重量；hover 时再出现明确的功能文字提示，补足图标理解成本。整体按钮和控件使用轻量投影与浅色样式，保持可点击感，同时不抢走模型预览的注意力。",
                      "Right-side tools use simple line icons by default; hover reveals text labels. Buttons use light shadows and pale surfaces to stay clickable without competing with the model preview.",
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
                        <strong>{t(locale, "线性图标", "Line icons")}</strong>
                        {t(locale, "：降低视觉重量，低密度展示", ": lower visual weight at low density")}
                      </li>
                      <li>
                        <strong>{t(locale, "hover 补充文字", "Hover labels")}</strong>
                        {t(locale, "：默认轻量展示，悬停时说明具体功能", ": lightweight by default, descriptive on hover")}
                      </li>
                      <li>
                        <strong>{t(locale, "统一轻量按钮和控件样式", "Unified light control style")}</strong>
                        {t(locale, "：用浅色与柔和投影表达可操作，不干扰模型预览", ": pale surfaces and soft shadows without stealing focus")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.controlExploration}>
                <FinalLayoutCarousel
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
                    {
                      label: tStr(locale, "文字提示", "Text hints"),
                      content: (
                        <div className={styles.carouselSlideFrame}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={assetPath(modelEditorAssets.shortcutsHint)}
                            alt={tStr(locale, "线性图标与快捷键设计", "Line icons and shortcut hints")}
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

        {[
          {
            headline: t(
              locale,
              "预设材质一键应用，支持金属、木纹、塑料等常见材质切换",
              "One-click material presets — metal, wood, plastic, and more",
            ),
            value: t(
              locale,
              "用可感知的材质预设替代专业参数理解，让教师通过试选就能快速接近课堂需要的视觉效果。",
              "Tangible presets replace parameter literacy — teachers can trial presets to reach the look they need.",
            ),
            video: modelEditorAssets.materialDemo,
          },
          {
            headline: t(locale, "爆炸设置：清晰展示模型层级关系", "Explode view: clear model hierarchy"),
            value: t(
              locale,
              "把复杂模型拆成可讲解的结构层级，帮助教师在课堂中说明部件关系和装配逻辑。",
              "Break complex models into teachable layers to explain part relationships and assembly logic.",
            ),
            video: modelEditorAssets.explodeDemo,
          },
          {
            headline: t(
              locale,
              "透视模式与显隐控制，快速聚焦目标部件",
              "X-ray and visibility controls to focus on target parts",
            ),
            value: t(
              locale,
              "让用户不需要反复移动视角，也能快速隔离关键部件，降低课堂演示中的信息干扰。",
              "Isolate key parts without constantly moving the camera, reducing noise during demos.",
            ),
            video: modelEditorAssets.transparencyDemo,
          },
          {
            headline: t(
              locale,
              "通过动画时间轴，预览模型的运动与拆解过程",
              "Timeline preview for motion and disassembly",
            ),
            value: t(
              locale,
              "把静态模型转化为可演示的运动过程，让结构变化、操作步骤和部件关系更容易被学生理解。",
              "Turn static models into demonstrable motion so structure, steps, and relationships are easier to follow.",
            ),
            video: modelEditorAssets.animationDemo,
          },
          {
            headline: t(
              locale,
              "为模型部件添加标注，清晰传达结构与功能信息",
              "Part labels that convey structure and function",
            ),
            value: t(
              locale,
              "把模型说明直接叠加到演示对象上，减少教师在模型、文字说明和口头讲解之间切换的负担。",
              "Overlay explanations on the model to reduce switching between object, text, and speech.",
            ),
            video: modelEditorAssets.labelsDemo,
          },
        ].map((demo) => (
          <section
            key={String(demo.headline)}
            className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection}`}
          >
            <div className={styles.conceptSection}>
              <div className={styles.conceptInner}>
                <div className={styles.conceptLabel}>{t(locale, "功能演示", "Feature Demo")}</div>
                <p className={styles.conceptHeadline}>{demo.headline}</p>
                <p className={styles.conceptValue}>{demo.value}</p>
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
            </div>
          </section>
        ))}

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
