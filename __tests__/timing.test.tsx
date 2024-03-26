// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../src/index";

// types
import type { Dosage } from "fhir/r4";

// Inspired by https://build.fhir.org/datatypes.html#Timing
describe("Timing common examples", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build();
  });

  test("Every 8 hours", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          frequency: 1,
          period: 8,
          periodUnit: "h",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("1 time every 8 hours");
  });
});
