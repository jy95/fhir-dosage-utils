// Functions
import { fromQuantityToString } from "../utils/fromQuantityToString";
import { isNotUndefined } from "../internal/undefinedChecks";

// types
import type { DisplayOrderParams } from "../types";

export function transformMaxDosePerAdministrationToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (!isNotUndefined(dos.maxDosePerAdministration)) {
    return undefined;
  }

  const maxDosePerAdministration = dos.maxDosePerAdministration;

  return i18next.t("fields.maxDosePerAdministration", {
    quantityText: fromQuantityToString({
      quantity: maxDosePerAdministration,
      config,
      i18next,
    }),
  });
}
