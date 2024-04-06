import { extractTimingRepeat } from "../internal/extractTimingRepeat";

import type { DisplayOrderParams } from "../types";

export function transformPeriodPeriodMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let repeat = extractTimingRepeat(dos);

  // If empty, return undefined
  if (repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
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
        unit: i18next.t(`unitsOfTime:withoutCount.${unit}`, { count: max }),
      });
    }

    // 2. Only periodMax is present
    if (max !== undefined) {
      return i18next.t("fields.periodMax.onlyPeriodMax", {
        count: max,
        unit: i18next.t(`unitsOfTime:withoutCount.${unit}`, { count: max }),
      });
    }

    // 3. Only period present
    return i18next.t("fields.period.period", {
      count: period,
      unit: i18next.t(`unitsOfTime:withoutCount.${unit}`, { count: period }),
    });
  }
}
