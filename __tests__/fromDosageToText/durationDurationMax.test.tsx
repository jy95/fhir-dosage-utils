// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - durationDurationMax", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["durationDurationMax"],
    });
  });

  test("No durationDurationMax", () => {
    const dosage: Dosage = {
      text: "no durationDurationMax",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("No durationUnit", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          duration: 1,
          durationMax: 3,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("duration and DurationMax", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          duration: 1,
          durationMax: 3,
          durationUnit: "d",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("over 1 day (maximum 3 days)");
  });

  test("durationMax only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          durationMax: 5,
          durationUnit: "d",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("(maximum 5 days)");
  });

  test("duration only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          duration: 3,
          durationUnit: "d",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("over 3 days");
  });
});
