import i18next from "i18next";

// types
import type { Config, Dosage, Quantity } from "../types";

// Quantity unit to string
function transformQuantityUnitToString(
  quantity: Quantity,
  config: Config,
): string {
  let quantityValue = quantity.value!;

  // If common units from HL7, do the job
  if (quantity.system === "http://hl7.org/fhir/ValueSet/duration-units") {
    let code = quantity.code! as "s" | "min" | "h" | "d" | "wk" | "mo" | "a";
    return i18next.t(`unitsOfTime:withoutCount.${code}`, {
      count: quantityValue,
    });
  } else {
    // otherwise, it is UCUM, ... so let the user do the job
    return config.fromFHIRQuantityUnitToString({
      language: config.language,
      quantity: quantity,
    });
  }
}

export function transformBoundsRangeToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (dos.timing === undefined || dos.timing.repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let boundsRange = repeat.boundsRange;

  // Do nothing if no boundsRange, I am not a wizard
  if (boundsRange === undefined) {
    return undefined;
  } else {
    let low = boundsRange.low;
    let high = boundsRange.high;

    // quantity unit
    let unit = transformQuantityUnitToString(high || low!, config);

    // Three cases

    // 1. Both low & high are present
    if (high !== undefined && low !== undefined) {
      return i18next.t("fields.boundsRange.lowAndHigh", {
        low: low.value,
        high: high.value,
        unit: unit,
      });
    }

    // 2. Only high is present
    if (high !== undefined) {
      return i18next.t("fields.boundsRange.onlyHigh", {
        high: high.value,
        unit: unit,
      });
    }

    // 3. Only low is present
    return i18next.t("fields.boundsRange.onlyLow", {
      low: low!.value,
      unit: unit,
    });
  }
}
