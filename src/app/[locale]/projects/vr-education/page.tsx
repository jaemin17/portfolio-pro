import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/paths";
import {
  anatomyModuleHero,
  anatomyModuleShots,
  biomedicalVrHero,
  structureModuleShots,
} from "../biomedical-vr/animalVrAssets";
import styles from "../biomedical-vr/biomedicalVr.module.css";
import { VisualSceneBlock } from "../biomedical-vr/VisualSceneBlock";
import selflyStyles from "../selfly/selfly0.module.css";
import {
  equipmentModuleShots,
  smartManufacturingHero,
  transmissionModuleShots,
} from "../smart-manufacturing/smartManufacturingAssets";

type VrEducationPageProps = {
  params: Promise<{ locale: string }>;
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

function ChallengeIcon({ type }: { type: "model" | "language" | "hierarchy" }) {
  if (type === "model") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.75 20.25 7.25V16.75L12 21.25 3.75 16.75V7.25L12 2.75ZM6.75 8.24 12 11.1 17.25 8.24 12 5.38 6.75 8.24ZM5.75 10.04V15.57L10.9 18.38V12.85L5.75 10.04ZM13.1 18.38 18.25 15.57V10.04L13.1 12.85V18.38Z" />
      </svg>
    );
  }

  if (type === "language") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5.5H19V8.25H5V5.5ZM7 10.6H17V13.35H7V10.6ZM9 15.7H15V18.45H9V15.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.85 3H13.15V7.9H19V10.15H13.15V21H10.85V10.15H5V7.9H10.85V3ZM6.35 14.1H9.55V16.35H6.35V14.1ZM14.45 14.1H17.65V16.35H14.45V14.1ZM7.8 18.25H9.55V20.5H7.8V18.25ZM14.45 18.25H16.2V20.5H14.45V18.25Z" />
    </svg>
  );
}

function KeywordPills({
  locale,
  zh,
  en,
}: {
  locale: Locale;
  zh: string[];
  en: string[];
}) {
  const keywords = locale === "en" ? en : zh;

  return (
    <ul className={styles.promptKeywordPills}>
      {keywords.map((keyword) => (
        <li className={styles.promptKeywordPill} key={keyword}>
          {keyword}
        </li>
      ))}
    </ul>
  );
}

const cattleBackgroundProcessImages = [
  {
    src: "/images/visual/vr-education/process/barn-exploration.png",
    step: "01",
    label: { zh: "主题定位", en: "Subject cue" },
    caption: { zh: "牛解剖对应牧场与牛舍", en: "Cattle anatomy mapped to barn-like spaces" },
  },
  {
    src: "/images/visual/vr-education/process/barn-clean-space.png",
    step: "02",
    label: { zh: "空间筛选", en: "Spatial selection" },
    caption: { zh: "保留纵深，减少写实杂物", en: "Keeping depth while reducing literal clutter" },
  },
  {
    src: "/images/visual/vr-education/process/cattle-background-final.png",
    step: "03",
    label: { zh: "调色清理", en: "Color refinement" },
    caption: { zh: "统一蓝色调，降低背景存在感", en: "Unifying the blue tone and lowering background presence" },
  },
  {
    src: "/images/visual/vr-education/process/cattle-interface-final.png",
    step: "04",
    label: { zh: "界面应用", en: "Interface application" },
    caption: { zh: "背景退后，模型和入口信息前置", en: "Background recedes while model and entry points lead" },
  },
] as const;

const backgroundTransferImages = [
  {
    src: "/images/visual/vr-education/process/tunnel-background.png",
    label: { zh: "汽车传动背景", en: "Automotive transmission background" },
    caption: { zh: "用隧道建立机械与交通联想", en: "A tunnel cue suggests mechanics and mobility" },
  },
  {
    src: "/images/visual/vr-education/process/cochlea-background.png",
    label: { zh: "耳部结构背景", en: "Ear anatomy background" },
    caption: { zh: "将耳蜗结构转译为空间轮廓", en: "Cochlea forms translated into spatial contours" },
  },
] as const;

