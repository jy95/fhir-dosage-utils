import React, { useState, useEffect } from "react";
import FhirDosageUtils from "fhir-dosage-utils";

// Types
import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r4";

type Dosage = DosageR4 | DosageR5;
type Language = "en" | "fr" | "nl" | "de";

async function dosageToText(dos: Dosage, lang: Language) {
  // Setup instance
  let dosageUtils = await FhirDosageUtils.build({
    language: lang,
  });

  return dosageUtils.fromDosageToText(dos);
}

export default function SingleDosageToText({
  dosage,
  lang,
}: {
  dosage: Dosage;
  lang: Language;
}): JSX.Element {
  const [dosageText, setDosageText] = useState("");

  useEffect(() => {
    async function fetchDosageText() {
      const text = await dosageToText(dosage, lang);
      setDosageText(text);
    }

    fetchDosageText();
  }, [dosage, lang]);

  return <p>{dosageText}</p>;
}
