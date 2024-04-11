import React from "react";
import MonacoEditor from "react-monaco-editor";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import Translate from "@docusaurus/Translate";

import InputSchema from "@site/static/schemas/input.json";
import ConfigSchema from "@site/static/schemas/config.json";

import type { JSONSchema as Draft_07 } from "json-schema-typed/draft-07";
import type { EditorWillMount, MonacoEditorProps } from "react-monaco-editor";
import type { Props as ErrorProps } from "@theme/Error";
import type { languages as MonacoLanguages } from "monaco-editor/esm/vs/editor/editor.api";

const FILEMATCH_INPUT = ["file:///input-editor"];
const FILEMATCH_CONFIG = ["file:///config-editor"];

export function LoadingLabel(): JSX.Element {
  return (
    <div>
      <Translate
        values={{
          id: "json-schema.labels.loading",
        }}
      >
        {"Loading ...."}
      </Translate>
    </div>
  );
}

export function ErrorOccurredLabel(props: { error: Error }): JSX.Element {
  const { error } = props;
  return (
    <Translate
      values={{
        id: "json-schema.labels.errorOccurred",
        message: error.message,
      }}
    >
      {"Something bad happens : {message}"}
    </Translate>
  );
}

export type Props = {
  /**
   * Id for
   */
  /**
   * Options for Monaco Editor diagnostic
   * (useful for instance to enable enableSchemaRequest)
   */
  diagnosticsOptions?: MonacoLanguages.json.DiagnosticsOptions;
} & MonacoEditorProps;

// When something bad happens
function EditorError({ error, tryAgain }: ErrorProps): JSX.Element {
  return (
    <div>
      <p>
        <ErrorOccurredLabel error={error} />
      </p>
      <button onClick={tryAgain}>Try Again!</button>
    </div>
  );
}

// Find id or generate a default one
function findOrGenerateId(schema: unknown, idx: number): string {
  let typedSchema = schema as Draft_07;

  if (typeof typedSchema === "boolean") {
    return `https://docusaurus.io/json-viewer/schema_${idx}.json`;
  }

  if (typedSchema.$id !== undefined) {
    return typedSchema.$id;
  }

  return `https://docusaurus.io/json-viewer/schema_${typedSchema.$ref || idx}.json`;
}

// Main component
function JSONSchemaEditorInner(props: Props): JSX.Element {
  const { ...editorProps } = props;

  const editorWillMount: EditorWillMount = (monaco) => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [InputSchema, ConfigSchema].map((schema, idx) => ({
        uri: findOrGenerateId(schema, idx),
        fileMatch: idx === 0 ? FILEMATCH_INPUT : FILEMATCH_CONFIG,
        schema: schema,
      })),
    });
  };

  return (
    <MonacoEditor
      height="90vh"
      language="json"
      editorWillMount={editorWillMount}
      {...editorProps}
    />
  );
}

// The public component
// Notice from https://docusaurus.io/docs/api/themes/configuration#use-color-mode
// The component calling useColorMode must be a child of the Layout component.
export default function JSONSchemaEditor(props: Props): JSX.Element {
  return (
    <BrowserOnly fallback={<LoadingLabel />}>
      {() => (
        <>
          <ErrorBoundary fallback={(props) => <EditorError {...props} />}>
            <JSONSchemaEditorInner {...props} />
          </ErrorBoundary>
        </>
      )}
    </BrowserOnly>
  );
}
