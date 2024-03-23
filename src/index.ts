import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

// Functions
import { defaultFromFHIRQuantityUnitToString } from "./utils/fromFHIRQuantityUnitToString";

// Types
import type { FromFHIRQuantityUnitToStringFct } from "./utils/fromFHIRQuantityUnitToString";

export type Language = "en" | "fr" | "nl" | "de";

type Params = {
  /**
   * To set up the language
   * @default "en" (English)
   */
  language?: Language;
  /**
   * Function to turn a quantity unit (e.g UCUM "ml") into a string for humans (e.g "militier")
   * The choice to handle plural form or not is thus under the hands of people ;)
   */
  fromFHIRQuantityUnitToString?: FromFHIRQuantityUnitToStringFct;
};

export class FhirDosageUtils {
  // current language
  currentLng: Language;
  // resolver for quantity unit
  fromFHIRQuantityUnitToString: FromFHIRQuantityUnitToStringFct;

  constructor(args?: Params) {
    this.currentLng = args?.language || "en";
    this.fromFHIRQuantityUnitToString =
      args?.fromFHIRQuantityUnitToString || defaultFromFHIRQuantityUnitToString;
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
}
