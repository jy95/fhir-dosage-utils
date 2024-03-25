// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromDosageToText - rateQuantity", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["rateQuantity"],
    });
  });

  test("No rateQuantity", () => {
    const dosage: Dosage = {
      text: "no rateQuantity",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Empty", () => {
    const dosage: Dosage = {
      doseAndRate: [],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Simple case", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateQuantity: {
            value: 3,
            unit: "pills",
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at a rate of 3 pills");
  });
});
