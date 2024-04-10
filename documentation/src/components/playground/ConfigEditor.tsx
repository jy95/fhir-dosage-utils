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

function ConfigEditorInner(): JSX.Element {
  const {
    state: { config, configSchema },
    updateState,
  } = usePlaygroundContext();
  const { colorMode } = useColorMode();

  return (
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
  );
}

export default function ConfigEditorComponent(): JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <ConfigEditorInner />;
      }}
    </BrowserOnly>
  );
}
