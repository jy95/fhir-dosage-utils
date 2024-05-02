import { isNotUndefined } from "../internal/undefinedChecks";

import type { QuantityParams } from "../types";

// To cover all nasty cases of Quantity, only once
// https://build.fhir.org/datatypes.html#Quantity
export function fromQuantityToString({
  quantity,
  config,
  i18next,
}: QuantityParams): string {
  const { fromFHIRQuantityUnitToString, language } = config;
  let unit = fromFHIRQuantityUnitToString({ language, quantity });
  let value = quantity.value || 1;

  // If no unit is present (in other words ""), we don't put it
  let quantityString =
    unit.length === 0
      ? i18next.t("amount.quantity.withoutUnit", {
          quantity: value,
        })
      : i18next.t("amount.quantity.withUnit", {
          quantity: value,
          unit: unit,
        });

  let comparatorCode = quantity.comparator;
  let comparatorString = isNotUndefined(comparatorCode)
    ? i18next.t(`quantityComparator:${comparatorCode}`)
    : undefined;

  if (!isNotUndefined(comparatorString)) {
    return quantityString;
  }

  return `${comparatorString} ${quantityString}`;
}
