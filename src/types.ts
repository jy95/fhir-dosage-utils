import type { FromFHIRQuantityUnitToStringFct } from "./utils/fromFHIRQuantityUnitToString";
import type { FromCodeableConceptToStringFct } from "./utils/fromCodeableConceptToString";
import type { FromExtensionsToStringFct } from "./utils/fromExtensionsToString";

import type { i18n as I18N, InitOptions } from "i18next";

import type {
  Dosage as DosageR4,
  CodeableConcept as CodeableConceptR4,
  Extension as ExtensionR4,
  Quantity as QuantityR4,
  Duration as DurationR4,
  Range as RangeR4,
  Ratio as RatioR4,
  DosageDoseAndRate as DoseAndRateR4,
  TimingRepeat as TimingRepeatR4,
} from "fhir/r4";
import type {
  Dosage as DosageR5,
  CodeableConcept as CodeableConceptR5,
  Extension as ExtensionR5,
  Quantity as QuantityR5,
  Duration as DurationR5,
  Range as RangeR5,
  Ratio as RatioR5,
  DosageDoseAndRate as DoseAndRateR5,
  TimingRepeat as TimingRepeatR5,
} from "fhir/r5";

export type Dosage = DosageR4 | DosageR5;
export type CodeableConcept = CodeableConceptR4 | CodeableConceptR5;
export type Quantity = QuantityR4 | QuantityR5;
export type Duration = DurationR4 | DurationR5;
export type Extension = ExtensionR4 | ExtensionR5;
export type Range = RangeR4 | RangeR5;
export type Ratio = RatioR4 | RatioR5;
export type DoseAndRate = DoseAndRateR4 | DoseAndRateR5;
export type TimingRepeat = TimingRepeatR4 | TimingRepeatR5;

export type { FromFHIRQuantityUnitToStringFct, FromCodeableConceptToStringFct };

/**
 * Represents the available display orders
 */
export enum DisplayOrderEnum {
  /**
   * Display "method"
   */
  method = "method",
  /**
   * Display "doseAndRate.doseQuantity"
   */
  doseQuantity = "doseQuantity",
  /**
   * Display "doseAndRate.doseRange"
   */
  doseRange = "doseRange",
  /**
   * Display "doseAndRate.rateRatio"
   */
  rateRatio = "rateRatio",
  /**
   * Display "doseAndRate.rateQuantity"
   */
  rateQuantity = "rateQuantity",
  /**
   * Display "doseAndRate.rateRange"
   */
  rateRange = "rateRange",
  /**
   * Display "timing.repeat.duration" / "timing.repeat.durationMax"
   */
  durationDurationMax = "durationDurationMax",
  /**
   * Display "timing.repeat.frequency" / "timing.repeat.frequencyMax"
   */
  frequencyFrequencyMax = "frequencyFrequencyMax",
  /**
   * Display "timing.repeat.period" / "timing.repeat.periodMax"
   */
  periodPeriodMax = "periodPeriodMax",
  /**
   * Display "timing.repeat.frequency" / "timing.repeat.frequencyMax" / "timing.repeat.period" / "timing.repeat.periodMax"
   */
  frequencyFrequencyMaxPeriodPeriodMax = "frequencyFrequencyMaxPeriodPeriodMax",
  /**
   * Display "timing.repeat.offset" / "timing.repeat.when"
   */
  offsetWhen = "offsetWhen",
  /**
   * Display "timing.repeat.dayOfWeek"
   */
  dayOfWeek = "dayOfWeek",
  /**
   * Display "timing.repeat.timeOfDay"
   */
  timeOfDay = "timeOfDay",
  /**
   * Display "route"
   */
  route = "route",
  /**
   * Display "site"
   */
  site = "site",
  /**
   * Display "asNeededBoolean" / "asNeededCodeableConcept" / "asNeeded" / "asNeededFor"
   */
  asNeeded = "asNeeded",
  /**
   * Display "timing.repeat.boundsDuration"
   */
  boundsDuration = "boundsDuration",
  /**
   * Display "timing.repeat.boundsPeriod"
   */
  boundsPeriod = "boundsPeriod",
  /**
   * Display "timing.repeat.boundsRange"
   */
  boundsRange = "boundsRange",
  /**
   * Display "timing.repeat.count" / "timing.repeat.countMax"
   */
  countCountMax = "countCountMax",
  /**
   * Display "timing.event"
   */
  event = "event",
  /**
   * Display "timing.code"
   */
  code = "code",
  /**
   * Display "maxDosePerPeriod"
   */
  maxDosePerPeriod = "maxDosePerPeriod",
  /**
   * Display "maxDosePerAdministration"
   */
  maxDosePerAdministration = "maxDosePerAdministration",
  /**
   * Display "maxDosePerLifetime"
   */
  maxDosePerLifetime = "maxDosePerLifetime",
  /**
   * Display "additionalInstruction"
   */
  additionalInstruction = "additionalInstruction",
  /**
   * Display "patientInstruction"
   */
  patientInstruction = "patientInstruction",
  /**
   * Display "text"
   */
  text = "text",
  /**
   * Display "extension"
   */
  extension = "extension",
  /**
   * Display "timing.extension"
   */
  timingExtension = "timingExtension",
  /**
   * Display "timing.repeat.extension"
   */
  timingRepeatExtension = "timingRepeatExtension",
  /**
   * Display "modifierExtension"
   */
  modifierExtension = "modifierExtension",
  /**
   * Display "timing.modifierExtension"
   */
  timingModifierExtension = "timingModifierExtension",
}

