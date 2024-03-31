// types
import type { DisplayOrderParams } from "../types";

export function transformDoseRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }
  // Find the first entry that match criteria
  let doseRange = dos.doseAndRate.find((s) => s.doseRange !== undefined);

  // If not found, skip
  if (doseRange === undefined) {
    return undefined;
  }

  let low = doseRange.doseRange!.low?.value;
  let high = doseRange.doseRange!.high?.value;

  let quantityUnit =
    doseRange.doseRange!.high !== undefined
      ? doseRange.doseRange!.high
      : doseRange.doseRange!.low!;

  // quantity unit
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: quantityUnit,
  });

  // Three cases

  // 1. Both low & high are present
  if (high !== undefined && low !== undefined) {
    return i18next.t("fields.doseRange.lowAndHigh", {
      low: low,
      high: high,
      unit: unit,
    });
  }

  // 2. Only high is present
  if (high !== undefined) {
    return i18next.t("fields.doseRange.onlyHigh", {
      high: high,
      unit: unit,
    });
  }

  // 3. Only low is present
  // Warning, this case is kind dangerous and clinically unsafe so minimal effort on this ...

  return i18next.t("fields.doseRange.onlyLow", {
    low: low,
    unit: unit,
  });
}
