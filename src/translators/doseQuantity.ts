import i18next from "i18next";
import type { Dosage } from "fhir/r4";

export function transformDoseQuantityToText(dos: Dosage): string | undefined {
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
  // TODO replace code by human text and with plural (001 => tablets) later
  let unit = doseQuantity.doseQuantity!.unit || "";

  return i18next.t("doseQuantity", {
    quantity: quantity,
    unit: unit,
  });
}
