import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const styles = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/modelEditor.module.css", import.meta.url),
  "utf8",
);

const page = await readFile(
  new URL("../src/app/[locale]/projects/model-editor/page.tsx", import.meta.url),
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

assert.ok(
  !page.includes("模型预览面积增加") && !page.includes("The model preview area is larger"),
  "Model editor layout diagram should not include a separate preview area sentence",
);

assert.ok(
  page.includes("调整前:面板环绕，预览受挤压") &&
    page.includes("Before: Panels surround the model, preview is squeezed"),
  "Model editor before caption should use one-line before wording",
);

assert.ok(
  page.includes("调整后: 预览面积增加,分区更清晰") &&
    page.includes("After: Larger preview area, clearer tool zones"),
  "Model editor after caption should use one-line after wording",
);

assert.ok(
  !page.includes('description: tStr(locale, "面板环绕，预览受挤压"') &&
    !page.includes('description: tStr(locale, "工具分区更清晰"'),
  "Model editor before/after captions should not use secondary description text",
);

for (const removedLabel of ["调整结果", "Design Results", "编辑对象更明确", "高频路径更短", "空间对比"]) {
  assert.ok(
    !page.includes(removedLabel),
    `Model editor layout comparison should not include ${removedLabel}`,
  );
}

assert.ok(
  !page.includes("早期原型：面板环绕，预览受挤压"),
  "Model editor before caption should not use the long early prototype wording",
);

for (const secondaryText of [
  "模型成为主要观察对象",
  "工具、部件和参数关系更清楚",
  "常用入口固定，不必反复寻找",
  "内容面板、浮动工具和全局动作各自归位",
]) {
  assert.ok(
    !page.includes(secondaryText),
    `Model editor design results should not include secondary text: ${secondaryText}`,
  );
}

console.log("Model editor content expectations passed");
