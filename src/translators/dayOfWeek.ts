import { fromListToString } from "../utils/fromListToString";
import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isArrayEmpty } from "../internal/isEmptyArray";

import type { DisplayOrderParams } from "../types";

export function transformDayOfWeekToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let dayOfWeek = extractMatchingTimeRepeatField(dos, "dayOfWeek");

  if (isArrayEmpty(dayOfWeek)) {
    return undefined;
  }

  const dayOfWeeks = dayOfWeek.map((dayCode) =>
    i18next.t(`daysOfWeek:${dayCode}`),
  );
  const dayOfWeeksAsString = fromListToString(i18next, dayOfWeeks);

  return i18next.t("fields.dayOfWeek.dayOfWeek", {
    count: dayOfWeek.length,
    dayOfWeek: dayOfWeeksAsString,
  });
}
