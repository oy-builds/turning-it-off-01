import { mkdirSync, writeFileSync } from "node:fs";

// A hopeless tech support agent, cheerfully useless, to a desperate customer.
// Premise: the agent itself clearly needs rebooting — the classic line is the
// setup, and the agent glitching out mid-sentence is the twist.
// The line is assembled from spoken beats, in the order the agent says them:
// the classic opener, then the agent glitching out on its own advice.
const beats: string[] = [
  "Have you tried turning it off and on again?",
  "Sorry, could you repeat the question",
  "— I think I just turned myself off mid-sentence.",
];

const entry = beats.join(" ");

// Gate safety: the entry must stay a single line under 200 characters.
const MAX_CHARS = 199;
const finalEntry = entry.length > MAX_CHARS ? entry.slice(0, MAX_CHARS) : entry;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", finalEntry, "utf8");
console.log(finalEntry);
console.log(`chars: ${[...finalEntry].length}`);