export default async function VrEducationPage({ params }: VrEducationPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div
      className={`${selflyStyles.pagePlain} ${selflyStyles.selfly0Page}`}
      data-page="vr-education"
    >
      <main className={selflyStyles.main}>
        <header className={`${selflyStyles.featuredHero} ${selflyStyles.projectOneHero}`}>
          <h1 className={selflyStyles.title}>
            {t(
              locale,
              <>
                <span className={styles.conceptHeadlineEmphasis}>VR 实训软件</span>{" "}
                界面系统设计
              </>,
              <>
                VR{" "}
                <span className={styles.conceptHeadlineEmphasis}>training UI design</span>
              </>,
            )}
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "工业设备实训与生物医疗解剖等 VR 仿真软件的界面、场景背景与教学流程设计。",
              "Interface, scene background, and learning-flow design for VR simulation software across industrial training and biomedical anatomy.",
            )}
          </p>
          <div className={selflyStyles.headerCta}>
            <div className={styles.projectHeroCoverFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                src={assetPath(smartManufacturingHero)}
                alt={tStr(
                  locale,
                  "智能制造 VR 液力自动变速器首页视觉",
                  "Smart Manufacturing VR hydraulic transmission home screen",
                )}
                width={1920}
                height={1080}
                className={`${styles.mediaBorder} ${styles.projectHeroCoverImage}`}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className={selflyStyles.meta}>
              <span className={selflyStyles.metaItem}>2025</span>
              <span className={selflyStyles.metaDot} aria-hidden="true">
                ·
              </span>
              <span className={selflyStyles.metaItem}>
                {t(locale, "UI / 视觉设计", "UI / Visual Design")}
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
                    {t(locale, "让 3D 模型，", "Making 3D models")}
                  </span>
                  <br />
                  <span className={styles.positioningHeadingDark}>
                    {t(
                      locale,
                      "在清晰的教学界面中被理解",
                      "understandable through clear teaching interfaces",
                    )}
                  </span>
                </h2>
                <div className={styles.positioningBody}>
                  <p>
                    {t(
                      locale,
                      "我负责将一组职业教育 VR 模块整理成稳定的界面与视觉方法，覆盖智能制造设备、生物医疗结构训练和动物解剖教学等场景。项目需要在不同课程之间保持一致的操作体验，同时让每个学科对象具备清晰的视觉识别。",
                      "I shaped a consistent interface and visual method for a set of vocational VR modules, covering smart manufacturing equipment, biomedical structure training, and animal anatomy learning. The project needed consistent operation across courses while keeping each subject visually recognizable.",
                    )}
                  </p>
                </div>
              </div>
              <section className={styles.challengeBlock}>
                <h3>{t(locale, "设计挑战", "Design Challenges")}</h3>
                <div className={styles.challengeTrack}>
                  <article className={styles.challengeNode}>
                    <span className={styles.challengeIcon}>
                      <ChallengeIcon type="model" />
                    </span>
                    <h4>{t(locale, "模型主位", "Model-first focus")}</h4>
                    <p>
                      {t(
                        locale,
                        "降低界面、背景和材质干扰，让学习者先看到需要理解的 3D 对象。",
                        "Reduce UI, background, and material noise so learners first see the 3D object they need to understand.",
                      )}
                    </p>
                  </article>
                  <article className={styles.challengeNode}>
                    <span className={styles.challengeIcon}>
                      <ChallengeIcon type="language" />
                    </span>
                    <h4>{t(locale, "学科辨识", "Subject identity")}</h4>
                    <p>
                      {t(
                        locale,
                        "保持统一的操作和视觉规则，同时让制造、解剖等课程具备各自识别度。",
                        "Keep shared interaction and visual rules while giving manufacturing, anatomy, and other courses recognizable identities.",
                      )}
                    </p>
                  </article>
                  <article className={styles.challengeNode}>
                    <span className={styles.challengeIcon}>
                      <ChallengeIcon type="hierarchy" />
                    </span>
                    <h4>{t(locale, "信息分层", "Information hierarchy")}</h4>
                    <p>
                      {t(
                        locale,
                        "把教学说明、模型观察和实操引导拆出层级，避免单屏信息互相抢占。",
                        "Separate teaching notes, model observation, and operation guidance so one screen does not compete with itself.",
                      )}
                    </p>
                  </article>
                </div>
              </section>
              <section className={styles.strategySection}>
                <p className={styles.positioningLabel}>{t(locale, "设计策略", "Design Strategy")}</p>
                <div className={styles.positioningGrid}>
                  <h2 className={styles.positioningHeading}>
                    <span className={styles.positioningHeadingLight}>
                      {t(locale, "从教学对象，", "From learning subjects")}
                    </span>
                    <br />
                    <span className={styles.positioningHeadingDark}>
                      {t(locale, "提取空间隐喻", "to spatial metaphors")}
                    </span>
                  </h2>
                  <div className={styles.positioningBody}>
                    <p>
                      {t(
                        locale,
                        "我没有把背景当作装饰图处理，而是根据不同实训内容提取对应的空间隐喻：牛解剖对应牧场与牛舍，汽车传动结构对应隧道空间，耳部结构则转译为类似耳蜗的弧形场景。",
                        "Instead of treating backgrounds as decoration, I translated each training subject into a restrained spatial metaphor: a barn-like space for cattle anatomy, a tunnel-like scene for automotive transmission, and cochlea-inspired curves for ear anatomy.",
                      )}
                    </p>
                    <p>
                      {t(
                        locale,
                        "经过 AI 关键词探索和 Figma 后期调色，我保留主题联想与空间纵深，同时压低细节、对比和材质干扰，让 3D 模型和教学信息始终成为界面的视觉重点。",
                        "Through AI prompt exploration and Figma color refinement, I kept the thematic association and depth while reducing detail, contrast, and texture noise, so the 3D model and learning content remained visually dominant.",
                      )}
                    </p>
                    <ul className={styles.processTagList}>
                      <li className={styles.processTag}>
                        {t(locale, "从对象提取空间隐喻", "Spatial metaphors from subjects")}
                      </li>
                      <li className={styles.processTag}>
                        {t(locale, "主题相关但不直白堆叠", "Relevant without literal clutter")}
                      </li>
                      <li className={styles.processTag}>
                        {t(locale, "低干扰地承托模型", "Low-noise support for models")}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className={styles.promptStrategyBlock}>
                <div>
                  <p className={styles.promptStrategyKicker}>
                    {t(locale, "关键词探索", "Keyword Exploration")}
                  </p>
                  <h3 className={styles.promptStrategyHeading}>
                    {t(
                      locale,
                      "拆解五类背景关键词",
                      "Breaking down five background prompt groups",
                    )}
                  </h3>
                  <p className={styles.promptStrategyLead}>
                    {t(
                      locale,
                      "在 AI 探索阶段，我主要使用一组偏空间方法的关键词：抽象空间、模型展示、低干扰背景和视觉氛围控制占主导；Cochlea 则作为少量具体课程主题线索。",
                      "During AI exploration, I mainly used spatial-method prompts: abstract space, model display, low-noise backgrounds, and visual atmosphere control were the core; Cochlea stayed as a small subject cue.",
                    )}
                  </p>
                </div>
                <div className={styles.promptKeywordGrid}>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "抽象空间", "Abstract Space")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "建立可复用的非写实教学空间。",
                        "Create reusable, non-literal teaching spaces.",
                      )}
                    </p>
                    <KeywordPills
                      locale={locale}
                      zh={["抽象 3D 环境", "扁平化透视", "空间平面感"]}
                      en={["an abstract 3D environment", "flattened perspective", "flatness of space"]}
                    />
                  </div>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "模型展示", "Model Display")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "为 3D 模型预留清晰展示位置。",
                        "Reserve clear display space for the 3D model.",
                      )}
                    </p>
                    <KeywordPills
                      locale={locale}
                      zh={["留白空间", "开阔空间", "舞台式环境", "正面视角"]}
                      en={["empty space", "expansive spaces", "stage-like environments", "frontal perspective"]}
                    />
                  </div>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "低干扰背景", "Low-noise Background")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "减少细节噪音，让背景退后。",
                        "Reduce detail noise and push the background back.",
                      )}
                    </p>
                    <KeywordPills
                      locale={locale}
                      zh={["稀疏背景", "克制的极简感", "细微色彩变化"]}
                      en={["sparse backgrounds", "subdued minimalism", "subtle color variations"]}
                    />
                  </div>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "视觉质感", "Visual Texture")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "控制色彩、光照和空间可信度。",
                        "Control color, lighting, and spatial credibility.",
                      )}
                    </p>
                    <KeywordPills
                      locale={locale}
                      zh={["青蓝色", "真实光照", "透视渲染"]}
                      en={["cyan", "realistic lighting", "perspective rendering"]}
                    />
                  </div>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "主题线索", "Subject Cues")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "根据课程对象补充主题联想。",
                        "Add thematic associations from the course subject.",
                      )}
                    </p>
                    <KeywordPills
                      locale={locale}
                      zh={["耳蜗结构", "机械通道", "动物栖息空间"]}
                      en={["cochlea structure", "mechanical tunnel", "animal habitat"]}
                    />
                  </div>
                </div>
              </section>
              <figure className={styles.processImagePlaceholder}>
                <h3 className={styles.backgroundProcessHeading}>
                  {t(
                    locale,
                    "牛解剖背景探索流程",
                    "Cattle Anatomy Background Exploration",
                  )}
                </h3>
                <div className={styles.backgroundProcessGrid}>
                  {cattleBackgroundProcessImages.map((image) => (
                    <div className={styles.backgroundProcessCard} key={image.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                      <img
                        src={assetPath(image.src)}
                        alt={tStr(locale, image.caption.zh, image.caption.en)}
                        width={1920}
                        height={1080}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className={styles.backgroundProcessOverlay}>
                        <div className={styles.backgroundProcessStep}>
                          <span className={styles.backgroundProcessNumber}>
                            {image.step}
                          </span>
                          <span className={styles.backgroundProcessTitle}>
                            {t(locale, image.label.zh, image.label.en)}
                          </span>
                        </div>
                        <p>{t(locale, image.caption.zh, image.caption.en)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.backgroundTransferBlock}>
                  <p className={styles.backgroundTransferIntro}>
                    {t(
                      locale,
                      "同一方法也延展到其他课程模块：",
                      "The same method was extended to other course modules:",
                    )}
                  </p>
                  <div className={styles.backgroundTransferGrid}>
                    {backgroundTransferImages.map((image) => (
                      <div className={styles.backgroundProcessCard} key={image.src}>
                        {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                        <img
                          src={assetPath(image.src)}
                          alt={tStr(locale, image.caption.zh, image.caption.en)}
                          width={1920}
                          height={1080}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className={styles.backgroundProcessOverlay}>
                          <span>{t(locale, image.label.zh, image.label.en)}</span>
                          <p>{t(locale, image.caption.zh, image.caption.en)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <figcaption className={styles.processImagePlaceholderCaption}>
                  {t(
                    locale,
                    "主线展示牛解剖背景从主题定位到界面应用的闭环；补充图说明同一背景方法可迁移到汽车传动与耳部结构模块。",
                    "The main sequence shows the cattle anatomy background from subject cue to interface application; supporting examples show how the same method transfers to automotive transmission and ear anatomy modules.",
                  )}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section
          id="smart-manufacturing"
          className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection} ${styles.chapterAnchor}`}
          aria-label={tStr(locale, "智能制造 VR", "Smart Manufacturing VR")}
        >
          <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "章节 01", "Chapter 01")}
              </p>
              <h2 className={styles.chapterHeading}>
                {t(locale, "智能制造 VR", "Smart Manufacturing VR")}
              </h2>
              <p className={styles.chapterLead}>
                {t(
                  locale,
                  "变速器、工业机器人、注塑模具等工业设备实训画面和教学操作界面。我将首页用于对象识别，子页面用于结构说明和操作反馈，避免单屏同时承载导览、教学和实操任务。",
                  "Training views and teaching UI for industrial equipment such as transmissions, robots, and injection molds. I used home screens for object recognition, then moved structure notes and operation feedback into subpages so one screen did not carry browsing, teaching, and practice at once.",
                )}
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                className={`${styles.mediaBorder} ${styles.subsectionHeroImage}`}
                src={assetPath(smartManufacturingHero)}
                alt={tStr(
                  locale,
                  "智能制造 VR 液力自动变速器首页视觉",
                  "Smart Manufacturing VR hydraulic transmission home screen",
                )}
                loading="lazy"
                decoding="async"
              />

              <div className={styles.sceneStack}>
                {transmissionModuleShots.map((shot) => (
                  <VisualSceneBlock key={shot.src} shot={shot} locale={locale} />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "机器人与模具", "Robots & Molds")}
              </p>
              <div className={styles.narrativeGrid}>
                <h2 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "从设备首页展示，", "From equipment home screens")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "到教学与操作子页面", "to teaching and operation subpages")}
                  </span>
                </h2>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      "工业机器人与注塑模具模块需要同时呈现首页导览、机构说明和装配操作。我的处理方式是把可浏览的设备选择、可阅读的结构说明、可执行的装配步骤拆成不同界面状态，并用高亮、面板和底部操作入口建立稳定层级。",
                      "Robot and mold modules had to present home tours, mechanism notes, and assembly operations together. I separated browsable equipment selection, readable structure notes, and executable assembly steps into distinct UI states, using highlights, panels, and bottom actions as stable hierarchy anchors.",
                    )}
                  </p>
                </div>
              </div>

              <div className={styles.sceneStack}>
                {equipmentModuleShots.map((shot) => (
                  <VisualSceneBlock
                    key={`${shot.src}-${shot.subtitle.zh}`}
                    shot={shot}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="biomedical"
          className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection} ${styles.chapterAnchor}`}
          aria-label={tStr(locale, "生物医疗 VR", "Biomedical VR")}
        >
          <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "章节 02", "Chapter 02")}
              </p>
              <h2 className={styles.chapterHeading}>
                {t(locale, "生物医疗 VR", "Biomedical VR")}
              </h2>
              <p className={styles.chapterLead}>
                {t(
                  locale,
                  "动物模型、解剖训练、手术步骤和课程资源相关的 VR 仿真软件界面。这个方向的重点是从单一结构展示扩展为完整解剖教学流程，让学习者能在模型观察、结构讲解、课程选择和引导弹窗之间顺畅切换。",
                  "UI design for VR simulation software covering animal models, anatomy training, surgical steps, and course resources. The focus was expanding from single-structure views into a full anatomy learning flow, so learners could move between model observation, structure explanation, course selection, and onboarding.",
                )}
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                className={`${styles.mediaBorder} ${styles.subsectionHeroImage}`}
                src={assetPath(biomedicalVrHero)}
                alt={tStr(locale, "生物医疗 VR 首页视觉", "Biomedical VR home screen")}
                loading="lazy"
                decoding="async"
              />

              <p className={styles.positioningLabel} style={{ marginTop: 48 }}>
                {t(locale, "结构训练模块", "Structure Training Modules")}
              </p>
              <div className={styles.sceneStack}>
                {structureModuleShots.map((shot) => (
                  <VisualSceneBlock key={shot.src} shot={shot} locale={locale} />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.narrativeSection}>
            <div className={styles.narrativeInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "动物解剖 VR", "Animal Anatomy VR")}
              </p>
              <div className={styles.narrativeGrid}>
                <h2 className={styles.narrativeHeadline}>
                  <span className={styles.narrativeHeadlineLight}>
                    {t(locale, "从单一结构展示，", "From single-structure views")}
                  </span>
                  <br />
                  <span className={styles.narrativeHeadlineDark}>
                    {t(locale, "到完整解剖教学流程", "to full anatomy teaching flows")}
                  </span>
                </h2>
                <div className={styles.narrativeBody}>
                  <p>
                    {t(
                      locale,
                      "动物解剖模块需要同时呈现结构教学、交互状态、课程列表与新手指引。我保留蓝色空间基底作为统一场景语言，再用动物主体、课程卡片、状态按钮和引导面板区分不同学习阶段。",
                      "Animal anatomy modules had to present structure teaching, interaction states, course lists, and onboarding together. I kept the blue spatial base as a shared scene language, then used animal subjects, course cards, state buttons, and guidance panels to separate learning stages.",
                    )}
                  </p>
                </div>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
              <img
                className={`${styles.mediaBorder} ${styles.subsectionHeroImage}`}
                src={assetPath(anatomyModuleHero)}
                alt={tStr(locale, "动物解剖 VR 场景概览", "Animal anatomy VR scene overview")}
                loading="lazy"
                decoding="async"
              />

              <div className={styles.sceneStack}>
                {anatomyModuleShots.map((shot) => (
                  <VisualSceneBlock
                    key={`${shot.src}-${shot.subtitle.zh}`}
                    shot={shot}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={selflyStyles.selfly0ContactSection}
          aria-label={tStr(locale, "结语", "Closing")}
        >
          <div className={`${selflyStyles.selfly0ContactInner} ${styles.contactAlign}`}>
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
