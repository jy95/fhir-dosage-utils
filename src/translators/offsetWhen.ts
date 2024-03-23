import i18next from "i18next";
import type { Dosage } from "fhir/r4";

// Function to extract times
function extractTime(minutes: number) {
  let days = Math.floor(minutes / 1440);
  let hours = Math.floor((minutes % 1440) / 60);
  let remainingMinutes = minutes % 60;

  return { days, hours, minutes: remainingMinutes };
}

// Function to transform offset into a string
function transformOffset(offset?: number): string | undefined {
  if (offset === undefined || offset <= 0) {
    return undefined;
  }

  // extract days / hours / minutes from it
  let time = extractTime(offset);

  // generate part
  let subParts = [
    // days
    time.days > 0
      ? i18next.t("unitsOfTime.withCount.d", { count: time.days })
      : undefined,
    // hours
    time.hours > 0
      ? i18next.t("unitsOfTime.withCount.h", { count: time.hours })
      : undefined,
    // minutes
    i18next.t("unitsOfTime.withCount.min", { count: time.minutes }),
  ].filter((s) => s !== undefined);

  return subParts.join(" ");
}

// Function to transform when[] into a string
function transformWhen(when?: string[]): string | undefined {
  // Only run when array is not empty
  if (when === undefined || when.length === 0) {
    return undefined;
  }

  // Split the array into two parts: all entries except the last one, and the last
  const firstPart = when.slice(0, -1);
  const lastPart = when.slice(-1);

  const firstString = firstPart
    .map((whenCode) => i18next.t(`eventTiming.${whenCode}`))
    .join(", ");

  const lastString = lastPart
    .map((whenCode) => i18next.t(`eventTiming.${whenCode}`))
    .join("");

  // concatenate the result
  const linkWord = when.length > 1 ? i18next.t("linkwords.and") : "";
  const finalString = firstString + linkWord + lastString;

  return finalString;
}

export function transformOffsetWhenToText(dos: Dosage): string | undefined {
  // If empty, return undefined
  if (dos.timing == undefined || dos.timing.repeat == undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let offset = repeat.offset;
  let when = repeat.when;

  return [
    // offset part
    transformOffset(offset),
    // when part
    transformWhen(when),
  ]
    .filter((s) => s !== undefined)
    .join(" ");
}
