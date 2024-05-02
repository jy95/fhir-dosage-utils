// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";
import { isNotUndefined } from "../internal/undefinedChecks";

// types
import type { DisplayOrderParams } from "../types";

export function transformDoseRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let doseRange = extractMatchingDoseAndRateFirstEntry(dos, "doseRange");

  // If not found, skip
  if (!isNotUndefined(doseRange)) {
    return undefined;
  }

  // Turn range into a text
  const text = fromRangeToString({
    range: doseRange,
    config,
    i18next,
  });

  // Reject if empty
  if (!isNotUndefined(text)) {
    return undefined;
  }

  return i18next.t("fields.doseRange", {
    rangeText: text,
  });
}
