import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Editor
import JSONSchemaEditor from "@theme/JSONSchemaEditor";
import Details from "@theme/Details";

// Context
import { usePlaygroundContext } from "@site/src/contexts/PlaygroundContext";

// Common stringify of the JSON
const STRINGIFY_JSON = (json: unknown) => JSON.stringify(json, null, "\t");

function PlaygroundSetupInner(): JSX.Element {
  const {
    state: {
      data,
      config,
      configSchema,
      inputSchema,
    },
    updateState,
  } = usePlaygroundContext();
  const { colorMode } = useColorMode();

  const styles = {
    toolbar: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "8px",
      backgroundColor: "inherit",
    },
  };

  return (
    <div style={{ boxSizing: "border-box", width: "50%" }}>
      <div style={styles.toolbar}>
        <h1>Setup</h1>
        &nbsp;
        <div style={{ flex: 1 }} />
      </div>
      <Details summary={<summary>Input</summary>} open={true}>
        <JSONSchemaEditor
          value={data}
          schema={inputSchema}
          height={"70vh"}
          theme={colorMode === "dark" ? "vs-dark" : "vs"}
          editorDidMount={(editor) => {
            updateState({ inputSchemaRef: editor });
          }}
          key={STRINGIFY_JSON(inputSchema)}
        />
      </Details>
      <Details summary={<summary>Config</summary>} open={false}>
        <JSONSchemaEditor
          value={config}
          schema={configSchema}
          height={"70vh"}
          theme={colorMode === "dark" ? "vs-dark" : "vs"}
          editorDidMount={(editor) => {
            updateState({ configSchemaRef: editor });
          }}
          key={STRINGIFY_JSON(configSchema)}
        />
      </Details>
    </div>
  );
}

export default function PlaygroundSetupComponent(): JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <PlaygroundSetupInner />;
      }}
    </BrowserOnly>
  );
}
