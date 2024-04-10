import { useContext, createContext } from "react";

// Type I need for useRef
import type { MonacoEditorTypes } from "@theme/MonacoEditor";

export type State = {
  // The Input schema
  inputSchema: unknown;
  // The Config schema
  configSchema: unknown;
  // Data editor ref
  inputSchemaRef: undefined | MonacoEditorTypes.IStandaloneCodeEditor;
  // Config editor ref
  configSchemaRef: undefined | MonacoEditorTypes.IStandaloneCodeEditor;
  // Data on the data editor
  // When using "Infer schema from data", it would be annoying to lose our written
  data: string;
  // Data on the data editor
  // When using "Infer schema from data", it would be annoying to lose our written
  config: string;
};

export type Playground = {
  // state
  state: State;
  // update function
  updateState: (_: Partial<State>) => void;
};

export const PlaygroundContext = createContext<Playground>({
  state: {
    inputSchema: {},
    configSchema: {},
    data: "{}",
    config: "{}",
    inputSchemaRef: undefined,
    configSchemaRef: undefined,
  },
  updateState: () => {},
});

export const usePlaygroundContext = () => useContext(PlaygroundContext);

export const PlaygroundContextProvider = PlaygroundContext.Provider;
