// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";

describe("fromDosageToText - maxDosePerPeriod", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["maxDosePerPeriod"],
    });
  });

  test("No maxDosePerPeriod", () => {
    const dosage: DosageR4 = {
      text: "no maxDosePerPeriod",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("numerator and denominator", () => {
    const dosage: DosageR4 = {
      maxDosePerPeriod: {
        numerator: {
          value: 3,
          unit: "pills",
        },
        denominator: {
          value: 5,
          unit: "hours",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("up to a maximum of 3 pills every 5 hours");
  });

  test("denominator value equal to 1", () => {
    const dosage: DosageR4 = {
      maxDosePerPeriod: {
        numerator: {
          value: 3,
          unit: "pills",
        },
        denominator: {
          value: 1,
          unit: "hour",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("up to a maximum of 3 pills per hour");
  });

  test("Empty maxDosePerPeriod array", () => {
    const dosage: DosageR5 = {
      maxDosePerPeriod: [],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("N+1 items in maxDosePerPeriod array", () => {
    const dosage: DosageR5 = {
      maxDosePerPeriod: [
        {
          numerator: {
            value: 3,
            unit: "pills",
          },
          denominator: {
            value: 5,
            unit: "hours",
          },
        },
        {
          numerator: {
            value: 1000,
            unit: "mg",
          },
          denominator: {
            value: 1,
            unit: "hour",
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe(
      "up to a maximum of 3 pills every 5 hours and 1000 mg per hour",
    );
  });
});
