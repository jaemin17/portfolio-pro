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
                <img
                  src={assetPath("/images/visual/engine-icon/hero-process.webp")}
                  alt={tStr(locale, "Figma Vector to 3D 插件中的发动机图标生成过程", "Engine icon generated inside the Figma Vector to 3D plugin")}
                  width={999}
                  height={640}
                  loading="eager"
                  decoding="async"
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
              <figcaption>{t(locale, "从矢量结构到 3D 图标的生成过程", "From vector structure to 3D icon rendering")}</figcaption>
            </figure>
          </div>
        </header>

        <section className={styles.contextSection}>
          <div className={styles.contextCopy}>
            <p className={styles.contextLabel}>{t(locale, "项目目标", "Project goal")}</p>
            <p>
              {t(
                locale,
                "为中高职 VR 实训软件设计一组模块入口图标，需要在不同实训内容之间保持统一的 3D 视觉语言。",
                "Designing module entry icons for vocational VR training simulation software, with a shared 3D visual language across different training topics.",
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
                <strong>{t(locale, "观察模型", "Observe the model")}</strong>
                {t(
                  locale,
                  "从复杂发动机模型中提取最有辨识度的轮廓，而不是复刻全部机械细节。",
                  "Extracts the most recognizable silhouette from the complex engine model instead of recreating every mechanical detail.",
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
                  "保留较多层级和零件关系，验证图标化后是否仍然像一个发动机模块。",
                  "Keeps more layers and part relationships to test whether the icon still reads as an engine module.",
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
