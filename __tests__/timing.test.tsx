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
    {
      title: "With breakfast",
      expected: "at breakfast",
      dosage: {
        timing: {
          repeat: {
            when: ["CM"],
          },
        },
      },
    },
    {
      title: "For 5 minutes, 10 minutes before meals",
      expected: "over 5 minutes - 10 minutes before meal",
      dosage: {
        timing: {
          repeat: {
            duration: 5,
            durationUnit: "min",
            when: ["AC"],
            offset: 10,
          },
        },
      },
    },
    {
      title: "1 tablet 3 times daily, 30 minutes before meals",
      expected: "1 tablet - 3 times every day - 30 minutes before meal",
      dosage: {
        doseAndRate: [
          {
            doseQuantity: {
              value: 1,
              unit: "tablet",
            },
          },
        ],
        timing: {
          repeat: {
            frequency: 3,
            period: 1,
            periodUnit: "d",
            when: ["AC"],
            offset: 30,
          },
        },
      },
    },
    {
      title: "BID, 30 mins before meal, for next 10 days",
      expected: "2 times every day - 30 minutes before meal - for 10 days",
      dosage: {
        timing: {
          repeat: {
            frequency: 2,
            period: 1,
            periodUnit: "d",
            when: ["AC"],
            offset: 30,
            boundsDuration: {
              value: 10,
              code: "d",
              system: "http://hl7.org/fhir/ValueSet/duration-units",
            },
          },
        },
      },
    },
    {
      title: "TID, for 14 days",
      expected: "3 times every day - for 14 days",
      dosage: {
        timing: {
          repeat: {
            frequency: 3,
            period: 1,
            periodUnit: "d",
            boundsDuration: {
              value: 14,
              code: "d",
              system: "http://hl7.org/fhir/ValueSet/duration-units",
            },
          },
        },
      },
    },
    // TODO add test case "BID, start on 7/1/2015 at 1:00 PM"
    {
      title: "Mon, Wed, Fri Morning",
      expected:
        "1 time every day - during the morning - on Monday, Wednesday and Friday",
      dosage: {
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
            dayOfWeek: ["mon", "wed", "fri"],
            when: ["MORN"],
          },
        },
      },
    },
    {
      title: "Every day at 10am",
      expected: "1 time every day - at 10:00",
      dosage: {
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
            timeOfDay: ["10:00:00"],
          },
        },
      },
    },
    {
      title: "Take once, at any time",
      expected: "take 1 time",
      dosage: {
        timing: {
          repeat: {
            count: 1,
          },
        },
      },
    },
    {
      title: "Take every second day, in the morning, until 20 have been taken",
      expected: "1 time every 2 days - during the morning - take 20 times",
      dosage: {
        timing: {
          repeat: {
            frequency: 1,
            period: 2,
            periodUnit: "d",
            when: ["MORN"],
            count: 20,
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
