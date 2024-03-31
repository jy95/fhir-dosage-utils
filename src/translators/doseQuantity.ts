// types
import type { DisplayOrderParams } from "../types";

export function transformDoseQuantityToText({
  config,
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }
  // Find the first entry that match criteria
  let doseQuantity = dos.doseAndRate.find((s) => s.doseQuantity !== undefined);

  // If not found, skip
  if (doseQuantity === undefined) {
    return undefined;
  }

  let quantity = doseQuantity.doseQuantity!.value || 1;
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: doseQuantity.doseQuantity!,
  });

  return i18next.t("fields.doseQuantity", {
    quantity: quantity,
    unit: unit,
  });
}
