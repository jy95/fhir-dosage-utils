import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformDurationDurationMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let duration = extractMatchingTimeRepeatField(dos, "duration");
  let max = extractMatchingTimeRepeatField(dos, "durationMax");
  let unit = extractMatchingTimeRepeatField(dos, "durationUnit");

  if (!isNotUndefined(unit)) {
    return undefined;
  }

  return [
    isNotUndefined(duration) &&
      i18next.t("fields.duration", {
        durationText: i18next.t(`unitsOfTime:withCount.${unit}`, {
          count: duration,
        }),
      }),
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
