import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const styles = await readFile(
  new URL("../src/app/[locale]/projects/selfly/selfly0.module.css", import.meta.url),
  "utf8",
);

const searchableStyles = styles.replace(/\s+/g, "");
const mobileStyles = searchableStyles.match(/@media\(max-width:760px\)\{([\s\S]*)\}/)?.[1] ?? "";
const todayRhythmMediaMobileStyle = mobileStyles.match(
  /\.todayRhythmSystemFigure\.todayTop3CarouselImage,\.todayRhythmSystemFigure\.todayTop3PhoneVideo\{([^}]+)\}/,
)?.[1] ?? "";
const phaseCompareMobileStyle = mobileStyles.match(
  /\.positioningPhaseCompare\.positioningPhoneFrame\{([^}]+)\}/,
)?.[1] ?? "";
const phaseCompareFlowMobileStyle = mobileStyles.match(
  /\.positioningPhaseCompare\.positioningDiagramFlow\{([^}]+)\}/,
)?.[1] ?? "";
const phaseCompareColMobileStyle = mobileStyles.match(
  /\.positioningPhaseCompare\.positioningDiagramCol\{([^}]+)\}/,
)?.[1] ?? "";
const phaseComparePhoneMobileStyle = mobileStyles.match(
  /\.positioningPhaseCompare\.positioningDiagramPhone\{([^}]+)\}/,
)?.[1] ?? "";

assert.ok(
  mobileStyles.includes(".todayRhythmSystemFigure.todayTop3PhoneBezel{"),
  "Today rhythm phone frame should have a mobile-specific rule",
);

assert.ok(
  mobileStyles.includes(".todayRhythmSystemGrid{grid-template-columns:1fr;") &&
    mobileStyles.includes("justify-items:center;"),
  "Today rhythm panels should stack and align consistently on small screens",
);

assert.ok(
  mobileStyles.includes("width:min(100%,184px);") &&
    mobileStyles.includes("padding:4px;") &&
    mobileStyles.includes("background:#000;"),
  "Today rhythm phone frame should keep a consistent small-screen bezel",
);

assert.ok(
  mobileStyles.includes(".todayRhythmSystemFigure.todayTop3PhoneFrame{aspect-ratio:611/1319;"),
  "Today rhythm phone frame should match the screenshot aspect ratio on small screens",
);

assert.ok(
  todayRhythmMediaMobileStyle.includes("object-fit:cover;") &&
    todayRhythmMediaMobileStyle.includes("border-radius:12px;"),
  "Today rhythm media should fill the matching screenshot ratio on small screens",
);

assert.ok(
  phaseCompareMobileStyle.includes("width:100%;") &&
    phaseCompareMobileStyle.includes("max-width:136px;") &&
    phaseCompareMobileStyle.includes("aspect-ratio:470/1024;") &&
    phaseCompareMobileStyle.includes("border-bottom:4pxsolid#2a2a2a;") &&
    phaseCompareMobileStyle.includes("border-radius:16px;") &&
    !phaseCompareMobileStyle.includes("max-height:"),
  "Before and after positioning phones should use the same full screenshot ratio on small screens",
);

assert.ok(
  phaseCompareFlowMobileStyle.includes("display:grid;") &&
    phaseCompareFlowMobileStyle.includes("grid-template-columns:minmax(0,1fr)48pxminmax(0,1fr);"),
  "Before and after positioning comparison should give both sides equal width on narrow screens",
);

assert.ok(
  phaseCompareColMobileStyle.includes("width:100%;") &&
    phaseCompareColMobileStyle.includes("min-width:0;"),
  "Before and after positioning columns should not shrink to their label text on narrow screens",
);

assert.ok(
  phaseComparePhoneMobileStyle.includes("position:absolute;") &&
    phaseComparePhoneMobileStyle.includes("inset:0;") &&
    phaseComparePhoneMobileStyle.includes("height:100%;") &&
    phaseComparePhoneMobileStyle.includes("object-fit:cover;"),
  "Before and after positioning phone images should fill the closed frame without a bottom gap",
);

console.log("Selfly content expectations passed");
