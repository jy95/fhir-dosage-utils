import type { FromFHIRQuantityUnitToStringFct } from "./utils/fromFHIRQuantityUnitToString";
import type { FromCodeableConceptToStringFct } from "./utils/fromCodeableConceptToString";
import type { Config } from "./configurator";

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

export type { Config };
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
