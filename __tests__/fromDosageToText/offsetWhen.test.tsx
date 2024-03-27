// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromDosageToText - offsetWhen", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["offsetWhen"],
    });
  });

  test("No offsetWhen", () => {
    const dosage: Dosage = {
      text: "no offsetWhen",
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("offset - minutes", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          offset: 15,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("15 minutes");
  });

  test("offset - hours", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          offset: 60,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("1 hour");
  });

  test("offset - days", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          offset: 1440,
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("1 day");
  });

  test("when - empty", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          when: [],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("");
  });

  test("when - 1 item", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          when: ["MORN"],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("during the morning");
  });

  test("when - N+1 items", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          when: ["MORN", "AFT"],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("during the morning and during the afternoon");
  });

  test("when and offset together", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          offset: 15,
          when: ["MORN"],
        },
      },
    };

    let result = dosageUtils.fromDosageToText(dosage);
    expect(result).toBe("15 minutes during the morning");
  });
});
