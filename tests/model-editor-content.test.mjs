import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const styles = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/modelEditor.module.css", import.meta.url),
  "utf8",
);

const carouselStyles = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/FinalLayoutCarousel.module.css", import.meta.url),
  "utf8",
);

const carouselComponent = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/FinalLayoutCarousel.tsx", import.meta.url),
  "utf8",
);

const themeComparisonSlider = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/ThemeComparisonSlider.tsx", import.meta.url),
  "utf8",
).catch(() => "");

const layoutExplorationSwitcher = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/LayoutExplorationSwitcher.tsx", import.meta.url),
  "utf8",
).catch(() => "");

const page = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/page.tsx", import.meta.url),
  "utf8",
);

const searchableStyles = styles.replace(/\s+/g, "");
const searchableCarouselStyles = carouselStyles.replace(/\s+/g, "");
const captionTagStyles = searchableCarouselStyles.match(/\.captionTag\{[^}]+\}/)?.[0] ?? "";
const mobileStyles = searchableStyles.match(/@media\(max-width:768px\)\{([\s\S]*)\}/)?.[1] ?? "";

assert.ok(
  mobileStyles.includes(".directionCards{grid-template-columns:1fr;"),
  "Direction cards should switch to one column on small screens",
);

assert.ok(
  mobileStyles.includes(".directionCard{align-items:flex-start;"),
  "Direction cards should align content from the left on small screens",
);

assert.ok(
  mobileStyles.includes(".directionCardp{width:auto;text-align:left;"),
  "Direction card body text should use available width on small screens",
);

assert.ok(
  !page.includes("模型预览面积增加") && !page.includes("The model preview area is larger"),
  "Model editor layout diagram should not include a separate preview area sentence",
);

assert.ok(
  page.includes("调整前:面板环绕，预览受挤压") &&
    page.includes("Before: Panels surround the model, preview is squeezed"),
  "Model editor before caption should use one-line before wording",
);

assert.ok(
  page.includes("调整后: 预览面积增加,分区更清晰") &&
    page.includes("After: Larger preview area, clearer tool zones"),
  "Model editor after caption should use one-line after wording",
);

assert.ok(
  carouselComponent.includes("splitCaptionLabel"),
  "Final layout carousel should split colon captions into a tag and summary",
);

assert.ok(
  searchableCarouselStyles.includes(".captionTag{display:inline-flex;") &&
    searchableCarouselStyles.includes(".captionSummary{display:inline;"),
  "Final layout carousel should style split caption labels as inline tags",
);

assert.ok(
  captionTagStyles.includes("background:transparent;") &&
    captionTagStyles.includes("font-weight:300;"),
  "Final layout carousel caption tag should use a transparent background and lighter text weight",
);

assert.ok(
  !page.includes('description: tStr(locale, "面板环绕，预览受挤压"') &&
    !page.includes('description: tStr(locale, "工具分区更清晰"'),
  "Model editor before/after captions should not use secondary description text",
);

assert.ok(
  page.includes("<ThemeComparisonSlider") && page.includes("themeCompare"),
  "Model editor visual load section should render the theme comparison as an interactive slider",
);

assert.ok(
  themeComparisonSlider.includes('"use client"') &&
    themeComparisonSlider.includes('type="range"') &&
    themeComparisonSlider.includes("comparisonBefore") &&
    themeComparisonSlider.includes("comparisonAfter"),
  "Theme comparison slider should be a client component with a range input and before/after layers",
);

assert.ok(
    page.includes("布局方案探索") &&
    page.includes("围绕空间、层级和面板负担做多方向测试") &&
    page.includes(
      "并行测试让我发现：顶部入口会持续占用预览高度，也容易让工具层级混在一起，因此后续开始尝试把全局入口转移到侧边。",
    ) &&
    page.includes("Early layout explorations") &&
    page.includes("<LayoutExplorationSwitcher"),
  "Model editor should include a focused layout exploration switcher",
);

assert.ok(
  page.indexOf("设计目标") < page.indexOf("布局方案探索") &&
    page.indexOf("布局方案探索") < page.indexOf("关键设计 01"),
  "Layout exploration should appear after design goals and before Key Design 01",
);

