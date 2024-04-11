import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Editor
import JSONSchemaEditor from "@site/src/components/playground/JSONSchemaEditor";
import Details from "@theme/Details";

// Context
import { usePlaygroundContext } from "@site/src/contexts/PlaygroundContext";

function ConfigEditorInner(): JSX.Element {
  const {
    state: { config },
    updateState,
  } = usePlaygroundContext();
  const { colorMode } = useColorMode();

  return (
    <Details summary={<summary>Config</summary>} open={false}>
      <JSONSchemaEditor
        value={config}
        height={"70vh"}
        theme={colorMode === "dark" ? "vs-dark" : "vs"}
        uri={({ Uri }) => Uri.parse("config-editor")}
        editorDidMount={(editor) => {
          updateState({ configSchemaRef: editor });
        }}
        onChange={(newValue) => {
          updateState({ config: newValue });
        }}
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
