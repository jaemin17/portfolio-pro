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
assert.doesNotMatch(copy, /href:\s*"https:\/\/jaemin17\.github\.io\/sticky-notes\/"/);

assert.match(page, /Sticky Notes/);
assert.match(page, /Next/);
assert.match(page, /T-Day/);
assert.match(page, /2026/);
assert.match(page, /Personal Tools/);
assert.match(page, /Personal Workflow/);
assert.match(page, /Web/);
assert.match(page, /footerLink/);
assert.doesNotMatch(page, /backLink/);
assert.match(page, /https:\/\/jaemin17\.github\.io\/sticky-notes\//);
assert.match(page, /https:\/\/jaemin17\.github\.io\/plan\//);
assert.match(page, /https:\/\/jaemin17\.github\.io\/t-day\//);
assert.match(redirect, /ProjectRedirect/);
assert.match(redirect, /\/projects\/personal-tools/);

assert.match(css, /\.hero\s*{[^}]*text-align:\s*left;/s);
assert.match(css, /\.title\s*{[^}]*font-size:\s*clamp\(2\.75rem,\s*5vw,\s*4\.5rem\);/s);
assert.match(css, /\.story h2\s*{[^}]*font-size:\s*clamp\(1\.75rem,\s*3vw,\s*2\.6rem\);/s);
assert.doesNotMatch(css, /13vw/);
assert.doesNotMatch(css, /5\.5rem/);
