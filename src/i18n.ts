// import all namespaces (for the default language, only)
import common from "./locales/en/common.json";
import unitsOfTime from "./locales/en/unitsOfTime.json";
import daysOfWeek from "./locales/en/daysOfWeek.json";
import eventTiming from "./locales/en/eventTiming.json";

export const defaultNS = "common";
export const resources = {
  en: {
    common,
    unitsOfTime,
    daysOfWeek,
    eventTiming
  },
} as const;