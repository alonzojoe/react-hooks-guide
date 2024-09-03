import React, { useRef } from "react";
import BreadCrumbs from "@/components/UI/BreadCrumbs";
import CodeEditor from "@uiw/react-textarea-code-editor";
import AlertMessage from "@/components/UI/AlertMessage";

const HookUseId = () => {
  return (
    <>
      <BreadCrumbs category="Hooks" name="useId()" />
      <h2>
        <code>useId()</code>
      </h2>
      <div className="mt-3">
        The <code>useId()</code> is a React hook that generates a unique ID
        string for accessibility purposes, ensuring that ID attributes are
        unique across server and client renders. It is particularly useful for
        associating labels with form elements or handling ARIA attributes.
      </div>
      <span className="d-block my-2">Syntax:</span>
      <CodeEditor
        value={`const uniqueId = useId(); //example output ':r1:'`}
        language="jsx"
        placeholder="Please enter JSX code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={0}
        data-color-mode="dark"
        style={{
          backgroundColor: "#161B22",
          borderRadius: "5px",
          pointerEvents: "none",
          fontSize: "15px",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
      <AlertMessage className="alert-warning p-4 my-4">
        <>
          <div className="d-flex align-items-center gap-3">
            <i class="bx bxs-message-error h4"></i>
            <h4>Warning</h4>
          </div>
          <p className="mt-1 fs-6">
            Do not use useId to generate keys in a list. Keys should be stable
            across renders, while useId is designed to create unique,
            unpredictable IDs.
          </p>
        </>
      </AlertMessage>

      <h3 className="my-4">
        Common Use Cases of <code>useId()</code>
      </h3>

      <p className="fw-semibold">Case 1: Single Input and Label Association.</p>
      <span className="d-block mb-2">
        • When creating a form input with a label, <code>useId()</code> helps in
        generating a unique ID for associating the label with the input field:
      </span>

      <CodeEditor
        value={`import React, { useId } from 'react';\n\const App = () => {\n  const inputId = useId();\n\n  return (\n    <div>\n      <label htmlFor={inputId}>Name:</label>\n      <input id={inputId} type="text" />\n    </div>\n  );\n}`}
        language="jsx"
        placeholder="Please enter JSX code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={0}
        data-color-mode="dark"
        style={{
          backgroundColor: "#161B22",
          borderRadius: "5px",
          pointerEvents: "none",
          fontSize: "15px",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </>
  );
};

export default HookUseId;
