// https://www.i18next.com/overview/typescript

// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import UnitsOfTime from "../src/locales/en/UnitsOfTime.json";
import DaysOfWeek from "../src/locales/en/DaysOfWeek.json";
import EventTiming from "../src/locales/en/EventTiming.json";
import Common from "../src/locales/en/common.json";

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