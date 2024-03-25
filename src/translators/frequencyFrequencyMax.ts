import i18next from "i18next";
import type { Dosage } from "../types";

export function transformFrequencyFrequencyMaxToText(
  dos: Dosage,
): string | undefined {
  // If empty, return undefined
  if (dos.timing == undefined || dos.timing.repeat == undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let repeat = dos.timing.repeat;
  let frequency = repeat.frequency;
  let max = repeat.frequencyMax;

  // Do nothing if no frequency / frequencyMax, I am not a wizard
  if (frequency === undefined && max === undefined) {
    return undefined;
  } else {
    // Three cases

    // 1. Frequency and frequencyMax are present
    if (frequency !== undefined && max !== undefined) {
      return i18next.t("fields.frequency.withfrequencyMax", {
        count: max,
        frequency: frequency,
      });
    }

    // 2. Only frequencyMax is present
    if (max !== undefined) {
      return i18next.t("fields.frequencyMax.frequencyMax", { count: max });
    }

    // 3. Only frequency is present
    return i18next.t("fields.frequency.onlyFrequency", { count: frequency });
  }
}
