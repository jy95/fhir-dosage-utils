// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - maxDosePerAdministration", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["maxDosePerAdministration"],
    });
  });

  test("No maxDosePerAdministration", () => {
    const dosage: Dosage = {
      text: "no maxDosePerAdministration",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Unit without value", () => {
    const dosage: Dosage = {
      maxDosePerAdministration: {
        unit: "mg",
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("up to a maximum of 1 mg per dose");
  });

  test("Simple case", () => {
    const dosage: Dosage = {
      maxDosePerAdministration: {
        value: 3,
        unit: "mg",
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("up to a maximum of 3 mg per dose");
  });
});
