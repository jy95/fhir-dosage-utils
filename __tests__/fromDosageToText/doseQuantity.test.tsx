// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - doseQuantity", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["doseQuantity"],
    });
  });

  test("No doseQuantity", () => {
    const dosage: Dosage = {
      text: "no doseQuantity",
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
          doseQuantity: {
            value: 3,
            unit: "pills",
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("3 pills");
  });

  test("Without value", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          doseQuantity: {
            unit: "pill",
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("1 pill");
  });
});
