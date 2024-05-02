// Function
import { fromListToString } from "../utils/fromListToString";
import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isArrayEmpty } from "../internal/isEmptyArray";

// Types
import type { DisplayOrderParams } from "../types";

// Function to transform dayOfWeek into a string
export function transformDayOfWeekToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let dayOfWeek = extractMatchingTimeRepeatField(dos, "dayOfWeek");

  // If empty, skip it
  if (isArrayEmpty(dayOfWeek)) {
    return undefined;
  }

  // Turn it into a string
  const dayOfWeeks = dayOfWeek.map((dayCode) =>
    i18next.t(`daysOfWeek:${dayCode}`),
  );
  const dayOfWeeksAsString = fromListToString(i18next, dayOfWeeks);

  return i18next.t("fields.dayOfWeek.dayOfWeek", {
    count: dayOfWeek.length,
    dayOfWeek: dayOfWeeksAsString,
  });
}
