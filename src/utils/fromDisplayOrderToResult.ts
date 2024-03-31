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
} from "../translators";

// Types
import type { Dosage, Config, DisplayOrder } from "../types";
type Args = { dos: Dosage; config: Config };
type ResultFct = (args: Args) => string | undefined;

// Map
const displayOrders = {
  additionalInstruction: ({ dos, config }) =>
    transformAdditionalInstructionToText(dos, config),
  asNeeded: ({ dos, config }) => transformAsNeededToText(dos, config),
  boundsDuration: ({ dos, config }) =>
    transformBoundsDurationToText(dos, config),
  boundsRange: ({ dos, config }) => transformBoundsRangeToText(dos, config),
  boundsPeriod: ({ dos, config }) => transformBoundsPeriodToText(dos, config),
  code: ({ dos, config }) =>
    config.fromCodeableConceptToString({
      language: config.language,
      code: dos.timing?.code,
    }),
  countCountMax: ({ dos }) => transformCountCountMaxToText(dos),
  dayOfWeek: ({ dos }) => transformDayOfWeekToText(dos),
  doseQuantity: ({ dos, config }) => transformDoseQuantityToText(dos, config),
  doseRange: ({ dos, config }) => transformDoseRangeToText(dos, config),
  durationDurationMax: ({ dos }) => transformDurationDurationMaxToText(dos),
  event: ({ dos, config }) => transformEventToText(dos, config),
  frequencyFrequencyMax: ({ dos }) => transformFrequencyFrequencyMaxToText(dos),
  frequencyFrequencyMaxPeriodPeriodMax: ({ dos, config }) => {
    let subParts = [
      transformFrequencyFrequencyMaxToText(dos),
      transformPeriodPeriodMaxToText(dos),
    ].filter((s) => s !== undefined);
    return subParts.length > 0 ? subParts.join(" ") : undefined;
  },
  maxDosePerAdministration: ({ dos, config }) =>
    transformMaxDosePerAdministrationToText(dos, config),
  maxDosePerLifetime: ({ dos, config }) =>
    transformMaxDosePerLifetimeToText(dos, config),
  maxDosePerPeriod: ({ dos, config }) => undefined,
  method: ({ dos, config }) =>
    config.fromCodeableConceptToString({
      language: config.language,
      code: dos.method,
    }),
  offsetWhen: ({ dos }) => transformOffsetWhenToText(dos),
  patientInstruction: ({ dos }) => dos.patientInstruction,
  periodPeriodMax: ({ dos }) => transformPeriodPeriodMaxToText(dos),
  rateQuantity: ({ dos, config }) => transformRateQuantityToText(dos, config),
  rateRange: ({ dos, config }) => transformRateRangeToText(dos, config),
  rateRatio: ({ dos, config }) => transformRateRatioToText(dos, config),
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
  timeOfDay: ({ dos }) => transformTimeOfDayToText(dos),
} satisfies Record<DisplayOrder, ResultFct>;

export function fromDisplayOrderToResult(
  dos: Dosage,
  config: Config,
  entry: DisplayOrder,
): string | undefined {
  // Prepare args
  const args: Args = { dos: dos, config: config };

  // Use map to provide a result without iterate on each key
  return displayOrders[entry](args);
}
