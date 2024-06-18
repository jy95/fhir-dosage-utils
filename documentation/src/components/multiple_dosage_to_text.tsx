import React, { useState, useEffect } from "react";
import { FhirDosageUtils } from "fhir-dosage-utils";
import { decode } from "html-entities";
import CodeBlock from "@theme/CodeBlock";

// Types
import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";
import type { Config } from "fhir-dosage-utils";
type Dosage = DosageR4 | DosageR5;

// For the WHY, consult this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#avoid_comparing_formatted_date_values_to_static_values
function decodeHtmlEntities(text: string): string {
  return decode(text);
}

export default function MultipleDosagesToText({
  dosages,
  config,
}: {
  dosages: Dosage[];
  config?: Config;
}): JSX.Element {
  const [dosageText, setDosageText] = useState("");
  const [language, setLanguage] = useState(config?.language || "en");
  const [dosageUtils, setDosageUtils] = useState<FhirDosageUtils | null>(null);

  // Set up instance
  useEffect(() => {
    async function initializeDosageUtils() {
      const utils = await FhirDosageUtils.build({
        ...config,
      });
      setDosageUtils(utils);
    }

    initializeDosageUtils();
  }, [config]);

  // Set up translation
  useEffect(() => {
    async function fetchDosageText() {
      if (dosageUtils) {
        const text = dosageUtils.fromMultipleDosageToText(dosages);
        setDosageText(text);
      }
    }
    fetchDosageText();
  }, [dosages, dosageUtils]);

  // Change of language
  const handleChangeLanguage = async () => {
    if (dosageUtils) {
      await dosageUtils.changeLanguage(language);
      const text = dosageUtils.fromMultipleDosageToText(dosages);
      setDosageText(text);
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as any)}
          style={{ marginRight: "10px" }}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="nl">Dutch</option>
          <option value="de">German</option>
        </select>
        <button onClick={handleChangeLanguage}>Confirm</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <CodeBlock language="markup">
          {decodeHtmlEntities(dosageText)}
        </CodeBlock>
      </div>
    </div>
  );
}
