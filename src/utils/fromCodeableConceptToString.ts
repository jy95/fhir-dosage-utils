import type { CodeableConcept } from "fhir/r4";

/**
 * Function to turn codeable concept (e.g SNOMED CT "311504000") into a string for humans (e.g "With or after food")
 */
export type FromCodeableConceptToStringArgs = {
  language: string;
  code?: CodeableConcept;
};
export type FromCodeableConceptToStringFct = (
  input: FromCodeableConceptToStringArgs,
) => string | undefined;

// Default fromCodeableConceptToString
// End-users can create their own version to fit their needs
export function defaultFromCodeableConceptToString({
  code,
}: FromCodeableConceptToStringArgs) {
  // If no code, skip it
  if (code === undefined) {
    return undefined;
  }

  // Take text first
  if (code.text !== undefined) {
    return code.text;
  }

  // If empty, skip it
  if (code.coding === undefined || code.coding.length === 0) {
    return undefined;
  }

  // Take first coding; display first then code
  let firstCode = code.coding[0];
  return firstCode.display || firstCode.code;
}
