import type { I18N } from "../types";

type LinkwordChoice = "and" | "then";
type TechnicalKey = "linkwords.and" | "linkwords.then";

const linkworsdMap = {
  and: "linkwords.and",
  then: "linkwords.then",
} satisfies Record<LinkwordChoice, TechnicalKey>;

// To make a list understandable for end-users
export function fromListToString(
  i18next: I18N,
  arr: string[],
  linkWord: LinkwordChoice = "and",
): string {
  // Split the array into two parts: all entries except the last one, and the last
  const firstString = arr.slice(0, -1).join(", ");
  const lastString = arr.slice(-1).join("");

  // concatenate the result
  const linkWordTechnicalKey = linkworsdMap[linkWord];
  const linkWordAsString =
    arr.length > 1 ? ` ${i18next.t(linkWordTechnicalKey)} ` : "";
  const finalString = firstString + linkWordAsString + lastString;
  return finalString;
}
