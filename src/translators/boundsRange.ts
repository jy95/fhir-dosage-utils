// types
import type { DisplayOrderParams } from "../types";

// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";
import { extractTimingRepeat } from "../internal/extractTimingRepeat";

export function transformBoundsRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let repeat = extractTimingRepeat(dos);

  // If empty, return undefined
  if (repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let boundsRange = repeat.boundsRange;

  // Do nothing if no boundsRange, I am not a wizard
  if (boundsRange === undefined) {
    return undefined;
  }

  // Turn range into a text
  const rangeText = fromRangeToString({
    range: boundsRange,
    config,
    i18next,
  });

  // Reject if empty
  if (rangeText === undefined) {
    return undefined;
  }

  // return the final string
  return i18next.t("fields.boundsRange", {
    rangeText: rangeText,
  });
}
