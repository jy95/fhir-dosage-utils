import { fromListToString } from "../utils/fromListToString";
import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isArrayEmpty } from "../internal/isEmptyArray";
import {
  isNotUndefined,
  allUndefinedInArray,
} from "../internal/undefinedChecks";

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

function extractTime(minutes: number) {
  let d = Math.floor(minutes / 1440);
  let h = Math.floor((minutes % 1440) / 60);
  let remainingMinutes = minutes % 60;

  return { d, h, min: remainingMinutes };
}

function transformOffset(i18next: I18N, offset?: number): string | undefined {
  if (!isNotUndefined(offset) || offset <= 0) {
    return undefined;
  }

  let time = extractTime(offset);
  let order = ["d", "h", "min"] as (keyof typeof time)[];

  return order
    .map((unit) =>
      time[unit] > 0
        ? i18next.t(`unitsOfTime:withCount.${unit}`, { count: time[unit] })
        : undefined,
    )
    .filter(isNotUndefined)
    .join(" ");
}

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

  if (allUndefinedInArray(offset, when)) {
    return undefined;
  }

  return [transformOffset(i18next, offset), transformWhen(i18next, when)]
    .filter(isNotUndefined)
    .join(" ");
}
