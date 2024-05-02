import { isNotUndefined } from "./undefinedChecks";

import type { Quantity } from "../types";

export function hasUnit(quantity?: Quantity): boolean {
  return [quantity?.unit, quantity?.code].some(isNotUndefined);
}
