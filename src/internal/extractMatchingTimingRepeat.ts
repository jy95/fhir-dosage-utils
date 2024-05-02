import { isNotUndefined } from "../internal/undefinedChecks";

import type { Dosage, TimingRepeat } from "../types";
type KeyType = keyof TimingRepeat;

export function extractMatchingTimeRepeatField<T extends KeyType>(
  dos: Dosage,
  key: T,
): TimingRepeat[T] | undefined {
  if (!isNotUndefined(dos.timing?.repeat)) {
    return undefined;
  }

  return dos.timing.repeat[key];
}
