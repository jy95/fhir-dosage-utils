import { isNotUndefined } from "../internal/undefinedChecks";
import type { Quantity } from "../types";

/**
 * Function to turn a quantity unit (e.g UCUM "ml") into a string for humans (e.g "militier")
 * The choice to handle plural form or not is thus under the hands of people ;)
 */
export type FromFHIRQuantityUnitToStringArgs = {
  language: string;
  quantity: Quantity;
};
export type FromFHIRQuantityUnitToStringFct = (
  input: FromFHIRQuantityUnitToStringArgs,
) => string;

// Default fromFHIRQuantityUnitToString
export function defaultFromFHIRQuantityUnitToString({
  quantity,
}: FromFHIRQuantityUnitToStringArgs) {
  if (isNotUndefined(quantity.code)) {
    return quantity.code;
  }

  if (isNotUndefined(quantity.unit)) {
    return quantity.unit;
  }

  return "";
}
