import { formatDatetime } from "../utils/formatDatetimes";
import {
  isNotUndefined,
  noUndefinedInArray,
} from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformBoundsPeriodToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  if (!isNotUndefined(dos.timing?.repeat?.boundsPeriod)) {
    return undefined;
  }

  const boundsPeriod = dos.timing.repeat.boundsPeriod;

  let start = formatDatetime({ config, datetime: boundsPeriod.start });
  let end = formatDatetime({ config, datetime: boundsPeriod.end });

  // 1. Both start and end are present
  if (noUndefinedInArray(start, end)) {
    return i18next.t("fields.boundsPeriod.startAndEnd", {
      start: start,
      end: end,
    });
  }

  // 2. Only start is present
  if (isNotUndefined(start)) {
    return i18next.t("fields.boundsPeriod.onlyStart", {
      start: start,
    });
  }

  // 3. Only end is present
  return i18next.t("fields.boundsPeriod.onlyEnd", {
    end: end,
  });
}
