export function isArrayEmpty(array?: any[]): array is undefined | [] {
  return array === undefined || array.length === 0;
}
