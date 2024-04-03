// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";

// types
import type { DisplayOrderParams } from "../types";

export function transformRateRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }
  // Find the first entry that match criteria
  let doseAndRate = dos.doseAndRate.find((s) => s.rateRange !== undefined);

  // If not found, skip
  if (doseAndRate === undefined) {
    return undefined;
  }

  // Turn range into a text
  const rangeText = fromRangeToString({
    range: doseAndRate.rateRange!,
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
