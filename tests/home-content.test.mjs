import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const copy = await readFile(
  new URL("../src/i18n/copy.ts", import.meta.url),
  "utf8",
);
const toolProjectList = await readFile(
  new URL("../src/app/[locale]/ToolProjectList.tsx", import.meta.url),
  "utf8",
);
const homeStyles = await readFile(
  new URL("../src/app/[locale]/page.module.css", import.meta.url),
  "utf8",
);
const envelopeStyles = await readFile(
  new URL("../src/components/EnvelopeMail.module.css", import.meta.url),
  "utf8",
);
const envelopeComponent = await readFile(
  new URL("../src/components/EnvelopeMail.tsx", import.meta.url),
  "utf8",
);
const globalStyles = await readFile(
  new URL("../src/app/globals.css", import.meta.url),
  "utf8",
);
const headerStyles = await readFile(
  new URL("../src/components/SiteHeader.module.css", import.meta.url),
  "utf8",
);
const aboutStyles = await readFile(
  new URL("../src/app/[locale]/about/about.module.css", import.meta.url),
  "utf8",
);
const searchableGlobalStyles = globalStyles.replace(/\s+/g, "");
const searchableHeaderStyles = headerStyles.replace(/\s+/g, "");
const searchableAboutStyles = aboutStyles.replace(/\s+/g, "");

const searchableCopy = copy.replace(/\s+/g, "");
const searchableToolProjectList = toolProjectList.replace(/\s+/g, "");
const searchableHomeStyles = homeStyles.replace(/\s+/g, "");
const searchableEnvelopeStyles = envelopeStyles.replace(/\s+/g, "");
const searchableEnvelopeComponent = envelopeComponent.replace(/\s+/g, "");
const desktopLetterHoverStyles =
  envelopeStyles.match(/\.envelope:hover \.letter,\n\.envelope:focus-within \.letter \{([\s\S]*?)\n\}/)?.[1] ?? "";
const letterSlotHoverStyles =
  envelopeStyles.match(/\.envelope:hover \.letterSlot,\n\.envelope:focus-within \.letterSlot \{([\s\S]*?)\n\}/)?.[1] ?? "";
