// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";
import { isNotUndefined } from "../internal/undefinedChecks";

// types
import type { DisplayOrderParams } from "../types";

export function transformRateRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let rateRange = extractMatchingDoseAndRateFirstEntry(dos, "rateRange");

  // If not found, skip
  if (!isNotUndefined(rateRange)) {
    return undefined;
  }

  // Turn range into a text
  const rangeText = fromRangeToString({
    range: rateRange,
    config,
    i18next,
  });

  // Reject if empty
  if (!isNotUndefined(rangeText)) {
    return undefined;
  }

  // return the final string
  return i18next.t("fields.rateRange", {
    rangeText: rangeText,
  });
}
