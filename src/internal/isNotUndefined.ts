export function isNotUndefined<T>(arr: (T | undefined)[]): arr is T[] {
  return arr.every((val) => val !== undefined);
}
