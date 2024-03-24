// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromDosageToText - event", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["event"],
    });
  });

  test("No event", () => {
    const dosage: Dosage = {
      text: "no event",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("Empty", () => {
    const dosage: Dosage = {
      timing: {
        event: [],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("1 item", () => {
    const dosage: Dosage = {
      timing: {
        event: ["2024-01-01"],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at 1/1/2024");
  });

  test("N+1 items", () => {
    const dosage: Dosage = {
      timing: {
        event: [
          // As explained on https://build.fhir.org/datatypes.html#dateTime
          "2018",
          "1973-06",
          "1905-08-23",
        ],
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("at 1/1/2018, 6/1/1973 and 8/23/1905");
  });
});
