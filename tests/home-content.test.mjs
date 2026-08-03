import { readFile } from "node:fs/promises";
import { strict as assert } from "node:assert";

const copy = await readFile(
  new URL("../src/i18n/copy.ts", import.meta.url),
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

const searchableCopy = copy.replace(/\s+/g, "");
const searchableEnvelopeStyles = envelopeStyles.replace(/\s+/g, "");
const searchableEnvelopeComponent = envelopeComponent.replace(/\s+/g, "");
const desktopLetterHoverStyles =
  envelopeStyles.match(/\.envelope:hover \.letter,\n\.envelope:focus-within \.letter \{([\s\S]*?)\n\}/)?.[1] ?? "";
const mobileLetterHoverStyles =
  envelopeStyles.match(/@media \(max-width: 809px\) \{[\s\S]*?\.envelope:hover \.letter,\n  \.envelope:focus-within \.letter \{([\s\S]*?)\n  \}/)?.[1] ?? "";

const requiredCopy = [
  "Visual Works",
  "VR 教育与实训",
  "/videos/visual/home-vr-education.mp4",
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

for (const oldCopy of ["找我聊聊", "let'schat", "mailcopied!"]) {
  assert.ok(
    !searchableCopy.includes(oldCopy.replace(/\s+/g, "")),
    `Envelope mail should not use old copy: ${oldCopy}`,
  );
}

assert.ok(
  desktopLetterHoverStyles.includes("bottom: 5%;"),
  "Envelope letter should rise higher on desktop hover",
);

assert.ok(
  mobileLetterHoverStyles.includes("bottom: 1%;"),
  "Envelope letter should rise higher on mobile hover",
);

assert.ok(
  searchableEnvelopeComponent.includes('<divclassName={styles.body}/>') &&
    searchableEnvelopeComponent.includes('<divclassName={styles.letter}>'),
  "Envelope body and letter should be separate layers",
);

assert.ok(
  searchableEnvelopeStyles.includes(".letter{position:absolute;z-index:1;") &&
    desktopLetterHoverStyles.includes("z-index: 3;") &&
    searchableEnvelopeStyles.includes(".flaps{position:absolute;inset:0;z-index:4;") &&
    searchableEnvelopeStyles.includes(".flapTopWrap{z-index:2;") &&
    searchableEnvelopeStyles.includes("transform:scaleY(1);") &&
    searchableEnvelopeStyles.includes("transform:translateY(2.25%)scaleY(-1);") &&
    !searchableEnvelopeStyles.includes("translateZ(2px)"),
  "Envelope letter should layer above the top flap but below side and bottom flaps on hover",
);

console.log("Home content expectations passed");
