import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

// Functions
import { fromDisplayOrderToResult } from "./utils/fromDisplayOrderToResult";
import { fromListToString } from "./utils/fromListToString";

// Default values
import { defaultAttributes } from "./internal/defaultAttributes";

// Types
import type {
  Dosage,
  Params,
  Config,
  Language,
  DisplayOrder,
  NamespacesLocale,
  I18N,
} from "./types";

export class FhirDosageUtils {
  // Configuration (Immutability has its advantages ...)
  config: Config;
  // i18next instance
  // When multiple instances of the class are used, they must act independantly regardless of the others
  private i18nInstance: I18N;

  // Set up lib, according provided parameters
  private constructor(args?: Params) {
    this.config = {
      // default attributes
      ...defaultAttributes,
      // attributes set by user
      ...args,
    };
    this.i18nInstance = i18next.createInstance();
  }

  /**
   * To init i18next properly according requested criteria
   */
  private async init() {
    // You should wait for init to complete (wait for the callback or promise resolution)
    // before using the t function!
    return await this.i18nInstance.use(ChainedBackend).init({
      //debug: true,
      fallbackLng: "en",
      lng: this.config.language,
      ns: ["common", "daysOfWeek", "eventTiming", "unitsOfTime"],
      defaultNS: "common",
      backend: {
        backends: [
          resourcesToBackend(
            // have to cast the function to be webpack / builder friendly
            async (lng: Language, ns: NamespacesLocale) =>
              import(`./locales/${lng}/${ns}.json`),
          ),
        ],
      },
    });
  }

  /**
   * Factory to create a fine-tuned instance of the utility class
   */
  static async build(args?: Params) {
    const instance = new FhirDosageUtils(args);
    await instance.init();
    return instance;
  }

  /**
   * To change language
   */
  async changeLanguage(lng: Language) {
    this.config = {
      ...this.config,
      language: lng,
    };
    return this.i18nInstance.changeLanguage(lng);
  }

  /**
   * Get current language
   */
  getLanguage() {
    return this.config.language;
  }

  /**
   * To change display order
   */
  changeDisplayOrder(order: DisplayOrder[]) {
    this.config = {
      ...this.config,
      displayOrder: order,
    };
  }

  /**
   * Get display order
   */
  getDisplayOrder() {
    return this.config.displayOrder;
  }

  /**
   * Get display separator
   */
  getDisplaySeparator() {
    return this.config.displaySeparator;
  }

  /**
   * Set display separator
   */
  changeDisplaySeparator(sep: string) {
    this.config = {
      ...this.config,
      displaySeparator: sep,
    };
  }

  /**
   * Get date time format options
   */
  getDateTimeFormatOptions() {
    return this.config.dateTimeFormatOptions;
  }

  /**
   * Set date time format options
   */
  changeDateTimeFormatOptions(opts: Intl.DateTimeFormatOptions) {
    this.config = {
      ...this.config,
      dateTimeFormatOptions: opts,
    };
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
      .filter((s) => s !== undefined);

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
   * Does this array of Dosage objects contains only "sequential" instructions ?
   */
  containsOnlySequentialInstructions(dosages: Dosage[]): boolean {
    // 1. Collect all sequences number
    let sequencesNumbers = dosages
      .map((d) => d.sequence)
      .filter((s) => s !== undefined);

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
