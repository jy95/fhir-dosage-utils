import { fromListToString } from "../utils/fromListToString";
import { formatDatetimes } from "../utils/formatDatetimes";
import { isArrayEmpty } from "../internal/isEmptyArray";

import type { DisplayOrderParams } from "../types";

export function transformEventToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let events = dos.timing?.event;
  if (isArrayEmpty(events)) {
    return undefined;
  }

  // List to string
  let eventList = formatDatetimes({ config, datetimes: events });
  let eventsAsString = fromListToString(i18next, eventList);

  return i18next.t("fields.event.event", {
    count: events.length,
    event: eventsAsString,
  });
}
