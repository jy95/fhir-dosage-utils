import { fromRatioToString } from "../utils/fromRatioToString";
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";

// types
import type { DisplayOrderParams } from "../types";

export function transformRateRatioToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let rateRatio = extractMatchingDoseAndRateFirstEntry(dos, "rateRatio");

  // If not found, skip
  if (rateRatio === undefined) {
    return undefined;
  }

  // Turn ratio to text
  const ratioText = fromRatioToString({
    config,
    i18next,
    ratio: rateRatio,
  });

  if (ratioText === undefined) {
    return undefined;
  }

  return i18next.t("fields.rateRatio", {
    ratioText: ratioText,
  });
}
