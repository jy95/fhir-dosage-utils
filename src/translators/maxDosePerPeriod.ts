import { fromListToString } from "../utils/fromListToString";

// types
import type { DisplayOrderParams } from "../types";

export function transformMaxDosePerPeriodToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.maxDosePerPeriod === undefined) {
    return undefined;
  }

  const maxDosePerPeriod = dos.maxDosePerPeriod;

  // In R4, it was a single object
  // In R5, it is an array
  // So better to have a generic approach
  const values = Array.isArray(maxDosePerPeriod)
    ? maxDosePerPeriod
    : [maxDosePerPeriod];

  // Only consider not empty array
  if (values.length === 0) {
    return undefined;
  }

  // Periods are expressed as ratio (like rateRatio)
  const valuesAsString: string[] = values.map((period) => {
    // num / dem
    let numerator = period.numerator;
    let denominator = period.denominator;

    let quantityNum = numerator?.value || 1;
    let quantityDenom = denominator?.value || 1;

    // units as text
    let numeratorUnit =
      numerator !== undefined
        ? config.fromFHIRQuantityUnitToString({
            language: config.language,
            quantity: numerator,
          })
        : "";

    let denominatorUnit =
      denominator !== undefined
        ? config.fromFHIRQuantityUnitToString({
            language: config.language,
            quantity: denominator,
          })
        : "";

    return i18next.t("fields.maxDosePerPeriod.maxDosePerPeriod", {
      count: quantityDenom,
      quantityNumerator: quantityNum,
      numeratorUnit: numeratorUnit,
      denominatorUnit: denominatorUnit,
    });
  });

  const maxDosePerPeriodText = fromListToString(i18next, valuesAsString);

  return i18next.t("fields.maxDosePerPeriod.general", {
    count: values.length,
    maxDosePerPeriodText: maxDosePerPeriodText,
  });
}
