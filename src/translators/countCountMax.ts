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
  // Pickup the repeat interesting attributes
  let count = extractMatchingTimeRepeatField(dos, "count");
  let countMax = extractMatchingTimeRepeatField(dos, "countMax");

  // Do nothing if no count, I am not a wizard
  if (allUndefinedInArray(count, countMax)) {
    return undefined;
  }

  // Three cases

  // 1. Both count & countMax are present
  if (noUndefinedInArray(count, countMax)) {
    return i18next.t("fields.countMax.countMax", {
      count: countMax,
      low: count,
    });
  }

  // 2. Only countMax is present
  if (isNotUndefined(countMax)) {
    return i18next.t("fields.count.count", { count: countMax });
  }

  // 3. Only count is present
  return i18next.t("fields.count.count", { count: count });
}
