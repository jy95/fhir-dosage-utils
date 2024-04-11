import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Editor
import JSONSchemaEditor from "@site/src/components/playground/JSONSchemaEditor";
import Details from "@theme/Details";

// Context
import { usePlaygroundContext } from "@site/src/contexts/PlaygroundContext";

function InputEditorInner(): JSX.Element {
  const {
    state: { data },
    updateState,
  } = usePlaygroundContext();
  const { colorMode } = useColorMode();

  return (
    <Details summary={<summary>Input</summary>} open={true}>
      <JSONSchemaEditor
        value={data}
        height={"70vh"}
        theme={colorMode === "dark" ? "vs-dark" : "vs"}
        editorDidMount={(editor) => {
          updateState({ inputSchemaRef: editor });
        }}
        uri={({ Uri }) => Uri.parse("input-editor")}
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
