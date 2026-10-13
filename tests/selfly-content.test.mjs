import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const styles = await readFile(
  new URL("../src/app/[locale]/projects/selfly/selfly0.module.css", import.meta.url),
  "utf8",
);
const page = await readFile(
  new URL("../src/app/[locale]/projects/selfly/page.tsx", import.meta.url),
  "utf8",
);

const searchableStyles = styles.replace(/\s+/g, "");
const searchablePage = page.replace(/\s+/g, "");
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

assert.ok(
  searchablePage.includes("在前期探索中，我意识到") &&
    searchablePage.includes("Intheearlyexploration,Irealized") &&
    !searchablePage.includes("在迭代过程中，我意识到") &&
    !searchablePage.includes("AsIiterated,Irealized"),
  "Selfly positioning copy should frame the product shift as early exploration instead of mid-iteration",
);

assert.ok(
  searchablePage.includes('"原方向","Originaldirection"') &&
    searchablePage.includes('"新方向","Newdirection"') &&
    !searchablePage.includes('"前期","Before"') &&
    !searchablePage.includes('"后期","After"'),
  "Selfly positioning diagram should label the shift by design direction instead of timeline",
);

assert.ok(
  searchablePage.includes("清单、日记、计划和图册提供了自由的记录容器") &&
    searchablePage.includes("把「日记、图册、计划」转译成更具体的记录灵感") &&
    searchablePage.includes("情绪日记、感恩日记、年度目标、梦想的家、理想自我") &&
    searchablePage.includes("Lists,journals,plans,andboardsprovideflexiblerecordingcontainers") &&
    searchablePage.includes("translating“journal,board,andplan”intomorespecificrecordingprompts") &&
    !searchablePage.includes("自定义选项越多，新用户在开始记录前需要做的决定也越多") &&
    !searchablePage.includes("很多用户并不是不知道怎么创建模块") &&
    !searchablePage.includes("Themorecustomizationoptionsusersface") &&
    !searchablePage.includes("Manyusersdonotstrugglewithhowtocreateamodule"),
  "Selfly scene-template copy should translate abstract containers into concrete recording inspiration",
);

assert.ok(
  searchablePage.includes("把抽象容器转译成具体场景") &&
    searchablePage.includes("降低开始记录的空白感") &&
    searchablePage.includes("保留从类型开始的自由配置") &&
    searchablePage.includes("选择模板后直接进入记录") &&
    searchablePage.includes("Translateabstractcontainersintoscenarios") &&
    searchablePage.includes("Reduceblank-pagefeelingbeforewriting") &&
    searchablePage.includes("Keeptype-basedfreesetup") &&
    searchablePage.includes("Enterrecordingaftertemplatechoice") &&
    !searchablePage.includes("首次使用路径优化") &&
    !searchablePage.includes("Optimizedfirst-timepath"),
  "Selfly scene-template design points should match the abstract-container to concrete-scenario design decision",
);

console.log("Selfly content expectations passed");
