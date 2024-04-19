import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import resourcesToBackend from "i18next-resources-to-backend";

// Default values
import { defaultAttributes } from "../internal/defaultAttributes";

// Types
import type {
  Config,
  DisplayOrder,
  I18N,
  Language,
  NamespacesLocale,
  Params,
} from "../types";

export class Configurator {
  // Configuration (Immutability has its advantages ...)
  protected config: Config;
  // i18next instance
  // When multiple instances of the class are used, they must act independantly regardless of the others
  protected i18nInstance: I18N;

  // Set up lib, according provided parameters
  protected constructor(args?: Params) {
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
  protected async init() {
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
}
