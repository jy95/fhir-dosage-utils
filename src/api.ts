import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";

import { defaultAttributes } from "./configurator";
import { Utils } from "./dosageUtils";
import { fromDisplayOrderToResult } from "./utils/fromDisplayOrderToResult";
import { fromListToString } from "./utils/fromListToString";
import { isNotUndefined } from "./internal/undefinedChecks";

import type { I18N, Dosage, DisplayOrder, Config } from "./types";

type PropertyKey = keyof Config;
type SettableProperties = Exclude<PropertyKey, "language">;

export class FhirDosageUtils extends Utils {
  protected config: Config;
  // When multiple instances of the class are used, they must act independantly regardless of the others
  protected i18nInstance: I18N;

  protected constructor(config: Partial<Config>) {
    super();
    this.config = {
      ...defaultAttributes,
      ...config,
    };
    this.i18nInstance = i18next.createInstance();
  }

  /**
   * To init i18next properly according requested criteria
   */
  protected async init() {
    return await this.i18nInstance.use(ChainedBackend).init({
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
      ...this.config.i18nConfig,
    });
  }

  /**
   * Factory to create a fine-tuned instance of the utility class
   */
  static async build(config: Partial<Config> = {}) {
    const instance = new FhirDosageUtils(config);
    await instance.init();
    return instance;
  }

  /**
   * Extract wanted property from config
   */
  getProperty<T extends PropertyKey>(key: T): Config[T] {
    return this.config[key];
  }

  /**
   * Set wanted property to config
   */
  setProperty<T extends SettableProperties>(
    key: T,
    value: Config[T],
  ): undefined {
    this.config[key] = value;
  }

  /**
   * To change language
   */
  async changeLanguage(lng: string) {
    this.config["language"] = lng;
    return this.i18nInstance.changeLanguage(lng);
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
