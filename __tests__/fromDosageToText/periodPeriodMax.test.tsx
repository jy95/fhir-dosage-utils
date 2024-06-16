// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils, Configurator } from "../../src/index";

import type { Dosage } from "fhir/r4";

describe("fromDosageToText - periodPeriodMax", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["periodPeriodMax"],
    });
  });

  test("No periodPeriodMax", () => {
    const dosage: Dosage = {
      text: "no periodPeriodMax",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("period and periodMax", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          period: 1,
          periodMax: 3,
          periodUnit: "d",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("every 1 to 3 days");
  });

  test("periodMax only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          periodMax: 3,
          periodUnit: "d",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("every 3 days");
  });

  test("period only", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          period: 1,
          periodUnit: "d",
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("every day");
  });
});
