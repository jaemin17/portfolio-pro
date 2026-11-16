import { SiteHeader } from "@/components/SiteHeader";
import { SectionNav } from "@/components/SectionNav";
import type { Metadata } from "next";
import { CaseDesignList } from "@/components/CaseDesignList";
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
    { id: "regular", example: <p className={styles.leadingSample} style={{ lineHeight: 1.65 }}>{t("将信息组织成清晰的层次，让内容更容易阅读。", "Clear structure helps readers follow the content.")}</p>, value: "1.65", usage: t("案例正文区域的简介、短说明与普通阅读列表。", "Introductions, short descriptions, and ordinary reading lists within case content.") },
    { id: "long", example: <p className={styles.leadingSample} style={{ lineHeight: 1.85 }}>{t("将信息组织成清晰的层次，让内容更容易阅读。", "Clear structure helps readers follow the content.")}</p>, value: "1.85", usage: t("案例正文区域的连续叙述、背景与反思长文。", "Continuous narrative, background, and reflection prose within case content.") },
  ];
  const colors = [
    ["primary", "--text-primary", "rgb(0 0 0 / 90%)", t("主文字", "Primary text"), t("标题与需要突出表达的文字。", "Headings and prominent text.")],
    ["secondary", "--text-secondary", "rgb(0 0 0 / 60%)", t("次文字", "Secondary text"), t("案例普通阅读正文、一般说明、次级信息与普通辅助图注。", "Regular case-study body text, descriptions, secondary information and supporting captions.")],
    ["muted", "--text-muted", "rgb(0 0 0 / 40%)", t("弱文字", "Muted text"), t("日期、弱元信息与非关键短标注。", "Dates, subdued metadata and nonessential short labels.")],
  ].map(([id, token, color, name, usage]): Rule => ({
    id, example: <span className={styles.colorExample}><span className={styles.swatch} style={{ background: `var(${token})` }} aria-hidden="true" /><span style={{ color: `var(${token})` }}>{name}</span></span>,
    value: value(color, token), usage,
  }));
  colors.push(
    { id: "background", example: <span className={styles.colorExample}><span className={styles.swatch} style={{ background: "#fff" }} aria-hidden="true" /><span>{t("页面背景", "Page background")}</span></span>, value: "#fff", usage: t("默认页面底色。", "Default page background.") },
    { id: "border", example: <span className={styles.colorExample}><span className={styles.swatch} style={{ background: "var(--border)" }} aria-hidden="true" /><span>{t("分隔线", "Divider")}</span></span>, value: value("#eee", "--border"), usage: t("基础边框与分隔线；项目可覆盖。", "Base borders and dividers; project overrides may apply.") },
  );
  const layout: Rule[] = [
    { id: "projectCover", example: t("首页作品卡片封面", "Home project card covers"), value: "3:2", usage: t("封面容器统一比例，让同排卡片的文字起点一致；完整界面与较高素材缩放适配，案例页媒体保留各自比例。", "A shared cover ratio aligns captions within each row. Complete interfaces and taller artwork scale to fit; case-study media keep their own ratios.") },
    { id: "designListSpacing", example: t("设计说明列表条目间距", "Design explanation list items"), value: "8px", usage: t("案例普通设计说明列表的相邻条目空隙；反思长条目、提示区、导航和媒体列表另行定义。", "Extra gap between ordinary design explanation list items in cases; long reflection items, callouts, navigation and media lists have separate rules.") },
    { id: "paragraphSpacing", example: t("连续正文段落间距", "Consecutive body paragraphs"), value: "20px", usage: t("案例同一区块内相邻普通连续正文之间的距离；首尾留白、标题、列表和提示区另行定义。", "Gap between adjacent ordinary prose paragraphs within one case content block; outer spacing, headings, lists and callouts have separate rules.") },
    { id: "gutter", example: t("基础横向留白", "Base horizontal gutter"), value: value("30px", "--page-gutter"), usage: t("主站默认值；首页部分断点改为 32px，项目页面单独定义。", "Main-site default; the home page uses 32px at some breakpoints. Project gutters vary.") },
    { id: "case", example: t("共享案例布局", "Shared case layout"), value: "1080px", usage: t("案例外层最大宽度，宽屏为导航＋正文；≤768px 隐藏侧导航。", "Maximum outer width, with navigation beside content; side navigation hides at 768px and below.") },
    { id: "section", example: t("共享案例内容区", "Shared case section"), value: "840px", usage: t("使用共用案例 section 的内容宽度上限；不是所有媒体的宽度。", "Maximum width for shared case sections, not all media.") },
    { id: "caseSpacing", example: t("共享案例章节间距", "Shared case section spacing"), value: "40px", usage: t("共用内容区的下外边距；引导区、长文分节与其他专用区域保留各自间距。", "Bottom margin of shared case sections; introductions, long-form subsections and other dedicated regions keep their own spacing.") },
  ];
  const controls: Rule[] = [
    { id: "label", example: <span className={styles.pill}>{t("标签", "Label")}</span>, value: t("内容标记", "Content label"), usage: t("标记类别或属性，不承担切换与跳转。字号、内边距按所用标签组件定义。", "Identifies a category or attribute without switching content or navigating. Type and padding follow the label component.") },
    { id: "filter", example: t("分类筛选", "Category filter"), value: t("14px · 400 · 全圆角", "14px · 400 · Fully rounded"), usage: t("首页筛选控件。默认次文字色；悬停主文字色；选中为主文字色底、白字。键盘焦点1px主文字色描边、偏移4px。", "Homepage filter. Secondary text by default, primary on hover; selected uses a primary background and white text. Keyboard focus: 1px primary outline, 4px offset.") },
    { id: "more", example: t("更多项目", "More projects"), value: t("14px · 400 · 全圆角", "14px · 400 · Fully rounded"), usage: t("展开项目的按钮。默认次文字色与基础边框；悬停文字加深、边框改为18%黑。键盘焦点1px主文字色描边、偏移4px。", "Expands projects. Secondary text and base border by default; hover uses primary text and an 18% black border. Keyboard focus: 1px primary outline, 4px offset.") },
    { id: "link", example: t("普通链接", "Text link"), value: t("继承文字样式", "Inherits text style"), usage: t("用于打开页面、章节或外部目标。基础样式不加下划线；主题色、悬停和焦点按具体组件定义。", "Opens a page, section or external destination. No underline by default; theme colors, hover and focus follow the component.") },
  ];
  const siteNavigation: Rule[] = [
    { id: "header", example: <span className={styles.monoSample}>work / about</span>, value: "14px · 400", usage: t("全站顶部英文导航；默认次文字色，悬停与当前页面使用主文字色。", "Site-wide Latin navigation; secondary text by default, primary on hover and the active page.") },
    { id: "locale", example: <span className={styles.monoSample}>en / 中</span>, value: "12px · 400", usage: t("顶部语言切换，默认弱文字色，悬停次文字色。", "Header locale switch: muted text by default, secondary on hover.") },
  ];
  const sections = [["typography", t("文字", "Typography")], ["colors", t("色彩", "Colors")], ["layout", t("布局", "Layout")], ["components", t("组件", "Components")], ["shape", t("形状", "Shape")]].map(([id, label]) => ({ id, label }));

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <h1>{t("网站视觉规范", "Website visual guidelines")}</h1>
      </header>
      <div className={styles.layout}>
        <SectionNav sections={sections} ariaLabel={t("规范目录", "Guideline sections")} className={styles.sectionNav} layout="responsive" />
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
            <p className={styles.note}>{t("正文用于连续阅读，说明补充标题、操作或媒体，图注依附媒体，日期与元信息描述属性。字号和灰度分别选择；普通辅助图注、日期默认12px，媒体内标题、重点标注和正文说明按各自角色定义。", "Body text supports continuous reading; descriptions support a heading, action or media; captions accompany media; dates and metadata describe attributes. Size and color are separate choices. Regular supporting captions and dates default to 12px; media headings, emphasis and body descriptions follow their own roles.")}</p>
            <h3>{t("阅读行高", "Reading line height")}</h3>
            <RuleTable rows={leading} labels={labels} caption={t("常用阅读行高", "Common reading line heights")} />
            <p className={styles.note}>{t("案例阅读正文按用途使用两档行高，不按屏宽行数判断。首屏展示、标题、图注、观点提示与媒体文字保留各自定义；关于页保持现状。全局默认1.5，段落间距另行定义。", "Use these two modes by role within case reading content, regardless of viewport line count. Hero copy, headings, captions, callouts, and media text retain their own rules, as does About. Global default: 1.5; paragraph spacing is separate.")}</p>
          </section>
          <section className={styles.section} aria-labelledby="colors">
            <h2 id="colors">{t("色彩", "Colors")}</h2>
            <RuleTable rows={colors} labels={labels} caption={t("基础色彩", "Base colors")} />
            <p className={styles.note}>{t("案例普通阅读正文、设计叙述和阅读列表统一使用次文字色60%，不叠加整段透明度；中英文和不同屏宽保持一致。标题、重点、主题标签、观点提示与媒体内部文字保留各自层级；关于页保留既有灰度。", "Regular case-study prose and reading lists use 60% secondary text without paragraph opacity, consistently across languages and viewports. Headings, emphasis, theme labels, callouts and text inside media retain their own hierarchy. About keeps its existing text colors.")}</p>
            <p className={styles.note}>{t("白底或浅色面板下的普通辅助图注统一使用次文字色60%，不随项目改变灰色。图注中的标题、主题强调和深色媒体中的白字保留各自层级；40%弱文字不是普通图注的默认色。", "Regular supporting captions on white or light surfaces use 60% secondary text across projects. Caption headings, theme accents and white text within dark media retain their own hierarchy. 40% muted text is not the default caption color.")}</p>
            <p className={styles.note}>{t("反思长文正文组件：普通段落使用次文字色60%，重点词使用主文字色90%，不叠加整段透明度；中英文和不同屏宽保持一致。观点提示与结语保留独立层级，不将此规则自动套用到其他页面。", "Reflection body component: regular paragraphs use 60% secondary text and emphasis uses 90% primary text, without paragraph opacity. Colors stay consistent across languages and viewport widths. Callouts and conclusions retain their own hierarchy; other pages are outside this rule’s scope.")}</p>
          </section>
          <section className={styles.section} aria-labelledby="layout">
            <h2 id="layout">{t("布局", "Layout")}</h2>
            <RuleTable rows={layout} labels={labels} caption={t("共用布局", "Shared layout rules")} />
            <p className={styles.note}>{t("宽度均为上限，窄屏随可用空间收缩。不同内容类型使用不同容器，不设单一的全站正文宽度。", "Widths are maximums and shrink with the viewport. Different content types use different containers.")}</p>
            <p className={styles.note}>{t("章节、标题到说明、段落、列表条目与容器内边距按用途分别处理，沿用对应组件。不预设全站4px/8px网格；本规范页的纸张、表格和色块尺寸只用于展示。", "Section spacing, title-to-description spacing, paragraphs, list items and container padding follow their own component roles. There is no site-wide 4px/8px grid. This guide’s paper, table and swatch dimensions are presentation-only.")}</p>
          </section>
          <section className={styles.section} aria-labelledby="components">
            <h2 id="components">{t("组件", "Components")}</h2>
            <h3 id="design-list-example">{t("设计说明列表", "Design explanation list")}</h3>
            <div className={styles.componentPreview}>
              <CaseDesignList>
                <li>{t("让主要内容更容易识别", "Make the main content easy to identify")}</li>
                <li>{t("将相关操作放在一起", "Keep related actions together")}</li>
                <li>{t("在需要时提供清晰反馈", "Provide clear feedback when it is needed")}</li>
              </CaseDesignList>
            </div>
            <p className={styles.note}>{t("普通设计说明列表：16px、400、60%文字色、1.65行高，相邻条目间距8px。项目的小标题、主题色、圆点与已定义的手机字号保留各自用途。", "Ordinary design explanation list: 16px, weight 400, 60% text, 1.65 line height and 8px between items. Project headings, accents, markers and established mobile type sizes retain their own roles.")}</p>
            <h3 id="section-nav-example">{t("章节目录", "Section navigation")}</h3>
            <div className={styles.componentPreview}>
              <SectionNav sections={sections} ariaLabel={t("章节目录示例", "Section navigation example")} preview />
            </div>
            <p className={styles.note}>{t("16px、400、1.5行高；默认条目间距16px。示例支持悬停和点击切换选中状态，不跳转页面。实际目录支持章节跳转与滚动跟随；规范目录窄屏移到顶部横向换行，案例侧目录窄屏隐藏。", "16px, weight 400, 1.5 line height and a default 16px item gap. Hover and click to change the example’s selected item without navigating. Live menus support section links and scroll tracking. The guide menu wraps across the top on narrow screens; case side menus hide.")}</p>
            <p className={styles.note}>{t("当前与悬停使用#333；键盘焦点为2px #93c5fd描边、偏移4px。规范宽屏保留20px条目间距，实际位置与窄屏显示按页面用途定义。", "Current and hovered items use #333. Keyboard focus uses a 2px #93c5fd outline with a 4px offset. The wide guide keeps a 20px item gap; position and narrow-screen visibility follow each page’s role.")}</p>
            <h3 id="site-nav-example">{t("站点导航", "Site navigation")}</h3>
            <div className={styles.componentPreview}>
              <SiteHeader locale={locale} preview />
            </div>
            <p className={styles.note}>{t("顶部菜单与语言切换一起展示。示例可悬停和点击预览，不离开当前页面。", "The top menu and language switch are shown together. Hover and click to preview without leaving this page.")}</p>
            <RuleTable rows={siteNavigation} labels={labels} caption={t("站点导航规则", "Site navigation rules")} />
          </section>
          <section className={styles.section} aria-labelledby="shape">
            <h2 id="shape">{t("形状", "Shape")}</h2>
            <RuleTable rows={[{ id: "pill", example: <span className={styles.pill}>{t("标签", "Label")}</span>, value: t("全圆角", "Fully rounded"), usage: t("标签、分类与胶囊形控件的常用圆角；内边距和高度按组件定义。", "Common radius for tags, filters and pill-shaped controls; padding and height depend on the component.") }]} labels={labels} caption={t("胶囊形状", "Pill shape")} />
            <p className={styles.note}>{t("卡片与媒体外框有多种圆角，不统一为一个数值。", "Cards and media frames use different radii, rather than one universal value.")}</p>
            <h3>{t("标签、按钮与链接", "Labels, buttons and links")}</h3>
            <RuleTable rows={controls} labels={labels} caption={t("现有控件的用途与状态", "Existing control roles and states")} />
            <p className={styles.note}>{t("分类与更多按钮的最小高度40px，内边距8.8px 18px；这是这些控件的现有尺寸，不是所有按钮的标准。作品与工具卡片的20px外圆角不约束内部媒体、设备外框或提示区。", "Filters and the More button have a 40px minimum height and 8.8px 18px padding. These values are scoped to those controls. The 20px outer radius of project and tool cards does not govern internal media, device frames or callouts.")}</p>
            <p className={styles.note}>{t("交互色表示操作或当前状态，项目主题色服务项目表达；相近色号不自动合并，也不直接变成全站按钮颜色。", "Interaction colors indicate actions or current state; project colors support project expression. Similar shades are not automatically merged or applied to every button.")}</p>
          </section>

        </div>
      </div>
    </main>
  );
}
