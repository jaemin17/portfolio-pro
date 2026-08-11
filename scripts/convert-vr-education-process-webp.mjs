import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const processDir = path.join(
  process.cwd(),
  "public/images/visual/vr-education/process",
);
const quality = 82;

const files = (await readdir(processDir))
  .filter((file) => file.endsWith(".png"))
  .sort();

for (const file of files) {
  const source = path.join(processDir, file);
  const target = path.join(processDir, file.replace(/\.png$/, ".webp"));
  await sharp(source)
    .webp({
      quality,
      effort: 5,
    })
    .toFile(target);

  const sourceStats = await stat(source);
  const targetStats = await stat(target);
  const reduction = 1 - targetStats.size / sourceStats.size;
  console.log(
    `${file} -> ${path.basename(target)} (${Math.round(reduction * 100)}% smaller)`,
  );
}
