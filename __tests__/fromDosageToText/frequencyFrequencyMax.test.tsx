// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - frequencyFrequencyMax", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["frequencyFrequencyMax"],
    });
  });

  test("No frequencyFrequencyMax", () => {
    const dosage: Dosage = {
      text: "no frequencyFrequencyMax",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("frequency and frequencyMax", () => {
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

  test("frequencyMax only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          frequencyMax: 5,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("up to 5 times");
  });

  test("frequency only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          frequency: 3,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("3 times");
  });
});
