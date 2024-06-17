// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - doseRange", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["doseRange"],
    });
  });

  test("No doseRange", () => {
    const dosage: Dosage = {
      text: "no doseRange",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Empty doseRange", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          doseRange: {},
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
          doseRange: {
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
    expect(result).toBe("3 to 5 pills");
  });

  test("high only", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          doseRange: {
            high: {
              value: 5,
              unit: "pills",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("up to 5 pills");
  });

  test("low only", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          doseRange: {
            low: {
              value: 3,
              unit: "pills",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at least 3 pills");
  });

  test("No units", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          doseRange: {
            low: {
              value: 3,
            },
            high: {
              value: 5,
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("3 to 5");
  });
});
