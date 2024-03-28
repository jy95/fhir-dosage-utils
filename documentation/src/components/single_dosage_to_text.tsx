import React, { useState, useEffect } from "react";
import FhirDosageUtils from "fhir-dosage-utils";

// Types
import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";
import type { Params as Config } from "fhir-dosage-utils";
type Dosage = DosageR4 | DosageR5;

async function dosageToText(dos: Dosage, config: Config) {
  // Setup instance
  let dosageUtils = await FhirDosageUtils.build(config);

  return dosageUtils.fromDosageToText(dos);
}

export default function SingleDosageToText({
  dosage,
  config,
}: {
  dosage: Dosage;
  config: Config;
}): JSX.Element {
  const [dosageText, setDosageText] = useState("");

  useEffect(() => {
    async function fetchDosageText() {
      const text = await dosageToText(dosage, config);
      setDosageText(text);
    }

    fetchDosageText();
  }, [dosage, config]);

  return <p>{dosageText}</p>;
}
