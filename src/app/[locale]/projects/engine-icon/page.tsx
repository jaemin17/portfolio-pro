import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { assetPath } from "@/i18n/assets";
import { isLocale, type Locale } from "@/i18n/config";
import selflyStyles from "../selfly/selfly0.module.css";
import styles from "./engineIcon.module.css";

/* eslint-disable @next/next/no-img-element -- static export: project pages use manual image assets */

type EngineIconPageProps = {
  params: Promise<{ locale: string }>;
};

function t(locale: Locale, zh: ReactNode, en: ReactNode): ReactNode {
  return locale === "en" ? en : zh;
}

function tStr(locale: Locale, zh: string, en: string): string {
  return locale === "en" ? en : zh;
}

export default async function EngineIconPage({ params }: EngineIconPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  return (
    <div className={`${selflyStyles.pagePlain} ${selflyStyles.selfly0Page}`} data-page="engine-icon">
      <main className={selflyStyles.main}>
        <header className={`${selflyStyles.featuredHero} ${selflyStyles.projectOneHero}`}>
          <h1
            className={selflyStyles.title}
            aria-label={tStr(
              locale,
              "3D 应用图标设计",
              "3D App Icon Design",
            )}
          >
            {t(
              locale,
              <>
                3D 应用<span className={styles.titleEmphasis}>图标设计</span>
              </>,
              <>
                <span className={styles.titleEmphasis}>3D App</span> Icon Design
              </>,
            )}
          </h1>
          <p className={selflyStyles.subtitle}>
            {t(
              locale,
              "为 VR 实训软件设计统一风格的 3D 图标，并将复杂工程对象转译成清晰的软件入口。",
              "Designing a consistent 3D icon style for VR training simulation software, translating complex engineering objects into clear app entry points.",
            )}
          </p>
          <div className={selflyStyles.headerCta}>
            <figure className={styles.heroProcessFigure}>
              <div className={styles.heroProcessImageFrame}>
                <video
                  src={assetPath("/videos/visual/engine-icon/hero-process.mp4")}
                  width={2000}
                  height={1080}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label={tStr(locale, "Figma Vector to 3D 插件中的发动机图标生成过程", "Engine icon generated inside the Figma Vector to 3D plugin")}
                />
              </div>
              <div className={`${selflyStyles.meta} ${styles.heroProcessMeta}`}>
                <span className={selflyStyles.metaItem}>2024</span>
                <span className={selflyStyles.metaDot} aria-hidden="true">
                  ·
                </span>
                <span className={selflyStyles.metaItem}>
                  {t(locale, "3D 图标 & 视觉设计", "3D Icon & Visual Design")}
                </span>
              </div>
            </figure>
          </div>
        </header>

        <section className={styles.contextSection}>
          <div className={styles.contextCopy}>
            <p className={styles.contextLabel}>{t(locale, "项目目标", "Project goal")}</p>
            <p>
              {t(
                locale,
                "这套 VR 软件面向纯电动汽车拆装教学。系列中的每个软件都对应特定专业内容，入口图标需要快速、准确地说明软件在教什么。最合适的参照是实训里的关键模型。直接缩小几乎没有辨识度，需要把模型转译成专门的应用图标。",
                "This VR software teaches EV assembly and disassembly. Each app in the series maps to a specific professional subject, so the entry icon has to show the software’s content quickly and accurately. The most fitting reference is a key training model. Scaled down, it barely reads—so the model has to be translated into a dedicated app icon.",
              )}
            </p>
          </div>
        </section>

        <section className={styles.imageStack} aria-label={tStr(locale, "图标制作过程图片", "Icon process images")}>
          <div className={styles.iterationGrid}>
            <figure>
              <img
                className={styles.sourceModelImage}
                src={assetPath("/images/visual/engine-icon/source-model.webp")}
                alt={tStr(locale, "复杂发动机原始 3D 模型", "Complex original 3D engine model")}
                width={1000}
                height={998}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>{t(locale, "观察参考模型", "Observe the reference model")}</strong>
                {t(
                  locale,
                  "辨认主体模块（圆柱壳体、侧边管线、底座），拆成少量关键形状，再画平面转 3D。",
                  "Identify the main modules (cylindrical housing, side piping, and base), break them into a few key shapes, then draw the flat artwork that becomes 3D.",
                )}
              </figcaption>
            </figure>
            <figure>
              <img
                src={assetPath("/images/visual/engine-icon/render-test-light.webp")}
                alt={tStr(locale, "发动机图标第一次简化的浅蓝色版本", "Light-blue first simplification for the engine icon")}
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>{t(locale, "简化模型", "Simplify the model")}</strong>
                {t(
                  locale,
                  "第一次已经去掉大部分细节。缩小后结构还是偏密，通体同色也让块面更难分开。",
                  "The first pass already dropped most details. Scaled down, the structure was still too dense, and a single color made the volumes harder to separate.",
                )}
              </figcaption>
            </figure>
            <figure>
              <img
                src={assetPath("/images/visual/engine-icon/render-test-simplified.webp")}
                alt={tStr(locale, "发动机图标简化后的蓝色方向", "Simplified blue direction for the engine icon")}
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>{t(locale, "最终优化", "Final optimization")}</strong>
                {t(
                  locale,
                  "减少细节、强化体块和色彩对比，让图标在小尺寸下更清晰。",
                  "Reduces detail and strengthens volume and color contrast so the icon stays clear at small sizes.",
                )}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.moreIconSection}>
          <div className={styles.moreIconCopy}>
            <p className={styles.contextLabel}>{t(locale, "更多 3D 图标", "More 3D icons")}</p>
            <p>
              {t(
                locale,
                "同一套图标语言可以延展到不同设备、能源和实训模块。",
                "The same icon language extends across different devices, energy objects, and training modules.",
              )}
            </p>
          </div>
          <figure className={styles.moreIconFigure}>
            <img
              src={assetPath("/images/visual/engine-icon/icon-family.webp")}
              alt={tStr(locale, "同一系列的 3D 软件图标风格", "3D software icon family style")}
              width={1880}
              height={398}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>
      </main>
    </div>
  );
}
