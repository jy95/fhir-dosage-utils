// types
import type { DisplayOrderParams } from "../types";

// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";

export function transformBoundsRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.timing === undefined || dos.timing.repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let boundsRange = repeat.boundsRange;

  // Do nothing if no boundsRange, I am not a wizard
  if (boundsRange === undefined) {
    return undefined;
  } else {
    // Turn range into a text
    const rangeText = fromRangeToString({
      range: boundsRange,
      config,
      i18next,
    });

    // return the final string
    return i18next.t("fields.boundsRange", {
      rangeText: rangeText,
    });
  }
}
