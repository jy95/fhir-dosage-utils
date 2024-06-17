// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - boundsRange", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["boundsRange"],
    });
  });

  test("No boundsRange", () => {
    const dosage: Dosage = {
      text: "no boundsRange",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Empty boundsRange", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsRange: {},
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("high and low", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsRange: {
            low: {
              system: "http://hl7.org/fhir/ValueSet/duration-units",
              value: 3,
              code: "d",
            },
            high: {
              system: "http://hl7.org/fhir/ValueSet/duration-units",
              value: 5,
              code: "d",
            },
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("for 3 to 5 days");
  });

  test("high only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsRange: {
            high: {
              system: "http://hl7.org/fhir/ValueSet/duration-units",
              value: 5,
              code: "d",
            },
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("for up to 5 days");
  });

  test("low only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsRange: {
            low: {
              value: 5,
              unit: "days",
            },
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("for at least 5 days");
  });
});
