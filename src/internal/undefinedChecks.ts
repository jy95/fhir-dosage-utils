export function isNotUndefined<T>(val: T | undefined): val is T {
  return val !== undefined;
}

export function noUndefinedInArray<T>(...args: (T | undefined)[]) {
  return args.every(isNotUndefined);
}

export function allUndefinedInArray<T>(...args: (T | undefined)[]) {
  return !args.some(isNotUndefined);
}
