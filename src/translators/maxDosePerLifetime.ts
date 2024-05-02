import { fromQuantityToString } from "../utils/fromQuantityToString";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformMaxDosePerLifetimeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  if (!isNotUndefined(dos.maxDosePerLifetime)) {
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
