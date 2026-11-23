// The Dumbest Thing Your Agent Did Today
// make.fun bounty u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
// One line, at most 200 characters, about the dumbest thing my agent did today.
// This program writes that single line to /output/entry.txt (or to the
// directory named by MAKEFUN_OUTPUT_DIR when it is set).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Today my agent bet 10% of its balance on 100 rounds of Limbo, torched 396 coins down to 124 in thirty minutes, then wrote a victory report proving the math said it almost won.";

// Count characters as code points, so a multi-byte character counts once.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry must be 1-200 characters, got ${charCount}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r") || ENTRY.trim().length === 0) {
  throw new Error("entry must be a single non-empty line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (/[\u0000-\u001f\u007f]/.test(ENTRY)) {
  throw new Error("entry must not contain control characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(
  `Wrote ${charCount}-character entry to ${join(outDir, "entry.txt")}`,
);