const mobileLetterHoverStyles =
  envelopeStyles.match(/@media \(max-width: 809px\) \{[\s\S]*?\.envelope:hover \.letter,\n  \.envelope:focus-within \.letter \{([\s\S]*?)\n  \}/)?.[1] ?? "";
const letterStyles =
  envelopeStyles.match(/\.letter \{([\s\S]*?)\n\}/)?.[1] ?? "";
const zhVisualProjectsBlock =
  copy.match(/visualProjects: \{[\s\S]*?caseStudies:/)?.[0]?.replace(/\s+/g, "") ?? "";
const visualProjectsBlocks = copy.match(
  /visualProjects: \{[\s\S]*?caseStudies:/g,
) ?? [];

const requiredCopy = [
  "Work Index",
  "All",
  "0→1 Products",
  "Product Systems",
  "XR / 3D",
  "Visual Systems",
  "作品索引",
  "全部",
  "0→1 产品",
  "产品系统",
  "XR / 3D",
  "视觉系统",
  "0→1 Builds",
  "Visual Works",
  "/images/selfly0/hero-750w.webp",
  "/images/tools/personal-tools-cover.png",
  "Independent Product · iOS",
  "Self-directed Tools · Web",
  "0→1 Product",
  "iOS UX",
  "Workflow Design",
  "Product Systems",
  "VR Simulation · XR",
  "VR 教育与实训",
  "/videos/visual/home-vr-education.mp4",
  "New Visual Work",
  "/images/visual/new-visual-work-home-en.png",
  "https://www.figma.com/proto/GJ09IHSaa94p8KQAsRAx0m/Untitled?node-id=1-29&p=f&viewport=471%2C40%2C0.15&t=cQ0YzbifJaUVS61g-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
  "3D Engine App Icon Design",
  "/projects/engine-icon",
  "/images/visual/vector-to-3d-icons-832w.webp",
  "/images/visual/vector-to-3d-icons.webp",
  "云平台",
  "Cloud Platform",
  "/images/visual/cloud-platform-832w.webp",
  "/images/visual/cloud-platform.webp",
  "给我写信吧",
  "write me a letter",
  "邮箱已复制",
  "email copied",
];

for (const item of requiredCopy) {
  assert.ok(
    searchableCopy.includes(item.replace(/\s+/g, "")),
    `Missing required home copy: ${item}`,
  );
}

assert.ok(
  !searchableCopy.includes("/videos/visual/immersive.mp4"),
  "Home Visual Works should not use the old immersive video",
);

assert.ok(
  !searchableCopy.includes("Currentlybuilding"),
  "English side-projects section should not use the old Currently building label",
);

assert.ok(
    zhVisualProjectsBlock.indexOf("VR教育与实训") <
    zhVisualProjectsBlock.indexOf("NewVisualWork") &&
    zhVisualProjectsBlock.indexOf("NewVisualWork") <
      zhVisualProjectsBlock.indexOf("3DEngineAppIconDesign") &&
    zhVisualProjectsBlock.indexOf("3DEngineAppIconDesign") <
      zhVisualProjectsBlock.indexOf("云平台") &&
    zhVisualProjectsBlock.indexOf("云平台") <
      zhVisualProjectsBlock.indexOf("游戏概念"),
  "Cloud Platform should appear as the fourth Visual Works item before Game Concept",
);

assert.ok(
  !searchableCopy.includes("/videos/visual/google-chrome.mp4"),
  "New Visual Work should use the static screenshot instead of the temporary video",
);

assert.ok(
  searchableCopy.includes("preserveImageRatio:true"),
  "New Visual Work should opt into its natural screenshot ratio",
);

const newVisualWorkEntries = visualProjectsBlocks.flatMap((block) =>
  block.match(
    /title: "New Visual Work",[\s\S]*?imageSrc: visualMedia\.newVisualWork,[\s\S]*?preserveImageRatio: true,/g,
  ) ?? [],
);
const vectorTo3dEntries = visualProjectsBlocks.flatMap((block) =>
  block.match(
    /title: "3D Engine App Icon Design",[\s\S]*?imageSrc: visualMedia\.vectorTo3dIcons,[\s\S]*?preserveImageRatio: true,/g,
  ) ?? [],
);

assert.equal(
  newVisualWorkEntries.length,
  2,
  "New Visual Work should exist in both locales",
);

for (const entry of newVisualWorkEntries) {
  assert.ok(
    entry.includes('href: "https://www.figma.com/proto/GJ09IHSaa94p8KQAsRAx0m/Untitled?node-id=1-29&p=f&viewport=471%2C40%2C0.15&t=cQ0YzbifJaUVS61g-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"'),
    "New Visual Work should link to the Figma prototype",
  );
  assert.ok(
    !entry.includes('availability: "comingSoon"') &&
      !entry.includes("statusLabel:"),
    "New Visual Work should be clickable without a coming-soon overlay",
  );
}

assert.equal(
  vectorTo3dEntries.length,
  2,
  "3D Engine App Icon Design should exist in both locales",
);

for (const entry of vectorTo3dEntries) {
  assert.ok(
    entry.includes("imageSrc: visualMedia.vectorTo3dIcons") &&
      entry.includes("imageVariants: [...visualImageVariants.vectorTo3dIcons]") &&
      entry.includes('href: "/projects/engine-icon"') &&
      !entry.includes('availability: "comingSoon"'),
    "3D Engine App Icon Design should link to its detail page and stay visible without a coming-soon overlay",
  );
}

const cloudPlatformEntries = visualProjectsBlocks.flatMap((block) =>
  block.match(
    /title: "(?:云平台|Cloud Platform)",[\s\S]*?imageSrc: visualMedia\.cloudPlatform,[\s\S]*?preserveImageRatio: true,/g,
  ) ?? [],
);

assert.equal(
  cloudPlatformEntries.length,
  2,
  "Cloud Platform should exist in both locales",
);

for (const entry of cloudPlatformEntries) {
  assert.ok(
    entry.includes("imageSrc: visualMedia.cloudPlatform") &&
      entry.includes("imageVariants: [...visualImageVariants.cloudPlatform]") &&
      entry.includes('availability: "comingSoon"') &&
      entry.includes("statusLabel:") &&
      !entry.includes("href:"),
    "Cloud Platform should use the same coming-soon overlay as other unavailable visual works",
  );
}

const homePage = await readFile(
  new URL("../src/app/[locale]/page.tsx", import.meta.url),
  "utf8",
);
assert.ok(
  homePage.replace(/\s+/g, "").includes("<WorkIndex") &&
    homePage.replace(/\s+/g, "").includes("copy.workIndex") &&
    homePage.replace(/\s+/g, "").includes("items={copy.workIndex.items}") &&
    homePage.replace(/\s+/g, "").includes("buildingProjects={copy.currentlyBuilding}") &&
    homePage.replace(/\s+/g, "").includes("toolProjects={copy.toolProjects}") &&
    homePage.replace(/\s+/g, "").includes("visualProjects={copy.visualProjects}"),
  "Home page should render a Work Index tab surface before project sections",
);

assert.ok(
  !homePage.replace(/\s+/g, "").includes('aria-label={copy.currentlyBuilding.label}') &&
    !homePage.replace(/\s+/g, "").includes('aria-label={copy.toolProjects.label}') &&
    !homePage.replace(/\s+/g, "").includes('aria-label={copy.visualProjects.label}'),
  "Project sections should be rendered through the Work Index filter instead of duplicated below it",
);

const workIndexComponent = await readFile(
  new URL("../src/app/[locale]/WorkIndex.tsx", import.meta.url),
  "utf8",
);
const searchableWorkIndexComponent = workIndexComponent.replace(/\s+/g, "");

assert.ok(
  searchableWorkIndexComponent.includes('"useclient"') &&
    searchableWorkIndexComponent.includes('role="tablist"') &&
    searchableWorkIndexComponent.includes('role="tab"') &&
    searchableWorkIndexComponent.includes('aria-selected={activeId===item.id}') &&
    searchableWorkIndexComponent.includes("onClick={()=>setActiveId(item.id)}") &&
    searchableWorkIndexComponent.includes("<ToolProjectList") &&
    /activeId===["']all["']/.test(searchableWorkIndexComponent) &&
    searchableWorkIndexComponent.includes("categoryIds?.includes(activeId)"),
  "Work Index should filter and render the project cards for the active category",
);

assert.ok(
  !searchableWorkIndexComponent.includes("activeItem.summary") &&
    !searchableWorkIndexComponent.includes("workIndexSummary") &&
    searchableWorkIndexComponent.includes('role="tabpanel"') &&
    searchableWorkIndexComponent.includes("styles.workIndexRule") &&
    !searchableWorkIndexComponent.includes("activeItem.projects.map") &&
    !searchableWorkIndexComponent.includes("WorkIndexProjectRow") &&
    !searchableWorkIndexComponent.includes("<h2") &&
    !searchableWorkIndexComponent.includes("styles.sectionLabel"),
  "Work Index should not render explanatory copy, a section heading, or text-only project rows beneath the tabs",
);

assert.ok(
  searchableGlobalStyles.includes("--content-max:26rem;") &&
    searchableGlobalStyles.includes("--page-max:26rem;") &&
    searchableGlobalStyles.includes("@media(min-width:768px)") &&
    searchableGlobalStyles.includes("--page-max:72rem;"),
  "Desktop should widen the page shell to 72rem while keeping the 26rem reading measure",
);

assert.ok(
  searchableHomeStyles.includes("width:min(var(--page-max),calc(100%-var(--main-gutter)*2))") &&
    searchableHomeStyles.includes(".hero{") &&
    /\.hero\{[^}]*max-width:var\(--content-max\)/.test(searchableHomeStyles) &&
    /\.hero\{[^}]*margin:0auto/.test(searchableHomeStyles) &&
    searchableHomeStyles.includes(".workIndexList{display:flex;flex-direction:column;") &&
    searchableHomeStyles.includes("@media(min-width:768px)") &&
    searchableHomeStyles.includes(".workIndexList{display:grid;grid-template-columns:1fr1fr;") &&
    searchableHomeStyles.includes("@media(min-width:1200px)") &&
    searchableHomeStyles.includes(".workIndexList{grid-template-columns:1fr1fr1fr;"),
  "Home should use the wide page shell, center the intro, and show two then three work-card columns as the screen widens",
);

assert.ok(
  /\.workIndexTab\{[^}]*border:1pxsolidvar\(--border\)/.test(searchableHomeStyles) &&
    /\.workIndexTab\{[^}]*border-radius:999px/.test(searchableHomeStyles) &&
    /\.workIndexTab\{[^}]*background:transparent/.test(searchableHomeStyles) &&
    !/\.workIndexTab:hover\{[^}]*background:/.test(searchableHomeStyles) &&
    /\.workIndexTab\{[^}]*min-height:2\.5rem/.test(searchableHomeStyles) &&
    /\.workIndexTab\{[^}]*padding:0\.55rem1\.125rem/.test(searchableHomeStyles) &&
    /\.workIndexTab\{[^}]*font-size:var\(--fs-label\)/.test(searchableHomeStyles) &&
    /\.workIndexTab\{[^}]*color:var\(--text-secondary\)/.test(searchableHomeStyles) &&
    /\.workIndexTab:hover\{[^}]*color:var\(--text-primary\)/.test(searchableHomeStyles) &&
    /\.workIndexTab\[aria-selected="true"\]\{[^}]*background:var\(--text-primary\)/.test(searchableHomeStyles) &&
    /\.workIndexTab\[aria-selected="true"\]\{[^}]*color:#fff/.test(searchableHomeStyles) &&
    searchableHomeStyles.includes(".workIndexRule{") &&
    searchableHomeStyles.includes("width:100vw") &&
    searchableHomeStyles.includes("margin-left:calc(50%-50vw)") &&
    /\.workIndexRule\{[^}]*background:var\(--border\)/.test(searchableHomeStyles),
  "Work Index tabs should stay unfilled until selected, with label-size secondary-weight idle text",
);

assert.ok(
  searchableHeaderStyles.includes("justify-content:center") &&
    searchableHeaderStyles.includes("width:max-content") &&
    !searchableHeaderStyles.includes("justify-content:flex-start") &&
    !searchableHeaderStyles.includes("width:min(var(--page-max),100%)"),
  "Site header nav should stay a compact cluster centered on the screen",
);

assert.ok(
  searchableAboutStyles.includes("width:min(var(--page-max),calc(100%-var(--main-gutter)*2))") &&
    searchableAboutStyles.includes("max-width:var(--content-max)"),
  "About should use the wide page shell while keeping intro copy at reading width",
);

assert.ok(
  searchableToolProjectList.includes("item.preserveImageRatio?styles.toolVideoNaturalRatio:undefined") &&
    searchableToolProjectList.includes("[styles.toolVideo,"),
  "Tool project images should apply a per-item natural-ratio class",
);

assert.ok(
  searchableToolProjectList.includes("item.meta") &&
    searchableToolProjectList.includes("item.description") &&
    searchableToolProjectList.includes("item.tags?.length") &&
    searchableToolProjectList.includes("item.tags.map") &&
    searchableToolProjectList.includes("styles.toolCardSurface") &&
    searchableToolProjectList.includes("styles.toolMeta") &&
    searchableToolProjectList.includes("styles.toolDescription") &&
    searchableToolProjectList.includes("styles.toolTag"),
  "Project-card captions should render title, meta, description, and tags",
);

assert.ok(
  searchableToolProjectList.includes("constcardBody=(<>") &&
    searchableToolProjectList.includes("<divclassName={styles.toolCaption}>") &&
    searchableToolProjectList.includes("constcardContent=(") &&
    searchableToolProjectList.includes("className={styles.toolCardSurface}") &&
    searchableToolProjectList.includes("className={`${styles.toolCardSurface}${styles.toolCardLinkSurface}`}"),
  "Project card media and caption should live inside one full-card surface",
);

assert.ok(
  searchableHomeStyles.includes(".toolCardSurface{") &&
    searchableHomeStyles.includes("overflow:hidden") &&
    searchableHomeStyles.includes("border:1pxsolidvar(--border)") &&
    searchableHomeStyles.includes(".toolCardLinkSurface:hover.toolTitle"),
  "Project card surface should visually contain media, caption, and hover state",
);

assert.ok(
  !homePage.replace(/\s+/g, "").includes("showCaption={false}") &&
    searchableToolProjectList.includes("showCaption=true"),
  "Visual Works should use the same structured caption treatment as other project cards",
);

assert.ok(
  searchableToolProjectList.includes('item.availability!=="comingSoon"') &&
    searchableToolProjectList.includes("availableItems.slice(0,initialCount)") &&
    searchableToolProjectList.includes("items.length>collapsedItems.length"),
  "Collapsed project lists should keep coming-soon items behind Load more",
);

assert.ok(
  searchableHomeStyles.includes(".toolFrameBare.toolFrameNaturalRatio{height:auto;}") &&
    searchableHomeStyles.includes(".toolFrameBare.toolVideo.toolVideoNaturalRatio{aspect-ratio:auto;object-fit:contain;}"),
  "Natural-ratio visual cards should keep fixed width and derive height from the image",
);

for (const oldCopy of ["找我聊聊", "let'schat", "mailcopied!"]) {
  assert.ok(
    !searchableCopy.includes(oldCopy.replace(/\s+/g, "")),
    `Envelope mail should not use old copy: ${oldCopy}`,
  );
}

assert.ok(
  desktopLetterHoverStyles.includes("bottom: 12%;"),
  "Envelope letter should rise higher on desktop hover",
);

assert.ok(
  mobileLetterHoverStyles.includes("bottom: 12%;") &&
    mobileLetterHoverStyles.includes("right: 4%;"),
  "Envelope letter should keep the desktop-relative hover position on mobile",
);

assert.ok(
  searchableEnvelopeComponent.includes('<divclassName={styles.body}/>') &&
    searchableEnvelopeComponent.includes('<divclassName={styles.letterSlot}>') &&
    searchableEnvelopeComponent.includes('<divclassName={styles.letter}>'),
  "Envelope body and letter should be separate layers with a clipping slot",
);

assert.ok(
  !searchableEnvelopeComponent.includes("photoPlaceholder") &&
    !searchableEnvelopeStyles.includes(".photoPlaceholder"),
  "Envelope letter should not render the reserved photo placeholder",
);

assert.ok(
  searchableEnvelopeStyles.includes(".letterSlot{position:absolute;inset:0;z-index:-1;") &&
    searchableEnvelopeStyles.includes("overflow:hidden;") &&
    letterSlotHoverStyles.includes("z-index: 3;") &&
    letterSlotHoverStyles.includes("overflow: visible;") &&
    searchableEnvelopeStyles.includes(".flaps{position:absolute;inset:0;z-index:4;") &&
    searchableEnvelopeStyles.includes(".flapTopWrap{z-index:2;") &&
    searchableEnvelopeStyles.includes("transform:scaleY(1);") &&
    searchableEnvelopeStyles.includes("transform:translateY(2.25%)scaleY(-1);") &&
    !searchableEnvelopeStyles.includes("translateZ(2px)"),
  "Envelope letter should layer above the top flap but below side and bottom flaps on hover",
);

assert.ok(
  letterStyles.includes("border: 1px solid rgb(229 215 172 / 0.55);") &&
    letterStyles.includes("box-sizing: border-box;") &&
    letterStyles.includes("border-radius: 4px;"),
  "Envelope letter should have a subtle border without changing its box size",
);

assert.ok(
  letterStyles.includes("width: 82%;") &&
    letterStyles.includes("right: 8%;") &&
    desktopLetterHoverStyles.includes("right: 4%;"),
  "Envelope letter should be narrower and subtly shift right on hover",
);

console.log("Home content expectations passed");
