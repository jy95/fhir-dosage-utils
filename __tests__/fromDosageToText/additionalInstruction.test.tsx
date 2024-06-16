// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - additionalInstruction", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["additionalInstruction"],
    });
  });

  test("No additional instruction", () => {
    const dosage: Dosage = {
      text: "no additional instruction",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Empty", () => {
    const dosage: Dosage = {
      additionalInstruction: [],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("1 item", () => {
    const dosage: Dosage = {
      additionalInstruction: [
        {
          text: "Instruction 1",
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("Instruction 1");
  });

  test("N+1 items", () => {
    const dosage: Dosage = {
      additionalInstruction: [
        {
          text: "Instruction 1",
        },
        {
          text: "Instruction 2",
        },
      ],
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("Instruction 1 and Instruction 2");
  });
});
