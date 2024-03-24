import i18next from "i18next";

// types
import type { Dosage } from "fhir/r4";
import type { Config } from "../types";

export function transformMaxDosePerLifetimeToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (dos.maxDosePerLifetime === undefined) {
    return undefined;
  }

  const maxDosePerLifetime = dos.maxDosePerLifetime;
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: maxDosePerLifetime,
  });

  return i18next.t("fields.maxDosePerLifetime", {
    count: maxDosePerLifetime.value || 1,
    unit: unit,
  });
}
