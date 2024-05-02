// Functions
import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isNotUndefined } from "../internal/undefinedChecks";

// Types
import type { DisplayOrderParams } from "../types";

export function transformDurationDurationMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  // Pickup the repeat interesting attributes
  let duration = extractMatchingTimeRepeatField(dos, "duration");
  let max = extractMatchingTimeRepeatField(dos, "durationMax");
  let unit = extractMatchingTimeRepeatField(dos, "durationUnit");

  // Do nothing if no unit, I am not a wizard
  if (!isNotUndefined(unit)) {
    return undefined;
  }

  return [
    // duration
    isNotUndefined(duration) &&
      i18next.t("fields.duration", {
        durationText: i18next.t(`unitsOfTime:withCount.${unit}`, {
          count: duration,
        }),
      }),
    // durationMax
    isNotUndefined(max) &&
      i18next.t("fields.durationMax", {
        durationMaxText: i18next.t(`unitsOfTime:withCount.${unit}`, {
          count: max,
        }),
      }),
  ]
    .filter((s) => s !== false)
    .join(" ");
}
