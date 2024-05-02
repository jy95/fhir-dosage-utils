import { fromRangeToString } from "../utils/fromRangeToString";
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformDoseRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let doseRange = extractMatchingDoseAndRateFirstEntry(dos, "doseRange");

  if (!isNotUndefined(doseRange)) {
    return undefined;
  }

  const text = fromRangeToString({
    range: doseRange,
    config,
    i18next,
  });

  if (!isNotUndefined(text)) {
    return undefined;
  }

  return i18next.t("fields.doseRange", {
    rangeText: text,
  });
}
