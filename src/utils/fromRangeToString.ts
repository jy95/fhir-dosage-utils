import { hasUnit } from "../internal/hasUnit";
import {
  isNotUndefined,
  noUndefinedInArray,
  allUndefinedInArray,
} from "../internal/undefinedChecks";

import type { RangeParams, Config, Quantity, I18N } from "../types";

// Quantity unit to string
function transformQuantityUnitToString(
  i18next: I18N,
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
  }

  // otherwise, it is UCUM, ... so let the user do the job
  return config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: quantity,
  });
}

// To cover all nasty cases of Range, only once
// https://build.fhir.org/datatypes.html#Range
export function fromRangeToString({
  range,
  config,
  i18next,
}: RangeParams): string | undefined {
  const { low, high } = range;
  const lowValue = low?.value;
  const highValue = high?.value;

  let quantityUnit = high || low;
  let hasQuantityUnit = hasUnit(quantityUnit);

  // 1. If we have a empty object, return undefined
  if (allUndefinedInArray(lowValue, highValue)) {
    return undefined;
  }

  // quantity unit
  let unit = hasQuantityUnit
    ? transformQuantityUnitToString(i18next, quantityUnit!, config)
    : "";
  let technicalKey: "withUnit" | "withoutUnit" = hasQuantityUnit
    ? "withUnit"
    : "withoutUnit";

  // 2. Both low & high are present
  if (noUndefinedInArray(lowValue, highValue)) {
    return i18next.t(`amount.range.${technicalKey}.lowAndHigh`, {
      low: lowValue,
      high: highValue,
      unit: unit,
    });
  }

  // 3. Only high is present
  if (isNotUndefined(highValue)) {
    return i18next.t(`amount.range.${technicalKey}.onlyHigh`, {
      high: highValue,
      unit: unit,
    });
  }

  // 4. Only low is present
  // Warning, this case is kind dangerous and clinically unsafe so minimal effort on this ...
  return i18next.t(`amount.range.${technicalKey}.onlyLow`, {
    low: lowValue,
    unit: unit,
  });
}
