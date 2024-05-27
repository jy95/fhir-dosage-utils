import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import {
  isNotUndefined,
  noUndefinedInArray,
  allUndefinedInArray,
} from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformCountCountMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let count = extractMatchingTimeRepeatField(dos, "count");
  let countMax = extractMatchingTimeRepeatField(dos, "countMax");

  if (allUndefinedInArray(count, countMax)) {
    return undefined;
  }

  if (noUndefinedInArray(count, countMax)) {
    return i18next.t("fields.countMax.countMax", {
      count: countMax,
      low: count,
    });
  }

  if (isNotUndefined(countMax)) {
    return i18next.t("fields.count.count", { count: countMax });
  }

  return i18next.t("fields.count.count", { count: count });
}
