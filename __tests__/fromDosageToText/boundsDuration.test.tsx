// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

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

  test("with other ValueSet", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsDuration: {
            value: 3,
            unit: "days",
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("for 3 days");
  });
});
