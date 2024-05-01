// import all namespaces (for the default language, only)
import common from "./locales/en/common.json";
import unitsOfTime from "./locales/en/unitsOfTime.json";
import daysOfWeek from "./locales/en/daysOfWeek.json";
import eventTiming from "./locales/en/eventTiming.json";
import quantityComparator from "./locales/en/quantityComparator.json";

export const defaultNS = "common";
export const resources = {
  en: {
    common: common,
    unitsOfTime: unitsOfTime,
    daysOfWeek: daysOfWeek,
    eventTiming: eventTiming,
    quantityComparator: quantityComparator,
  },
} as const;
