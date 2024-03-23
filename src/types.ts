// Types
import type { FromFHIRQuantityUnitToStringFct } from "./utils/fromFHIRQuantityUnitToString";
import type { FromCodeableConceptToStringFct } from "./utils/fromCodeableConceptToString";

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
  | "maxDosePerPeriod"
  | "maxDosePerAdministration"
  | "maxDosePerLifetime"
  | "additionalInstruction"
  | "patientInstruction";

// Parameters
export type Params = {
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
};

// Config requires all parameter to be set
export type Config = Required<Params>;
