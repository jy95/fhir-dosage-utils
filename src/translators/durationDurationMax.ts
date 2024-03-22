import i18next from "i18next";
import type { Dosage } from "fhir/r4";

export function transformDurationDurationMaxToText(
  dos: Dosage,
): string | undefined {
  // If empty, return undefined
  if (dos.timing == undefined || dos.timing.repeat == undefined) {
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
    // concatenate duration and durationMax, if present
    return [
      duration !== undefined &&
        i18next.t("fields.duration", {
          durationText: i18next.t(`unitsOfTime.${unit}`, { count: duration }),
        }),
      max !== undefined &&
        i18next.t("fields.duration", {
          durationText: i18next.t(`unitsOfTime.${unit}`, { count: duration }),
        }),
    ]
      .filter((s) => s !== undefined)
      .join(" ");
  }
}
