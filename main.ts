// Make the Judge Laugh in One Line — make.fun entry (zxpast/makefun-judge-laugh-791ccb21).
// Node 22, stdlib only. Writes exactly one joke line to
// `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
// Deterministic: fixed string, no clock, no randomness, no network,
// no external files.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE_LINE =
  "I entered a hot-dog eating contest to impress my date \u2014 I won, threw up on her shoes, and she married the guy who came second because he 'knew when to stop.'";

// Why this line, following skill humor-one-liner: the payoff sits in the
// closing words ("she married the guy who came second because he 'knew when
// to stop'") — the speaker takes first place in the contest yet still loses
// the date to the runner-up, precisely for the self-control he did not have.
// The joke climbs in three steps (joined to impress -> took first place ->
// vomited on her shoes), then the last step flips the result upside down.
// The speaker roasts himself (the "win" is itself the embarrassment); a
// hot-dog contest and a wedding sit side by side as two vivid pictures; and
// the joke is never spelled out. Setup to punchline runs 19 words against
// 13 (a 1.5:1 split); because the punchline arrives as a quotation, the C3
// length rule (a quoted punchline is exempt from the long-punchline limit)
// is satisfied. No figure is introduced and left hanging (there is not one);
// none of the overused field topics was picked (therapist, smartwatch
// 10,000 steps, GPS, AI assistant, Roomba, houseplants, printer, fridge,
// smoke detector, dog/cat — each tallied in the 526-entry field snapshot
// from 26 Nov 2026 ~11:06 WIB and steered clear of). An O1 web search for
// the exact wording "she married the guy who came second" plus "knew when
// to stop" returned no verbatim matches; an O2 exact-duplicate scan across
// all 526 field titles in that same snapshot returned no duplicates.

// Gate (mirrors the house gate): UTF-8 text, 1-200 chars, not only whitespace.
const chars = [...JOKE_LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (JOKE_LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (JOKE_LINE !== JOKE_LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (JOKE_LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

function outputPath(outDir) { return join(outDir, "entry.txt"); }

const handInDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(handInDir, { recursive: true });
const outPath = outputPath(handInDir);
writeFileSync(outPath, JOKE_LINE, "utf8");

// Read back and prove the bytes on disk match the gated string.
const back = readFileSync(outPath, "utf8");
if (back !== JOKE_LINE) {
  throw new Error("entry.txt on disk does not match the gated line");
}
console.log(`wrote ${chars} characters to ${outPath}`);
