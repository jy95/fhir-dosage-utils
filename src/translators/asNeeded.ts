import i18next from "i18next";

// types
import type { Dosage as DosageR4, CodeableConcept } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";
import type { Config } from "../types";

// Turn a list of codeable concept into a string
function fromCodeableConceptArrayToString(
  codes: CodeableConcept[],
  config: Config,
): string | undefined {
  // Split the array into two parts: all entries except the last one, and the last
  const firstPart = codes.slice(0, -1);
  const lastPart = codes.slice(-1);

  const firstString = firstPart
    .map((code) =>
      config.fromCodeableConceptToString({
        code: code,
        language: config.language,
      }),
    )
    .filter((s) => s !== undefined)
    .join(", ");

  const lastString = lastPart
    .map((code) =>
      config.fromCodeableConceptToString({
        code: code,
        language: config.language,
      }),
    )
    .filter((s) => s !== undefined)
    .join("");

  // concatenate the result
  const linkWord = codes.length > 1 ? i18next.t("linkwords.and") : "";
  const finalString = firstString + linkWord + lastString;

  return finalString;
}

export function transformAsNeededToText(
  dos: DosageR4 | DosageR5,
  config: Config,
): string | undefined {
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
      reasons: fromCodeableConceptArrayToString(codeableList, config),
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
