import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const page = await readFile(
  new URL("../src/app/[locale]/projects/vr-education/page.tsx", import.meta.url),
  "utf8",
);
const searchablePage = page.replace(/\s+/g, "");

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
  "promptKeywordPills",
  "promptKeywordPill",
  "我将首页用于对象识别，子页面用于结构说明和操作反馈",
  "从单一结构展示扩展为完整解剖教学流程",
];

for (const copy of requiredCopy) {
  assert.ok(
    searchablePage.includes(copy.replace(/\s+/g, "")),
    `Missing required VR education copy: ${copy}`,
  );
}

console.log("VR education content expectations passed");
