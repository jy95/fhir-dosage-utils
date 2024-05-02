import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";
import { fromQuantityToString } from "../utils/fromQuantityToString";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformRateQuantityToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let rateQuantity = extractMatchingDoseAndRateFirstEntry(dos, "rateQuantity");

  if (!isNotUndefined(rateQuantity)) {
    return undefined;
  }

  return i18next.t("fields.rateQuantity", {
    quantityText: fromQuantityToString({
      quantity: rateQuantity,
      config,
      i18next,
    }),
  });
}
