import i18next from "i18next";

// Function
import { fromListToString } from "../utils/fromListToString";

// types
import type { Dosage } from "fhir/r4";
import type { Config } from "../types";

export function transformAdditionalInstructionToText(
  dos: Dosage,
  config: Config,
): string | undefined {
  // If empty, return undefined
  if (
    dos.additionalInstruction === undefined ||
    dos.additionalInstruction.length === 0
  ) {
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

  return fromListToString(additionalInstructions);
}
