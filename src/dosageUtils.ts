import { isNotUndefined } from "./internal/undefinedChecks";
import type { Dosage } from "./types";

export class Utils {
  // Does this array of Dosage objects contains only "sequential" instructions ?
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
    let sequences = new Set<number | undefined>();
    let sequencesMap = new Map<number | undefined, Dosage[]>();

    for (let dosage of dosages) {
      let sequenceNr = dosage.sequence;
      let localGroup = sequencesMap.get(sequenceNr) ?? [];
      localGroup.push(dosage);
      sequencesMap.set(sequenceNr, localGroup);
      sequences.add(sequenceNr);
    }

    return Array.from(
      sequences,
      (sequence) => sequencesMap.get(sequence) as Dosage[],
    );
  }
}
