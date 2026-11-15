import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import styles from "./styleGuide.module.css";

export const metadata: Metadata = {
  title: "Visual Guidelines — Jiamin Li",
  robots: { index: false, follow: false },
};

type Rule = { id: string; example: ReactNode; value: ReactNode; usage: string };

function RuleTable({ rows, caption, labels, className = "" }: {
  rows: Rule[];
  caption: string;
  labels: [string, string, string];
  className?: string;
}) {
  return (
    <table className={`${styles.table} ${className}`}>
      <caption className={styles.srOnly}>{caption}</caption>
      <thead><tr>{labels.map((label) => <th scope="col" key={label}>{label}</th>)}</tr></thead>
      <tbody>{rows.map((row) => (
        <tr key={row.id}>
          <th scope="row">{row.example}</th>
          <td>{row.value}</td>
          <td>{row.usage}</td>
        </tr>
      ))}</tbody>
    </table>
  );
}

export default async function StyleGuidePage({ params }: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const zh = locale === "zh";
  const t = (cn: string, en: string) => zh ? cn : en;
  const labels: [string, string, string] = [t("样式", "Example"), t("数值 / 定义", "Value / definition"), t("用途", "Usage")];
  const value = (main: string, detail?: string) => <><span className={styles.number}>{main}</span>{detail && <span className={styles.detail}>{detail}</span>}</>;
  const weights: Rule[] = [
    { id: "body", example: <span className={styles.bodySample}>{t("正文", "Body text")}<span className={styles.sampleLine}>The details make the difference.</span></span>, value: value("400", "Regular"), usage: t("常规段落与说明正文。", "Standard paragraphs and explanatory text.") },
    { id: "heading", example: <span className={styles.headingSample}>{t("标题", "Heading")}<span className={styles.sampleLine}>The details make the difference.</span></span>, value: value("500", "Medium"), usage: t("常规标题；装饰性展示文字单独定义。", "Standard headings; decorative display text is defined separately.") },
    { id: "emphasis", example: <span className={styles.emphasisSample}>{t("重点文字", "Emphasis")}<span className={styles.sampleLine}>The details make the difference.</span></span>, value: value("500", "Medium"), usage: t("正文中需要突出表达的词句。", "Words and phrases emphasized within body text.") },
  ];
  const fonts: Rule[] = [
    { id: "chinese", example: <span className={styles.chineseSample} lang="zh">持续探索，清晰表达。</span>, value: "Noto Sans SC", usage: t("中文标题、正文与说明；不可用时回退至系统中文字体。", "Chinese headings and body text, with system Chinese font fallbacks.") },
    { id: "latin", example: <span className={styles.latinSample} lang="en">Design with clarity. 0123</span>, value: "Geist", usage: t("常规英文与数字。", "Standard Latin text and numerals.") },
    { id: "mono", example: <span className={styles.monoSample} lang="en">work / about / 2026</span>, value: "IBM Plex Mono", usage: t("英文导航与部分项目元信息中的等宽文字。", "Monospaced Latin navigation and selected project metadata.") },
  ];
  const sizeNames: Record<string, string> = {
    display: t("展示标题", "Display"), title: t("内容标题", "Heading"),
    body: t("正文内容", "Body text"), subtitle: t("副标题", "Subtitle"),
    label: t("标签文字", "Label"), caption: t("辅助说明", "Caption"),
  };
  const sizes = [
    ["display", "42", "--fs-display", t("共用案例 hero 的宽屏标题；≤760px 改用 26px。", "Shared case hero headings; 26px at 760px and below.")],
    ["title", "26", "--fs-title", t("内容标题。", "Content headings.")],
    ["subtitle", "20", "--fs-subtitle", t("副标题与较突出的说明。", "Subtitles and prominent descriptions.")],
    ["body", "16", "--fs-body", t("常规正文。", "Standard body text.")],
    ["label", "14", "--fs-label", t("标签、导航与简短说明。", "Labels, navigation and short descriptions.")],
    ["caption", "12", "--fs-caption", t("辅助说明、日期与图注。", "Supporting text, dates and captions.")],
  ].map(([id, px, token, usage]): Rule => ({
    id,
    example: <span className={styles.sizeSample} style={{ "--sample-size": `var(${token})` } as CSSProperties}>{sizeNames[id]} {px}</span>,
    value: value(`${px}px`, token), usage,
  }));
  const leading: Rule[] = [
    { id: "regular", example: <p className={styles.leadingSample} style={{ lineHeight: 1.65 }}>{t("将信息组织成清晰的层次，让内容更容易阅读。", "Clear structure helps readers follow the content.")}</p>, value: "1.65", usage: t("常规内容段落的常用行高。", "Common line height for regular content paragraphs.") },
    { id: "long", example: <p className={styles.leadingSample} style={{ lineHeight: 1.85 }}>{t("将信息组织成清晰的层次，让内容更容易阅读。", "Clear structure helps readers follow the content.")}</p>, value: "1.85", usage: t("连续长文与解释性内容的常用行高。", "Common line height for extended reading and explanatory text.") },
  ];
  const colors = [
    ["primary", "--text-primary", "rgb(0 0 0 / 90%)", t("主文字", "Primary text"), t("标题与需要突出表达的文字。", "Headings and prominent text.")],
    ["secondary", "--text-secondary", "rgb(0 0 0 / 60%)", t("次文字", "Secondary text"), t("一般说明与次级信息。", "Descriptions and secondary information.")],
    ["muted", "--text-muted", "rgb(0 0 0 / 40%)", t("弱文字", "Muted text"), t("日期、元信息及弱化说明。", "Dates, metadata and subdued supporting text.")],
  ].map(([id, token, color, name, usage]): Rule => ({
    id, example: <span className={styles.colorExample}><span className={styles.swatch} style={{ background: `var(${token})` }} aria-hidden="true" /><span style={{ color: `var(${token})` }}>{name}<span className={styles.sampleLine}>{t("清晰的信息层次", "A clear hierarchy")}</span></span></span>,
    value: value(color, token), usage,
  }));
  colors.push(
    { id: "background", example: <span className={styles.colorExample}><span className={styles.swatch} style={{ background: "#fff" }} aria-hidden="true" /><span>{t("页面背景", "Page background")}</span></span>, value: "#fff", usage: t("默认页面底色。", "Default page background.") },
    { id: "border", example: <span className={styles.colorExample}><span className={styles.swatch} style={{ background: "var(--border)" }} aria-hidden="true" /><span className={styles.borderExample}>{t("分隔线", "Divider")}</span></span>, value: value("#eee", "--border"), usage: t("基础边框与分隔线；项目可覆盖。", "Base borders and dividers; project overrides may apply.") },
  );
  const layout: Rule[] = [
    { id: "gutter", example: t("基础横向留白", "Base horizontal gutter"), value: value("30px", "--page-gutter"), usage: t("主站默认值；首页部分断点改为 32px，项目页面单独定义。", "Main-site default; the home page uses 32px at some breakpoints. Project gutters vary.") },
    { id: "case", example: t("共享案例布局", "Shared case layout"), value: "1080px", usage: t("案例外层最大宽度，宽屏为导航＋正文；≤768px 隐藏侧导航。", "Maximum outer width, with navigation beside content; side navigation hides at 768px and below.") },
    { id: "section", example: t("共享案例内容区", "Shared case section"), value: "840px", usage: t("使用共用案例 section 的内容宽度上限；不是所有媒体的宽度。", "Maximum width for shared case sections, not all media.") },
  ];
  const navigation: Rule[] = [
    { id: "header", example: <span className={styles.monoSample}>work / about</span>, value: "14px · 400", usage: t("全站顶部英文导航；默认次文字色，悬停与当前页面使用主文字色。", "Site-wide Latin navigation; secondary text by default, primary on hover and the active page.") },
    { id: "locale", example: <span className={styles.monoSample}>en / 中</span>, value: "12px · 400", usage: t("顶部语言切换，使用弱文字色。", "Header locale switch, using muted text.") },
    { id: "caseNav", example: t("案例章节导航", "Case section navigation"), value: "16px · 400", usage: t("共享案例侧导航，行高 1.5，项目间距 16px；当前章节与悬停加深文字颜色。", "Shared case navigation: 1.5 line height, 16px item gap; active and hovered items use darker text.") },
  ];
  const sections = [["typography", t("文字", "Typography")], ["colors", t("色彩", "Colors")], ["layout", t("布局", "Layout")], ["shape", t("形状", "Shape")], ["navigation", t("导航", "Navigation")]];

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>VISUAL GUIDELINES</p>
        <h1>{t("网站视觉规范", "Website visual guidelines")}</h1>
        <p className={styles.description}>{t("网站共用的视觉基础与内容样式。", "Shared visual foundations and content styles for this website.")}</p>
      </header>
      <div className={styles.layout}>
        <nav className={styles.sectionNav} aria-label={t("规范目录", "Guideline sections")}>
          {sections.map(([id, name]) => <a key={id} href={`#${id}`}>{name}</a>)}
        </nav>
        <div className={styles.content}>
          <section className={styles.section} aria-labelledby="typography">
            <h2 id="typography">{t("文字", "Typography")}</h2>
            <h3>{t("字体", "Font families")}</h3>
            <RuleTable rows={fonts} labels={labels} caption={t("字体分工", "Font families and usage")} />
            <h3>{t("字重", "Font weight")}</h3>
            <RuleTable rows={weights} labels={labels} caption={t("字重规范", "Font weights")} />
            <h3 id="heading-sizes" className={styles.typeHeading}>{t("基础字号", "Base type scale")}</h3>
            <RuleTable rows={sizes} labels={labels} caption={t("基础字号", "Base type scale")} className={styles.typeTable} />
            <p className={styles.note}>{t("字号按内容用途选择，不与 h1–h6 一一绑定。首页展示文字、项目自定义标题与中间字号保留各自定义。", "Choose sizes by content role, not heading level alone. Homepage display text and project-specific sizes retain their own definitions.")}</p>
            <h3>{t("阅读行高", "Reading line height")}</h3>
            <RuleTable rows={leading} labels={labels} caption={t("常用阅读行高", "Common reading line heights")} />
            <p className={styles.note}>{t("行高按内容情境选择。全局默认 1.5；关于页中文正文使用 1.9，其他局部值保留。", "Line height depends on context. The global default is 1.5; Chinese About text uses 1.9. Other local values remain in use.")}</p>
          </section>
          <section className={styles.section} aria-labelledby="colors">
            <h2 id="colors">{t("色彩", "Colors")}</h2>
            <RuleTable rows={colors} labels={labels} caption={t("基础色彩", "Base colors")} />
            <p className={styles.note}>{t("这三档是文字的基础色阶，项目中已有局部色值与透明度覆盖。主题蓝、橙色及项目背景分别定义。", "These are the base text tiers; project-specific colors and opacity overrides remain. Accent colors and project surfaces are defined separately.")}</p>
          </section>
          <section className={styles.section} aria-labelledby="layout">
            <h2 id="layout">{t("布局", "Layout")}</h2>
            <RuleTable rows={layout} labels={labels} caption={t("共用布局", "Shared layout rules")} />
            <p className={styles.note}>{t("宽度均为上限，窄屏随可用空间收缩。不同内容类型使用不同容器，不设单一的全站正文宽度。", "Widths are maximums and shrink with the viewport. Different content types use different containers.")}</p>
          </section>
          <section className={styles.section} aria-labelledby="shape">
            <h2 id="shape">{t("形状", "Shape")}</h2>
            <RuleTable rows={[{ id: "pill", example: <span className={styles.pill}>{t("标签", "Label")}</span>, value: "999px", usage: t("标签、分类与胶囊形控件的常用圆角；内边距和高度按组件定义。", "Common radius for tags, filters and pill-shaped controls; padding and height depend on the component.") }]} labels={labels} caption={t("胶囊形状", "Pill shape")} />
            <p className={styles.note}>{t("卡片与媒体外框有多种圆角，不统一为一个数值。", "Cards and media frames use different radii, rather than one universal value.")}</p>
          </section>
          <section className={styles.section} aria-labelledby="navigation">
            <h2 id="navigation">{t("导航", "Navigation")}</h2>
            <RuleTable rows={navigation} labels={labels} caption={t("共享导航样式", "Shared navigation styles")} />
          </section>
        </div>
      </div>
    </main>
  );
}
