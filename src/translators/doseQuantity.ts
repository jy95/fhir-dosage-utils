// Functions
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";
import { fromQuantityToString } from "../utils/fromQuantityToString";

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

  // Otherwise rendering it
  return i18next.t("fields.doseQuantity", {
    quantityText: fromQuantityToString({
      quantity: doseQuantity,
      config,
      i18next,
    }),
  });
}
