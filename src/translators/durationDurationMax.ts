import i18next from "i18next";
import type { DisplayOrderParams } from "../types";

export function transformDurationDurationMaxToText({
  dos,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.timing === undefined || dos.timing.repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let duration = repeat.duration;
  let max = repeat.durationMax;
  let unit = repeat.durationUnit;

  // Do nothing if no unit, I am not a wizard
  if (unit === undefined) {
    return undefined;
  } else {
    return [
      // duration
      duration !== undefined &&
        i18next.t("fields.duration", {
          durationText: i18next.t(`unitsOfTime:withCount.${unit}`, {
            count: duration,
          }),
        }),
      // durationMax
      max !== undefined &&
        i18next.t("fields.durationMax", {
          durationMaxText: i18next.t(`unitsOfTime:withCount.${unit}`, {
            count: max,
          }),
        }),
    ]
      .filter((s) => s !== false)
      .join(" ");
  }
}
