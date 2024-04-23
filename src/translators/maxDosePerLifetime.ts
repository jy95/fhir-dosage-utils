// Functions
import { fromQuantityToString } from "../utils/fromQuantityToString";

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

  return i18next.t("fields.maxDosePerLifetime", {
    quantityText: fromQuantityToString({
      quantity: maxDosePerLifetime,
      config,
      i18next,
    }),
  });
}
