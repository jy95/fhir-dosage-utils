import i18next from "i18next";

// types
import type { Dosage } from "fhir/r4";
import type { Config } from "../types";

export function transformMaxDosePerAdministrationToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (dos.maxDosePerAdministration === undefined) {
    return undefined;
  }

  const maxDosePerAdministration = dos.maxDosePerAdministration;
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: maxDosePerAdministration,
  });

  return i18next.t("fields.maxDosePerAdministration", {
    count: maxDosePerAdministration.value || 1,
    unit: unit,
  });
}
