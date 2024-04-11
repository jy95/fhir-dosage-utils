import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

import PlaygroundSetup from "@site/src/components/playground/PlaygroundSetup";
import OutputVisualizer from "@site/src/components/playground/OutputVisualizer";

import { PlaygroundContextProvider } from "@site/src/contexts/PlaygroundContext";

// JSON
import SamplePayload from "@site/static/playgroundDemo.json";

// Type I need for useRef
import type { State as PlaygroundState } from "@site/src/contexts/PlaygroundContext";

function PlaygroundInner(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <PlaygroundSetup />
        <OutputVisualizer />
      </div>
    </div>
  );
}

function StateProvider(): JSX.Element {
  const [state, setState] = React.useState({
    data: JSON.stringify(SamplePayload, null, "\t"),
    config: "{}",
  } as PlaygroundState);

  // define a function to update the state
  function updateState(newState: Partial<PlaygroundState>) {
    setState((prevState) => ({ ...prevState, ...newState }));
  }

  return (
    <PlaygroundContextProvider value={{ state, updateState }}>
      <PlaygroundInner />
    </PlaygroundContextProvider>
  );
}

export default function PlaygroundComponent(): JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <StateProvider />;
      }}
    </BrowserOnly>
  );
}
