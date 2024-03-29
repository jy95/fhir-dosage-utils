import React, { useState, useEffect } from "react";
import FhirDosageUtils from "fhir-dosage-utils";

// Types
import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";
import type { Params as Config } from "fhir-dosage-utils";
type Dosage = DosageR4 | DosageR5;

// For the WHY, consult this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#avoid_comparing_formatted_date_values_to_static_values
function decodeHtmlEntities(text: string): string {
  return text
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
}: {
  dosage: Dosage;
  config?: Config;
}): JSX.Element {
  const [dosageText, setDosageText] = useState("");
  const [language, setLanguage] = useState(config?.language || "en");
  const [dosageUtils, setDosageUtils] = useState<FhirDosageUtils | null>(null);

  // Set up instance
  useEffect(() => {
    async function initializeDosageUtils() {
      const utils = await FhirDosageUtils.build(config);
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
          <option value="en" selected={language === "en"}>
            English
          </option>
          <option value="fr" selected={language === "fr"}>
            French
          </option>
          <option value="nl" selected={language === "nl"}>
            Dutch
          </option>
          <option value="de" selected={language === "de"}>
            German
          </option>
        </select>
        <button onClick={handleChangeLanguage}>Confirm</button>
      </div>
      <pre style={{ marginTop: "10px" }}>
        <p>{decodeHtmlEntities(dosageText)}</p>
      </pre>
    </div>
  );
}
