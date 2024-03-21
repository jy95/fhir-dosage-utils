// https://www.i18next.com/overview/typescript

// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import UnitsOfTime from "../locales/en/UnitsOfTime.json";
import DaysOfWeek from "../locales/en/DaysOfWeek.json";
import EventTiming from "../locales/en/EventTiming.json";
import Common from "../locales/en/common.json";

declare module "i18next" {
    // Extend CustomTypeOptions
    interface CustomTypeOptions {
        // custom namespace type, if you changed it
        defaultNS: "common";
        // custom resources type
        resources: {
            common: typeof Common;
            unitsOfTime: typeof UnitsOfTime;
            daysOfWeek: typeof DaysOfWeek;
            eventTiming: typeof EventTiming;
        }
    }
}