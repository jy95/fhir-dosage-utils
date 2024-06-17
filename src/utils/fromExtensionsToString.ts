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

  return extensions.map((extension) => JSON.stringify(extension)).join(" ");
}
