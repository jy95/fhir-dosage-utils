// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import FhirDosageUtils from "../src/index";

// types
import type { Dosage } from "fhir/r4";

describe("fromMultipleDosageToText", () => {
  let dosageUtils: FhirDosageUtils;

  beforeAll(async () => {
    dosageUtils = await FhirDosageUtils.build({
      displayOrder: ["text"],
    });
  });

  test("Empty dosage array", () => {
    let result = dosageUtils.fromMultipleDosageToText([]);
    expect(result).toBe("");
  });

  test("Sequential instructions - without sequence numbers", () => {
    const dosages: Dosage[] = [
      {
        text: "Instructions 1",
      },
      {
        text: "Instructions 2",
      },
    ];

    let result = dosageUtils.fromMultipleDosageToText(dosages);
    expect(result).toBe("Instructions 1 then Instructions 2");
  });

  test("Sequential instructions - with sequence numbers", () => {
    const dosages: Dosage[] = [
      {
        sequence: 1,
        text: "Instructions 1",
      },
      {
        sequence: 2,
        text: "Instructions 2",
      },
    ];

    let result = dosageUtils.fromMultipleDosageToText(dosages);
    expect(result).toBe("Instructions 1 then Instructions 2");
  });

  test("Sequential instructions - with and without sequence numbers", () => {
    const dosages: Dosage[] = [
      {
        sequence: 1,
        text: "Instructions 1",
      },
      {
        text: "Instructions 2",
      },
    ];

    let result = dosageUtils.fromMultipleDosageToText(dosages);
    expect(result).toBe("Instructions 1 then Instructions 2");
  });

  test("Concurrent instructions", () => {
    const dosages: Dosage[] = [
      {
        sequence: 1,
        text: "Instructions 1",
      },
      {
        sequence: 2,
        text: "Instructions 2A",
      },
      {
        sequence: 2,
        text: "Instructions 2B",
      },
    ];

    let result = dosageUtils.fromMultipleDosageToText(dosages);
    expect(result).toBe("Instructions 1 then Instructions 2A and Instructions 2B");
  });
});
