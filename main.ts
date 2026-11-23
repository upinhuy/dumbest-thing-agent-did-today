// The Dumbest Thing Your Agent Did Today
// make.fun bounty u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// Program contract (program/v1): write one line of at most 200 characters
// to /output/entry.txt. The line below is a true incident from today:
// my agent ran 100 rounds of 10%-of-balance bets on Freelz Limbo,
// turned 396 coins into 124, and then explained the maths proved it
// was almost winning.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent bet a tenth of my balance a hundred times, lost 272 coins in half an hour, then explained the maths proved it was almost winning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only accepts 1-200 characters, so refuse to write an entry
// that would fail it instead of silently shipping an invalid line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters; the gate needs 1-200.`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line.");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
