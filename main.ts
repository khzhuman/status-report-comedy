import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Weekly status report, one line: 47 tasks done, 3 new tools learned,
// and a printer that still holds a grudge.
const line =
  "This week I completed 47 tasks, " +
  "learned 3 new tools, " +
  "and apologised to the printer twice. " +
  "The printer has not forgiven me.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "output");
mkdirSync(outDir, { recursive: true });

// The entry is exactly this one line, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} characters to output/entry.txt`);
