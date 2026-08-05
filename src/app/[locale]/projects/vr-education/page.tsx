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
import { BackgroundTransferSwitcher } from "./BackgroundTransferSwitcher";

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
    label: { zh: "主题线索", en: "Subject cue" },
    caption: {
      zh: "牛解剖对应牧场 / 牛舍，先确定背景要指向的课程对象。",
      en: "Cattle anatomy maps to barn-like cues, defining which course subject the background should point to.",
    },
  },
  {
    src: "/images/visual/vr-education/process/barn-clean-space.png",
    step: "02",
    label: { zh: "空间抽象", en: "Spatial abstraction" },
    caption: {
      zh: "保留棚舍的纵深和轮廓，但减少写实杂物。",
      en: "Keep the depth and outline of the barn space while reducing literal clutter.",
    },
  },
  {
    src: "/images/visual/vr-education/process/cattle-background-final.png",
    step: "03",
    label: { zh: "低干扰处理", en: "Low-noise treatment" },
    caption: {
      zh: "统一青蓝色调，压低材质、对比和细节噪音。",
      en: "Unify the cyan-blue tone and reduce texture, contrast, and detail noise.",
    },
  },
  {
    src: "/images/visual/vr-education/process/cattle-interface-final.png",
    step: "04",
    label: { zh: "界面验证", en: "Interface validation" },
    caption: {
      zh: "放回实训首页，确认模型、标题和入口信息仍然是视觉主位。",
      en: "Place the background back into the training home screen and confirm the model, title, and entry points still lead.",
    },
  },
] as const;

const backgroundTransferImages = [
  {
    src: "/images/visual/vr-education/process/animal-cave-background.png",
    label: { zh: "动物洞穴背景", en: "Animal cave background" },
    caption: { zh: "用洞穴空间建立动物栖息联想", en: "A cave-like space suggests animal habitats" },
  },
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
  {
    src: "/images/visual/vr-education/process/injection-background.png",
    label: { zh: "注塑背景", en: "Injection molding background" },
    caption: { zh: "用模具空间建立工业设备联想", en: "A mold-like space suggests industrial equipment" },
  },
] as const;

