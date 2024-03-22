import i18next from 'i18next';
import type { Dosage } from "fhir/r4";

export function transformDoseRangeToText(dos: Dosage): string | undefined {
    // If empty, return undefined
    if (dos.doseAndRate === undefined) {
        return undefined;
    }
    // Find the first entry that match criteria
    let doseRange = dos.doseAndRate.find(s => s.doseRange !== undefined);

    // If not found, skip
    if (doseRange === undefined) {
        return undefined;
    }

    let low = doseRange.doseRange!.low?.value;
    let high = doseRange.doseRange!.high?.value;

    // Three cases

    // 1. Both low & high are present
    if (high !== undefined && low !== undefined) {
        // TODO replace code by human text and with plural (001 => tablets) later
        let unit = doseRange.doseRange?.high?.unit || "";

        return i18next.t("fields.doseRange.lowAndHigh", {
            low: low,
            high: high,
            unit: unit
        });
    }

    // 2. Only high is present
    if (high !== undefined) {
        // TODO replace code by human text and with plural (001 => tablets) later
        let unit = doseRange.doseRange?.high?.unit || "";

        return i18next.t("fields.doseRange.onlyHigh", {
            high: high,
            unit: unit
        });
    }

    // 3. Only low is present
    // Warning, this case is kind dangerous and clinically unsafe so minimal effort on this ...

    // TODO replace code by human text and with plural (001 => tablets) later
    let lowUnit = doseRange.doseRange?.low?.unit || "";

    return i18next.t("fields.doseRange.onlyLow", {
        low: low,
        unit: lowUnit
    });

}