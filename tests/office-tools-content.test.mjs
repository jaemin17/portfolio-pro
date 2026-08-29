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
assert.match(page, /coverSrc:\s*"\/images\/tools\/personal-tools-cover\.png"/);
assert.match(page, /<img[\s\S]*className=\{styles\.toolCoverImage\}/);
assert.match(page, /Next/);
assert.match(page, /title:\s*"Next"[\s\S]*coverSrc:\s*"\/images\/tools\/next-cover\.png"/);
assert.match(page, /T-Day/);
assert.match(page, /2026/);
assert.match(page, /Personal Tools/);
assert.match(page, /Personal Workflow/);
assert.match(page, /Web/);
assert.match(page, /selflyStyles\.featuredHero/);
assert.match(page, /selflyStyles\.selfly0ContactBack/);
assert.match(page, /modelStyles\.positioningSection/);
assert.doesNotMatch(page, /footerLink/);
assert.doesNotMatch(page, /backLink/);
assert.match(page, /https:\/\/jaemin17\.github\.io\/sticky-notes\//);
assert.match(page, /https:\/\/jaemin17\.github\.io\/plan\//);
assert.match(page, /https:\/\/jaemin17\.github\.io\/t-day\//);
assert.match(redirect, /ProjectRedirect/);
assert.match(redirect, /\/projects\/personal-tools/);

assert.match(css, /\.toolsGrid/);
assert.match(page, /selflyStyles\.meta/);
assert.doesNotMatch(page, /headerCta/);
assert.doesNotMatch(page, /heroIcon/);
assert.doesNotMatch(page, /项目背景/);
assert.doesNotMatch(page, /Project Background/);
assert.doesNotMatch(page, /感谢你看到这里/);
assert.doesNotMatch(page, /Thanks for reading this far/);
assert.doesNotMatch(css, /4\.5rem/);
assert.doesNotMatch(css, /13vw/);
