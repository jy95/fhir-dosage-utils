import type { DisplayOrderParams } from "../types";

// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";
import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isNotUndefined } from "../internal/undefinedChecks";

export function transformBoundsRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let boundsRange = extractMatchingTimeRepeatField(dos, "boundsRange");

  // Do nothing if no boundsRange, I am not a wizard
  if (!isNotUndefined(boundsRange)) {
    return undefined;
  }

  // Turn range into a text
  const rangeText = fromRangeToString({
    range: boundsRange,
    config,
    i18next,
  });

  // Reject if empty
  if (!isNotUndefined(rangeText)) {
    return undefined;
  }

  // return the final string
  return i18next.t("fields.boundsRange", {
    rangeText: rangeText,
  });
}
