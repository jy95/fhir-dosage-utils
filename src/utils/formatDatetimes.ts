import { isNotUndefined } from "../internal/undefinedChecks";

import type { Config } from "../types";

type Args = { config: Config; datetimes: string[] };
type Args2 = { config: Config; datetime: string | undefined };
type MappedDate = {
  date: Date;
  hasTimePart: boolean;
  hasMonths: boolean;
  hasDays: boolean;
};
type RenderStrategy = "yearOnly" | "yearAndMonthOnly" | "dateOnly" | "dateTime";
type RenderFunction = (params: RenderParams) => string;
type RenderParams = {
  config: Config;
  date: Date;
};

const strategies = {
  yearOnly: ({ config, date }) =>
    new Intl.DateTimeFormat(config.language, { year: "numeric" }).format(date),
  // e.g. 2024-03 => May 2024
  yearAndMonthOnly: ({ config, date }) =>
    new Intl.DateTimeFormat(config.language, {
      year: "numeric",
      month: "long",
    }).format(date),
  dateOnly: ({ config, date }) =>
    new Intl.DateTimeFormat(config.language, {
      ...generateDateStyleFormatOptions(config.dateTimeFormatOptions),
    }).format(date),
  dateTime: ({ config, date }) =>
    new Intl.DateTimeFormat(config.language, {
      ...generateDateStyleFormatOptions(config.dateTimeFormatOptions),
      ...generateTimeStyleFormatOptions(config.dateTimeFormatOptions),
    }).format(date),
} satisfies Record<RenderStrategy, RenderFunction>;

function generateDateStyleFormatOptions(
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormatOptions {
  if (isNotUndefined(options.dateStyle)) {
    return {
      dateStyle: options.dateStyle,
    };
  }

  const defaults: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return {
    ...options,
    ...defaults,
  };
}

function generateTimeStyleFormatOptions(
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormatOptions {
  if (isNotUndefined(options.timeStyle)) {
    return {
      timeStyle: options.timeStyle,
    };
  }

  const defaults: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return {
    ...options,
    ...defaults,
  };
}

function fromDateToMappedDate(datetime: string): MappedDate {
  let date = new Date(datetime);

  let hasTimePart = datetime.includes("T");
  let hyphensCount = datetime.split("-").length - 1;
  let hasMonths = hyphensCount >= 1;
  let hasDays = hyphensCount >= 2;

  return {
    date,
    hasTimePart,
    hasMonths,
    hasDays,
  };
}

// Generic function to map datetimes to user friendly date
// e.g. from 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
export function formatDatetimes({ config, datetimes }: Args): string[] {
  const entries = datetimes.map(fromDateToMappedDate);

  const result = entries.map(({ date, hasTimePart, hasMonths, hasDays }) => {
    const chosenStrategy: RenderStrategy = !hasMonths
      ? "yearOnly"
      : !hasDays
        ? "yearAndMonthOnly"
        : !hasTimePart
          ? "dateOnly"
          : "dateTime";

    return strategies[chosenStrategy]({ config, date });
  });

  return result;
}

export function formatDatetime({
  config,
  datetime,
}: Args2): string | undefined {
  if (!isNotUndefined(datetime)) {
    return undefined;
  }

  const result = formatDatetimes({ config, datetimes: [datetime] });
  return result[0];
}
