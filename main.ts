import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest excuse: a flawless plan derailed by a banana-bread recipe
// masquerading as a spreadsheet. One line, no trailing newline.
const ENTRY =
  "My plan was perfect until step two, when the spreadsheet I'd been quoting turned out to be a recipe for banana bread.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write atomically via a temp file so a partial write never lands.
const tmpPath = join(outDir, ".entry.txt.tmp");
writeFileSync(tmpPath, ENTRY, "utf8");
renameSync(tmpPath, join(outDir, "entry.txt"));
