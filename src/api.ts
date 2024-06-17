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
  protected i18nInstance: I18N;

  protected constructor(config: Partial<Config>) {
    super();
    this.config = {
      ...defaultAttributes,
      ...config,
    };
    this.i18nInstance = i18next.createInstance();
  }

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

  static async build(config: Partial<Config> = {}) {
    const instance = new FhirDosageUtils(config);
    await instance.init();
    return instance;
  }

  getProperty<T extends PropertyKey>(key: T): Config[T] {
    return this.config[key];
  }

  setProperty<T extends SettableProperties>(
    key: T,
    value: Config[T],
  ): undefined {
    this.config[key] = value;
  }

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

  fromDosageToText(dos: Dosage): string {
    let order = this.config.displayOrder;
    return this.getFields(dos, ...order);
  }

  fromMultipleDosageToText(dosages: Dosage[]): string {
    if (this.containsOnlySequentialInstructions(dosages)) {
      return this.convertSequentialDosagesToText(dosages);
    }
    return this.convertGroupedDosagesToText(dosages);
  }

  private convertSequentialDosagesToText(dosages: Dosage[]): string {
    const dosagesAsText = dosages.map((d) => this.fromDosageToText(d));
    return fromListToString(this.i18nInstance, dosagesAsText, "then");
  }

  private convertConcurrentDosagesToText(dosages: Dosage[]): string {
    const concurrentInstructionsAsString = dosages.map((d) =>
      this.fromDosageToText(d),
    );
    return fromListToString(
      this.i18nInstance,
      concurrentInstructionsAsString,
      "and",
    );
  }

  private convertGroupedDosagesToText(dosages: Dosage[]): string {
    const sortedDosages = this.groupBySequence(dosages);
    const sequentialInstructions = sortedDosages.map((d) =>
      this.convertConcurrentDosagesToText(d),
    );
    return fromListToString(this.i18nInstance, sequentialInstructions, "then");
  }
}
