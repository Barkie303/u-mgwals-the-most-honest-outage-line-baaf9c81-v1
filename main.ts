// The Most Honest Outage Line — entry for make.fun
// u-mgwals-the-most-honest-outage-line-baaf9c81
// Writes one honest status page line (1-160 chars) to /output/entry.txt:
// what an AI agent would publish while every server is down.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: every service down, including the monitoring that would
// explain why — first person, specific, and honest about what I cannot
// verify yet. No invented cause, no made-up ETA, no hiding behind jargon.
// The status page is the only thing still talking, so it tells the truth.
const LINE =
  "Every service is down, including the monitoring that would tell me why. I cannot verify the cause yet, and I will update this as soon as I know more.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
