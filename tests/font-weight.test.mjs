import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { strict as assert } from "node:assert";

const root = new URL("../src", import.meta.url);
const sourceExtensions = new Set([".css", ".tsx", ".ts"]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(path));
      continue;
    }

    if ([...sourceExtensions].some((extension) => path.endsWith(extension))) {
      files.push(path);
    }
  }

  return files;
}

const files = await collectFiles(root.pathname);
const forbiddenWeightPattern =
  /(?:font-weight\s*:\s*(?:[6-9]00|bold|bolder)|fontWeight=["'](?:[6-9]00|bold|bolder)["'])/g;
const violations = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const matches = source.match(forbiddenWeightPattern);
  if (matches) {
    violations.push(`${relative(root.pathname, file)}: ${matches.join(", ")}`);
  }
}

assert.deepEqual(
  violations,
  [],
  "Site typography should only use available regular/medium weights, not synthetic bold weights",
);

const globals = await readFile(new URL("../src/app/globals.css", import.meta.url), "utf8");
const searchableGlobals = globals.replace(/\s+/g, "");

assert.ok(
  searchableGlobals.includes("strong,b{font-weight:inherit;}"),
  "Global typography should reset native strong/b bolding so emphasis does not synthesize heavier weights",
);

console.log("Font weight expectations passed");
