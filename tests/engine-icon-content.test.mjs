import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const copy = await readFile(
  new URL("../src/i18n/copy.ts", import.meta.url),
  "utf8",
);
const page = await readFile(
  new URL("../src/app/[locale]/projects/engine-icon/page.tsx", import.meta.url),
  "utf8",
);
const styles = await readFile(
  new URL("../src/app/[locale]/projects/engine-icon/engineIcon.module.css", import.meta.url),
  "utf8",
);

const searchableCopy = copy.replace(/\s+/g, "");
const searchablePage = page.replace(/\s+/g, "");
const searchableStyles = styles.replace(/\s+/g, "");

assert.ok(
  searchableCopy.includes('title:"3DEngineAppIconDesign"') &&
    searchableCopy.includes('href:"/projects/engine-icon"'),
  "Vector to 3D home card should become a specific engine icon detail link",
);

for (const required of [
  "3D应用图标设计",
  "为VR实训软件设计统一风格的3D图标",
  "观察参考模型",
  "简化模型",
  "最终优化",
  "项目目标",
  "这套VR软件面向纯电动汽车拆装教学",
  "入口图标需要快速、准确地说明软件在教什么",
  "直接缩小几乎没有辨识度",
  "需要把模型转译成专门的应用图标",
  "ThisVRsoftwareteachesEVassemblyanddisassembly",
  "Themostfittingreferenceisakeytrainingmodel",
  "translatedintoadedicatedappicon",
  "更多3D图标",
  "同一套图标语言可以延展到不同设备、能源和实训模块",
  "2024",
  "3D图标&视觉设计",
  "辨认主体模块",
  "圆柱壳体、侧边管线、底座",
  "再画平面转3D",
  "第一次已经去掉大部分细节",
  "缩小后结构还是偏密",
  "通体同色也让块面更难分开",
  "减少细节、强化体块和色彩对比",
  "3DAppIconDesign",
  "Designingaconsistent3DiconstyleforVRtrainingsimulationsoftware",
  "Observethereferencemodel",
  "Simplifythemodel",
  "Finaloptimization",
  "Projectgoal",
  "More3Dicons",
  "3DIcon&VisualDesign",
]) {
  assert.ok(searchablePage.includes(required), `Missing engine icon narrative: ${required}`);
}

const headingBlock = page.match(/<h1[\s\S]*?<\/h1>/)?.[0] ?? "";
assert.ok(
  !headingBlock.includes("<br />"),
  "Engine icon title should stay on one line instead of forcing a line break",
);

assert.ok(
  page.indexOf("styles.heroProcessFigure") < page.indexOf("styles.contextSection") &&
    page.indexOf("styles.contextSection") < page.indexOf("styles.imageStack") &&
    page.indexOf("styles.imageStack") < page.indexOf("styles.moreIconSection"),
  "Engine icon page should lead with process proof, then context, process, and more 3D icons",
);

assert.ok(
  page.indexOf("selflyStyles.headerCta") < page.indexOf("styles.heroProcessFigure") &&
    page.indexOf("styles.heroProcessFigure") < page.indexOf("</header>"),
  "Top process image should sit in the shared project hero CTA area so its title spacing matches other project pages",
);

assert.ok(
  !searchableStyles.includes(".heroProcessFigure{padding-top:"),
  "Top process image should not add standalone padding above the shared hero CTA spacing",
);

assert.ok(
  searchableStyles.includes(".heroProcessImageFrame{") &&
    searchableStyles.includes("border:3pxsolid#93c5fd;") &&
    searchableStyles.includes("border-radius:22px;") &&
    searchableStyles.includes(".heroProcessImageFramevideo{"),
  "Top process video should use the same framed hero treatment as other project pages",
);

assert.ok(
  searchableStyles.includes(".heroProcessFigure,.contextSection,.imageStack,.moreIconSection{width:min(100%-60px,940px);") &&
    !searchableStyles.includes("max-width:620px;"),
  "Project goal copy should use the same 940px content width as the rest of the page",
);

assert.ok(
  searchablePage.includes("styles.heroProcessMeta") &&
    searchableStyles.includes(".heroProcessMeta{justify-content:center;") &&
    !searchableStyles.includes(".heroProcessFigurefigcaption{") &&
    !searchablePage.includes("从矢量结构到3D图标的生成过程") &&
    !searchablePage.includes("Fromvectorstructureto3Diconrendering"),
  "Top process image should keep centered metadata and drop the figure caption",
);

for (const removed of [
  "应用图标/3D视觉",
  "AppIcon/3DVisual",
  "设计问题",
  "DesignProblem",
  "过程拆解",
  "ProcessBreakdown",
  "应用验证",
  "ApplicationCheck",
  "模型足够真实，但图标需要先被识别",
  "早期渲染尝试",
  "Earlyrenderingtest",
  "不是单独重新定义图标风格",
  "Thiswasnotastandaloneiconstyle",
  "styles.noteSection",
  "styles.noteGrid",
  "styles.noteCard",
  "观察识别点",
  "拆成基础形状",
  "统一系列风格",
  "保留顶部圆盖、主体比例、侧边机体和管线这些主要识别点",
  "把复杂机械细节压缩成圆柱、环形、凸台和几根线缆",
  "统一视角、厚度和高饱和材质",
  "发动机拆卸软件3D图标",
  "把复杂发动机模型简化成一枚可识别的软件入口图标",
  "项目背景",
]) {
  assert.ok(!searchablePage.includes(removed), `Engine icon page should stay lightweight without: ${removed}`);
}

