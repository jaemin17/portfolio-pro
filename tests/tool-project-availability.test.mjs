import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const copy = await readFile(
  new URL("../src/i18n/copy.ts", import.meta.url),
  "utf8",
);
const component = await readFile(
  new URL("../src/app/[locale]/ToolProjectList.tsx", import.meta.url),
  "utf8",
);
const styles = await readFile(
  new URL("../src/app/[locale]/page.module.css", import.meta.url),
  "utf8",
);
const unavailableOverlayStyles =
  styles.match(/\.toolUnavailableOverlay\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";

assert.match(
  copy,
  /title:\s*"XR Interactive Script Engine"[\s\S]*availability:\s*"comingSoon"/,
  "XR Interactive Script Engine should be marked as coming soon",
);

for (const title of ["Game Concept", "AR Airbnb", "游戏概念"]) {
  assert.match(
    copy,
    new RegExp(`title:\\s*"${title}"[\\s\\S]*availability:\\s*"comingSoon"`),
    `${title} should be marked as coming soon`,
  );
}

assert.ok(
  copy.includes('statusLabel: "Coming soon"') &&
    copy.includes('statusLabel: "暂不开放"'),
  "Coming soon status labels should exist in both locales",
);

assert.ok(
  !copy.includes("statusDescription") &&
    !copy.includes("This case study is not available yet.") &&
    !copy.includes("案例暂未开放"),
  "Coming soon cards should only keep the short status label, with no helper copy",
);

assert.ok(
    component.includes("toolCardUnavailable") &&
    component.includes("aria-label") &&
    component.includes("toolUnavailableOverlay") &&
    component.includes("{media}\n      {unavailable ? (") &&
    !component.includes("toolStatus") &&
    !component.includes("toolUnavailableHint") &&
    !component.includes("toolStatusDescription") &&
    !component.includes("screenReaderOnly"),
  "Tool cards should render unavailable state with only the short status label",
);

assert.ok(
  styles.includes(".toolCardUnavailable .toolUnavailableOverlay") &&
    styles.includes(".toolCardUnavailable:hover .toolUnavailableOverlay") &&
    styles.includes(".toolFrame {\n  position: relative;") &&
    !styles.includes(".toolCard {\n  position: relative;") &&
    styles.includes("inset: 0;") &&
    styles.includes("background: rgb(0 0 0 / 0.42);") &&
    styles.includes("color: #fff;") &&
    !unavailableOverlayStyles.includes("transform:") &&
    styles.includes("@media (hover: none)") &&
    !styles.includes(".toolStatus") &&
    !styles.includes(".toolUnavailableHint") &&
    !styles.includes(".toolStatusDescription") &&
    !styles.includes(".screenReaderOnly"),
  "Unavailable tool card styles should cover hover overlay, bare frames, touch behavior, and status label only",
);

console.log("Tool project availability expectations passed");
