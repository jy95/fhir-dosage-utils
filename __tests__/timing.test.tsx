// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../src/index";

// types
import type { Dosage } from "fhir/r4";

// Inspired by https://build.fhir.org/datatypes.html#Timing
describe("Timing common examples", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build();
  });

  const testCases: {
    title: string;
    dosage: Dosage;
    expected: string;
  }[] = [
    {
      title: "Every 8 hours",
      expected: "1 time every 8 hours",
      dosage: {
        timing: {
          repeat: {
            frequency: 1,
            period: 8,
            periodUnit: "h",
          },
        },
      },
    },
    {
      title: "Every 7 days",
      expected: "1 time every 7 days",
      dosage: {
        timing: {
          repeat: {
            frequency: 1,
            period: 7,
            periodUnit: "d",
          },
        },
      },
    },
    {
      title: "3 times a day",
      expected: "3 times every day",
      dosage: {
        timing: {
          repeat: {
            frequency: 3,
            period: 1,
            periodUnit: "d",
          },
        },
      },
    },
    {
      title: "3-4 times a day",
      expected: "3-4 times every day",
      dosage: {
        timing: {
          repeat: {
            frequency: 3,
            frequencyMax: 4,
            period: 1,
            periodUnit: "d",
          },
        },
      },
    },
    {
      title: "Every 4-6 hours",
      expected: "1 time every 4 to 6 hours",
      dosage: {
        timing: {
          repeat: {
            frequency: 1,
            period: 4,
            periodMax: 6,
            periodUnit: "h",
          },
        },
      },
    },
    {
      title: "Every 21 days for 1 hour",
      expected: "over 1 hour - 1 time every 21 days",
      dosage: {
        timing: {
          repeat: {
            duration: 1,
            durationUnit: "h",
            frequency: 1,
            period: 21,
            periodUnit: "d",
          },
        },
      },
    },
    {
      title: "Three times a week for 0.5 hour",
      expected: "over 0.5 hours - 3 times every week",
      dosage: {
        timing: {
          repeat: {
            duration: 0.5,
            durationUnit: "h",
            frequency: 3,
            period: 1,
            periodUnit: "wk",
          },
        },
      },
    },
  ];

  test.each(testCases)("$title", ({ dosage, expected }) => {
    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe(expected);
  });
});
