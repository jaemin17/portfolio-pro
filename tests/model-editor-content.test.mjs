import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const styles = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/modelEditor.module.css", import.meta.url),
  "utf8",
);

const searchableStyles = styles.replace(/\s+/g, "");
const mobileStyles = searchableStyles.match(/@media\(max-width:768px\)\{([\s\S]*)\}/)?.[1] ?? "";

assert.ok(
  mobileStyles.includes(".directionCards{grid-template-columns:1fr;"),
  "Direction cards should switch to one column on small screens",
);

assert.ok(
  mobileStyles.includes(".directionCard{align-items:flex-start;"),
  "Direction cards should align content from the left on small screens",
);

assert.ok(
  mobileStyles.includes(".directionCardp{width:auto;text-align:left;"),
  "Direction card body text should use available width on small screens",
);

console.log("Model editor content expectations passed");
