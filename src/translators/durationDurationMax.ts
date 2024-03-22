import i18next from 'i18next';
import type { Dosage } from "fhir/r4";

export function transformDurationDurationMaxToText(dos: Dosage): string | undefined {
    // If empty, return undefined
    if (dos.timing == undefined || dos.timing.repeat == undefined) {
        return undefined;
    }

    // Pickup the repeat interesting attributes
    let repeat = dos.timing.repeat;
    let duration = repeat.duration;
    let max = repeat.durationMax;
    let unit = repeat.durationUnit;

    // TODO


}