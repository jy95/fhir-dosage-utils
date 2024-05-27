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

  if (noUndefinedInArray(period, max)) {
    return i18next.t("fields.periodMax.withPeriod", {
      period: period,
      count: max,
      unit: i18next.t(`unitsOfTime:withoutCount.${unit}`, { count: max }),
    });
  }

  if (isNotUndefined(max)) {
    return i18next.t("fields.periodMax.onlyPeriodMax", {
      count: max,
      unit: i18next.t(`unitsOfTime:withoutCount.${unit}`, { count: max }),
    });
  }

  return i18next.t("fields.period.period", {
    count: period,
    unit: i18next.t(`unitsOfTime:withoutCount.${unit}`, { count: period }),
  });
}
