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

function LoadingAnimation(): JSX.Element {
  const styles = `
    .loading-animation {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 3px solid #ccc;
      border-top-color: #333;
      border-radius: 50%;
      animation: spin 1s infinite linear; /* Infinite animation */
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  React.useLayoutEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="loading-animation">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
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
        {data.length === 0 && <LoadingAnimation />}
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
