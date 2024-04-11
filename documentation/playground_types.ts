import type { Dosage as DosageR4 } from "fhir/r4";

import type { Dosage as DosageR5 } from "fhir/r5";

import type { Params } from "fhir-dosage-utils";

// No need to enable all extensions
// https://github.com/vega/ts-json-schema-generator/issues/568
type DeepExclude<T, A> = T extends A
  ? never
  : T extends Record<string, never> | Array<any>
    ? { [K in keyof T]: DeepExclude<T[K], A> }
    : T;

type FilterNotStartingWith<
  T,
  Needle extends string,
> = T extends `${Needle}${infer Rest}` ? never : T;

type DeepOmit<T, K extends string> = T extends object
  ? {
      [P in keyof T as FilterNotStartingWith<P, K> extends never
        ? never
        : P]: DeepOmit<T[P], K>;
    }
  : T;

// Let's use R4 for Playground from now ...
// ts-json-schema-generator can't do at the moment union with DosageR5
type Entry = DeepOmit<DosageR4, "_">;

/**
 * @id Input
 */
export type PlaygroundInput = Entry[];

type LighterConfig = DeepExclude<
  Params,
  | "fromFHIRQuantityUnitToString"
  | "fromCodeableConceptToString"
  | "fromExtensionsToString"
>;

/**
 * @id Config
 */
export type Config = LighterConfig;
