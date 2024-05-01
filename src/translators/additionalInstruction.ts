// Function
import { fromListToString } from "../utils/fromListToString";
import { isArrayEmpty } from "../internal/isEmptyArray";

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
    .filter((s) => s !== undefined);

  return fromListToString(i18next, additionalInstructions as string[]);
}
