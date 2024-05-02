// Function
import { fromListToString } from "../utils/fromListToString";
import { isArrayEmpty } from "../internal/isEmptyArray";
import { isNotUndefined } from "../internal/undefinedChecks";

// types
import type { DisplayOrderParams } from "../types";

export function transformAdditionalInstructionToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (isArrayEmpty(dos.additionalInstruction)) {
    return undefined;
  }

  // Turn it into strings
  let additionalInstructions = dos.additionalInstruction
    .map((instruction) =>
      config.fromCodeableConceptToString({
        code: instruction,
        language: config.language,
      }),
    )
    .filter(isNotUndefined);

  return fromListToString(i18next, additionalInstructions as string[]);
}
