import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";
import { fromQuantityToString } from "../utils/fromQuantityToString";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformDoseQuantityToText({
  config,
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let doseQuantity = extractMatchingDoseAndRateFirstEntry(dos, "doseQuantity");

  if (!isNotUndefined(doseQuantity)) {
    return undefined;
  }

  return i18next.t("fields.doseQuantity", {
    quantityText: fromQuantityToString({
      quantity: doseQuantity,
      config,
      i18next,
    }),
  });
}
