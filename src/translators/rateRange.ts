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
  let rateRange = dos.doseAndRate.find((s) => s.rateRange !== undefined);

  // If not found, skip
  if (rateRange === undefined) {
    return undefined;
  }

  // Turn range into a text
  const rangeText = fromRangeToString({ range: rateRange, config, i18next });

  // return the final string
  return i18next.t("fields.rateRange", {
    rangeText: rangeText,
  });
}
