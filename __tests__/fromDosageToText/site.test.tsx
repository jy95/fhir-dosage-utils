// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - site", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["site"],
    });
  });

  test("No site", () => {
    const dosage: Dosage = {
      text: "no site",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Simple case", () => {
    const dosage: Dosage = {
      site: {
        coding: [
          {
            system: "http://hl7.org/fhir/ValueSet/approach-site-codes",
            code: "1910005",
            display: "Entire ear",
          },
        ],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("Entire ear");
  });
});
