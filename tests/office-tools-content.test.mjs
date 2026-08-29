import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const copy = readFileSync("src/i18n/copy.ts", "utf8");
const page = readFileSync(
  "src/app/[locale]/projects/personal-tools/page.tsx",
  "utf8",
);
const css = readFileSync(
  "src/app/[locale]/projects/personal-tools/officeTools.module.css",
  "utf8",
);
const redirect = readFileSync(
  "src/app/[locale]/projects/office-tools/page.tsx",
  "utf8",
);

assert.match(copy, /title:\s*"Personal Tools"/);
assert.match(copy, /href:\s*"\/projects\/personal-tools"/);
assert.match(copy, /iconSrc:\s*"\/office-tools-icon\.svg"/);
assert.doesNotMatch(copy, /href:\s*"https:\/\/jaemin17\.github\.io\/sticky-notes\/"/);

assert.match(page, /Sticky Notes/);
assert.match(page, /from "@\/i18n\/assets"/);
assert.match(page, /coverSrc:\s*"\/images\/tools\/personal-tools-cover\.png"/);
assert.match(page, /<img[\s\S]*src=\{assetPath\(coverSrc\)\}/);
assert.match(page, /Next/);
assert.match(page, /title:\s*"Next"[\s\S]*coverSrc:\s*"\/images\/tools\/next-cover\.png"/);
assert.match(page, /把想法摊开到空间画布上/);
assert.match(page, /getting thinking clear/);
assert.doesNotMatch(page, /今天要处理/);
assert.doesNotMatch(page, /today's tasks/);
assert.match(page, /T-Day/);
assert.match(page, /title:\s*"T-Day"[\s\S]*coverSrc:\s*"\/images\/tools\/tday-cover\.png"/);
assert.match(page, /在截止日期前把任务安排好/);
assert.match(page, /lining up tasks before a deadline/);
assert.doesNotMatch(page, /目标日放在日历上/);
assert.doesNotMatch(page, /days leading up to it/);
assert.match(page, /2026/);
assert.match(page, /Personal Tools/);
assert.match(page, /Personal Workflow/);
assert.match(page, /Web/);
assert.match(page, /selflyStyles\.featuredHero/);
assert.match(page, /selflyStyles\.selfly0ContactBack/);
assert.match(page, /modelStyles\.positioningSection/);
assert.doesNotMatch(page, /footerLink/);
assert.doesNotMatch(page, /backLink/);
assert.match(page, /<a[\s\S]{0,40}className=\{styles\.toolCard\}/);
assert.doesNotMatch(page, /toolLink/);
assert.doesNotMatch(page, /openCta/);
assert.doesNotMatch(page, /tStr\(locale, "打开", "Open"\)/);
assert.doesNotMatch(page, /打开 Sticky Notes/);
assert.doesNotMatch(page, /打开 Next/);
assert.doesNotMatch(page, /打开 T-Day/);
assert.doesNotMatch(page, /Open Sticky Notes/);
assert.doesNotMatch(page, /Open Next/);
assert.doesNotMatch(page, /Open T-Day/);
assert.doesNotMatch(css, /\.toolLink/);
assert.match(page, /https:\/\/jaemin17\.github\.io\/sticky-notes\//);
assert.match(page, /https:\/\/jaemin17\.github\.io\/plan\//);
assert.match(page, /https:\/\/jaemin17\.github\.io\/t-day\//);
assert.match(redirect, /ProjectRedirect/);
assert.match(redirect, /\/projects\/personal-tools/);

assert.match(css, /\.toolsGrid/);
assert.match(css, /\.toolsGrid\s*\{[^}]*justify-content:\s*center/);
assert.match(css, /aspect-ratio:\s*5\s*\/\s*3/);
assert.match(page, /selflyStyles\.meta/);
assert.doesNotMatch(page, /headerCta/);
assert.doesNotMatch(page, /heroIcon/);
assert.doesNotMatch(page, /项目背景/);
assert.doesNotMatch(page, /Project Background/);
assert.doesNotMatch(page, /工具集合/);
assert.doesNotMatch(page, /Tool Collection/);
assert.doesNotMatch(page, /toolEyebrow/);
assert.doesNotMatch(page, /快速记录/);
assert.doesNotMatch(page, /当天计划/);
assert.doesNotMatch(page, /目标倒计时/);
assert.doesNotMatch(page, /Quick capture/);
assert.doesNotMatch(page, /Daily planning/);
assert.doesNotMatch(css, /\.toolEyebrow/);
assert.doesNotMatch(page, /感谢你看到这里/);
assert.doesNotMatch(page, /Thanks for reading this far/);
assert.doesNotMatch(css, /4\.5rem/);
assert.doesNotMatch(css, /13vw/);
