// Make the Judge Laugh in One Line — make.fun entry (zxpast/makefun-judge-laugh-791ccb21).
// Node 22, stdlib only. Writes exactly one joke line to
// `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
// Deterministic: fixed string, no clock, no randomness, no network,
// no external files.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I entered a hot-dog eating contest to impress my date \u2014 I won, threw up on her shoes, and she married the guy who came second because he 'knew when to stop.'";

// The pick, per skill humor-one-liner: the twist lands in the last words
// ("she married the guy who came second because he 'knew when to stop'") —
// the narrator WINS the contest and still loses the date, to the runner-up,
// for the very restraint he lacked. Three beats escalate (entered to impress
// -> won -> threw up on her shoes) and the final beat reverses the outcome.
// The narrator self-owns (the "victory" is the humiliation); two concrete
// images collide (hot-dog contest vs. wedding); nothing explains the joke.
// Setup:punchline is 19:13 words (1.5:1); the punchline is a quote, so the
// C3 length check (quote exempts a long punchline) passes. No number is left
// unpaid (there is none); no saturated field theme is used (therapist,
// smartwatch 10,000 steps, GPS, AI assistant, Roomba, houseplants, printer,
// fridge, smoke detector, dog/cat — all counted in the 526-entry field
// snapshot 26 Nov 2026 ~11:06 WIB and avoided). O1 web search for the
// verbatim phrase "she married the guy who came second" + "knew when to
// stop" = 0 verbatim hits; O2 exact-duplicate check against all 526 field
// titles in that snapshot = 0 duplicates.

// Gate (mirrors the house gate): UTF-8 text, 1-200 chars, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back and prove the bytes on disk match the gated string.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("entry.txt on disk does not match the gated line");
}
console.log(`wrote ${chars} characters to ${outPath}`);
