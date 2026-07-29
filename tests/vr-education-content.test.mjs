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
const searchablePage = `${page}\n${backgroundTransferSwitcher}\n${animalVrAssets}`.replace(/\s+/g, "");
const searchableSmartManufacturingAssets = smartManufacturingAssets.replace(/\s+/g, "");

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
  "高频关键词如何控制背景",
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
  "BackgroundTransferSwitcher",
  "backgroundTransferDots",
  "backgroundTransferOverlay",
  "promptKeywordPills",
  "promptKeywordPill",
  "我将首页用于对象识别，子页面用于结构说明和操作反馈",
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

assert.ok(
  !searchablePage.includes("backgroundProcessOverlay"),
  "Transfer image copy should not be placed over images",
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
