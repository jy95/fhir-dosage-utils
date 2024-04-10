import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

// Editors
import InputEditor from "@site/src/components/playground/InputEditor";
import ConfigEditor from "@site/src/components/playground/ConfigEditor";

function PlaygroundSetupInner(): JSX.Element {
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
      <InputEditor />
      <ConfigEditor />
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
