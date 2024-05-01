// Functions
import { formatDatetime } from "../utils/formatDatetimes";

// types
import type { DisplayOrderParams } from "../types";

export function transformBoundsPeriodToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.timing?.repeat?.boundsPeriod === undefined) {
    return undefined;
  }

  // Generate the string version of them
  const boundsPeriod = dos.timing.repeat.boundsPeriod;

  let start = formatDatetime({ config, datetime: boundsPeriod.start });
  let end = formatDatetime({ config, datetime: boundsPeriod.end });

  // Three cases

  // 1. Both start and end are present
  if (start !== undefined && end !== undefined) {
    return i18next.t("fields.boundsPeriod.startAndEnd", {
      start: start,
      end: end,
    });
  }

  // 2. Only start is present
  if (start !== undefined) {
    return i18next.t("fields.boundsPeriod.onlyStart", {
      start: start,
    });
  }

  // 3. Only end is present
  return i18next.t("fields.boundsPeriod.onlyEnd", {
    end: end,
  });
}
