import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const page = await readFile(
  new URL("../src/app/[locale]/projects/vr-education/page.tsx", import.meta.url),
  "utf8",
);
const searchablePage = page.replace(/\s+/g, "");

const requiredCopy = [
  "VR",
  "实训软件界面系统设计",
  "设计挑战",
  "3D 模型是主角，界面不能抢视觉",
  "不同学科内容需要统一但可区分的场景语言",
  "教学阅读和实操引导需要不同信息层级",
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
