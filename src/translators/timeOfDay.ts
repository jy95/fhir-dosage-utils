import { fromListToString } from "../utils/fromListToString";
import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isArrayEmpty } from "../internal/isEmptyArray";

import type { DisplayOrderParams } from "../types";

/**
 * time during the day, in the format hh:mm:ss (a subset of [ISO8601] icon).
 * There is no date specified. Seconds must be provided due to schema type constraints but may be zero-filled
 * and may be ignored at receiver discretion
 */
function formatString(time: string): string {
  var parts = time.split(":");

  if (parts.length > 2 && parts[2] === "00") {
    parts.pop();
  }

  return parts.join(":");
}

export function transformTimeOfDayToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let timeOfDay = extractMatchingTimeRepeatField(dos, "timeOfDay");

  if (isArrayEmpty(timeOfDay)) {
    return undefined;
  }

  const timeOfDays = timeOfDay.map(formatString);
  const timeOfDaysAsString = fromListToString(i18next, timeOfDays);

  return i18next.t("fields.timeOfDay", {
    timeOfDay: timeOfDaysAsString,
    count: timeOfDays.length,
  });
}
