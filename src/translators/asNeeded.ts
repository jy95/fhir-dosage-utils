import { fromListToString } from "../utils/fromListToString";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";
import type {
  Config,
  CodeableConcept,
  DisplayOrderParams,
  I18N,
  Dosage,
} from "../types";

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
    .filter(isNotUndefined);

  return fromListToString(i18next, codesAsString as string[]);
}

function extractCodeableList(dos: Dosage): CodeableConcept[] {
  let asNeededCodeableConcept = (dos as DosageR4).asNeededCodeableConcept;
  let asNeededFor = (dos as DosageR5).asNeededFor;
  return (
    asNeededFor ||
    (asNeededCodeableConcept !== undefined ? [asNeededCodeableConcept] : [])
  );
}

export function transformAsNeededToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let asNeededBoolean = (dos as DosageR4).asNeededBoolean;
  let asNeeded = (dos as DosageR5).asNeeded;
  let codeableList = extractCodeableList(dos);

  if (codeableList.length > 0) {
    return i18next.t("fields.asNeededFor", {
      reasons: fromCodeableConceptArrayToString(i18next, codeableList, config),
    });
  }

  let booleanValue = [asNeededBoolean, asNeeded].includes(true);
  return booleanValue ? i18next.t("fields.asNeeded") : undefined;
}
