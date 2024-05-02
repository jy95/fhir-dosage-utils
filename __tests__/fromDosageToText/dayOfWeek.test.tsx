// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - dayOfWeek", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["dayOfWeek"],
    });
  });

  test("No dayOfWeek", () => {
    const dosage: Dosage = {
      text: "no dayOfWeek",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Empty", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          dayOfWeek: [],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("1 item", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          dayOfWeek: ["fri"],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("on Friday");
  });

  test("N+1 items", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          dayOfWeek: ["mon", "fri"],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("on Monday and Friday");
  });
});
