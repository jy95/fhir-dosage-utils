import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";

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

  // information from rate
  let value = rateQuantity.value || 1;

  // quantity unit
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: rateQuantity,
  });

  return i18next.t("fields.rateQuantity", {
    quantity: value,
    unit: unit,
  });
}
