import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const homeStyles = await readFile(
  new URL("../src/app/[locale]/page.module.css", import.meta.url),
  "utf8",
);
const globalStyles = await readFile(
  new URL("../src/app/globals.css", import.meta.url),
  "utf8",
);
const heroBackgroundStyles = await readFile(
  new URL("../src/components/HeroShaderBackground.module.css", import.meta.url),
  "utf8",
);

const searchableHomeStyles = homeStyles.replace(/\s+/g, "");
const searchableGlobalStyles = globalStyles.replace(/\s+/g, "");
const searchableHeroBackgroundStyles = heroBackgroundStyles.replace(/\s+/g, "");

assert.ok(
  searchableGlobalStyles.includes("animation:openingLoaderFade2200ms") &&
    searchableGlobalStyles.includes("88%{opacity:1;visibility:visible;}"),
  "Opening loader should hold white through the cloud render buffer before fading",
);

assert.ok(
  searchableHomeStyles.includes(".hero>*{animation:heroReveal0.8scubic-bezier(0.16,1,0.3,1)both;}") &&
    searchableHomeStyles.includes("animation-delay:2.06s;") &&
    searchableHomeStyles.includes("animation-delay:2.2s;") &&
    searchableHomeStyles.includes("animation-delay:2.34s;") &&
    searchableHomeStyles.includes("animation-delay:2.48s;"),
  "Hero reveal should begin after the loader fade has exposed the page",
);

assert.ok(
  searchableHeroBackgroundStyles.includes("animation:cloudLayerReveal700msease-outboth;") &&
    searchableHeroBackgroundStyles.includes("@keyframescloudLayerReveal") &&
    searchableHeroBackgroundStyles.includes("from{opacity:0;}") &&
    searchableHeroBackgroundStyles.includes("to{opacity:0.94;}"),
  "Hero shader cloud layer should fade in after its client chunk renders",
);

console.log("Opening transition expectations passed");
