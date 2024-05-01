// Functions
import { extractTimingRepeat } from "../internal/extractTimingRepeat";
import { isNotUndefined } from "../internal/isNotUndefined";

// Types
import type { DisplayOrderParams } from "../types";

export function transformFrequencyFrequencyMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let repeat = extractTimingRepeat(dos);

  // If empty, return undefined
  if (repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let frequency = repeat.frequency;
  let max = repeat.frequencyMax;

  // Do nothing if no frequency / frequencyMax, I am not a wizard
  if (frequency === undefined && max === undefined) {
    return undefined;
  }

  // Three cases

  // 1. Frequency and frequencyMax are present
  if (isNotUndefined([frequency, max])) {
    return i18next.t("fields.frequency.withfrequencyMax", {
      count: max,
      frequency: frequency,
    });
  }

  // 2. Only frequencyMax is present
  if (isNotUndefined([max])) {
    return i18next.t("fields.frequencyMax.frequencyMax", { count: max });
  }

  // 3. Only frequency is present
  return i18next.t("fields.frequency.onlyFrequency", { count: frequency });
}
