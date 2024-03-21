import i18next from 'i18next';
import type { Dosage } from "fhir/r4";

export function transformRateRatioToText(dos: Dosage): string | undefined {
    // If empty, return undefined
    if (dos.doseAndRate === undefined) {
        return undefined;
    }
    // Find the first entry that match criteria
    let rateRatio = dos.doseAndRate.find(s => s.rateRatio !== undefined);

    // If not found, skip
    if (rateRatio === undefined) {
        return undefined;
    }

    // num / dem
    let numerator = rateRatio.rateRatio!.numerator;
    let denominator = rateRatio.rateRatio!.denominator;

    let quantityNum = numerator?.value || 1;
    let quantityDenom = denominator?.value || 1;

    // linkwords
    let atARateOf = i18next.t("common:atARateOf");
    let joinWord = (quantityDenom === 1) ? i18next.t("common:per") : i18next.t("common:every");

    // TODO replace code by human text and with plural (001 => tablets) later
    let numeratorUnit = numerator?.unit || "";
    let denominatorUnit = denominator?.unit || "";

    return `${atARateOf} ${quantityNum} ${numeratorUnit} ${joinWord} ${quantityDenom} ${denominatorUnit}`;
}