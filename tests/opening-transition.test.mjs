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
  searchableHomeStyles.includes(".hero>*{animation:heroReveal0.6scubic-bezier(0.22,1,0.36,1)both;}") &&
    searchableHomeStyles.includes("animation-delay:1.78s;") &&
    searchableHomeStyles.includes("animation-delay:1.88s;") &&
    searchableHomeStyles.includes("animation-delay:1.98s;") &&
    searchableHomeStyles.includes("animation-delay:2.08s;"),
  "Hero reveal should begin under the extended loader fade for a softer handoff",
);

assert.ok(
  searchableHeroBackgroundStyles.includes("animation:cloudLayerReveal700msease-outboth;") &&
    searchableHeroBackgroundStyles.includes("@keyframescloudLayerReveal") &&
    searchableHeroBackgroundStyles.includes("from{opacity:0;}") &&
    searchableHeroBackgroundStyles.includes("to{opacity:0.94;}"),
  "Hero shader cloud layer should fade in after its client chunk renders",
);

console.log("Opening transition expectations passed");
