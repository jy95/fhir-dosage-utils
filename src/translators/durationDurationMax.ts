// Functions
import { extractTimingRepeat } from "../internal/extractTimingRepeat";
import { isNotUndefined } from "../internal/isNotUndefined";

// Types
import type { DisplayOrderParams } from "../types";

export function transformDurationDurationMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let repeat = extractTimingRepeat(dos);

  // If empty, return undefined
  if (repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let duration = repeat.duration;
  let max = repeat.durationMax;
  let unit = repeat.durationUnit;

  // Do nothing if no unit, I am not a wizard
  if (unit === undefined) {
    return undefined;
  }

  return [
    // duration
    isNotUndefined([duration]) &&
      i18next.t("fields.duration", {
        durationText: i18next.t(`unitsOfTime:withCount.${unit}`, {
          count: duration,
        }),
      }),
    // durationMax
    isNotUndefined([max]) &&
      i18next.t("fields.durationMax", {
        durationMaxText: i18next.t(`unitsOfTime:withCount.${unit}`, {
          count: max,
        }),
      }),
  ]
    .filter((s) => s !== false)
    .join(" ");
}
