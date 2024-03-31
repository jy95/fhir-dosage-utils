// types
import type { DisplayOrderParams } from "../types";

export function transformMaxDosePerLifetimeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
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
