// Entry for make.fun's "The Funniest Excuse for Skipping a Meeting" bounty.
// The program writes one excuse line to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deterministic: no network, no randomness, the same line on every run.

// The excuse: a work-from-home commute of ten steps, treated as gridlock.
const excuse =
  "Sorry I missed the meeting, I got stuck in traffic between my bedroom and my desk. The commute is brutal.";

// The gate allows at most 200 characters; stay well inside it.
if (excuse.length > 200) {
  throw new Error(`excuse is ${excuse.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
