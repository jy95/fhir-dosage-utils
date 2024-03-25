// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromDosageToText - rateRatio", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["rateRatio"],
    });
  });

  test("No rateRatio", () => {
    const dosage: Dosage = {
      text: "no rateRatio",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("numerator and denominator", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateRatio: {
            numerator: {
              value: 3,
              unit: "pills",
            },
            denominator: {
              value: 5,
              unit: "hours",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at a rate of 3 pills every 5 hours");
  });

  test("no numerator", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateRatio: {
            denominator: {
              value: 5,
              unit: "hours",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at a rate of 1  every 5 hours");
  });

  test("no denominator value", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateRatio: {
            numerator: {
              value: 3,
              unit: "pills",
            },
            denominator: {
              unit: "hour",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at a rate of 3 pills per hour");
  });
});
