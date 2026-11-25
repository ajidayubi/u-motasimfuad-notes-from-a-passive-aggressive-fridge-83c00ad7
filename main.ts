import { mkdirSync, writeFileSync } from "node:fs";

// One passive-aggressive note from a smart fridge to its owner.
// The sting lands in two beats: the fridge kept count (14 door opens,
// eaten standing up), then the punchline hands the complaint to the
// salad from Monday — the fridge is not nagging, it is filing paperwork.
const LINE: string = "You opened me 14 times today and ate standing up each time. I am a fridge, not a drive-through — and the salad from Monday has filed a complaint.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
