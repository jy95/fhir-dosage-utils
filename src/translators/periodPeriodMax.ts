import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import {
  isNotUndefined,
  noUndefinedInArray,
} from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformPeriodPeriodMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let period = extractMatchingTimeRepeatField(dos, "period");
  let max = extractMatchingTimeRepeatField(dos, "periodMax");
  let unit = extractMatchingTimeRepeatField(dos, "periodUnit");

  if (!isNotUndefined(unit)) {
    return undefined;
  }

  // Three cases
  // 1. period and periodMax are present
  if (noUndefinedInArray(period, max)) {
    return i18next.t("fields.periodMax.withPeriod", {
      period: period,
      count: max,
      unit: i18next.t(`unitsOfTime:withoutCount.${unit}`, { count: max }),
    });
  }

  // 2. Only periodMax is present
  if (isNotUndefined(max)) {
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
