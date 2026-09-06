import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const copy = readFileSync("src/i18n/copy.ts", "utf8");
const personalToolsPage = readFileSync(
  "src/app/[locale]/projects/personal-tools/page.tsx",
  "utf8",
);
const officeToolsPage = readFileSync(
  "src/app/[locale]/projects/office-tools/page.tsx",
  "utf8",
);

const searchableCopy = copy.replace(/\s+/g, "");

assert.match(copy, /title:\s*"Sticky Notes"/);
assert.match(copy, /title:\s*"Next"/);
assert.match(copy, /title:\s*"T-Day"/);
assert.match(copy, /href:\s*"https:\/\/jaemin17\.github\.io\/sticky-notes\/"/);
assert.match(copy, /href:\s*"https:\/\/jaemin17\.github\.io\/plan\/"/);
assert.match(copy, /href:\s*"https:\/\/jaemin17\.github\.io\/t-day\/"/);
assert.match(copy, /imageSrc:\s*buildingMedia\.stickyNotes/);
assert.match(copy, /imageSrc:\s*buildingMedia\.next/);
assert.match(copy, /imageSrc:\s*buildingMedia\.tday/);
assert.match(copy, /stickyNotes:\s*"\/images\/tools\/personal-tools-cover\.png"/);
assert.match(copy, /next:\s*"\/images\/tools\/next-cover\.png"/);
assert.match(copy, /tday:\s*"\/images\/tools\/tday-cover\.png"/);

assert.doesNotMatch(searchableCopy, /title:"Personal Tools"/);
assert.doesNotMatch(copy, /href:\s*"\/projects\/personal-tools"/);
assert.doesNotMatch(copy, /buildingMedia\.personalTools/);

assert.match(personalToolsPage, /ProjectRedirect/);
assert.match(personalToolsPage, /to="\/"/);
assert.doesNotMatch(personalToolsPage, /Sticky Notes/);
assert.doesNotMatch(personalToolsPage, /officeTools\.module\.css/);

assert.match(officeToolsPage, /ProjectRedirect/);
assert.match(officeToolsPage, /to="\/"/);
assert.doesNotMatch(officeToolsPage, /\/projects\/personal-tools/);
