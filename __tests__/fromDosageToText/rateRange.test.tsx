// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - rateRange", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["rateRange"],
    });
  });

  test("No rateRange", () => {
    const dosage: Dosage = {
      text: "no rateRange",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Empty rateRange", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateRange: {},
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("high and low", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateRange: {
            low: {
              value: 3,
              unit: "pills",
            },
            high: {
              value: 5,
              unit: "pills",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at a rate of 3 to 5 pills");
  });

  test("high only", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateRange: {
            high: {
              value: 5,
              unit: "pills",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at a rate of up to 5 pills");
  });

  test("low only", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateRange: {
            low: {
              value: 3,
              unit: "pills",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at a rate of at least 3 pills");
  });
});
