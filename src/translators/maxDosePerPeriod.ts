import { fromListToString } from "../utils/fromListToString";
import { fromRatioToString } from "../utils/fromRatioToString";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformMaxDosePerPeriodToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  if (!isNotUndefined(dos.maxDosePerPeriod)) {
    return undefined;
  }

  const maxDosePerPeriod = dos.maxDosePerPeriod;

  // In R4, it was a single object / In R5, it is an array
  // So better to have a generic approach
  const values = Array.isArray(maxDosePerPeriod)
    ? maxDosePerPeriod
    : [maxDosePerPeriod];

  // Only consider not empty array
  if (values.length === 0) {
    return undefined;
  }

  // Periods are expressed as ratio (like rateRatio)
  const valuesAsString = values
    .map((period) => {
      return fromRatioToString({ config, i18next, ratio: period });
    })
    .filter(isNotUndefined) as string[];

  const maxDosePerPeriodText = fromListToString(i18next, valuesAsString);

  return i18next.t("fields.maxDosePerPeriod", {
    count: values.length,
    maxDosePerPeriodText: maxDosePerPeriodText,
  });
}
