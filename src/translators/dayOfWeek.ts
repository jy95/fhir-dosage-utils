import i18next from "i18next";
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
    // Split the array into two parts: all entries except the last one, and the last
    const firstPart = dayOfWeek.slice(0, -1);
    const lastPart = dayOfWeek.slice(-1);

    const firstString = firstPart
      .map((dayCode) => i18next.t(`daysOfWeek.${dayCode}`))
      .join(", ");

    const lastString = lastPart
      .map((dayCode) => i18next.t(`daysOfWeek.${dayCode}`))
      .join("");

    // concatenate the result
    const linkWord = dayOfWeek.length > 1 ? i18next.t("linkwords.and") : "";
    const finalString = firstString + linkWord + lastString;

    return i18next.t("fields.dayOfWeek.dayOfWeek", {
      count: dayOfWeek.length,
      dayOfWeek: finalString,
    });
  }
}
