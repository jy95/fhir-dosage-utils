import i18next from "i18next";

// Function
import { fromListToString } from "../utils/fromListToString";

// Types
import type { Dosage } from "fhir/r4";

// Function to transform dayOfWeek into a string
export function transformDayOfWeekToText(dos: Dosage): string | undefined {
  // If empty, return undefined
  if (dos.timing == undefined || dos.timing.repeat == undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let dayOfWeek = repeat.dayOfWeek;

  // If empty, skip it
  if (dayOfWeek === undefined || dayOfWeek.length === 0) {
    return undefined;
  } else {
    // Turn it into a string
    const dayOfWeeks = dayOfWeek.map((dayCode) =>
      i18next.t(`daysOfWeek:${dayCode}`),
    );
    const dayOfWeeksAsString = fromListToString(dayOfWeeks);

    return i18next.t("fields.dayOfWeek.dayOfWeek", {
      count: dayOfWeek.length,
      dayOfWeek: dayOfWeeksAsString,
    });
  }
}
