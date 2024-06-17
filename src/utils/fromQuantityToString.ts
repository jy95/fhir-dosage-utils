import { isNotUndefined } from "../internal/undefinedChecks";

import type { QuantityParams } from "../types";

// To cover all nasty cases of Quantity
// https://build.fhir.org/datatypes.html#Quantity
export function fromQuantityToString({
  quantity,
  config,
  i18next,
}: QuantityParams): string {
  const { fromFHIRQuantityUnitToString, language } = config;
  let unit = fromFHIRQuantityUnitToString({ language, quantity });
  let value = quantity.value || 1;
  let comparatorCode = quantity.comparator;

  let quantityString =
    unit.length === 0
      ? i18next.t("amount.quantity.withoutUnit", {
          quantity: value,
        })
      : i18next.t("amount.quantity.withUnit", {
          quantity: value,
          unit: unit,
        });

  if (!isNotUndefined(comparatorCode)) {
    return quantityString;
  }

  let comparatorString = i18next.t(`quantityComparator:${comparatorCode}`);
  return `${comparatorString} ${quantityString}`;
}
