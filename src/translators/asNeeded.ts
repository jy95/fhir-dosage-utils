// Function
import { fromListToString } from "../utils/fromListToString";

// types
import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";
import type {
  Config,
  CodeableConcept,
  DisplayOrderParams,
  I18N,
} from "../types";

// Turn a list of codeable concept into a string
function fromCodeableConceptArrayToString(
  i18next: I18N,
  codes: CodeableConcept[],
  config: Config,
): string | undefined {
  const codesAsString = codes
    .map((code) =>
      config.fromCodeableConceptToString({
        code: code,
        language: config.language,
      }),
    )
    .filter((s) => s !== undefined);

  return fromListToString(i18next, codesAsString as string[]);
}

export function transformAsNeededToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // Pickup the interesting attributes
  let asNeededBoolean = (dos as DosageR4).asNeededBoolean;
  let asNeededCodeableConcept = (dos as DosageR4).asNeededCodeableConcept;
  let asNeededFor = (dos as DosageR5).asNeededFor;
  let asNeeded = (dos as DosageR5).asNeeded;

  // Codeable concept as list, to make algorithm simpler
  let codeableList =
    asNeededFor ||
    (asNeededCodeableConcept !== undefined ? [asNeededCodeableConcept] : []);

  if (codeableList.length > 0) {
    return i18next.t("fields.asNeededFor", {
      reasons: fromCodeableConceptArrayToString(
        i18next,
        codeableList as CodeableConcept[],
        config,
      ),
    });
  } else {
    // merge boolean to make it simpler
    let booleanValue = asNeededBoolean || asNeeded || false;

    if (booleanValue) {
      return i18next.t("fields.asNeeded");
    } else {
      return undefined;
    }
  }
}