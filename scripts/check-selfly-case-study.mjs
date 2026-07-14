import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assertIncludes(source, needle, label) {
  if (!source.includes(needle)) {
    throw new Error(`${label}: missing ${needle}`);
  }
}

const copy = read("src/i18n/copy.ts");
assertIncludes(copy, 'href: "/projects/selfly"', "home Selfly card");

const pagePath = path.join(root, "src/app/[locale]/projects/selfly/page.tsx");
if (!fs.existsSync(pagePath)) {
  throw new Error("Selfly case-study route is missing");
}

const page = fs.readFileSync(pagePath, "utf8");
[
  "Selfly",
  "App Store",
  "产品定位",
  "每日任务节奏",
  "任务卡片交互",
  "模块化记录",
  "优化创建体验",
  "日记输入体验",
  "体验抛光",
  "低压力回顾",
  "应用图标",
  "产品化落地",
  "App Store 上线",
  "项目反思",
].forEach((section) => assertIncludes(page, section, "Selfly page"));

const stylesPath = path.join(root, "src/app/[locale]/projects/selfly/selfly0.module.css");
if (!fs.existsSync(stylesPath)) {
  throw new Error("Selfly case-study stylesheet is missing");
}
