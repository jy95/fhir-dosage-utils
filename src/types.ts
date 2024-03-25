// Types
import type { FromFHIRQuantityUnitToStringFct } from "./utils/fromFHIRQuantityUnitToString";
import type { FromCodeableConceptToStringFct } from "./utils/fromCodeableConceptToString";

import type {
  Dosage as DosageR4,
  CodeableConcept as CodeableConceptR4,
  Quantity as QuantityR4,
  Duration as DurationR4,
} from "fhir/r4";
import type {
  Dosage as DosageR5,
  CodeableConcept as CodeableConceptR5,
  Quantity as QuantityR5,
  Duration as DurationR5,
} from "fhir/r5";

// Exported types

export type Dosage = DosageR4 | DosageR5;
export type CodeableConcept = CodeableConceptR4 | CodeableConceptR5;
export type Quantity = QuantityR4 | QuantityR5;
export type Duration = DurationR4 | DurationR5;

export type { FromFHIRQuantityUnitToStringFct, FromCodeableConceptToStringFct };

export type Language = "en" | "fr" | "nl" | "de";
export type DisplayOrder =
  | "method"
  | "doseQuantity"
  | "doseRange"
  | "rateRatio"
  | "rateQuantity"
  | "rateRange"
  | "durationDurationMax"
  | "frequencyFrequencyMax"
  | "periodPeriodMax"
  | "frequencyFrequencyMaxPeriodPeriodMax"
  | "offsetWhen"
  | "dayOfWeek"
  | "timeOfDay"
  | "route"
  | "site"
  | "asNeeded"
  | "boundsDuration"
  | "boundsRange"
  | "countCountMax"
  | "event"
  | "code"
  | "maxDosePerPeriod"
  | "maxDosePerAdministration"
  | "maxDosePerLifetime"
  | "additionalInstruction"
  | "patientInstruction";

// Parameters
export interface Params {
  /**
   * To set up the language
   * @default "en" (English)
   */
  language?: Language;
  /**
   * Function to turn a quantity unit (e.g UCUM "ml") into a string for humans (e.g "militier")
   * The choice to handle plural form or not is thus under the hands of people ;)
   */
  fromFHIRQuantityUnitToString?: FromFHIRQuantityUnitToStringFct;
  /**
   * Function to turn a codeable concept (e.g SNOMED CT "311504000") into a string for humans (e.g "With or after food")
   * The choice to handle extension, local valueset, ... is thus under the hands of people ;)
   */
  fromCodeableConceptToString?: FromCodeableConceptToStringFct;
  /**
   * Control the display order used by the algorithm
   * Useful when you want to turn off some rules for some reason
   */
  displayOrder?: DisplayOrder[];
  /**
   * Override separator between each part of "Dosage"
   * @default " - "
   */
  displaySeparator?: string;
  /**
   * To control the formatting of dateTime objects.
   * If not provided, will use the defaults according locale e.g. "20/01/2024"
   * @default {}
   */
  dateTimeFormatOptions?: Intl.DateTimeFormatOptions;
}

// Config requires all parameter to be set
export type Config = Required<Params>;
