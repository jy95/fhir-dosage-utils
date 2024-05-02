import { isNotUndefined } from "./undefinedChecks";
export function isArrayEmpty(array?: any[]): array is undefined | [] {
  return !isNotUndefined(array) || array.length === 0;
}
