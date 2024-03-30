// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

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

describe("fromDosageToText - boundsPeriod", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["boundsPeriod"],
      dateTimeFormatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    });
  });

  test("No boundsPeriod", () => {
    const dosage: Dosage = {
      text: "no boundsPeriod",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("start and end", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2011-05-23",
            end: "2011-05-27",
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(decodeHtmlEntities(result)).toBe("from 5/23/11 to 5/27/1");
  });

  test("start only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsPeriod: {
            start: "2015-02-07T13:28:17",
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(decodeHtmlEntities(result)).toBe("from 2/7/15, 1:28 PM");
  });

  test("end only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          boundsPeriod: {
            end: "2011-05-27",
          },
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(decodeHtmlEntities(result)).toBe("to 5/27/11");
  });
});