assert.ok(
  !page.includes("前期方案尝试") && !page.includes("从多方向尝试中提炼布局判断"),
  "Layout exploration should be positioned as an independent process section, not a subsection under Key Design 01",
);

assert.ok(
  !page.includes("并行比较不同布局取舍"),
  "Layout exploration title should avoid the older comparison-heavy wording",
);

assert.ok(
  layoutExplorationSwitcher.includes('"use client"') &&
    layoutExplorationSwitcher.includes("useState") &&
    layoutExplorationSwitcher.includes("layoutExplorationStage") &&
    layoutExplorationSwitcher.includes("layoutExplorationTabs"),
  "Layout exploration switcher should be an interactive client component with a large stage and tabs",
);

assert.ok(
  !page.includes("styles.layoutExplorationGrid"),
  "Layout exploration should no longer render all four screenshots in a small grid",
);

for (const explorationLabel of [
  "旧方案",
  "方案2 去掉顶部",
  "方案3 全部放在顶部",
  "方案4 顶部按钮组",
  "方案5 侧边分类测试",
]) {
  assert.ok(
    page.includes(explorationLabel),
    `Layout exploration module should include the zh direction: ${explorationLabel}`,
  );
}

for (const misleadingSequenceText of [
  "最终收敛",
  "先后顺序",
  "Converged:",
  "排除错误路径后收敛",
  "after ruling paths out",
  "模型、面板和实时工具的边界更清楚",
  "更适合持续编辑",
  "final solution",
  "chosen solution",
  "String(index + 1).padStart",
  "我把这些方案作为并行测试，用来观察模型空间、操作层级和面板负担之间的取舍。",
  "这些方案都在不同程度上保留了顶部工具栏。",
]) {
  assert.ok(
    !page.includes(misleadingSequenceText),
    `Layout exploration module should not imply a final ordered sequence: ${misleadingSequenceText}`,
  );
}

for (const explorationAsset of [
  "layoutExploreLegacy",
  "layoutExploreNoTop",
  "layoutExploreTopHeavy",
  "layoutExploreButtonGroup",
  "layoutExploreSideTopNav",
]) {
  assert.ok(
    page.includes(`modelEditorAssets.${explorationAsset}`),
    `Layout exploration module should use asset ${explorationAsset}`,
  );
}

for (const oldExplorationAsset of [
  "layoutExploreOriginal",
  "layoutExploreEnlarged",
  "layoutExploreConverged",
]) {
  assert.ok(
    !page.includes(`modelEditorAssets.${oldExplorationAsset}`),
    `Layout exploration module should use the complete replacement screenshot set instead of ${oldExplorationAsset}`,
  );
}

assert.ok(
  searchableStyles.includes(".layoutExplorationImageFrame{aspect-ratio:16/9;"),
  "Layout exploration screenshots should use a consistent 16:9 frame",
);

assert.ok(
  searchableStyles.includes(".layoutExplorationImageFrame{aspect-ratio:16/9;background:#eef2f5;overflow:hidden;padding:8px;box-sizing:border-box;"),
  "Layout exploration screenshots should sit inside a lightly padded thumbnail frame",
);

assert.ok(
  searchableStyles.includes(".layoutExplorationImageFrameimg{width:100%;height:100%;display:block;object-fit:contain;"),
  "Layout exploration screenshots should show the full UI instead of cropping it",
);

for (const removedLabel of ["调整结果", "Design Results", "编辑对象更明确", "高频路径更短", "空间对比"]) {
  assert.ok(
    !page.includes(removedLabel),
    `Model editor layout comparison should not include ${removedLabel}`,
  );
}

assert.ok(
  !page.includes("早期原型：面板环绕，预览受挤压"),
  "Model editor before caption should not use the long early prototype wording",
);

for (const secondaryText of [
  "模型成为主要观察对象",
  "工具、部件和参数关系更清楚",
  "常用入口固定，不必反复寻找",
  "内容面板、浮动工具和全局动作各自归位",
]) {
  assert.ok(
    !page.includes(secondaryText),
    `Model editor design results should not include secondary text: ${secondaryText}`,
  );
}

console.log("Model editor content expectations passed");
