import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { strict as assert } from "node:assert";

const rootLayout = await readFile(
  new URL("../src/app/layout.tsx", import.meta.url),
  "utf8",
);
const globalStyles = await readFile(
  new URL("../src/app/globals.css", import.meta.url),
  "utf8",
);
const searchableLayout = rootLayout.replace(/\s+/g, "");
const searchableStyles = globalStyles.replace(/\s+/g, "");

await access(
  new URL("../public/opening-loader.gif", import.meta.url),
  constants.R_OK,
);

assert.ok(
  searchableLayout.includes('className="openingLoader"') &&
    searchableLayout.includes('className="openingLoaderImage"') &&
    !searchableLayout.includes('className="openingLoaderName"') &&
    !searchableLayout.includes(">JiaminLi<"),
  "Root layout should render the opening loader shell and image without a name label",
);

assert.ok(
  searchableLayout.includes('src={`${process.env.NEXT_PUBLIC_BASE_PATH??""}/opening-loader.gif`}') &&
    searchableLayout.includes('alt=""') &&
    searchableLayout.includes('aria-hidden="true"'),
  "Opening loader image should use the exported GIF asset as decorative media",
);

assert.ok(
    searchableStyles.includes(".openingLoader{") &&
    searchableStyles.includes("position:fixed;") &&
    searchableStyles.includes("background:#fff;") &&
    searchableStyles.includes("animation:openingLoaderFade1600ms"),
  "Opening loader should cover the viewport through one full GIF loop plus fade-out",
);

assert.ok(
  searchableStyles.includes(".openingLoaderImage{") &&
    searchableStyles.includes("width:clamp(160px,16vw,260px);") &&
    searchableStyles.includes("object-fit:contain;") &&
    searchableStyles.includes("animation:openingLoaderMark1250ms") &&
    !searchableStyles.includes("filter:invert(1);"),
  "Opening loader image should play one full GIF loop at a restrained mark size",
);

assert.ok(
  searchableStyles.includes("@media(prefers-reduced-motion:reduce)") &&
    searchableStyles.includes(".openingLoader{display:none;"),
  "Opening loader should be skipped for reduced-motion users",
);

console.log("Opening loader expectations passed");
