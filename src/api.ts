import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

// Functions
import { defaultFromFHIRQuantityUnitToString } from "./utils/fromFHIRQuantityUnitToString";
import { defaultFromCodeableConceptToString } from "./utils/fromCodeableConceptToString";
import { defaultFromExtensionsToString } from "./utils/fromExtensionsToString";
import { fromDisplayOrderToResult } from "./utils/fromDisplayOrderToResult";
import { fromListToString } from "./utils/fromListToString";

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

// backends i18next
const localeImport = async (lng: Language, ns: NamespacesLocale) =>
  import(`./locales/${lng}/${ns}.json`);

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
      language: "en",
      fromFHIRQuantityUnitToString: defaultFromFHIRQuantityUnitToString,
      fromCodeableConceptToString: defaultFromCodeableConceptToString,
      fromExtensionsToString: defaultFromExtensionsToString,
      displayOrder: [
        "method",
        "doseQuantity",
        "doseRange",
        "rateRatio",
        "rateQuantity",
        "rateRange",
        "durationDurationMax",
        "frequencyFrequencyMaxPeriodPeriodMax",
        "offsetWhen",
        "dayOfWeek",
        "timeOfDay",
        "route",
        "site",
        "asNeeded",
        "boundsDuration",
        "boundsPeriod",
        "boundsRange",
        "countCountMax",
        "event",
        "code",
        "maxDosePerPeriod",
        "maxDosePerAdministration",
        "maxDosePerLifetime",
        "additionalInstruction",
        "patientInstruction",
      ],
      displaySeparator: " - ",
      dateTimeFormatOptions: {},
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
            localeImport as any,
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
   * To change display order
   */
  changeDisplayOrder(order: DisplayOrder[]): void {
    this.config = {
      ...this.config,
      displayOrder: order,
    };
  }

  /**
   * Turn a FHIR Dosage object into text
   */
  fromDosageToText(dos: Dosage): string {
    // iterate on each key and generate a string from each part
    let order = this.config.displayOrder;
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
   * Turn multiple FHIR Dosage object into text
   */
  fromMultipleDosageToText(dosages: Dosage[]): string {
    // As we can have concurrent / sequential instructions, we need a generic algorithm to do the job

    // 1. Collect all sequences number
    let sequencesNumbers = dosages
      .map((d) => d.sequence)
      .filter((s) => s !== undefined);

    // 2. Convert it to a Set
    let encounteredSequenceNumbers = new Set(sequencesNumbers);

    // 3. We have a "sequential" situation in two cases
    // A) No sequence number were provided
    // B) All sequence numbers are different
    if (
      encounteredSequenceNumbers.size === 0 ||
      encounteredSequenceNumbers.size === dosages.length
    ) {
      const dosagesAsText = dosages.map((d) => this.fromDosageToText(d));
      return fromListToString(this.i18nInstance, dosagesAsText, "then");
    }

    // 4. We have both "sequential" and "concurrent" instructions - time to see what is the configuration
    let groups: Record<number, string[]> = {};
    let sequences = new Set<number>();

    for (let idx = 0; idx < dosages.length; idx++) {
      // Get dosage object
      const dosage = dosages[idx];

      // Get the sequence number (normally, in real world, it should be present in this case)
      // If no sequence number, assume it is idx + 1
      let sequenceNr = dosage.sequence || idx + 1;

      // Generate the text version
      let dosageAsText = this.fromDosageToText(dosage);

      // Retrieve of create previous entries for this sequence number
      let localGroup = groups[sequenceNr] || [];

      // Add entry
      localGroup.push(dosageAsText);

      // Pushback result
      groups[sequenceNr] = localGroup;

      // For reminder of the parsed sequence
      sequences.add(sequenceNr);
    }

    // 5. Now that data structures are filled, it is a piece of cake to generate the result
    let sequentialInstructions: string[] = [...sequences.values()].map(
      (sequence) => {
        let concurrentInstructions = groups[sequence];
        return fromListToString(this.i18nInstance, concurrentInstructions, "and");
      },
    );

    return fromListToString(this.i18nInstance, sequentialInstructions, "then");
  }
}
