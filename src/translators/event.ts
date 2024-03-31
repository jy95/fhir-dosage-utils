import i18next from "i18next";

// Functions
import { fromListToString } from "../utils/fromListToString";
import { formatDatetimes } from "../utils/formatDatetimes";

// types
import type { DisplayOrderParams } from "../types";

export function transformEventToText({
  dos,
  config,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (
    dos.timing === undefined ||
    dos.timing.event === undefined ||
    dos.timing.event.length === 0
  ) {
    return undefined;
  }

  // Generate the string version of them
  let events = dos.timing.event;

  // List to string
  let eventList = formatDatetimes({ config, datetimes: events });
  let eventsAsString = fromListToString(eventList);

  return i18next.t("fields.event.event", {
    count: events.length,
    event: eventsAsString,
  });
}
