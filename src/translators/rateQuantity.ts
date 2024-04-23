// Functions
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";
import { fromQuantityToString } from "../utils/fromQuantityToString";

// types
import type { DisplayOrderParams } from "../types";

export function transformRateQuantityToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let rateQuantity = extractMatchingDoseAndRateFirstEntry(dos, "rateQuantity");

  // If not found, skip
  if (rateQuantity === undefined) {
    return undefined;
  }

  return i18next.t("fields.rateQuantity", {
    quantityText: fromQuantityToString({
      quantity: rateQuantity,
      config,
      i18next,
    }),
  });
}
