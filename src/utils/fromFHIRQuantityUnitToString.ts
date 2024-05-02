import { isNotUndefined } from "../internal/undefinedChecks";
import type { Quantity } from "../types";

export type FromFHIRQuantityUnitToStringArgs = {
  language: string;
  quantity: Quantity;
};
export type FromFHIRQuantityUnitToStringFct = (
  input: FromFHIRQuantityUnitToStringArgs,
) => string;

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
