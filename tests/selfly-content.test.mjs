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

console.log("Selfly content expectations passed");
