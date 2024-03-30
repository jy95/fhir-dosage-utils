import i18next from "i18next";

// types
import type { Config, Dosage, Duration } from "../types";

// Duration to string
function transformDurationToString(duration: Duration, config: Config): string {
  let quantity = duration.value!;

  // If common units from HL7, do the job
  if (duration.system === "http://hl7.org/fhir/ValueSet/duration-units") {
    let code = duration.code! as "s" | "min" | "h" | "d" | "wk" | "mo" | "a";
    return i18next.t(`unitsOfTime:withCount.${code}`, { count: quantity });
  } else {
    // otherwise, it is UCUM, ... so let the user do the job
    let unit = config.fromFHIRQuantityUnitToString({
      language: config.language,
      quantity: duration,
    });
    return `${quantity} ${unit}`;
  }
}

export function transformBoundsDurationToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (dos.timing === undefined || dos.timing.repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let boundsDuration = repeat.boundsDuration;

  // Do nothing if no boundsDuration, I am not a wizard
  if (boundsDuration === undefined) {
    return undefined;
  } else {
    let durationText = transformDurationToString(boundsDuration, config);

    return i18next.t("fields.boundsDuration", { durationText: durationText });
  }
}
