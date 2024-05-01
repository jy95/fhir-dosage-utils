// Functions
import { fromListToString } from "../utils/fromListToString";
import { extractTimingRepeat } from "../internal/extractTimingRepeat";

// Types
import type { DisplayOrderParams } from "../types";

/**
 * time during the day, in the format hh:mm:ss (a subset of [ISO8601] icon).
 * There is no date specified. Seconds must be provided due to schema type constraints but may be zero-filled
 * and may be ignored at receiver discretion
 */
function formatString(time: string): string {
  // Split the time string by ":"
  var parts = time.split(":");

  // Check if the last part (seconds) is "00", if so, remove it
  if (parts.length > 2 && parts[2] === "00") {
    parts.pop();
  }

  // Join the remaining parts with ":"
  return parts.join(":");
}

// Function to transform timeOfDay into a string
export function transformTimeOfDayToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let repeat = extractTimingRepeat(dos);

  // If empty, return undefined
  if (repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let timeOfDay = repeat.timeOfDay;

  // If empty, skip it
  if (timeOfDay === undefined || timeOfDay.length === 0) {
    return undefined;
  }

  // Turn it into a string
  const timeOfDays = timeOfDay.map(formatString);
  const timeOfDaysAsString = fromListToString(i18next, timeOfDays);

  return i18next.t("fields.timeOfDay", {
    timeOfDay: timeOfDaysAsString,
    count: timeOfDays.length,
  });
}
