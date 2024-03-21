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

    let quantityLow = low?.value || 1;
    let quantityHigh = high?.value || 1;
    
    // linkwords
    let atARateOf = i18next.t("common:atARateOf");
    let to = i18next.t("common:to");
    // TODO replace code by human text and with plural (001 => tablets) later
    let unit = high?.unit || "";

    return `${atARateOf} ${quantityLow} ${to} ${quantityHigh} ${unit}`;
}