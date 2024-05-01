import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";

// Default values
import { defaultAttributes } from "../internal/defaultAttributes";

// Types
import type {
  Config,
  DisplayOrder,
  I18N,
  Params,
  InitOptions,
  I18InitOptions,
} from "../types";

export class Configurator {
  // User Configuration
  protected config: Config;
  // i18next config
  protected i18nConfig: InitOptions;
  // i18next instance
  // When multiple instances of the class are used, they must act independantly regardless of the others
  protected i18nInstance: I18N;

  // Set up lib, according provided parameters
  protected constructor(userConfig?: Params, i18nConfig?: I18InitOptions) {
    // User config
    this.config = {
      // default attributes
      ...defaultAttributes,
      // attributes set by user
      ...userConfig,
    };
    // I18N config
    this.i18nConfig = {
      // default attributes
      fallbackLng: "en",
      lng: this.config.language,
      ns: [
        "common",
        "daysOfWeek",
        "eventTiming",
        "unitsOfTime",
        "quantityComparator",
      ],
      defaultNS: "common",
      // attributes set by user
      ...i18nConfig,
    };
    this.i18nInstance = i18next.createInstance();
  }

  /**
   * To init i18next properly according requested criteria
   */
  protected async init() {
    // You should wait for init to complete (wait for the callback or promise resolution)
    // before using the t function!
    return await this.i18nInstance.use(ChainedBackend).init(this.i18nConfig);
  }

  /**
   * To change language
   */
  async changeLanguage(lng: string) {
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