assert.ok(
  !searchablePage.includes("styles.eyebrow") &&
    !searchableStyles.includes(".eyebrow"),
  "Engine icon page should not render a header eyebrow label",
);

for (const asset of [
  "/videos/visual/engine-icon/hero-process.mp4",
  "/images/visual/engine-icon/source-model.webp",
  "/images/visual/engine-icon/icon-family.webp",
  "/images/visual/engine-icon/render-test-light.webp",
  "/images/visual/engine-icon/render-test-simplified.webp",
]) {
  assert.ok(searchablePage.includes(asset), `Missing engine icon asset: ${asset}`);
}

assert.ok(
  searchablePage.includes("<video") &&
    !searchablePage.includes("/images/visual/engine-icon/hero-process.webp"),
  "Top process still should stay on disk, but the hero should play the vector-to-3D video",
);

assert.ok(
  !searchablePage.includes("/images/visual/engine-icon/original-model.png"),
  "Engine icon page should use the black-background optimized source model instead of the old original-model PNG",
);

assert.ok(
  !searchablePage.includes("/images/visual/engine-icon/process-board.png") &&
    !searchablePage.includes("/images/visual/engine-icon/vector-to-3d-plugin.png") &&
    !searchablePage.includes("heroImageFrame") &&
    !searchablePage.includes("heroImage") &&
    !searchablePage.includes("styles.toolFigure") &&
    !searchableStyles.includes(".heroImageFrame") &&
    !searchableStyles.includes(".heroImage") &&
    !searchableStyles.includes(".toolFigure"),
  "Engine icon page should render the processed tool video as the top hero only",
);

assert.ok(
  !searchablePage.includes("/images/visual/engine-icon/icon-family.png"),
  "Engine icon page should use the optimized WebP icon family image, not the source PNG",
);

assert.ok(
  !searchableStyles.includes(".noteSection") &&
    !searchableStyles.includes(".noteGrid") &&
    !searchableStyles.includes(".noteCard") &&
    searchableStyles.includes(".imageStack{"),
  "Engine icon page should use image captions instead of a separate note grid",
);

assert.ok(
  searchablePage.includes("className={styles.sourceModelImage}") &&
    searchableStyles.includes(".sourceModelImage{background:#030303;"),
  "Original model process image should use a black background",
);

assert.ok(
  searchableStyles.includes(".imageStackfigcaptionstrong{") &&
    searchableStyles.includes("font-size:0.95rem;"),
  "Process image caption titles should be larger than body caption text",
);

const iterationGridBlock = page.match(/<div className=\{styles\.iterationGrid\}>[\s\S]*?<\/div>/)?.[0] ?? "";
const searchableIterationGrid = iterationGridBlock.replace(/\s+/g, "");

assert.ok(
  searchableIterationGrid.includes("/images/visual/engine-icon/source-model.webp") &&
    searchableIterationGrid.indexOf("/images/visual/engine-icon/source-model.webp") <
      searchableIterationGrid.indexOf("/images/visual/engine-icon/render-test-light.webp") &&
    searchableIterationGrid.indexOf("/images/visual/engine-icon/render-test-light.webp") <
      searchableIterationGrid.indexOf("/images/visual/engine-icon/render-test-simplified.webp"),
  "Original model should sit in the same iteration grid before the two rendering attempts",
);

assert.ok(
  searchableStyles.includes(".iterationGrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));"),
  "Iteration grid should render the original model and two rendering attempts as three columns",
);

for (const expectedCaption of [
  /<figcaption>[\s\S]*?<strong>\{t\(locale, "观察参考模型", "Observe the reference model"\)\}<\/strong>[\s\S]*?辨认主体模块/,
  /<figcaption>[\s\S]*?<strong>\{t\(locale, "简化模型", "Simplify the model"\)\}<\/strong>[\s\S]*?第一次已经去掉大部分细节/,
  /<figcaption>[\s\S]*?<strong>\{t\(locale, "最终优化", "Final optimization"\)\}<\/strong>[\s\S]*?减少细节、强化体块和色彩对比/,
]) {
  assert.ok(expectedCaption.test(page), `Missing expanded process image caption: ${expectedCaption}`);
}

assert.ok(
  !searchablePage.includes("返回作品集") &&
    !searchablePage.includes("Backtoportfolio") &&
    !searchablePage.includes("backLink") &&
    !searchableStyles.includes(".backLink"),
  "Engine icon page should not render a separate back-to-portfolio link",
);

assert.ok(
  !searchablePage.includes("/images/visual/vector-to-3d-icons.webp") &&
    !searchablePage.includes("最终图标视觉") &&
    !searchablePage.includes("Finaliconvisual") &&
    !searchablePage.includes("finalFrame") &&
    !searchableStyles.includes(".finalFrame"),
  "Engine icon page should not render the final Vector to 3D showcase image",
);

console.log("Engine icon content expectations passed");
