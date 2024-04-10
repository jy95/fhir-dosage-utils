import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Editor
import JSONSchemaEditor from "@theme/JSONSchemaEditor";
import Details from "@theme/Details";

// Context
import { usePlaygroundContext } from "@site/src/contexts/PlaygroundContext";

// Type I need for useRef
import type { MonacoEditorTypes } from "@theme/MonacoEditor";

function PlaygroundSetupInner(): JSX.Element {
  const {
    state: {
      data,
      config,
      configSchemaRef,
      inputSchemaRef,
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
          theme={colorMode === "dark" ? "vs-dark" : "vs"}
          editorDidMount={(editor) => {
            updateState({ inputSchemaRef: editor });
          }}
        />
      </Details>
      <Details summary={<summary>Config</summary>} open={false}>
        <JSONSchemaEditor
          value={config}
          schema={configSchema}
          theme={colorMode === "dark" ? "vs-dark" : "vs"}
          editorDidMount={(editor) => {
            updateState({ configSchemaRef: editor });
          }}
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
