import { fromRatioToString } from "../utils/fromRatioToString";
import { extractMatchingDoseAndRateFirstEntry } from "../internal/extractMatchingDoseAndRateFirstEntry";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { DisplayOrderParams } from "../types";

export function transformRateRatioToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let rateRatio = extractMatchingDoseAndRateFirstEntry(dos, "rateRatio");

  if (!isNotUndefined(rateRatio)) {
    return undefined;
  }

  const ratioText = fromRatioToString({
    config,
    i18next,
    ratio: rateRatio,
  });

  if (!isNotUndefined(ratioText)) {
    return undefined;
  }

  return i18next.t("fields.rateRatio", {
    ratioText: ratioText,
  });
}
