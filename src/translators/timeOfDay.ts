import i18next from "i18next";

// Functions
import { fromListToString } from "../utils/fromListToString";

// Types
import type { Dosage } from "fhir/r4";

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
export function transformTimeOfDayToText(dos: Dosage): string | undefined {
  // If empty, return undefined
  if (dos.timing == undefined || dos.timing.repeat == undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let timeOfDay = repeat.timeOfDay;

  // If empty, skip it
  if (timeOfDay === undefined || timeOfDay.length === 0) {
    return undefined;
  } else {
    // Turn it into a string
    const timeOfDays = timeOfDay.map(formatString);
    const timeOfDaysAsString = fromListToString(timeOfDays);

    return i18next.t("fields.timeOfDay", {
      timeOfDay: timeOfDaysAsString,
    });
  }
}
