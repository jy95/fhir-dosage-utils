import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Context
import { usePlaygroundContext } from "@site/src/contexts/PlaygroundContext";

// Multi
import MultipleDosagesToText from "@site/src/components/multiple_dosage_to_text";

// types
import type { Dosage as DosageR4 } from "fhir/r4";
import type { Dosage as DosageR5 } from "fhir/r5";
import type { Params as Config } from "fhir-dosage-utils";
type Dosage = DosageR4 | DosageR5;

// to turn string into object / array
function turnStringToData<T>(stringifiedJson: string, defaultValue: T): T {
  try {
    let json = JSON.parse(stringifiedJson);
    return json;
  } catch (error) {
    return defaultValue;
  }
}

function OutputVisualizerInner(): JSX.Element {
  const {
    state: { data: dataString, config: configString },
  } = usePlaygroundContext();

  const styles = {
    toolbar: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "8px",
      backgroundColor: "inherit",
    },
  };

  const data = turnStringToData<Dosage[]>(dataString, []);
  const config = turnStringToData<Config>(configString, {});

  return (
    <div style={{ boxSizing: "border-box", width: "50%" }}>
      <div style={styles.toolbar}>
        <h1>Output</h1>
        &nbsp;
        <div style={{ flex: 1 }} />
      </div>
      <div>
        {data.length > 0 && (
          <>
            <MultipleDosagesToText dosages={data} config={config} />
          </>
        )}
      </div>
    </div>
  );
}

export default function OutputVisualizerComponent(): JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <OutputVisualizerInner />;
      }}
    </BrowserOnly>
  );
}
