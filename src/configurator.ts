import resourcesToBackend from "i18next-resources-to-backend";

import { defaultFromFHIRQuantityUnitToString } from "./utils/fromFHIRQuantityUnitToString";
import { defaultFromCodeableConceptToString } from "./utils/fromCodeableConceptToString";
import { defaultFromExtensionsToString } from "./utils/fromExtensionsToString";

import type { FromFHIRQuantityUnitToStringFct } from "./utils/fromFHIRQuantityUnitToString";
import type { FromCodeableConceptToStringFct } from "./utils/fromCodeableConceptToString";
import type { FromExtensionsToStringFct } from "./utils/fromExtensionsToString";

import type { DisplayOrder, I18InitOptions, NamespacesLocale } from "./types";

export interface Config {
  /**
   * BCP 47 language code to setup the library with
   * @defaultValue "en" (English)
   * @see [FAQ](https://jy95.github.io/fhir-dosage-utils/docs/faq) for the built-in languages
   * @see [I18next documentation](https://www.i18next.com/how-to/faq#how-should-the-language-codes-be-formatted) for the reasons behind BCP 47
   */
  language: string;
  /**
   * Function to turn a quantity unit (e.g UCUM "ml") into a string for humans (e.g "militier")
   * The choice to handle plural form or not is thus under the hands of people ;)
   * @see [defaultFromFHIRQuantityUnitToString](https://github.com/jy95/fhir-dosage-utils/blob/main/src/utils/fromFHIRQuantityUnitToString.ts) for default implementation
   * @see [FHIR definition of Quantity](https://build.fhir.org/datatypes.html#Quantity) for more info about the type itself
   */
  fromFHIRQuantityUnitToString: FromFHIRQuantityUnitToStringFct;
  /**
   * Function to turn a codeable concept (e.g SNOMED CT "311504000") into a string for humans (e.g "With or after food")
   * The choice to handle extension, local valueset, ... is thus under the hands of people ;)
   * @see [defaultFromCodeableConceptToString](https://github.com/jy95/fhir-dosage-utils/blob/main/src/utils/fromCodeableConceptToString.ts) for default implementation
   * @see [FHIR definition of CodeableConcept](https://build.fhir.org/datatypes.html#CodeableConcept) for more info about the type itself
   */
  fromCodeableConceptToString: FromCodeableConceptToStringFct;
  /**
   * Function to turn extension(s) into a string for humans.
   * The choice to handle national extensions, ... is thus under the hands of people ;)
   * @see [defaultFromExtensionsToString](https://github.com/jy95/fhir-dosage-utils/blob/main/src/utils/fromExtensionsToString.ts) for default implementation
   * @see [FHIR definition of Extension](https://build.fhir.org/extensibility.html#Extension) for more info about the type itself
   */
  fromExtensionsToString: FromExtensionsToStringFct;
  /**
   * Control the display order used by the algorithm
   * Useful when you want to turn on / off some specific rules for some reason
   * @defaultValue ["method", "doseQuantity", "doseRange", "rateRatio", "rateQuantity", "rateRange", "durationDurationMax", "frequencyFrequencyMaxPeriodPeriodMax", "offsetWhen", "dayOfWeek", "timeOfDay", "route", "site", "asNeeded", "boundsDuration", "boundsPeriod", "boundsRange", "countCountMax", "event", "code", "maxDosePerPeriod", "maxDosePerAdministration", "maxDosePerLifetime", "additionalInstruction", "patientInstruction"]
   * @see [DisplayOrderEnum](../enum/DisplayOrderEnum) for more info
   */
  displayOrder: DisplayOrder[];
  /**
   * Override separator between each part of "Dosage"
   * @defaultValue " - "
   */
  displaySeparator: string;
  /**
   * To control the formatting of dateTime objects.
   * If not provided, will use the defaults according locale e.g. "20/01/2024"
   * @defaultValue {}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
   */
  dateTimeFormatOptions: Intl.DateTimeFormatOptions;
  /**
   * I18next config
   * @see https://www.i18next.com/overview/configuration-options
   */
  i18nConfig: I18InitOptions;
}

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
  ] as DisplayOrder[],
  displaySeparator: " - ",
  dateTimeFormatOptions: {},
  i18nConfig: {
    backend: {
      backends: [
        resourcesToBackend(
          async (lng: string, ns: NamespacesLocale) =>
            import(`./locales/${lng}/${ns}.json`),
        ),
      ],
    },
  },
};
