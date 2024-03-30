import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

// Functions
import { defaultFromFHIRQuantityUnitToString } from "./utils/fromFHIRQuantityUnitToString";
import { defaultFromCodeableConceptToString } from "./utils/fromCodeableConceptToString";
import { fromDisplayOrderToResult } from "./utils/fromDisplayOrderToResult";

// Types
import type {
  Dosage,
  Params,
  Config,
  Language,
  DisplayOrder,
  NamespacesLocale,
} from "./types";

// backends i18next
const localeImport = async (lng: Language, ns: NamespacesLocale) =>
  import(`./locales/${lng}/${ns}.json`);

export class FhirDosageUtils {
  // Configuration (Immutability has its advantages ...)
  config: Config;

  // Set up lib, according provided parameters
  private constructor(args?: Params) {
    this.config = {
      // default attributes
      language: "en",
      fromFHIRQuantityUnitToString: defaultFromFHIRQuantityUnitToString,
      fromCodeableConceptToString: defaultFromCodeableConceptToString,
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
  }

  /**
   * To init i18next properly according requested criteria
   */
  async init() {
    return await i18next.use(ChainedBackend).init({
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
    return i18next.changeLanguage(lng);
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
      .map((entry) => fromDisplayOrderToResult(dos, this.config, entry))
      .filter((s) => s !== undefined);

    // Join each part with a separator
    return parts.join(this.config.displaySeparator);
  }
}
