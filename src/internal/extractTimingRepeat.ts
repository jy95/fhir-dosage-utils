import { isNotUndefined } from "./undefinedChecks";
import type { Dosage } from "../types";

export function extractTimingRepeat(dos: Dosage) {
  // If empty, return undefined
  if (!isNotUndefined(dos.timing?.repeat)) {
    return undefined;
  }

  return dos.timing.repeat;
}
