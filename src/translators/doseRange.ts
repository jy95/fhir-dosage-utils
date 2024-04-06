// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";

// types
import type { DisplayOrderParams } from "../types";

export function transformDoseRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let doseRange = extractMatchingDoseAndRateFirstEntry(dos, "doseRange");

  // If not found, skip
  if (doseRange === undefined) {
    return undefined;
  }

  // Turn range into a text
  const text = fromRangeToString({
    range: doseRange,
    config,
    i18next,
  });

  // Reject if empty
  if (text === undefined) {
    return undefined;
  }

  return i18next.t("fields.doseRange", {
    rangeText: text,
  });
}
