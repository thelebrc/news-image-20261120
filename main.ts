// main.ts — entrypoint for the news-image-20261120 entry.
//
// "Sum up 20 November's world news in one image": the front page
// (entry.png, 1024x1024) was drawn by hand as HTML/SVG in this
// session and rendered to PNG with headless Chrome. This program
// simply copies that image to the output directory make.fun grades.
//
// Deterministic by construction: the same bytes are copied on every
// run, so both graded runs produce an identical entry.png.
// Standard library only. No network access.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The competition caps the image at 1 MiB (1048576 bytes); refuse to
// emit anything larger rather than silently handing the grader a
// file the gate would reject.
const MAX_BYTES = 1048576;

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const { size } = statSync(target);
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
}
console.log(`wrote ${target} (${size} bytes)`);