const appIconItems = [
  {
    src: "/images/visual/vr-education/icons/cattle.png",
    label: { zh: "牛", en: "Cattle" },
  },
  {
    src: "/images/visual/vr-education/icons/dog.png",
    label: { zh: "狗", en: "Dog" },
  },
  {
    src: "/images/visual/vr-education/icons/cat.png",
    label: { zh: "猫", en: "Cat" },
  },
  {
    src: "/images/visual/vr-education/icons/pig-icon.png",
    label: { zh: "猪", en: "Pig" },
  },
  {
    src: "/images/visual/vr-education/icons/motor.png",
    label: { zh: "电机", en: "Motor" },
  },
  {
    src: "/images/visual/vr-education/icons/application.png",
    label: { zh: "应用", en: "Application" },
  },
  {
    src: "/images/visual/vr-education/icons/position.png",
    label: { zh: "岗位", en: "Position" },
  },
  {
    src: "/images/visual/vr-education/icons/electromechanical.png",
    label: { zh: "机电", en: "Mechatronics" },
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
                        "我把课程背景作为学科识别和模型展示的承托层：从实训对象提取空间线索，再转译为低干扰的 3D 场景。牛解剖对应牧场与牛舍，汽车传动结构对应隧道空间，耳部结构则转译为耳蜗式弧形空间。",
                        "I treated course backgrounds as a support layer for subject identity and model presentation: extracting spatial cues from each training object, then translating them into low-noise 3D scenes. Cattle anatomy maps to a barn-like space, automotive transmission maps to a tunnel, and ear anatomy becomes a cochlea-like curved space.",
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
                    {t(locale, "AI 关键词探索", "AI Keyword Exploration")}
                  </p>
                  <h3 className={styles.promptStrategyHeading}>
                    {t(
                      locale,
                      "为 3D 模型建立低干扰展示空间",
                      "Building a low-noise display space for 3D models",
                    )}
                  </h3>
                  <p className={styles.promptStrategyLead}>
                    {t(
                      locale,
                      "我先从课程对象提取主题线索，再把它转译成抽象空间；随后用模型展示、低干扰背景和视觉质感控制画面，让背景既能指向具体课程，又不会抢走 3D 模型和教学信息的视觉主位。",
                      "I first extracted subject cues from the course object, then translated them into abstract space. Model display, low-noise backgrounds, and visual texture then controlled the composition, so the background could point to a specific course without competing with the 3D model or learning content.",
                    )}
                  </p>
                </div>
                <div className={styles.promptKeywordGrid}>
                  <div className={styles.promptKeywordCard}>
                    <span>{t(locale, "主题线索", "Subject Cues")}</span>
                    <p className={styles.promptKeywordPurpose}>
                      {t(
                        locale,
                        "从课程对象提取空间联想。",
                        "Extract spatial associations from the course subject.",
                      )}
                    </p>
                    <KeywordPills
                      locale={locale}
                      zh={["结构形态", "通道空间", "栖息场域"]}
                      en={["structural form", "tunnel space", "habitat field"]}
                    />
                  </div>
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
                </div>
              </section>
              <figure className={styles.processImagePlaceholder}>
                <h3 className={styles.backgroundProcessHeading}>
                  {t(
                    locale,
                    "课程背景的视觉转译流程",
                    "Visual Translation Process for Course Backgrounds",
                  )}
                </h3>
                <div className={styles.backgroundProcessGrid}>
                  {cattleBackgroundProcessImages.map((image) => (
                    <div className={styles.backgroundProcessCard} key={image.src}>
                      <span className={styles.backgroundProcessImageNumber} aria-hidden="true">
                        {image.step}
                      </span>
                      {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                      <img
                        src={assetPath(image.src)}
                        alt={tStr(locale, image.caption.zh, image.caption.en)}
                        width={1920}
                        height={1080}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.backgroundProcessNotesPanel}>
                  <div className={styles.backgroundProcessNotes}>
                    {cattleBackgroundProcessImages.map((image) => (
                      <article className={styles.backgroundProcessNote} key={`${image.step}-${image.label.zh}`}>
                        <div className={styles.backgroundProcessStep}>
                          <span className={styles.backgroundProcessNumber}>
                            {image.step}
                          </span>
                          <span className={styles.backgroundProcessTitle}>
                            {t(locale, image.label.zh, image.label.en)}
                          </span>
                        </div>
                        <p>{t(locale, image.caption.zh, image.caption.en)}</p>
                      </article>
                    ))}
                  </div>
                </div>
                <div className={styles.backgroundTransferBlock}>
                  <p className={styles.backgroundTransferIntro}>
                    {t(
                      locale,
                      "同一套背景方法，迁移到不同课程对象：",
                      "The same background method was adapted across course subjects:",
                    )}
                  </p>
                  <BackgroundTransferSwitcher
                    items={backgroundTransferImages.map((image) => ({
                      src: assetPath(image.src),
                      label: tStr(locale, image.label.zh, image.label.en),
                      caption: tStr(locale, image.caption.zh, image.caption.en),
                      alt: tStr(locale, image.caption.zh, image.caption.en),
                    }))}
                  />
                </div>
              </figure>

              <section
                className={styles.uiSystemSection}
                aria-label={tStr(locale, "界面系统", "Interface System")}
              >
                <div className={styles.uiSystemStack}>
                  <article className={styles.uiSystemModule}>
                    <p className={styles.positioningLabel}>
                      {t(locale, "材质与状态", "Material & State")}
                    </p>
                    <div className={styles.uiSystemModuleGrid}>
                      <header className={styles.uiSystemModuleHeader}>
                        <h3 className={styles.uiSystemTitle}>
                          {t(
                            locale,
                            "融入3D空间的玻璃态UI设计",
                            "Spatial Glass Interface",
                          )}
                        </h3>
                        <p className={styles.uiSystemSubtitle}>
                          {t(
                            locale,
                            "半透明材质与发光状态组成同一套视觉语言",
                            "Transparency and glow form one visual language",
                          )}
                        </p>
                        <div className={styles.uiSystemGoal}>
                          <span className={styles.uiSystemGoalLabel}>
                            {t(locale, "设计目标", "Design Goal")}
                          </span>
                          <p className={styles.uiSystemGoalText}>
                            {t(
                              locale,
                              "让 UI 成为三维空间的一部分，并用光感状态轻轻标出当前选择。",
                              "Make the UI part of 3D space, and use glow to quietly mark the current selection.",
                            )}
                          </p>
                        </div>
                      </header>
                      <div className={styles.uiSystemModuleBody}>
                        <p className={styles.uiSystemBody}>
                          {t(
                            locale,
                            <>
                              采用
                              <strong className={styles.uiSystemEmphasis}>清透的玻璃质感</strong>
                              作为核心视觉语言。半透明材质
                              <strong className={styles.uiSystemEmphasis}>融入背景</strong>
                              ，配合柔和光效，让 UI 像
                              <strong className={styles.uiSystemEmphasis}>空间中的信息层</strong>
                              一样存在，而不是覆盖在模型之上的传统平面界面。
                            </>,
                            <>
                              I used a{" "}
                              <strong className={styles.uiSystemEmphasis}>clear glass material</strong>{" "}
                              as the core visual language. Semi-transparent surfaces{" "}
                              <strong className={styles.uiSystemEmphasis}>blend into the background</strong>
                              , and soft light effects let the UI sit as an{" "}
                              <strong className={styles.uiSystemEmphasis}>information layer in space</strong>
                              , not as a traditional flat overlay on the model.
                            </>,
                          )}
                        </p>
                        <p className={styles.uiSystemBody}>
                          {t(
                            locale,
                            <>
                              底部功能按钮刻意做成
                              <strong className={styles.uiSystemEmphasis}>左右开放的边缘</strong>
                              ，
                              <strong className={styles.uiSystemEmphasis}>取消完整卡片感</strong>
                              ，让背景可以连续穿过。同时用
                              <strong className={styles.uiSystemEmphasis}>上沿光带与雕刻式分割线</strong>
                              做出
                              <strong className={styles.uiSystemEmphasis}>微微凸起的实体感</strong>
                              ，既有可点击的体积，又不显得沉重；再配合轻微倾斜与柔和光感，让整组控件
                              <strong className={styles.uiSystemEmphasis}>
                                既有实体感，又保留科技界面的轻盈
                              </strong>
                              。
                            </>,
                            <>
                              Bottom action buttons intentionally leave the{" "}
                              <strong className={styles.uiSystemEmphasis}>left and right edges open</strong>
                              ,{" "}
                              <strong className={styles.uiSystemEmphasis}>canceling a full card frame</strong>{" "}
                              so the background can continue through. A{" "}
                              <strong className={styles.uiSystemEmphasis}>
                                top light band and carved dividers
                              </strong>{" "}
                              create a{" "}
                              <strong className={styles.uiSystemEmphasis}>slightly raised physical feel</strong>
                              —clickable in volume, but not heavy—while a slight tilt and soft light keep the
                              controls{" "}
                              <strong className={styles.uiSystemEmphasis}>
                                physical in presence, yet light like a tech interface
                              </strong>
                              .
                            </>,
                          )}
                        </p>
                        <p className={styles.uiSystemFocusLabel}>
                          {t(locale, "设计重点", "Design Focus")}
                        </p>
                        <ul className={styles.uiSystemFocusList}>
                          <li>
                            {t(
                              locale,
                              "清透UI，融入场景",
                              "Clear UI that blends into the scene",
                            )}
                          </li>
                          <li>
                            {t(
                              locale,
                              "开放边缘，取消卡片感",
                              "Open edges that cancel the card look",
                            )}
                          </li>
                          <li>
                            {t(
                              locale,
                              "光影雕刻，轻量实体",
                              "Light-and-shadow carving for light physical presence",
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <figure className={styles.uiSystemEvidence}>
                      {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                      <img
                        className={styles.mediaBorder}
                        src={assetPath("/images/visual/animal-vr/dog-muscle-highlight.png")}
                        alt={tStr(
                          locale,
                          "犬体结构界面：玻璃态面板与发光选中状态",
                          "Canine structure UI with glass panels and glowing selection state",
                        )}
                        width={1920}
                        height={1080}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </article>

                  <article className={styles.uiSystemModule}>
                    <p className={styles.positioningLabel}>
                      {t(locale, "图标", "Icons")}
                    </p>
                    <div className={styles.uiSystemModuleGrid}>
                      <header className={styles.uiSystemModuleHeader}>
                        <h3 className={styles.uiSystemTitle}>
                          {t(
                            locale,
                            "轻量线性的功能图标设计",
                            "Lightweight Linear Icons",
                          )}
                        </h3>
                        <p className={styles.uiSystemSubtitle}>
                          {t(
                            locale,
                            "用简洁轮廓完成识别，再用投影补足体积感",
                            "Clear outlines for recognition, quiet shadows for volume",
                          )}
                        </p>
                        <div className={styles.uiSystemGoal}>
                          <span className={styles.uiSystemGoalLabel}>
                            {t(locale, "设计目标", "Design Goal")}
                          </span>
                          <p className={styles.uiSystemGoalText}>
                            {t(
                              locale,
                              "让功能入口足够轻，也足够好认，不抢走模型的主视觉。",
                              "Keep action icons light and readable without competing with the model.",
                            )}
                          </p>
                        </div>
                      </header>
                      <div className={styles.uiSystemModuleBody}>
                        <p className={styles.uiSystemBody}>
                          {t(
                            locale,
                            "实训界面信息密度高，图标需要在很小的面积里快速传达功能。我采用线性视觉风格，用简洁轮廓表达爆炸、隐藏、表皮、肌肉等操作含义，减少复杂装饰，提高识别效率。",
                            "Training screens are information-dense, so icons need to communicate quickly in a small footprint. I used a linear style with clear outlines for actions like explode, hide, skin, and muscle, reducing decoration to improve recognition.",
                          )}
                        </p>
                        <p className={styles.uiSystemBody}>
                          {t(
                            locale,
                            "同时，纯平面线稿容易显得过薄。我会为图标加入轻微反差色投影，让它在玻璃态底面上仍有体积和光感，既保持低视觉重量，又能被直觉识别为可点击入口。",
                            "Pure flat linework can feel too thin, so I add a quiet contrast shadow. On the glass surface, icons keep a sense of volume and light while staying low in visual weight, and still read as clickable entries.",
                          )}
                        </p>
                        <p className={styles.uiSystemFocusLabel}>
                          {t(locale, "设计重点", "Design Focus")}
                        </p>
                        <ul className={styles.uiSystemFocusList}>
                          <li>
                            {t(
                              locale,
                              "线性轮廓，快速好识别",
                              "Linear outlines for quick recognition",
                            )}
                          </li>
                          <li>
                            {t(
                              locale,
                              "视觉轻量，不抢模型",
                              "Light visual weight that doesn't compete with the model",
                            )}
                          </li>
                          <li>
                            {t(
                              locale,
                              "反差投影补体积感与光感",
                              "Contrast shadows for volume and light",
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <figure
                      className={`${styles.uiSystemEvidence} ${styles.uiSystemEvidencePlaceholder}`}
                      aria-label={tStr(locale, "图标配图待补充", "Icon evidence image to follow")}
                    />
                  </article>
                </div>

                <p className={styles.uiSystemClosing}>
                  {t(
                    locale,
                    "通过玻璃态材质、发光选择态和轻量化图标体系，建立了一套适用于三维实训可视化场景的 UI 设计系统。在提供有效反馈的同时，让 3D 模型始终保持核心视觉地位。",
                    "Through glass materials, glowing selection states, and a lightweight icon language, the interface system was designed for 3D training visualization. It gives clear feedback while keeping the model as the primary focus.",
                  )}
                </p>
              </section>
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
          id="app-icon-system"
          className={`${selflyStyles.caseSection} ${selflyStyles.selfly0CaseSection} ${styles.chapterAnchor}`}
          aria-label={tStr(locale, "应用图标系统", "App Icon System")}
        >
          <div className={`${styles.positioningSection} ${styles.stackedSection}`}>
            <div className={styles.positioningInner}>
              <p className={styles.positioningLabel}>
                {t(locale, "章节 03", "Chapter 03")}
              </p>
              <h2 className={styles.chapterHeading}>
                {t(locale, "应用图标系统", "App Icon System")}
              </h2>
              <p className={styles.chapterLead}>
                {t(
                  locale,
                  "把课程对象转译成可快速识别的 3D 学习入口。图标不只是装饰，而是在学生进入课程前建立学科预期。",
                  "Translating course subjects into quickly recognizable 3D learning entries. The icons are not decoration; they set subject expectations before students enter a course.",
                )}
              </p>

              <div className={styles.appIconSystemHero}>
                <figure className={styles.appIconFeatureCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                  <img
                    src={assetPath("/images/visual/vr-education/icons/cat.png")}
                    alt={tStr(locale, "猫 VR 实训应用图标", "Cat VR training app icon")}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <div className={styles.appIconSystemBody}>
                  <p>
                    {t(
                      locale,
                      "在 VR 实训软件中，应用图标承担的不只是入口识别，也是在进入课程前建立学科预期。我将每个模块的核心学习对象放在图标中央，用统一的蓝青色空间、圆角容器和右下角课程标签建立系统感。",
                      "In VR training software, app icons do more than identify entries; they set expectations before the course opens. I placed each module's core learning subject at the center, then used a shared cyan-blue space, rounded container, and lower-right course label to form a coherent system.",
                    )}
                  </p>
                  <div className={styles.appIconDecisionGrid}>
                    <article className={styles.appIconDecision}>
                      <h3>{t(locale, "主体模型优先", "Model-first subject")}</h3>
                      <p>
                        {t(
                          locale,
                          "让 3D 对象占据最大视觉权重，学生先判断课程内容，再阅读文字标签。",
                          "Let the 3D object carry the strongest visual weight, so students read the subject before the label.",
                        )}
                      </p>
                    </article>
                    <article className={styles.appIconDecision}>
                      <h3>{t(locale, "统一容器语言", "Shared container language")}</h3>
                      <p>
                        {t(
                          locale,
                          "圆角、渐变背景、右下标签区保持一致，降低多模块浏览和切换成本。",
                          "Rounded corners, gradient backgrounds, and lower-right labels stay consistent to reduce browsing cost across modules.",
                        )}
                      </p>
                    </article>
                    <article className={styles.appIconDecision}>
                      <h3>{t(locale, "分类色彩控制", "Category color control")}</h3>
                      <p>
                        {t(
                          locale,
                          "工业类偏蓝，动物 / 示教类偏青蓝，在统一基底上保留轻微分类差异。",
                          "Industrial modules lean blue, while animal and teaching modules lean cyan-blue, keeping subtle category differences within one system.",
                        )}
                      </p>
                    </article>
                  </div>
                </div>

                <div className={styles.appIconScroller} aria-label={tStr(locale, "VR 实训应用图标横向列表", "VR training app icon horizontal list")}>
                  <div className={styles.appIconStrip}>
                    {appIconItems.map((item) => (
                      <figure className={styles.appIconTile} key={item.src}>
                        {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                        <img
                          src={assetPath(item.src)}
                          alt={tStr(
                            locale,
                            `${item.label.zh} VR 实训应用图标`,
                            `${item.label.en} VR training app icon`,
                          )}
                          width={1024}
                          height={1024}
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
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
