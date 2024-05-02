// Classe(s)
import { Configurator } from "./classes/Configurator";

// Functions
import { fromDisplayOrderToResult } from "./utils/fromDisplayOrderToResult";
import { fromListToString } from "./utils/fromListToString";
import { isNotUndefined } from "./internal/undefinedChecks";

// Types
import type {
  Params,
  Dosage,
  DisplayOrder,
  I18InitOptions,
  NamespacesLocale,
} from "./types";

// I18n default config
import resourcesToBackend from "i18next-resources-to-backend";
const defaultI18NConfig: I18InitOptions = {
  backend: {
    backends: [
      resourcesToBackend(
        // have to cast the function to be webpack / builder friendly
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
    // 1. Collect all sequences number
    let sequencesNumbers = dosages
      .map((d) => d.sequence)
      .filter(isNotUndefined);

    // 2. Convert it to a Set
    let encounteredSequenceNumbers = new Set(sequencesNumbers);

    // 3. We have a "sequential" situation in two cases
    // A) No sequence number were provided
    // B) All sequence numbers are different
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
    // Prepare variables
    let groups: Record<number, Dosage[]> = {};
    let sequences = new Set<number>();

    for (let idx = 0; idx < dosages.length; idx++) {
      // Get dosage object
      const dosage = dosages[idx];

      // Get the sequence number (normally, in real world, it should be present in this case)
      // If no sequence number, assume it is idx + 1
      let sequenceNr = dosage.sequence || idx + 1;

      // Retrieve of create previous entries for this sequence number
      let localGroup = groups[sequenceNr] || [];

      // Add entry
      localGroup.push(dosage);

      // Pushback result
      groups[sequenceNr] = localGroup;

      // For reminder of the parsed sequence
      sequences.add(sequenceNr);
    }

    // By using the Set values, we are sure it is returned in the way Dosages were written
    return [...sequences.values()].map((sequence) => {
      let concurrentInstructions = groups[sequence];
      return concurrentInstructions;
    });
  }

  /**
   * From a single dosage, extract specific field(s) requested by user.
   * Some use cases could request to split part of the object for given needs (quantity and timing separately)
   */
  getFields(dos: Dosage, ...order: DisplayOrder[]): string {
    // iterate on each key and generate a string from each part
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

    // Join each part with a separator
    return parts.join(this.config.displaySeparator);
  }

  /**
   * Turn a FHIR Dosage object into text
   */
  fromDosageToText(dos: Dosage): string {
    // iterate on each key and generate a string from each part
    let order = this.config.displayOrder;
    return this.getFields(dos, ...order);
  }

  /**
   * Turn multiple FHIR Dosage objects into text
   */
  fromMultipleDosageToText(dosages: Dosage[]): string {
    // As we can have concurrent / sequential instructions, we need a generic algorithm to do the job
    const hasOnlySequentialInstructions =
      this.containsOnlySequentialInstructions(dosages);

    // Sequential instructions
    if (hasOnlySequentialInstructions) {
      const dosagesAsText = dosages.map((d) => this.fromDosageToText(d));
      return fromListToString(this.i18nInstance, dosagesAsText, "then");
    }

    // We have both "sequential" and "concurrent" instructions - time to see what is the configuration
    let sortedDosages = this.groupBySequence(dosages);

    // Now that data structures are filled, it is a piece of cake to generate the result
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
