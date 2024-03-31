// Functions
import { fromListToString } from "../utils/fromListToString";

// Types
import type { DisplayOrderParams, I18N } from "../types";

type TimeKeys =
  | "MORN"
  | "MORN.early"
  | "MORN.late"
  | "NOON"
  | "AFT"
  | "AFT.early"
  | "AFT.late"
  | "EVE"
  | "EVE.early"
  | "EVE.late"
  | "NIGHT"
  | "PHS"
  | "IMD"
  | "HS"
  | "WAKE"
  | "C"
  | "CM"
  | "CD"
  | "CV"
  | "AC"
  | "ACM"
  | "ACD"
  | "ACV"
  | "PC"
  | "PCM"
  | "PCD"
  | "PCV";

// Function to extract times
function extractTime(minutes: number) {
  let days = Math.floor(minutes / 1440);
  let hours = Math.floor((minutes % 1440) / 60);
  let remainingMinutes = minutes % 60;

  return { days, hours, minutes: remainingMinutes };
}

// Function to transform offset into a string
function transformOffset(i18next: I18N, offset?: number): string | undefined {
  if (offset === undefined || offset <= 0) {
    return undefined;
  }

  // extract days / hours / minutes from it
  let time = extractTime(offset);

  // generate part
  let subParts = [
    // days
    time.days > 0
      ? i18next.t("unitsOfTime:withCount.d", { count: time.days })
      : undefined,
    // hours
    time.hours > 0
      ? i18next.t("unitsOfTime:withCount.h", { count: time.hours })
      : undefined,
    // minutes
    time.minutes > 0
      ? i18next.t("unitsOfTime:withCount.min", { count: time.minutes })
      : undefined,
  ].filter((s) => s !== undefined);

  return subParts.join(" ");
}

// Function to transform when[] into a string
function transformWhen(i18next: I18N, when?: string[]): string | undefined {
  // Only run when array is not empty
  if (when === undefined || when.length === 0) {
    return undefined;
  }

  // Turn it into a string
  const whens = (when as TimeKeys[]).map((whenCode) =>
    i18next.t(`eventTiming:${whenCode}`),
  );
  const finalString = fromListToString(whens);

  return finalString;
}

export function transformOffsetWhenToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.timing === undefined || dos.timing.repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let offset = repeat.offset;
  let when = repeat.when;

  // If both are undefined, don't do anything
  if (offset === undefined && when === undefined) {
    return undefined;
  }

  return [
    // offset part
    transformOffset(i18next, offset),
    // when part
    transformWhen(i18next, when),
  ]
    .filter((s) => s !== undefined)
    .join(" ");
}
