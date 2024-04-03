import { fromRatioToString } from "../utils/fromRatioToString";

// types
import type { DisplayOrderParams } from "../types";

export function transformRateRatioToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }
  // Find the first entry that match criteria
  let doseAndRate = dos.doseAndRate.find((s) => s.rateRatio !== undefined);

  // If not found, skip
  if (doseAndRate === undefined) {
    return undefined;
  }

  // Turn ratio to text
  const ratioText = fromRatioToString({
    config,
    i18next,
    ratio: doseAndRate.rateRatio!,
  });

  if (ratioText === undefined) {
    return undefined;
  }

  return i18next.t("fields.rateRatio", {
    ratioText: ratioText,
  });
}
