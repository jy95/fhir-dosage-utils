import i18next from "i18next";

// types
import type { Config, Dosage } from "../types";

export function transformBoundsPeriodToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (
    dos.timing === undefined ||
    dos.timing.repeat === undefined ||
    dos.timing.repeat.boundsPeriod === undefined
  ) {
    return undefined;
  }

  // Generate the string version of them
  const boundsPeriod = dos.timing.repeat.boundsPeriod;
  const dateTimeFormat = new Intl.DateTimeFormat(
    config.language,
    config.dateTimeFormatOptions,
  );

  let start =
    boundsPeriod.start !== undefined
      ? dateTimeFormat.format(new Date(boundsPeriod.start))
      : undefined;

  let end =
    boundsPeriod.end !== undefined
      ? dateTimeFormat.format(new Date(boundsPeriod.end))
      : undefined;

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
