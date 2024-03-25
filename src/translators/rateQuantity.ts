import i18next from "i18next";

// types
import type { Config, Dosage } from "../types";

export function transformRateQuantityToText(
  dos: Dosage,
  config: Config,
): string | undefined {
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

  // quantity unit
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: rateQuantity.rateQuantity!,
  });

  return i18next.t("fields.rateQuantity", {
    quantity: value,
    unit: unit,
  });
}
