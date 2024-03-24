// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromDosageToText - boundsDuration", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["boundsDuration"],
    });
  });

  test("No boundsDuration", () => {
    const dosage: Dosage = {
      text: "no boundsDuration",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("with http://hl7.org/fhir/ValueSet/duration-units ValueSet", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsDuration: {
            system: "http://hl7.org/fhir/ValueSet/duration-units",
            value: 3,
            code: "d",
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("for 3 days");
  });

  test("with other ValueSet (for example SNOMED CT)", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsDuration: {
            system: "http://snomed.info/sct",
            value: 3,
            code: "258703001",
            unit: "days",
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("for 3 days");
  });
});
