import { fromQuantityToString } from "../utils/fromQuantityToString";
import { hasUnit } from "../internal/hasUnit";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { RatioParams, QuantityParams } from "../types";

// To cover all nasty cases of denominator
function fromDenominatorToString({
  config,
  i18next,
  quantity,
}: QuantityParams): string {
  let hasUnitDenominator = hasUnit(quantity);
  let value = quantity.value!;

  // If no unit, it is quite simple
  if (!hasUnitDenominator) return `:${value}`;

  // Get correct linkword (depending of the quantity value)
  let linkword = i18next.t("amount.ratio.denominatorLinkword", {
    count: value,
  });

  // Get quantity text (depending of the quantity value)
  let quantityText =
    value !== 1
      ? fromQuantityToString({ quantity, config, i18next })
      : config.fromFHIRQuantityUnitToString({
          quantity,
          language: config.language,
        });

  // Concatenate all computed parts
  // The space before is intentional so that numerator and denominator are well printed regardless of situation
  return ` ${linkword} ${quantityText}`;
}

// To cover all nasty cases of Ratio, only once
// https://build.fhir.org/datatypes.html#Ratio
export function fromRatioToString({
  ratio,
  config,
  i18next,
}: RatioParams): string | undefined {
  const { denominator, numerator } = ratio;

  let quantityNumerator = numerator?.value;
  let quantityDenominator = denominator?.value;

  const parts: string[] = [];

  if (isNotUndefined(quantityNumerator)) {
    const numeratorString = fromQuantityToString({
      quantity: numerator!,
      config,
      i18next,
    });
    parts.push(numeratorString);
  }

  if (isNotUndefined(quantityDenominator)) {
    const denominatorString = fromDenominatorToString({
      config,
      i18next,
      quantity: denominator!,
    });
    parts.push(denominatorString);
  }

  return parts.length > 0 ? parts.join("") : undefined;
}
