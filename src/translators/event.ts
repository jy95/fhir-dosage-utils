// Functions
import { fromListToString } from "../utils/fromListToString";
import { formatDatetimes } from "../utils/formatDatetimes";

// types
import type { DisplayOrderParams } from "../types";

export function transformEventToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.timing?.event === undefined || dos.timing.event.length === 0) {
    return undefined;
  }

  // Generate the string version of them
  let events = dos.timing.event;

  // List to string
  let eventList = formatDatetimes({ config, datetimes: events });
  let eventsAsString = fromListToString(i18next, eventList);

  return i18next.t("fields.event.event", {
    count: events.length,
    event: eventsAsString,
  });
}
