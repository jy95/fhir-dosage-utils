// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - method", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["method"],
    });
  });

  test("No method", () => {
    const dosage: Dosage = {
      text: "no method",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Simple case", () => {
    const dosage: Dosage = {
      method: {
        coding: [
          {
            system: "http://hl7.org/fhir/ValueSet/administration-method-codes",
            code: "738996007",
            display: "Spray",
          },
        ],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("Spray");
  });
});
