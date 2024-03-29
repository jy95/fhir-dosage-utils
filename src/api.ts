import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

// Functions
import { defaultFromFHIRQuantityUnitToString } from "./utils/fromFHIRQuantityUnitToString";
import { defaultFromCodeableConceptToString } from "./utils/fromCodeableConceptToString";
import {
  transformDoseQuantityToText,
  transformDoseRangeToText,
  transformRateQuantityToText,
  transformRateRangeToText,
  transformRateRatioToText,
  transformDurationDurationMaxToText,
  transformFrequencyFrequencyMaxToText,
  transformPeriodPeriodMaxToText,
  transformOffsetWhenToText,
  transformDayOfWeekToText,
  transformTimeOfDayToText,
  transformAsNeededToText,
  transformBoundsDurationToText,
  transformBoundsRangeToText,
  transformCountCountMaxToText,
  transformEventToText,
  transformAdditionalInstructionToText,
  transformMaxDosePerLifetimeToText,
  transformMaxDosePerAdministrationToText,
} from "./translators";

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
  constructor(args?: Params) {
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
    let parts = this.config.displayOrder
      .map((entry) => {
        switch (entry) {
          case "additionalInstruction":
            return transformAdditionalInstructionToText(dos, this.config);
          case "asNeeded":
            return transformAsNeededToText(dos, this.config);
          case "boundsDuration":
            return transformBoundsDurationToText(dos, this.config);
          // TODO "boundsPeriod" later ?
          case "boundsRange":
            return transformBoundsRangeToText(dos, this.config);
          case "code":
            return this.config.fromCodeableConceptToString({
              language: this.config.language,
              code: dos.timing?.code,
            });
          case "countCountMax":
            return transformCountCountMaxToText(dos);
          case "dayOfWeek":
            return transformDayOfWeekToText(dos);
          case "doseQuantity":
            return transformDoseQuantityToText(dos, this.config);
          case "doseRange":
            return transformDoseRangeToText(dos, this.config);
          case "durationDurationMax":
            return transformDurationDurationMaxToText(dos);
          case "event":
            return transformEventToText(dos, this.config);
          case "frequencyFrequencyMax":
            return transformFrequencyFrequencyMaxToText(dos);
          case "frequencyFrequencyMaxPeriodPeriodMax":
            let subParts = [
              transformFrequencyFrequencyMaxToText(dos),
              transformPeriodPeriodMaxToText(dos),
            ].filter((s) => s !== undefined);
            return subParts.length > 0 ? subParts.join(" ") : undefined;
          case "maxDosePerAdministration":
            return transformMaxDosePerAdministrationToText(dos, this.config);
          // case "maxDosePerPeriod":
          case "maxDosePerLifetime":
            return transformMaxDosePerLifetimeToText(dos, this.config);
          case "method":
            return this.config.fromCodeableConceptToString({
              language: this.config.language,
              code: dos.method,
            });
          case "offsetWhen":
            return transformOffsetWhenToText(dos);
          case "patientInstruction":
            return dos.patientInstruction;
          case "periodPeriodMax":
            return transformPeriodPeriodMaxToText(dos);
          case "rateQuantity":
            return transformRateQuantityToText(dos, this.config);
          case "rateRange":
            return transformRateRangeToText(dos, this.config);
          case "rateRatio":
            return transformRateRatioToText(dos, this.config);
          case "route":
            return this.config.fromCodeableConceptToString({
              language: this.config.language,
              code: dos.route,
            });
          case "site":
            return this.config.fromCodeableConceptToString({
              language: this.config.language,
              code: dos.site,
            });
          case "timeOfDay":
            return transformTimeOfDayToText(dos);
        }
      })
      .filter((s) => s !== undefined);

    // Join each part with a separator
    return parts.join(this.config.displaySeparator);
  }
}
