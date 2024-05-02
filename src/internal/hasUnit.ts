import { isNotUndefined } from "./undefinedChecks";

import type { Quantity } from "../types";

// Quantity has an unit ?
export function hasUnit(quantity?: Quantity): boolean {
  return [quantity?.unit, quantity?.code].some(isNotUndefined);
}
