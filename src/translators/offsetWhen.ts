import { fromListToString } from "../utils/fromListToString";
import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isArrayEmpty } from "../internal/isEmptyArray";
import {
  isNotUndefined,
  allUndefinedInArray,
} from "../internal/undefinedChecks";

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

  let time = extractTime(offset);

  let subParts = [
    time.days > 0
      ? i18next.t("unitsOfTime:withCount.d", { count: time.days })
      : undefined,
    time.hours > 0
      ? i18next.t("unitsOfTime:withCount.h", { count: time.hours })
      : undefined,
    time.minutes > 0
      ? i18next.t("unitsOfTime:withCount.min", { count: time.minutes })
      : undefined,
  ].filter(isNotUndefined);

  return subParts.join(" ");
}

// Function to transform when[] into a string
function transformWhen(i18next: I18N, when?: string[]): string | undefined {
  if (isArrayEmpty(when)) {
    return undefined;
  }

  const whens = (when as TimeKeys[]).map((whenCode) =>
    i18next.t(`eventTiming:${whenCode}`),
  );
  return fromListToString(i18next, whens);
}

export function transformOffsetWhenToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let offset = extractMatchingTimeRepeatField(dos, "offset");
  let when = extractMatchingTimeRepeatField(dos, "when");

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
    .filter(isNotUndefined)
    .join(" ");
}
