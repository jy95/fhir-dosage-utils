// translators
import {
  transformDoseQuantityToText,
  transformDoseRangeToText,
  transformRateQuantityToText,
  transformRateRangeToText,
  transformRateRatioToText,
  transformDurationDurationMaxToText,
  transformFrequencyFrequencyMaxToText,
  transformPeriodPeriodMaxToText,
  transformOffsetWhenToText,
  transformDayOfWeekToText,
  transformTimeOfDayToText,
  transformAsNeededToText,
  transformBoundsDurationToText,
  transformBoundsRangeToText,
  transformCountCountMaxToText,
  transformEventToText,
  transformAdditionalInstructionToText,
  transformMaxDosePerLifetimeToText,
  transformMaxDosePerAdministrationToText,
  transformBoundsPeriodToText,
  transformMaxDosePerPeriodToText,
} from "../translators";

// Types
import type { DisplayOrder, DisplayOrderParams } from "../types";
type ResultFct = (args: DisplayOrderParams) => string | undefined;

// Map
const displayOrders = {
  additionalInstruction: (input) => transformAdditionalInstructionToText(input),
  asNeeded: (input) => transformAsNeededToText(input),
  boundsDuration: (input) => transformBoundsDurationToText(input),
  boundsRange: (input) => transformBoundsRangeToText(input),
  boundsPeriod: (input) => transformBoundsPeriodToText(input),
  code: ({ dos, config }) =>
    config.fromCodeableConceptToString({
      language: config.language,
      code: dos.timing?.code,
    }),
  countCountMax: (input) => transformCountCountMaxToText(input),
  dayOfWeek: (input) => transformDayOfWeekToText(input),
  doseQuantity: (input) => transformDoseQuantityToText(input),
  doseRange: (input) => transformDoseRangeToText(input),
  durationDurationMax: (input) => transformDurationDurationMaxToText(input),
  event: (input) => transformEventToText(input),
  extension: ({ dos, config }) =>
    config.fromExtensionsToString({
      language: config.language,
      extensions: dos.extension,
    }),
  frequencyFrequencyMax: (input) => transformFrequencyFrequencyMaxToText(input),
  frequencyFrequencyMaxPeriodPeriodMax: (input) => {
    let subParts = [
      transformFrequencyFrequencyMaxToText(input),
      transformPeriodPeriodMaxToText(input),
    ].filter((s) => s !== undefined);
    return subParts.length > 0 ? subParts.join(" ") : undefined;
  },
  maxDosePerAdministration: (input) =>
    transformMaxDosePerAdministrationToText(input),
  maxDosePerLifetime: (input) => transformMaxDosePerLifetimeToText(input),
  maxDosePerPeriod: (input) => transformMaxDosePerPeriodToText(input),
  method: ({ dos, config }) =>
    config.fromCodeableConceptToString({
      language: config.language,
      code: dos.method,
    }),
  offsetWhen: (input) => transformOffsetWhenToText(input),
  patientInstruction: ({ dos }) => dos.patientInstruction,
  periodPeriodMax: (input) => transformPeriodPeriodMaxToText(input),
  rateQuantity: (input) => transformRateQuantityToText(input),
  rateRange: (input) => transformRateRangeToText(input),
  rateRatio: (input) => transformRateRatioToText(input),
  route: ({ dos, config }) =>
    config.fromCodeableConceptToString({
      language: config.language,
      code: dos.route,
    }),
  site: ({ dos, config }) =>
    config.fromCodeableConceptToString({
      language: config.language,
      code: dos.site,
    }),
  text: ({ dos }) => dos.text,
  timeOfDay: (input) => transformTimeOfDayToText(input),
  timingExtension: ({ dos, config }) =>
    config.fromExtensionsToString({
      language: config.language,
      extensions: dos.timing?.extension,
    }),
  timingRepeatExtension: ({ dos, config }) =>
    config.fromExtensionsToString({
      language: config.language,
      extensions: dos.timing?.repeat?.extension,
    }),
  modifierExtension: ({ dos, config }) =>
    config.fromExtensionsToString({
      language: config.language,
      extensions: dos.modifierExtension,
    }),
} satisfies Record<DisplayOrder, ResultFct>;

type fromDisplayOrderToResultFct = DisplayOrderParams & {
  entry: DisplayOrder;
};

export function fromDisplayOrderToResult({
  entry,
  ...args
}: fromDisplayOrderToResultFct): string | undefined {
  // Use map to provide a result without iterate on each key
  return displayOrders[entry](args);
}
