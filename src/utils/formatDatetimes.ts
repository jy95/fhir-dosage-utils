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

// Function to clean up the params for dateStyle situation
// Note: dateStyle and timeStyle can be used with each other,
// but not with other date-time component options (e.g. weekday, hour, month, etc.).
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

// Function to clean up the params for timeStyle situation
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

/**
 * Generic function to map datetimes to user friendly date
 * e.g. from 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
 */
export function formatDatetimes({ config, datetimes }: Args): string[] {
  let options = config.dateTimeFormatOptions;

  const entries: MappedDate[] = datetimes.map((datetime) => {
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
  });

  // Time to do the magic
  const result = entries.map(({ date, hasTimePart, hasMonths, hasDays }) => {
    // If only year is defined, print it fully (e.g. 2024)
    if (!hasMonths) {
      let df1 = new Intl.DateTimeFormat(config.language, {
        year: "numeric",
      });
      return df1.format(date);
    }

    // If only year and month are defined, print it nicely (e.g. 2024-03 => May 2024 )
    if (!hasDays) {
      let df2 = new Intl.DateTimeFormat(config.language, {
        year: "numeric",
        month: "long",
      });
      return df2.format(date);
    }

    // If only year / month and days are defined, print it according
    if (!hasTimePart) {
      let df3 = new Intl.DateTimeFormat(config.language, {
        ...generateDateStyleFormatOptions(options),
      });
      return df3.format(date);
    }

    // Otherwise, we have a full datetime
    let df4 = new Intl.DateTimeFormat(config.language, {
      ...generateDateStyleFormatOptions(options),
      ...generateTimeStyleFormatOptions(options),
    });
    return df4.format(date);
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
