import React, { useState, useEffect } from "react";
import FhirDosageUtils from "fhir-dosage-utils";
import CodeBlock from "@theme/CodeBlock";

// Types
import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";
import type { Params as Config, I18InitOptions } from "fhir-dosage-utils";
type Dosage = DosageR4 | DosageR5;

// For the WHY, consult this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#avoid_comparing_formatted_date_values_to_static_values
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;=/g, "<=")
    .replace(/&gt;=/g, ">=")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, function (match, dec) {
      return String.fromCharCode(dec);
    })
    .replace(/&#x([0-9A-Fa-f]+);/g, function (match, hex) {
      return String.fromCharCode(parseInt(hex, 16));
    });
}

export default function SingleDosageToText({
  dosage,
  config,
  i18nConfig,
}: {
  dosage: Dosage;
  config?: Config;
  i18nConfig?: I18InitOptions;
}): JSX.Element {
  const [dosageText, setDosageText] = useState("");
  const [language, setLanguage] = useState(config?.language || "en");
  const [dosageUtils, setDosageUtils] = useState<FhirDosageUtils | null>(null);

  // Set up instance
  useEffect(() => {
    async function initializeDosageUtils() {
      const utils = await FhirDosageUtils.build(config, i18nConfig);
      setDosageUtils(utils);
    }

    initializeDosageUtils();
  }, [config]);

  // Set up translation
  useEffect(() => {
    async function fetchDosageText() {
      if (dosageUtils) {
        const text = dosageUtils.fromDosageToText(dosage);
        setDosageText(text);
      }
    }
    fetchDosageText();
  }, [dosage, dosageUtils]);

  // Change of language
  const handleChangeLanguage = async () => {
    if (dosageUtils) {
      await dosageUtils.changeLanguage(language);
      const text = dosageUtils.fromDosageToText(dosage);
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
