// Functions
import { isNotUndefined } from "../internal/undefinedChecks";

// Types
import type { Dosage, DoseAndRate } from "../types";
type KeyType = keyof DoseAndRate;

export function extractMatchingDoseAndRateFirstEntry<T extends KeyType>(
  dos: Dosage,
  key: T,
): DoseAndRate[T] | undefined {
  // If empty, return undefined
  if (!isNotUndefined(dos.doseAndRate)) {
    return undefined;
  }

  // Find the first entry that match criteria
  let doseAndRate = dos.doseAndRate.find((s) => isNotUndefined(s[key]));

  // If not found, skip
  if (!isNotUndefined(doseAndRate)) {
    return undefined;
  }

  // return property
  return doseAndRate[key];
}
