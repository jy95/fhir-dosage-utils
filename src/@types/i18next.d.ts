// https://www.i18next.com/overview/typescript

// import the original type declarations
import "i18next";
import { resources, defaultNS } from "../i18n";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)["en"];
  }
}
