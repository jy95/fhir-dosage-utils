import i18next from "i18next";
import type { Dosage } from "fhir/r4";

export function transformRateQuantityToText(dos: Dosage): string | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }
  // Find the first entry that match criteria
  let rateQuantity = dos.doseAndRate.find((s) => s.rateQuantity !== undefined);

  // If not found, skip
  if (rateQuantity === undefined) {
    return undefined;
  }

  // information from rate
  let value = rateQuantity.rateQuantity!.value || 1;
  // TODO replace code by human text and with plural (001 => tablets) later
  let unit = rateQuantity.rateQuantity!.unit || "";

  return i18next.t("fields.rateQuantity", {
    quantity: value,
    unit: unit,
  });
}
