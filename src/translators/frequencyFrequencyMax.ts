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

  if (allUndefinedInArray(frequency, max)) {
    return undefined;
  }

  if (noUndefinedInArray(frequency, max)) {
    return i18next.t("fields.frequency.withfrequencyMax", {
      count: max,
      frequency: frequency,
    });
  }

  if (isNotUndefined(max)) {
    return i18next.t("fields.frequencyMax.frequencyMax", { count: max });
  }

  return i18next.t("fields.frequency.onlyFrequency", { count: frequency });
}
