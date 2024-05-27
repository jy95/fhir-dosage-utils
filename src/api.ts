import { Configurator } from "./classes/Configurator";

import { fromDisplayOrderToResult } from "./utils/fromDisplayOrderToResult";
import { fromListToString } from "./utils/fromListToString";
import { isNotUndefined } from "./internal/undefinedChecks";

import type {
  Params,
  Dosage,
  DisplayOrder,
  I18InitOptions,
  NamespacesLocale,
} from "./types";

import resourcesToBackend from "i18next-resources-to-backend";
const defaultI18NConfig: I18InitOptions = {
  backend: {
    backends: [
      resourcesToBackend(
        async (lng: string, ns: NamespacesLocale) =>
          import(`./locales/${lng}/${ns}.json`),
      ),
    ],
  },
};

export class FhirDosageUtils extends Configurator {
  /**
   * Factory to create a fine-tuned instance of the utility class
   */
  static async build(
    userConfig?: Params,
    i18nConfig: I18InitOptions = defaultI18NConfig,
  ) {
    const instance = new FhirDosageUtils(userConfig, i18nConfig);
    await instance.init();
    return instance;
  }

  /**
   * Does this array of Dosage objects contains only "sequential" instructions ?
   */
  containsOnlySequentialInstructions(dosages: Dosage[]): boolean {
    let sequencesNumbers = dosages
      .map((d) => d.sequence)
      .filter(isNotUndefined);

    let encounteredSequenceNumbers = new Set(sequencesNumbers);

    return (
      encounteredSequenceNumbers.size === 0 ||
      encounteredSequenceNumbers.size === dosages.length
    );
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

  /**
   * From a single dosage, extract specific field(s) requested by user.
   * Some use cases could request to split part of the object for given needs (quantity and timing separately)
   */
  getFields(dos: Dosage, ...order: DisplayOrder[]): string {
    let parts = order
      .map((entry) =>
        fromDisplayOrderToResult({
          config: this.config,
          dos: dos,
          entry: entry,
          i18next: this.i18nInstance,
        }),
      )
      .filter(isNotUndefined);

    return parts.join(this.config.displaySeparator);
  }

  /**
   * Turn a FHIR Dosage object into text
   */
  fromDosageToText(dos: Dosage): string {
    let order = this.config.displayOrder;
    return this.getFields(dos, ...order);
  }

  /**
   * Turn multiple FHIR Dosage objects into text
   */
  fromMultipleDosageToText(dosages: Dosage[]): string {
    const hasOnlySequentialInstructions =
      this.containsOnlySequentialInstructions(dosages);

    if (hasOnlySequentialInstructions) {
      const dosagesAsText = dosages.map((d) => this.fromDosageToText(d));
      return fromListToString(this.i18nInstance, dosagesAsText, "then");
    }

    let sortedDosages = this.groupBySequence(dosages);

    let sequentialInstructions: string[] = sortedDosages.map(
      (concurrentInstructions) => {
        let concurrentInstructionsAsString = concurrentInstructions.map(
          (dosage) => this.fromDosageToText(dosage),
        );
        return fromListToString(
          this.i18nInstance,
          concurrentInstructionsAsString,
          "and",
        );
      },
    );

    return fromListToString(this.i18nInstance, sequentialInstructions, "then");
  }
}
