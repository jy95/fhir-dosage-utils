import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";

// types
import type { DisplayOrderParams } from "../types";

export function transformDoseQuantityToText({
  config,
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let doseQuantity = extractMatchingDoseAndRateFirstEntry(dos, "doseQuantity");

  // If not found, skip
  if (doseQuantity === undefined) {
    return undefined;
  }

  let quantity = doseQuantity.value || 1;
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: doseQuantity,
  });

  return i18next.t("fields.doseQuantity", {
    quantity: quantity,
    unit: unit,
  });
}
