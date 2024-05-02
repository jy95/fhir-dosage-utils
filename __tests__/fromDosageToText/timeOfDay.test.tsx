// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - timeOfDay", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["timeOfDay"],
    });
  });

  test("No timeOfDay", () => {
    const dosage: Dosage = {
      text: "no timeOfDay",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("timeOfDay - empty", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          timeOfDay: [],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("timeOfDay - 1 item", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          timeOfDay: ["15:00:00"],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at 15:00");
  });

  test("timeOfDay - N+1 items", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          timeOfDay: ["15:00:00", "12:12:12"],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at 15:00 and 12:12:12");
  });
});
