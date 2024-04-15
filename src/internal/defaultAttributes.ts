// Types
import type { Config } from "../types";

import { defaultFromFHIRQuantityUnitToString } from "../utils/fromFHIRQuantityUnitToString";
import { defaultFromCodeableConceptToString } from "../utils/fromCodeableConceptToString";
import { defaultFromExtensionsToString } from "../utils/fromExtensionsToString";

// default attributes
export const defaultAttributes: Config = {
  language: "en",
  fromFHIRQuantityUnitToString: defaultFromFHIRQuantityUnitToString,
  fromCodeableConceptToString: defaultFromCodeableConceptToString,
  fromExtensionsToString: defaultFromExtensionsToString,
  displayOrder: [
    "method",
    "doseQuantity",
    "doseRange",
    "rateRatio",
    "rateQuantity",
    "rateRange",
    "durationDurationMax",
    "frequencyFrequencyMaxPeriodPeriodMax",
    "offsetWhen",
    "dayOfWeek",
    "timeOfDay",
    "route",
    "site",
    "asNeeded",
    "boundsDuration",
    "boundsPeriod",
    "boundsRange",
    "countCountMax",
    "event",
    "code",
    "maxDosePerPeriod",
    "maxDosePerAdministration",
    "maxDosePerLifetime",
    "additionalInstruction",
    "patientInstruction",
  ],
  displaySeparator: " - ",
  dateTimeFormatOptions: {},
};
