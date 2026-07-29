import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const page = await readFile(
  new URL("../src/app/[locale]/projects/vr-education/page.tsx", import.meta.url),
  "utf8",
);
const backgroundTransferSwitcher = await readFile(
  new URL(
    "../src/app/[locale]/projects/vr-education/BackgroundTransferSwitcher.tsx",
    import.meta.url,
  ),
  "utf8",
);
const animalVrAssets = await readFile(
  new URL(
    "../src/app/[locale]/projects/biomedical-vr/animalVrAssets.ts",
    import.meta.url,
  ),
  "utf8",
);
const smartManufacturingAssets = await readFile(
  new URL(
    "../src/app/[locale]/projects/smart-manufacturing/smartManufacturingAssets.ts",
    import.meta.url,
  ),
  "utf8",
);
const biomedicalVrStyles = await readFile(
  new URL(
    "../src/app/[locale]/projects/biomedical-vr/biomedicalVr.module.css",
    import.meta.url,
  ),
  "utf8",
);
const searchablePage = `${page}\n${backgroundTransferSwitcher}\n${animalVrAssets}`.replace(/\s+/g, "");
const searchableSmartManufacturingAssets = smartManufacturingAssets.replace(/\s+/g, "");
const searchableBiomedicalVrStyles = biomedicalVrStyles.replace(/\s+/g, "");
const appIconScrollerStyle = searchableBiomedicalVrStyles.match(
  /\.appIconScroller\{[^}]+\}/,
)?.[0] ?? "";
const appIconStripStyle = searchableBiomedicalVrStyles.match(
  /\.appIconStrip\{[^}]+\}/,
)?.[0] ?? "";
const appIconTileStyle = searchableBiomedicalVrStyles.match(
  /\.appIconTile\{[^}]+\}/,
)?.[0] ?? "";
const appIconTileMobileStyle = searchableBiomedicalVrStyles.match(
  /@media\(max-width:640px\)\{[\s\S]*?\.appIconTile\{([^}]+)\}/,
)?.[1]?.replace(/\s+/g, "") ?? "";
const backgroundProcessImageNumberStyle = searchableBiomedicalVrStyles.match(
  /\.backgroundProcessImageNumber\{[^}]+\}/,
)?.[0] ?? "";
const appIconFeatureImageMatch = page.match(
  /className=\{styles\.appIconFeatureCard\}[\s\S]*?src=\{assetPath\("([^"]+)"\)\}/,
);
const appIconItemsBlock = page.match(/const appIconItems = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
const promptStrategyKickerMatch = page.match(
  /className=\{styles\.promptStrategyKicker\}[\s\S]*?\{t\(locale, "([^"]+)", "([^"]+)"\)\}/,
);

const requiredCopy = [
  "VR",
  "VR 实训软件",
  "界面系统设计",
  "项目需要在不同课程之间保持一致的操作体验",
  "设计挑战",
  "模型主位",
  "降低界面、背景和材质干扰",
  "学科辨识",
  "保持统一的操作和视觉规则",
  "信息分层",
  "把教学说明、模型观察和实操引导拆出层级",
  "设计策略",
  "从教学对象",
  "提取空间隐喻",
  "我把课程背景作为学科识别和模型展示的承托层",
  "从实训对象提取空间线索",
  "汽车传动结构对应隧道空间",
  "耳部结构则转译为耳蜗式弧形空间",
  "AI 关键词探索",
  "为 3D 模型建立低干扰展示空间",
  "我先从课程对象提取主题线索",
  "让背景既能指向具体课程",
  "an abstract 3d environment",
  "Empty space",
  "Sparse backgrounds",
  "Subdued minimalism",
  "Flattened perspective",
  "Flatness of space",
  "expansive spaces",
  "Stage-like environments",
  "Subtle color variations",
  "Realistic lighting",
  "Perspective rendering",
  "Frontal perspective",
  "抽象空间",
  "抽象 3D 环境",
  "模型展示",
  "舞台式环境",
  "低干扰背景",
  "克制的极简感",
  "视觉质感",
  "透视渲染",
  "主题线索",
  "耳蜗结构",
  "机械通道",
  "动物栖息空间",
  "注塑背景",
  "用模具空间建立工业设备联想",
  "injection-background.png",
  "机器人背景",
  "用产线空间建立机器人实训联想",
  "robot-background.png",
  "动物洞穴背景",
  "用洞穴空间建立动物栖息联想",
  "animal-cave-background.png",
  "工业空间背景",
  "用抽象厂房空间承接实训场景",
  "industrial-space-background.png",
  "课程背景的视觉转译流程",
  "空间抽象",
  "保留棚舍的纵深和轮廓",
  "低干扰处理",
  "统一青蓝色调，压低材质、对比和细节噪音",
  "界面验证",
  "确认模型、标题和入口信息仍然是视觉主位",
  "同一套背景方法，迁移到不同课程对象",
  "backgroundProcessNotesPanel",
  "backgroundProcessNotes",
  "backgroundProcessImageNumber",
  "BackgroundTransferSwitcher",
  "backgroundTransferDots",
  "backgroundTransferOverlay",
  "promptKeywordPills",
  "promptKeywordPill",
  "我将首页用于对象识别，子页面用于结构说明和操作反馈",
  "章节 03",
  "应用图标系统",
  "把课程对象转译成可快速识别的 3D 学习入口",
  "应用图标承担的不只是入口识别",
  "主体模型优先",
  "让 3D 对象占据最大视觉权重",
  "统一容器语言",
  "圆角、渐变背景、右下标签区保持一致",
  "分类色彩控制",
  "工业类偏蓝，动物 / 示教类偏青蓝",
  "appIconScroller",
  "appIconStrip",
  "vr-education/icons/motor.png",
  "vr-education/icons/application.png",
  "vr-education/icons/cattle.png",
  "vr-education/icons/position.png",
  "vr-education/icons/electromechanical.png",
  "vr-education/icons/teaching-pendant.png",
  "vr-education/icons/dog.png",
  "vr-education/icons/cat.png",
  "vr-education/icons/pig-icon.png",
  "从单一结构展示扩展为完整解剖教学流程",
  "补充 UI 界面",
  "课程列表 / 引导弹窗",
  "pig-course-list.png",
];

for (const copy of requiredCopy) {
  assert.ok(
    searchablePage.includes(copy.replace(/\s+/g, "")),
    `Missing required VR education copy: ${copy}`,
  );
}

const biomedicalChapterIndex = searchablePage.indexOf("生物医疗VR");
const appIconChapterIndex = searchablePage.indexOf("应用图标系统");
const closingIndex = searchablePage.indexOf("感谢你看到这里");

assert.ok(
  biomedicalChapterIndex !== -1,
  "Biomedical chapter should still be present",
);

assert.ok(
  appIconChapterIndex > biomedicalChapterIndex,
  "App icon system should be placed after the biomedical chapter",
);

assert.ok(
  closingIndex > appIconChapterIndex,
  "App icon system should remain before the closing section",
);

assert.ok(
  !searchablePage.includes("我没有把背景当作装饰图处理"),
  "Old defensive background strategy copy should not be present",
);

assert.ok(
  !searchablePage.includes("经过AI关键词探索和Figma后期调色"),
  "Removed AI keyword and Figma color refinement paragraph should not be present",
);

assert.ok(
  appIconScrollerStyle.includes("#f8fffd;") &&
    appIconScrollerStyle.includes("linear-gradient(135deg,rgba(125,211,252,0.18),rgba(20,184,166,0.08))") &&
    appIconScrollerStyle.includes("overflow-x:auto;"),
  "App icon scroller should match the light cyan explanation panel and scroll horizontally",
);

assert.ok(
  appIconStripStyle.includes("display:flex;"),
  "App icon strip should lay icons out in one horizontal row",
);

assert.ok(
  appIconTileStyle.includes("flex:00140px;") &&
    appIconTileMobileStyle.includes("flex-basis:118px;"),
  "App icon strip images should be slightly smaller on desktop and mobile",
);

assert.equal(
  appIconFeatureImageMatch?.[1],
  "/images/visual/vr-education/icons/cat.png",
  "App icon feature card should use the cat icon",
);

assert.deepEqual(
  promptStrategyKickerMatch?.slice(1),
  ["AI 关键词探索", "AI Keyword Exploration"],
  "Prompt strategy kicker should explicitly mention AI keyword exploration",
);

assert.ok(
  /cattle\.png[\s\S]*dog\.png[\s\S]*cat\.png[\s\S]*pig-icon\.png[\s\S]*motor\.png[\s\S]*application\.png[\s\S]*position\.png[\s\S]*electromechanical\.png[\s\S]*teaching-pendant\.png/.test(appIconItemsBlock),
  "App icon strip should place animal icons before industrial and teaching icons",
);

assert.ok(
  !searchablePage.includes("appIconCategories") &&
    !searchablePage.includes("appIconCategory"),
  "App icons should no longer be rendered as categorized groups",
);

assert.ok(
  !searchablePage.includes("<figcaption>{t(locale, item.label.zh, item.label.en)}</figcaption>"),
  "App icon strip should not render visible captions",
);

assert.ok(
  !searchablePage.includes("backgroundProcessOverlay"),
  "Transfer image copy should not be placed over images",
);

assert.ok(
  backgroundProcessImageNumberStyle.includes("position:absolute;") &&
    !backgroundProcessImageNumberStyle.includes("border:"),
  "Background process image step numbers should render without a thin border",
);

assert.ok(
  !searchablePage.includes("主线展示牛解剖背景从主题定位到界面应用的闭环"),
  "Removed VR education process summary is still present",
);

assert.ok(
  !searchablePage.includes("牛解剖背景探索流程"),
  "Old cattle-specific background process heading is still present",
);

const removedBrainHomeShot = [
  "大脑的秘密",
  "Secrets of the brain",
  "brain-home.webp",
];

for (const copy of removedBrainHomeShot) {
  assert.ok(
    !searchablePage.includes(copy.replace(/\s+/g, "")),
    `Removed brain home shot is still present: ${copy}`,
  );
}

const removedCattleStructureShot = [
  "cow-scene-1.webp",
  "cow-scene-2.webp",
];

for (const copy of removedCattleStructureShot) {
  assert.ok(
    !searchablePage.includes(copy.replace(/\s+/g, "")),
    `Removed cattle structure shot is still present: ${copy}`,
  );
}

const removedSmartManufacturingShots = [
  "注塑模具装配",
  "Injection mold assembly",
  "molding-detail-assembly.png",
];

for (const copy of removedSmartManufacturingShots) {
  assert.ok(
    !searchableSmartManufacturingAssets.includes(copy.replace(/\s+/g, "")),
    `Removed smart manufacturing shot is still present: ${copy}`,
  );
}

console.log("VR education content expectations passed");
