// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromDosageToText - timingExtension", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["timingExtension"],
    });
  });

  test("No extension", () => {
    const dosage: Dosage = {
      text: "no timingExtension",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Empty", () => {
    const dosage: Dosage = {
      timing: {
        extension: [],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("1 item", () => {
    const dosage: Dosage = {
      timing: {
        extension: [
          {
            url: "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/DosageOverride",
            valueBoolean: true,
          },
        ],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe(
      '{"url":"https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/DosageOverride","valueBoolean":true}',
    );
  });

  test("N+1 items", () => {
    const dosage: Dosage = {
      timing: {
        extension: [
          {
            url: "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/DosageOverride",
            valueBoolean: true,
          },
          {
            url: "https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/DosageOverrideReason",
            valueCodeableConcept: {
              text: "Respect my authority ! - Eric Cartman",
            },
          },
        ],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe(
      '{"url":"https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/DosageOverride","valueBoolean":true} {"url":"https://www.ehealth.fgov.be/standards/fhir/medication/StructureDefinition/DosageOverrideReason","valueCodeableConcept":{"text":"Respect my authority ! - Eric Cartman"}}',
    );
  });
});
