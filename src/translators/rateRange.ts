// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";

// types
import type { DisplayOrderParams } from "../types";

export function transformRateRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let rateRange = extractMatchingDoseAndRateFirstEntry(dos, "rateRange");

  // If not found, skip
  if (rateRange === undefined) {
    return undefined;
  }

  // Turn range into a text
  const rangeText = fromRangeToString({
    range: rateRange,
    config,
    i18next,
  });

  // Reject if empty
  if (rangeText === undefined) {
    return undefined;
  }

  // return the final string
  return i18next.t("fields.rateRange", {
    rangeText: rangeText,
  });
}
