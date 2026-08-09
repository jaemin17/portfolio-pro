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

const searchableHomeStyles = homeStyles.replace(/\s+/g, "");
const searchableGlobalStyles = globalStyles.replace(/\s+/g, "");

assert.ok(
  searchableGlobalStyles.includes("animation:openingLoaderFade1600ms") &&
    searchableGlobalStyles.includes("84%{opacity:1;visibility:visible;}"),
  "Opening loader should hold white until late in the sequence before fading",
);

assert.ok(
  searchableHomeStyles.includes(".hero>*{animation:heroReveal0.6scubic-bezier(0.22,1,0.36,1)both;}") &&
    searchableHomeStyles.includes("animation-delay:1.18s;") &&
    searchableHomeStyles.includes("animation-delay:1.28s;") &&
    searchableHomeStyles.includes("animation-delay:1.38s;") &&
    searchableHomeStyles.includes("animation-delay:1.48s;"),
  "Hero reveal should begin under the loader fade for a softer handoff",
);

console.log("Opening transition expectations passed");
