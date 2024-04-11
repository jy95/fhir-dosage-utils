import type { Dosage as DosageR4 } from "fhir/r4";

import type { Dosage as DosageR5 } from "fhir/r5";

import type { Params } from "fhir-dosage-utils";

// Let's use R4 for Playground from now ...
// ts-json-schema-generator can't do at the moment union with DosageR5
export type Entry = DosageR4;

/**
 * @id Input
 */
export type PlaygroundInput = Entry[];

type LighterConfig = Omit<
  Params,
  | "fromFHIRQuantityUnitToString"
  | "fromCodeableConceptToString"
  | "fromExtensionsToString"
>;

/**
 * @id Config
 */
export type Config = LighterConfig;
