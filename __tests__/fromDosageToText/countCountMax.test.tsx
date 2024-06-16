// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - countCountMax", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["countCountMax"],
    });
  });

  test("No countCountMax", () => {
    const dosage: Dosage = {
      text: "no countCountMax",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("count and countMax", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          count: 1,
          countMax: 3,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("take 1 to 3 times");
  });

  test("countMax only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          countMax: 3,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("take 3 times");
  });

  test("count only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          count: 1,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("take 1 time");
  });
});
