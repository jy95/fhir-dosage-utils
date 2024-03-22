import i18next from 'i18next';
import type { Dosage } from "fhir/r4";

export function transformRateRangeToText(dos: Dosage): string | undefined {
    // If empty, return undefined
    if (dos.doseAndRate === undefined) {
        return undefined;
    }
    // Find the first entry that match criteria
    let rateRange = dos.doseAndRate.find(s => s.rateRange !== undefined);

    // If not found, skip
    if (rateRange === undefined) {
        return undefined;
    }

    // low / high
    let low = rateRange.rateRange!.low;
    let high = rateRange.rateRange!.high;

    let quantityLow = low?.value;
    let quantityHigh = high?.value;

    // Three cases

    // 1. Both low & high are present
    if (quantityHigh !== undefined && quantityLow !== undefined) {
        // TODO replace code by human text and with plural (001 => tablets) later
        let unit = high?.unit || "";

        return i18next.t("fields.rateRange.lowAndHigh", {
            low: quantityLow,
            high: quantityHigh,
            unit: unit
        });

    }

    // 2. Only high is present
    if (quantityHigh !== undefined) {
        // TODO replace code by human text and with plural (001 => tablets) later
        let unit = high?.unit || "";

        return i18next.t("fields.rateRange.onlyHigh", {
            high: quantityHigh,
            unit: unit
        });
    }
    
    // 3. Only low is present
    // Warning, this case is kind dangerous and clinically unsafe so minimal effort on this ...

    // TODO replace code by human text and with plural (001 => tablets) later
    let lowUnit = low?.unit || "";

    return i18next.t("fields.rateRange.onlyLow", {
        low: quantityLow,
        unit: lowUnit
    });
}