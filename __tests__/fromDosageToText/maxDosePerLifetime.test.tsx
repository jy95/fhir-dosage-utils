// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromDosageToText - maxDosePerLifetime", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["maxDosePerLifetime"],
    });
  });

  test("No maxDosePerLifetime", () => {
    const dosage: Dosage = {
      text: "no maxDosePerLifetime",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Unit without value", () => {
    const dosage: Dosage = {
      maxDosePerLifetime: {
        unit: "mg",
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("up to a maximum of 1 mg for the lifetime of patient");
  });

  test("Simple case", () => {
    const dosage: Dosage = {
      maxDosePerLifetime: {
        value: 3,
        unit: "mg",
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("up to a maximum of 3 mg for the lifetime of patient");
  });
});
