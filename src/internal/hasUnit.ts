// Type
import type { Quantity } from "../types";

// Quantity has an unit ?
export function hasUnit(quantity?: Quantity): boolean {
  return [quantity?.unit, quantity?.code].some((field) => field !== undefined);
}
