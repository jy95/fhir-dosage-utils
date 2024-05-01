// Functions
import { fromQuantityToString } from "../utils/fromQuantityToString";

// Type
import type { RatioParams, Quantity, QuantityParams } from "../types";

// Quantity has an unit ?
function hasUnit(quantity?: Quantity): boolean {
  return [quantity?.unit, quantity?.code].some((field) => field !== undefined);
}

// To cover all nasty cases of denominator
function fromDenominatorToString({
  config,
  i18next,
  quantity,
}: QuantityParams): string {
  let hasUnitDenominator = hasUnit(quantity);
  let value = quantity.value!;

  // If no unit, it is quite simple
  if (!hasUnitDenominator) {
    return `:${value}`;
  } else {
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
}

// To cover all nasty cases of Ratio, only once
// https://build.fhir.org/datatypes.html#Ratio
export function fromRatioToString({
  ratio,
  config,
  i18next,
}: RatioParams): string | undefined {
  // Extract params
  const { denominator, numerator } = ratio;

  // quantity
  let quantityNumerator = numerator?.value;
  let quantityDenominator = denominator?.value;

  // Collect results
  const parts: string[] = [];

  // Deal with numerator first
  if (quantityNumerator !== undefined) {
    // Reuse the quantity to string translation
    const numeratorString = fromQuantityToString({
      quantity: numerator!,
      config,
      i18next,
    });
    parts.push(numeratorString);
  }

  // Deal with denominator
  if (quantityDenominator !== undefined) {
    // Several cases exist for that, let use a proper function for that
    const denominatorString = fromDenominatorToString({
      config,
      i18next,
      quantity: denominator!,
    });
    parts.push(denominatorString);
  }

  // Concatenate the result
  return parts.length > 0 ? parts.join("") : undefined;
}
