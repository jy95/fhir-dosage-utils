// types
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
  return {
    year:
      options.dateStyle === undefined ? options.year || "numeric" : undefined,
    month:
      options.dateStyle === undefined ? options.month || "2-digit" : undefined,
    day: options.dateStyle === undefined ? options.day || "2-digit" : undefined,
    weekday: options.dateStyle === undefined ? options.weekday : undefined,
  };
}

// Function to clean up the params for timeStyle situation
function generateTimeStyleFormatOptions(
  options: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormatOptions {
  return {
    hour:
      options.timeStyle === undefined ? options.hour || "2-digit" : undefined,
    minute:
      options.timeStyle === undefined ? options.minute || "2-digit" : undefined,
    second:
      options.timeStyle === undefined ? options.second || "2-digit" : undefined,
  };
}

/**
 * Generic function to map datetimes to user friendly date
 * e.g. from 2018, 1973-06, 1905-08-23, 2015-02-07T13:28:17-05:00 or 2017-01-01T00:00:00.000Z
 */
export function formatDatetimes({ config, datetimes }: Args): string[] {
  let options = config.dateTimeFormatOptions;

  // prepare data for algorithm below
  const entries: MappedDate[] = datetimes.map((datetime) => {
    // Convert it to date
    let date = new Date(datetime);

    // other properties
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
        // retrieve value from user
        dateStyle: options.dateStyle,
        // fallback if dateStyle is not defined
        ...generateDateStyleFormatOptions(options),
      });
      return df3.format(date);
    }

    // Otherwise, we have a full datetime
    let df4 = new Intl.DateTimeFormat(config.language, {
      // retrieve value from user
      dateStyle: options.dateStyle,
      timeStyle: options.timeStyle,
      // fallback if dateStyle / timeStyle is not defined
      ...generateDateStyleFormatOptions(options),
      ...generateTimeStyleFormatOptions(options),
    });
    return df4.format(date);
  });

  return result;
}

// Function to invoke only one formatDatetimes, with the addition condition that object could be undefined
export function formatDatetime({
  config,
  datetime,
}: Args2): string | undefined {
  // Can't do magic ;)
  if (datetime === undefined) {
    return undefined;
  }

  // Invoke previous function, and pick up the first entry
  const result = formatDatetimes({ config, datetimes: [datetime] });
  return result[0];
}
