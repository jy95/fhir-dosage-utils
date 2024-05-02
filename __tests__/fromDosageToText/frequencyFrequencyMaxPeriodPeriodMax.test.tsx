// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - frequencyFrequencyMaxPeriodPeriodMax", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["frequencyFrequencyMaxPeriodPeriodMax"],
    });
  });

  test("No frequencyFrequencyMaxPeriodPeriodMax", () => {
    const dosage: Dosage = {
      text: "no frequencyFrequencyMaxPeriodPeriodMax",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("frequencyFrequencyMax only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          frequency: 1,
          frequencyMax: 3,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("1-3 times");
  });

  test("periodPeriodMax only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          period: 1,
          periodMax: 3,
          periodUnit: "d",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("every 1 to 3 days");
  });

  test("frequencyFrequencyMax and periodPeriodMax", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          frequency: 1,
          frequencyMax: 3,
          period: 1,
          periodMax: 3,
          periodUnit: "d",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("1-3 times every 1 to 3 days");
  });
});
