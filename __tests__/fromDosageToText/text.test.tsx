// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - text", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["text"],
    });
  });

  test("No text", () => {
    const dosage: Dosage = {
      text: undefined,
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("text present", () => {
    const dosage: Dosage = {
      text: "SIG",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("SIG");
  });
});
