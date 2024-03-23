import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

// Functions
import { defaultFromFHIRQuantityUnitToString } from "./utils/fromFHIRQuantityUnitToString";

// Types
import type { Dosage } from "fhir/r4";
import type {
  Language,
  Params,
  FromFHIRQuantityUnitToStringFct,
  DisplayOrder,
} from "./types";

export class FhirDosageUtils {
  // current language
  currentLng: Language;
  // resolver for quantity unit
  fromFHIRQuantityUnitToString: FromFHIRQuantityUnitToStringFct;
  // display order
  displayOrder: DisplayOrder[];

  // Set up lib, according provided parameters
  constructor(args?: Params) {
    this.currentLng = args?.language || "en";
    this.fromFHIRQuantityUnitToString =
      args?.fromFHIRQuantityUnitToString || defaultFromFHIRQuantityUnitToString;
    this.displayOrder = args?.displayOrder || [
      "method",
      "doseQuantity",
      "doseRange",
      "rateRatio",
      "rateQuantity",
      "rateRange",
      "durationDurationMax",
      "frequencyFrequencyMax",
      "periodPeriodMax",
      //"offsetWhen",
      //"dayOfWeek",
      //"timeOfDay",
      //"route",
      //"site",
      //"asNeededCodeableConcept",
      //"asNeeded",
      //"boundsDuration",
      //"boundsRange",
      //"countCountMax",
      //"event",
      //"maxDosePerPeriod",
      //"maxDosePerAdministration",
      //"maxDosePerLifetime",
      //"additionalInstruction",
      //"patientInstruction",
    ];
  }

  /**
   * To init i18next properly according requested criteria
   */
  async init() {
    i18next.use(ChainedBackend).init({
      fallbackLng: "en",
      lng: this.currentLng,
      defaultNS: "common",
      backend: {
        backends: [
          resourcesToBackend(
            (lng: string, ns: string) => import(`./locales/${lng}/${ns}.json`),
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
    this.currentLng = lng;
    return i18next.changeLanguage(lng);
  }

  /**
   * To change display order
   */
  changeDisplayOrder(order: DisplayOrder[]): void {
    this.displayOrder = order;
  }

  /**
   * Turn a FHIR Dosage object into text
   */
  fromDosageToText(dos: Dosage): string {
    
  }
}
