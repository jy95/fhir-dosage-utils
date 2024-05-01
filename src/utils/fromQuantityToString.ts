// Function

// Type
import type { QuantityParams } from "../types";

// To cover all nasty cases of Quantity, only once
// https://build.fhir.org/datatypes.html#Quantity
export function fromQuantityToString({
  quantity,
  config,
  i18next,
}: QuantityParams): string | undefined {
  // extract function for the unit display from config
  const { fromFHIRQuantityUnitToString, language } = config;

  // Compute the result
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

  // Compute the comparator
  let comparatorCode = quantity.comparator;
  let comparatorString =
    comparatorCode !== undefined
      ? i18next.t(`quantityComparator:${comparatorCode}`)
      : undefined;

  // If no comparator, print it
  if (comparatorString === undefined) {
    return quantityString;
  } else {
    // concatenate comparator and quantity
    return `${comparatorString} ${quantityString}`;
  }
}
