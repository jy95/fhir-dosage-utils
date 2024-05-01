import type { Dosage } from "../types";

export function extractTimingRepeat(dos: Dosage) {
  // If empty, return undefined
  if (dos.timing?.repeat === undefined) {
    return undefined;
  }

  return dos.timing.repeat;
}
