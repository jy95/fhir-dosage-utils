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

function InputEditorInner(): JSX.Element {
  const {
    state: { data, inputSchema },
    updateState,
  } = usePlaygroundContext();
  const { colorMode } = useColorMode();

  return (
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
  );
}

export default function InputEditorComponent(): JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <InputEditorInner />;
      }}
    </BrowserOnly>
  );
}
