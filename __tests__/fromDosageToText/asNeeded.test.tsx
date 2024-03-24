// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";

describe("fromDosageToText - asNeeded", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["asNeeded"],
    });
  });

  test("No asNeeded ", () => {
    const dosage: DosageR4 = {
      text: "no additional instruction",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("asNeededBoolean = true", () => {
    const dosage: DosageR4 = {
      asNeededBoolean: true,
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("as required");
  });

  test("asNeeded = true", () => {
    const dosage: DosageR5 = {
      asNeeded: true,
    };

    // Later I will change the typing in the api class
    let result = dosageUtils.fromDosageToText(dosage as any);
    expect(result).toBe("as required");
  });

  test("asNeededCodeableConcept", () => {
    const dosage: DosageR4 = {
      asNeededCodeableConcept: {
        text: "when feeling bad",
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("when feeling bad");
  });

  test("asNeededFor", () => {
    const dosage: DosageR5 = {
      asNeededFor: [
        {
          text: "reason 1",
        },
        {
          text: "reason 2",
        },
      ],
    };

    // Later I will change the typing in the api class
    let result = dosageUtils.fromDosageToText(dosage as any);
    expect(result).toBe("reason 1 and reason 2");
  });
});
