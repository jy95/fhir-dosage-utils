import { isArrayEmpty } from "../internal/isEmptyArray";

import type { Extension } from "../types";

/**
 * Function to turn extensions into a string for humans.
 */
export type FromExtensionsToStringArgs = {
  language: string;
  extensions?: Extension[];
};
export type FromExtensionsToStringFct = (
  input: FromExtensionsToStringArgs,
) => string | undefined;

export function defaultFromExtensionsToString({
  extensions,
}: FromExtensionsToStringArgs) {
  if (isArrayEmpty(extensions)) {
    return undefined;
  }

  // KIS implementation : print it as provided, without doing anything
  // Extensions have so many cases btw, that having a basic function does the trick
  return extensions.map((extension) => JSON.stringify(extension)).join(" ");
}
