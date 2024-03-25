import i18next from "i18next";

// types
import type { Config, Dosage } from "../types";

export function transformRateRatioToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }
  // Find the first entry that match criteria
  let rateRatio = dos.doseAndRate.find((s) => s.rateRatio !== undefined);

  // If not found, skip
  if (rateRatio === undefined) {
    return undefined;
  }

  // num / dem
  let numerator = rateRatio.rateRatio!.numerator;
  let denominator = rateRatio.rateRatio!.denominator;

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

  return i18next.t("fields.rateRatio.rateRatio", {
    count: quantityDenom,
    quantityNumerator: quantityNum,
    numeratorUnit: numeratorUnit,
    denominatorUnit: denominatorUnit,
  });
}
