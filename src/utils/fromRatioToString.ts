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
  let numeratorUnit = hasUnit(numerator)
    ? config.fromFHIRQuantityUnitToString({
        language: config.language,
        quantity: numerator!,
      })
    : undefined;

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
  let noUnits = numeratorUnit === undefined && denominatorUnit === undefined;
  let separator = noUnits ? "" : " ";

  // Deal with numerator first
  if (quantityNumerator !== undefined) {
    let technicalKey: "withUnit" | "withoutUnit" =
      numeratorUnit !== undefined ? "withUnit" : "withoutUnit";
    const numeratorString = i18next.t(
      `amount.ratio.${technicalKey}.numerator`,
      {
        count: quantityNumerator,
        numeratorUnit: numeratorUnit,
      },
    );
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
