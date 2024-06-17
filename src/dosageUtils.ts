import { isNotUndefined } from "./internal/undefinedChecks";
import type { Dosage } from "./types";

export class Utils {
  containsOnlySequentialInstructions(dosages: Dosage[]): boolean {
    let sequencesNumbers = dosages
      .map((d) => d.sequence)
      .filter(isNotUndefined);

    let encounteredSequenceNumbers = new Set(sequencesNumbers);
    return [0, dosages.length].includes(encounteredSequenceNumbers.size);
  }

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
