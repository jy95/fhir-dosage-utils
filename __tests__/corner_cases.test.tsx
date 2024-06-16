// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils } from "../src/index";

import type { Dosage } from "fhir/r4";

describe("Corner cases", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build();
  });

  test("fromCodeableConceptToString - empty coding", () => {
    const dosage: Dosage = {
      method: {
        coding: [],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("fromCodeableConceptToString - only a code without display", () => {
    const dosage: Dosage = {
      method: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "311501008",
          },
        ],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("311501008");
  });

  test("fromFHIRQuantityUnitToString - only a code", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          doseQuantity: {
            value: 42,
            code: "ml",
            system: "http://unitsofmeasure.org",
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("42 ml");
  });

  test("fromFHIRQuantityUnitToString - empty", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          doseQuantity: {
            value: 42,
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("42");
  });

  test("rateRatio - no denominator", () => {
    const dosage: Dosage = {
      doseAndRate: [
        {
          rateRatio: {
            numerator: {
              value: 3,
              unit: "pills",
            },
          },
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at a rate of 3 pills");
  });
});
