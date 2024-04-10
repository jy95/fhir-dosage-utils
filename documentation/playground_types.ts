import type { Dosage as DosageR4 } from "fhir/r4";

import type { Dosage as DosageR5 } from "fhir/r5";

import type { Params } from "fhir-dosage-utils";

// Let's use R4 for Playground from now ...
// ts-json-schema-generator can't do at the moment union with
export type Entry = DosageR4; //| DosageR5;

export type PlaygroundInput = Entry[];

export type Config = Exclude<
  Params,
  | "fromFHIRQuantityUnitToString"
  | "fromCodeableConceptToString"
  | "fromExtensionsToString"
>;
