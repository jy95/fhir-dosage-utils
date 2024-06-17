// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils } from "../../src/index";

// For the WHY, consult this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#avoid_comparing_formatted_date_values_to_static_values
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    })
    .replace(/&#x([0-9A-Fa-f]+);/g, function (match, hex) {
      return String.fromCharCode(parseInt(hex, 16));
    });
}

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
    expect(decodeHtmlEntities(result)).toBe("on 01/01/2024");
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
    expect(decodeHtmlEntities(result)).toBe(
      "on 2018, June 1973 and 08/23/1905",
    );
  });
});
