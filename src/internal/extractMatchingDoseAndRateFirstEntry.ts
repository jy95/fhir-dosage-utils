// Types
import type { Dosage, DoseAndRate } from "../types";
type KeyType = keyof DoseAndRate;

export function extractMatchingDoseAndRateFirstEntry<T extends KeyType>(
  dos: Dosage,
  key: T,
): DoseAndRate[T] | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }

  // Find the first entry that match criteria
  let doseAndRate = dos.doseAndRate.find((s) => s[key] !== undefined);

  // If not found, skip
  if (doseAndRate === undefined) {
    return undefined;
  }

  // return property
  return doseAndRate[key];
}
