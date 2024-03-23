import type { Quantity } from "fhir/r4";

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
  if (quantity.code !== undefined) {
    return quantity.code;
  }

  if (quantity.unit !== undefined) {
    return quantity.unit;
  }

  return "";
}
