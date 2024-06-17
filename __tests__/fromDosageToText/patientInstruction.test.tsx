// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - patientInstruction", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["patientInstruction"],
    });
  });

  test("No patientInstruction", () => {
    const dosage: Dosage = {
      text: "no patientInstruction",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Simple case", () => {
    const dosage: Dosage = {
      patientInstruction: "patientInstruction",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("patientInstruction");
  });
});
