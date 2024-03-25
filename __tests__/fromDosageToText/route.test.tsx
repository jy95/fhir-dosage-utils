// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromDosageToText - route", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["route"],
    });
  });

  test("No route", () => {
    const dosage: Dosage = {
      text: "no route",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Simple case", () => {
    const dosage: Dosage = {
      route: {
        coding: [
          {
            system: "http://hl7.org/fhir/ValueSet/route-codes",
            code: "26643006",
            display: "Oral route",
          },
        ],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("Oral route");
  });
});
