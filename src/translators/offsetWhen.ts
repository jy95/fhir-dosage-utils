// Functions
import { fromListToString } from "../utils/fromListToString";
import { extractTimingRepeat } from "../internal/extractTimingRepeat";
import { isArrayEmpty } from "../internal/isEmptyArray";
import {
  isNotUndefined,
  allUndefinedInArray,
} from "../internal/undefinedChecks";

// Types
import type {
  DisplayOrderParams,
  I18N,
  WhenTimeKeys as TimeKeys,
} from "../types";

// Function to extract times
function extractTime(minutes: number) {
  let days = Math.floor(minutes / 1440);
  let hours = Math.floor((minutes % 1440) / 60);
  let remainingMinutes = minutes % 60;

  return { days, hours, minutes: remainingMinutes };
}

// Function to transform offset into a string
function transformOffset(i18next: I18N, offset?: number): string | undefined {
  if (!isNotUndefined(offset) || offset <= 0) {
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
  ].filter(isNotUndefined);

  return subParts.join(" ");
}

// Function to transform when[] into a string
function transformWhen(i18next: I18N, when?: string[]): string | undefined {
  // Only run when array is not empty
  if (isArrayEmpty(when)) {
    return undefined;
  }

  // Turn it into a string
  const whens = (when as TimeKeys[]).map((whenCode) =>
    i18next.t(`eventTiming:${whenCode}`),
  );
  return fromListToString(i18next, whens);
}

export function transformOffsetWhenToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let repeat = extractTimingRepeat(dos);

  // If empty, return undefined
  if (!isNotUndefined(repeat)) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let offset = repeat.offset;
  let when = repeat.when;

  // If both are undefined, don't do anything
  if (allUndefinedInArray(offset, when)) {
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
