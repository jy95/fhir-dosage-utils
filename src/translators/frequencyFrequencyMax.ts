import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import {
  isNotUndefined,
  noUndefinedInArray,
  allUndefinedInArray,
} from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformFrequencyFrequencyMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let frequency = extractMatchingTimeRepeatField(dos, "frequency");
  let max = extractMatchingTimeRepeatField(dos, "frequencyMax");

  // Do nothing if no frequency / frequencyMax, I am not a wizard
  if (allUndefinedInArray(frequency, max)) {
    return undefined;
  }

  // Three cases

  // 1. Frequency and frequencyMax are present
  if (noUndefinedInArray(frequency, max)) {
    return i18next.t("fields.frequency.withfrequencyMax", {
      count: max,
      frequency: frequency,
    });
  }

  // 2. Only frequencyMax is present
  if (isNotUndefined(max)) {
    return i18next.t("fields.frequencyMax.frequencyMax", { count: max });
  }

  // 3. Only frequency is present
  return i18next.t("fields.frequency.onlyFrequency", { count: frequency });
}
