// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - code", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["code"],
    });
  });

  test("No code", () => {
    const dosage: Dosage = {
      text: "no code",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Simple case", () => {
    const dosage: Dosage = {
      timing: {
        code: {
          text: "Take medication in the morning on weekends and days off work",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe(
      "Take medication in the morning on weekends and days off work",
    );
  });
});
