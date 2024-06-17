import { isNotUndefined } from "../internal/undefinedChecks";

import type { Dosage, DoseAndRate } from "../types";
type KeyType = keyof DoseAndRate;

export function extractMatchingDoseAndRateFirstEntry<T extends KeyType>(
  dos: Dosage,
  key: T,
): DoseAndRate[T] | undefined {
  if (!isNotUndefined(dos.doseAndRate)) {
    return undefined;
  }

  let doseAndRate = dos.doseAndRate.find((s) => isNotUndefined(s[key]));

  if (!isNotUndefined(doseAndRate)) {
    return undefined;
  }

  return doseAndRate[key];
}
