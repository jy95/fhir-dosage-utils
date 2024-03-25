import i18next from "i18next";

// types
import type { Config, Dosage } from "../types";

export function transformRateRangeToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }
  // Find the first entry that match criteria
  let rateRange = dos.doseAndRate.find((s) => s.rateRange !== undefined);

  // If not found, skip
  if (rateRange === undefined) {
    return undefined;
  }

  // low / high
  let low = rateRange.rateRange!.low;
  let high = rateRange.rateRange!.high;

  let quantityLow = low?.value;
  let quantityHigh = high?.value;

  // quantity unit
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: high || low!,
  });

  // Three cases

  // 1. Both low & high are present
  if (quantityHigh !== undefined && quantityLow !== undefined) {
    return i18next.t("fields.rateRange.lowAndHigh", {
      low: quantityLow,
      high: quantityHigh,
      unit: unit,
    });
  }

  // 2. Only high is present
  if (quantityHigh !== undefined) {
    return i18next.t("fields.rateRange.onlyHigh", {
      high: quantityHigh,
      unit: unit,
    });
  }

  // 3. Only low is present
  // Warning, this case is kind dangerous and clinically unsafe so minimal effort on this ...

  return i18next.t("fields.rateRange.onlyLow", {
    low: quantityLow,
    unit: unit,
  });
}
