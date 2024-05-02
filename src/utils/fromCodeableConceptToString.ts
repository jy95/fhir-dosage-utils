import { isArrayEmpty } from "../internal/isEmptyArray";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { CodeableConcept } from "../types";

export type FromCodeableConceptToStringArgs = {
  language: string;
  code?: CodeableConcept;
};
export type FromCodeableConceptToStringFct = (
  input: FromCodeableConceptToStringArgs,
) => string | undefined;

export function defaultFromCodeableConceptToString({
  code,
}: FromCodeableConceptToStringArgs) {
  if (!isNotUndefined(code)) {
    return undefined;
  }

  if (isNotUndefined(code.text)) {
    return code.text;
  }

  if (isArrayEmpty(code.coding)) {
    return undefined;
  }

  let firstCode = code.coding[0];
  return firstCode.display || firstCode.code;
}
