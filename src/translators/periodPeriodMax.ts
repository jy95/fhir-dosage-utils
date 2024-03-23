import i18next from "i18next";
import type { Dosage } from "fhir/r4";

export function transformFrequencyFrequencyMaxToText(
  dos: Dosage,
): string | undefined {
  // If empty, return undefined
  if (dos.timing == undefined || dos.timing.repeat == undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let period = repeat.period;
  let max = repeat.periodMax;
  let unit = repeat.periodUnit;

  // Do nothing if no unit, I am not a wizard
  if (unit === undefined) {
    return undefined;
  } else {
    // Three cases

    // 1. period and periodMax are present
    if (period !== undefined && max !== undefined) {
      return i18next.t("fields.periodMax.withPeriod", {
        period: period,
        count: max,
      });
    }
  }
}
