// Functions
import { fromQuantityToString } from "../utils/fromQuantityToString";

// Type
import type { RatioParams, Quantity } from "../types";

// Quantity has an unit ?
function hasUnit(quantity?: Quantity): boolean {
  return (quantity?.unit || quantity?.code) !== undefined;
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

  // units as text
  let denominatorUnit = hasUnit(denominator)
    ? config.fromFHIRQuantityUnitToString({
        language: config.language,
        quantity: denominator!,
      })
    : undefined;

  // quantity
  let quantityNumerator = numerator?.value;
  let quantityDenominator = denominator?.value;

  // Collect results
  const parts: string[] = [];
  let noUnits = !hasUnit(numerator) && denominatorUnit === undefined;
  let separator = noUnits ? "" : " ";

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
    let technicalKey: "withUnit" | "withoutUnit" =
      denominatorUnit !== undefined ? "withUnit" : "withoutUnit";
    const denominatorString = i18next.t(
      `amount.ratio.${technicalKey}.denominator`,
      {
        count: quantityDenominator,
        denominatorUnit: denominatorUnit,
      },
    );
    parts.push(denominatorString);
  }

  // Concatenate the result
  if (parts.length === 0) {
    return undefined;
  } else {
    return parts.join(separator);
  }
}
