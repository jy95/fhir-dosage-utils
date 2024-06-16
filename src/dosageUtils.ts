import { isNotUndefined } from "./internal/undefinedChecks";

import type { Dosage } from "./types";

export class Utils {
  /**
   * Does this array of Dosage objects contains only "sequential" instructions ?
   */
  containsOnlySequentialInstructions(dosages: Dosage[]): boolean {
    let sequencesNumbers = dosages
      .map((d) => d.sequence)
      .filter(isNotUndefined);

    let encounteredSequenceNumbers = new Set(sequencesNumbers);
    return [0, dosages.length].includes(encounteredSequenceNumbers.size);
  }

  /**
   * Turn this array of Dosage objects into a data structure useful to handle "sequential" and "concurrent" instructions (cf. "sequence" property).
   * @returns {Dosage[][]} - A two-dimensional array where each inner array contains Dosage objects belonging to the same sequence numberr.
   */
  groupBySequence(dosages: Dosage[]) {
    let groups: Record<number, Dosage[]> = {};
    let sequences = new Set<number>();

    for (let idx = 0; idx < dosages.length; idx++) {
      const dosage = dosages[idx];

      let sequenceNr = dosage.sequence || idx + 1;
      let localGroup = groups[sequenceNr] || [];

      localGroup.push(dosage);
      groups[sequenceNr] = localGroup;

      sequences.add(sequenceNr);
    }

    // By using the Set values, we are sure it is returned in the way Dosages were written
    return Array.from(sequences, (sequence) => groups[sequence]);
  }
}
