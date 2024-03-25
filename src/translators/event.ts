import i18next from "i18next";

// Functions
import { fromListToString } from "../utils/fromListToString";

// types
import type { Config, Dosage } from "../types";

export function transformEventToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (
    dos.timing == undefined ||
    dos.timing.event == undefined ||
    dos.timing.event.length === 0
  ) {
    return undefined;
  }

  // Generate the string version of them
  let events = dos.timing.event;
  const dateTimeFormat = new Intl.DateTimeFormat(
    config.language,
    config.dateTimeFormatOptions,
  );

  // List to string
  let eventList = events.map((dateISO8601) =>
    dateTimeFormat.format(new Date(dateISO8601)),
  );
  let eventsAsString = fromListToString(eventList);

  return i18next.t("fields.event.event", {
    count: events.length,
    event: eventsAsString,
  });
}