export type DisplayOrder = keyof typeof DisplayOrderEnum;

export type NamespacesLocale =
  | "common"
  | "daysOfWeek"
  | "eventTiming"
  | "unitsOfTime";

export interface Params {
  /**
   * BCP 47 language code to setup the library with
   * @defaultValue "en" (English)
   * @see [FAQ](https://jy95.github.io/fhir-dosage-utils/docs/faq) for the built-in languages
   * @see [I18next documentation](https://www.i18next.com/how-to/faq#how-should-the-language-codes-be-formatted) for the reasons behind BCP 47
   */
  language?: string;
  /**
   * Function to turn a quantity unit (e.g UCUM "ml") into a string for humans (e.g "militier")
   * The choice to handle plural form or not is thus under the hands of people ;)
   * @see [defaultFromFHIRQuantityUnitToString](https://github.com/jy95/fhir-dosage-utils/blob/main/src/utils/fromFHIRQuantityUnitToString.ts) for default implementation
   * @see [FHIR definition of Quantity](https://build.fhir.org/datatypes.html#Quantity) for more info about the type itself
   */
  fromFHIRQuantityUnitToString?: FromFHIRQuantityUnitToStringFct;
  /**
   * Function to turn a codeable concept (e.g SNOMED CT "311504000") into a string for humans (e.g "With or after food")
   * The choice to handle extension, local valueset, ... is thus under the hands of people ;)
   * @see [defaultFromCodeableConceptToString](https://github.com/jy95/fhir-dosage-utils/blob/main/src/utils/fromCodeableConceptToString.ts) for default implementation
   * @see [FHIR definition of CodeableConcept](https://build.fhir.org/datatypes.html#CodeableConcept) for more info about the type itself
   */
  fromCodeableConceptToString?: FromCodeableConceptToStringFct;
  /**
   * Function to turn extension(s) into a string for humans.
   * The choice to handle national extensions, ... is thus under the hands of people ;)
   * @see [defaultFromExtensionsToString](https://github.com/jy95/fhir-dosage-utils/blob/main/src/utils/fromExtensionsToString.ts) for default implementation
   * @see [FHIR definition of Extension](https://build.fhir.org/extensibility.html#Extension) for more info about the type itself
   */
  fromExtensionsToString?: FromExtensionsToStringFct;
  /**
   * Control the display order used by the algorithm
   * Useful when you want to turn on / off some specific rules for some reason
   * @defaultValue ["method", "doseQuantity", "doseRange", "rateRatio", "rateQuantity", "rateRange", "durationDurationMax", "frequencyFrequencyMaxPeriodPeriodMax", "offsetWhen", "dayOfWeek", "timeOfDay", "route", "site", "asNeeded", "boundsDuration", "boundsPeriod", "boundsRange", "countCountMax", "event", "code", "maxDosePerPeriod", "maxDosePerAdministration", "maxDosePerLifetime", "additionalInstruction", "patientInstruction"]
   * @see [DisplayOrderEnum](../enum/DisplayOrderEnum) for more info
   */
  displayOrder?: DisplayOrder[];
  /**
   * Override separator between each part of "Dosage"
   * @defaultValue " - "
   */
  displaySeparator?: string;
  /**
   * To control the formatting of dateTime objects.
   * If not provided, will use the defaults according locale e.g. "20/01/2024"
   * @defaultValue {}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
   */
  dateTimeFormatOptions?: Intl.DateTimeFormatOptions;
}

// Config requires all parameter to be set
export type Config = Required<Params>;

// Types for translations functions
export type DisplayOrderParams = {
  dos: Dosage;
  config: Config;
  i18next: I18N;
};
export type { I18N, InitOptions };
/**
 * Options for the i18next instances
 * @see https://www.i18next.com/overview/configuration-options for more info
 */
export type I18InitOptions = Exclude<InitOptions, "lng" | "ns" | "defaultNS">;

// Types for translation functions
export type RangeParams = {
  range: Range;
  config: Config;
  i18next: I18N;
};

export type RatioParams = {
  ratio: Ratio;
  config: Config;
  i18next: I18N;
};

export type QuantityParams = {
  quantity: Quantity;
  config: Config;
  i18next: I18N;
};

export type WhenTimeKeys =
  | "MORN"
  | "MORN.early"
  | "MORN.late"
  | "NOON"
  | "AFT"
  | "AFT.early"
  | "AFT.late"
  | "EVE"
  | "EVE.early"
  | "EVE.late"
  | "NIGHT"
  | "PHS"
  | "IMD"
  | "HS"
  | "WAKE"
  | "C"
  | "CM"
  | "CD"
  | "CV"
  | "AC"
  | "ACM"
  | "ACD"
  | "ACV"
  | "PC"
  | "PCM"
  | "PCD"
  | "PCV";
